'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import T from '@/components/T' // optional: for translations
import React from 'react'

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
        <div
            className={`min-h-[70vh] flex flex-col items-center justify-start bg-[#F8F6FF] text-center px-6 ${className}`}
        >
            <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-10 mt-20 md:mb-28 md:mt-40">
                <T>{title}</T>
            </h1>

            <p className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                <T>{subtitle}</T>
            </p>

            <p className="text-sm md:text-base text-gray-600 mb-12">
                <T>{description}</T>
            </p>

            <Link
                href={targetUrl}
                className="inline-flex items-center text-white font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-[#29266E] to-[#194BED] transition-all duration-300 hover:opacity-90"
            >
                <T>{buttonText}</T>
                <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
        </div>
    )
}
