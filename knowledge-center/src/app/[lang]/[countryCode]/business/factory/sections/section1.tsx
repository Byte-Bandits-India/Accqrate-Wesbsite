"use client";

import React, { JSX, useContext, useRef } from "react";
import { LoadingContext } from "./utils/LoadingContext";
import { Skeleton } from "@/components/ui/skeleton";
import useInView from "./utils/useInView";
import { AccordionCard } from "./ui/accordion";
import FadeUp from "@/components/ui/FadeUp";
import { useEffect, useState } from "react";

export default function FeatureSection(): JSX.Element {
    const { loading } = useContext(LoadingContext);
    const onboardRef = useRef<HTMLElement>(null);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Trigger as soon as any part of the section enters viewport
    const isVisible = useInView(onboardRef, { threshold: 0 });

    const sectionPadding =
        "mt-24px md:mt-[32px] lg:mt-[40px] w-full px-6 md:px-8 xl:px-0 max-w-[1350px] mx-auto";

    // --- SKELETON SECTION ---
    if (loading || !isVisible) {
        return (
            <section
                id="OnboardSection"
                ref={onboardRef}
                className="w-full max-w-[1280px] mx-auto font-inter flex flex-col items-center justify-center text-center py-10 mt-10 px-4"
            >
                {/* Main Heading Skeleton */}
                <div className="w-full max-w-4xl mx-auto mb-8">
                    <Skeleton className="h-10 md:h-12 lg:h-14 w-3/4 mx-auto mb-4 rounded-lg" />
                    <Skeleton className="h-6 w-5/6 mx-auto mb-6 rounded-lg" />
                </div>

                {/* Video skeleton */}
                <div className="mb-8 w-full max-w-[1128px] mx-auto rounded-xl overflow-hidden">
                    <Skeleton className="w-full h-48 md:h-64 lg:h-80 rounded-xl" />
                </div>

                {/* Testimonial Skeleton */}
                <div className="w-full max-w-5xl mx-auto mb-8">
                    <div className="bg-gray-100 rounded-lg p-6 h-48 md:h-56">
                        <Skeleton className="h-4 w-full mb-3 rounded" />
                        <Skeleton className="h-4 w-full mb-3 rounded" />
                        <Skeleton className="h-4 w-3/4 mb-3 rounded" />
                        <Skeleton className="h-4 w-1/2 mb-6 rounded" />
                        <Skeleton className="h-4 w-2/5 ml-auto rounded" />
                    </div>
                </div>

                {/* Accordion Cards Skeleton */}
                <div className="mt-12 w-full max-w-[1350px] mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                        {[...Array(4)].map((_, idx) => (
                            <div key={idx} className="bg-white rounded-lg p-4 border border-gray-200">
                                <Skeleton className="h-6 w-4/5 mb-3 rounded" />
                                <Skeleton className="h-4 w-full mb-2 rounded" />
                                <Skeleton className="h-4 w-3/4 rounded" />
                                <Skeleton className="h-32 w-full mt-4 rounded-lg" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Button Skeleton */}
                <div className="my-8 max-w-[1280px] w-full mx-auto">
                    <Skeleton className="h-14 w-full max-w-2xl mx-auto rounded-[50px]" />
                </div>
            </section>
        );
    }

    type Card = {
        title: string;
        desc: string;
        video: string;
    };

    const cards: Card[] = [
        { title: "ZATCA Phase 2 E-Invoicing", desc: "Works instantly on Android, iOS, Windows, and Mac", video: "/videos/business/retail/card1.mp4" },
        { title: "Full Bilingual Support", desc: "Cloud-based and ready to use — no installations or IT assistance needed.", video: "/videos/business/retail/card2.mp4" },
        { title: "Cloud or On-Premises", desc: "No drivers, no manual setup—automatic detection and configuration", video: "/videos/business/retail/card3.mp4" },
        { title: "Unified Modules", desc: "Receipts print, cut and display for customers instantly.", video: "/videos/business/retail/card4.mp4" },
    ];

    return (
        <>
            <section id="OnboardSection" className="w-full">
                <div className="px-[24px] md:px-[32px] max-w-[1280px] mx-auto font-inter">
                    {/* Heading */}
                    <FadeUp>
                        <h2 className="text-fluid-h2 font-inter text-[#333333] text-center tracking-heading mb-6">
                            Don't Let <span className="text-[#F57C00]">Legacy ERP</span><br className="md:hidden" />
                            Hold You Back
                        </h2>

                        {/* Shared description */}
                        <p className="text-[16px] mb-6 md:mb-[32px] font-medium text-[#737373] text-center md:max-w-[700px] mx-auto tracking-para">
                            SAP ECC, Navision 6, and other legacy systems are reaching end of life - risking compliance, agility, and business growth. Saudi manufacturing needs a future-ready scalable application to support the production processes.
                        </p>
                    </FadeUp>

                    {/* Dashboard Video */}
                    <div className="mb-[32px] md:mb-[40px] w-full max-w-[1128px] mx-auto rounded-xl overflow-hidden">
                        <video autoPlay loop muted playsInline poster="/images/video-poster.jpg" className="w-full h-auto">
                            <source src="/videos/business/books/hero.mp4" type="video/mp4" />
                        </video>
                    </div>

                    {/* Testimonial Section */}
                    <FadeUp className="mt-6">
                        <div
                            className="bg-gradient-to-r from-[#E6E6E6] to-[#C8C8C8] rounded-lg mx-auto
              p-6 sm:p-6 md:max-w-5xl
              h-auto
              flex flex-col items-center justify-center"
                        >
                            <div className="max-w-[800px] mx-auto w-full">
                                <p className="text-[14px] md:text-[20px] font-normal tracking-para text-[#333333] md:leading-10 text-left md:text-left">
                                    "We left SAP ECC behind, Accqrate Factory delivered high quality manufacturing modules with real-time visibility in less than a quarter. Migration was faster than we imagined."
                                </p>
                                <p className="text-[14px] md:text-[18px] md:leading-10 tracking-para font-light text-[#333333] mt-6 text-right pr-4">
                                    —CIO, Leading Chemical <br /> Manufacturer, Jubail
                                </p>
                            </div>
                        </div>
                    </FadeUp>
                </div>

                <div className="mt-[48px] md:mt-[56px] max-w-[1280px] mx-auto font-inter text-center">
                    <section id="transformSection" className={sectionPadding}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[16px]">
                            {cards.map((card, idx) => (
                                <AccordionCard
                                    key={idx}
                                    title={card.title}
                                    desc={card.desc}
                                    video={card.video}
                                    isOpen={openIndex === idx}
                                    onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
                                />
                            ))}
                        </div>
                    </section>

                    <div className="my-8 max-w-[1280px] w-full mx-auto px-6 md:px-8 xl:px-0">
                        <button className="border border-[#F57C00] h-[50px] md:h-[60px] w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-[50px] flex items-center justify-center mx-auto">
                            <h2 className="text-[#F57C00] text-fluid-body font-bold tracking-para text-center">
                                SEE ACCQRATE FACTORY IN ACTION
                            </h2>
                        </button>
                    </div>

                </div>
            </section>
        </>
    );
}