"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import IndustriesData from "./IndustriesData";
import { ArrowRight } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import React,{useState} from "react";
import { ContactModal } from "@/components/ContactModal";

export default function IndustriesSection() {
  const half = Math.ceil(IndustriesData.length / 2);
  const firstHalfIndustries = IndustriesData.slice(0, half);
  const secondHalfIndustries = IndustriesData.slice(half);
 const [isModalOpen, setModalOpen] = useState(false);
  return (
    <section className="bg-[#F8F6FF] py-20">
      <div className="container mx-auto px-6 md:px-16">
        {/* Header Section */}
        <div className="text-left mb-10">
          <FadeUp className="text-fluid-h1 font-bold text-gray-900 leading-tight">
            Digitalising Businesses Across <br className="hidden md:block" /> Industries
          </FadeUp>

          {/* Blue underline */}
          <div className="w-[156px] h-[2px] bg-[#194BED] mt-8 md:mt-12 lg:mt-[56px] rounded-full" />

          <FadeUp className="text-fluid-body lg:text-[24px] font-semibold text-gray-900 mt-6 md:mt-8 ">
            Explore How We've Digitized And Empowered Businesses Across Various Industries
          </FadeUp>

          <FadeUp className="text-gray-700 text-fluid-body lg:text-[24px] max-w-[1216px] mt-6 md:mt-8">
            At Accqrate, we've had the privilege of working with clients from across
            25+ sectors & industries, delivering ERP & E-invoicing solutions that
            drive success and Compliance. Here are some of our notable success stories.
          </FadeUp>
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
        <FadeUp className="flex justify-center mt-6 md:mt-8">
          <button className="flex items-center gap-2 bg-gradient-to-r from-[#29266E] to-[#194BED] text-white px-6 py-3 rounded-full text-sm md:text-base font-medium shadow-md hover:shadow-lg transition-all"
             onClick={() => setModalOpen(true)}>
            Book a Demo
            <ArrowRight className="w-4 h-4" />
          </button>
        </FadeUp>
      </div>
      {/* Contact Modal */}
                  <ContactModal open={isModalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );

}
