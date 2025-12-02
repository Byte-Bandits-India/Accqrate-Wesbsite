import type { Moment } from 'moment'
import type {
  AutoCompleteProps,
  CheckboxProps,
  DatePickerProps,
  InputProps,
  RadioGroupProps,
  SelectProps,
} from 'antd'
import type { TextAreaProps } from 'antd/es/input'
import type { RangePickerProps } from 'antd/es/date-picker'
import type { DefaultOptionType } from 'antd/es/select'

// ✅ Define RangeValue manually (since rc-picker stopped exporting it)
export type RangeValue<T = Moment> = [T | null, T | null] | null

// ✅ Unified input value type
export type InputValueType = string | ReadonlyArray<string> | number

// -------------------------------------
// 💠 Common Utility Types
// -------------------------------------
export type AltInputTypes = {
  altValue?: InputValueType
  altInput?: boolean
}

export type ScanInputTypes = {
  scanType?: 'qrcode' | 'barcode'
  scanInput?: boolean
  defaultScan?: boolean
  onScan?: (name: string, value: string) => void
}

type BaseFormikTypes = {
  name: string
  label?: string
  error?: string
  required?: boolean
  hideLabel?: boolean
  onChangeAlt?: (name: string, value: InputValueType) => void
} & AltInputTypes

// -------------------------------------
// 🧩 Input Field Types
// -------------------------------------
export type TInput = {
  placeholder?: string
  max?: number
  min?: number
  prefix?: string | Element
  value: InputValueType
  delay: number
  onChange?: (name: string, value: InputValueType) => void
  onBlur?: (name: string, value: InputValueType) => void
} & BaseFormikTypes &
  ScanInputTypes &
  Omit<InputProps, 'onChange' | 'onBlur' | 'value'>

export type TInputChip = {
  placeholder?: string
  max?: number
  min?: number
  prefix?: string
  suffix?: string
  value: Array<string>
  delay: number
  emailValidation?: boolean
  onChange?: (name: string, value: InputValueType) => void
  onBlur?: (name: string, value: InputValueType) => void
} & BaseFormikTypes &
  Omit<InputProps, 'onChange' | 'onBlur' | 'value'>

export type TTextArea = {
  placeholder?: string
  value: InputValueType
  delay: number
  onChange?: (name: string, value: InputValueType) => void
  onBlur?: (name: string, value: InputValueType) => void
} & BaseFormikTypes &
  Omit<TextAreaProps, 'onChange' | 'onBlur' | 'type' | 'value'>

// -------------------------------------
// 🧩 Select & AutoComplete
// -------------------------------------
interface ISelect<VT>
  extends Omit<SelectProps<VT>, 'onChange' | 'onBlur' | 'onSelect'> {
  placeholder?: string
  withNone?: boolean
  options?: DefaultOptionType[]
  endPoint?: string
  optionLabel?: string
  searchKey?: string
  defaultOptions?: DefaultOptionType[]
  optionValue?: string
  onChange?: (
    name: string,
    value: VT,
    option?: DefaultOptionType | DefaultOptionType[]
  ) => void
  onBlur?: (name: string, value: VT) => void
  onSelect?: (value: VT, option?: DefaultOptionType) => void
  params?: Record<string, unknown>
}

export type TSelect = ISelect<string | number> & BaseFormikTypes

export type TAutoComplete = {
  placeholder?: string
  textArea?: boolean
  rows?: number
  delay?: number
  endPoint?: string
  params?: Record<string, unknown>
  optionLabel?: string
  optionValue?: string
  queryName?: string
  onChange?: (
    name: string,
    value: InputValueType,
    option?: DefaultOptionType | DefaultOptionType[]
  ) => void
  onBlur?: (name: string, value: InputValueType) => void
  onSelect?: (value: InputValueType, option?: DefaultOptionType) => void
} & BaseFormikTypes &
  ScanInputTypes &
  Omit<AutoCompleteProps, 'onChange' | 'onBlur' | 'onSelect'>

// -------------------------------------
// 🧩 Date Pickers
// -------------------------------------
export type TDatePicker = {
  showTime?: boolean
  onChange?: (name: string, value: Moment | null) => void
  onBlur?: (name: string, value: Moment | null) => void
} & BaseFormikTypes &
  Omit<DatePickerProps, 'onChange' | 'onBlur'>

export type TDateRangePicker = {
  onChange?: (name: string, value: RangeValue<Moment>) => void
  onBlur?: (name: string, value: RangeValue<Moment>) => void
} & BaseFormikTypes &
  Omit<RangePickerProps, 'onChange' | 'onBlur'>

// -------------------------------------
// 🧩 Other Inputs
// -------------------------------------
export type TCheckbox = {
  value: boolean
  onChange?: (name: string, value: boolean) => void
} & BaseFormikTypes &
  Omit<CheckboxProps, 'onChange'>

export type TRichText = {
  name: string
  value: string
  delay: number
  onChange?: (name: string, value: string) => void
} & BaseFormikTypes

export type TRadioGroup = {
  value: string
  options: Array<{ label: string; value: string }>
  onChange?: (name: string, value: string) => void
} & BaseFormikTypes &
  Omit<RadioGroupProps, 'onChange'>

export type TDurationPicker = {
  value: number
  onChange?: (name: string, value: number) => void
} & BaseFormikTypes

export type TAttachment = {
  title?: string
  value: string[]
  description?: string
  endPoint?: string
  readOnly?: boolean
  fileObj?: boolean
  fileLength?: number
  size?: number
  noPreview?: boolean
  disabled?: boolean
  acceptFile: ('excel' | 'pdf' | 'image')[]
  onChange?: (name: string, value: string[]) => void
} & BaseFormikTypes
