import loadable from '@loadable/component'
import {
  FastField as FormikFastField,
  Field as FormikField,
  FormikState,
  FormikValues,
  getIn,
  useFormikContext
} from 'formik'
import React, { memo } from 'react'
import type {
  TAttachment,
  TAutoComplete,
  TCheckbox,
  TDatePicker,
  TDateRangePicker,
  TDurationPicker,
  TInput,
  TInputChip,
  TRadioGroup,
  TRichText,
  TSelect,
  TTextArea
} from './types'

const Attachment = loadable(() => import(/* webpackPrefetch: true */ './Attachment'))
const AutoComplete = loadable(() => import(/* webpackPrefetch: true */ './AutoComplete'))
const Checkbox = loadable(() => import(/* webpackPrefetch: true */ './Checkbox'))
const DatePicker = loadable(() => import(/* webpackPrefetch: true */ './DatePicker'))
const DateRangePicker = loadable(() => import(/* webpackPrefetch: true */ './DateRangePicker'))
const DurationPicker = loadable(() => import(/* webpackPrefetch: true */ './DurationPicker'))
const Input = loadable(() => import(/* webpackPrefetch: true */ './Input'))
const InputChip = loadable(() => import(/* webpackPrefetch: true */ './InputChip'))
const PagedSelect = loadable(() => import(/* webpackPrefetch: true */ './PagedSelect'))
const RadioGroup = loadable(() => import(/* webpackPrefetch: true */ './RadioGroup'))
const RichText = loadable(() => import(/* webpackPrefetch: true */ './RichText'))
const Select = loadable(() => import(/* webpackPrefetch: true */ './Select'))
const TextArea = loadable(() => import(/* webpackPrefetch: true */ './TextArea'))

// Fix the TInput type to make required props optional since Formik handles them
type TFieldAs =
  | ({
    as: 'auto-complete'
  } & Omit<TAutoComplete, 'value' | 'delay' | 'onChange' | 'onBlur'>)
  | ({
    as: 'checkbox'
  } & Omit<TCheckbox, 'value' | 'delay' | 'onChange' | 'onBlur'>)
  | ({
    as: 'radio-group'
  } & Omit<TRadioGroup, 'value' | 'delay' | 'onChange' | 'onBlur'>)
  | ({
    as: 'date'
  } & Omit<TDatePicker, 'value' | 'delay' | 'onChange' | 'onBlur'>)
  | ({
    as: 'date-range'
  } & Omit<TDateRangePicker, 'value' | 'delay' | 'onChange' | 'onBlur'>)
  | ({
    as: 'textarea'
  } & Omit<TTextArea, 'value' | 'delay' | 'onChange' | 'onBlur'>)
  | ({
    as: 'select'
  } & Omit<TSelect, 'value' | 'delay' | 'onChange' | 'onBlur'>)
  | ({
    as: 'paged-select'
  } & Omit<TSelect, 'value' | 'delay' | 'onChange' | 'onBlur'>)
  | ({
    as: 'input-chip'
  } & Omit<TInputChip, 'value' | 'delay' | 'onChange' | 'onBlur'>)
  | ({
    as: 'rich-text'
  } & Omit<TRichText, 'value' | 'delay' | 'onChange' | 'onBlur'>)
  | ({
    as: 'duration'
  } & Omit<TDurationPicker, 'value' | 'delay' | 'onChange' | 'onBlur'>)
  | ({
    as: 'attachment'
  } & Omit<TAttachment, 'value' | 'delay' | 'onChange' | 'onBlur'>)
  | ({
    as?: 'input'
  } & Omit<Partial<TInput>, 'value' | 'delay' | 'onChange' | 'onBlur'>)

type TField = {
  name: string
  fast?: boolean
} & TFieldAs

function Field({ name, fast, as = 'input', ...props }: TField) {
  const { values, errors, touched, setFieldValue } = useFormikContext<FormikState<FormikValues>>()

  let Component

  if (fast) {
    Component = FormikFastField
  } else {
    Component = FormikField
  }

  return (
    <Component
      as={(() => {
        switch (as) {
          case 'auto-complete':
            return AutoComplete
          case 'textarea':
            return TextArea
          case 'select':
            return Select
          case 'paged-select':
            return PagedSelect
          case 'checkbox':
            return Checkbox
          case 'radio-group':
            return RadioGroup
          case 'date':
            return DatePicker
          case 'date-range':
            return DateRangePicker
          case 'input-chip':
            return InputChip
          case 'rich-text':
            return RichText
          case 'duration':
            return DurationPicker
          case 'attachment':
            return Attachment
          default:
            return Input
        }
      })()}
      name={name}
      error={getIn(touched, name) && getIn(errors, name)}
      value={getIn(values, name)}
      onChange={setFieldValue}
      onChangeAlt={setFieldValue}
      required={Boolean(getIn(errors, name))}
      {...(['auto-complete', 'input'].includes(as) && {
        onScan: setFieldValue
      })}
      {...(['auto-complete', 'textarea', 'input', 'select', 'date'].includes(as) && {
        altValue: getIn(values, `${name}Alt`)
      })}
      {...props}
    />
  )
}

export default memo(Field)