'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import T from '@/components/T' // optional: for translations
import React from 'react'
import ZatcaSection from '@/app/[lang]/[countryCode]/resources/faq/sections/ZatcaSection'
interface ComingSoonProps {
    title?: string
    subtitle?: string
    description?: string
    buttonText?: string
    redirectPath?: string // relative path after /[lang]/[countryCode]
    className?: string
}

export default function ComingSoon({
    title = 'Coming Soon ...',
    subtitle = 'Get The Trial Version By Subscribing Here And Get A Feel Of Our Application',
    description = 'Register your company for a trial application. Your data will be available in 30 days.',
    buttonText = 'Subscribe Now',
    redirectPath = '/resources/announcement/form',
    className = '',
}: ComingSoonProps) {
    const params = useParams()
    const lang = params?.lang as string
    const countryCode = params?.countryCode as string

    const targetUrl = `/${lang || 'en'}/${countryCode || 'sa'}${redirectPath}`

    return (
        <>
        <div
            className={`min-h-[60vh] flex flex-col items-center justify-center bg-[#F8F6FF] text-center px-6 ${className}`}
        >
            <h1 className="text-3xl md:text-[50px] font-semibold text-gray-900 mb-10 mt-20  ">
                <T>{title}</T>
            </h1>

          
        </div>
         <ZatcaSection/>
        </>
    )
}
