"use client"
import React from "react"
import Link from "next/link"

interface InfoCardProps {
    icon: string
    title: string
    description: string
    color: string
    link: string
}

export default function InfoCard({ icon, title, description, color, link }: InfoCardProps) {
    return (
        <Link href={link} className="w-full">
            <div
                className="cursor-pointer flex items-center justify-between w-full h-[135px] lg:h-[103px] mx-auto overflow-hidden rounded-2xl shadow-[0_0_2px_rgba(0,0,0,0.25)] transition-all hover:shadow-md p-4 sm:p-5"
                style={{ background: color }}
            >
                <div className="flex items-center gap-3 sm:gap-4 text-left w-full overflow-hidden">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white/40 rounded-lg flex items-center justify-center">
                        <img
                            src={icon}
                            alt={title}
                            className="w-8 h-8 md:w-[40px] md:h-[40px] object-contain"
                        />
                    </div>

                    <div className="flex-1 min-w-0 flex flex-col justify-center overflow-hidden">
                        <h3 className="text-fluid-h3 lg:text-[24px] font-medium text-gray-900 leading-tight tracking-heading break-words line-clamp-1">
                            {title}
                        </h3>
                        <p className="text-gray-700 text-fluid-body md:text-[16px] lg:text-[18px] leading-tight mt-1 tracking-para lg:line-clamp-2">
                            {description}
                        </p>
                    </div>
                </div>

                <div className="flex-shrink-0 ml-2 transform transition-transform duration-200">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="text-[#333333]"
                    >
                        <path
                            d="m9 6 6 6-6 6"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </Link>
    )
}
