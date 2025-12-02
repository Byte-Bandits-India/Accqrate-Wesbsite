import { Modal } from 'antd'
import type { ModalProps } from 'antd'
import React from 'react'

interface ModalBoxProps extends ModalProps { }

const ModalBox = ({
  width = 600,
  maskClosable = false,
  children,
  ...rest
}: ModalBoxProps) => {
  return (
    <Modal width={width} maskClosable={maskClosable} {...rest}>
      {children}
    </Modal>
  )
}

export default ModalBox
