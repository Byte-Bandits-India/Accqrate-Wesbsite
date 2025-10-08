"use client";

import { useState, useContext, useRef, JSX } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { LoadingContext } from "@/app/business/books/sections/utils/LoadingContext";
import { Skeleton } from "@/components/ui/skeleton";
import useInView from "@/app/business/books/sections/utils/useInView";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import React from "react";
import FadeUp from "../../../../components/ui/FadeUp"



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

  if (loading || !isVisible) {
    return (
      <div ref={automationRef} className="bg-white py-12 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto">
        {/* ================= AI-Driven Automation Skeleton ================= */}
        <div className="border-[#E3E3E3] border-[22px] font-inter md:h-auto lg:h-auto xl:h-[615px] py-6 px-4 rounded-xl md:rounded-2xl mx-auto mb-6 md:mb-[56px] md:flex md:items-center gap-8">
          {/* Left Side - Content */}
          <div className="flex-1 md:max-w-[400px] lg:max-w-[520px]">
            {/* Title & Description */}
            <div className="mb-8">
              <Skeleton className="h-8 w-3/4 mb-4 rounded-lg" />
              <Skeleton className="h-6 w-5/6 rounded-lg" />
            </div>

            {/* Description */}
            <Skeleton className="h-5 w-full mb-2 rounded-lg" />
            <Skeleton className="h-5 w-4/5 mb-8 rounded-lg" />

            {/* Accordion Skeletons */}
            <div className="space-y-4">
              {dropdowns.map((_, index) => (
                <div key={index} className="border-b border-gray-300 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <Skeleton className="h-6 w-3/4 rounded-lg" />
                    <Skeleton className="h-5 w-5 rounded-full" />
                  </div>
                  <Skeleton className="h-4 w-full rounded-lg" />
                  <Skeleton className="h-4 w-5/6 mt-1 rounded-lg" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Video */}
          <div className="flex-1 mt-8 md:mt-0 flex items-center justify-center">
            <Skeleton className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl" />
          </div>
        </div>

        {/* ================= Support Section Skeleton ================= */}
        <div className="my-12 mx-auto font-inter md:max-w-5xl">
          {/* Heading */}
          <div className="text-center mb-8">
            <div className="md:flex md:justify-center md:items-center md:gap-2 mb-4">
              <Skeleton className="h-10 w-64 mx-auto md:mx-0 mb-2 md:mb-0 rounded-lg" />
              <Skeleton className="h-10 w-48 mx-auto md:mx-0 rounded-lg" />
            </div>
            <Skeleton className="h-6 w-3/4 mx-auto rounded-lg" />
          </div>

          {/* Unified Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="relative w-full max-w-[354px] md:max-w-none h-[370px] lg:h-[400px] mx-auto">
                {/* Main Card */}
                <div className="absolute inset-0 bg-gray-200 rounded-xl p-[2.5px]">
                  <div className="relative w-full h-full bg-white rounded-lg flex flex-col overflow-hidden">
                    {/* Video Area */}
                    <Skeleton className="w-full h-[170px] rounded-t-lg" />

                    {/* Content Area */}
                    <div className="p-4 flex-1 flex flex-col">
                      <Skeleton className="h-6 w-3/4 mx-auto mb-3 rounded-lg" />
                      <Skeleton className="h-4 w-full mb-2 rounded-lg" />
                      <Skeleton className="h-4 w-5/6 mx-auto mb-4 rounded-lg" />

                      {/* Bottom Text */}
                      <div className="mt-auto">
                        <Skeleton className="h-5 w-32 rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow Area Skeleton */}
                <div className="pointer-events-none absolute inset-0 z-20">
                  <div className="absolute right-8 bottom-2 md:right-10 md:bottom-1">
                    <Skeleton className="h-6 w-6 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= Why Choose Section Skeleton ================= */}
        <div className="my-12 md:my-[56px] lg:my-10 bg-[#F2F2F2] w-full py-12">
          <div className="max-w-[1280px] mx-auto px-6 md:px-[32px] font-inter">
            {/* Title */}
            <div className="text-center mb-12">
              <Skeleton className="h-10 w-80 mx-auto mb-2 rounded-lg" />
              <Skeleton className="h-10 w-64 mx-auto rounded-lg" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
              {/* Image Skeleton */}
              <div className="flex items-center justify-center">
                <Skeleton className="w-[320px] sm:w-[360px] md:w-[420px] lg:w-[480px] h-[300px] rounded-xl" />
              </div>

              {/* List Skeleton */}
              <div className="space-y-4 md:space-y-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Skeleton className="h-5 w-5 rounded-full mt-1 flex-shrink-0" />
                    <Skeleton className="h-5 w-full rounded-lg" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white px-6 md:px-[32px] max-w-[1280px] mx-auto">
        {/* ================= AI-Driven Automation ================= */}
        <FadeUp className="border-[#E3E3E3] border-[22px] font-inter md:h-auto lg:h-auto xl:h-[615px] py-6 px-4 rounded-xl md:rounded-2xl mx-auto mb-6 md:mb-[56px]
  md:flex md:items-center">

          {/* Left Side */}
          <div className="flex-1 md:max-w-[400px] lg:max-w-[520px]">
            <div>
              <h2 className="text-[#1976D2] text-[20px] font-medium md:text-[24px] lg:text-[30px] pb-4 leading-tight tracking-para">
                AI-Driven Automation
              </h2>
              <p className="pb-6 md:pb-[32px] text-[14px] md:text-[16px] lg:text-[18px] leading-tight tracking-para text-[#333333]">
                Let AI handle the repetitive free your team for what matters.
              </p>
            </div>

            {/* Accordion */}
            <div className="">
              <Accordion type="single" collapsible className="w-full max-w-[400px]">
                {dropdowns.map((item, index) => (
                  <AccordionItem key={index} value={`rec-${index}`}>
                    <AccordionTrigger className="text-[16px] md:text-[16px] lg:text-[18px] font-normal">
                      {item.label}
                    </AccordionTrigger>
                    <AccordionContent className="text-[14px] md:text-[16px] lg:text-[18px]">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 mt-6 md:mt-6 lg:mt-0 md:flex md:justify-start md:items-end">
            <video
              className="rounded-lg w-full md:h-[300px] lg:h-auto xl:h-[420px] object-contain"
              autoPlay
              muted
              loop
            >
              <source src="/videos/business/books/Ai-driven_automation.mp4" type="video/mp4" />
            </video>
          </div>
        </FadeUp>


        {/* Bottom Section */}
        <div className="my-12 mx-auto font-inter md:max-w-5xl ">
          {/* Heading */}
          <FadeUp className="text-center mb-4 tracking-heading md:flex  md:justify-center leading-tight">
            <h2 className="text-[26px] md:text-[36px] font-medium text-[#333333]">
              Support, Training, &
            </h2>
            <h2 className="text-[26px] md:text-[36px] md:ml-2 font-medium text-[#1976D2]  ">
              Onboarding
            </h2>
          </FadeUp>

          <FadeUp>
            <p className="text-[14px]  text-[#737373] tracking-para md:text-[18px] lg:text-[20px] mb-6 md:mb-[32px] text-center text-base leading-relaxed">
              Expert onboarding for ZATCA compliance software get your team ready for
              e-invoicing in KSA, fast.
            </p>
          </FadeUp>

          {/* Unified Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
            {/* Box 1 - On Demand Training */}
            <FadeUp className="relative w-full max-w-[354px] md:max-w-none h-[370px] lg:h-[400px] mx-auto">
              <div
                className="absolute inset-0 bg-[#1875D1] rounded-xl p-[2.5px]"
                style={{
                  clipPath:
                    "polygon(0% 0%, 100% 0%, 100% 90%, 66% 90%, 52% 100%, 100% 100%, 0% 100%)",
                }}
              >
                <div
                  className="relative w-full h-full bg-white rounded-lg flex flex-col text-left"
                  style={{
                    clipPath:
                      "polygon(0% 0%, 100% 0%, 100% 90%, 66% 90%, 52% 100%, 100% 100%, 0% 100%)",
                  }}
                >
                  {/* Mobile Video */}
                  <div className="h-[185px] m-6 rounded-lg shadow-md md:hidden border border-grey-400">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-[270px] h-[130px] mx-auto mt-8 object-cover rounded-t-lg"
                    >
                      <source src="/videos/business/books/on-demand-training.mp4" type="video/mp4" />
                    </video>
                  </div>

                  {/* Tablet & Desktop Video */}
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hidden md:block w-full h-[170px] object-cover rounded-t-lg"
                  >
                    <source src="/videos/business/books/on-demand-training.mp4" type="video/mp4" />
                  </video>

                  {/* Content */}
                  <div className="px-4 md:p-4 flex-1 ">
                    <h3 className="font-semibold tracking-heading text-[20px] md:text-[18px] lg:text-fluid-body text-center">
                      On Demand Training
                    </h3>
                    <p className="text-[#737373] tracking-para leading-tight text-fluid-small mt-2  text-center">
                      Learn Accqrate Books in under 60 minutes video modules for every type.
                    </p>
                    <p className="absolute bottom-2 left-2 text-[16px] md:text-[16px] text-[#1976D2] font-bold leading-tight inline-block">
                      Book An <br className="hidden lg:block" /> Appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow Layer */}
              <div className="pointer-events-none absolute inset-0 z-20">
                <div
                  className="absolute inset-0 bg-[#1976D2] rounded-lg"
                  style={{
                    clipPath: "polygon(100% 100%, 54% 100%, 67% 91%, 100% 91%)",
                  }}
                />
                <div className="absolute right-8 bottom-2 md:right-10 md:bottom-1 text-white font-bold">
                  <FaArrowRightLong className="text-[20px] md:text-[30px]" />
                </div>
              </div>
            </FadeUp>


            {/* Box 2 - Local Support */}
            <FadeUp className="relative w-full max-w-[354px] md:max-w-none h-[370px] lg:h-[400px] mx-auto">
              <div
                className="absolute inset-0 bg-[#1875D1] rounded-xl p-[2.5px]"
                style={{
                  clipPath:
                    "polygon(0% 0%, 100% 0%, 100% 90%, 66% 90%, 52% 100%, 100% 100%, 0% 100%)",
                }}
              >
                <div
                  className="relative w-full h-full bg-white rounded-lg flex flex-col text-left"
                  style={{
                    clipPath:
                      "polygon(0% 0%, 100% 0%, 100% 90%, 66% 90%, 52% 100%, 100% 100%, 0% 100%)",
                  }}
                >
                  <div className="h-[185px] m-6 md:m-4 rounded-lg shadow-md md:hidden border border-grey-400">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-[125px] mt-6 md:h-[200px] object-cover rounded-t-lg"
                    >
                      <source src="/videos/business/books/local-support.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <video autoPlay loop muted playsInline className="hidden md:block w-full h-[170px] object-cover rounded-t-lg">
                    <source src="/videos/business/books/local-support.mp4" type="video/mp4" />
                  </video>

                  <div className="px-4 md:p-4 flex-1">
                    <h3 className="font-semibold tracking-para text-[20px] md:text-fluid-body text-center">
                      24/7 Local Support
                    </h3>
                    <p className="text-[#737373] tracking-para px-2 leading-tight text-fluid-small mt-2 text-center">
                      In English & Arabic phone, WhatsApp, email, or chat.
                    </p>
                    <p className="absolute bottom-2 left-1 text-[#1976D2] text-[16px] md:text-[15px] text-left font-bold inline-block">
                      +971505515388
                    </p>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 z-20">
                <div
                  className="absolute inset-0 bg-[#1976D2] rounded-lg"
                  style={{
                    clipPath: "polygon(100% 100%, 54% 100%, 67% 91%, 100% 91%)",
                  }}
                />
                <div className="absolute right-8 bottom-2 md:right-10 md:bottom-1 text-white text-sm font-bold">
                  <FaArrowRightLong className="text-[20px] md:text-[30px]" />
                </div>
              </div>
            </FadeUp>

            {/* Box 3 - Knowledge Center */}
            <FadeUp className="relative w-full max-w-[354px] md:max-w-none h-[370px] lg:h-[400px] mx-auto">
              <div
                className="absolute inset-0 bg-[#1875D1] rounded-xl p-[2.5px]"
                style={{
                  clipPath:
                    "polygon(0% 0%, 100% 0%, 100% 90%, 66% 90%, 52% 100%, 100% 100%, 0% 100%)",
                }}
              >
                <div
                  className="relative w-full h-full bg-white rounded-lg flex flex-col text-left overflow-hidden"
                  style={{
                    clipPath:
                      "polygon(0% 0%, 100% 0%, 100% 90%, 66% 90%, 52% 100%, 100% 100%, 0% 100%)",
                  }}
                >
                  {/* Video */}
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-[200px] md:h-[170px] object-cover rounded-t-lg hidden md:block"
                  >
                    <source src="/videos/business/books/knowledge-center.mp4" type="video/mp4" />
                  </video>

                  {/* Mobile Video */}
                  <div className="h-[185px] m-6 rounded-lg shadow-md md:hidden border border-grey-400">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-[270px] h-[125px] mt-8 object-cover rounded-t-lg"
                    >
                      <source src="/videos/business/books/knowledge-center.mp4" type="video/mp4" />
                    </video>
                  </div>

                  {/* Text content */}
                  <div className="md:p-4 flex-1 relative">
                    <h3 className="font-semibold text-[20px] tracking-para md:text-fluid-body text-center">
                      Knowledge Center
                    </h3>
                    <p className="text-[#737373] text-fluid-small tracking-para text-center mt-2">
                      Step-by-step Guides for every process.
                    </p>
                    <p className="absolute bottom-2 left-4 text-[#1976D2] text-[16px] md:text-[16px] font-bold leading-tight inline-block">
                      Knowledge <br className="hidden md:block" /> Center
                    </p>
                  </div>
                </div>
              </div>

              {/* Overlay arrow */}
              <div className="pointer-events-none absolute inset-0 z-20">
                <div
                  className="absolute inset-0 bg-[#1976D2] rounded-lg"
                  style={{
                    clipPath: "polygon(100% 100%, 54% 100%, 67% 91%, 100% 91%)",
                  }}
                />
                <div className="absolute right-8 bottom-2 md:right-10 md:bottom-1 text-white text-sm font-bold">
                  <FaArrowRightLong className="text-[20px] md:text-[30px]" />
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div >
      {/* Why Choose Section */}
      <div className="my-12 md:my-[56px] lg:my-10 bg-[#F2F2F2] w-full py-6" >
        <div className="max-w-[1280px] mx-auto px-6 md:px-[32px] font-inter">
          <FadeUp className="text-[26px] sm:text-[28px] md:text-[32px] lg:text-[38px] text-[#333333] font-semibold mb-6 md:mb-[32px] text-center leading-snug">
            Why Choose Accqrate <span className="text-[#1976D2]"><br />Books</span>?
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
            {/* Image */}
            <FadeUp className="flex  items-center justify-center">
              <img
                src="/images/business/books/why-choose.svg"
                alt="Why Choose Accqrate Books"
                className="w-[320px] sm:w-[360px] md:w-[420px] lg:w-[480px] h-auto"
              />
            </FadeUp>

            {/* Text List */}
            <FadeUp>
              <ul className="text-left list-disc list-inside text-[14px] leading-6 sm:text-[15px] md:text-[16px] lg:text-[18px] space-y-4 md:space-y-6">
                <li>Stay Ahead of ZATCA Compliance by Design: Never worry about last-minute regulations or audits.</li>
                <li>Modern Cloud Accounting: Access your accounting software anywhere. Simplify financial management for every team member.</li>
                <li>Device and Vendor Freedom: Use any device, integrate any bank, no hardware lock-in.</li>
                <li>Future-Proof Scaling: Move from startup to multi-entity enterprise—no reimplementation, no data loss.</li>
                <li>Total Business Control: Real-time insights, automation, and bulletproof security.</li>
                <li>Flexible price: Flexible plans for every business, from startups to enterprises. Your data stays secure on our Saudi e-invoicing platform with cloud accounting software benefits.</li>
              </ul>
            </FadeUp>
          </div>
        </div>
      </div>
    </>
  );
}