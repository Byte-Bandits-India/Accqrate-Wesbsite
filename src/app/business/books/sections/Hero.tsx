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

  if (loading || !isVisible) {
    return (
      <section
        id="heroSection"
        ref={heroRef}
        className="w-full font-inter flex flex-col items-center justify-center text-center py-10 mt-10 px-4"
      >
        {/* Heading skeletons */}
        <Skeleton style={{ height: "40px", width: "60%" }} className="mb-6 mx-auto" />
        <Skeleton style={{ height: "28px", width: "70%" }} className="mb-4 mx-auto" />
        <Skeleton style={{ height: "20px", width: "80%" }} className="mb-4 mx-auto" />

        <Skeleton style={{ height: "22px", width: "50%" }} className="mb-4 mt-4 mx-auto" />
        <Skeleton style={{ height: "22px", width: "60%" }} className="mb-4 mx-auto" />

        {/* Buttons skeleton */}
        <div className="flex gap-4 mt-8">
          <Skeleton style={{ height: "50px", width: "160px" }} className="rounded-full" />
          <Skeleton style={{ height: "50px", width: "160px" }} className="rounded-full" />
        </div>

        {/* Video skeleton */}
        <Skeleton
          style={{ height: "400px", width: "100%" }}
          className="mt-12 max-w-[1128px] rounded-xl"
        />

        {/* Trusted text skeleton */}
        <Skeleton
          style={{ height: "24px", width: "70%" }}
          className="mt-12 mx-auto mb-6"
        />

        {/* Logo marquee skeleton */}
        <div className="w-screen bg-[#E6F4FF] relative">
          <div className="max-w-5xl overflow-hidden py-6 mx-auto">
            <div className="flex flex-col gap-6">
              {/* Top Row Skeleton */}
              <div className="flex animate-scrollLeft w-max flex-shrink-0">
                {[...Array(13)].map((_, i) => (
                  <div
                    key={`top-skeleton-${i}`}
                    className="flex flex-col items-center mx-4"
                  >
                    <Skeleton
                      style={{ width: "135px", height: "56px" }}
                      className="h-14 md:h-16 md:w-60"
                    />
                    <Skeleton
                      style={{ height: "12px", width: "80px" }}
                      className="mt-2"
                    />
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
                    <Skeleton
                      width="135px"
                      height="56px"
                      className="h-14 md:h-16 md:w-60"
                    />
                    <Skeleton
                      height="12px"
                      width="80px"
                      className="mt-2"
                    />
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
      className="w-full font-inter flex flex-col items-center justify-center text-center px-6 md:px-[32px]"
    >
      <div className="w-full max-w-[1280px] mx-auto mt-[62px] md:mt-[90px] lg:mt-[125px]">
        {/* Headings */}
        <h1 className="text-fluid-h1 tracking-heading font-semibold text-[#333333] mb-[24px] lg:mb-[60px]">
          Accqrate <span className="text-[#1976D2] ">Books</span>
        </h1>
        <div className="max-w-[1000px] mx-auto ">
          <h2 className="text-[20px] md:text-[24px] leading-tight lg:text-[30px] font-medium text-[#333333]  mb-[24px] lg:mb-[40px]">
            <span className="text-[#1976D2] font-medium ">ZATCA Approved</span>{" "}
            Accounting Software for Saudi Arabia
          </h2>
          <p className="text-[14px]  md:text-[18px] leading-tight lg:text-[20px]  md:font-semibold mb-[16px] md:mb-[24px] lg:mb-[40px]">
            Run your entire business accounting faster,<br className="hidden md:block" /> smarter, always ZATCA Phase-2 ready.
          </p>


          {/* Supporting text */}
          <p className="text-[#737373] tracking-para text-fluid-small md:hidden">
            Launch your store in minutes, manage everything in one place from sales to stock,
            from any device.
          </p>
          <p className="text-[#737373] md:text-[16px] hidden md:block text-fluid-body">
            Manage accounts, automate ZATCA compliance, and <br /> unlock actionable insights
            from anywhere, on any device.
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
                bgColor: "bg-[#1976D2]",
                textColor: "text-white",
              },
              {
                text: "CONTACT SALES",
                href: "/contact",
                variant: "outline",
                textColor: "text-[#1976D2]",
                borderColor: "border-[#1976D2]",
              },
            ]}
          />
        </div>
      </div>

      {/* Dashboard Video */}
      <div className="mb-[32px] md:mb-[40px] w-full max-w-[1128px] mx-auto rounded-xl overflow-hidden">
        <video autoPlay loop muted playsInline poster="/images/business/books/video-poster.jpg" className="w-full h-auto">
          <source src="/videos/business/books/hero.mp4" type="video/mp4" />
        </video>
      </div>


      {/* Trusted text */}
      <FadeUp className="mb-[20px] md:mb-[40px]">
        <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-medium text-[#333333] text-center mx-auto tracking-para">
          Trusted by <span className="text-[#1976D2] font-bold">5,000+</span> Saudi and GCC companies for ZATCA e-invoicing <br className="hidden md:block" /> compliance
          and business accounting.
        </h3>
      </FadeUp>

      {/* Logo Marquee */}
      <div className="w-screen bg-[#FFFFFF] relative ">
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
                    className="h-12 md:h-16 w-40 md:w-60 grayscale opacity-90 transition hover:grayscale-0 hover:opacity-100"
                  />
                  <p className=" text-xs md:text-sm text-gray-700 font-medium">{logo.name}</p>
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
                    className="h-12 md:h-16 w-40 md:w-60 grayscale opacity-90 transition hover:grayscale-0 hover:opacity-100"
                  />
                  <p className=" text-xs md:text-sm text-gray-700 font-medium">{logo.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
