"use client";

import React, { memo } from "react";
import { DatePicker } from "antd";
import type { Dayjs } from "dayjs";
import { checkMoment } from "@/Util/Util";
import type { TDateRangePicker } from "./types";

const { RangePicker } = DatePicker;

// ✅ Omit conflicting onChange/onBlur types from TDateRangePicker
interface FixedDateRangePickerProps
  extends Omit<TDateRangePicker, "onChange" | "onBlur" | "value"> {
  value?: [Dayjs | null, Dayjs | null] | null;
  onChange?: (name: string, value: [Dayjs | null, Dayjs | null] | null) => void;
  onBlur?: (name: string, value: [Dayjs | null, Dayjs | null] | null) => void;
}

function DateRangePicker({
  label,
  error,
  required,
  onChange,
  onBlur,
  value,
  style,
  hideLabel,
  ...props
}: FixedDateRangePickerProps) {
  const handleChange = (val: [Dayjs | null, Dayjs | null] | null) => {
    onChange?.(props.name, val);
  };

  const handleBlur = () => {
    onBlur?.(props.name, value || null);
  };

  return (
    <div>
      {label && !hideLabel && (
        <label>
          {label} {required && <span className="required">*</span>}
        </label>
      )}

      <RangePicker
        style={{ width: "100%", ...style }}
        onChange={handleChange}
        onBlur={handleBlur}
        value={
          value
            ? [checkMoment(value[0]) as Dayjs, checkMoment(value[1]) as Dayjs]
            : null
        }
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

export default memo(DateRangePicker);
