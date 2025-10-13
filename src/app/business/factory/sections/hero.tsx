"use client";

import Image from "next/image";
import React, { JSX, useContext, useRef } from "react";
import { LoadingContext } from "./utils/LoadingContext";
import { Skeleton } from "@/components/ui/skeleton";
import useInView from "./utils/useInView";
import ButtonGroup from "@/components/ui/ButtonGroup";
import FadeUp from "@/components/ui/FadeUp";

interface Logo {
    src: string;
    name: string;
}

export default function Hero(): JSX.Element {
    const { loading } = useContext(LoadingContext);
    const heroRef = useRef<HTMLElement>(null);
    const isVisible = useInView(heroRef);

    const sectionClasses = "w-full bg-[#F2F2F2] mt-32px md:mt-[40px] py-[24px]";
    const containerClasses =
        "flex flex-col text-center lg:flex-row justify-between max-w-[1280px] mx-auto gap-[12px] px-24px md:px-[32px] items-center";


    const topRow: Logo[] = [
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

    const bottomRow: Logo[] = [
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


    if (loading || !isVisible) {
        return (
            <section
                id="heroSection"
                ref={heroRef}
                className="w-full font-inter flex flex-col items-center justify-center text-center py-10 mt-10 px-4"
            >
                <div className="w-full max-w-[1280px] mx-auto mt-[82px] md:mt-[90px] mb-[40px] px-6 md:px-[32px]">
                    {/* Headings skeleton */}
                    <div className="max-w-[1000px] mx-auto">
                        <Skeleton className="h-12 md:h-16 lg:h-20 w-3/4 mx-auto mb-6 rounded-lg" />
                        <Skeleton className="h-6 md:h-8 lg:h-10 w-5/6 mx-auto mb-4 rounded-lg" />
                        <Skeleton className="h-5 md:h-6 lg:h-7 w-11/12 mx-auto mb-4 rounded-lg" />
                        <Skeleton className="h-4 md:h-5 lg:h-6 w-4/5 mx-auto mb-6 rounded-lg" />
                    </div>

                    {/* Buttons skeleton */}
                    <div className="flex justify-center gap-4 mt-8">
                        <Skeleton className="h-12 w-40 rounded-full" />
                        <Skeleton className="h-12 w-40 rounded-full" />
                    </div>
                </div>

                {/* Video skeleton */}
                <div className="mb-[32px] md:mb-[40px] w-full max-w-[1128px] mx-auto rounded-xl overflow-hidden px-6 md:px-[32px]">
                    <Skeleton className="w-full h-64 md:h-80 lg:h-96 rounded-xl" />
                </div>

                {/* Trusted section skeleton */}
                <section className={sectionClasses}>
                    <div className={containerClasses}>
                        <div className="flex flex-col justify-center flex-1 text-[#333333]">
                            <Skeleton className="h-10 md:h-12 lg:h-14 w-3/4 mx-auto mb-6 rounded-lg" />
                            <Skeleton className="h-6 md:h-7 w-5/6 mx-auto mt-6 rounded-lg" />
                        </div>
                    </div>
                </section>

                {/* Logo marquee skeleton */}
                <div className="w-screen bg-[#FFFFFF] relative mb-[48px]">
                    <div className="max-w-5xl overflow-hidden py-6 mx-auto">
                        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-14 md:w-20 bg-gradient-to-r from-[#FEFEFE] to-transparent" />
                        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-14 md:w-20 bg-gradient-to-l from-[#FEFEFE] to-transparent" />

                        <div className="flex flex-col gap-6">
                            {/* Top Row Skeleton */}
                            <div className="flex animate-scrollLeft w-max flex-shrink-0">
                                {[...Array(13)].map((_, i) => (
                                    <div
                                        key={`top-skeleton-${i}`}
                                        className="flex flex-col items-center mx-4"
                                    >
                                        <Skeleton className="w-32 md:w-56 h-14 md:h-16 rounded-lg" />
                                        <Skeleton className="h-3 w-20 mt-2 rounded" />
                                    </div>
                                ))}
                            </div>

                            {/* Bottom Row Skeleton */}
                            <div className="flex animate-scrollRight w-max flex-shrink-0">
                                {[...Array(13)].map((_, i) => (
                                    <div
                                        key={`bottom-skeleton-${i}`}
                                        className="flex flex-col items-center mx-4"
                                    >
                                        <Skeleton className="w-32 md:w-56 h-14 md:h-16 rounded-lg" />
                                        <Skeleton className="h-3 w-20 mt-2 rounded" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section
            id="heroSection"
            ref={heroRef}
            className="w-full font-inter flex flex-col items-center justify-center text-center"
        >
            <div className="w-full max-w-[1280px] mx-auto mt-[82px] md:mt-[90px] mb-[40px]  px-6 md:px-[32px]">
                {/* Headings */}
                <h1 className="text-fluid-h1 font-semibold text-[#333333] mb-[24px] tracking-heading ">
                      <img src="/images/head.png" alt="Accqrate Books" className="inline-block mb-2 w-[140px] h-[35px] md:w-[180px] md:h-[45px] lg:w-[250px] lg:h-[60px]" /> <span className="text-[#F57C00]">Factory</span>
                </h1>
                <div className="max-w-[1000px] mx-auto">
                    <h2 className="text-fluid-body font-medium text-[#333333] mb-[24px] tracking-para">
                        The All-in-One Manufacturing ERP, <br className="md:hidden" />
                        <span className="font-semibold md:font-medium text-[#F57C00]">ZATCA-Ready</span>{" "}
                    </h2>
                    <p className="text-[14px] md:text-[18px] lg:text-[20px] tracking-para md:font-semibold leading-tight  mb-[16px] md:mb-[24px] text-[#333333]">
                        Effortlessly Manage Your Workforce, Payroll, and Compliance<br className="hidden md:block" /> Payroll, and Compliance
                    </p>

                    {/* Supporting text */}
                    <p className="text-[#737373] text-fluid-small tracking-para">
                        Whether you're scaling, managing a growing team, or optimizing HR operations, Accqrate People is built to simplify every aspect of HR from recruitment to retirement on a single, secure platform.
                    </p>
                </div>

                {/* buttonGroup */}
                <div className="flex justify-center">
                    <ButtonGroup
                        buttons={[
                            {
                                text: "REQUEST A DEMO",
                                href: "/demo",
                                variant: "filled",
                                bgColor: "bg-[#F57C00]",
                                textColor: "text-white",
                            },
                            {
                                text: "CONTACT SALES",
                                href: "/contact",
                                variant: "outline",
                                borderColor: "border-[#F57C00]",
                                textColor: "text-[#F57C00]"
                            },
                        ]}
                    />
                </div>
            </div>

            {/* Dashboard Video */}
            <div className="mb-[32px] md:mb-[40px] w-full max-w-[1128px] mx-auto rounded-xl overflow-hidden  px-6 md:px-[32px]">
                <video autoPlay loop muted playsInline poster="/images/video-poster.jpg" className="w-full h-auto">
                    <source src="/videos/business/books/hero.mp4" type="video/mp4" />
                </video>
            </div>

            <section className={sectionClasses}>
                <div className={containerClasses}>
                    {/* Text */}
                    <FadeUp
                        className="flex flex-col justify-center flex-1 text-[#333333]"
                    >
                        <h2 className="text-fluid-h2 font-medium text-[#333333] tracking-heading">
                            Trusted Across Every <br className="md:hidden" />
                            Industry Ready for Any{" "} <br />
                            <span className="text-[#F57C00] font-semibold tracking--2">
                                Manufacturing Challenge
                            </span>
                        </h2>
                        <p className="mx-auto mt-24px md:text-[18px] mt-6 md:mt-8 text-[16px] text-[#737373] sm:text-base tracking-para font-normal">
                            From chemicals and food to logistics and <br className="md:hidden" /> electronics, Accqrate is the backbone for <br /><span className="text-[#F57C00]">5,000+</span> enterprises worldwide.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* Logo Marquee */}
            <div className="w-screen bg-[#FFFFFF] relative mb-[48px]">
                <div className="max-w-5xl overflow-hidden py-6 mx-auto">
                    <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-14 md:w-20 bg-gradient-to-r from-[#FEFEFE] to-transparent" />
                    <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-14 md:w-20 bg-gradient-to-l from-[#FEFEFE] to-transparent" />

                    <div className="flex flex-col gap-6">
                        <div className="flex animate-scrollLeft w-max flex-shrink-0">
                            {[...topRow, ...topRow].map((logo, i) => (
                                <div key={`top-${i}`} className="flex flex-col items-center mx-4">
                                    <Image
                                        src={logo.src}
                                        alt={logo.name}
                                        width={135}
                                        height={48}
                                        className="h-14 md:h-16 md:w-60 grayscale opacity-90 transition hover:grayscale-0 hover:opacity-100"
                                    />
                                    <p className="mt-2 text-xs md:text-sm text-gray-700 font-medium">{logo.name}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex animate-scrollRight w-max flex-shrink-0">
                            {[...bottomRow, ...bottomRow].map((logo, i) => (
                                <div key={`bottom-${i}`} className="flex flex-col items-center mx-4">
                                    <Image
                                        src={logo.src}
                                        alt={logo.name}
                                        width={135}
                                        height={48}
                                        className="h-14 md:h-16 md:w-60 grayscale opacity-90 transition hover:grayscale-0 hover:opacity-100"
                                    />
                                    <p className="mt-2 text-xs md:text-sm text-gray-700 font-medium">{logo.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
