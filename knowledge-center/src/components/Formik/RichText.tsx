import React, { memo } from 'react'
import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css'
import useDebounceEffect from '@/hooks/useDebounceEffect'
import type { TRichText } from '@/lib/types'

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }],
    [{ indent: '-1' }, { indent: '+1' }],
    [{ direction: 'rtl' }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ['clean']
  ]
}

const RichText = ({
  value,
  delay = 500, // ✅ Default delay set here
  label,
  hideLabel,
  required,
  onChange,
  error,
  ...props
}: TRichText) => {
  const [val, setValue] = useDebounceEffect((v: string) => onChange?.(props.name, v), value, delay)

  return (
    <div>
      {label && !hideLabel && (
        <label style={{ textAlign: 'left', width: 'fit-content' }}>
          {label} {required && <span className="required">*</span>}
        </label>
      )}

      <ReactQuill
        value={val}
        modules={modules}
        onChange={(text) => setValue(text)}
      />

      {error && (
        <div style={{ fontSize: 10, color: 'red', textAlign: 'right' }}>
          {error.replace(props.name, label || '')}
        </div>
      )}
    </div>
  )
}

export default memo(RichText)
