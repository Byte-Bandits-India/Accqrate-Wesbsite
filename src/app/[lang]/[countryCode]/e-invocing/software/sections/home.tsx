"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

const software = () => {
    const params = useParams();
    const lang = params?.lang as string;
    const countryCode = params?.countryCode as string;

    return (
        <section>
            <div className="bg-gradient-to-t from-[#EFF3FF] to-transparent pt-16 px-6 md:px-8 pb-12 md:pb-[80px] lg:pb-[100px]">
                <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* LEFT CONTENT */}
                    <div className="flex flex-col justify-center max-w-[560px] w-full">
                        <p className="text-[#F05A28] text-fluid-small max-w-[560px] leading-[30px] mb-6 md:mb-8 lg:mb-10">
                            ZATCA Approved E-invoicing Software in Saudi Arabia
                        </p>
                        <h1 className="text-fluid-h2 lg:text-[38px] font-medium text-[#000000] leading-tight">
                            Integrate With ZATCA In Less Than 1 Hour.
                        </h1>

                        <div className="h-[2px] w-[80px] bg-blue-600 my-6 md:my-8 lg:my-10"></div>

                        <p className="text-gray-700 text-fluid-body max-w-[560px] leading-[30px]">
                            Enable Your Business With <span className="text-[#194BED]">E-invoicing.</span>
                        </p>
                        <p className="text-gray-700 text-fluid-body max-w-[560px] leading-[30px]">
                            Saudi Based E-invoicing Solution For Saudi Companies.
                        </p>

                        <div className="flex justify-start py-6 md:py-8 lg:py-10">
                            <Link
                                href={`/${lang}/${countryCode}/contact-us`}
                                className="
      relative
      flex items-center justify-center
      w-[270px] md:w-[240px] lg:w-[300px]
      h-[46px] md:h-[52px]
      bg-[#F05A28]
      rounded-[50px]
      px-2
      text-white
      text-fluid-small md:text-[14px] lg:text-[16px]
      whitespace-nowrap
      transition-all duration-300 hover:bg-[#d94f22]
    "
                            >
                                <span className="mx-auto">Get a Free Proof of Concept</span>

                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    className="absolute right-4 text-white"
                                >
                                    <path
                                        d="M9 6l6 6-6 6"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </Link>
                        </div>

                        <div className="flex flex-col items-start justify-center gap-2 text-center md:flex-row md:gap-8">
                            <p className="text-sm md:text-fluid-body font-light">
                                No credit card needed
                            </p>
                            <img
                                src="/images/home/Star-or.svg"
                                alt="orange_star"
                                className="w-5 h-5 md:w-auto md:h-auto"
                            />
                            <p className="text-sm md:text-fluid-body font-light">
                                Unlimited time on Free plan
                            </p>
                        </div>



                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex-1 flex justify-center w-full">
                        <img
                            src="/images/invoicing/software.png"
                            alt="Accqrate newsletter illustration"
                            className="w-full max-w-[591px] rounded-2xl object-contain"
                        />
                    </div>
                </div>
            </div>
            <div className="marquee-wrapper relative overflow-hidden h-[74px]">
                {/* gradient background + shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C2041] to-[#194BED] shadow-[0_8px_30px_rgba(0,0,0,0.18)]" />

                {/* center container (constrains content to 1280px) */}
                <div className="relative z-10 flex items-center h-full">
                    <div className="w-full max-w-[1280px] mx-auto relative overflow-hidden">

                        {/* Track container (flex row contains two copies) */}
                        <div
                            className="marquee-track flex items-center"
                            style={{ ['--marquee-duration' as any]: '22s' }}
                            aria-hidden="false"
                        >
                            {/* FIRST COPY */}
                            <div className="marquee-copy flex-none">
                                <ul className="inline-flex items-center whitespace-nowrap gap-12 min-w-max px-6 text-fluid-small font-medium text-white pointer-events-none">
                                    <li>Free Proof of Concept</li>
                                    <li>PDF/A3 with XML invoices</li>
                                    <li>Data Hosted in Saudi Cloud</li>
                                    <li>Ready for all Waves of ZATCA Phase 2</li>
                                    <li>Flexible Solution: Cloud or On-Premises</li>
                                </ul>
                            </div>

                            {/* SECOND COPY */}
                            <div className="marquee-copy flex-none" aria-hidden="true">
                                <ul className="inline-flex items-center whitespace-nowrap gap-12 min-w-max px-6 text-fluid-small font-medium text-white pointer-events-none">
                                    <li>Free Proof of Concept</li>
                                    <li>PDF/A3 with XML invoices</li>
                                    <li>Data Hosted in Saudi Cloud</li>
                                    <li>Ready for all Waves of ZATCA Phase 2</li>
                                    <li>Flexible Solution: Cloud or On-Premises</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
    .marquee-track {
      animation: marquee var(--marquee-duration) linear infinite;
      will-change: transform;
      user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    }

    @keyframes marquee {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); } /* moves by exactly one copy */
    }

    /* pause on hover / active (works on desktop hover and mobile press) */
    .marquee-wrapper:hover .marquee-track,
    .marquee-wrapper:active .marquee-track {
      animation-play-state: paused;
    }

    /* accessibility: prefer-reduced-motion */
    @media (prefers-reduced-motion: reduce) {
      .marquee-track { animation: none !important; transform: none !important; }
    }

    /* small safety: ensure copies don't shrink or wrap */
    .marquee-copy { flex: 0 0 auto; display: flex; align-items: center; }
  `}</style>
            </div>

        </section>
    );
};

export default software;
