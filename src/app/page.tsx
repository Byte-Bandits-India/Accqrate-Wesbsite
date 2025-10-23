"use client";
import InfoCard from "@/components/ui/card";
import FadeUp from "@/components/ui/FadeUp";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import React, { useEffect, useState, useRef } from "react";
import { motion, PanInfo } from "motion/react";

// ---------------- CarouselCard ----------------
interface CarouselCardProps {
  quote: string;
  name: string;
  avatar: string;
  bg: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

interface ServiceCard {
  title: string;
  desc: string;
  bg: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  quote,
  name,
  bg,
  avatar,
  style,
  onClick
}) => {
  return (
    <div
      className="absolute rounded-2xl shadow-xl flex
             w-[340px] sm:w-[320px] md:w-[600px] h-[180px] md:h-[200px]
             transition-all duration-500 ease-in-out overflow-hidden bg-[#E6F2FF] cursor-pointer"
      style={style}
      onClick={onClick}
    >
      {/* Background Image - Fixed left section */}
      <div className="relative h-full w-[100px] md:w-[180px] flex-shrink-0">
        <img
          src={bg}
          alt="background"
          className="absolute left-0 top-0 h-full w-full object-cover z-0"
        />

        {/* Avatar slightly offset using left-20 */}
        <div className="relative h-full w-full">
          <img
            src={avatar}
            alt={name}
            className="absolute top-1/2 left-[75px] md:left-36 lg:left-[124px] transform -translate-y-1/2 w-12 h-12 md:w-[70px] md:h-[70px] lg:w-[100px] lg:h-[100px] rounded-full object-cover border-2 border-white z-20"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-start p-6 md:pl-8 lg:px-[60px] relative z-20">
        {/* Quote text */}
        <p className="text-[#000000] text-fluid-small md:text-[18px] lg:text-[20px] leading-tight tracking-heading drop-shadow-md font-bold mb-0">
          &quot;{quote}&quot;
        </p>

        {/* Name - directly below quote, no gap */}
        <h4 className="text-[#000000] mt-[20px] md:mt-[30px] font-medium text-[10px] md:text-[14px] lg:text-[16px] drop-shadow-md leading-tight tracking-para">
          {name}
        </h4>
      </div>


      {/* Soft overlay for readability */}
      <div className="absolute inset-0 z-10" />
    </div>
  );
};

// ---------------- CarouselDots ----------------
interface CarouselDotsProps {
  total: number;
  currentIndex: number;
  onDotClick: (index: number) => void;
}

const CarouselDots: React.FC<CarouselDotsProps> = ({ total, currentIndex, onDotClick }) => {
  return (
    <div className="flex justify-center mt-4 relative z-10 cursor-pointer">
      {Array.from({ length: total }).map((_, index) => (
        <motion.div
          key={index}
          className={`h-2 w-2 rounded-full mx-2 ${index === currentIndex ? "bg-white sm:bg-black" : "bg-gray-400 sm:bg-gray-400"}`}
          animate={{ scale: index === currentIndex ? 1.5 : 1 }}
          onClick={() => onDotClick(index)}
          transition={{ duration: 0.3 }}
        />
      ))}
    </div>
  );
};

// ---------------- Carousel ----------------
interface CarouselProps {
  items?: CarouselCardProps[];
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  items = [],
  autoplay = true,
  autoplayDelay = 3000,
  pauseOnHover = true,
  loop = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex(prev => {
      if (prev === items.length - 1) {
        return loop ? 0 : prev;
      }
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex(prev => {
      if (prev === 0) {
        return loop ? items.length - 1 : prev;
      }
      return prev - 1;
    });
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -50 || velocity < -500) {
      nextSlide();
    } else if (offset > 50 || velocity > 500) {
      prevSlide();
    }
  };

  // Improved autoplay with proper cleanup
  useEffect(() => {
    if (!autoplay || items.length === 0) return;

    const interval = setInterval(() => {
      if (!pauseOnHover || !isHovered) {
        nextSlide();
      }
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, items.length, loop]);

  // Handle dot clicks
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="relative w-full flex flex-col items-center justify-center overflow-hidden select-none px-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        ref={containerRef}
        className="relative w-full max-w-[900px] h-[220px] sm:h-[400px] flex items-center justify-center cursor-grab"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
        whileTap={{ cursor: "grabbing" }}
      >
        {items.map((item, index) => {
          // Calculate position with proper looping logic
          let position = index - currentIndex;

          // Handle loop wrapping
          if (position > items.length / 2) position -= items.length;
          if (position < -items.length / 2) position += items.length;

          let transform = "";
          let opacity = 0;
          let blur = "blur(4px)";
          let zIndex = 1;
          let scale = 0.9;

          if (position === 0) {
            // Center card
            transform = "translateX(0%)";
            opacity = 1;
            blur = "blur(0px)";
            zIndex = 3;
            scale = 1.05;
          } else if (position === 1 || position === -items.length + 1) {
            // Right card
            transform = "translateX(70%)";
            opacity = 0.6;
            zIndex = 2;
          } else if (position === -1 || position === items.length - 1) {
            // Left card
            transform = "translateX(-70%)";
            opacity = 0.6;
            zIndex = 2;
          } else {
            // Hidden cards
            opacity = 0;
            zIndex = 0;
          }

          return (
            <CarouselCard
              key={index}
              {...item}
              style={{
                transform: `${transform} scale(${scale})`,
                opacity,
                filter: blur,
                zIndex
              }}
              onClick={() => setCurrentIndex(index)}
            />
          );
        })}
      </motion.div>

      <CarouselDots
        total={items.length}
        currentIndex={currentIndex}
        onDotClick={handleDotClick}
      />
    </div>
  );
};

export default function Page() {
  const [enabled, setEnabled] = React.useState(false)
  const carouselRef = useRef<HTMLDivElement>(null);
  const cards = [
    {
      icon: "/images/cards/crm.png",
      title: "CRM",
      description: "Lead capture, pipeline visibility and faster conversions.",
      color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
      link: "/business/crm",
    },
    {
      icon: "/images/cards/books.png",
      title: "Books",
      description: "Accounting + sales, purchase, inventory & project accounting for MSMEs.",
      color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
      link: "/business/books",
    },
    {
      icon: "/images/cards/people.png",
      title: "People",
      description: "HR & Payroll from hire to retire with local labor-law compliance.",
      color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
      link: "/business/people",
    },
    {
      icon: "/images/cards/retail.png",
      title: "Retail",
      description: "Modern, device-agnostic POS with 8-hour deployment & e-invoice.",
      color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
      link: "/business/retail",
    },
    {
      icon: "/images/cards/factory.png",
      title: "Factory",
      description: "Production, inventory, costing & budgeting for manufacturers.",
      color: "linear-gradient(to right, #FFFFFF, #FFF3E6)",
      link: "/business/factory",
    },
    {
      icon: "/images/cards/E‑Invoicing.png",
      title: "E‑Invoicing",
      description: "Seamless, compliant connections to tax authorities.",
      color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
      link: "/e-invoicing",
    }
  ];

  const features = [
    {
      img: "/images/landingpage/one.png",
      title: "One platform. Zero silos.",
      description: "All modules run on a single, integrated data model."
    },
    {
      img: "/images/landingpage/grade.png",
      title: "Enterprise‑grade.",
      description: "Security, scalability and performance proven across 30+ industries."
    },
    {
      img: "/images/landingpage/ai.png",
      title: "AI, everywhere.",
      description: "Accelera, our AI copilot ,accelerates routine work, insights and decisions."
    },
    {
      img: "/images/landingpage/time.png",
      title: "Fast time‑to‑value.",
      description: "Lightning‑fast UI, one‑click installs, and low‑disruption migrations from SAP/Microsoft/Oracle or disjointed tools."
    },
    {
      img: "/images/landingpage/built.png",
      title: "Built‑in Global compliance:",
      description: "Connect ERP/POS to tax authorities; from ZATCA Phase II to PEPPOL standards."
    },
    {
      img: "/images/landingpage/deploy.png",
      title: "Deploy your way.",
      description: "Cloud (managed, subscription) or On‑Prem (full control over infra & data)."
    }
  ];

  const icon = [
    {
      img: "/images/landingpage/1.png",
      title: "5,000+",
      description: "Companies rely on Accqrate."
    },
    {
      img: "/images/landingpage/2.png",
      title: "30M+",
      description: "invoices processed every month."
    },
    {
      img: "/images/landingpage/3.png",
      title: "25+ ",
      description: "business sectors served."
    },
  ];

  const topRow = [
    { src: "/images/business/books/1.png", name: "Education" },
    { src: "/images/business/books/2.png", name: "Construction & Engineering" },
    { src: "/images/business/books/3.png", name: "Logistics" },
    { src: "/images/business/books/4.png", name: "Insurance" },
    { src: "/images/business/books/5.png", name: "Conglomerate" },
    { src: "/images/business/books/6.png", name: "Pharmacy" },
    { src: "/images/business/books/7.png", name: "Energy" },
    { src: "/images/business/books/8.png", name: "Conglomerate" },
    { src: "/images/business/books/9.png", name: "Insurance" },
    { src: "/images/business/books/10.png", name: "Packaging solutions" },
    { src: "/images/business/books/11.png", name: "Food & Beverage" },
    { src: "/images/business/books/12.png", name: "Trading" },
    { src: "/images/business/books/13.png", name: "Chemicals" },
  ];

  const bottomRow = [
    { src: "/images/business/books/14.png", name: "Hospitality and Tourism" },
    { src: "/images/business/books/15.png", name: "FMCD" },
    { src: "/images/business/books/16.png", name: "Oil & Gas" },
    { src: "/images/business/books/17.png", name: "Home Appliances" },
    { src: "/images/business/books/18.png", name: "Manufacturing" },
    { src: "/images/business/books/19.png", name: "Construction & Engineering" },
    { src: "/images/business/books/20.png", name: "Education" },
    { src: "/images/business/books/21.png", name: "Conglomerate" },
    { src: "/images/business/books/22.png", name: "Electrical Industries Co." },
    { src: "/images/business/books/23.png", name: "Aerospace & Defense" },
    { src: "/images/business/books/24.png", name: "Retail" },
    { src: "/images/business/books/25.png", name: "Ecommerce" },
    { src: "/images/business/books/26.png", name: "Fashion" },
  ];

  const testimonialCards: CarouselCardProps[] = [
    {
      quote: "Ali - Construction Company",
      name: "Accqrate's e‑invoice solution integrated seamlessly with ZATCA. We saved time and cut compliance risk.",
      avatar: "/images/landingpage/Ali.png",
      bg: "/images/landingpage/blue.png"
    },
    {
      quote: "Al Laith, UAE Global Health & Beauty Co.",
      name: "Accqrate's e‑invoice solution integrated seamlessly with ZATCA. We saved time and cut compliance risk.",
      avatar: "/images/landingpage/UAE.png",
      bg: "/images/landingpage/blue.png"
    },
    {
      quote: "Wail - Jonex",
      name: "Accqrate's e‑invoice solution integrated seamlessly with ZATCA. We saved time and cut compliance risk.",
      avatar: "/images/landingpage/Wail.png",
      bg: "/images/landingpage/blue.png"
    },
  ];

  const CarouselCard: ServiceCard[] = [
    {
      title: "Compliance without compromise",
      desc: "Regulations met by design.",
      bg: "#C2CDEC"
    },
    {
      title: "Security first.",
      desc: "Data protection and governance across cloud and on‑prem.",
      bg: "#BDECC8"

    },
    {
      title: "Customer obsessed delivery",
      desc: "On time. In scope. With measurable outcomes.",
      bg: "#FFE9D1"
    },
    {
      title: "Performance at scale",
      desc: "Built for enterprise workloads and real‑time operations.",
      bg: "#F5D5FF"

    },
    {
      title: "Usability that drives adoption",
      desc: "Clean, fast, role‑based UX.",
      bg: "#C4E0FF"
    },
  ];

  const faqs = [
    {
      question: "How long is the free trial?",
      answer: "30 days. (Plus an optional 14‑day practice account for a total of 44 days.)",
    },
    {
      question: "Can I terminate during the trial?",
      answer: "Yes, no commitment during the trial.",
    },
    {
      question: "Do I need a credit card to start?",
      answer: "No card required to begin the trial.",
    },
    {
      question: "Where is Accqrate Cloud hosted?",
      answer: "Regional hosting options with data‑residency choices; on‑prem available for full control.",
    },
    {
      question: "How do I pay the subscription?",
      answer: "Monthly or annual plans; invoicing and payment options vary by region.",
    },
    {
      question: "What plans are available?",
      answer: "Tiered by module mix and users; bundle pricing for suites.",
    },
  ];

  const duplicatedCards = [...CarouselCard, ...CarouselCard];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const totalWidth = carousel.scrollWidth;
        const singleSetWidth = totalWidth / 2;

        // When scrolled past end of first set → jump back seamlessly
        if (carousel.scrollLeft >= singleSetWidth) {
          carousel.scrollLeft -= singleSetWidth;
        }
        // When scrolled backward before start → jump forward seamlessly
        else if (carousel.scrollLeft <= 0) {
          carousel.scrollLeft += singleSetWidth;
        }

        ticking = false;
      });
    };

    carousel.addEventListener("scroll", onScroll, { passive: true });

    // tiny offset helps with reverse scroll detection
    if (carousel.scrollLeft === 0) {
      carousel.scrollLeft = 1;
    }

    // ✅ cleanup — this is what useEffect should return
    return () => {
      carousel.removeEventListener("scroll", onScroll);
    };
  }, []);


  return (
    <main className="overflow-x-hidden font-inter">
      <div className="bg-[#F8F6FF]">
        <div className="h-fit xl:min-h-fit bg-[url('/images/sunset.png')] bg-cover bg-no-repeat bg-center lg:bg-local">
          <div className="max-w-[1440px] mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_400px] xl:grid-cols-[minmax(0,1fr)_520px] gap-10 lg:gap-12 pt-[95px]">

              {/* LEFT COLUMN */}
              <div className="flex flex-col justify-start">
                <h1 className="text-[30px] md:text-[38px] lg:text-[50px] max-w-full lg:max-w-[685px] font-normal tracking-heading leading-tight">
                  Accqrate: The AI-Powered Modern ERP, E-invoicing, & Business Suite Built for Scale
                </h1>
                <p className="font-medium text-fluid-body mt-6 lg:mt-10 tracking-para">
                  One Unified Platform. Infinite Possibilities.
                </p>
                <p className="border-t-2 border-[#29266E] w-[60px] mt-6 lg:mt-10"></p>

                <div className="bg-white/50 rounded-[20px] p-6 md:p-8 flex flex-col justify-center text-center mt-6 lg:mt-10 max-w-full md:max-w-[700px] mx-auto md:mx-0">
                  <p className="text-black text-fluid-small tracking-para leading-tight text-left font-normal">
                    Experience the future of ERP & E-Invoicing — integrated, intelligent, and incredibly scalable.
                    From Sales to Accounting, Payroll to Procurement, manage your entire business seamlessly on one secure,
                    cloud-based or on-premise platform.
                  </p>
                  <h2 className="mt-6 md:mt-8 text-fluid-body lg:text-[24px] font-medium text-black hidden tracking-heading lg:block">
                    Simple · Powerful · Designed for Tomorrow.
                  </h2>
                </div>

                <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-start gap-3 md:gap-4 my-[64px] md:my-8 lg:mt-10">
                  {["Book a Demo", "Get a 30 Day Trial", "Talk to Us"].map((text, i) => (
                    <button
                      key={i}
                      className="w-[280px] sm:w-[180px] md:w-[221px] h-[47px] bg-gradient-to-r from-[#FFFFFF] tracking-para to-[#C5E1FF] text-[#000000] text-fluid-body lg:text-[18px] xl:text-[20px] font-medium rounded-[5px] hover:from-[#C5E1FF] hover:to-[#FFFFFF] transition-all"
                    >
                      {text}
                    </button>
                  ))}
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="hidden lg:flex flex-col justify-center mb-8 lg:mt-0 gap-4">
                <h1 className="text-fluid-body font-medium">Featured Solutions:</h1>
                {cards.map((card) => (
                  <InfoCard key={card.title} {...card} />
                ))}
                <div className="h-[50px] max-w-full md:max-w-[418px] bg-[#D6E0FF] rounded-[5px] mt-3 flex items-center justify-start px-4 md:px-6 cursor-pointer">
                  <h3 className="text-[14px] tracking-heading leading-tight">Explore All Products</h3>
                  <div className="flex-shrink-0 ml-6">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="text-[#333333]"
                    >
                      <path
                        d="m9 6 6 6-6 6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Featured Solutions */}
        <div className="lg:hidden px-6 md:px-8">
          <div className="max-w-[1440px] mx-auto py-8">
            <h1 className="text-fluid-body font-medium mb-4">Featured Solutions:</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cards.map((card) => (
                <InfoCard key={card.title} {...card} />
              ))}

              {/* "Explore All Products" card */}
              <div
                className="cursor-pointer flex items-center justify-between w-full h-[50px] mx-auto overflow-hidden shadow-[0_0_2px_rgba(0,0,0,0.25)] transition-all hover:shadow-md p-4 sm:p-5 bg-[#D6E0FF]"
              >
                <h3 className="text-[14px] font-medium">Explore All Products</h3>
                <div className="flex-shrink-0 ml-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="text-[#333333]"
                  >
                    <path
                      d="m9 6 6 6-6 6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* /Why Accqrate? */}
        <div>
          <div className="max-w-[1677px] w-full mx-auto px-6 md:px-8 mt-[48px]">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column */}
              <div>
                <h2 className="font-medium text-fluid-small lg:text-[20px] tracking-heading uppercase">
                  /Why Accqrate?
                </h2>
                <h3 className="text-fluid-h3 md:text-[32px] lg:text-[50px] font-medium mt-6 md:mt-8 lg:mt-[60px] tracking-heading leading-tight">
                  We specialize in providing reliable and efficient Solutions
                </h3>
              </div>

              {/* Right Column */}
              <div className="flex flex-col justify-start lg:justify-center">
                <p className="text-fluid-small font-normal mt-[20px] md:mt-[38px] tracking-para leading-tight lg:mt-0">
                  Unlock a world of efficiency with our extensive suite of business modules. Simplify and enhance any task with seamless, one-click installations. Experience unparalleled speed, integration, and smart AI technology, enabling operations faster than a blink. Empower your team with the right tools for every job, all within a lightning-fast UI
                </p>
                <button
                  className="h-[40px] w-[144px] md:w-[199px] text-white text-fluid-small tracking-para leading-tight md:text-[18px] mt-[20px] md:mt-[30px]"
                  style={{ background: 'linear-gradient(90deg, #194BED 0%, #29266E 100%)' }}
                >
                  See It in Action
                </button>
              </div>
            </div>

            <div className="mt-[73px] grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-[30px]">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center lg:items-start text-center max-w-[242px] mx-auto md:max-w-[207px]"
                >
                  <img className="mb-4" src={feature.img} alt={feature.title} />
                  <h2 className="text-fluid-h3 xl:text-[23px] font-medium mb-6 lg:mb-[30px] md:text-left tracking-heading leading-tight">{feature.title}</h2>
                  <p className="text-fluid-small md:text-left tracking-para leading-tight">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trusted text */}
        <div className="mt-[80px] rounded-[30px] bg-[linear-gradient(180deg,#FFFFFF_0%,#E9E8FF_50%,#4F52FF_100%)] py-6 md:py-8 max-w-[1440px] mx-auto">

          <FadeUp className="mb-8 md:mb-[40px]">
            <h3 className="text-fluid-h3 max-w-[354px]  tracking-heading leading-tight font-medium text-[#333333] text-center mx-auto">
              Trusted by  <br className="md:hidden" /><span className="text-[#194BED]">5,000+ Global companies</span>
            </h3>
          </FadeUp>

          {/* Logo Marquee */}
          <div className="relative ">
            <div className="max-w-5xl overflow-hidden py-6 mx-auto">
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-14 md:w-20 bg-gradient-to-r from-[#FEFEFE] to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-14 md:w-20 bg-gradient-to-l from-[#FEFEFE] to-transparent" />

              <div className="flex flex-col gap-6">
                <div className="flex animate-scrollLeft w-max flex-shrink-0">
                  {[...topRow, ...topRow].map((logo, i) => (
                    <div key={`top-${i}`} className="flex flex-col items-center mx-4">
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        width={135}
                        height={48}
                        className="h-12 md:h-16 w-40 md:w-60 grayscale opacity-90 transition hover:grayscale-0 hover:opacity-100"
                      />
                      <p className=" text-xs md:text-sm text-[#737373] font-medium">{logo.name}</p>
                    </div>
                  ))}
                </div>

                <div className="flex animate-scrollRight w-max flex-shrink-0">
                  {[...bottomRow, ...bottomRow].map((logo, i) => (
                    <div key={`bottom-${i}`} className="flex flex-col items-center mx-4">
                      <img
                        src={logo.src}
                        alt={logo.name}
                        width={135}
                        height={48}
                        className="h-12 md:h-16 w-40 md:w-60 grayscale opacity-90 transition hover:grayscale-0 hover:opacity-100"
                      />
                      <p className=" text-xs md:text-sm text-[#737373] font-medium">{logo.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 border-b border-gray-100 flex flex-col mt-[34px] items-center">
            <div className="flex items-center space-x-2 text-[#194BED]">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <span className="text-[#333333] text-fluid-small tracking-para lg:text-[16px] ml-2">Based on reviews</span>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start mt-[73px] px-6 md:px-8">
            <Switch checked={enabled} onCheckedChange={setEnabled} />
          </div>

          <div className="max-w-[1440px] mx-auto px-6 md:px-8 mt-[32px] grid xl:grid-cols-2 gap-6">
            {/* Left Side: Full‑Suite ERP */}
            <FadeUp className="bg-[#FFFFFF] font-inter xl:h-[804px] rounded-xl md:rounded-2xl p-6 md:p-8">
              <div>
                <div className="flex items-center space-x-4">
                  <img src="/images/landingpage/one-erp.png" alt="one" className="h-[40px] md:h-[50px] lg:h-[60px] xl:h-[100px]" />
                  <span className="text-[#000000] tracking-heading text-[20px] font-medium md:text-[24px] lg:text-[30px] xl:text-[48px] leading-tight whitespace-nowrap">
                    Accqrate ONE <br />
                    The Full‑Suite ERP
                  </span>
                </div>
                <p className="pb-6 md:pb-[32px] tracking-para text-[#333333] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] leading-tight mt-[30px]">
                  Replace fragmented tools and legacy monoliths with a modern ERP suite designed for speed and adoption.
                </p>
                <div className="w-full mt-6 md:mt-0">
                  <div className="bg-[#D9D9D9] h-[436px] md:h-[386px] rounded-[20px]"></div>
                </div>
              </div>
            </FadeUp>

            {/* Right Side: Modules included + What you'll achieve */}
            <div className="space-y-6">
              <FadeUp className="bg-[#FFFFFF] font-inter xl:h-[280px] rounded-xl md:rounded-2xl p-6 md:p-8">
                <h2 className="text-[24px] font-medium tracking-heading">Modules included:</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-2 mt-8 text-fluid-small tracking-para list-disc pl-5">
                  <li>POS</li>
                  <li>Sales</li>
                  <li>Purchase</li>
                  <li>Accounting</li>
                  <li>Project Management</li>
                  <li>CRM</li>
                  <li>E‑Invoicing</li>
                  <li>Production</li>
                  <li>HR & Payroll</li>
                  <li>Cycle Management</li>
                  <li>DMS</li>
                  <li>Inventory</li>
                  <li>Controlling</li>
                  <li>Fixed Assets</li>
                  <li>Gold Management</li>
                </ul>

              </FadeUp>

              <FadeUp className="bg-[#FFFFFF] font-inter xl:h-[505px] rounded-xl md:rounded-2xl p-6 md:p-8">
                <h2 className="text-fluid-h3 lg:text-[24px] font-medium tracking-heading">What you’ll achieve:</h2>
                <ul className="text-left list-disc pl-5 space-y-1 mt-[15px] text-fluid-small tracking-para">
                  <li>Unified operations: Finance to factory on a single source of truth.</li>
                  <li>Quicker close, cleaner audits: Built‑in controls and automated reconciliations.</li>
                  <li>Smarter planning: AI‑assisted forecasting and scenario modeling.</li>
                  <li>Happier teams: Intuitive UI reduces training time and boosts productivity.</li>
                </ul>

                <h2 className="mt-8 text-fluid-h3 lg:text-[24px] font-medium tracking-heading">Migration advantages:</h2>
                <ul className="text-left list-disc pl-5 space-y-1 mt-[15px] text-fluid-small tracking-para">
                  <li>Rapid implementation with minimal downtime.</li>
                  <li>Proven playbooks for moving from ERPs & Applications</li>
                  <li>Coexistence options while you phase out legacy.</li>
                </ul>

                <button
                  className="h-[40px] max-w-[399px] flex items-center justify-between px-4 text-white text-fluid-small md:text-[18px] mt-[32px]"
                  style={{ background: 'linear-gradient(90deg, #194BED 0%, #29266E 100%)' }}
                >
                  Request an ERP Migration Assessment
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
              </FadeUp>
            </div>
          </div>
        </div>

        {/* Your AI Copilot */}
        <div className="hidden md:block">
          <div className="max-w-[1440px] mx-auto px-6 md:px-8 mt-[72px] grid lg:grid-cols-2 gap-6">
            {/* Left Side: Text + list + button */}
            <FadeUp className="font-inter rounded-xl md:rounded-2xl flex flex-col">
              <h2 className="text-[#000000] tracking-heading text-[20px] font-medium md:text-[32px] lg:text-[50px] leading-tight whitespace-nowrap">
                Accelera <br />
                Your AI Copilot
              </h2>
              <p className="pb-4 md:pb-6 tracking-para text-[#333333] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] leading-tight mt-[30px] lg:mt-[60px]">
                Work faster and decide smarter with AI embedded across the suite.
              </p>
              <ul className="text-left list-disc pl-5 space-y-1 mt-[15px] lg:mt-[60px] text-fluid-small tracking-heading">
                <li><b>Natural‑language actions:</b> Ask, “Show last month’s receivables by region” and get the answer, fast.</li>
                <li><b>Automations:</b> Generate e‑invoices, match POs, trigger approvals and alerts.</li>
                <li><b>Insight to action:</b> Spot anomalies, forecast demand, and recommend next steps.</li>
                <li><b>Assistive UX:</b> Contextual help, data enrichment and guided workflows.</li>
              </ul>
              <button
                className="h-[40px] max-w-[399px] flex items-center justify-between px-4 text-white text-fluid-small md:text-[18px] mt-[32px] tracking-para lg:mt-[60px]"
                style={{ background: 'linear-gradient(90deg, #194BED 0%, #29266E 100%)' }}
              >
                See Accelera in a 5‑Minute Demo
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white">
                  <path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </FadeUp>

            {/* Right Side: Image/placeholder */}
            <div className="flex items-start justify-start">
              <div className="bg-[#D9D9D9] h-[436px] md:h-[386px] lg:h-[547px] w-full"></div>
            </div>
          </div>

          <div className="max-w-[1440px] mx-auto px-6 md:px-8 mt-[72px] grid lg:grid-cols-2 gap-6 items-center pb-[36px]  md:pb-[200px] lg:pb-[300px]">
            {/* Left Side: Image (Desktop) */}
            <div className="hidden lg:flex flex-col items-start justify-center">
              <h2 className="text-black hidden lg:block tracking-para text-[20px] font-medium md:text-[24px] lg:text-[30px] xl:text-[48px] leading-tight whitespace-nowrap mb-6">
                Compliance & Connectivity
              </h2>
              <div className="bg-[#D9D9D9] h-[436px] md:h-[386px] w-full"></div>
            </div>

            {/* Right Side: Text + List + Button */}
            <FadeUp className="font-inter rounded-xl md:rounded-2xl flex flex-col items-start text-center">
              <h2 className="text-black lg:hidden tracking-para text-[20px] font-medium md:text-[24px] lg:text-[30px] xl:text-[48px] leading-tight whitespace-nowrap mb-6">
                Compliance & Connectivity
              </h2>
              <ul className="list-disc space-y-1 mt-[15px] text-fluid-small text-left pl-5">
                <li>ZATCA Phase II: Generate compliant e‑invoices at scale; integrate with KSA tax authority.</li>
                <li>PEPPOL: Cross‑border e‑invoicing via standardized network.</li>
                <li>Open integrations: Connect any ERP, POS or homegrown system through APIs and adapters.</li>
              </ul>
              <button
                className="h-[40px] max-w-[399px] flex items-center justify-between px-4 text-white text-fluid-small md:text-[18px] mt-[32px]"
                style={{ background: 'linear-gradient(90deg, #194BED 0%, #29266E 100%)' }}
              >
                Talk to a Compliance Expert
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white">
                  <path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </FadeUp>

            {/* Image (Mobile) */}
            <div className="lg:hidden flex items-center justify-center">
              <div className="bg-[#D9D9D9] h-[436px] md:h-[386px] w-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Outcomes and The Impact */}
      <div className="md:mx-8">
        <div className="relative md:-top-[150px] lg:-top-[200px] max-w-[1151px] pb-8 mx-auto md:border md:rounded-[40px] bg-white min-h-[400px]">
          <div>
            <h2 className="text-fluid-h2 font-medium text-center mt-8 tracking-heading leading-tight">Outcomes and The Impact</h2>
          </div>
          <div className="mt-[73px] grid grid-cols-1 md:grid-cols-3 gap-10">
            {icon.map((icon, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center max-w-[174px] mx-auto md:max-w-[207px]"
              >
                <img className="mb-4" src={icon.img} alt={icon.title} />
                <h2 className="text-fluid-h2 xl:text-[23px] text-[#194BED] font-medium mb-2">{icon.title}</h2>
                <p className="text-fluid-body">{icon.description}</p>
              </div>
            ))}
          </div>
          <div className="border-t-2 text-[#D9D9D9] mt-[40px] max-w-[354px] mx-auto md:max-w-[676px] lg:max-w-[1051px] ">
            <h2 className="text-[#000000] text-fluid-body text-center max-w-[273px] md:max-w-[677px] mx-auto mt-[28px] tracking-heading">
              Operating across MENA & ASEAN, backed by Iteron AG (Switzerland).
            </h2>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="h-[40px] max-w-[399px] flex items-center justify-between px-4 text-white text-fluid-small md:text-[18px] mt-[32px]"
              style={{ background: 'linear-gradient(90deg, #194BED 0%, #29266E 100%)' }}
            >
              Read Customer Stories
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white">
                <path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-[1440px] mx-auto px-0 md:px-8">
        <h2 className="text-fluid-h3 md:text-[32px] lg:text-[50px] text-left mb-8 px-6">Testimonials</h2>
        <Carousel items={testimonialCards} autoplay autoplayDelay={4000} />
        <div className="flex items-center justify-center">
          <button
            className="h-[40px] md:h-[46px] max-w-[399px] flex items-center justify-between px-4 text-white text-fluid-small md:text-[18px] mt-[32px]"
            style={{ background: 'linear-gradient(90deg, #194BED 0%, #29266E 100%)' }}
          >
            Speak to a Reference Customer
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white">
              <path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Our ValuesDrive Everything We Do */}
      <div className="bg-[#F8F6FF] my-[50px]  ">
        <div className="px-6 md:px-8 xl:flex items-end xl:gap-20 max-w-[1440px] mx-auto">
          <div>
            <h1 className="text-[20px] md:text-[32px] lg:text-[50px] font-medium py-[30px] md:py-[37px] tracking-heading leading-tight">Our Values <br />Drive Everything We Do</h1>
            <p className="text-fluid-body max-w-[662px]">Built on trust, innovation and excellence, we deliver measurable results that transform business and create last impact. </p>
          </div>
          <div>
            <button
              className="h-[40px] md:h-[46px] max-w-[399px] flex items-center justify-between px-4 text-white text-fluid-small md:text-[18px] mt-[32px]"
              style={{ background: 'linear-gradient(90deg, #194BED 0%, #29266E 100%)' }}
            >
              Speak to a Reference Customer
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white">
                <path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* CarouselCard */}
        <div className="solutions-carousel relative max-w-[1380px] mx-auto pl-6 md:pl-8 xl:pl-0 mt-[40px] md:mt-[38px] lg:mt-[70px]">
          <div ref={carouselRef} className="carousel-wrapper overflow-x-auto scrollbar-hide">
            <div
              className="carousel-track flex transition-transform duration-500 ease-in-out gap-8"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {duplicatedCards.map((item, i) => (
                <div
                  key={i}
                  className="solution-card box px-6 py-5 rounded-lg w-[250px] h-[156px] md:h-[200px] flex-shrink-0 flex flex-col justify-between shadow-xl"
                  style={{ scrollSnapAlign: "start", background: item.bg }}
                >
                  <div className="flex flex-col justify-start items-start gap-6">
                    <h3 className="font-medium leading-tight tracking-heading text-[18px] md:text-[20px] text-black">
                      {item.title}
                    </h3>
                    <p className="text-fluid-small mt-2 md:mt-3 tracking-para text-black">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Frequently Answered Questions */}
        <div>
          <div className="px-0 md:px-8 max-w-[1440px] mx-auto py-6">
            <div className="bg-white lg:flex items-start rounded-[20px] p-6 md:p-8">
              <h2 className="text-fluid-h3 md:text-[32px] lg:text-[50px] text-left mb-8 pt-[30px] md:py-[37px] tracking-heading leading-tight">Frequently Answered <br className="md:hidden" /> Questions</h2>
              <div className="mt-[56px] flex flex-col gap-8">
                {faqs.map((faq, index) => (
                  <div key={index} className="faq-item">
                    <h3 className="text-[18px] md:text-[20px] tracking-heading leading-tight lg:text-[30px] font-medium">
                      {faq.question}
                    </h3>
                    <p className="mt-[14px] md:text-fluid-body tracking-para leading-tight">{faq.answer}</p>
                    <p className="border-t-2 border-[#BDBDBD] mt-[14px]"></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        {/* Final Conversion Band */}
        <div className="max-w-[1440px] mx-auto pb-6 md:pb-8 px-6">
          <div className="flex flex-col items-center">
            <h2 className="text-fluid-h3 md:text-[32px] lg:text-[50px] text-left py-[20px] md:py-[37px] tracking-heading leading-tight">Final Conversion Band</h2>
            <p className="md:text-fluid-body max-w-[315px] md:max-w-[1440px] tracking-para text-center">Run compliant, AI‑powered operations with Accqrate.</p>
          </div>
          <div className="flex flex-col items-center md:flex md:flex-row md:justify-center md:gap-[10px] lg:gap-[30px]">
            <button
              className="h-[40px] md:h-[46px] max-w-[399px] flex items-center justify-between px-4 text-white text-fluid-small md:text-[18px] mt-[32px]"
              style={{ background: 'linear-gradient(90deg, #194BED 0%, #29266E 100%)' }}
            >
              Get a Free Proof of Concept
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white">
                <path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              className="h-[40px] md:h-[46px] max-w-[399px] flex items-center justify-between px-4 text-white text-fluid-small md:text-[18px] mt-[32px]"
              style={{ background: 'linear-gradient(90deg, #194BED 0%, #29266E 100%)' }}
            >
              Start 30‑Day Free Trial
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white">
                <path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              className="h-[40px] md:h-[46px] max-w-[399px] flex items-center justify-between px-4 text-white text-fluid-small md:text-[18px] mt-[32px]"
              style={{ background: 'linear-gradient(90deg, #194BED 0%, #29266E 100%)' }}
            >
              Talk to Sales
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white">
                <path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  )

}       
