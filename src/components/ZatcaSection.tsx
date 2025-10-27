"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ContactModal } from "./ContactModal";

export default function ZatcaSection() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <section
      className="w-full bg-gradient-to-r from-[#242087] to-[#1A0C48] text-white relative py-6 md:py-8"
      data-aos="fade-up"
    >
      <div
        className="
          max-w-[1440px]
          mx-auto
          grid
          grid-cols-1
          md:grid-cols-[auto_auto_auto]
          items-center
          justify-between
          gap-y-10
          px-6 md:px-8
        "
      >
        {/* COLUMN 1 — LEFT CONTENT */}
        <div className="z-20 text-left order-2 md:order-1">
          <h2 className="text-fluid-h2 xl:text-[40px] font-medium mb-6 leading-snug">
            Get 100% ZATCA Phase <br className="hidden md:block xl:hidden" /> II
            compliant <br className="hidden xl:block" /> with Accqrate
          </h2>

          <ul className="space-y-4 md:space-y-5 mb-8 md:mb-10">
            {[
              "Seamless integration with any ERP/POS",
              "Direct Integration & People integration",
              "E-invoice generation in a fraction of a second",
            ].map((text, index) => (
              <li
                key={index}
                className="flex items-start gap-3 justify-start md:justify-start"
              >
                <Image
                  src="/images/resources/tick.png"
                  alt="Tick"
                  width={20}
                  height={20}
                  className="mt-1 flex-shrink-0"
                />
                <span className="text-lg md:text-xl lg:text-2xl xl:text-[26px]">
                  {text}
                </span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#4F79FF] to-[#B5C6FF] text-black font-medium px-6 py-3 rounded-full"
          >
            Book a Demo <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* COLUMN 2 — ZATCA BOX + INVOICE */}
        <div className="relative flex flex-col items-center justify-center gap-6 xl:gap-10 md:order-3 -top-20 ">
          {/* Invoice Image */}
          <Image
            src="/images/resources/tax.png"
            alt="Invoice"
            width={350}
            height={300}
            className="rounded-xl hidden md:block lg:h-[350px] xl:h-[350px]"
          />

          {/* ZATCA Box */}
          <Image
            src="/images/resources/zatcabox.png"
            alt="ZATCA Box"
            width={420}
            height={200}
            className="rounded-xl hidden md:block"
          />
        </div>

        {/* COLUMN 3 — LOCK ICON */}
        <div className="flex items-center justify-center order-1 md:order-2">
          <Image
            src="/images/resources/lock.png"
            alt="ZATCA Lock Illustration"
            width={240}
            height={160}
            className="lg:h-[100px] lg:w-fit md:h-[150px] xl:h-[160px] md:hidden lg:block"
          />
        </div>
      </div>

      {/* CONTACT MODAL */}
      <ContactModal open={isModalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
