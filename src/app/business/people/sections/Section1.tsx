"use client";

import React, { useContext, useRef } from "react";
import type { JSX } from "react";
import { LoadingContext } from "./utils/LoadingContext";
import Skeleton from "@/components/ui/skeleton";
import useInView from "./utils/useInView";
import FeatureCard from "./ui/FeatureCard";
import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";

interface Logo {
    src: string;
    name: string;
}

export default function Transform(): JSX.Element {
    const { loading } = useContext(LoadingContext);
    const onboardRef = useRef<HTMLDivElement | null>(null);
    const isVisible = useInView(onboardRef as React.RefObject<Element>);

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
                ref={onboardRef}
                className="w-full max-w-[1280px] mx-auto font-inter flex flex-col items-center justify-center text-center py-10 mt-10 px-4"
            >
                {/* Skeletons for loading state */}
                <Skeleton height="28px" width="70%" className="mb-4 mx-auto" />
                <Skeleton height="22px" width="50%" className="mb-4 mt-4 mx-auto" />
                <Skeleton height="22px" width="60%" className="mb-4 mx-auto" />

                {/* Example placeholder cards */}
                <div className="flex flex-col md:flex-row justify-center gap-6 lg:gap-16 mt-6">
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="w-[320px] md:w-[340px] h-[270px] md:h-[400px] rounded-xl p-4 bg-[#F2F2F2] shadow"
                        >
                            <Skeleton className="w-full h-32 md:h-48 rounded-lg mb-4" />
                            <Skeleton className="w-3/4 h-5 rounded mb-2" />
                            <Skeleton className="w-full h-4 rounded mb-2" />
                            <Skeleton className="w-5/6 h-4 rounded" />
                        </div>
                    ))}
                </div>

                {/* Other skeletons here... */}
            </section>
        );
    }

    return (
        <>
            <div className="px-[24px] md:px-[32px] max-w-[1280px] mx-auto font-inter">
                {/* Heading */}
                <FadeUp>
                    <h2 className="max-w-[340px] mx-auto sm:max-w-[800px] font-medium text-fluid-h2 font-inter text-[#000000] tracking-heading text-center mb-6">
                        Transform Your <span className="text-[#43A047]">HR and Payroll</span>{" "}
                        Today
                    </h2>

                    {/* Description */}
                    <p className="pb-6 text-[#000000B2] lg:text-fluid-body tracking-para text-fluid-small text-center">
                        Accqrate People brings your HR & Payroll processes together in one
                        unified platform. Forget <br className="hidden md:block" /> endless
                        spreadsheets, outdated systems, and manual errors. Accqrate People is
                        designed to <br className="hidden md:block" /> automate and simplify:
                    </p>
                </FadeUp>

                {/* Feature cards */}
                <div className="flex flex-col md:flex-row justify-center mx-auto gap-4 items-center lg:gap-10 mb-[48px] md:mb-[56px]">
                    <FeatureCard
                        videoSrc="/videos/business/books/cloud-first.mp4"
                        title="Payroll"
                        description="Automate calculations, streamline payslip generation, and ensure compliance without the headache."
                    />
                    <FeatureCard
                        videoSrc="/videos/business/books/all-devices.mp4"
                        title="HR Management"
                        description="From recruitment and onboarding to performance and asset management, handle it all effortlessly."
                    />
                    <FeatureCard
                        videoSrc="/videos/business/books/no-special-hardware.mp4"
                        title="Compliance"
                        description="Always stay in control with up-to-date compliance tools for local regulations and international standards."
                    />
                </div>

                {/* Accordions & other UI continue... */}
            </div>

            {/* Logo Marquee */}
            <FadeUp className="text-fluid-h2 max-w-[340px] md:max-w-full leading-tight mx-auto mt-[48px] tracking-heading md:text-fluid-h2 lg:text-[38px] font-medium text-center mb-4 px-[24px]">
                Trusted by{" "}
                <span className="text-[#43A047] md:whitespace-nowrap">
                    Global Leaders
                </span>{" "}
                Across Industries
            </FadeUp>

            <div className="w-screen relative mb-[48px] md:mb-[56px]">
                <div className="max-w-5xl overflow-hidden py-6 mx-auto">
                    <div className="flex flex-col gap-6">
                        <div className="flex animate-scrollLeft w-max flex-shrink-0">
                            {[...topRow, ...topRow].map((logo, i) => (
                                <div key={`top-${i}`} className="flex flex-col items-center mx-4">
                                    <div className="relative w-[135px] h-[48px] md:w-[240px] md:h-[64px]">
                                        <Image
                                            src={logo.src}
                                            alt={logo.name}
                                            fill
                                            className="object-contain grayscale opacity-90 transition hover:grayscale-0 hover:opacity-100"
                                        />
                                    </div>
                                    <p className="mt-2 text-xs md:text-sm text-gray-700 font-medium">
                                        {logo.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="flex animate-scrollRight w-max flex-shrink-0">
                            {[...bottomRow, ...bottomRow].map((logo, i) => (
                                <div
                                    key={`bottom-${i}`}
                                    className="flex flex-col items-center mx-4"
                                >
                                    <div className="relative w-[135px] h-[48px] md:w-[240px] md:h-[64px]">
                                        <Image
                                            src={logo.src}
                                            alt={logo.name}
                                            fill
                                            className="object-contain grayscale opacity-90 transition hover:grayscale-0 hover:opacity-100"
                                        />
                                    </div>
                                    <p className="mt-2 text-xs md:text-sm text-gray-700 font-medium">
                                        {logo.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
