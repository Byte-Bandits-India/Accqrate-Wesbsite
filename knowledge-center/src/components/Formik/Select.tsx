import loadable from '@loadable/component'
import { Select as SelectField } from 'antd'
import React, { memo } from 'react'
import type { TSelect } from '@/lib/types'

const AltInput = loadable(() => import(/* webpackPrefetch: true */ '../AltInput'))

const { Option } = SelectField

function Select({
  label,
  options = [],
  error,
  required,
  withNone,
  style,
  onChange,
  onChangeAlt,
  onBlur,
  onSelect,
  hideLabel,
  altValue,
  altInput,
  ...props
}: TSelect) {
  return (
    <div className="position-relative">
      {label && !hideLabel && (
        <label style={{ textAlign: 'left', width: 'fit-content' }}>
          {label} {required && <span className="required">*</span>}
        </label>
      )}
      {altInput && (
        <AltInput {...props} {...{ label, hideLabel, altValue, altInput, onChange: onChangeAlt }} />
      )}
      <SelectField
        showSearch
        style={{
          width: '100%',
          ...style
        }}
        filterOption={(input, option) =>
          String(option?.children)?.toLowerCase?.().indexOf(input.toLowerCase()) >= 0
        }
        onChange={(value = '') =>
          onChange?.(
            props.name,
            value,
            options?.find((item) => item.value === value)
          )
        }
        onBlur={() => onBlur?.(props.name, props.value || '')}
        onSelect={(v) =>
          onSelect?.(
            v,
            options?.find((item) => item.value === v)
          )
        }
        {...props}>
        {withNone && (
          <Option key="" value="">
            None
          </Option>
        )}
        {options.map((data) => (
          <Option key={data.value} value={data.value}>
            {data.label}
          </Option>
        ))}
      </SelectField>
      {error && (
        <div style={{ fontSize: 10, color: 'red', textAlign: 'right' }}>
          {error.replace(props.name, label || props.placeholder || '')}
        </div>
      )}
    </div>
  )
}

export default memo(Select)
