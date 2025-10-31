'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Collapse } from 'antd'
import { ChevronDown, ChevronUp, Calendar } from 'feather-icons-react'
import Button from '@/components/Button'
import ProductUpdatesData from './ProductUpdatesData'
import T from '@/components/T'
import ZatcaSection from '../faq/sections/ZatcaSection'

export default function ProductUpdates() {
  const router = useRouter()
  const params = useParams()
  const lang = params?.lang as string
  const countryCode = params?.countryCode as string

  const [storedCountry, setStoredCountry] = useState<{ AlphaCode?: string }>({})
  const [activeKeys, setActiveKeys] = useState<string[]>([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const country = JSON.parse(sessionStorage.getItem('selectedCountry') || '{}')
      setStoredCountry(country)
    }
  }, [])

  const getCountryText = () => {
    switch (storedCountry?.AlphaCode) {
      case 'MY':
        return 'Stay Updated With All The Latest Announcements From LHDN'
      case 'MU':
        return 'Stay Updated With All The Latest Announcements From MRA'
      case 'OM':
        return 'Stay Updated With All The Latest Announcements From OTA'
      case 'BH':
        return 'Stay Updated With All The Latest Announcements From NBR'
      case 'AE':
        return 'Stay Updated With All The Latest Announcements From FTA'
      case 'JD':
        return 'Stay Updated With All The Latest Announcements From ISTD'
      default:
        return 'Stay Updated With All The Latest Announcements From ZATCA'
    }
  }

  return (
    <>
      {/* 🔹 TOP SECTION WITH BACKGROUND */}
      <section className="bg-[#f7f6fb] py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-left">
          <h1 className="text-[30px] sm:text-[38px] md:text-[50px] font-medium  leading-tight">
            <T>Accqrate Product Updates</T>
          </h1>

          <div className="h-[3px] w-[90px] bg-blue-600 my-4 "></div>

          <p className="text-gray-700 text-base sm:text-lg md:text-[20px] md:mt-10 md:mb-10 mb-6 max-w-[800px]">
            <T>{getCountryText()}</T>
          </p>

          <Button
            variant="primary"
            rightArrowIcon
            label={<T>Subscribe Now</T>}
            onClick={() => router.push(`/${lang}/${countryCode}/contact-us`)}
            className="bg-[#F05A28] hover:bg-[#e14f28] text-white md:text-[20px] font-semibold px-6 py-4 rounded-full shadow-sm transition-all duration-200"
          />
        </div>
      </section>

      
      <section className="bg-white py-10 md:py-14">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 mb-10">
          {['MY', 'MU'].includes(storedCountry?.AlphaCode || '') ? (
            <div className="text-center mt-16">
              <h2 className="text-xl sm:text-2xl text-gray-700">
                Coming Soon — Stay Tuned For Latest{' '}
                {storedCountry?.AlphaCode === 'MY' ? 'LHDN' : 'MRA'} Updates
              </h2>
            </div>
          ) : (
            <Collapse
              bordered={false}
              expandIconPosition="end"
              activeKey={activeKeys}
              onChange={(keys) =>
                setActiveKeys(Array.isArray(keys) ? keys : [keys])
              }
              expandIcon={({ isActive }) =>
                isActive ? <ChevronUp size={18} /> : <ChevronDown size={18} />
              }
              items={ProductUpdatesData.map((list, i) => ({
                key: i.toString(),
                label: (
                  <div
                    className="cursor-pointer "
                    onClick={() => {
                      const key = i.toString()
                      setActiveKeys((prev) =>
                        prev.includes(key)
                          ? prev.filter((k) => k !== key)
                          : [...prev, key]
                      )
                    }}
                  >
                    <h4 className="mb-2 text-base sm:text-lg mg:text-[20px] font-semibold text-gray-900">
                      <T>{list.title}</T>
                    </h4>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={14} className="mr-2 " />
                      <span className="text-blue-600">{list.date}</span>
                    </div>
                  </div>
                ),
                children: (
                  <div className="pt-2 text-sm sm:text-base md:text-[18px] text-gray-700 leading-relaxed">
                    {list.description}
                  </div>
                ),
                className: `
                  border border-gray-200 rounded-xl mb-4 
                  hover:border-blue-300 hover:shadow-sm transition-all duration-200
                  ${activeKeys.includes(i.toString()) ? 'border-blue-400 shadow-md' : ''}
                `,
              }))}
              className="w-full"
            />
          )}
        </div>
      </section>

      <ZatcaSection />
    </>
  )
}
