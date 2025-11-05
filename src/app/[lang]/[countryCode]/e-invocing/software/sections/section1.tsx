"use client";
import React from 'react'
import FadeUp from '@/components/ui/FadeUp'
import T from '@/components/T'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useCountryContent } from "@/hooks/useCountryContent";


interface Feature {
    img: string;
    title: string;
    sub?: string;
    description: string;
}

const features = [
    {
        img: "/images/invoicing/Accqrate_e-invoicing/1.png",
        title: "Change column labels",
        description: "Modify the text in any column to meet your specific requirements",
        sub: ""
    },
    {
        img: "/images/invoicing/Accqrate_e-invoicing/2.png",
        title: "Enterprise‑grade.",
        description: "Adapt the color palette to align with your brand's identity.",
        sub: ""
    },
    {
        img: "/images/invoicing/Accqrate_e-invoicing/3.png",
        title: "Save invoice emplates",
        description: "Leverage your favorite template for efficiency and time savings.",
        sub: ""
    },
    {
        img: "/images/invoicing/Accqrate_e-invoicing/4.png",
        title: "Add your company Logo",
        description: "Incorporate your company's seal on invoices, quotes, receipts, and other paperwork.",
        sub: ""
    }
];


const topRow = [
    { src: "/images/business/books/1.png", name: "Education" },
    { src: "/images/business/books/2.png", name: "Construction & Engineering" },
    { src: "/images/business/books/3.png", name: "Logistics" },
    { src: "/images/business/books/4.png", name: "Insurance" },
    { src: "/images/business/books/5.png", name: "Conglomerate" },
    { src: "/images/business/books/6.png", name: "Pharmacy" },
    { src: "/images/business/books/7.png", name: "Energy" },
    { src: "/images/business/books/8.png", name: "Conglomerate" },
    { src: "/images/business/books/9.png", name: "Insurance" },
    { src: "/images/business/books/10.png", name: "Packaging solutions" },
    { src: "/images/business/books/11.png", name: "Food & Beverage" },
    { src: "/images/business/books/12.png", name: "Trading" },
    { src: "/images/business/books/13.png", name: "Chemicals" },
];

const bottomRow = [
    { src: "/images/business/books/14.png", name: "Hospitality and Tourism" },
    { src: "/images/business/books/15.png", name: "FMCD" },
    { src: "/images/business/books/16.png", name: "Oil & Gas" },
    { src: "/images/business/books/17.png", name: "Home Appliances" },
    { src: "/images/business/books/18.png", name: "Manufacturing" },
    { src: "/images/business/books/19.png", name: "Construction & Engineering" },
    { src: "/images/business/books/20.png", name: "Education" },
    { src: "/images/business/books/21.png", name: "Conglomerate" },
    { src: "/images/business/books/22.png", name: "Electrical Industries Co." },
    { src: "/images/business/books/23.png", name: "Aerospace & Defense" },
    { src: "/images/business/books/24.png", name: "Retail" },
    { src: "/images/business/books/25.png", name: "Ecommerce" },
    { src: "/images/business/books/26.png", name: "Fashion" },
];


const Section1 = () => {
    const { countryContent } = useCountryContent();
    const [enabled, setEnabled] = React.useState(false);
    const carouselRef = useRef<HTMLDivElement>(null);
    const bgImage = countryContent.backgroundImage;
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const scroll = (direction: "left" | "right") => {
        const container = scrollRef.current;
        if (container) {
            const scrollAmount = container.offsetWidth * 0.8; // scroll ~80% width per click
            container.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className='bg-gradient-to-t from-[#EFF3FF] to-transparent'>
            <FadeUp className="mb-8 md:mb-[40px] pt-12 md:pt-[80px] lg:pt-[100px]">
                <h3 className="text-[24px] md:text-[28px] lg:text-[38px] tracking-heading leading-tight font-medium text-[#333333] text-center mx-auto">
                    <T>Trusted by  </T><br className="md:hidden" /><span className="text-[#194BED]"><T>5,000+ Global companies</T></span>
                </h3>
            </FadeUp>

            {/* Logo Marquee */}
            <div className="relative">
                <div className="max-w-5xl overflow-hidden py-6 mx-auto">
                    <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-14 md:w-20" />
                    <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-14 md:w-20" />

                    <div className="flex flex-col gap-6">
                        <div className="flex animate-scrollLeft w-max flex-shrink-0">
                            {[...topRow, ...topRow].map((logo, i) => (
                                <div key={`top-${i}`} className="flex flex-col items-center mx-4">
                                    <Image
                                        src={logo.src}
                                        alt={logo.name}
                                        width={135}
                                        height={48}
                                        className="h-12 md:h-16 w-40 md:w-60 grayscale opacity-90 transition hover:grayscale-0 hover:opacity-100"
                                    />
                                    <p className=" text-xs md:text-sm text-[#737373] font-medium">{logo.name}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex animate-scrollRight w-max flex-shrink-0">
                            {[...bottomRow, ...bottomRow].map((logo, i) => (
                                <div key={`bottom-${i}`} className="flex flex-col items-center mx-4">
                                    <img
                                        src={logo.src}
                                        alt={logo.name}
                                        width={135}
                                        height={48}
                                        className="h-12 md:h-16 w-40 md:w-60 grayscale opacity-90 transition hover:grayscale-0 hover:opacity-100"
                                    />
                                    <p className=" text-xs md:text-sm text-[#737373] font-medium">{logo.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-6 md:px-8 xl:px-0 max-w-[1280px] mx-auto xl:flex items-end justify-between gap-20">
                {/* Left Text */}
                <div className="flex-1">
                    <h1 className="text-[24px] md:text-[28px] lg:text-[38px] font-medium pt-[30px] md:pt-[37px] tracking-heading leading-tight">
                        Customize and send invoices easily
                    </h1>
                    <div className='space-y-2 md:space-y-4 mt-4'>
                        <p className="text-fluid-body lg:text-[16px] max-w-[662px] tracking-para leading-tight">
                            Sending an invoice should be easy - and we`ve made it so
                        </p>
                        <p className="text-fluid-body lg:text-[16px] max-w-[662px] tracking-para leading-tight">
                            Perfectly aligned with your needs and brand
                        </p>
                        <p className="text-fluid-body lg:text-[16px] text-[#194BED] max-w-[662px] tracking-para leading-tight">
                            Invoices Custom-Made for Your Business
                        </p>
                        <button
                            className="h-[40px] md:h-[46px] w-[200px] xl:w-auto max-w-[399px] flex items-center justify-between px-4 text-white text-fluid-small md:text-[18px]"
                            style={{ background: 'linear-gradient(90deg, #194BED 0%, #29266E 100%)' }}
                        >
                            See It in Action
                        </button>
                    </div>
                </div>
            </div>

            <div className="relative mt-6 md:mt-8">
                {/* 🔹 Top Section (Buttons) */}
                <div className="max-w-[1280px] mx-auto px-6 md:px-8 xl:px-0 flex justify-end mb-6 gap-3">
                    <button
                        onClick={() => scroll("left")}
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow hover:bg-gray-100 transition"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-700" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow hover:bg-gray-100 transition"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-700" />
                    </button>
                </div>

                {/* 🔹 Scrollable Row - Fixed ref placement */}
                <div
                    className="overflow-x-auto scrollbar-hide"
                    ref={scrollRef}
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    <div className="max-w-[1280px] mx-auto px-6 md:px-8 xl:px-0">
                        <div
                            className="flex gap-6 md:gap-8 pb-4 min-w-max"
                            style={{ scrollSnapType: 'x mandatory' }}
                        >
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="relative flex-shrink-0 bg-white rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] scroll-snap-align-start 
          w-[280px] sm:w-[300px] md:w-[340px] 
          h-[320px] lg:h-[372px]
          p-6 md:p-8 
          flex flex-col gap-2
          transition-all hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                                >
                                    {/* Image Left + Number Right */}
                                    <div className="flex justify-center items-center">
                                        <img
                                            src={feature.img}
                                            alt={feature.title}
                                            className="w-full max-h-[150px] h-auto object-contain"
                                        />
                                        <span className="font-anonymous text-[38px] font-bold text-[#E6E6E6] leading-none select-none">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <div className="mb-3 min-h-[60px] space-y-4">
                                        <div>
                                            <h2 className="text-fluid-body font-medium text-[#000000] leading-tight mb-1">
                                                <T>{feature.title}</T>
                                            </h2>
                                            {feature.sub && (
                                                <h2 className="text-fluid-body font-medium text-[#000000] leading-tight">
                                                    <T>{feature.sub}</T>
                                                </h2>
                                            )}
                                        </div>
                                        {/* Description */}
                                        <div className="">
                                            <p className="text-[#000000] text-fluid-small leading-relaxed">
                                                <T>{feature.description}</T>
                                            </p>
                                        </div>
                                    </div>


                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='max-w-[1280px] mx-auto py-8 md:py-10 lg:py-[80px]'>
                <div className='px-6 md:px-8 xl:px-0 text-center'>
                    <h1 className="text-fluid-h2 lg:text-[38px] font-medium text-[#000000] text-center leading-tight">
                        Requirements for ZATCA-Compliant <span className='text-[#194BED]'>E-Invoicing</span> in Phase 1 & 2
                    </h1>
                    <p className='text-fluid-body text-[#5A6183] mt-6 md:mt-8 lg:mt-10'>Effortless ZATCA Compliance: Your Guide to Phase 1 & 2 with Accqrate</p>
                </div>

                <div className="mt-10 md:mt-12 lg:mt-[80px] px-6 md:px-8 xl:px-0">
                    {/* Generation Phase */}
                    <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8 lg:gap-12">

                        {/* Left Content */}
                        <div className="lg:w-1/2">
                            <h3 className="text-fluid-h2 lg:text-[38px] font-normal text-[#000000] leading-tight">
                                Generation Phase
                            </h3>

                            <ul className="text-[#333333] text-fluid-small tracking-para leading-[30px] space-y-3 md:space-y-[16px] pl-5 mt-4 md:mt-6 lg:mt-8 list-disc">
                                <li>Generation of Tax Invoices and Simplified e-invoices</li>
                                <li>Storage of e-invoices</li>
                                <li>Approved invoice templates</li>
                                <li>QR Code Integration</li>
                                <li>Confirmation of the QR code with the ZATCA mobile app</li>
                                <li>Send mail to buyer automatically from the application</li>
                                <li>Control your invoice payments and outstanding summary</li>
                            </ul>
                        </div>

                        {/* Right Image */}
                        <div className="lg:w-1/2 flex justify-center">
                            <img
                                src="/images/invoicing/Generation.png"
                                alt="Generation Phase illustration"
                                className="max-w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Integration Phase */}
                    <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8 lg:gap-12 mt-10 md:mt-12 lg:mt-[80px]">

                        {/* Left Content */}
                        <div className="lg:w-1/2 lg:order-2">
                            <h3 className="text-fluid-h2 lg:text-[38px] font-normal text-[#000000] leading-tight">
                                Integration Phase
                            </h3>

                            <ul className="text-[#333333] text-fluid-small tracking-para leading-[30px] space-y-3 md:space-y-[16px] pl-5 mt-4 md:mt-6 lg:mt-8 list-disc">
                                <li>Integration with Fatoora portal</li>
                                <li>Onboard devices & generate OTP</li>
                                <li>E-invoice generation and hashing XML - Tax & Simplified invoices</li>
                                <li>Generate Digital signature</li>
                                <li>Integrate the Zatca QR code</li>
                                <li>Generate PDF/A3 with integrated XML</li>
                                <li>Dashboards in the application</li>
                                <li>Track acceptance/rejections</li>
                                <li>Take corrective actions with simple clicks</li>
                                <li>Send Mail to Buyer automatically the approved e-invoices</li>
                            </ul>
                        </div>

                        {/* Right Image */}
                        <div className="lg:w-1/2 flex justify-center lg:order-1">
                            <img
                                src="/images/invoicing/Integration.png"
                                alt="Generation Phase illustration"
                                className="max-w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section1
