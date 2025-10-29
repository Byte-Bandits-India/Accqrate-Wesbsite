"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

export default function HeroResourceSection() {
  return (
    <section className="pt-16 md:pt-20">
      <div className="container mx-auto px-6 md:px-8">
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
          <Image
            src="/images/resources/young-deliver.png"
            alt="Goods Receipts Accounting"
            width={600}
            height={400}
            className="w-full h-[420px] object-cover sm:hidden"
            priority
          />

          {/* Desktop / Tablet image (visible on sm and above) */}
          <Image
            src="/images/resources/blog-bg.png"
            alt="Goods Receipts Accounting"
            width={1200}
            height={600}
            className="hidden sm:block w-full h-[420px] md:h-[600px] lg:h-[728px] object-cover"
            priority
          />

          {/* Bottom Blur Glass Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-0">
            <div className="backdrop-blur-md bg-black/30 rounded-b-2xl p-6 border border-white/10 flex items-center justify-between">
              {/* Text Section */}
              <FadeUp className="text-white max-w-[745px] md:pl-6">
                <h3 className="text-fluid-h3 font-semibold">
                  Goods Receipts Accounting
                </h3>

                <p className="text-fluid-small text-gray-200 mb-4 lg:mt-6 leading-snug">
                  Goods Receipts Accounting: The more inventory a company has,
                  the less likely they will have what they need. TechGiant,
                  Toyota...
                </p>

                <div className="flex items-center gap-2 mt-3 lg:mt-6 text-gray-300">
                  <img
                    src="/images/resources/cal.png"
                    alt="Calendar icon"
                    className="h-5 w-5 object-contain"
                  />
                  <p className="text-fluid-body">
                    Feb 08th, 2024&nbsp;|&nbsp;23 min read
                  </p>
                </div>
              </FadeUp>


              {/* Arrow Icon */}
              <div className="flex-shrink-0 ml-4">
                <FadeUp className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-end ">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </FadeUp>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
