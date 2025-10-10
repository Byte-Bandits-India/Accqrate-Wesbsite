"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, PanInfo } from "motion/react";

interface Item {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

interface Section3Props {
  items?: Item[];
  autoplay?: boolean;
  autoplayDelay?: number;
}

const DEFAULT_ITEMS: Item[] = [
  {
    id: 1,
    quote:
      "Accqrate ONE streamlined our processes and improved our bottom line within the first quarter.",
    name: "HR Director",
    role: "Global Retail Chain",
    avatar: "/images/business/one/hr.png",
  },
  {
    id: 2,
    quote:
      "Accqrate ONE streamlined our processes and improved our bottom line within the first quarter.",
    name: "HR Director",
    role: "Global Retail Chain",
    avatar: "/images/business/one/hr.png",
  },
  {
    id: 3,
    quote:
      "Accqrate ONE streamlined our processes and improved our bottom line within the first quarter.",
    name: "HR Director",
    role: "Global Retail Chain",
    avatar: "/images/business/one/hr.png",
  },
];

export default function Section3({
  items = DEFAULT_ITEMS,
  autoplay = true,
  autoplayDelay = 5000,
}: Section3Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // --- Autoplay ---
  useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoplayDelay);
    return () => clearInterval(id);
  }, [autoplay, autoplayDelay, items.length]);

  // --- Drag / swipe ---
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const { offset, velocity } = info;
    if (offset.x < -50 || velocity.x < -300) {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    } else if (offset.x > 50 || velocity.x > 300) {
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    }
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center bg-black md:bg-white overflow-hidden select-none px-4 py-8">
      {/* Carousel Cards */}
      <motion.div
        className="relative w-full max-w-[900px] h-[320px] sm:h-[400px] flex items-center justify-center"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
      >
        {items.map((item, index) => {
          const diff = (index - currentIndex + items.length) % items.length;

          let transform = "";
          let opacity = 0;
          let blur = "blur(4px)";
          let zIndex = 1;

          if (diff === 0) {
            transform = "translateX(0%) scale(1.05)";
            opacity = 1;
            blur = "blur(0px)";
            zIndex = 3;
          } else if (diff === 1 || diff === -items.length + 1) {
            transform = "translateX(70%) scale(0.9)";
            opacity = 0.6;
            zIndex = 2;
          } else if (diff === items.length - 1 || diff === -1) {
            transform = "translateX(-70%) scale(0.9)";
            opacity = 0.6;
            zIndex = 2;
          }

          return (
            <motion.div
              key={item.id}
              className="absolute bg-[#EDEDED] border border-gray-300 rounded-2xl shadow-xl p-8 flex flex-col justify-between cursor-pointer
                        w-[340px] sm:w-[320px] md:w-[600px] h-[180px] md:h-[280px] transition-all duration-500 ease-in-out"
              style={{
                transform,
                opacity,
                filter: blur,
                zIndex,
              }}
              onClick={() => console.log(`Clicked card ${item.id}`)}
            >
              <p className="text-[#333333] text-fluid-small md:text-[18px] lg:text-[24px] leading-tight mb-6 flex-1">
                “{item.quote}”
              </p>
              <div className="flex items-center md:mt-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="text-black font-medium text-[10px] md:text-[14px] lg:text-[16px]">
                    {item.name}
                  </h4>
                  <p className="text-black font-medium text-[10px] md:text-[14px] lg:text-[16px]">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Dots */}
      <div className="flex justify-center mt-4 relative z-10">
        {items.map((_, index) => (
          <motion.div
            key={index}
            className={`
        h-2 w-2 rounded-full mx-2 cursor-pointer
        ${index === currentIndex ? "bg-white sm:bg-black" : "bg-gray-400 sm:bg-gray-400"}
      `}
            animate={{ scale: index === currentIndex ? 1.5 : 1 }}
            onClick={() => setCurrentIndex(index)}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
}
