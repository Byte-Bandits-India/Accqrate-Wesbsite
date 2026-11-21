'use client'

import { Breadcrumb, Col, Row, Modal } from 'antd'
import Button from '@/components/Button'
import { Calendar, Clock } from 'iconsax-react'
import { useState, ReactNode, useMemo } from 'react'
import T from '@/components/T'
import WebinarsForm from './WebinarsForm'
import ZatcaSection from '@/components/ZatcaSection'
import { useCountry } from '@/contexts/CountryContext'

interface WebinarsLayoutProps {
  children: ReactNode
  pageTitle: string
  date: string
  time: string
  imageSource: string
  buttonText?: string
  speakerName?: string
  speakerPosition?: string
}

export default function WebinarsLayout({
  children,
  pageTitle,
  date,
  time,
  imageSource,
  buttonText,
  speakerName,
  speakerPosition,
}: WebinarsLayoutProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { selectedCountry, selectedLanguage, isInitialized } = useCountry() // <-- use context

  const showModal = () => setIsModalOpen(true)
  const handleCancel = () => setIsModalOpen(false)

  // Build breadcrumb URLs dynamically using language and country
  const BreadcrumbItems = useMemo(
    () => [
      { title: <T>Home</T>, href: `/${selectedLanguage.code}/${selectedCountry.code.toLowerCase()}` },
      { title: <T>Webinars</T>, href: `/${selectedLanguage.code}/${selectedCountry.code.toLowerCase()}/resources/webinars` },
    ],
    [selectedLanguage.code, selectedCountry.code]
  )

  if (!isInitialized) return null

  return (
    <>
      {/* HEADER SECTION */}
      <section className="py-5 bg-[#eff3ff]">
        <div className="mx-auto max-w-[1177px] w-full px-4">
          <Breadcrumb
            items={BreadcrumbItems.map((item) => ({
              title: <a href={item.href}>{item.title}</a>,
            }))}
          />

          <Row align="middle" justify="center" gutter={[20, 20]}>
            <Col xs={24} md={12}>
              <div className="pl-5 border-l-4 border-[#194bed] mt-6 lg:mt-0">
                <div className="mb-3 flex items-center">
                  <img
                    src="/images/resources/live-webinar.svg"
                    alt="Accqrate Live Webinar"
                    width={28}
                    height={28}
                    className="mr-2"
                  />
                  <span className="text-sm font-semibold">LIVE WEBINARS</span>
                </div>

                <h1 className="text-3xl font-bold leading-[43px] mb-2">{pageTitle}</h1>

                <div className="pt-2 pb-2">
                  <span className="block date uppercase font-bold text-[#d63f10]">{date}</span>
                  <span className="block time font-bold text-[#194bed]">{time}</span>
                </div>

                <Button
                  variant="primary"
                  rightArrowIcon
                  label={<T>Reserve Your Seat</T>}
                  onClick={showModal}
                  className="mt-2"
                />

              </div>
            </Col>

            <Col xs={24} md={12}>
              <img
                src={imageSource}
                alt={pageTitle}
                className="rounded-xl w-full object-cover"
              />
            </Col>
          </Row>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16">
        <div className="mx-auto max-w-[1177px] w-full px-4">
          <Row gutter={[30, 30]}>
            <Col xs={24} md={18}>
              <div className="prose max-w-none">
                {children}
              </div>
            </Col>
            <Col xs={24} md={6}>
              <div className="border-l border-gray-200 pl-8 mt-0 relative">
                <div className="location relative flex flex-col items-start text-start px-4">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#194bed]"></div>
                  <span className="block text-lg font-semibold leading-7"><T>Location</T></span>
                  <p className="mb-0 text-gray-600"><T>GoTo Webinar - a link will be sent when registering</T></p>
                </div>

                <h3 className="pt-3 text-lg font-semibold leading-7 text-[#194bed]">Speakers:</h3>
                <div className="speakers">
                  <h5 className="text-lg font-semibold leading-7">{speakerName || ''}</h5>
                  <p className="text-sm leading-6 text-gray-600">{speakerPosition || ''}</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* CTA SECTION */}
      <div className="mt-20">
        <ZatcaSection />
      </div>

      {/* MODAL SECTION */}
      <Modal
        title={<h4 className="text-xl font-bold"><T>Reserve a Seat</T></h4>}
        width={800}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        destroyOnHidden={false}
        styles={{
          body: { padding: '24px' }
        }}
      >

        <Row gutter={[30, 30]}>
          <Col xs={24} md={12}>
            <div className="bg-[#eff3ff] rounded-xl p-5 mb-3 shadow-sm">
              <span className="text-gray-600 block uppercase mb-2 text-sm"><T>Webinar Details:</T></span>
              <h4 className="text-lg font-semibold"><T>{pageTitle}</T></h4>
              <div className="pt-2 pb-2">
                <span className="text-gray-600 block mb-2 text-sm"><T>Date & Time:</T></span>
                <span className=" text-gray-600 text-sm flex items-center">
                  <Calendar size={16} className="mr-2" /> {date}
                </span>
                <span className="text-gray-600 text-sm flex items-center">
                  <Clock size={16} className="mr-2" /> {time}
                </span>
              </div>
            </div>
            <img
              src={imageSource}
              alt={pageTitle}
              className="rounded-xl w-full object-cover"
            />
          </Col>

          <Col xs={24} md={12}>
            <h4 className="text-lg font-semibold mb-3"><T>Reserve Your Seat for the Webinar</T></h4>
            <p className="text-gray-600 mb-4 text-sm">
              <T>
                Please fill in the details below to secure your spot. Don't miss this opportunity to gain valuable insights and engage with industry experts.
              </T>
            </p>
            <WebinarsForm webinarDate={date} webinarTime={time} webinarTitle={pageTitle} />
          </Col>
        </Row>
      </Modal>
    </>
  )
}