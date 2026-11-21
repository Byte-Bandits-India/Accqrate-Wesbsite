import loadable from '@loadable/component'
import { Input } from 'antd'
import React, { memo } from 'react'
import { arabicRegex } from '@/lib/Options'
import useDebounceEffect from '@/hooks/useDebounceEffect'
import type { InputValueType, TTextArea } from '@/lib/types'

const AltInput = loadable(() => import(/* webpackPrefetch: true */ '@/components/AltInput'))
const { TextArea: TextAreaField } = Input

const TextArea = ({
  rows = 1,            // ✅ default value set here
  delay = 500,         // ✅ default value set here
  onChange,
  onChangeAlt,
  onBlur,
  label,
  error,
  required,
  value,
  hideLabel,
  altValue,
  altInput,
  ...props
}: TTextArea) => {
  const [val, setValue] = useDebounceEffect(
    (v: InputValueType) => onChange?.(props.name, v),
    value,
    delay
  )

  return (
    <div className="custom-input-box position-relative">
      {label && !hideLabel && (
        <label style={{ textAlign: 'left', width: 'fit-content' }}>
          {label} {required && <span className="required">*</span>}
        </label>
      )}

      {altInput && (
        <AltInput
          {...props}
          {...{ label, hideLabel, altValue, altInput, onChange: onChangeAlt }}
        />
      )}

      <TextAreaField
        rows={rows}
        onChange={(e) => {
          if (!props.disabled && onChange) {
            setValue(e.target.value)
          }
        }}
        onBlur={() => onBlur?.(props.name, val)}
        value={val}
        dir={arabicRegex.test(val?.toString()) ? 'rtl' : 'ltr'}
        {...props}
      />

      {error && (
        <div style={{ fontSize: 10, color: 'red', textAlign: 'right' }}>
          {error.replace(props.name, label || props.placeholder || '')}
        </div>
      )}
    </div>
  )
}

export default memo(TextArea)
