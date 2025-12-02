'use client'

import ButtonBox from '@/components/Button'
import Field from '@/components/Formik/Field'
import Form from '@/components/Formik/Form'
import apiClient from '@/components/Util/apiClient'
import { Col, Row } from 'antd'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import T from '@/components/T'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

interface CTAFormProps {
  submitForm?: () => void
  moduleType?: string
  moduleData?: any
  history?: any
  values?: FormValues
  setFieldValue?: (field: string, value: any) => void
}

interface FormValues {
  name: string
  email: string
  phone: string
  companyName: string
  module: string
  message: string
  countryName: string
  language: string
}

interface ApiResponse {
  result?: boolean
  data?: any
  [key: string]: any
}

const Schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  companyName: Yup.string().required('Company name is required'),
  phone: Yup.string().required('Phone number is required')
})

function CTAForm({ submitForm, setFieldValue }: CTAFormProps) {
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined' && setFieldValue) {
      const selectedCountry = JSON.parse(sessionStorage.getItem('selectedCountry') || '{}')
      if (selectedCountry?.countryName) {
        setFieldValue('countryName', selectedCountry.countryName)
      }
    }
  }, [setFieldValue])

  return (
    <Form>
      <Row
        justify="center"
        gutter={[
          { xs: 0, sm: 15, md: 20, lg: 20 },
          { xs: 0, sm: 0, md: 0, lg: 0 }
        ]}
      >
        {/* ===== Name ===== */}
        <Col xs={24} sm={24} md={12} lg={12}>
          <div className="mb-5">
            <label className="block text-left font-medium text-gray-700 mb-1">
              <T>Name</T>
            </label>
            <Field
              label="name"
              name="name"
              placeholder="Enter your name"
              hideLabel
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </Col>

        {/* ===== Email ===== */}
        <Col xs={24} sm={24} md={12} lg={12}>
          <div className="mb-5">
            <label className="block text-left font-medium text-gray-700 mb-1">
              <T>Email</T>
            </label>
            <Field
              label="email"
              name="email"
              placeholder="Enter your email"
              hideLabel
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </Col>

        {/* ===== Phone ===== */}
        <Col xs={24} sm={24} md={12} lg={12}>
          <div className="mb-5">
            <label className="block text-left font-medium text-gray-700 mb-1">
              <T>Phone</T>
            </label>
            <Field
              label="Phone"
              name="phone"
              placeholder="Enter your phone number"
              hideLabel
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </Col>

        {/* ===== Company Name ===== */}
        <Col xs={24} sm={24} md={12} lg={12}>
          <div className="mb-5">
            <label className="block text-left font-medium text-gray-700 mb-1">
              <T>Company Name</T>
            </label>
            <Field
              label="Company Name"
              name="companyName"
              placeholder="Enter your company name"
              hideLabel
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </Col>

        {/* ===== Hidden Country ===== */}
        <Col xs={24} sm={24} md={12} lg={12} className="hidden">
          <Field
            label="Country"
            name="countryName"
            placeholder="Enter your country name"
            hideLabel
            readOnly
          />
        </Col>

        {/* ===== Message ===== */}
        <Col xs={24}>
          <div className="mb-5">
            <label className="block text-left font-medium text-gray-700 mb-1">
              <T>Message</T>
            </label>
            <Field
              as="textarea"
              label="Message"
              name="message"
              rows={3}
              placeholder="Type your message here..."
              hideLabel
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>
        </Col>

        {/* ===== Submit Button ===== */}
        <Col xs={24}>
          <div className="text-center mt-4">
            <ButtonBox
              onClick={() => submitForm?.()}
              variant="primary"
              className="px-8 py-2 rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all"
            >
              <T>Submit</T>
            </ButtonBox>
          </div>
        </Col>
      </Row>
    </Form>
  )
}

export default withFormik<CTAFormProps, FormValues>({
  mapPropsToValues: (props) => {
    const getSessionStorageData = () => {
      if (typeof window !== 'undefined') {
        const selectedCountry = JSON.parse(sessionStorage.getItem('selectedCountry') || '{}')
        const language = sessionStorage.language || ''
        return { selectedCountry, language }
      }
      return { selectedCountry: {}, language: '' }
    }

    const { selectedCountry, language } = getSessionStorageData()

    return {
      name: '',
      email: '',
      phone: '',
      companyName: '',
      module: props.moduleType || 'Phase1',
      message: '',
      countryName: selectedCountry?.countryName || '',
      language
    }
  },
  validationSchema: Schema,
  handleSubmit: (data, { props }) => {
    apiClient
      .post<ApiResponse>('contact-us/add', data)
      .then(({ data }) => {
        if (data && data.result && typeof window !== 'undefined') {
          window.location.href = '/thank-you'
        }
      })
      .catch((error) => {
        console.error('Form submission error:', error)
      })
  }
})(CTAForm)
