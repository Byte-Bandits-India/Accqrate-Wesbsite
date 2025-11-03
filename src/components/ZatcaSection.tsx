"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";

// ✅ Dynamically import ContactModal — prevents RSC static flag errors
const ContactModal = dynamic(() => import("@/components/ContactModal").then(mod => mod.ContactModal), {
  ssr: false, // Ensures it renders only on the client
});
export default function ZatcaSection() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <section
      className="w-full bg-gradient-to-r from-[#242087] to-[#1A0C48] text-white relative py-6 md:py-8"
      data-aos="fade-up"
    >
      <div
        className="
          max-w-[1280px]
          mx-auto
          grid
          grid-cols-1
          md:grid-cols-[auto_auto_auto]
          items-center
          justify-between
          gap-y-10
          px-6 md:px-8 xl:px-0
        "
      >
        {/* COLUMN 1 — LEFT CONTENT */}
        <div className="z-20 text-left order-2 md:order-1">
          <h2 className="text-[20px] md:text-[30px] font-medium mb-6 leading-tight">
            Get 100% ZATCA Phase II
            compliant with Accqrate
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
                <span className="text-[15px] md:text-[20px]">
                  {text}
                </span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex text-[14px] md:text-[18px] items-center justify-center gap-2 bg-[#F05A28] text-[#FFFFFF] font-medium px-6 py-4 rounded-full"
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

      {/* ✅ Modal rendered client-side only */}
      {isModalOpen && (
        <ContactModal open={isModalOpen} onClose={() => setModalOpen(false)} />
      )}
    </section>
  );
}
