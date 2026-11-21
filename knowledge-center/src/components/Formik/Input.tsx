import { EyeInvisibleOutlined, EyeTwoTone, ScanOutlined } from '@ant-design/icons'
import loadable from '@loadable/component'
import { Input as InputField } from 'antd'
import React, { memo, useState } from 'react'
import { arabicRegex } from '@/lib/Options'
import useDebounceEffect from '@/hooks/useDebounceEffect'
import { parseAmount } from '../../Util/Util'
import type { InputValueType, TInput } from '@/lib/types'

const AltInput = loadable(() => import(/* webpackPrefetch: true */ '../AltInput'))
const ScanModal = loadable(() => import(/* webpackPrefetch: true */ './ScanModal'))

const Input = ({
  onChange,
  onChangeAlt,
  onBlur,
  onScan,
  label,
  prefix,
  suffix,
  type,
  error,
  required,
  value,
  delay,
  defaultScan,
  scanInput,
  scanType,
  hideLabel,
  altValue,
  altInput,
  ...props
}: TInput & typeof defaultProps) => {
  const [showText, setShowText] = useState(false)
  const [scanModal, setScanModal] = useState(defaultScan)

  const parseValue = (value: string | number): string | number => {
    if (type === 'number') {
      const floatValue = parseFloat(String(value))

      return value
        ? !Number.isNaN(floatValue)
          ? Number.isInteger(floatValue)
            ? floatValue
            : parseFloat(parseAmount(floatValue, undefined, true)) // ✅ Fixed: use boolean values
          : ''
        : ''
    }

    return value
  }

  const [val, setValue] = useDebounceEffect(
    (v: InputValueType) => onChange?.(props.name, v),
    parseValue(value as string),
    delay
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!props.disabled && onChange) {
      if (type === 'number') {
        setValue(parseValue(e.target.value))
      } else {
        setValue(e.target.value)
      }
    }
  }

  if (scanInput) {
    suffix = <ScanOutlined onClick={() => setScanModal(true)} />
  }

  return (
    <div className="custom-input-box position-relative">
      {label && !hideLabel && (
        <label style={{ textAlign: 'left', width: 'fit-content' }}>
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
        <AltInput {...props} {...{ label, hideLabel, altValue, altInput, onChange: onChangeAlt }} />
      )}

      <InputField
        type={type === 'password' ? (showText ? 'text' : 'password') : type || 'text'}
        prefix={prefix && typeof prefix === 'string' ? <i className={prefix} /> : prefix}
        suffix={
          type === 'password' ? (
            showText ? (
              <EyeTwoTone onClick={() => setShowText(false)} />
            ) : (
              <EyeInvisibleOutlined onClick={() => setShowText(true)} />
            )
          ) : (
            suffix
          )
        }
        onChange={handleChange}
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

const defaultProps = {
  type: 'text',
  delay: 500
}

Input.defaultProps = defaultProps

export default memo(Input)