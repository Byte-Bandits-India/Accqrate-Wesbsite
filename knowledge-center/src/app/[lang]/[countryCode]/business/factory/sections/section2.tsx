"use client";

import { LoadingContext } from "./utils/LoadingContext";
import { Skeleton } from "@/components/ui/skeleton";
import useInView from "./utils/useInView";
import { useContext, useRef } from "react";
import FadeUp from "@/components/ui/FadeUp";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";
import React from "react";

interface DropdownItem {
    title: string;
    content: string;
}

export default function AccountSections(): React.JSX.Element {
    const { loading } = useContext(LoadingContext);
    const financialRef = useRef<HTMLDivElement | null>(null);
    const isVisible = useInView(financialRef, { threshold: 0 });

    // Seamless Integration
    const integrationDropdowns: DropdownItem[] = [
        { title: "Instant ERP Integration", content: "Add procurement, inventory, payroll, and HR modules without migrations or reimplementation." },
        { title: "API & Marketplace", content: "Connect to banks, e-commerce, or any third-party — future-proof your finance stack." },
        { title: "No Vendor Lock-in", content: "Data is always yours; export, back up, and migrate on demand." },
    ];

    // Robust Control
    const controlDropdowns: DropdownItem[] = [
        { title: "Role-Based Access", content: "Define granular permissions, approve sensitive actions, and monitor changes." },
        { title: "Automated Audit Logs", content: "Every entry, change, or deletion is tracked — satisfy any auditor instantly." },
        { title: "Disaster Recovery & Data Security", content: "Bank-level encryption, real-time backups, and local data hosting for KSA." },
    ];

    if (loading || !isVisible) {
        return (
            <div ref={financialRef} className="w-full font-inter">
                <div className="max-w-[1280px] mx-auto px-6 md:px-[40px]">
                    {/* Heading Skeleton */}
                    <div className="text-center mb-6">
                        <Skeleton className="h-10 md:h-12 lg:h-14 w-3/4 mx-auto mb-4 rounded-lg" />
                        <Skeleton className="h-6 w-5/6 mx-auto rounded-lg" />
                    </div>

                    {/* Description Skeleton */}
                    <div className="max-w-[700px] mx-auto mb-6 md:mb-8">
                        <Skeleton className="h-4 w-full mb-2 rounded" />
                        <Skeleton className="h-4 w-4/5 mx-auto rounded" />
                    </div>

                    {/* Video Skeleton */}
                    <div className="w-full max-w-[1128px] mx-auto mb-8">
                        <Skeleton className="w-full h-48 md:h-64 lg:h-80 rounded-xl" />
                    </div>

                    {/* Button Skeleton */}
                    <div className="my-8 max-w-[1280px] w-full mx-auto px-0 md:px-8 xl:px-0">
                        <Skeleton className="h-14 w-full max-w-2xl mx-auto rounded-[50px]" />
                    </div>

                    {/* Testimonial Section Skeleton */}
                    <div className="mt-6">
                        <div className="bg-gray-100 rounded-lg mx-auto p-6 md:max-w-5xl h-48 md:h-56">
                            <Skeleton className="h-4 w-full mb-3 rounded" />
                            <Skeleton className="h-4 w-full mb-3 rounded" />
                            <Skeleton className="h-4 w-3/4 mb-3 rounded" />
                            <Skeleton className="h-4 w-1/2 mb-6 rounded" />
                            <Skeleton className="h-4 w-2/5 ml-auto rounded" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full font-inter">
            <div className="max-w-[1280px] mx-auto px-6 md:px-[40px]">
                {/* Heading */}
                <FadeUp>
                    <h2 className="text-fluid-h2 font-inter text-[#333333] tracking-heading text-center mb-6">
                        Migrate <span className="text-[#F57C00]">in Days</span> , Not Months
                    </h2>

                    {/* Shared description */}
                    <p className="text-fluid-small lg:text-[16px] mb-6 md:mb-[32px] tracking-para max-w-[700px] mx-auto text-[#737373] text-center">
                        Switch from legacy SAP, Microsoft, or other non Scaling ERPs with expert migration and data integrity assurance. Our specialists handle data mapping, training, and integration with zero downtime.
                    </p>
                </FadeUp>
                <video
                    className="w-full h-[201px] md:h-full max-w-[1128px] mx-auto"
                    autoPlay
                    muted
                    loop
                >
                    <source src="/videos/business/books/100_zatcha_e-invoicing-complaince.mp4" type="video/mp4" />
                </video>

                <div className="my-8 max-w-[1280px] w-full mx-auto px-0 md:px-8 xl:px-0">
                    <button className="bg-[#F57C00] h-[50px] md:h-[60px] w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-[50px] py-2 flex items-center justify-center mx-auto">
                        <h2 className="text-fluid-body text-[#FFFFFF]  tracking-para text-center font-semibold">
                            BOOK YOUR FREE <br className="md:hidden" /> MIGRATION ASSESSMENT
                        </h2>
                    </button>
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
                            <p className="text-[14px] md:text-[20px] font-normal tracking-para text-[#333333] md:leading-10 text-left">
                                "We left SAP ECC behind, Accqrate Factory delivered high quality manufacturing modules with real-time visibility in less than a quarter. Migration was faster than we imagined."
                            </p>
                            <p className="text-[14px] md:text-[18px] md:leading-10 text-[#333333] font-light mt-6 text-right pr-4">
                                —CIO, Leading Chemical <br /> Manufacturer, Jubail
                            </p>
                        </div>
                    </div>
                </FadeUp>
            </div>
        </div>
    );
}