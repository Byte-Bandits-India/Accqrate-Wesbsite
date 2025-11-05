"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

const software = () => {
    const params = useParams();
    const lang = params?.lang as string;
    const countryCode = params?.countryCode as string;

    return (
        <section>
            <div className="bg-gradient-to-t from-[#EFF3FF] to-transparent pt-16 px-6 md:px-8 xl:px-0 pb-12 md:pb-[80px] lg:pb-[100px]">
                <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
                    {/* LEFT CONTENT */}
                    <div className="flex flex-col justify-center max-w-[645px] w-full">
                        <p className="text-[#F05A28] text-fluid-small max-w-[560px] leading-[30px] mb-6 md:mb-8 lg:mb-10">
                            E-invoicing Integration
                        </p>
                        <h1 className="text-fluid-h2 lg:text-[38px] font-medium text-[#000000]">
                            Integrate Your Existing <span className="text-[#448E32]">ERPs, POS</span> & Applications With ZATCA.
                        </h1>

                        <div className="h-[2px] w-[80px] lg:w-[156px] bg-[#448E32] my-6 md:my-8 lg:my-10"></div>

                        <div className="flex items-center justify-center gap-6 h-full md:max-h-[140px] w-fit p-4 md:p-6 rounded-[22px] bg-[#FFFFFF]">
                            <img src="/images/invoicing/integration/ZATCA.png" className="h-[70px] w-fit md:h-auto" alt="ZATCA" />
                            <div className="max-w-[359px] space-y-2">
                                <h3 className="text-[#1C2041] text-fluid-body ">A <span className="text-[#448E32]">ZATCA</span> Approved Solution Provider</h3>
                                <p className="text-[#5A6183] text-fluid-small ">100% ZATCA Compliance: Saudi Based Solution For Saudi Businesses</p>
                            </div>
                        </div>

                        <div className="flex justify-start py-6 md:py-8 lg:py-10">
                            <Link
                                href={`/${lang}/${countryCode}/contact-us`}
                                className="
      relative
      flex items-center justify-center
      w-[200px] md:w-[240px] lg:w-[300px]
      h-[46px] md:h-[52px]
      bg-[#F05A28]
      rounded-[50px]
      px-2
      text-white
      text-fluid-small lg:text-[16px]
      whitespace-nowrap
      transition-all duration-300 hover:bg-[#d94f22]
    "
                            >
                                <span className="mx-auto">Start Now for free</span>

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
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex-col">
                        <div className="flex-1 flex justify-center w-full">
                            <img
                                src="/images/invoicing/integration/hero.png"
                                alt="integrated software"
                                className="w-full max-w-[591px] rounded-2xl object-contain"
                            />
                        </div>
                        <div>
                            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 text-center lg:hidden mt-6 md:mt-8">
                                <p className="text-[14px] md:text-fluid-body font-light whitespace-nowrap">
                                    No credit card needed
                                </p>

                                <img
                                    src="/images/home/Star-or.svg"
                                    alt="orange_star"
                                    className="w-4 h-4 md:w-5 md:h-5"
                                />

                                <p className="text-[14px] md:text-fluid-body font-light whitespace-nowrap">
                                    Unlimited time on Free plan
                                </p>
                            </div>

                            <div className="lg:flex flex-col items-center justify-center gap-2 md:flex-row md:gap-8 hidden mt-12">
                                <div className="flex items-center gap-2 md:gap-8">
                                    <p className="text-fluid-body font-light whitespace-nowrap">
                                        No credit card needed
                                    </p>
                                    <img
                                        src="/images/home/Star-or.svg"
                                        alt="orange_star"
                                        className="w-5 h-5"
                                    />
                                    <p className="text-fluid-body font-light whitespace-nowrap">
                                        Unlimited time on Free plan
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default software;
