"use client";

import React, { JSX, useContext, useRef } from "react";
import Image from "next/image";
import { LoadingContext } from "./utils/LoadingContext";
import { Skeleton } from "@/components/ui/skeleton";
import useInView from "./utils/useInView";
import ButtonGroup from "@/components/ui/ButtonGroup";

/* ---------- ICON DATA ---------- */
interface FeatureItem {
  title: string;
  img: string;
  colors: {
    outer: string;     // solid outer background
    innerFrom: string; // inner gradient start
    innerTo: string;   // inner gradient end
  };
}

const features: FeatureItem[] = [
  {
    title: "Accounting",
    img: "/images/business/one/account.png",
    colors: { outer: "#E3FFE4", innerFrom: "#65E56B", innerTo: "#388F3C" },
  },
  {
    title: "E-Invoicing",
    img: "/images/business/one/e-invoice.png",
    colors: { outer: "#E3EAFF", innerFrom: "#73B5F6", innerTo: "#1976D2" },
  },
  {
    title: "Sales",
    img: "/images/business/one/sales.png",
    colors: { outer: "#FFE3EC", innerFrom: "#F35C98", innerTo: "#C2185B" },
  },
  {
    title: "Purchase",
    img: "/images/business/one/purchase.png",
    colors: { outer: "#E3F6FF", innerFrom: "#1976D2", innerTo: "#29266E" },
  },
  {
    title: "Project",
    img: "/images/business/one/project.png",
    colors: { outer: "#FFECE3", innerFrom: "#F69A73", innerTo: "#D25D19" },
  },
  {
    title: "Inventory",
    img: "/images/business/one/invent.png",
    colors: { outer: "#FFE3E4", innerFrom: "#F35C5F", innerTo: "#C2181B" },
  },
  {
    title: "HR & Payroll",
    img: "/images/business/one/payroll.png",
    colors: { outer: "#FFF2E3", innerFrom: "#E5C765", innerTo: "#8F8638" },
  },
  {
    title: "POS",
    img: "/images/business/one/pos.png",
    colors: { outer: "#E3EAFF", innerFrom: "#73F6D7", innerTo: "#1972D2" },
  },
  {
    title: "Production",
    img: "/images/business/one/production.png",
    colors: { outer: "#FFE3F9", innerFrom: "#F05CF3", innerTo: "#C218A8" },
  },
  {
    title: "CRM",
    img: "/images/business/one/crm.png",
    colors: { outer: "#FCE3FF", innerFrom: "#C654F7", innerTo: "#551461" },
  },
  {
    title: "Gold Management",
    img: "/images/business/one/gold.png",
    colors: { outer: "#FFFFE3", innerFrom: "#D8C601", innerTo: "#77580C" },
  },
  {
    title: "DMS",
    img: "/images/business/one/dms.png",
    colors: { outer: "#FFEFE3", innerFrom: "#FFAB56", innerTo: "#CD6903" },
  },
];


function FeatureGridSkeleton() {
  return (
    <div className="w-full py-10">
      <div className="max-w-[1000px] mx-auto grid grid-cols-3 sm:grid-cols-6 gap-8 place-items-center">
        {Array.from({ length: 15 }).map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            <Skeleton className="w-[90px] h-[90px] rounded-2xl mb-3" />
            <Skeleton className="h-[12px] w-[60px]" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- MAIN GRID ---------- */
function FeatureGrid() {
  return (
    <div className="w-full py-10">
      <div className="max-w-[1200px] mx-auto grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-8 place-items-center">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-start w-[120px]"
          >
            {/* Outer box with solid background */}
            <div
              className="relative w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] rounded-3xl p-4 shadow-[0_4px_12px_rgba(0,0,0,0.12)] 
                         transform transition-transform duration-300 hover:scale-110 active:scale-115"
              style={{ backgroundColor: item.colors.outer }}
            >
              {/* Inner box with gradient */}
              <div
                className="w-full h-full rounded-2xl flex items-center justify-center"
                style={{
                  background: `linear-gradient(to bottom, ${item.colors.innerFrom}, ${item.colors.innerTo})`,
                }}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={45}
                  height={45}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Title */}
            <p className="text-fluid-small h-[30px] font-semibold text-center mt-3 leading-tight  w-full">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}


/* ---------- HERO SECTION ---------- */
export default function Hero(): JSX.Element {
  const { loading } = useContext(LoadingContext);
  const heroRef = useRef<HTMLElement>(null);
  const isVisible = useInView(heroRef);

  /* --------- LOADING SKELETON --------- */
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

        {/* Feature Icons Skeleton */}
        <FeatureGridSkeleton />
      </section>
    );
  }

  /* --------- MAIN HERO CONTENT --------- */
  return (
    <section
      id="heroSection"
      ref={heroRef}
      className="w-full font-inter flex flex-col items-center justify-center text-center px-6 md:px-[32px]"
    >
      <div className="w-full max-w-[1280px] mx-auto mt-[82px] md:mt-[90px] mb-[40px]">
        {/* Headings */}
        <div className="mb-[24px] md:mb-[40px] ">
          <h1 className="text-fluid-h1 tracking-heading font-semibold text-[#333333]">
            <img
              src="/images/head.png"
              alt="Accqrate ONE"
              className="inline-block mb-2 lg:mb-5 w-[160px] h-[35px] sm:w-[180px] sm:h-[45px] lg:w-[370px] lg:h-[80px]"
            />{" "}
            <span className="font-bold">ONE</span>
          </h1>
        </div>

        <div className="max-w-[360px] sm:max-w-[1000px] mx-auto">
          <h2 className="text-fluid-h3 font-medium leading-tight text-[#333333] tracking-para mb-[24px]">
            The{" "}
            <span className="font-bold bg-gradient-to-r from-[#194BED] to-[#29266E] bg-clip-text text-transparent">
              all-in-one ERP
            </span>{" "}
            solution designed for modern enterprises.
          </h2>
          <p className="text-[14px] md:text-[18px] leading-tight lg:text-[20px] md:hidden tracking-para font-medium md:font-semibold mb-[16px] md:mb-[24px] text-[#333333]">
            Effortlessly Manage Your Workforce,<br /> Payroll, and Compliance
          </p>
          <p className="text-[14px] hidden md:block md:text-[18px] leading-tight lg:text-[20px] tracking-para font-medium md:font-semibold mb-[16px] md:mb-[24px] text-[#333333]">
            Effortlessly Manage Your Workforce, Payroll, and Compliance
          </p>

          {/* Supporting text */}
          <p className="text-[#737373] text-fluid-small tracking-para md:max-w-[830px] mx-auto">
            Whether you're scaling, managing a growing team, or optimizing HR operations, Accqrate
            People is built to simplify every aspect of HR from recruitment to retirement on a
            single, secure platform.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center">
          <ButtonGroup
            buttons={[
              {
                text: "REQUEST A DEMO",
                href: "/demo",
                variant: "filled",
                bgColor: "bg-gradient-to-r from-[#194BED] to-[#29266E]",
                textColor: "text-white",
              },
              {
                text: "CONTACT SALES",
                href: "/contact",
                variant: "outline",
                borderColor: "border-black",
                textColor: "text-black",
              },
            ]}
          />
        </div>
      </div>

      {/* Feature Icons Section */}
      <FeatureGrid />
    </section>
  );
}

