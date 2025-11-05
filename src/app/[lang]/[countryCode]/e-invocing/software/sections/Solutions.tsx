'use client'

import { useState, useRef, useCallback, useMemo, useEffect } from 'react'
import { ChevronRight, ChevronUp, ChevronDown } from 'lucide-react'
import Image from 'next/image'

interface SolutionsProps {
    malaysia?: boolean
    mra?: boolean
    istd?: boolean
}

interface ContentItem {
    content: string
    desc: string
    image: string
    sno: string
    index: number
    tab: number
}

export default function Solutions({ malaysia, mra, istd }: SolutionsProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [selectedIndex, setSelectedIndex] = useState(0)

    // Memoized content list
    const contents = useMemo((): ContentItem[] => [
        {
            content: 'Flexibility Meets Efficiency',
            desc: "Our innovative solutions are designed to fit your business's unique needs, offering both cloud-based and on-premises deployment. Experience the seamless integration of our application on your servers in under 3 hours, ensuring your data's privacy without compromising on functionality.",
            image: '/images/invoicing/manage-team.webp',
            sno: '01',
            index: 0,
            tab: 0
        },
        {
            content: 'Transparent and Competitive Pricing',
            desc: 'Forget the worries of per-invoice charges. Our competitive pricing plans offer astonishing slab variations, allowing you to plan your budget with confidence and avoid unexpected costs.',
            image: '/images/invoicing/manage-team.webp',
            sno: '02',
            index: 1,
            tab: 1
        },
        {
            content: malaysia ? 'Swift Onboarding to IRBM\'s system' : 'Swift Fatoora Onboarding',
            desc: malaysia
                ? 'Head Start your journey with quick onboarding to IRBM\'s System. Simply have your company data at hand, and let Accqrate onboard you swiftly and efficiently.'
                : 'Jumpstart your journey with Fatoora in less than 5 minutes. Simply have your company data at hand, and let Accqrate onboard you swiftly and efficiently.',
            image: '/images/invoicing/manage-team.webp',
            sno: '03',
            index: 2,
            tab: 2
        },
        {
            content: malaysia ? 'Automatic Malay Translations' : 'Automatic Arabic Translations',
            desc: malaysia
                ? 'Eliminate the language barrier with our automatic translation of all mandatory fields for LHDN compliance, ensuring accuracy without the need for dedicated translation personnel.'
                : mra
                    ? 'Eliminate the language barrier with our automatic translation of all mandatory fields for MRA compliance, ensuring accuracy without the need for dedicated translation personnel.'
                    : istd
                        ? 'Eliminate the language barrier with our automatic translation of all mandatory fields for ISTD compliance, ensuring accuracy without the need for dedicated translation personnel.'
                        : 'Eliminate the language barrier with our automatic translation of all mandatory fields for ZATCA compliance, ensuring accuracy without the need for dedicated translation personnel.',
            image: '/images/invoicing/manage-team.webp',
            sno: '04',
            index: 3,
            tab: 3
        },
        {
            content: 'Custom PDF Template Replication',
            desc: 'Maintain consistency with precise replication of your existing invoice templates, allowing for seamless printing, downloading, and archiving within the middleware.',
            image: '/images/invoicing/manage-team.webp',
            sno: '05',
            index: 4,
            tab: 4
        },
        {
            content: 'Long-Term Invoice Archiving',
            desc: 'Securely archive your PDFs and XMLs in our middleware for a decade, with no additional costs, ensuring long-term compliance and peace of mind.',
            image: '/images/invoicing/manage-team.webp',
            sno: '06',
            index: 5,
            tab: 5
        },
        {
            content: 'Automated Email Notifications',
            desc: 'Stay informed with automated success and failure notifications sent directly to your designated finance email, keeping you updated on every transaction.',
            image: '/images/invoicing/manage-team.webp',
            sno: '07',
            index: 6,
            tab: 6
        },
        {
            content: 'Comprehensive Reconciliation Dashboard',
            desc: malaysia
                ? 'Effortlessly reconcile invoices across your applications and IRBM\'s System with our comprehensive dashboards, detailed reports, and exportable excel documents.'
                : mra
                    ? 'Effortlessly reconcile invoices across your applications and MRA with our comprehensive dashboards, detailed reports, and exportable excel documents.'
                    : istd
                        ? 'Effortlessly reconcile invoices across your applications and ISTD with our comprehensive dashboards, detailed reports, and exportable excel documents.'
                        : 'Effortlessly reconcile invoices across your applications and ZATCA with our comprehensive dashboards, detailed reports, and exportable excel documents.',
            image: '/images/invoicing/manage-team.webp',
            sno: '08',
            index: 7,
            tab: 7
        },
        {
            content: 'AI-Driven Error Analytics',
            desc: 'Our advanced analytics detect frequent errors and provide actionable insights to prevent them, optimizing your invoicing process with the power of artificial intelligence.',
            image: '/images/invoicing/manage-team.webp',
            sno: '09',
            index: 8,
            tab: 8
        },
        {
            content: 'Future-Proof with ERP Scalability',
            desc: 'When your business outgrows its current systems, our scalable ERP modules ensure compliance and growth without the need to overhaul your technology stack.',
            image: '/images/invoicing/manage-team.webp',
            sno: '10',
            index: 9,
            tab: 9
        },
        {
            content: malaysia
                ? 'Full Support for LHDN Audits'
                : mra
                    ? 'Full Support for MRA Audits'
                    : istd
                        ? 'Full Support for ISTD Audits'
                        : 'Full Support for ZATCA Audits',
            desc: malaysia
                ? 'We go beyond implementation. Our commitment to compliance includes full support during LHDN audits, ensuring your business meets all regulatory requirements.'
                : mra
                    ? 'We go beyond implementation. Our commitment to compliance includes full support during MRA audits, ensuring your business meets all regulatory requirements.'
                    : istd
                        ? 'We go beyond implementation. Our commitment to compliance includes full support during ISTD audits, ensuring your business meets all regulatory requirements.'
                        : 'We go beyond implementation. Our commitment to compliance includes full support during ZATCA audits, ensuring your business meets all regulatory requirements.',
            image: '/images/invoicing/manage-team.webp',
            sno: '11',
            index: 10,
            tab: 10
        },
        {
            content: 'High-Performance Application',
            desc: 'Our platform stands tested and trusted, flawlessly handling over half a million invoices daily per customer, empowering your business to perform at its best.',
            image: '/images/invoicing/manage-team.webp',
            sno: '12',
            index: 11,
            tab: 11
        }
    ], [malaysia, mra, istd])

    const selectedContent = contents[selectedIndex] || contents[0]

    // ✅ Fixed scroll behavior for selected item
    const scrollToSelected = useCallback((index: number) => {
        const container = containerRef.current
        if (!container) return

        const item = container.children[index] as HTMLElement
        if (item) {
            const containerTop = container.scrollTop
            const containerBottom = containerTop + container.clientHeight
            const itemTop = item.offsetTop
            const itemBottom = itemTop + item.offsetHeight

            // Only scroll if item is out of view
            if (itemTop < containerTop) {
                container.scrollTo({ top: itemTop - 10, behavior: 'smooth' })
            } else if (itemBottom > containerBottom) {
                container.scrollTo({ top: itemBottom - container.clientHeight + 10, behavior: 'smooth' })
            }
        }
    }, [])

    const handleNext = useCallback(() => {
        setSelectedIndex(prev => {
            const newIndex = Math.min(prev + 1, contents.length - 1)
            return newIndex
        })
    }, [contents.length])

    const handlePrevious = useCallback(() => {
        setSelectedIndex(prev => {
            const newIndex = Math.max(prev - 1, 0)
            return newIndex
        })
    }, [])

    const handleItemClick = useCallback((index: number) => {
        setSelectedIndex(index)
    }, [])

    // Scroll to selected item whenever it changes
    useEffect(() => {
        scrollToSelected(selectedIndex)
    }, [selectedIndex, scrollToSelected])

    return (
        <section className="bg-[#F8F7FF] py-20">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-0">
                {/* Header */}
                <div className="text-center mb-12">
                    <h3 className="text-fluid-h2 lg:text-[38px] font-medium text-[#1C2041] leading-tight">
                        Accqrate E-Invoicing Solutions
                    </h3>
                    <p className="text-[#5A6183] text-fluid-body mt-3">
                        Streamline Operations and Accelerate Business Growth
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
                    {/* Left Stepper */}
                    <div className="w-full lg:w-[45%] relative">
                        <div className="relative">
                            {/* Previous Button - Positioned absolutely on top */}
                            <button
                                className="absolute left-1/2 -translate-x-1/2 -top-10 flex items-center gap-1 text-[#FF8D67] text-sm font-medium bg-[#F8F7FF] px-4 py-2 rounded-lg z-10 disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
                                onClick={handlePrevious}
                                disabled={selectedIndex === 0}
                            >
                                <ChevronUp size={16} />
                                Previous
                            </button>

                            <div
                                ref={containerRef}
                                className="h-[550px] overflow-hidden rounded-xl"
                            >
                                <div className="flex flex-col gap-3 overflow-y-auto h-full pr-2 scrollbar-hide">
                                    {contents.map((item) => {
                                        const isActive = item.index === selectedIndex
                                        return (
                                            <div
                                                key={item.index}
                                                onClick={() => handleItemClick(item.index)}
                                                className={`flex items-center justify-between rounded-xl px-4 py-3 cursor-pointer transition-all duration-300
                                                    ${isActive
                                                        ? 'bg-white border border-[#FFE1D8] shadow-sm'
                                                        : 'hover:bg-white/40'
                                                    }`}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div
                                                        className={`w-10 h-10 rounded-full flex items-center justify-center border text-sm font-medium
                                                            ${isActive
                                                                ? 'bg-[#ffffff] text-[#FF8A65] border-[#FFD2C2]'
                                                                : 'border-[#91ABFF] text-[#91ABFF]'
                                                            }`}
                                                    >
                                                        {item.sno}
                                                    </div>
                                                    <span
                                                        className={`text-sm md:text-fluid-body uppercase ${isActive ? 'text-[#1C2041] font-normal' : 'text-[#6C70A1]'
                                                            }`}
                                                    >
                                                        {item.content}
                                                    </span>
                                                </div>
                                                <ChevronRight
                                                    size={18}
                                                    className={`${isActive ? 'text-[#FF8A65]' : 'text-[#C5CBF9]'}`}
                                                />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Next Button - Positioned absolutely at bottom */}
                            <button
                                className="absolute left-1/2 -translate-x-1/2 -bottom-6 flex items-center gap-1 text-[#FF8D67] text-sm font-medium bg-[#F8F7FF] px-4 py-2 rounded-lg z-10 disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
                                onClick={handleNext}
                                disabled={selectedIndex === contents.length - 1}
                            >
                                Next
                                <ChevronDown size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="w-full lg:w-[50%]">
                        <h4 className="text-fluid-h2 lg:text-[38px] font-normal text-[#1C2041] leading-[40px]">
                            {selectedContent.content}
                        </h4>
                        <p className="text-[#5A6183] text-fluid-small leading-[37px] mt-4 md:mt-6 mb-8 max-w-[580px]">
                            {selectedContent.desc}
                        </p>

                        <div className="relative flex flex-col md:flex-row gap-6">
                            <div className="relative">
                                <Image
                                    src={selectedContent.image}
                                    alt="accounting software in saudi arabia, zatca approved software, Accqrate Accounting software"
                                    width={600}
                                    height={400}
                                    className="md:w-full md:h-auto rounded-lg object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}