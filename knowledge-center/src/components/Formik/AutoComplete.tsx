"use client";

import { ScanOutlined } from "@ant-design/icons";
import loadable from "@loadable/component";
import { AutoComplete as AutoCompleteField, Input } from "antd";
import type { SelectProps } from "antd";
import { getIn } from "formik";
import React, { memo, useState } from "react";
import { arabicRegex } from "@/lib/Options";
import useDebounceEffect from "@/hooks/useDebounceEffect";
import useDidUpdateEffect from "@/hooks/useDidUpdateEffect";
import apiClient from "@/components/Util/apiClient";
import { convertSelectOptions, removeEmptyKeys } from "../../Util/Util";
import type { TAutoComplete } from "./types";

const AltInput = loadable(() => import("@/components/AltInput"));
const ScanModal = loadable(() => import("./ScanModal"));

interface OptionType {
  label: string;
  value: string | number;
}

interface FixedAutoCompleteProps extends TAutoComplete {
  delay?: number;
  options?: OptionType[];
}

const AutoComplete: React.FC<FixedAutoCompleteProps> = ({
  label,
  error,
  required,
  onChange,
  onChangeAlt,
  onScan,
  onSearch,
  onBlur,
  onSelect,
  defaultScan,
  textArea,
  rows,
  style,
  value,
  delay = 100,
  hideLabel,
  altValue,
  altInput,
  endPoint,
  params,
  optionLabel = "name",
  optionValue = "id",
  queryName,
  options: propOptions,
  scanInput,
  scanType,
  ...props
}) => {
  const [val, setValue] = useDebounceEffect(
    (v: string | undefined) => onSearch?.(v || ""),
    value,
    delay
  );
  const [internalOptions, setInternalOptions] = useState<OptionType[]>([]);
  const [scanModal, setScanModal] = useState<boolean>(defaultScan ?? false);

  useDidUpdateEffect(() => {
    if (endPoint) {
      onSearchFilter(val || "");
    }
  }, [val, params]);

  const onSearchFilter = (v: string) => {
    if (v) {
      const updatedParams = removeEmptyKeys(params || {});
      const queryParams = { ...updatedParams, [queryName || props.name]: v };
      apiClient
        .get<{ result: any[] }>(endPoint || "", { params: queryParams })
        .then(({ data }) => {
          if (data && data.result) {
            setInternalOptions(
              convertSelectOptions(data.result || [], optionLabel, optionValue)
            );
          }
        })
        .catch(() => setInternalOptions([]))
    } else {
      setInternalOptions([]);
    }
  };

  const options = propOptions || internalOptions;

  const changedValue =
    getIn(
      options?.find((item) => item.value === val),
      "label",
      ""
    ) || val;

  const inputProps = {
    dir: arabicRegex.test(changedValue?.toString()) ? "rtl" : "ltr",
    ...(scanInput && {
      suffix: <ScanOutlined onClick={() => setScanModal(true)} />,
    }),
  };

  return (
    <div className="custom-input-box position-relative">
      {label && !hideLabel && (
        <label style={{ textAlign: "left", width: "fit-content" }}>
          {label} {required && <span className="required">*</span>}
        </label>
      )}

      {scanModal && (
        <ScanModal
          {...props}
          {...{ label, hideLabel, scanType, onChange: onScan }}
          onClose={() => setScanModal(false)}
        />
      )}

      {altInput && (
        <AltInput
          {...props}
          {...{ label, hideLabel, altValue, altInput, onChange: onChangeAlt }}
        />
      )}

      <AutoCompleteField
        style={{ width: "100%", ...style }}
        onSearch={setValue}
        onChange={(v) => {
          if (!v) onChange?.(props.name, v);
        }}
        onSelect={(v, option) => {
          onSelect?.(v, option);
          onChange?.(props.name, v, option);
        }}
        filterOption={(input, option) =>
          (option?.label as string)
            ?.toLowerCase?.()
            .includes(input.toLowerCase())
        }
        onBlur={() => onBlur?.(props.name, val || "")}
        value={changedValue}
        options={options.map((item) => ({
          label: item.label,
          value: item.value,
        }))}
        {...(props as SelectProps)}
      >
        {textArea ? (
          <Input.TextArea rows={rows} {...inputProps} />
        ) : (
          <Input {...inputProps} />
        )}
      </AutoCompleteField>

      {error && (
        <div style={{ fontSize: 10, color: "red", textAlign: "right" }}>
          {error.replace(props.name, label || props.placeholder || "")}
        </div>
      )}
    </div>
  );
};

export default memo(AutoComplete);
