"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
    title: "Client-Centric Innovation",
    description:
    "An ERP team must excel in understanding requirements, delivering on time, and most importantly, addressing business needs without compromising functionality.With Accqrate, we’ve discovered a solution that embodies these qualities seamlessly.Accqrate Solutions stands out as a robust product, offering exceptional flexibility, scalability, and performance.Its intuitive interface significantly reduces the need for extensive training, saving both time and effort. Moreover, the team’s strong communication skills and unwavering dedication have transformed how we manage our business processes. Their exceptional teamwork and support are truly commendable.",  
    personName: "Wail",
    personCompany: "Jonex",
    personAvatar: "/images/jonex.png", 
    stats: {
      primary: { value: "87%", label: "Increase in Customer Satisfaction" },
      secondary: { value: "38%", label: "Increase in Operational efficiency" },
    },
  },
   {
    id: "global",
    company: "Global Health",
    title: "E-Invoice Revolution",
    description:
      "Accqrate's e-invoice solution has truly revolutionized our business operations. With their expertise and deep understanding of ZATCA requirements, they seamlessly integrated our invoicing system with the tax authority, ensuring compliance and accuracy at every step. This integration has not only saved us valuable time but also significantly reduced the risk of errors and non-compliance.",
       personName: "Al Laith UAE",
    personCompany: "Global Health and Beauty Co.",
    personAvatar: "/images/global.png",
    stats: {
      primary: { value: "92%", label: "Increase in Customer Satisfaction" },
      secondary: { value: "24%", label: "Increase in Operational efficiency" },
    },
  },
  {
    id: "construction",
    company: "Ali Construction ..",
    title: "Outstanding IT Solutions",
    description:
      "Your ability to tailor IT solutions that address the unique challenges of our region has greatly improved our operational efficiency. Your proactive approach and commitment to client satisfaction have been truly impressive.",
       personName: "Ali",
    personCompany: "Construction Company",
    personAvatar: "/images/site.png",
    stats: {
      primary: { value: "89%", label: "Increase in Customer Satisfaction" },
      secondary: { value: "16%", label: "Increase in Operational efficiency" },
    },
  },
  
];

export default function EndorsedTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  return (
    <section className="py-20 bg-[#f6f5ff]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-left max-w-3xl mx-auto mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Endorsed by industry Leaders
          </h2>
          <p className="text-gray-600">
            Industry leaders trust our commitment to excellence validating our
            innovative solutions and fostering partnerships.
          </p>
        </div>

        {/* Filter & Arrows */}
        <div className="flex items-center justify-between flex-wrap gap-4 max-w-5xl mx-auto mb-10">
          <div className="flex flex-wrap gap-3">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-200",
                  activeIndex === i
                    ? "bg-[#1f1a9e] text-white border-transparent"
                    : "bg-white text-gray-800 border-gray-200 hover:border-[#1f1a9e]"
                )}
              >
                {t.company}
              </button>
            ))}
          </div>

          <div className="flex gap-3">
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
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Left: Testimonial Card */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-10 shadow-md border border-gray-100">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              
                <Image
                  src="/images/5stars.png" // 👈 your star icon
                  alt="star"
                  width={54}
                  height={24}
                  className="w-24 h-6"
                />
            
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {active.title}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-10">
              {active.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src={active.personAvatar}
                  alt={active.personName}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">{active.personName}</p>
                  <p className="text-sm text-gray-500">{active.personCompany}</p>
                </div>
              </div>

              {/* Quote Bars */}
              <Image
                src="/images/bars.png" // 👈 your blue quote marks
                alt="quote"
                width={32}
                height={32}
              />
            </div>
          </div>

          {/* Right: Stats */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100 text-center">
              <div className="flex justify-center items-center gap-2 mb-3">
                <span className="text-5xl font-bold text-[#1f1a9e]">
                  {active.stats.primary.value}
                </span>
                <Image
                  src="/images/triangle.png" // 👈 your triangle arrow icon
                  alt="up"
                  width={20}
                  height={20}
                  className="mt-2"
                />
              </div>
              <p className="text-gray-600 font-medium text-sm">
                {active.stats.primary.label}
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100 text-center">
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
              <p className="text-gray-600 font-medium text-sm">
                {active.stats.secondary.label}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
