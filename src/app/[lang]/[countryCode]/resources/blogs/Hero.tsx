"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function HeroResourceSection() {
  return (
    <section className="bg-[#F8F6FF] py-16 md:py-20">
      <div className="container mx-auto px-6 md:px-16">
        {/* Heading */}
        <div className="text-left mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Browse Our Resources
          </h1>

          {/* Blue underline */}
          <div className="w-16 h-[3px] bg-[#2A1D8D] mt-3 mb-4 rounded-full" />

          {/* Subtitle */}
          <p className="text-gray-600 text-base md:text-lg">
            We Provide Tips And Resources From Industry Leaders. For Real
          </p>
        </div>

        {/* Featured Image Section */}
        <div className="relative rounded-2xl overflow-hidden">
          <Image
            src="/images/resources/blog-bg.png"
            alt="Goods Receipts Accounting"
            width={1200}
            height={600}
            className="w-full h-[420px] md:h-[600px] object-cover"
            priority
          />

          {/* Bottom Blur Glass Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-0">
            <div className="backdrop-blur-md bg-black/30 rounded-b-2xl p-6 border border-white/10 flex items-center justify-between">
              {/* Text Section */}
              <div className="text-white max-w-2xl">
                <h3 className="text-lg md:text-2xl font-semibold mb-1">
                  Goods Receipts Accounting
                </h3>
                <p className="text-sm md:text-base text-gray-200 mb-2 leading-snug">
                  Goods Receipts Accounting: The more inventory a company has,
                  the less likely they will have what they need. TechGiant,
                  Toyota...
                </p>
                <p className="text-gray-300 text-sm">
                  Feb 08th, 2024 | 23 min read
                </p>
              </div>

              {/* Arrow Icon */}
              <div className="flex-shrink-0 ml-4">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-end ">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
