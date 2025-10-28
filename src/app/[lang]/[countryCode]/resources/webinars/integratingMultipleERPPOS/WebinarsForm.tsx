'use client'

import { useState, useEffect } from 'react'
import { Col, Row } from 'antd'
import { ArrowUpRight } from 'feather-icons-react'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import Button from '@/components/Button'
import Form from '@/components/Formik/Form'
import Field from '@/components/Formik/Field';
import T from '@/components/T'
import apiClient from '@/components/Util/apiClient'

const Schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  companyName: Yup.string().required('Company name is required'),
  phone: Yup.string().required('Phone is required'),
  howYouHear: Yup.string().required('This field is required'),
  message: Yup.string()
})

interface WebinarsFormProps {
  webinarDate: string
  webinarTime: string
  webinarTitle: string
}

// Simple component without complex type intersections
const WebinarsFormInner = withFormik<WebinarsFormProps, any>({
  mapPropsToValues: ({ webinarTitle, webinarDate, webinarTime }) => ({
    webinarTitle: webinarTitle || '',
    webinarDate: webinarDate || '',
    webinarTime: webinarTime || '',
    name: '',
    email: '',
    phone: '',
    companyName: '',
    howYouHear: '',
    message: ''
  }),
  validationSchema: Schema,
  handleSubmit: (data, { setSubmitting }) => {
    apiClient.post('/webinars/add', data)
      .then(({ data: res }) => {
        if (res && res.result) {
          window.location.href = '/webinar-booking-confirmation'
        }
      })
      .catch(error => {
        console.error('Submission error:', error)
      })
      .finally(() => {
        setSubmitting(false)
      })
  }
})((props: any) => {
  const {
    handleSubmit,
    isSubmitting,
    webinarDate,
    webinarTime,
    webinarTitle
  } = props

  const [webinarDetails, setWebinarDetails] = useState({
    title: webinarTitle,
    time: webinarTime,
    date: webinarDate
  })

  useEffect(() => {
    setWebinarDetails({
      title: webinarTitle,
      time: webinarTime,
      date: webinarDate
    })
  }, [webinarTitle, webinarTime, webinarDate])

  const submitForm = () => {
    handleSubmit()
  }

  return (
    <Form>
      <Row justify="center" gutter={[20, 10]}>
        <Col xs={24} md={12}>
          <div className="form-fields">
            <label><T>Name</T></label>
            <Field name="name" placeholder="Enter your name" hideLabel />
          </div>
        </Col>

        <Col xs={24} md={12}>
          <div className="form-fields">
            <label><T>Email</T></label>
            <Field name="email" placeholder="Enter your email" hideLabel />
          </div>
        </Col>

        <Col xs={24} md={12}>
          <div className="form-fields">
            <label><T>Phone</T></label>
            <Field name="phone" placeholder="Enter your phone" hideLabel />
          </div>
        </Col>

        <Col xs={24} md={12}>
          <div className="form-fields">
            <label><T>Company Name</T></label>
            <Field name="companyName" placeholder="Enter your company name" hideLabel />
          </div>
        </Col>

        <Col xs={24}>
          <div className="form-fields">
            <label><T>How did you hear about us?</T></label>
            <Field
              as="select"
              name="howYouHear"
              hideLabel
              options={[
                { label: <T>Social Media</T>, value: 'Social Media' },
                { label: <T>Word of mouth</T>, value: 'Word of mouth' },
                { label: <T>Advertisement</T>, value: 'Advertisement' },
                { label: <T>Others</T>, value: 'Others' }
              ]}
            />
          </div>
        </Col>

        <Col xs={24}>
          <div className="form-fields">
            <label><T>Questions or Topics You'd Like Covered:</T></label>
            <Field
              as="textarea"
              name="message"
              rows={3}
              placeholder="Type your message here.."
              hideLabel
            />
          </div>
        </Col>

        <Col xs={24}>
          <div className="form-fields submit-button mt-2">
            <Button
              onClick={submitForm}
              variant="primary"
              type="button"
              disabled={isSubmitting}
            >
              <T>Reserve Your Seat Now</T>
              <ArrowUpRight className="ms-2" size={15} />
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  )
})

export default WebinarsFormInner