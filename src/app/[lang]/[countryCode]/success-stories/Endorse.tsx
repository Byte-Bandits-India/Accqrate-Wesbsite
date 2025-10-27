"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import FadeUp from "@/components/ui/FadeUp";

interface Testimonial {
  id: string;
  company: string;
  title: string;
  description: string;
  personName: string;
  personCompany: string;
  personAvatar: string;
  stats: {
    primary: { value: string; label: string };
    secondary: { value: string; label: string };
  };
}

const testimonials: Testimonial[] = [
  {
    id: "jonex",
    company: "Jonex",
    title: "E-Invoice Revolution",
    description:
      "Accqrate's e-invoice solution has truly revolutionized our business operations. With their expertise and deep understanding of ZATCA requirements, they seamlessly integrated our invoicing system with the tax authority, ensuring compliance and accuracy at every step. This integration has not only saved us valuable time but also significantly reduced the risk of errors and non-compliance.",
    personName: "Al Laith, UAE",
    personCompany: "Global Health and Beauty Co.",
    personAvatar: "/images/jonex.png", // 👈 replace with your logo image
    stats: {
      primary: { value: "92%", label: "Increase in Customer Satisfaction" },
      secondary: { value: "24%", label: "Increase in Operational efficiency" },
    },
  },
  {
    id: "construction",
    company: "Ali Construction ..",
    title: "Complete Compliance Solution",
    description:
      "As a construction company dealing with multiple invoicing scenarios, we needed a robust solution. Accqrate delivered beyond our expectations, providing a comprehensive system that handles all our e-invoicing needs while ensuring full ZATCA compliance.",
    personName: "Mohammed Al-Rashid",
    personCompany: "Ali Construction Group",
    personAvatar: "/images/site.png",
    stats: {
      primary: { value: "76%", label: "Faster Invoice Processing" },
      secondary: { value: "95%", label: "Error Reduction Rate" },
    },
  },
  {
    id: "construction",
    company: "Global Health",
    title: "Complete Compliance Solution",
    description:
      "As a construction company dealing with multiple invoicing scenarios, we needed a robust solution. Accqrate delivered beyond our expectations, providing a comprehensive system that handles all our e-invoicing needs while ensuring full ZATCA compliance.",
    personName: "Mohammed Al-Rashid",
    personCompany: "Ali Construction Group",
    personAvatar: "/images/global.png",
    stats: {
      primary: { value: "76%", label: "Faster Invoice Processing" },
      secondary: { value: "95%", label: "Error Reduction Rate" },
    },
  },
];

export default function EndorsedTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  return (
    <section className="bg-[#f6f5ff]">
      <div className="mx-auto px-6 md:px-8 max-w-[1440px] pt-8 md:pt-12 lg:pt-[90px]">
        {/* Header */}
        <FadeUp className="text-left">
          <h2 className="text-fluid-h1 lg:text-[60px] text-left font-medium text-black">
            Endorsed by industry Leaders
          </h2>
          <p className="text-gray-600 mt-6 md:mt-8 text-fluid-body max-w-[777px]">
            Industry leaders trust our commitment to excellence validating our
            innovative solutions and fostering partnerships.
          </p>
        </FadeUp>

        {/* Filter & Arrows */}
        <div className="flex items-center justify-between flex-col sm:flex-row gap-4 max-w-[1440px] mx-auto mt-8 md:mt-12 lg:mt-[80px] mb-10">
          {/* Filter Buttons */}
          <FadeUp className="flex items-center justify-around flex-wrap gap-2 sm:gap-4 w-full sm:w-auto order-1 sm:order-1">
            {testimonials.map((t, i) => (
              <button
                key={`${t.id}-${i}`}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "px-4 sm:px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-200 flex-shrink-0",
                  activeIndex === i
                    ? "bg-[#1f1a9e] text-white border-transparent"
                    : "bg-white text-gray-800 border-gray-200 hover:border-[#1f1a9e]"
                )}
              >
                {t.company}
              </button>
            ))}
          </FadeUp>

          {/* Arrow Buttons */}
          <FadeUp className="flex items-end justify-end gap-3 shrink-0 order-2 sm:order-2 w-full md:justify-start md:pr-8 lg:pr-6 xl:pr-[126px] sm:justify-start sm:w-auto max-w-[1000px]">
            <button
              onClick={() =>
                setActiveIndex((p) => (p === 0 ? testimonials.length - 1 : p - 1))
              }
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={() =>
                setActiveIndex((p) => (p === testimonials.length - 1 ? 0 : p + 1))
              }
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </FadeUp>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch pb-8 md:pb-12 lg:pb-[80px]">
          {/* Left: Testimonial Card */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-10 shadow-md border border-gray-100 flex flex-col justify-between h-full">
            {/* Stars */}
            <FadeUp>
              <div className="flex gap-1 mb-6">
                <Image
                  src="/images/5stars.png"
                  alt="star"
                  width={94}
                  height={26}
                  className="md:w-[161px] md:h-[27px]"
                />
              </div>

              <h3 className="text-fluid-h3 font-medium text-gray-900 mb-4">
                {active.title}
              </h3>
              <p className="text-[#000000] text-fluid-small leading-relaxed mb-10">
                {active.description}
              </p>
            </FadeUp>

            <div className="flex items-center justify-between mt-auto">
              <FadeUp className="flex items-center gap-4">
                <Image
                  src={active.personAvatar}
                  alt={active.personName}
                  width={48}
                  height={48}
                  className="rounded-full md:h-[60px] md:w-[60px] lg:w-[80px] lg:h-[80px] "
                />
                <div>
                  <p className="font-medium text-fluid-body lg:text-[26px] text-gray-900">{active.personName}</p>
                  <p className="text-fluid-body text-[#000000]">{active.personCompany}</p>
                </div>
              </FadeUp>

              {/* Quote Bars */}
              <Image
                src="/images/bars.png"
                alt="quote"
                width={32}
                height={32}
              />
            </div>
          </div>

          {/* Right: Stats */}
          <div className="flex flex-col justify-between h-full">
            <FadeUp className="bg-white rounded-3xl p-8 shadow-md border border-gray-100 text-center flex-1 flex flex-col justify-center">
              <div className="flex justify-center items-center gap-2 mb-3">
                <span className="text-5xl font-bold text-[#1f1a9e]">
                  {active.stats.primary.value}
                </span>
                <Image
                  src="/images/triangle.png"
                  alt="up"
                  width={20}
                  height={20}
                  className="mt-2"
                />
              </div>
              <p className="text-[#000000] font-medium text-fluid-body">
                {active.stats.primary.label}
              </p>
            </FadeUp>

            <FadeUp className="bg-white rounded-3xl p-8 shadow-md border border-gray-100 text-center flex-1 flex flex-col justify-center mt-6">
              <div className="flex justify-center items-center gap-2 mb-3">
                <span className="text-5xl font-bold text-[#1f1a9e]">
                  {active.stats.secondary.value}
                </span>
                <Image
                  src="/images/triangle.png"
                  alt="up"
                  width={20}
                  height={20}
                  className="mt-2"
                />
              </div>
              <p className="text-[#000000] font-medium text-fluid-body">
                {active.stats.secondary.label}
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
