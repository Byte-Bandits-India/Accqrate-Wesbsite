import React from 'react'

interface Section {
    img: string;
    title: string;
    desc: string;
}

const sections: Section[] = [
    {
        img: "/images/invoicing/bag-check-svgrepo-com 1.png",
        title: "Purchases & Claims",
        desc: "Manage bills, purchase orders and expenses from one place",
    },
    {
        img: "/images/invoicing/money-stack-svgrepo-com 1.png",
        title: "Payroll & Employees",
        desc: "Run payroll and invite employees to submit their expense claims.",
    },
    {
        img: "/images/invoicing/tax-receipt.png",
        title: "VAT Return",
        desc: "No need for an accountant – let Accqrate automatically generate your VAT return for you",
    },
    {
        img: "/images/invoicing/box_svgrepo.com.png",
        title: "Inventory tracking",
        desc: "Easily keep track of stock levels and let Accqrate automatically book your Cost of Goods",
    },
    {
        img: "/images/invoicing/profile-2user_svgrepo.com.png",
        title: "Customers & Suppliers",
        desc: "Always know who you owe money to and who owes you money",
    },
    {
        img: "/images/invoicing/chart-2_svgrepo.com.png",
        title: "Reports & Insights",
        desc: "Generate single or consolidated reports for a holistic view of your finances.",
    },
];

const Section3 = () => {
    return (
        <>
            <section className="py-8 md:py-10 lg:py-[80px] max-w-[1280px] mx-auto relative">
                <div className="px-6 md:px-8 xl:px-0 text-center relative">
                    <h1 className="text-fluid-h2 lg:text-[38px] font-medium text-[#000000] leading-tight">
                        A <span className="text-[#194BED]">complete software</span> to run your business better
                    </h1>

                    <div className="relative mt-6 inline-block">
                        <h3 className="text-fluid-body text-[#5A6183] mx-auto max-w-[850px]">
                            Whether you've just started or are already established, you'll find all the features you need at each stage of your business.
                        </h3>

                        {/* Decorative SVG aligned right to the h3 */}
                        <img
                            src="/images/invoicing/green.svg"
                            alt="decoration"
                            className="absolute -right-[10px] lg:-right-[80px] -top-[40px] lg:-top-[30px] -translate-y-1/2 w-[40px]"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[60px] justify-items-center mt-8 md:mt-10 lg:mt-12">
                        {sections.map((item, i) => (
                            <div
                                key={i}
                                className="
        flex flex-col justify-center md:items-start text-left
        bg-white rounded-[20px] border-[#5A6183] border-[0.1px]
        shadow-[0_4px_20px_rgba(0,0,0,0.06)]
        hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
        transition-all duration-300
        w-full max-w-[380px]
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
                                <h3 className="text-fluid-body text-[#1C2041] font-semibold mb-2 leading-tight">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-fluid-small text-[#5A6183] leading-[24px] sm:leading-[28px] md:leading-[32px]">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </>
    )
}

export default Section3
