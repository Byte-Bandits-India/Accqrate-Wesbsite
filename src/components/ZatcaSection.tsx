"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ContactModal } from "./ContactModal";

export default function ZatcaSection() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <section
      className="w-full bg-gradient-to-r from-[#242087] to-[#1A0C48] text-white py-16 md:py-20"
      data-aos="fade-up"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col-reverse md:flex-row items-center gap-4 px-6 md:px-8">
        {/* Left Content */}
        <div className="text-left">
          <h2 className="text-fluid-h2 xl:text-[40px] font-medium mb-6 leading-snug">
            Get 100% ZATCA Phase <br className="hidden md:block xl:hidden" /> II
            compliant <br className="hidden xl:block" /> with Accqrate
          </h2>

          <ul className="space-y-4 md:space-y-5 mb-8 md:mb-10">
            <li className="flex items-start gap-3 justify-start md:justify-start">
              <Image
                src="/images/resources/tick.png"
                alt="Tick"
                width={20}
                height={20}
                className="mt-1 flex-shrink-0"
              />
              <span className="text-lg md:text-xl lg:text-2xl xl:text-[26px]">
                Seamless integration with any ERP/POS
              </span>
            </li>

            <li className="flex items-start gap-3 justify-start md:justify-start">
              <Image
                src="/images/resources/tick.png"
                alt="Tick"
                width={20}
                height={20}
                className="mt-1 flex-shrink-0"
              />
              <span className="text-lg md:text-xl lg:text-2xl xl:text-[26px]">
                Direct Integration &amp; People integration
              </span>
            </li>

            <li className="flex items-start gap-3 justify-start md:justify-start">
              <Image
                src="/images/resources/tick.png"
                alt="Tick"
                width={20}
                height={20}
                className="mt-1 flex-shrink-0"
              />
              <span className="text-lg md:text-xl lg:text-2xl xl:text-[26px]">
                E-invoice generation in a fraction of a second
              </span>
            </li>
          </ul>

          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#4F79FF] to-[#B5C6FF] text-black font-medium px-6 py-3 rounded-full"
          >
            Book a Demo <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Side Images */}
        <div className="flex-1 flex relative">
          {/* Keep ZATCA Illustration (Lock) in original position */}
          <Image
            src="/images/resources/lock.png"
            alt="ZATCA Illustration"
            width={220}
            height={150}
            className="z-30 lg:h-[120px] w-fit md:h-[150px] xl:h-[150px] lg:left-[100px] lg:px-8"
          />

          {/* Keep ZATCA Box same */}
          <Image
            src="/images/resources/zatcabox.png"
            alt="ZATCA Logo"
            width={420}
            height={200}
            className="absolute lg:-right-[1px] xl:left-[250px] md:top-52 xl:top-60 hidden md:block lg:px-8"
          />

          <Image
            src="/images/resources/tax.png"
            alt="Invoice"
            width={350}
            height={300}
            className="absolute right-0 lg:right-12 lg:-top-72 rounded-xl w-fit lg:h-[260px] xl:h-[300px] hidden lg:block"
          />
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal open={isModalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
