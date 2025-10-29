'use client'

import Button from '@/components/Button'
import { Col, Row, Collapse } from 'antd'
import { useRouter } from 'next/navigation'
import { ChevronDown, ChevronUp, Calendar } from 'feather-icons-react'
import ZatcaUpdatesData from './ZatcaUpdatesData'
import T from '@/components/T'
import { useState } from 'react'
import ZatcaSection from '@/components/ZatcaSection'
import { useParams } from 'next/navigation'

function ZatcaUpdates() {
    const router = useRouter()
    const [activeKeys, setActiveKeys] = useState<string[]>([])
    const params = useParams();
    const lang = params?.lang as string;
    const countryCode = params?.countryCode as string;

    const announcementBase = `/${lang}/${countryCode}/resources/announcement`;

    const handleCollapseChange = (keys: string | string[]) => {
        const nextKeys = Array.isArray(keys) ? keys : [keys]
        setActiveKeys(nextKeys)
    }

    const toggleKey = (key: string) => {
        setActiveKeys((prev) =>
            prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
        )
    }

    return (
        <div className="overflow-hidden">
            {/* ===== HERO SECTION ===== */}
            <section className="text-center bg-gradient-to-r from-[#91abff] via-[#e6fbfe] to-[#edddfb] py-16 md:py-20">
                <Row justify="center">
                    <Col xs={22} sm={20} md={18} lg={16}>
                        <Row justify="center">
                            <Col xs={24}>
                                <h1 className="text-fluid-h3 font-bold text-[#1c2041] mb-6 leading-snug">
                                    <T>Stay updated with all the latest announcements from ZATCA</T>
                                </h1>
                                <div className="flex justify-center">
                                    <Button
                                        variant="primary"
                                        rightArrowIcon
                                        label={<T>Subscribe Now</T>}
                                        onClick={() => router.push(`/${lang}/${countryCode}/contact-us`)}
                                        className="bg-[#194bed] hover:bg-[#1133aa] text-white px-8 py-3 rounded-full transition-all"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </section>

            {/* ===== ZATCA UPDATES ===== */}
            <section className="bg-white py-16 md:py-20 relative">
                <div className="container mx-auto px-4">
                    <Row align="middle" justify="center">
                        <Col xs={24} sm={24} md={20} lg={18} xl={16}>
                            <h1 className="text-fill-bg mb-8">
                                <T>ZATCA Updates</T>
                            </h1>

                            <Collapse
                                activeKey={activeKeys}
                                onChange={handleCollapseChange}
                                expandIconPosition="end"
                                expandIcon={({ isActive }) =>
                                    isActive ? <ChevronUp size={18} /> : <ChevronDown size={18} />
                                }
                                bordered={false}
                                className="w-full"
                                items={ZatcaUpdatesData.map((list, i) => {
                                    const key = i.toString()
                                    const isActive = activeKeys.includes(key)
                                    return {
                                        key,
                                        label: (
                                            <div
                                                onClick={() => toggleKey(key)}
                                                className={`cursor-pointer select-none transition-all duration-300 ${isActive ? 'text-[#194bed]' : 'text-[#1c2041]'
                                                    }`}
                                            >
                                                <h4 className="text-base sm:text-lg font-semibold mb-1">
                                                    <T>{list.title}</T>
                                                </h4>
                                                <div className="flex items-center justify-start text-sm">
                                                    <Calendar size={14} className="mr-2 text-gray-500" />
                                                    <span className="text-blue-600 text-xs sm:text-sm">{list.date}</span>
                                                </div>
                                            </div>
                                        ),
                                        children: (
                                            <div
                                                onClick={() => toggleKey(key)}
                                                className="pb-4 pt-2 text-sm sm:text-base leading-relaxed cursor-pointer"
                                            >
                                                {list.description}
                                            </div>
                                        ),
                                        className: `
                      border border-[#ebecf3] rounded-lg mb-3
                      transition-all duration-300
                      hover:border-[#91abff] hover:shadow-sm
                      ${isActive
                                                ? 'border-[#194bed] shadow-md'
                                                : 'bg-white'
                                            }
                    `
                                    }
                                })}
                            />
                        </Col>
                    </Row>
                </div>

                {/* Decorative Image */}
                <img
                    src="/images/pattern/logo-pattern.svg"
                    alt="Decorative Pattern"
                    className="hidden md:block w-12 lg:w-16 absolute left-3 lg:left-6"
                    style={{ top: '30%' }}
                    loading="lazy"
                />
            </section>

            {/* ===== CALL TO ACTION SECTION ===== */}
            <section className="pt-12 md:pt-20">
                <ZatcaSection />
            </section>
        </div>
    )
}

export default ZatcaUpdates
