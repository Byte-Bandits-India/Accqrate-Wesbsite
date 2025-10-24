"use client"
import React from "react"
import Link from "next/link"
import T from "@/components/T"

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
                className="cursor-pointer flex items-center justify-between w-full h-auto lg:h-[103px] mx-auto overflow-hidden rounded-2xl shadow-[0_0_2px_rgba(0,0,0,0.25)] transition-all hover:shadow-md p-6 sm:p-5"
                style={{ background: color }}
            >
                {/* LEFT SECTION */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center w-full overflow-hidden">

                    {/* Mobile/Tablet layout */}
                    <div className="flex flex-col lg:hidden w-full">
                        {/* Icon + Title in one line */}
                        <div className="flex items-center gap-3 sm:gap-4">
                            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white/40 rounded-lg flex items-center justify-center">
                                <img
                                    src={icon}
                                    alt={title}
                                    className="w-[40px] h-[40px] object-contain"
                                />
                            </div>
                            <h3 className="text-[24px] md:text-[20px] font-medium text-gray-900 leading-tight tracking-heading truncate">
                                <T>{title}</T>
                            </h3>
                        </div>

                        {/* Description below */}
                        <p className="text-gray-700 text-[14px] sm:text-[15px] md:text-[16px] leading-tight mt-3 tracking-para">
                            <T>{description}</T>
                        </p>
                    </div>

                    {/* Desktop layout (your original) */}
                    <div className="hidden lg:flex items-center gap-4 w-full">
                        <div className="flex-shrink-0 w-12 h-12 bg-white/40 rounded-lg flex items-center justify-center">
                            <img
                                src={icon}
                                alt={title}
                                className="w-[40px] h-[40px] object-contain"
                            />
                        </div>

                        <div className="flex-1 min-w-0 flex flex-col justify-center overflow-hidden">
                            <h3 className="text-[20px] lg:text-[24px] font-medium text-gray-900 leading-tight tracking-heading">
                                <T>{title}</T>
                            </h3>
                            <p className="text-gray-700 text-[16px] lg:text-[18px] leading-tight mt-1 tracking-para line-clamp-2">
                                <T>{description}</T>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Arrow Icon */}
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
