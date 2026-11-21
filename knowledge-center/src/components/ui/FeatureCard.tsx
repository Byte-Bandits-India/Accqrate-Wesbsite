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
    <FadeUp className="bg-white border text-center w-full sm:h-[400px] h-[327px] rounded-[20px] shadow-xl p-4 flex flex-col 
                   justify-center sm:justify-start items-center overflow-hidden">
      {/* Video Container */}
      <div className="w-full bg-[#EDEEEF] flex items-center justify-center rounded-[16px] md:rounded-lg overflow-hidden
                  h-[227px] md:h-[200px]">
        <video
          className="rounded-lg w-[174px] sm:w-[174px] md:w-[280px] lg:w-[280px] h-auto object-cover mb-2"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* Text Content */}
      <div className="p-4 w-full flex flex-col justify-center sm:justify-start 
                  h-auto sm:h-[calc(100%-227px)] md:h-[calc(100%-200px)]">
        <h3 className="lg:text-[24px] text-[20px] text-[#333333] tracking-heading leading-tight sm:text-[18px] lg:mb-4 font-medium">
          {title}
        </h3>
        <p className="lg:text-[15px] text-[14px] text-[#808080] leading-tight mt-1 px-3 sm:px-0 max-w-xl tracking-para">
          {description}
        </p>
      </div>
    </FadeUp>

  );
};

export default FeatureCard;
