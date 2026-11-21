"use client";

import React from "react";
import ZatcaSection from "../faq/sections/ZatcaSection";

const NewsLetter: React.FC = () => {
  return (
    <>
      <section className="bg-gradient-to-t from-[#EFF3FF] to-transparent py-16 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center max-w-[560px] w-full">
            <h1 className="text-2xl sm:text-3xl md:text-[50px] font-semibold text-gray-900 leading-tight md:mb-6">
              Trusted Feedback That
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-[50px] mb-4 font-semibold text-gray-900 leading-tight md:mb-10">Drives Accqrate</h1>

            <div className="h-[2px] w-[80px] bg-blue-600 mb-8"></div>

            <p className="text-gray-700 text-base sm:text-[15px] md:text-[20px] leading-snug mb-10">
              We value every voice. Feedback from our clients pushes us to
              refine, elevate, and grow smarter every day.
            </p>

            <h4 className="text-gray-900 font-medium mb-6 text-lg md:text-[24px]">
              Join Our Newsletter
            </h4>

            {/* SUBSCRIBE FORM */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex mt-4 items-center w-full max-w-[500px] bg-[#FFF3EF] rounded-full border border-[#f25b30]/60 overflow-hidden"
            >
              <input
                type="email"
                placeholder="enter your email"
                className="flex-1 bg-transparent px-4 md:px-6 md:text-[20px] py-[16px] text-gray-800 placeholder:text-gray-500 focus:outline-none text-[16px]"
              />
              <button
                type="submit"
                className="bg-[#F05A28] md:text-[24px] text-white px-7 py-[18px] md:py-[22px] text-[16px] font-normal hover:bg-[#e14f28] transition-all rounded-full -ml-3"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 flex justify-center w-full">
            <img
              src="/images/newsletter.png"
              alt="Accqrate newsletter illustration"
              className="w-full max-w-[500px] rounded-2xl object-contain"
            />
          </div>
        </div>
      </section>

      {/* Next Section */}
      <ZatcaSection />
    </>
  );
};

export default NewsLetter;
