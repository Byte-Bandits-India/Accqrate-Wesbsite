"use client";

import Image from "next/image";
import React, { useContext, useRef } from "react";
import type { JSX } from "react";
import { LoadingContext } from "../utils/LoadingContext"
import { Skeleton } from "./ui/skeleton";
import useInView from "../utils/useInView";
import ButtonGroup from "../components/ui/ButtonGroup";
import FadeUp from "./ui/FadeUp";

export default function Hero(): JSX.Element {
  const { loading } = useContext(LoadingContext);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useInView(heroRef as React.RefObject<Element>);

  interface Industry {
    src: string;
    name: string;
  }

  const topRow: Industry[] = [
    { src: "/images/1.png", name: "Education" },
    { src: "/images/2.png", name: "Construction & Engineering" },
    { src: "/images/3.png", name: "Logistics" },
    { src: "/images/4.png", name: "Insurance" },
    { src: "/images/5.png", name: "Conglomerate" },
    { src: "/images/6.png", name: "Pharmacy" },
    { src: "/images/7.png", name: "Energy" },
    { src: "/images/8.png", name: "Conglomerate" },
    { src: "/images/9.png", name: "Insurance" },
    { src: "/images/10.png", name: "Packaging solutions" },
    { src: "/images/11.png", name: "Food & Beverage" },
    { src: "/images/12.png", name: "Trading" },
    { src: "/images/13.png", name: "Chemicals" },
  ];

  const bottomRow: Industry[] = [
    { src: "/images/14.png", name: "Hospitality and Tourism" },
    { src: "/images/15.png", name: "FMCD" },
    { src: "/images/16.png", name: "Oil & Gas" },
    { src: "/images/17.png", name: "Home Appliances" },
    { src: "/images/18.png", name: "Manufacturing" },
    { src: "/images/19.png", name: "Construction & Engineering" },
    { src: "/images/20.png", name: "Education" },
    { src: "/images/21.png", name: "Conglomerate" },
    { src: "/images/22.png", name: "Electrical Industries Co." },
    { src: "/images/23.png", name: "Aerospace & Defense" },
    { src: "/images/24.png", name: "Retail" },
    { src: "/images/25.png", name: "Ecommerce" },
    { src: "/images/26.png", name: "Fashion" },
  ];

  if (loading || !isVisible) {
    return (
      <section
        id="heroSection"
        ref={heroRef}
        className="w-full font-inter flex flex-col items-center justify-center text-center py-10 mt-10 px-4"
      >
        <div className="w-full max-w-[1280px] mx-auto mt-[82px] md:mt-[90px] mb-[40px]">
          {/* Heading skeletons */}
          <div className="space-y-6 mb-8">
            <Skeleton className="h-10 md:h-12 lg:h-14 w-3/4 mx-auto" />
            <Skeleton className="h-6 md:h-8 lg:h-10 w-5/6 mx-auto" />
            <Skeleton className="h-5 md:h-7 lg:h-9 w-11/12 mx-auto" />
          </div>

          {/* Supporting text skeletons */}
          <div className="space-y-4 mb-8">
            <Skeleton className="h-4 md:h-5 w-3/5 mx-auto md:hidden" />
            <Skeleton className="h-4 md:h-5 w-4/5 mx-auto md:hidden" />
            <Skeleton className="h-5 md:h-6 w-full mx-auto hidden md:block" />
          </div>

          {/* Buttons skeleton */}
          <div className="flex gap-4 justify-center mb-12">
            <Skeleton className="h-12 w-40 rounded-full" />
            <Skeleton className="h-12 w-40 rounded-full" />
          </div>
        </div>

        {/* Video skeleton */}
        <Skeleton className="w-full max-w-[1128px] h-64 md:h-80 lg:h-96 rounded-xl mb-12" />

        {/* Trusted text skeleton */}
        <div className="w-full max-w-[1280px] mx-auto mb-8">
          <Skeleton className="h-6 md:h-8 lg:h-10 w-3/4 mx-auto" />
        </div>

        {/* Second video skeleton */}
        <Skeleton className="w-full max-w-[1128px] h-64 md:h-80 lg:h-96 rounded-xl" />
      </section>
    );
  }

  return (
    <section
      id="heroSection"
      ref={heroRef}
      className="w-full font-inter flex flex-col items-center justify-center text-center px-6 md:px-[32px]"
    >
      <div className="w-full max-w-[1280px] mx-auto mt-[82px] md:mt-[90px] mb-[40px]">
        {/* Headings */}
        <h1 className="tracking-heading text-fluid-h1 font-medium text-[#333333] mb-[24px]">
          Accqrate <span className="text-[#43A047]">People</span>
        </h1>
        <div className=" max-w-[340px] md:max-w-[800px] mx-auto">
          <h2 className="text-fluid-h3 tracking-heading  font-light text-[#333333] mb-[24px]">
            The Only{" "}
            <span className="text-[#43A047] font-medium md:font-medium ">
              HR & Payroll Solution
            </span>{" "}
            You'll Ever Need
          </h2>
          <p className="text-fluid-small md:text-fluid-body  mx-auto sm:max-w-[900px] md:text-[18px] lg:text-[26px] tracking-tight font-medium mb-[16px] md:mb-[24px] text-[#333333]">
            Effortlessly Manage Your Workforce,
            <br className="block" />
            Payroll, and Compliance
          </p>

          {/* Supporting text */}
          <p className="text-[#737373] text-fluid-small md:text-fluid-body">
            Whether you're scaling, managing a growing team, or optimizing HR
            operations, Accqrate People is built to simplify every aspect of HR
            from recruitment to retirement on a single, secure platform.
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
                bgColor: "bg-[#43A047]",
                textColor: "text-white",
              },
              {
                text: "CONTACT SALES",
                href: "/contact",
                variant: "outlined",
                borderColor: "border-[#43A047]",
              },
            ]}
          />
        </div>
      </div>

      {/* Dashboard Video */}
      <FadeUp className="mb-[32px] md:mb-[40px] w-full max-w-[1128px] mx-auto rounded-xl overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/video-poster.jpg"
          className="w-full h-auto"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </FadeUp>

      {/* Trusted text */}
      <FadeUp className="mb-8 w-full max-w-[1280px] mx-auto">
        <h3 className="text-fluid-small md:text-fluid-body font-semibold text-[#333333] text-center mx-auto">
          Join over 5,000 global companies who trust Accqrate People to manage
          their workforce with ease.
        </h3>
      </FadeUp>

      <FadeUp className="mb-[32px] md:mb-[40px] w-full max-w-[1128px] mx-auto rounded-xl overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/video-poster.jpg"
          className="w-full h-auto"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </FadeUp>
    </section>
  );
}