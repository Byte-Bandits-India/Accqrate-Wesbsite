'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Collapse, Col, Row } from 'antd'
import { ChevronDown, ChevronUp, Calendar } from 'feather-icons-react'
import Button from '@/components/Button'
import ProductUpdatesData from './ProductUpdatesData'
import T from '@/components/T'
import ZatcaSection from '@/components/ZatcaSection'
import { useParams } from 'next/navigation'

export default function ProductUpdates() {
    const router = useRouter()
    const [storedCountry, setStoredCountry] = useState<{ AlphaCode?: string }>({})
    const [activeKeys, setActiveKeys] = useState<string[]>([])
    const params = useParams();
    const lang = params?.lang as string;
    const countryCode = params?.countryCode as string;

    // ✅ Build dynamic base route for announcements
    const announcementBase = `/${lang}/${countryCode}/resources/announcement`;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const country = JSON.parse(sessionStorage.getItem('selectedCountry') || '{}')
            setStoredCountry(country)
        }
    }, [])

    const getCountryText = () => {
        switch (storedCountry?.AlphaCode) {
            case 'MY':
                return 'Stay updated with all the latest announcements from LHDN'
            case 'MU':
                return 'Stay updated with all the latest announcements from MRA'
            case 'OM':
                return 'Stay updated with all the latest announcements from OTA'
            case 'BH':
                return 'Stay updated with all the latest announcements from NBR'
            case 'AE':
                return 'Stay updated with all the latest announcements from FTA'
            case 'JD':
                return 'Stay updated with all the latest announcements from ISTD'
            default:
                return 'Stay updated with all the latest announcements from ZATCA'
        }
    }

    return (
        <div className="pb-10 overflow-hidden">
            {/* ===== HERO SECTION ===== */}
            <section className="py-10 md:py-16 text-center bg-gradient-to-r from-[#e6fbfe] to-[#edddfb]">
                <Row justify="center">
                    <Col xs={22} sm={20} md={18} lg={16}>
                        <h1 className="text-h3 font-bold text-gray-900 mb-6 px-4">
                            <T>{getCountryText()}</T>
                        </h1>
                        <div className="flex justify-center">
                            <Button
                                variant="primary"
                                rightArrowIcon
                                label={<T>Subscribe Now</T>}
                                onClick={() => router.push(`/${lang}/${countryCode}/contact-us`)}
                                className="w-full sm:w-auto py-3"
                            />
                        </div>
                    </Col>
                </Row>
            </section>

            {/* ===== UPDATES LIST ===== */}
            <section className="bg-white py-10 md:py-16 relative">
                <div className="container mx-auto px-4">
                    <Row align="middle" justify="center">
                        <Col xs={24} sm={24} md={20} lg={18} xl={16}>
                            <h1 className="text-fill-bg mb-8">
                                <T>Accqrate Product Updates</T>
                            </h1>

                            {['MY', 'MU'].includes(storedCountry?.AlphaCode || '') ? (
                                <div className="text-center mt-24">
                                    <h2 className="text-fill-bg">

                                        Coming Soon — Stay tuned for Latest{' '}
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
                                                className="cursor-pointer"
                                                onClick={() => {
                                                    const key = i.toString()
                                                    setActiveKeys((prev) =>
                                                        prev.includes(key)
                                                            ? prev.filter((k) => k !== key)
                                                            : [...prev, key]
                                                    )
                                                }}
                                            >
                                                <h4 className="mb-2 text-base sm:text-lg font-semibold text-gray-900">
                                                    <T>{list.title}</T>
                                                </h4>
                                                <div className="flex items-center justify-start text-sm text-gray-500">
                                                    <Calendar size={14} className="mr-2" />
                                                    <span className="text-blue-600">{list.date}</span>
                                                </div>
                                            </div>
                                        ),
                                        children: (
                                            <div className="pt-2 text-sm sm:text-base leading-relaxed text-gray-700">
                                                {list.description}
                                            </div>
                                        ),
                                        className: `
                      border border-gray-200 rounded-lg mb-3 
                      hover:border-blue-300 hover:shadow-sm transition-all duration-200 ease-in-out
                      ${activeKeys.includes(i.toString()) ? 'border-blue-400 shadow-md' : ''}
                    `,
                                    }))}
                                    className="w-full"
                                />
                            )}
                        </Col>
                    </Row>
                </div>

                {/* Decorative image */}
                <img
                    src="/images/pattern/logo-pattern.svg"
                    alt="Get in touch with us for more information"
                    className="hidden md:block w-10 lg:w-14 absolute left-2 lg:left-4"
                    style={{ top: '30%' }}
                    loading="lazy"
                />
            </section>

            {/* ===== CALL TO ACTION ===== */}
            <div className="pt-8 md:pt-16">
                <ZatcaSection />
            </div>
        </div>
    )
}
