"use client";

import { useState, useContext, useRef, JSX } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { LoadingContext } from "./utils/LoadingContext";
import { Skeleton } from "@/components/ui/skeleton";
import useInView from "./utils/useInView";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import React from "react";
import FadeUp from "@/components/ui/FadeUp"

interface DropdownItem {
    label: string;
    content: string;
}

export default function AutomationSection(): JSX.Element {
    const dropdowns: DropdownItem[] = [
        {
            label: "AI Bank Reconciliation",
            content:
                "Imports, matches, and reconciles your statements—up to 10x faster.",
        },
        {
            label: "Auto-Invoice Conversion",
            content:
                "Turn POs into invoices or bills in a single click.",
        },
        {
            label: "Expense Classification",
            content:
                "AI suggests categories, flags anomalies for review.",
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { loading } = useContext(LoadingContext);
    const automationRef = useRef<HTMLDivElement | null>(null);
    const isVisible = useInView(automationRef, { threshold: 0 });

    const toggleDropdown = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    interface FAQItem {
        question: string;
        answer: string;
    }

    const faqItems: FAQItem[] = [
        {
            question: "Is Accqrate Factory ZATCA Phase 2 compliant?",
            answer:
                "Deployment depends on your organization's size and requirements, but most clients get started within weeks.",
        },
        {
            question: "Can you migrate my data from SAP, Navision, Odoo?",
            answer:
                "Yes, Accqrate People integrates seamlessly with a wide range of HR and payroll systems.",
        },
        {
            question: "Can I run on-premises?",
            answer:
                "Absolutely. Data security is a top priority, with enterprise-grade encryption and compliance standards.",
        },
        {
            question: "Is Arabic UI included?",
            answer:
                "Absolutely. Data security is a top priority, with enterprise-grade encryption and compliance standards.",
        },
        {
            question: "Is my data secure?",
            answer:
                "Absolutely. Data security is a top priority, with enterprise-grade encryption and compliance standards.",
        },
    ];

    if (loading || !isVisible) {
        return (
            <div ref={automationRef} className="bg-white px-6 md:px-[32px] max-w-[1280px] mx-auto mt-6 md:mt-8">
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

                {/* FAQ Section Skeleton */}
                <section className="md:m-10 my-8 md:py-10 lg:m-[60px] lg:py-[60px] max-w-[1280px] mx-auto grid gap-6 md:grid-cols-2 md:items-start">
                    {/* Left Column - FAQ Title */}
                    <div className="self-center text-center md:text-left space-y-4">
                        <Skeleton className="h-10 md:h-12 w-64 mx-auto md:mx-0 rounded-lg" />
                        <Skeleton className="h-10 md:h-12 w-48 mx-auto md:mx-0 rounded-lg" />
                    </div>

                    {/* Right Column - FAQ Items */}
                    <div className="space-y-4">
                        {[...Array(5)].map((_, index) => (
                            <div key={index} className="border-b border-gray-200 pb-4">
                                <Skeleton className="h-6 w-full mb-2 rounded" />
                                <Skeleton className="h-4 w-5/6 rounded" />
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section Skeleton */}
                <div className="w-full py-6 md:py-8">
                    <div className="max-w-[1280px] mx-auto px-6 md:px-8">
                        {/* Heading Skeleton */}
                        <div className="text-center mb-8">
                            <Skeleton className="h-8 w-80 mx-auto md:hidden rounded-lg" />
                            <Skeleton className="h-10 w-96 mx-auto hidden md:block rounded-lg" />
                        </div>

                        {/* Buttons Skeleton */}
                        <div className="flex flex-col md:flex-row gap-4 w-full max-w-3xl mx-auto justify-center">
                            <Skeleton className="h-12 w-full md:w-40 rounded-md" />
                            <Skeleton className="h-12 w-full md:w-40 rounded-md" />
                            <Skeleton className="h-12 w-full md:w-40 rounded-md" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="bg-white px-6 md:px-[32px] max-w-[1280px] mx-auto mt-6 md:mt-8">
                {/* Heading */}
                <FadeUp>
                    <h2 className="text-fluid-h2 font-inter text-[#333333] text-center mb-6 tracking-heading">
                        Integrated <span className="text-[#F57C00]">Sales, HR, DMS, Payroll</span>
                    </h2>

                    {/* Shared description */}
                    <p className="text-fluid-small lg:text-[16px] mb-6 md:mb-[32px] text-[#737373] text-center max-w-[700px] mx-auto tracking-para">
                        From quotation to delivery, employee payroll, and <br className="md:hidden" /> document approvals with Accqrate Factory connects<br className="md:hidden" /> every department.
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

                {/* FAQ */}
                <section className="md:m-10 my-8 md:py-10 lg:m-[60px] lg:py-[60px] max-w-[1280px] mx-auto grid gap-6 md:grid-cols-2 md:items-start">
                    <FadeUp className="self-center text-center md:text-left">
                        <h2 className="text-fluid-h2 lg:text-[48px] font-semibold text-[#333333] tracking-heading">
                            Any Questions?
                        </h2>
                        <h3 className="text-[#F57C00] md:text-[#333333] lg:text-[48px] text-fluid-h2 font-bold tracking-heading">
                            We Got You !!!
                        </h3>
                    </FadeUp>

                    <FadeUp>
                        <Accordion type="single" collapsible className="w-full text-left">
                            {faqItems.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`faq-${index}`}
                                    className="space-y-8"
                                >
                                    <AccordionTrigger className="text-fluid-body font-light text-gray-800 lg:text-[26px] leading-8 md:mt-6">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-fluid-caption lg:text-[22px] font-light text-gray-600">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </FadeUp>
                </section>

                {/* CTA Section */}
                <div className="w-full py-6 md:py-8">
                    <div className="max-w-[1280px] mx-auto px-6 md:px-8 ">
                        <FadeUp>
                            <h3 className="text-[#333333] font-semibold tracking-heading text-center text-fluid-h2 md:hidden">
                                Ready to modernize your <br className="md:hidden" /> <span className="text-[#F57C00]">manufacturing?</span>
                            </h3>
                        </FadeUp>

                        <FadeUp className="flex flex-col md:flex-row gap-3 px-8 w-full max-w-[1280px] mx-auto md:justify-center mt-8">
                            <button className="bg-[#F57C00] text-white py-3 px-4 rounded-md w-full md:w-[300px] md:h-[58px]">
                                REQUEST A DEMO
                            </button>
                            <button className="bg-[#F57C00] text-white py-3 px-4 rounded-md w-full md:w-[300px] md:h-[58px]">
                                CONTACT SALES
                            </button>
                            <button className="bg-[#F57C00] text-white py-3 px-4 rounded-md w-full md:w-[300px] md:h-[58px]">
                                LEARN MORE
                            </button>
                        </FadeUp>
                    </div>
                </div>
            </div>
        </>
    );
}