"use client";
import { useEffect, useState, useRef } from "react";
import { motion, PanInfo } from "motion/react";
import React from "react";

export interface Item {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export interface CarouselProps {
  items?: Item[];
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
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

export default function Carousel({
  items = DEFAULT_ITEMS,
  autoplay = true,
  autoplayDelay = 3000,
  pauseOnHover = true,
  loop = true,
}: CarouselProps): React.JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Properly typed transitions
  const springTransition = {
    type: "spring" as const,
    stiffness: 200,
    damping: 20
  };

  const dotsTransition = {
    duration: 0.3
  };

  // Handle drag/swipe
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -50 || velocity < -500) {
      setCurrentIndex((prev) => (prev === items.length - 1 ? (loop ? 0 : prev) : prev + 1));
    } else if (offset > 50 || velocity > 500) {
      setCurrentIndex((prev) => (prev === 0 ? (loop ? items.length - 1 : prev) : prev - 1));
    }
  };

  // Autoplay effect
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      if (!pauseOnHover || !isHovered) {
        setCurrentIndex((prev) => {
          if (prev === items.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [autoplay, autoplayDelay, loop, items.length, pauseOnHover, isHovered]);

  // Pause on hover
  useEffect(() => {
    if (!pauseOnHover || !containerRef.current) return;

    const container = containerRef.current;
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [pauseOnHover]);

  return (
    <div className="relative w-full flex flex-col items-center justify-center bg-black md:bg-white overflow-hidden select-none px-4 py-8">
      {/* Carousel Cards */}
      <motion.div
        className="relative w-full max-w-[900px] h-[320px] sm:h-[400px] flex items-center justify-center cursor-grab"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        ref={containerRef}
        whileTap={{ cursor: "grabbing" }}
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
              className="absolute bg-[#EDEDED] border border-gray-300 rounded-2xl shadow-xl p-8 flex flex-col justify-between
                        w-[340px] sm:w-[320px] md:w-[600px] h-[180px] md:h-[280px] transition-all duration-500 ease-in-out"
              style={{
                transform,
                opacity,
                filter: blur,
                zIndex,
              }}
              transition={springTransition}
              onClick={() => console.log(`Clicked card ${item.id}`)}
            >
              <p className="text-[#333333] text-fluid-small md:text-[18px] lg:text-[24px] leading-tight mb-6 flex-1">
                &quot;{item.quote}&quot;
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
      <div className="flex justify-center mt-4 relative z-10 cursor-pointer">
        {items.map((_, index) => (
          <motion.div
            key={index}
            className={`h-2 w-2 rounded-full mx-2 ${index === currentIndex ? "bg-white sm:bg-black" : "bg-gray-400 sm:bg-gray-400"
              }`}
            animate={{ scale: index === currentIndex ? 1.5 : 1 }}
            onClick={() => setCurrentIndex(index)}
            transition={dotsTransition}
          />
        ))}
      </div>
    </div>
  );
}