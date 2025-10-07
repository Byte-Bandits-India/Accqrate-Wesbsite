// src/components/ui/FeatureCard.tsx
"use client";
import FadeUp from "./FadeUp";

import React from "react";

interface FeatureCardProps {
  videoSrc: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ videoSrc, title, description }) => {
  return (
    <FadeUp className="bg-white border text-center h-[327px] w-full sm:h-[400px] rounded-[20px] shadow-xl p-4 flex flex-col justify-center items-center">
      <div className="h-[227px]  w-full bg-[#EDEEEF] flex items-center justify-center rounded-lg">
        <video
          className="rounded-lg md:h-[190px] h-[150px] md:w-[280px] w-[220px] sm:w-[174px] object-cover mb-2"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      <div className="p-4">
        <h3 className="lg:text-[24px] text-[20px] text-[#333333] tracking-heading leading-tight sm:text-[18px] lg:mb-4 font-medium">{title}</h3>
        <p className="lg:text-[15px] text-[14px] text-[#808080] leading-tight mt-1 px-3 sm:px-0 max-w-xl tracking-para">{description}</p>
      </div>
    </FadeUp>
  );
};

export default FeatureCard;
