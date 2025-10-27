"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import IndustriesData from "./IndustriesData";
import { ArrowRight } from "lucide-react";

export default function IndustriesSection() {
  const half = Math.ceil(IndustriesData.length / 2);
  const firstHalfIndustries = IndustriesData.slice(0, half);
  const secondHalfIndustries = IndustriesData.slice(half);

  return (
    <section className="bg-[#F8F6FF] py-20">
      <div className="container mx-auto px-6 md:px-16">
        {/* Header Section */}
        <div className="text-left mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Digitalising Businesses Across <br className="hidden md:block" /> Industries
          </h2>

          {/* Blue underline */}
          <div className="w-16 h-[3px] bg-[#2A1D8D] mt-4 mb-5 rounded-full" />

          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            Explore How We've Digitized And Empowered Businesses Across Various Industries
          </h4>

          <p className="text-gray-700 text-base md:text-lg max-w-3xl">
            At Accqrate, we've had the privilege of working with clients from across
            25+ sectors & industries, delivering ERP & E-invoicing solutions that
            drive success and Compliance. Here are some of our notable success stories.
          </p>
        </div>

        {/* Marquee Section */}
        <div className="industries-marquee bg-gradient-to-r from-[#eff3ff] via-white to-[#eff3ff] rounded-2xl py-8 px-4 shadow-sm">
          <Marquee
            direction="left"
            gradient
            gradientColor="#eff3ff"
            gradientWidth={100}
            className="mb-4"
          >
            {firstHalfIndustries.map((data, i) => (
              <div
                key={i}
                className="card-design flex flex-col items-center justify-center text-center bg-white rounded-xl shadow-sm mx-4 p-4 min-w-[180px] max-w-[200px] border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <Image
                  src={data.image}
                  alt={data.title}
                  width={180}
                  height={120}
                  className="rounded-lg object-cover"
                />
                <h6 className="mt-3 text-sm font-semibold text-gray-800">{data.title}</h6>
              </div>
            ))}
          </Marquee>

          <Marquee
            direction="right"
            gradient
            gradientColor="#eff3ff"
            gradientWidth={100}
          >
            {secondHalfIndustries.map((data, i) => (
              <div
                key={i}
                className="card-design flex flex-col items-center justify-center text-center bg-white rounded-xl shadow-sm mx-4 p-4 min-w-[180px] max-w-[200px] border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <Image
                  src={data.image}
                  alt={data.title}
                  width={180}
                  height={120}
                  className="rounded-lg object-cover"
                />
                <h6 className="mt-3 text-sm font-semibold text-gray-800">{data.title}</h6>
              </div>
            ))}
          </Marquee>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <button className="flex items-center gap-2 bg-gradient-to-r from-[#29266E] to-[#194BED] text-white px-6 py-3 rounded-full text-sm md:text-base font-medium shadow-md hover:shadow-lg transition-all">
            Book a Demo
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}