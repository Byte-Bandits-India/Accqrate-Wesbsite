import React from 'react'
import { ArrowRight } from 'lucide-react'

const Section2 = () => {
    return (
        <>
            <section>
                <div className='max-w-[1280px] mx-auto py-8 md:py-10 lg:py-12'>
                    <div className='px-6 md:px-8 xl:px-0'>
                        <h3 className="text-fluid-h2 lg:text-[38px] font-normal text-[#000000] leading-tight">
                            Accqrate Offerings
                        </h3>
                        <p className='text-[#333333] text-fluid-body max-w-[428px] mt-4 md:mt-6 '>E-invoicing Solutions from Micro to Enterprise businesses</p>

                        <div className="py-6 md:py-8 lg:py-10">
                            <div className="flex flex-col lg:flex-row justify-start items-stretch gap-8 md:gap-10 lg:gap-[60px] md:pl-10">
                                {/* Cloud Based Solutions */}
                                <div className="rounded-[27px] border max-w-[400px] w-full p-6 shadow-md md:px-10 space-y-4 flex flex-col">
                                    <img
                                        src="/images/invoicing/cloud-acceleration.png"
                                        alt="cloud"
                                        className="w-[64px] h-auto"
                                    />
                                    <h3 className="text-fluid-body text-[#1C2041]">
                                        Cloud Based Solutions
                                    </h3>
                                    <p className="text-fluid-small text-[#5A6183] leading-[30px] max-w-[350px]">
                                        Subscribe, Use On-Demand: Fast, Secure, and Flexible Cloud Solutions
                                    </p>

                                    <ul className="text-[#5A6183] text-fluid-small leading-[32px] space-y-1 mt-2 list-none">
                                        {[
                                            "Subscribe and pay per use",
                                            "Onboarding in 5 min",
                                            "High Performance",
                                            "Encrypted and Secured",
                                            "Disaster recovery",
                                            "Download backup anytime",
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="mt-[10px] block w-[6px] h-[6px] rounded-full bg-[#91ABFF]" />
                                                <span className="flex-1">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* On Premises Solutions */}
                                <div className="rounded-[27px] border max-w-[400px] w-full p-6 shadow-md md:px-10 space-y-4 flex flex-col">
                                    <img
                                        src="/images/invoicing/server-path.png"
                                        alt="server"
                                        className="w-[64px] h-auto"
                                    />
                                    <h3 className="text-fluid-body text-[#1C2041]">
                                        On Premises Solutions
                                    </h3>
                                    <p className="text-fluid-small text-[#5A6183] leading-[30px] max-w-[350px]">
                                        Customized, Secure On-Premises Solutions with Quick Implementation Support
                                    </p>

                                    <ul className="text-[#5A6183] text-fluid-small leading-[32px] space-y-1 mt-2 list-none">
                                        {[
                                            "Customer infrastructure",
                                            "Get customized app",
                                            "High Performance",
                                            "4 hours of implementation",
                                            "Secured and high performance",
                                            "End to end support",
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="mt-[10px] block w-[6px] h-[6px] rounded-full bg-[#91ABFF]" />
                                                <span className="flex-1">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Easy Onboarding Process */}
                <div className="bg-[#29266E] text-white text-center py-8 md:py-10 lg:py-[80px] px-6 md:px-8 xl:px-0">
                    <h3 className="text-fluid-h2 lg:text-[38px] font-normal leading-tight">
                        Easy Onboarding Process
                    </h3>
                    <p className="text-fluid-body mt-4 md:mt-6">
                        Get Digital In Just 30 Minutes With Our Quick On Boarding Process
                    </p>

                    <div className="mt-8 flex justify-center">
                        <img
                            src="/images/invoicing/onboard.svg"
                            alt="onboard"
                            className="h-full w-full max-w-[1260px] max-h-[491px]"
                        />
                    </div>

                    <p className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mt-8 text-[14px] md:text-fluid-body text-white md:text-center">
                        <span>No credit card needed</span>
                        <img
                            src="/images/invoicing/Stargold.svg"
                            alt="separator"
                            className="w-[12px] h-[12px] md:w-[18px] md:h-[18px]"
                        />
                        <span>Unlimited time on Free plan</span>
                        <img
                            src="/images/invoicing/Stargold.svg"
                            alt="separator"
                            className="w-[12px] h-[12px] md:w-[18px] md:h-[18px]"
                        />
                        <span>100% Money-Back Guarantee</span>
                        <img
                            src="/images/invoicing/Stargold.svg"
                            alt="separator"
                            className="w-[12px] h-[12px] md:w-[18px] md:h-[18px]"
                        />
                        <span>Unsubscribe Anytime</span>
                    </p>

                    <button
                        className="inline-flex text-[14px] md:text-[18px] items-center justify-center gap-2 bg-[#F05A28] mt-6 md:mt-8 lg:mt-10 text-[#FFFFFF] font-medium px-6 py-4 rounded-full"
                    >
                        Book a Demo <ArrowRight className="w-4 h-4 -rotate-45" />
                    </button>


                </div>
            </section>
        </>
    )
}

export default Section2
