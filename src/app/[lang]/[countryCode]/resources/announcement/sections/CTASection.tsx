"use client";

import React, { useState } from "react";
import { ArrowRight, Sparkles, Clock, Zap } from "lucide-react";
import { ContactModal } from "../../../../../../components/ContactModal"; // adjust path if needed

const CTASection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="w-full max-h-fit bg-gradient-to-l from-[#242087] to-[#1A0C48]  relative shadow-xl">
      <div className="md:flex gap-8  relative z-10 max-w-[1440px] p-6 md:p-10 lg:pb-0 mx-auto">
        {/* LEFT CONTENT */}
        <div className="text-white md:max-w-[300px] lg:max-w-[500px] xl:max-w-full ">
          <h2 className="text-fluid-h2 lg:text-[50px] font-medium mb-4">
            Save time, save money
          </h2>

          <p className="text-fluid-h3 lg:text-[26px] mb-6 text-white/90 leading-relaxed xl:max-w-[848px] ">
            Want the latest on ZATCA updates, fresh product insights,
            and exclusive Company editorials?
          </p>

          <p className="text-sm mb-8 text-white/80 leading-relaxed xl:max-w-[773px] ">
            Get fresh product insights and exclusive company editorials delivered straight to
            your <br className="hidden xl:block" /> inbox. Subscribe now to never miss a beat!
          </p>

          <div className="hidden">
            {/* MANUAL BUTTON */}
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center px-6 py-3 bg-white text-primary font-semibold rounded-full shadow-lg hover:bg-white/90 transition-all duration-200"
            >
              Sign Up
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>

            {/* Extra Info Tags */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 text-white/90 text-sm">

                <span>Free Proof of Concept</span>
                <img src="/images/resources/star-yellow.svg" alt="star" className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-2 text-white/90 text-sm">

                <span>30 Days Free Trial</span>
                <img src="/images/resources/star-yellow.svg" alt="star" className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-2 text-white/90 text-sm">

                <span>No complexity, Subscribe and use</span>

              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:flex justify-end relative -top-[150px] ">
          <img
            src="/images/chart-view.webp"
            alt="Dashboard Preview"
            className="xl:max-w-[499px] w-full md:h-[300px] lg:h-[350px] transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>


      {/* Bottom Buttons */}
      <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-4 lg:gap-8 py-6 md:py-8 lg:py-10">
        {[
          "Get a Free Proof of Concept",
          "Start 30-Day Free Trial",
          "Talk to Sales",
        ].map((text, i) => (
          <button
            key={i}
            className="h-[40px] md:h-[59px] max-w-[339px] text-nowrap flex items-center justify-between bg-[#F05A28] rounded-[50px] px-4 text-white text-fluid-small md:text-[18px] mt-[32px]"
          >
            {text}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-white"
            >
              <path
                d="M9 6l6 6-6 6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ))}
      </div>


      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32" />

      {/* Contact Modal */}
      <ContactModal open={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default CTASection;
