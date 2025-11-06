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
        className="cursor-pointer flex items-center justify-between w-full h-auto lg:h-[4.875rem] mx-auto overflow-hidden rounded-2xl shadow-[0_0_2px_rgba(0,0,0,0.25)] transition-all hover:shadow-md p-4 sm:p-4"
        style={{ background: color }}
      >
        {/* LEFT SECTION */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center w-full overflow-hidden">

          {/* Mobile/Tablet layout */}
          <div className="flex flex-col lg:hidden w-full">
            {/* Icon + Title in one line */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-white/40 rounded-lg flex items-center justify-center">
                <img
                  src={icon}
                  alt={title}
                  className="w-[32px] h-[32px] object-contain"
                />
              </div>
              <h3 className="text-[1.125rem] font-medium text-[#000000] leading-tight tracking-heading truncate">
                <T>{title}</T>
              </h3>
            </div>

            {/* Description below */}
            <p className="text-[#333333] text-[0.875rem] sm:text-[0.938rem] md:text-[1rem] leading-tight mt-2 tracking-para">
              <T>{description}</T>
            </p>
          </div>

          {/* Desktop layout (your original) */}
          <div className="hidden lg:flex items-center gap-3 w-full">
            <div className="flex-shrink-0 w-10 h-10 bg-white/40 rounded-lg flex items-center justify-center">
              <img
                src={icon}
                alt={title}
                className="w-[24px] h-[24px] object-contain"
              />
            </div>

            <div className="flex-1 min-w-0 flex flex-col justify-center overflow-hidden">
              <h3 className="text-[1.125rem] font-medium text-[#000000] leading-tight tracking-heading">
                <T>{title}</T>
              </h3>
              <p className="text-[#333333] text-[1rem] leading-tight mt-0.5 tracking-para line-clamp-2">
                <T>{description}</T>
              </p>
            </div>
          </div>
        </div>

        {/* Arrow Icon */}
        <div className="flex-shrink-0 ml-1 transform transition-transform duration-200">
          <svg
            width="18"
            height="18"
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