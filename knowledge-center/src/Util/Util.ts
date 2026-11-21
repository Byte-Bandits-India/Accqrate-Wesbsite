"use client"
import { createBrowserHistory } from 'history'
import JsBarcode from 'jsbarcode'
import { get, set } from 'lodash'
import moment, { Moment } from 'moment'
import queryString from 'query-string'
import { useEffect, useRef, useState } from 'react'
import AppConfig from './config'
import store from '../store/store'
import apiClient from '@/components/Util/apiClient'

// Types
interface Currency {
  decimalLength?: number
  format?: string
  name?: string
  unit?: string
  code?: string
}

interface AppCache {
  data: Record<string, any>
}

interface WeekDates {
  startWeek: Moment
  endWeek: Moment
  startWeekDate: string
  endWeekDate: string
}

interface SelectOption {
  label: string
  value: any
  [key: string]: any
}

// Cache implementation
const APP_CACHE: AppCache = { data: {} }

export const SET_DATA = (key: string, value: any): void => {
  set(APP_CACHE.data, key, value)
}

export const GET_DATA = (key: string): any => get(APP_CACHE.data, key)

let accessData: string[] = []

export const updateAccessData = (data: string[]): void => {
  const commonAccess = [
    '/app/inbox',
    // '/app/dashboard',
    '/app/changePassword',
    '/app/profile',
    '/app/manage-company'
  ]
  const access = [...commonAccess, ...data]
  accessData = access
}

// Local Storage utilities
export const setLocalStorage = (key: string, value: any): void => {
  sessionStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorage = <T = any>(key: string): T | null => {
  const item = sessionStorage.getItem(key)
  return item ? JSON.parse(item) : null
}

export const deleteLocalStorage = (key: string): void => {
  sessionStorage.removeItem(key)
}

export const clearLocalStorage = (): void => {
  sessionStorage.clear()
}

// Validation functions
export const emailValidate = (value: string): boolean => {
  const pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return pattern.test(value)
}

export const numberValidate = (value: string): boolean => {
  const pattern = /^[0-9]*$/
  return pattern.test(value)
}

export const urlValidate = (value: string): boolean => {
  const pattern =
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g
  return pattern.test(value)
}

// Utility functions
export const convertSelectOptions = (
  options: any[],
  label: string | string[],
  value: string
): SelectOption[] =>
  options.map((data) => {
    const labelValue = typeof label === 'object' 
      ? label.map((v) => data[v] || v).join(' ') 
      : data[label]
    return {
      ...data,
      label: labelValue,
      value: data[value]
    }
  })

export const avatarLetter = (str: string | null | undefined): string => 
  str ? str.charAt(0).toUpperCase() : ''

export const convertMinutesToHours = (value: number | string): string => {
  if (value && value !== '') {
    const num = Number(value)
    const hours = Math.floor(num / 60)
    const minutes = num % 60

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
  }

  return '00:00'
}

export const getStartAndEndWeek = (value: string | Date | Moment): WeekDates => {
  const date = moment(value)
  const selectedStartWeek = moment(date).startOf('week').startOf('day')
  const selectedEndWeek = moment(date).endOf('week')
  const selectedStartMonth = moment(date).startOf('month').startOf('day')
  const selectedEndMonth = moment(date).endOf('month')

  const startWeek = selectedStartWeek > selectedStartMonth ? selectedStartWeek : selectedStartMonth
  const endWeek = selectedEndWeek < selectedEndMonth ? selectedEndWeek : selectedEndMonth
  const startWeekDate = startWeek.format('D')
  const endWeekDate = endWeek.format('D')

  return { startWeek, endWeek, startWeekDate, endWeekDate }
}

export const TIME_ENABLED_STATUS = ['Created', 'Returned', 'Rejected']

export const amountToWords = (wholeNumber: number | string, currencyObj?: Currency): string => {
  const NumberToWordInt = (num: number): string => {
    num = Math.floor(num)

    if (num === 0) {
      return 'Zero'
    }

    if (num < 0) {
      return `Minus ${NumberToWordInt(Math.abs(num))}`
    }

    let words = ''

    if (Math.floor(num / 1000000) > 0) {
      words += `${NumberToWordInt(Math.floor(num / 1000000))} Million `
      num %= 1000000
    }

    if (Math.floor(num / 1000) > 0) {
      words += `${NumberToWordInt(Math.floor(num / 1000))} Thousand `
      num %= 1000
    }

    if (Math.floor(num / 100) > 0) {
      words += `${NumberToWordInt(Math.floor(num / 100))} Hundred `
      num %= 100
    }

    if (num > 0) {
      if (words !== '') {
        words += 'and '
      }

      const unitsMap = [
        'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
        'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 
        'Seventeen', 'Eighteen', 'Nineteen'
      ]

      const tensMap = [
        'Zero', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
      ]

      if (num < 20) {
        words += unitsMap[num]
      } else {
        words += tensMap[Math.floor(num / 10)]
        if (num % 10 > 0) {
          words += `-${unitsMap[num % 10]}`
        }
      }
    }

    return words.trim()
  }

  const numbers = parseFloat(wholeNumber.toString()).toFixed(currencyObj?.decimalLength || 2)
  const splits = numbers.toString().split('.')
  
  if (splits.length === 0) return ''

  const wholePart = splits[0]
  const decimalPart = splits[1] || '00'

  let result = NumberToWordInt(parseInt(wholePart, 10))
  
  if (parseInt(decimalPart, 10) > 0) {
    const decimalWords = NumberToWordInt(parseInt(decimalPart, 10))
    result += ` ${currencyObj?.name || ''} and ${decimalWords} ${currencyObj?.unit || 'Cents'}`
  } else {
    result += ` ${currencyObj?.name || ''}`
  }

  return result
}

export const amountSeparator = (value: number | string): string => {
  const amount = value ? parseFloat(value.toString()).toFixed(2) : '0.00'
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

export const generateId = (ID_LENGTH: number = 5): string => {
  let rtn = ''

  for (let i = 0; i < ID_LENGTH; i++) {
    rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length))
  }

  return rtn
}

export const validateAccess = (page: string | string[], withPath?: boolean): boolean => {
  if (accessData.includes('adminAccess')) {
    return true
  }

  if (accessData && page) {
    if (typeof page === 'string') {
      const pagePath = withPath 
        ? page.substring(5, page.includes(':') ? page.indexOf('/:') : page.length)
        : page
      return accessData.includes(pagePath)
    }

    return page.some(e => accessData.includes(e))
  }

  return false
}

export const removeEmptyKeys = (values: Record<string, any>): Record<string, any> => {
  const newValue: Record<string, any> = {}
  
  Object.keys(values).forEach((key) => {
    const value = values[key]
    const isEmptyObject = typeof value === 'object' && value !== null && !Array.isArray(value) 
      ? Object.keys(value).length === 0
      : false

    if (value !== '' && value !== null && value !== undefined && value !== 0 && !isEmptyObject) {
      newValue[key] = value
    }
  })

  return newValue
}

export const parseQueryStr = (value: string): queryString.ParsedQuery<string> => 
  queryString.parse(value)

export const convertQueryStr = (value: Record<string, any>): string => 
  queryString.stringify(value)

export const getOffset = (currentPage: number, limit: number): number => {
  return (currentPage - 1) * limit
}

export const history = createBrowserHistory()

/** Using this method we call the callback method when state is change */
export const useStateCallback = <T>(
  initialState: T
): [T, (newState: T | ((prevState: T) => T), cb?: (state: T) => void) => void] => {
  const [state, setState] = useState<T>(initialState)
  const cbRef = useRef<((state: T) => void) | null>(null)

  const setStateCallback = (newState: T | ((prevState: T) => T), cb?: (state: T) => void) => {
    cbRef.current = cb || null
    setState(newState)
  }

  useEffect(() => {
    if (cbRef.current) {
      cbRef.current(state)
      cbRef.current = null
    }
  }, [state])

  return [state, setStateCallback]
}

export const checkMoment = (date: any): Moment | null => 
  date && moment.isMoment(moment(date)) ? moment(date) : null

// Fix for image URL - you might need to adjust the path based on your project structure
export const getImageUrl = (path: string | null | undefined): string => {
  if (path) {
    return `${AppConfig.API_URL}/assets/${path}`
  }
  // For empty image, you might want to use a placeholder or empty string
  return '' // or require('../images/empty_img.png') if you have the file
}

export const getDocPath = (path: string | null | undefined): string => 
  path ? `${AppConfig.API_URL}/assets/${path}` : ''

export const roundOf = (value: number, decimals: number = 2): number => 
  Number(Math.round(Number(value + 'e' + decimals)) + 'e-' + decimals)

export const parseAmount = (
  value: number | string, 
  currency?: string, 
  noFormat?: boolean
): string => {
  const newState = store.getState()
  const defaultCurrency = currency || newState.users.companyInfo?.currency
  const currencyData = newState.users.userInfo?.currencies?.find((v: Currency) => v.code === defaultCurrency) || {
    decimalLength: 2,
    format: ','
  }
  
  const parsedValue = parseFloat(
    value && !Number.isNaN(Number(value)) 
      ? roundOf(Number(value), currencyData.decimalLength).toString() 
      : "0"
  )
  const amt = parsedValue.toFixed(currencyData.decimalLength)

  return noFormat ? amt : amt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, currencyData.format || ',')
}

interface SanitizeResult {
  dangerouslySetInnerHTML: {
    __html: string
  }
}

export const sanitize = (html: string): SanitizeResult => {
  // In a real application, you should use a proper sanitization library like DOMPurify
  const tempDiv = document.createElement('div')
  tempDiv.textContent = html // Basic sanitization by using textContent
  
  return {
    dangerouslySetInnerHTML: {
      __html: tempDiv.innerHTML
    }
  }
}

export const print = (data: Blob): void => {
  const iframe = document.createElement('iframe')
  document.body.appendChild(iframe)

  iframe.style.display = 'none'
  iframe.src = URL.createObjectURL(data)

  iframe.onload = () => {
    setTimeout(() => {
      iframe.focus()
      iframe.contentWindow?.print()
    }, 1)
  }
}

export const download = (data: Blob, headers: Record<string, string>): void => {
  const url = URL.createObjectURL(data)
  const a = document.createElement('a')
  a.href = url
  
  // Extract filename from content-disposition header
  const contentDisposition = headers['content-disposition']
  let filename = 'download'
  
  if (contentDisposition) {
    const filenameMatch = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/)
    if (filenameMatch && filenameMatch[1]) {
      filename = filenameMatch[1].replace(/['"]/g, '')
    }
  }
  
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

interface ApiResponse<T = any> {
  data: T
  status: number
  headers: Record<string, string>
}

interface DownloadPrintOptions {
  printType?: string
  params?: Record<string, any>
  [key: string]: any
}

export const downloadPrintPDF = async (
  url: string,
  { printType = 'Single', params, ...query }: DownloadPrintOptions = {},
  isPrint: boolean = false
): Promise<void> => {
  try {
    const response = await apiClient.post<Blob>(url, { printType, ...query }, {
      responseType: 'blob',
      params
    })

    if (response.status === 200) {
      if (isPrint) {
        print(response.data) // response.data is now typed as Blob
      } else {
        download(response.data, response.headers)
      }
    }
  } catch (error) {
    console.error('Error downloading/printing PDF:', error)
  }
}

interface BarcodeOptions {
  format?: string
  displayValue?: boolean
  width?: number
  [key: string]: any
}

export const textToBase64Barcode = (text: string, options?: BarcodeOptions): string => {
  const canvas = document.createElement('canvas')
  JsBarcode(canvas, text, { 
    format: 'CODE39', 
    displayValue: false, 
    width: 5, 
    ...options 
  })

  return canvas.toDataURL('image/png')
}

export const checkNaN = (v: any): number => (!Number.isNaN(parseFloat(v)) ? parseFloat(v) : 0)

export const base64Decode = (data: string): string => {
  // For browser environment, use atob instead of Buffer
  if (typeof window !== 'undefined') {
    return atob(data)
  }
  // For Node.js environment (though this is a client component)
  const buff = Buffer.from(data, 'base64')
  return buff.toString('ascii')
}

export const insertAt = <T>(array: T[], index: number, newItem: T): T[] => 
  [...array.slice(0, index), newItem, ...array.slice(index)]

// Export types for use in other files
export type { Currency, WeekDates, SelectOption }