'use client'

export default function ZatcaProofSection() {
    const leftItems = [
        "Integration of your ERP or application with ZATCA Sandbox",
        "Experience the ease of integration and then decide",
        "Your in-house team or service provider will be guided and trained",
        "We assist you with on-boarding of devices and fatoora portal",
        "Ensure 100% ownership & responsibility for your invoice auditing",
    ]

    const rightItems = [
        "Integration of your ERP or application with ZATCA Sandbox",
        "No contracts or advances taken. We sign the NDA",
        "Accqrate Team is also specialised in ERPs like SAP, Oracle, Dynamics etc",
        "We work together to ensure your company is 100% compliant",
        "Guaranteed integration in 5 working days.",
    ]

    return (
        <section className="px-6 md:px-8 lg:px-0">
            <div className="max-w-[1183px] mx-auto text-center mb-12">
                <h2 className="text-fluid-h2 lg:text-[38px] font-medium text-[#1C2041] mb-4">
                    Free proof of concept for{" "}
                    <span className="text-[#448E32]">ZATCA Integration</span>
                </h2>
                <p className="text-[#5A6183] text-fluid-body">
                    You are free to decide based on the results of Free Proof of Concept.
                </p>
            </div>

            {/* GRID SECTION */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-10 md:gap-x-6 max-w-[1100px] lg:px-6 xl:px-0 mx-auto">
                {/* LEFT COLUMN */}
                <div className="grid grid-rows-[auto] gap-y-[2rem]">
                    {leftItems.map((item, i) => (
                        <div
                            key={`left-${i}`}
                            className="flex items-start justify-start text-left space-x-3 md:space-x-4"
                        >
                            <img
                                src="/images/invoicing/integration/darkblue.png"
                                alt="arrow"
                                className="mt-1 w-[40px] md:w-[26px] lg:w-[34px] xl:w-[66px]"
                            />
                            <p className="text-[#5A6183] text-[16px] md:text-[18px] max-w-[428px] leading-relaxed">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>

                {/* RIGHT COLUMN */}
                <div className="grid grid-rows-[auto] gap-y-[2rem] ">
                    {rightItems.map((item, i) => (
                        <div
                            key={`right-${i}`}
                            className="flex items-start justify-start text-left space-x-3 md:space-x-4"
                        >
                            <img
                                src="/images/invoicing/integration/lightblue.png"
                                alt="arrow"
                                className="mt-1 w-[40px] md:w-[26px] lg:w-[34px] xl:w-[66px]"
                            />
                            <p className="text-[#5A6183] text-[16px] md:text-[18px]  max-w-[428px] leading-relaxed">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}