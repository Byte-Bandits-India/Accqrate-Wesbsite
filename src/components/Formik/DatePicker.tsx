"use client";

import loadable from "@loadable/component";
import { DatePicker as DatePickerField } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import React, { memo } from "react";
import { checkMoment } from "@/Util/Util";
import type { TDatePicker } from "./types";

const AltInput = loadable(() => import("@/components/AltInput"));

interface FixedDatePickerProps
  extends Omit<TDatePicker, "onChange" | "onBlur" | "value"> {
  value?: Dayjs | null;
  onChange?: (name: string, value: Dayjs | null) => void;
  onBlur?: (name: string, value: Dayjs | null) => void;
}

function DatePicker({
  label,
  error,
  required,
  onChange,
  onChangeAlt,
  onBlur,
  value,
  style,
  hideLabel,
  altValue,
  altInput,
  ...props
}: FixedDatePickerProps) {
  // ✅ Properly handle AntD’s onBlur event type
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement> | React.SyntheticEvent
  ) => {
    const input = e.target as HTMLInputElement;
    if (props.showTime && input?.value) {
      const parsed = dayjs(input.value);
      if (parsed.isValid()) {
        onChange?.(props.name, parsed);
      }
    }
    onBlur?.(props.name, value || null);
  };

  return (
    <div className="position-relative">
      {label && !hideLabel && (
        <label style={{ textAlign: "left", width: "fit-content" }}>
          {label} {required && <span className="required">*</span>}
        </label>
      )}

      {altInput && (
        <AltInput
          {...props}
          {...{ label, hideLabel, altValue, altInput, onChange: onChangeAlt }}
        />
      )}

      <DatePickerField
        style={{ width: "100%", ...style }}
        onChange={(val) => onChange?.(props.name, val)}
        // ✅ Explicitly cast to correct event type expected by AntD
        onBlur={(e) => handleBlur(e as unknown as React.FocusEvent<HTMLInputElement>)}
        value={value ? dayjs(value) : null}
        {...props}
      />

      {error && (
        <div style={{ fontSize: 10, color: "red", textAlign: "right" }}>
          {error.replace(props.name, label || "")}
        </div>
      )}
    </div>
  );
}

export default memo(DatePicker);
