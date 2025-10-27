"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { ContactModal } from "@/components/ContactModal";
export default function ZatcaSection() {
      const [isModalOpen, setModalOpen] = useState(false);
  return (
    <section className="w-full bg-gradient-to-r from-[#242087] to-[#1A0C48] text-white py-16 md:py-20 " data-aos="fade-up">
      <div className="max-w-[1440px] container mx-auto flex flex-col-reverse md:flex-row items-center  gap-10 px-6 md:px-12">
        {/* Left Content */}
        <div className=" text-left">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-snug">
            Get 100% ZATCA Phase II compliant <br className="hidden md:block" /> with Accqrate
          </h2>

          <ul className="space-y-4 mb-10">
            <li className="flex items-start gap-3">
              <Image
                src="/images/resources/tick.png" // ✅ use your tick icon here
                alt="Tick"
                width={20}
                height={20}
                className="mt-1"
              />
              <span className="text-base md:text-lg">
                Seamless integration with any ERP/POS
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Image
                src="/images/resources/tick.png"
                alt="Tick"
                width={20}
                height={20}
                className="mt-1"
              />
              <span className="text-base md:text-lg">
                Direct Integration &amp; People integration
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Image
                src="/images/resources/tick.png"
                alt="Tick"
                width={20}
                height={20}
                className="mt-1"
              />
              <span className="text-base md:text-lg">
                E-invoice generation in a fraction of a second
              </span>
            </li>
          </ul>

          <button
           
             onClick={() => setModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#4F79FF] to-[#B5C6FF] text-black font-medium px-6 py-3 rounded-full "
          >
            Book a Demo <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Side Images */}
        <div className="flex-1 flex  relative">
          <Image
            src="/images/resources/lock.png" // ✅ main illustration (security + icons)
            alt="ZATCA Illustration"
            width={320}
            height={250}
            className="z-10 right-10"
          />

        <Image
            src="/images/resources/tax.png"
            alt="Invoice"
            width={450}
            height={400}
            className="absolute -top-24 right-0 md:-top-48 md:-right-40  rounded-xl  "
          />

          <Image
            src="/images/resources/zatcabox.png" // ✅ ZATCA logo
            alt="ZATCA Logo"
            width={420}
            height={200}
            className="absolute  md:-right-40 md:top-60"
          />
        </div>
      </div>
       {/* Contact Modal */}
            <ContactModal open={isModalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
