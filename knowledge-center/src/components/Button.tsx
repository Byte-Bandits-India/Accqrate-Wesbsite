'use client'

import React from 'react'
import clsx from 'clsx'
import { ArrowRight } from 'iconsax-react'

type ButtonHTMLType = 'button' | 'submit' | 'reset'

export interface TButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  htmlType?: ButtonHTMLType
  variant?: 'default' | 'primary' | 'dashed' | 'link' | 'text'
  success?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  rightArrowIcon?: boolean
  label?: string | React.ReactNode
  ghost?: boolean
  id?: string
  children?: React.ReactNode
}

export default function Button({
  htmlType = 'button',
  variant = 'default',
  className,
  leftIcon,
  rightIcon,
  rightArrowIcon,
  success,
  label,
  ghost,
  id,
  children,
  ...props
}: TButton) {
  const content = children || label

  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-full px-5 py-2 transition-all duration-200 focus:outline-none'

  const variantStyles: Record<string, string> = {
    default: 'bg-[#E6E6E6] text-gray-900 hover:bg-gray-300',
    primary: 'bg-[#1A4BED] text-white hover:bg-[#173fd0] active:bg-[#102fa1]',
    dashed: 'border border-dashed border-gray-400 text-gray-800 hover:bg-gray-100',
    link: 'text-[#1A4BED] hover:underline bg-transparent',
    text: 'text-white hover:text-gray-200 bg-transparent',
  }

  const successStyles = success ? 'bg-green-600 text-white hover:bg-green-700' : ''
  const ghostStyles = ghost ? 'bg-transparent border border-current' : ''

  return (
    <button
      type={htmlType}
      id={id}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        successStyles,
        ghostStyles,
        'gap-2 group', // group enables hover animation
        className
      )}
      {...props}
    >
      {leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>}
      <span className="flex items-center">{content}</span>
      {rightIcon && <span className="ml-2 flex items-center">{rightIcon}</span>}
      {rightArrowIcon && (
        <span className="ml-2 flex items-center">
          <ArrowRight
            size={20}
            className="inline-block text-current "
            color="currentColor"
          />
        </span>
      )}
    </button>
  )
}
