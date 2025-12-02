// components/CountryPage.tsx
"use client";
import InfoCard from "@/components/ui/Infocard";
import FadeUp from "@/components/ui/FadeUp";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import React, { useEffect, useState, useRef } from "react";
import { motion, PanInfo } from "motion/react";
import { useCountryContent } from "@/hooks/useCountryContent";
import T from "@/components/T"
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/Home-accordion";
import Link from "next/link";
import { usePathname } from "next/navigation";


// ---------------- CarouselCard ----------------
interface CarouselCardProps {
    quote: string;
    name: string;
    avatar: string;
    bg: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

interface CountryPageProps {
    countryCode: string;
    lang?: string;
}

interface ServiceCard {
    title: string;
    desc: string;
    bg: string;
}

const CarouselCardComponent: React.FC<CarouselCardProps> = ({
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
             w-[320px] sm:w-[320px] md:w-[423px] h-[180px] md:h-[200px]
             transition-all duration-500 ease-in-out overflow-hidden bg-[#E6F2FF] cursor-pointer"
            style={style}
            onClick={onClick}
        >
            {/* Background Image - Fixed left section */}
            <div className="relative h-full w-[100px] md:w-[100px] flex-shrink-0">
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
                        className="absolute top-1/2 left-[75px] md:left-[70px] transform -translate-y-1/2 w-12 h-12 md:h-[60px] md:w-[60px] rounded-full object-cover border-2 border-white z-20"
                    />
                </div>
            </div>

            <div className="flex flex-col justify-center items-start p-6 md:pl-8 lg:px-[32px] relative z-20">
                {/* Quote text */}
                <p className="text-[#000000] text-fluid-small md:text-[18px] leading-tight tracking-heading drop-shadow-md font-bold mb-0">
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

// Arrow
const Arrow45: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 transform -rotate-45"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);

// ---------------- CarouselDots ----------------
interface CarouselDotsProps {
    total: number;
    currentIndex: number;
    onDotClick: (index: number) => void;
}

const CarouselDots: React.FC<CarouselDotsProps> = ({ total, currentIndex, onDotClick }) => {
    return (
        <div className="flex justify-center mt-2 relative z-10 cursor-pointer mb-2">
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
            nextSlide(); // always move to next slide regardless of hover
        }, autoplayDelay);

        return () => clearInterval(interval);
    }, [autoplay, autoplayDelay, items.length, loop]);

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
                className="relative w-full max-w-[423px] h-[220px] sm:h-[300px] flex items-center justify-center cursor-grab"
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
                        <CarouselCardComponent
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


interface CountryPageProps {
    countryCode: string;
}

interface CountryPageProps {
    countryCode: string;
}

interface Feature {
    img: string;
    title: string;
    sub?: string;
    description: string;
}

interface FeatureCarouselProps {
    features: Feature[];
}

const useDynamicRouting = () => {
    const pathname = usePathname();

    const createHref = (path: string): string => {
        const segments = pathname.split('/').filter(segment => segment);
        const lang = segments[0] || 'en';
        const countryCode = segments[1] || 'sa';
        const cleanPath = path.startsWith('/') ? path : `/${path}`;
        return `/${lang}/${countryCode}${cleanPath}`;
    };

    return { createHref };
};

const CountryPage: React.FC<CountryPageProps> = ({ countryCode }) => {
    const { countryContent } = useCountryContent();
    const { createHref } = useDynamicRouting();
    const [enabled, setEnabled] = React.useState(false);
    const carouselRef = useRef<HTMLDivElement>(null);
    const bgImage = countryContent.backgroundImage;
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const scroll = (direction: "left" | "right") => {
        const container = scrollRef.current;
        if (container) {
            const scrollAmount = container.offsetWidth * 0.8; // scroll ~80% width per click
            container.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const cards = countryContent.cards;

    const features = [
        {
            img: "/images/home/1.png",
            title: "One platform.",
            description: "All modules run on a single, integrated data model.",
            sub: " Zero silos."
        },
        {
            img: "/images/home/2.png",
            title: "Enterprise‑grade.",
            description: "Security, scalability and performance proven across 30+ industries.",
            sub: ""
        },
        {
            img: "/images/home/3.png",
            title: "AI, everywhere.",
            description: "Accelera, our AI copilot ,accelerates routine work, insights and decisions.",
            sub: ""
        },
        {
            img: "/images/home/4.png",
            title: "Fast time‑to‑value.",
            description: "Lightning‑fast UI, one‑click installs, and low‑disruption migrations from SAP/Microsoft/Oracle or disjointed tools.",
            sub: ""
        },
        {
            img: "/images/home/5.png",
            title: "Built‑in Global compliance:",
            description: "Connect ERP/POS to tax authorities; from ZATCA Phase II to PEPPOL standards.",
            sub: ""
        },
        {
            img: "/images/home/6.png",
            title: "Deploy your way.",
            description: "Cloud (managed, subscription) or On‑Prem (full control over infra & data).",
            sub: ""
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

    const CarouselCardItems: ServiceCard[] = [
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

    const duplicatedCards = [...CarouselCardItems, ...CarouselCardItems];

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

        return () => {
            carousel.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <main className="overflow-x-hidden font-inter">
            <div className="bg-[#F8F6FF]">
                <div
                    className="h-fit max-h-[1440px] bg-cover bg-no-repeat bg-center lg:bg-local"
                    style={{
                        backgroundImage: `url('${bgImage}')`,
                    }}
                >
                    <div className="max-w-[1177px] lg:h-[100dvh] mx-auto px-6 overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_400px] xl:grid-cols-[minmax(0,1fr)_520px] gap-6 lg:gap-8 pt-[3rem] lg:pt-[3rem] 2xl:pt-[4rem] h-full overflow-y-auto">
                            {/* LEFT COLUMN */}
                            <div className="flex flex-col justify-start">
                                <h1 className="text-[1.5rem] md:text-[1.75rem] lg:text-[2.375rem] text-[#FFFFFF] max-w-full lg:max-w-[639px] font-normal leading-tight">
                                    <T>{countryContent.heroTitle}</T>
                                </h1>
                                <p className="font-medium text-fluid-body lg:text-[1.375rem] text-[#FFFFFF] mt-4 md:mt-5 lg:mt-[1.5rem] xl:mt-[2rem] 2xl:mt-[2rem] tracking-para">
                                    <T>{countryContent.heroSubtitle}</T>
                                </p>

                                <p className="border-t-2 border-[#FFFFFF] w-[3.125rem] mt-4 md:mt-5 lg:mt-[1.5rem] xl:mt-[2rem] 2xl:mt-[2rem]"></p>

                                <p className="text-[#FFFFFF] max-w-[586px] text-fluid-small mt-4 md:mt-5 lg:mt-[1.5rem] xl:mt-[2rem] 2xl:mt-[2rem] tracking-para leading-[1.875rem] text-left font-normal">
                                    <T>{countryContent.heroDescription}</T>
                                </p>

                                <Link
                                    href={createHref("/contact-us")}
                                    className="inline-flex items-center justify-center gap-2 text-white h-[2.625rem] lg:h-[3.563rem] w-[11.875rem] my-4 md:my-6 lg:my-[2.25rem] xl:mt-[2rem] 2xl:my-[3rem] font-normal lg:w-[13.813rem] rounded-[5rem] text-fluid-body bg-gradient-to-r from-[#B4441E] via-[#F05A28] to-[#F48B69]"
                                >
                                    <T>Meet an Expert</T>
                                    <Arrow45 />
                                </Link>

                                <h2 className="mt-4 md:mt-5 text-fluid-body font-medium text-[#ffffff] hidden tracking-heading lg:flex lg:items-center lg:flex-wrap gap-4">
                                    {countryContent.heroTagline.split(".").filter(Boolean).map((part, index, arr) => (
                                        <React.Fragment key={index}>
                                            <T>{part.trim()}</T>
                                            {index < arr.length - 1 && (
                                                <img
                                                    src="/images/home/Star.png"
                                                    alt="star"
                                                    className="inline-block w-4 h-4 mx-1"
                                                />
                                            )}
                                        </React.Fragment>
                                    ))}
                                </h2>
                                <div className="p-4 md:p-5 text-left max-w-full md:max-w-[700px] mx-auto md:mx-0">
                                    {/* Additional content can go here */}
                                </div>
                            </div>

                            {/* RIGHT COLUMN */}
                            <div className="hidden lg:flex flex-col justify-start mb-5 lg:mt-0 gap-3">
                                <h1 className="text-fluid-body font-medium text-[#ffffff]"><T>Products to power every team</T></h1>
                                {cards.map((card) => (
                                    <InfoCard key={card.title} {...card} />
                                ))}
                                <div className="h-[2.5rem] max-w-full md:max-w-[221px] bg-[#D6E0FF] rounded-[0.313rem] mt-2 flex items-center justify-start px-3 md:px-4 cursor-pointer">
                                    <h3 className="text-[0.875rem] tracking-heading leading-tight text-nowrap"><T>Explore All Products ... </T></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile & Tablet Featured Solutions */}
                <div className="lg:hidden px-6 md:px-8">
                    <div className="max-w-[1177px] mx-auto py-6">
                        <h1 className="text-fluid-body font-medium mb-3"><T>Products to power every team</T></h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {cards.map((card) => (
                                <InfoCard key={card.title} {...card} />
                            ))}

                            {/* "Explore All Products" card */}
                            <div
                                className="cursor-pointer flex items-center justify-between w-full h-[3.125rem] mx-auto overflow-hidden shadow-[0_0_2px_rgba(0,0,0,0.25)] transition-all hover:shadow-md p-3 sm:p-4 bg-[#D6E0FF]"
                            >
                                <h3 className="text-[0.875rem] font-medium"><T>Explore All Products...</T></h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* /Why Accqrate? */}
                <div>
                    <div className=" px-6 md:px-8 xl:px-8 mt-[48px]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-6 max-w-[1177px] mx-auto w-full">
                            {/* Left Column */}
                            <div>
                                <h2 className="font-medium text-fluid-small tracking-heading uppercase">
                                    <T>Why Accqrate?</T>
                                </h2>
                                <img
                                    src="/images/home/blue_star.png"
                                    alt="groupstar"
                                    className="w-auto h-[28px] md:h-[28px] lg:hidden"
                                />

                                <h3 className="text-[24px] md:text-[28px] lg:text-[36px] max-w-[555px] font-medium mt-6 md:mt-8 lg:mt-[40px] leading-tight">
                                    <T>We <span className="text-[#194BED]">specialize</span> in providing <span className="text-[#194BED]">reliable</span> and efficient Solutions</T>
                                </h3>
                                <div className="hidden lg:flex justify-center max-w-[555px] mt-6 md:mt-8 lg:mt-[43px]">
                                    <img src="/images/home/blue_star.png" className="h-[64px]" alt="groupstar" />
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="flex flex-col justify-start lg:justify-center">
                                <p className="text-fluid-small font-normal mt-[20px] md:mt-[38px] leading-[24px] lg:mt-0">
                                    <T>Unlock a world of efficiency with our extensive suite of business modules. Simplify and enhance any task with seamless, one-click installations. Experience unparalleled speed, integration, and smart AI technology, enabling operations faster than a blink. Empower your team with the right tools for every job, all within a lightning-fast UI</T>
                                </p>
                                <button
                                    className="h-[40px] w-[144px] md:w-[199px] text-white text-fluid-small tracking-para leading-tight md:text-[18px] mt-[20px] md:mt-[30px]"
                                    style={{ background: 'linear-gradient(90deg, #194BED 0%, #29266E 100%)' }}
                                >
                                    <T>See It in Action</T>
                                </button>
                            </div>
                        </div>

                        <div className="relative mt-[32px] md:mt-[60px] lg:mt-[80px]">
                            {/* 🔹 Top Section (Buttons) */}
                            <div className="max-w-[1177px] mx-auto px-6 md:px-8 xl:px-0 flex justify-end mb-6 gap-3">
                                <button
                                    onClick={() => scroll("left")}
                                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow hover:bg-gray-100 transition"
                                >
                                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                                </button>
                                <button
                                    onClick={() => scroll("right")}
                                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow hover:bg-gray-100 transition"
                                >
                                    <ChevronRight className="w-5 h-5 text-gray-700" />
                                </button>
                            </div>

                            {/* 🔹 Scrollable Row */}
                            <div className="overflow-x-auto scrollbar-hide" ref={scrollRef}>
                                <div className="max-w-[1177px] mx-auto px-6 md:px-8 xl:px-0">
                                    <div
                                        className="flex gap-4 sm:gap-6 md:gap-8 pr-[calc(50vw-640px)]"
                                        style={{ scrollSnapType: "x mandatory" }}
                                    >
                                        {features.map((feature, index) => (
                                            <div
                                                key={index}
                                                className="relative flex-shrink-0 bg-white rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] scroll-snap-align-start 
              w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] 
              min-h-[360px] sm:min-h-[400px] lg:h-[456px] 
              p-8 flex flex-col justify-between overflow-hidden 
              transition-all hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                                            >
                                                {/* Image + Number */}
                                                <div className="relative flex justify-between items-end">
                                                    <img
                                                        src={feature.img}
                                                        alt={feature.title}
                                                        className="w-[140px] sm:w-[160px] md:w-[180px] h-auto object-contain z-10"
                                                    />
                                                    <span
                                                        className="font-anonymous text-[60px] sm:text-[70px] md:text-[90px] lg:text-[100px] pb-2 font-bold text-[#E6E6E6] leading-none select-none"
                                                    >
                                                        {String(index + 1).padStart(2, "0")}
                                                    </span>
                                                </div>

                                                {/* Title */}
                                                <div className="mt-4 z-10">
                                                    <h2 className="text-fluid-h3 font-medium text-[#000000] leading-tight mb-1">
                                                        <T>{feature.title}</T>
                                                    </h2>
                                                    {feature.sub && (
                                                        <h2 className="text-fluid-h3 font-medium text-[#000000] leading-tight">
                                                            <T>{feature.sub}</T>
                                                        </h2>
                                                    )}
                                                </div>

                                                {/* Description */}
                                                <p className="mt-3 sm:mt-4 text-[#000000] text-fluid-body leading-snug tracking-para line-clamp-5">
                                                    <T>{feature.description}</T>
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Trusted text */}
                <div className="mt-[80px] rounded-[30px] bg-[linear-gradient(180deg,#FFFFFF_0%,#E9E8FF_50%,#4F52FF_100%)] py-6 md:py-8  max-w-[1177px] mx-auto">

                    <FadeUp className="mb-8 md:mb-[40px]">
                        <h3 className="text-[24px] md:text-[28px] lg:text-[38px] tracking-heading leading-tight font-medium text-[#333333] text-center mx-auto">
                            <T>Trusted by  </T><br className="md:hidden" /><span className="text-[#194BED]"><T>5,000+ Global companies</T></span>
                        </h3>
                    </FadeUp>

                    {/* Logo Marquee */}
                    <div className="relative">
                        <div className="max-w-5xl overflow-hidden py-6 mx-auto">
                            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-14 md:w-20" />
                            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-14 md:w-20" />

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
                            <span className="text-[#333333] text-fluid-small lg:text-[16px] tracking-para ml-2">Based on reviews</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-center md:justify-start mt-[73px] px-6 md:px-8">
                        <Switch checked={enabled} onCheckedChange={setEnabled} />
                    </div>

                    <div className="flex items-center justify-end md:pr-20">
                        <img src="/images/home/orange_star.png" className="h-[64px]" alt="orstar" />
                    </div>

                    <div className="max-w-[1440px] mx-auto px-6 md:px-8 mt-[32px] grid xl:grid-cols-2 gap-6">
                        {/* Left Side: Full-Suite ERP */}
                        <FadeUp className="bg-[#FFFFFF] font-inter rounded-xl md:rounded-2xl p-6 md:p-8 flex flex-col xl:h-full">
                            <div className="flex flex-col flex-1">
                                <div>
                                    <div className="flex items-center space-x-4">
                                        <img src="/images/landingpage/one-erp.png" alt="one" className="h-[40px] md:h-[50px]" />
                                        <span className="text-[#000000] tracking-heading leading-tight text-fluid-body whitespace-nowrap">
                                            Accqrate ONE <br />
                                            The Full-Suite ERP
                                        </span>
                                    </div>
                                    <p className="pb-6 md:pb-[32px] tracking-para leading-[24px] text-[#333333] text-fluid-body mt-[30px]">
                                        Replace fragmented tools and legacy monoliths with a modern ERP suite designed for speed and adoption.
                                    </p>
                                </div>

                                <div className="w-full mt-auto">
                                    <div className="bg-[#D9D9D9] h-[436px] md:h-[386px] rounded-[20px]"></div>
                                </div>
                            </div>
                        </FadeUp>

                        {/* Right Side: Modules + What you'll achieve */}
                        <div className="flex flex-col gap-6 xl:h-full">
                            <FadeUp className="bg-[#FFFFFF] font-inter rounded-xl md:rounded-2xl p-6 flex-1">
                                <h2 className="text-fluid-body font-medium tracking-heading">Modules included:</h2>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 mt-8 text-fluid-small lg:text-[16px] text-nowrap tracking-para leading-[26px] list-disc pl-5">
                                    <li>POS</li>
                                    <li>Sales</li>
                                    <li>Purchase</li>
                                    <li>Accounting</li>
                                    <li>Project Management</li>
                                    <li>CRM</li>
                                    <li>E-Invoicing</li>
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

                            <FadeUp className="bg-[#FFFFFF] font-inter rounded-xl md:rounded-2xl p-6 flex-1">
                                <h2 className="text-fluid-body font-medium tracking-heading">What you'll achieve:</h2>
                                <ul className="text-left list-disc pl-5 space-y-1 mt-[15px] text-fluid-small lg:text-[16px] leading-tight tracking-para">
                                    <li>Unified operations: Finance to factory on a single source of truth.</li>
                                    <li>Quicker close, cleaner audits: Built-in controls and automated reconciliations.</li>
                                    <li>Smarter planning: AI-assisted forecasting and scenario modeling.</li>
                                    <li>Happier teams: Intuitive UI reduces training time and boosts productivity.</li>
                                </ul>

                                <h2 className="mt-8 text-fluid-body font-medium tracking-heading">Migration advantages:</h2>
                                <ul className="text-left list-disc pl-5 space-y-1 mt-[15px] text-fluid-small lg:text-[16px] leading-tight tracking-para">
                                    <li>Rapid implementation with minimal downtime.</li>
                                    <li>Proven playbooks for moving from ERPs & Applications.</li>
                                    <li>Coexistence options while you phase out legacy.</li>
                                </ul>
                            </FadeUp>
                        </div>
                    </div>


                    <div className="px-6 md:px-8 mt-[32px]">
                        <button
                            className="h-[46px] md:h-[55px] max-w-[481px] w-full text-center flex items-center gap-4 justify-center px-4 rounded-[100px] text-white text-[14px] md:text-[18px] mt-[32px] bg-gradient-to-r from-[#B4441E] via-[#F05A28] to-[#F48B69]"                        >
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
                    </div>
                </div>

                {/* Your AI Copilot */}
                <div className="hidden md:block">

                    {/* HERO SECTION */}
                    <div className="relative max-h-[420px] mt-20">
                        {/* Background Image */}
                        <img
                            src="/images/home/wave_vector.png"
                            alt="Wave Vector"
                            className="w-full h-full object-cover object-center rounded-xl"
                        />


                        {/* Content */}
                        <div className="absolute inset-0 flex items-center">
                            <div className="max-w-[1177px] mx-auto px-6 md:px-8 xl:px-0 grid lg:grid-cols-2 gap-6">

                                {/* Left Part */}
                                <FadeUp className="font-inter rounded-2xl flex flex-col justify-between p-8 bg-transparent flex-shrink-0">
                                    <div>
                                        <h2 className="text-black text-[24px] md:text-[28px] lg:text-[38px] font-medium leading-tight">
                                            Accelera <br /> Your AI Copilot
                                        </h2>

                                        <p className="text-[#333333] text-[14px] md:text-[16px] mt-[40px] mb-6">
                                            Work faster and decide smarter with AI embedded across the suite.
                                        </p>

                                        <ul className="list-disc pl-5 space-y-4 text-[14px] md:text-[16px]">
                                            <li><b>Natural-language actions:</b> Ask, "Show last month's receivables by region"</li>
                                            <li><b>Automations:</b> Generate e-invoices, trigger approvals</li>
                                            <li><b>Insight to action:</b> Spot anomalies, forecast demand</li>
                                            <li><b>Assistive UX:</b> Contextual help & guided workflows</li>
                                        </ul>
                                    </div>

                                    <button
                                        className="h-[40px] max-w-[399px] mt-10 flex items-center justify-between px-4 text-white text-[16px]"
                                        style={{ background: 'linear-gradient(90deg, #194BED 0%, #29266E 100%)' }}
                                    >
                                        See Accelera in a 5-Minute Demo
                                        <svg width="20" height="20" fill="none" stroke="currentColor">
                                            <path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </FadeUp>

                                {/* Right Part */}
                                <FadeUp className="flex items-center justify-center p-8">
                                    <div className="bg-[#D9D9D9] w-full h-[380px] md:h-[420px] flex-shrink-0"></div>
                                </FadeUp>

                            </div>
                        </div>
                    </div>


                    {/* COMPLIANCE SECTION */}
                    <div className="max-w-[1177px] mx-auto px-6 md:px-8 xl:px-0 mt-[72px] grid lg:grid-cols-2 gap-6 items-stretch pb-[36px] md:pb-[200px] lg:pb-[300px]">
                        {/* Left Side: Image (Desktop) */}
                        <div className="hidden lg:flex flex-col items-start justify-between p-6 md:p-8">
                            <h2 className="text-black tracking-para text-[24px] md:text-[28px] lg:text-[38px] font-medium leading-tight whitespace-nowrap mb-6">
                                Compliance & Connectivity
                            </h2>
                            <div className="bg-[#D9D9D9] w-full h-full"></div>
                        </div>

                        {/* Right Side: Text + List + Button */}
                        <FadeUp className="font-inter rounded-xl md:rounded-2xl flex flex-col justify-between p-6 md:p-8">
                            {/* Heading (mobile only) */}
                            <h2 className="text-black lg:hidden tracking-para text-[20px] font-medium md:text-[24px] lg:text-[30px] xl:text-[48px] leading-tight whitespace-nowrap mb-6">
                                Compliance & Connectivity
                            </h2>

                            <div>
                                <ul className="list-disc space-y-4 mt-[15px] text-fluid-small text-left pl-5 leading-[24px] tracking-para">
                                    <li>
                                        ZATCA Phase II: Generate compliant e-invoices at scale; integrate with KSA tax authority.
                                    </li>
                                    <li>PEPPOL: Cross-border e-invoicing via standardized network.</li>
                                    <li>
                                        Open integrations: Connect any ERP, POS or homegrown system through APIs and adapters.
                                    </li>
                                </ul>
                            </div>

                            <button
                                className="h-[40px] max-w-[399px] flex items-center justify-between px-4 text-white text-fluid-small md:text-[18px] mt-[32px]"
                                style={{ background: "linear-gradient(90deg, #194BED 0%, #29266E 100%)" }}
                            >
                                Talk to a Compliance Expert
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

                        {/* Image (Mobile) */}
                        <div className="lg:hidden flex items-center justify-center">
                            <div className="bg-[#D9D9D9] h-[436px] md:h-[386px] w-full"></div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Outcomes and The Impact */}
            <div className="md:mx-8" >
                <div className="relative md:-top-[150px] lg:-top-[200px] max-w-[1151px] pb-8 mx-auto md:border md:rounded-[40px] bg-white min-h-[400px]">
                    <div>
                        <h2 className="text-[24px] md:text-[28px] lg:text-[38px] font-medium text-center mt-8 tracking-heading leading-tight">Outcomes and The Impact</h2>
                    </div>
                    <div className="mt-[73px] grid grid-cols-1 md:grid-cols-3 gap-10">
                        {icon.map((icon, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center max-w-[174px] mx-auto md:max-w-[207px]"
                            >
                                <img className="mb-4" src={icon.img} alt={icon.title} />
                                <h2 className="text-fluid-h2 xl:text-[23px] text-[#194BED] font-medium mb-2 tracking-heading leading-tight">{icon.title}</h2>
                                <p className="text-fluid-body tracking-para leading-tight">{icon.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="border-t-2 text-[#D9D9D9] mt-[40px] max-w-[354px] mx-auto md:max-w-[676px] lg:max-w-[1051px] ">
                        <h2 className="text-[#000000] text-fluid-body text-center max-w-[273px] md:max-w-[677px] mx-auto mt-[28px] leading-tight tracking-heading">
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
            </div >

            {/* Testimonials Section */}
            <div className="max-w-[1177px] mx-auto px-0 md:px-8 mt-8 md:mt-0" >
                <h2 className="text-[24px] md:text-[28px] lg:text-[38px] text-left mb-8 px-6">Testimonials</h2>
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
            </div >

            {/* Our ValuesDrive Everything We Do */}
            <div className="bg-[#F8F6FF] py-[50px] mt-8 md:mt-10 " >
                <div className="px-6 md:px-8 xl:px-0 max-w-[1177px] mx-auto xl:flex items-end justify-between gap-20">
                    {/* Left Text */}
                    <div className="flex-1">
                        <h1 className="text-[24px] md:text-[28px] lg:text-[38px] font-medium py-[30px] md:py-[37px] tracking-heading leading-tight">
                            Our Values <br />Drive Everything We Do
                        </h1>
                        <p className="text-fluid-body lg:text-[16px] max-w-[662px] tracking-para leading-tight">
                            Built on trust, innovation and excellence, we deliver measurable results that transform business and create lasting impact.
                        </p>
                    </div>

                    {/* Right Button */}
                    <div className="mt-[32px] xl:mt-0 flex justify-start xl:justify-end">
                        <button
                            className="h-[40px] md:h-[46px] w-full xl:w-auto max-w-[399px] flex items-center justify-between px-4 text-white text-fluid-small md:text-[18px]"
                            style={{ background: 'linear-gradient(90deg, #194BED 0%, #29266E 100%)' }}
                        >
                            Book a Personalized Walkthrough
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                className="text-white"
                            >
                                <path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>


                {/* CarouselCard */}
                <div className="solutions-carousel relative max-w-[1177px] mx-auto pl-6 md:pl-8 xl:pl-0 mt-[40px] md:mt-[38px] lg:mt-[70px]">
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
                                        <h3 className="font-medium leading-tight tracking-heading text-fluid-body md:text-[20px] text-black">
                                            {item.title}
                                        </h3>
                                        <p className="text-fluid-small lg:text-[16px] mt-2 md:mt-3 tracking-para leading-tight text-black">
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
                    <div className="px-0 md:px-8 max-w-[1177px] mx-auto py-6 xl:px-0 mt-8 md:mt-12 lg:mt-[100px]">
                        <div className="bg-white rounded-[20px] p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 relative">

                            {/* Left Section */}
                            <div className="flex flex-col w-full lg:max-w-[505px]">
                                {/* Heading */}
                                <h2 className="text-[24px] md:text-[28px] lg:text-[38px] text-left mb-6 tracking-heading leading-tight">
                                    Frequently Answered <br className="md:hidden" /> Questions
                                </h2>
                            </div>

                            {/* Accordion Section */}
                            <div className="mt-[20px] lg:mt-0 flex flex-col gap-8 w-full max-w-[800px]">
                                <FadeUp>
                                    <Accordion type="single" collapsible className="w-full text-left">
                                        {faqs.map((item, index) => (
                                            <AccordionItem
                                                key={index}
                                                value={`faq-${index}`}
                                                className="border-b border-[#BDBDBD] py-4"
                                            >
                                                <AccordionTrigger className="text-[16px] md:text-[18px] font-medium text-gray-800 hover:no-underline tracking-heading leading-tight text-left">
                                                    {item.question}
                                                </AccordionTrigger>

                                                <AccordionContent className="text-[14px] md:text-[16px] font-light text-gray-600 tracking-para leading-relaxed mt-2">
                                                    {item.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </FadeUp>
                            </div>

                            {/* ✅ Image fixed at the bottom inside the white card */}
                            <div className="absolute bottom-0 hidden lg:-left-[200px] xl:-left-[400px] w-full lg:flex justify-center">
                                <img
                                    src="/images/home/clip.png"
                                    alt="faq"
                                    className="h-full lg:max-h-[181px] object-contain"
                                />
                            </div>

                        </div>
                    </div>





                </div>

                {/* Final Conversion Band */}
                <div className="max-w-[1440px] mx-auto pb-6 md:pb-8 px-6 font-inter">
                    <div className="flex flex-col items-center">
                        <h2 className="text-[24px] md:text-[28px] lg:text-[38px] text-left py-[20px] md:py-[37px] tracking-heading leading-tight">Final Conversion Band</h2>
                        <p className="text-fluid-body max-w-[315px] md:max-w-[1440px] tracking-para text-center leading-tight">Run compliant, AI‑powered operations with Accqrate.</p>
                    </div>
                    <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-4 lg:gap-8 py-6 md:py-8 lg:py-10">
                        {[
                            "Get a Free Proof of Concept",
                            "Start 30-Day Free Trial",
                            "Talk to Sales",
                        ].map((text, i) => (
                            <button
                                key={i}
                                className="
        relative
        lg:w-[303px] w-[270px]
        h-[46px]
        flex items-center justify-center
        rounded-[5px]
        px-6
        text-white
        text-fluid-small md:text-[14px] lg:text-[16px] whitespace-nowrap
        mt-[32px]
      "
                                style={{
                                    background: "linear-gradient(90deg, #194BED 0%, #29266E 100%)",
                                }}
                            >
                                {/* Centered text */}
                                <span className="mx-auto">{text}</span>

                                {/* Arrow aligned to right */}
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    className="absolute right-5 text-white"
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

                </div>
            </div >
        </main >
    );
};

export default CountryPage;
