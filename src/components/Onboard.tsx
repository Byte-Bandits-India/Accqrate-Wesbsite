"use client";

import React, { JSX, useContext, useRef } from "react";
import { LoadingContext } from "../utils/LoadingContext";
import { Skeleton } from "./ui/skeleton";
import useInView from "../utils/useInView";
import FeatureCard from "./ui/FeatureCard";
import { Accordion, AccordionCard } from "./ui/accordion";
import FadeUp from "../components/ui/FadeUp";

export default function FeatureSection(): JSX.Element {
  const { loading } = useContext(LoadingContext);
  const onboardRef = useRef<HTMLElement>(null);

  // Trigger as soon as any part of the section enters viewport
  const isVisible = useInView(onboardRef, { threshold: 0 });

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
          <Skeleton className="h-8 md:h-9 lg:h-10 w-3/4 mx-auto mb-4" />
          <Skeleton className="h-6 w-1/2 mx-auto" />
        </div>

        {/* Feature Cards Skeleton */}
        <div className="flex flex-col md:flex-row justify-center gap-6 lg:gap-16 mb-12 w-full">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-full max-w-[320px] md:w-[340px] h-[270px] md:h-[400px] rounded-xl p-4 bg-[#F2F2F2] shadow mx-auto md:mx-0"
            >
              <Skeleton className="w-full h-32 md:h-48 rounded-lg mb-4" />
              <Skeleton className="h-6 w-3/4 mb-3" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          ))}
        </div>

        {/* Zero-Friction Setup Skeleton */}
        <div className="w-full max-w-4xl mx-auto mb-12">
          <Skeleton className="h-8 w-2/3 mx-auto mb-4" />
          <Skeleton className="h-5 w-4/5 mx-auto mb-2" />
          <Skeleton className="h-5 w-3/4 mx-auto" />
        </div>

        {/* Accordion Section Skeleton */}
        <div className="w-full max-w-5xl mx-auto mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-[#F2F2F2] rounded-lg p-6 h-[120px] flex flex-col justify-center"
            >
              <Skeleton className="w-8 h-8 rounded-full mb-3" />
              <Skeleton className="h-6 flex-1" />
              <Skeleton className="h-4 w-full mt-2" />
            </div>
          ))}
        </div>

        {/* Testimonial Skeleton */}
        <div className="w-full max-w-5xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-[#E6E6E6] to-[#C8C8C8] rounded-lg p-6 h-[129px]" />
        </div>

        {/* ZATCA Compliance Skeleton */}
        <div className="w-full max-w-6xl mx-auto">
          <Skeleton className="h-8 w-3/4 mx-auto mb-4" />
          <Skeleton className="h-5 w-2/3 mx-auto mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-[#F2F2F2] rounded-xl p-6 h-[190px] md:h-[251px] lg:h-[292px] flex flex-col items-center justify-center"
              >
                <Skeleton className="h-6 w-2/3 mb-4" />
                <Skeleton className="w-full h-32 md:h-36 rounded-lg" />
              </div>
            ))}
          </div>
          <Skeleton className="w-full h-[201px] md:h-[400px] rounded-lg" />
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="OnboardSection" className="w-full py-10 mt-10">
        <div className="px-[24px] md:px-[32px] max-w-[1280px] mx-auto font-inter">
          {/* Heading */}
          <FadeUp>
            <h2 className="text-fluid-h2 font-inter text-[#000000] text-center mb-6">
              Effortless <span className="text-[#1976D2]">Onboarding</span> &
              Flexible Deployment
            </h2>

            {/* Shared description */}
            <p className="text-fluid-small lg:text-[16px] mb-6 md:mb-[32px] text-[#000000B2] text-center">
              Accqrate Books is fully cloud-native – no complex installations, no
              specialized IT needed. Set <br className="hidden md:block" /> up your accounting in minutes, not weeks.
            </p>
          </FadeUp>
          <div className="flex flex-col md:flex-row justify-center mx-auto gap-6 items-center lg:gap-16 mb-[48px] md:mb-[56px]">
            {/* Card 1 */}
            <FeatureCard
              videoSrc="videos/cloud-first.mp4"
              title="Cloud-first or On-Prem"
              description="Choose cloud for instant launch, or on-premises for full data control."
            />

            {/* Card 2 */}
            <FeatureCard
              videoSrc="videos/all-devices.mp4"
              title="Works on all devices"
              description="Manage accounts from  desktop, laptop, tablet, or mobile."
            />

            {/* Card 3 */}
            <FeatureCard
              videoSrc="videos/no-special-hardware.mp4"
              title="No special hardware"
              description="Access your books anywhere – your data is always secure, always available."
            />
          </div>

          {/* Heading */}

          <FadeUp>
            <h1 className="text-fluid-h2 font-semibold text-center mb-6">
              <span className="text-[#1976D2]">Zero-Friction</span> Setup
            </h1>
            <p className="text-center text-gray-700 text-fluid-small lg:text-[16px] max-w-5xl mx-auto pb-6">
              As your business grows, Accqrate Retail grows with you. Flip the
              switch to add procurement, finance, HR and supply-chain modules—no
              data migration, no downtime.
            </p>
          </FadeUp>
          {/* Accordion Section */}
          <Accordion
            type="single"
            collapsible
            className="flex flex-col gap-4
        sm:grid sm:grid-cols-2
        md:grid md:grid-cols-3 md:max-w-5xl md:mb-[32px] mx-auto"
          >
            <AccordionCard
              value="card-1"
              icon="/images/Mask group.png"
              title="Instant Access"
              children={
                <>Sign up, configure, and start transacting in less than 2 hours.</>
              }
            />

            <AccordionCard
              value="card-2"
              icon="/images/Mask group (1).png"
              title="Automated Data Migration"
              children={
                <>Import legacy data and chart of accounts with guided tools.</>
              }
            />

            <AccordionCard
              value="card-3"
              icon="/images/Mask group (2).png"
              title="Role-Based User Setup"
              children={
                <>Assign permissions instantly for team members no IT bottlenecks.</>
              }
            />
          </Accordion>

          {/* Testimonial Section */}
          <FadeUp className="mt-6">
            <div
              className="bg-gradient-to-r from-[#E6E6E6] to-[#C8C8C8] rounded-lg mx-auto
              p-6 sm:p-6 md:max-w-5xl
              h-auto sm:h-[110px] md:h-[129px]
              flex flex-col items-center justify-center"
            >
              <div className="max-w-[800px] mx-auto w-full">
                <p className="text-[14px] md:text-[20px] font-normal text-[#333333] md:leading-10 text-left md:text-center">
                  “We set up 5 new outlets in under an hour—no IT team needed.”
                </p>
                <p className="text-[14px] md:text-[18px] md:leading-10 text-[#333333] mt-2 text-right pr-4">
                  — Retail Owner, Jeddah
                </p>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* -------- ZATCA Compliance Section -------- */}
        <div className="mt-[48px] md:mt-[56px] max-w-[1280px] mx-auto font-inter text-center px-6 md:px-[32px]">
          <FadeUp>
            <h2 className="text-fluid-h2 text-[#333333] font-medium mb-4 md:mb-[32px]">
              100% <span className="text-[#1976D2]">ZATCA</span> Phase 2 <br className="lg:hidden" />
              E-Invoicing Compliance
            </h2>

            <p className="text-center text-fluid-small mb-[24px] md:mb-[32px] text-[#737373] leading-relaxed">
              Compliance is non-negotiable. With Accqrate Books, you’re always
              audit-ready.
            </p>
          </FadeUp>

          <div className="flex flex-col md:grid md:grid-cols-3 gap-6 lg:gap-12 max-w-[1280px] mx-auto mb-10">

            {/* Seamless Integration */}
            <FadeUp className="group h-[292px] w-full [perspective:1000px] cursor-pointer">
              <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">

                {/* Front */}
                <section className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#F0F0F0] border border-[#737373] rounded-xl shadow-lg p-6 text-center [backface-visibility:hidden]">
                  <h4 className="text-fluid-body font-medium text-[#1976D2] leading-tight">
                    Seamless Integration
                  </h4>
                  <img
                    src="images/zatcha.svg"
                    alt="Seamless Integration"
                    className="h-[142px] md:h-[149px] lg:h-[149px] mx-auto rounded-lg object-cover"
                  />
                </section>

                {/* Back */}
                <section className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#1976D2] text-white rounded-xl p-6 text-center [transform:rotateX(180deg)] [backface-visibility:hidden]">
                  <h4 className="text-xl font-bold">Seamless Integration</h4>
                  <p className="text-sm leading-relaxed text-left">
                    Phase 2 E-invoicing Integration – Generate, validate and transmit XML e-invoices directly to ZATCA.
                  </p>
                </section>
              </div>
            </FadeUp>


            {/* Digital Archive */}
            <FadeUp className="group h-[292px] w-full [perspective:1000px] cursor-pointer">
              <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">

                {/* Front */}
                <section className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#F0F0F0] border border-[#737373] rounded-xl shadow-lg p-6 text-center [backface-visibility:hidden]">
                  <h4 className="text-fluid-body font-medium text-[#1976D2] leading-tight">
                    Digital Archive
                  </h4>
                  <video
                    className="h-[142px] md:h-[149px] lg:h-[149px] mx-auto rounded-lg object-contain"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                  >
                    <source src="videos/digital-archive.mp4" type="video/mp4" />
                  </video>
                </section>

                {/* Back */}
                <section className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#1976D2] text-white rounded-xl p-6 text-center [transform:rotateX(180deg)] [backface-visibility:hidden]">
                  <h4 className="text-xl font-bold">Digital Archive</h4>
                  <p className="text-sm leading-relaxed text-left">
                    Securely store all e-invoices with audit trails and QR code integration.
                  </p>
                </section>
              </div>
            </FadeUp>


            {/* Regulation Ready */}
            <FadeUp className="group h-[292px] w-full [perspective:1000px] cursor-pointer">
              <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">

                {/* Front */}
                <section className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#F0F0F0] border border-[#737373] rounded-xl shadow-lg p-6 text-center [backface-visibility:hidden]">
                  <h4 className="text-fluid-body font-medium text-[#1976D2] leading-tight">
                    Regulation-Ready
                  </h4>
                  <video
                    className="h-[142px] md:h-[149px] lg:h-[149px] mx-auto rounded-lg object-contain"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                  >
                    <source src="videos/regulation-ready.mp4" type="video/mp4" />
                  </video>
                </section>

                {/* Back */}
                <section className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#1976D2] text-white rounded-xl p-6 text-center [transform:rotateX(180deg)] [backface-visibility:hidden]">
                  <h4 className="text-xl font-bold">Regulation-Ready</h4>
                  <p className="text-sm leading-relaxed text-left">
                    Real-time updates keep you in sync with KSA rules.
                  </p>
                </section>
              </div>
            </FadeUp>
          </div>

          {/* 100_zatcha_e-invoicing-complaince Video */}
          <video
            className="w-full h-[201px] md:h-full max-w-[1128px] mx-auto"
            autoPlay
            muted
            loop
          >
            <source src="/videos/100_zatcha_e-invoicing-complaince.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
}


