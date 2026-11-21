'use client'

import React from 'react'
import CountUp from 'react-countup'
import T from './T'

interface CountItem {
    name: string
    value: number
    additionalText?: string
}

interface CounterFactsProps {
    className?: string
    MainTitle?: string
    desc?: string
}

const countSet: CountItem[] = [
    { name: 'Trusted customers', value: 5000 },
    { name: 'Integration engineers', value: 50 },
    { name: 'Invoices per month', value: 2, additionalText: 'M' },
    { name: 'Completed integrations', value: 8000 },
]

const CounterFacts: React.FC<CounterFactsProps> = ({
    className = '',
    MainTitle,
    desc,
}) => {
    return (
        <section className={`pt-12 md:pt-16 ${className}`}>
            <div className="max-w-[1200px] mx-auto px-6 md:px-8">
                {/* Heading */}
                {MainTitle && (
                    <div className="text-center mb-8">
                        <h3 className="text-[28px] md:text-[32px] lg:text-[36px] font-semibold text-[#1C2041] mb-3">
                            <T>{MainTitle}</T>
                        </h3>
                        <p className="text-[#5A6183] text-base md:text-lg">
                            <T>{desc || 'A simple and elegant ERP solution'}</T>
                        </p>
                    </div>
                )}

                {/* Counter Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-center">
                    {countSet.map((item, i) => (
                        <div key={i} className="flex flex-col items-center justify-center">
                            {/* count — responsive font size */}
                            <div className="text-fluid-h2 text-[38px] font-medium text-[#1C2041] flex items-baseline justify-center">
                                <CountUp start={0} end={item.value} duration={4} />
                                {item.additionalText && (
                                    <span className="ml-1 text-fluid-h2 text-[38px] text-[#1C2041]">
                                        {item.additionalText}
                                    </span>
                                )}
                                <span className="ml-1 text-[#194BED] text-fluid-h2 text-[38px] font-medium">
                                    +
                                </span>
                            </div>

                            {/* name — responsive font size */}
                            <p className="text-[#5A6183] text-fluid-small mt-2 leading-tight">
                                <T>{item.name}</T>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CounterFacts
