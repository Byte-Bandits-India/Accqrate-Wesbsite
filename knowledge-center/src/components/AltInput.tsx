import { Input as InputField, Modal } from 'antd'
import React, { useState } from 'react'
import { arabicRegex } from '@/lib/Options'
import type { AltInputTypes, InputValueType } from '@/lib/types'

type TAltInput = {
  name: string
  label?: string
  hideLabel?: boolean
  disabled?: boolean
  onChange?: (name: string, value: InputValueType) => void
} & AltInputTypes

export default function AltInput({ name, altValue, onChange, label, hideLabel, disabled }: TAltInput) {
  const [altText, setAltText] = useState(altValue || '')
  const [toggle, setToggle] = useState(false)

  const onOk = () => {
    onChange?.(`${name}Alt`, altText)
    setToggle(false)
  }

  const oncancel = () => {
    setAltText(altText)
    setToggle(false)
  }

  return (
    <>
      <i
        title="Add alternate text"
        className="flaticon-plus"
        style={{
          float: 'right',
          color: altValue ? '#73cb57' : '#a3a3a3',
          cursor: 'pointer',
          ...(hideLabel && { position: 'absolute', top: '-19px', right: '0px' })
        }}
        onClick={() => {
          setToggle(true)
          setAltText(altValue || '')
        }}
      />
      <Modal
        visible={toggle}
        title={`Alternate ${label}`}
        onOk={onOk}
        onCancel={oncancel}
        maskClosable={false}
        destroyOnClose>
        <InputField
          disabled={disabled}
          value={altText}
          dir={arabicRegex.test(altText?.toString()) ? 'rtl' : 'ltr'}
          onChange={(e) => setAltText(e.target.value)}
        />
      </Modal>
    </>
  )
}
