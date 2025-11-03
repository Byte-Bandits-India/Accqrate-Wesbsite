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
          lg:h-[370px]
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
          <h2 className="text-fluid-h2 xl:text-[38px] font-medium mb-6 leading-tight">
            If you have any other questions not <br className="hidden md:block" /> addressed here
          </h2>

          <p className="text-fluid-body text-[#FFFFFF] my-6 md:my-8">
            Please feel free to contact us at{" "}
            <a
              href="mailto:Contact@accqrate-erp.com"
              className="text-[#FF6E3E] hover:text-[#ff875c] no-underline transition-colors duration-200"
            >
              Contact@accqrate-erp.com
            </a>
          </p>

          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex text-fluid-body items-center justify-center gap-2 bg-[#F05A28] text-[#FFFFFF] font-medium px-6 py-3 rounded-full"
          >
            Contact Your Consultant <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* COLUMN 3 — LOCK ICON */}
        <div className="flex items-center justify-center order-1 md:order-2">
          <Image
            src="/images/resources/lock.png"
            alt="ZATCA Lock Illustration"
            width={240}
            height={160}
            className="lg:w-fit md:h-[150px] lg:h-[220px] md:hidden lg:block"
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
