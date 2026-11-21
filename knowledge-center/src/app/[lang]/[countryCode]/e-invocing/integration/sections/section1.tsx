'use client'

import T from "@/components/T"
import CounterFacts from '@/components/CounterFacts'

interface IntegrationItem {
    src: string
    alt: string
}

interface IntegratorProps {
    className?: string
    title?: boolean
}

export default function Integrator({ className, title }: IntegratorProps) {
    const integration = [
        {
            src: "/images/invoicing/integrators/infor.png",
            alt: 'infor'
        },
        {
            src: "/images/invoicing/integrators/MSDynamics.png",
            alt: 'MSDynamics'
        },
        {
            src: "/images/invoicing/integrators/any-erp.png",
            alt: 'Any ERP'
        },
        {
            src: "/images/invoicing/integrators/oracle.png",
            alt: 'Oracle'
        },
        {
            src: "/images/invoicing/integrators/sage.png",
            alt: 'sage'
        },
        {
            src: "/images/invoicing/integrators/sap.png",
            alt: 'SAP'
        },
        {
            src: "/images/invoicing/integrators/baan.png",
            alt: 'Baan'
        }
    ]

    return (
        <section className={className}>
            <div className="overflow-x-hidden my-8 md:my-10 lg:my-12">
                <div className="max-w-[1280px] mx-auto px-6 md:px-8 xl:px-0 relative">
                    {/* Decorative Pattern - Left */}
                    <div className="absolute left-32 xl:left-0 top-20 -translate-y-1/2 -translate-x-full">
                        <img src="/images/invoicing/integrators/Vector7.svg" alt="Vector7" />
                    </div>

                    {/* Decorative Pattern - Right */}
                    <div className="absolute right-0 top-20 -translate-y-1/2 translate-x-full hidden xl:block">
                        <img src="/images/invoicing/integrators/Vector7.svg" alt="Vector7" className="rotate-180" />
                    </div>

                    <h3
                        className="text-fluid-h2 lg:text-[38px] max-w-[871px] mx-auto text-center font-medium text-[#000000] leading-tight relative"
                        data-aos="fade-up"
                    >
                        Our solutions seamlessly integrate with any ERP/POS system you use.
                    </h3>

                    {/* MARQUEE WRAPPER */}
                    <div className="relative overflow-hidden py-4 my-6 md:my-8 lg:my-10">
                        <div className="flex animate-marquee whitespace-nowrap">
                            {integration.concat(integration).map((data, i) => (
                                <div
                                    key={i}
                                    className="inline-flex items-center justify-center mx-6 md:mx-8 lg:mx-10"
                                >
                                    <img
                                        src={data.src}
                                        alt={data.alt}
                                        className="h-[40px] md:h-[50px] lg:h-[70px] w-auto object-contain filter grayscale hover:grayscale-0 transition-transform duration-300 hover:scale-110"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="text-center text-[#000000] text-fluid-small font-normal max-w-[1000px] mx-auto ">Our integrators are equipped to collaborate with a wide range of solutions, including Global ERP systems, Local and Custom ERP, In-House ERP, both Online and Offline POS systems, Custom Applications, Accounting Software, and even Excel & SQL-Based Solutions, ensuring versatile and comprehensive compatibility</p>
                    </div>

                    <CounterFacts />

                    {/* CSS ANIMATION */}
                    <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 12s linear infinite;
          }
        `}</style>
                </div>
            </div>
        </section>
    )
}