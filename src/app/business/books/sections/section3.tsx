"use client";

import { LoadingContext } from "@/app/business/books/sections/utils/LoadingContext";
import { Skeleton } from "@/components/ui/skeleton";
import useInView from "@/app/business/books/sections/utils/useInView";
import { useContext, useRef } from "react";
import FadeUp from "../../../../components/ui/FadeUp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

interface DropdownItem {
  title: string;
  content: string;
}

export default function Section3(): React.JSX.Element {
  const { loading } = useContext(LoadingContext);
  const Section3 = useRef<HTMLDivElement | null>(null);
  const isVisible = useInView(Section3, { threshold: 0 });

  // Seamless Integration
  const integrationDropdowns: DropdownItem[] = [
    { title: "Instant ERP Integration", content: "Add procurement, inventory, payroll, and HR modules without migrations or reimplementation." },
    { title: "API & Marketplace", content: "Connect to banks, e-commerce, or any third-party  future-proof your finance stack." },
    { title: "No Vendor Lock-in", content: "Data is always yours; export, back up, and migrate on demand." },
  ];

  // Robust Control
  const controlDropdowns: DropdownItem[] = [
    { title: "Role-Based Access", content: "Define granular permissions, approve sensitive actions, and monitor changes." },
    { title: "Automated Audit Logs", content: "Every entry, change, or deletion is tracked  satisfy any auditor instantly." },
    { title: "Disaster Recovery & Data Security", content: "Bank-level encryption, real-time backups, and local data hosting for KSA." },
  ];

  if (loading || !isVisible) {
    return (
      <div ref={Section3} className="w-full font-inter">
        <div className="max-w-[1280px] mx-auto px-6 md:px-[40px] py-[24px] md:py-[32px]">

          {/* ================= Seamless Integration Skeleton ================= */}
          <div className="bg-[#E8F1FB] font-inter xl:h-[615px] p-6 md:p-[32px] rounded-xl md:rounded-2xl mx-auto md:flex gap-8">
            {/* Left Side - Content */}
            <div className="flex-1 md:max-w-[520px]">
              {/* Title & Subtitle */}
              <div className="mb-8">
                <Skeleton className="h-8 w-3/4 mb-4 rounded-lg" />
                <Skeleton className="h-6 w-5/6 rounded-lg" />
              </div>

              {/* Description */}
              <Skeleton className="h-5 w-full mb-2 rounded-lg" />
              <Skeleton className="h-5 w-4/5 mb-8 rounded-lg" />

              {/* Accordion Skeletons */}
              <div className="space-y-4">
                {integrationDropdowns.map((_, index) => (
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

          {/* ================= Robust Control Skeleton ================= */}
          <div className="bg-[#E8F1FB] mt-6 md:mt-8 font-inter xl:h-[615px] p-6 md:p-[32px] rounded-xl md:rounded-2xl mx-auto md:flex gap-8">
            {/* Left Side - Content */}
            <div className="flex-1 md:max-w-[520px]">
              {/* Title & Subtitle */}
              <div className="mb-8">
                <Skeleton className="h-8 w-3/4 mb-4 rounded-lg" />
                <Skeleton className="h-6 w-5/6 rounded-lg" />
              </div>

              {/* Description */}
              <Skeleton className="h-5 w-2/3 mb-8 rounded-lg" />

              {/* Accordion Skeletons */}
              <div className="space-y-4">
                {controlDropdowns.map((_, index) => (
                  <div key={index} className="border-b border-gray-300 pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <Skeleton className="h-6 w-3/4 rounded-lg" />
                      <Skeleton className="h-5 w-5 rounded-full" />
                    </div>
                    <Skeleton className="h-4 w-full rounded-lg" />
                    <Skeleton className="h-4 w-4/5 mt-1 rounded-lg" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Video */}
            <div className="flex-1 mt-8 md:mt-0 flex items-center justify-center">
              <Skeleton className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl" />
            </div>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="w-full font-inter">
      <div className="max-w-[1280px] mx-auto px-6 md:px-[40px] py-[24px] md:py-[32px]">
        {/* ================= Seamless Integration ================= */}
        <FadeUp className="bg-[#E8F1FB] font-inter xl:h-[615px] p-6 md:p-[32px] rounded-xl md:rounded-2xl mx-auto md:flex">
          {/* Left Side */}
          <div className="flex-1 md:max-w-[520px]">
            <h2 className="text-[#1976D2] tracking-para text-[20px] font-medium md:text-[24px] lg:text-[30px] pb-4 leading-tight">
              Seamless Integration{" "}<br />
              Enterprise Scalability
            </h2>
            <p className="pb-6 md:pb-[32px] tracking-para text-[#333333] text-[14px] md:text-[16px] lg:text-[18px] leading-tight">
              Grow with confidence Accqrate Books is built for business evolution, not just accounting.
            </p>

            {/* Accordion */}
            <Accordion type="single" collapsible className="w-full max-w-[400px]">
              {integrationDropdowns.map((item, index) => (
                <AccordionItem key={index} value={`integration-${index}`}>
                  <AccordionTrigger className="text-[16px] md:text-[16px] lg:text-[18px] font-normal">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-[14px] md:text-[16px] lg:text-[18px]">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Side */}
          <div className="flex-1 mt-6 md:mt-6 lg:mt-0 md:flex md:justify-start md:items-end">
            <video
              className="rounded-lg w-full md:h-[300px] lg:h-auto xl:h-[420px] object-contain"
              autoPlay
              muted
              loop
              aria-label="Seamless Integration demo video"
            >
              <source src="videos/business/books/Seamless_integration.mp4" type="video/mp4" />
            </video>
          </div>
        </FadeUp>

        {/* ================= Robust Control ================= */}
        <FadeUp className="bg-[#E8F1FB] mt-6 md:mt-[32px] font-inter xl:h-[615px] pt-6 px-6 md:px-[32px] md:pt-[32px] rounded-xl md:rounded-2xl mx-auto md:flex">
          {/* Left Side */}
          <div className="flex-1 md:max-w-[520px]">
            <h2 className="text-[#1976D2] text-[20px] font-medium md:text-[24px] lg:text-[30px] pb-4 leading-tight tracking-para">
              Robust Control{" "}
              <br />
              Total Compliance
            </h2>
            <p className="pb-6 md:pb-[32px] text-[14px] md:text-[16px] lg:text-[18px] leading-tight tracking-para text-[#333333]">
              Mitigate risk, enforce policy, and maintain visibility.
            </p>

            {/* Accordion */}
            <Accordion type="single" collapsible className="w-full max-w-[400px]">
              {controlDropdowns.map((item, index) => (
                <AccordionItem key={index} value={`control-${index}`}>
                  <AccordionTrigger className="text-[16px] md:text-[16px] lg:text-[18px] font-normal">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-[14px] md:text-[16px] lg:text-[18px]">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Side */}
          <div className="flex-1 mt-6 md:mt-6 lg:mt-0 md:flex md:justify-start md:items-end pb-6">
            <video
              className="rounded-lg w-full md:h-[300px] lg:h-auto xl:h-[420px] object-contain"
              autoPlay
              muted
              loop
              aria-label="Robust Control demo video"
            >
              <source src="videos/business/books/robust-control.mp4" type="video/mp4" />
            </video>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}