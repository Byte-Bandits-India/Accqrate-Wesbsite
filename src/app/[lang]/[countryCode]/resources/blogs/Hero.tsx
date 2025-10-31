"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

export default function HeroResourceSection() {
  return (
    <section className="pt-16 md:pt-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 xl:px-0">
        {/* Heading */}
        <FadeUp className="text-left mb-10">
          <h1 className="text-fluid-h1 lg:text-[58px] leading-tight font-semibold text-gray-900">
            Browse Our Resources
          </h1>

          {/* Blue underline */}
          <div className="w-[156px] h-[2px] bg-[#194BED] mt-3 lg:mt-[54px] mb-4 rounded-full" />

          {/* Subtitle */}
          <p className="text-gray-600 text-fluid-body font-medium mt-[35px] ">
            We Provide Tips And Resources From Industry Leaders. For Real
          </p>
        </FadeUp>

        {/* Featured Image Section */}
        <div className="relative rounded-2xl overflow-hidden">
          {/* Desktop / Tablet Image */}
          <Image
            src="/images/young-delivery.png"
            alt="Goods Receipts Accounting"
            width={1200}
            height={600}
            className="hidden sm:block w-full h-[420px] md:h-[567px] object-cover"
            priority
          />

          {/* Mobile Image */}
          <Image
            src="/images/resources/young-delivery-woman.png"
            alt="Goods Receipts Accounting"
            width={800}
            height={500}
            className="block sm:hidden w-full h-[380px] object-cover"
            priority
          />

          {/* Bottom Overlay */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="backdrop-blur-md bg-black/30 rounded-b-2xl p-6 border-t border-white/10">
              <FadeUp className="text-white">
                {/* Title */}
                <h3 className="text-fluid-h3 font-semibold mb-2">
                  Goods Receipts Accounting
                </h3>

                {/* ✅ Description + Date (side-by-side on md+) */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-6">
                  <p className="text-fluid-small text-gray-200 leading-snug md:flex-1 max-w-[590px]">
                    Goods Receipts Accounting: The more inventory a company has,
                    the less likely they will have what they need. TechGiant,
                    Toyota...
                  </p>

                  {/* Date Section */}
                  <div className="flex items-center gap-2 text-gray-300 text-fluid-small shrink-0">
                    <img
                      src="/images/cal.svg"
                      alt="Calendar Icon"
                      className="w-5 h-5 object-contain"
                    />
                    <p className="text-[12px] md:text-fluid-small">Feb 08th, 2024 | 23 min read</p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
