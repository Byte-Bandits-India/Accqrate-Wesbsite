"use client";
import T from "@/components/T"
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Section {
    img: string;
    title: string;
    desc: string;
}

const features = [
    {
        img: "/images/invoicing/integration/cal.png",
        title: "Fully compliant",
        description: "An approved ZATCA solution provider, ensuring 100% audit-proof invoicing.",
        sub: ""
    },
    {
        img: "/images/invoicing/integration/set.png",
        title: "Fully compliant",
        description: "An approved ZATCA solution provider, ensuring 100% audit-proof invoicing.",
        sub: ""
    },
    {
        img: "/images/invoicing/integration/ring.png",
        title: "Fully compliant",
        description: "An approved ZATCA solution provider, ensuring 100% audit-proof invoicing.",
        sub: ""
    },
    {
        img: "/images/invoicing/integration/cloud.png",
        title: "Fully compliant",
        description: "An approved ZATCA solution provider, ensuring 100% audit-proof invoicing.",
        sub: ""
    }
];

const sections: Section[] = [
    {
        img: "/images/invoicing/integration/1.png",
        title: "API based integrations",
        desc: "Accqrate APIs give you the flexibility to connect your tax or simplified invoice with ZATCA seamlessly",
    },
    {
        img: "/images/invoicing/integration/2.png",
        title: "FTP/SFTP integrations",
        desc: "Accqrate supports file based invoicing integration with closed feedback loop to your source system",
    },
    {
        img: "/images/invoicing/integration/3.png",
        title: "Manual or excel uploads",
        desc: "If you are application is disintegrated, simply download and upload excel. Format mappings done",
    },
];
const section2 = () => {
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

    return (
        <section className="bg-gradient-to-b from-[#EFF3FF] to-transparent">
            <div className="max-w-[1280px] mx-auto">
                <div className="px-6 md:px-8 xl:px-0 relative inline-block my-8 md:my-10 lg:my-12">
                    <h2 className="text-fluid-h2 lg:text-[38px] font-medium text-[#000000] leading-tight text-left">
                        Flexible methods for <span className="text-[#448E32]">ZATCA</span> integration
                    </h2>
                    <p className="text-[#5A6183] text-fluid-body font-normal mt-4 ">Adaptive approaches for seamless ZATCA compliance and integration solutions.</p>

                    {/* Decorative SVG aligned right to the h3 */}
                    <img
                        src="/images/invoicing/green.svg"
                        alt="decoration"
                        className="absolute right-[10px] md:-right-[60px] -top-[5px] lg:top-10 xl:-right-[500px] -translate-y-1/2 w-[40px]"
                    />
                </div>

                <div className="grid grid-cols-1 px-6 md:px-8 xl:px-0 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[60px] justify-items-center mt-6 md:mt-8 lg:mt-10">
                    {sections.map((item, i) => (
                        <div
                            key={i}
                            className="
        flex flex-col justify-center md:items-start text-left
        bg-white rounded-[20px]
        shadow-[0_8px_30px_rgba(0,0,0,0.12)]
        hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
        transition-all duration-300
        w-full max-w-[430px]
        p-5 sm:p-6 md:p-8
        h-auto min-h-[200px]
      "
                        >
                            {/* Image */}
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-[60px] sm:w-[70px] h-auto mb-4 sm:mb-5"
                            />

                            {/* Title */}
                            <h3 className="text-fluid-body text-[#303030] font-medium mb-2 leading-tight">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-fluid-small text-[#5A6183] leading-[24px] sm:leading-[28px] md:leading-[30px]">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>


                <div className="px-6 md:px-8 xl:px-0 relative inline-block my-8 md:my-10 lg:my-12">
                    <h2 className="text-fluid-h2 lg:text-[38px] font-medium text-[#000000] leading-tight text-left">
                        Enhanced <span className="text-[#448E32]">Electronic Invoicing</span> Solutions
                    </h2>
                    <p className="text-[#5A6183] text-fluid-body font-normal mt-4 ">Streamline your invoicing with our automated, globally compatible solution featuring advanced security.</p>
                </div>
            </div>

            <div className="relative mt-6 md:mt-8">
                {/* 🔹 Top Section (Buttons) */}
                <div className="max-w-[1280px] mx-auto px-6 md:px-8 xl:px-0 flex justify-end mb-6 gap-3">
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

                {/* 🔹 Scrollable Row - Fixed ref placement */}
                <div
                    className="overflow-x-auto scrollbar-hide"
                    ref={scrollRef}
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    <div className="max-w-[1280px] mx-auto px-6 md:px-8 xl:px-0">
                        <div
                            className="flex gap-6 md:gap-8 pb-4 min-w-max"
                            style={{ scrollSnapType: 'x mandatory' }}
                        >
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="relative flex-shrink-0 bg-white rounded-[16px]
        shadow-[0_8px_30px_rgba(0,0,0,0.12)]
        hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
        transition-all duration-300 scroll-snap-align-start max-w-[290px] md:max-w-fit h-auto max-h-[242px] p-6 md:p-8 flex flex-col gap-2 "
                                >
                                    {/* Image Left + Number Right */}
                                    <div className="flex justify-start items-start">
                                        <img
                                            src={feature.img}
                                            alt={feature.title}
                                            className="w-fit max-h-[50px] h-auto object-contain"
                                        />
                                    </div>

                                    {/* Title */}
                                    <div className="mb-3 min-h-[60px] space-y-4">
                                        <div>
                                            <h2 className="text-fluid-body font-medium text-[#303030] leading-tight mb-1">
                                                <T>{feature.title}</T>
                                            </h2>
                                            {feature.sub && (
                                                <h2 className="text-fluid-body font-medium text-[#303030] leading-tight">
                                                    <T>{feature.sub}</T>
                                                </h2>
                                            )}
                                        </div>
                                        {/* Description */}
                                        <div className="">
                                            <p className="text-[#5A6183] max-w-[350px] text-fluid-small leading-relaxed">
                                                <T>{feature.description}</T>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default section2
