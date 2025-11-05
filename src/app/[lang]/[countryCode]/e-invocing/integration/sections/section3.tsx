'use client'

import { Col, Row } from 'antd'
import T from '@/components/T'

interface IntegrationFlowProps { }

export default function IntegrationFlow({ }: IntegrationFlowProps) {
    const integrationSteps = [
        {
            number: "01",
            title: "Generate invoices and complete in your ERP/POS",
            description: "Efficiently generate and finalize invoices directly within your ERP/POS system for streamlined financial management.",
            image: "/images/invoicing/create-invoice-new-invoice.webp",
            icon: "/images/invoicing/integration-flow-icon-1.svg"
        },
        {
            number: "02",
            title: "Our Connectors in your ERP will take care of the rest",
            description: "Our connectors, seamlessly integrated into your ERP, will handle all subsequent processes effortlessly.",
            image: "/images/invoicing/integration-flow-2.webp",
            icon: "/images/invoicing/integration-flow-icon-2.svg"
        },
        {
            number: "03",
            title: "Our E-invoicing solution transforms and transmits the data to ISTD",
            description: "Our connector interfaces with our API, converting and adapting data for seamless integration.",
            image: "/images/invoicing/integration-flow-3.webp",
            icon: "/images/invoicing/integration-flow-icon-3.svg"
        },
        {
            number: "04",
            title: "ISTD approved invoices are given back to your ERP/POS",
            description: "ISTD clearances are processed instantly, ensuring swift compliance and operational efficiency.",
            image: "/images/invoicing/integration-flow-4.webp",
            icon: "/images/invoicing/integration-flow-icon-2.svg"
        },
        {
            number: "05",
            title: "ERP/POS receives back QR code, XML and PDF/A3. Data archived for 10 years.",
            description: "Unlimited archiving of responses, PDFs, and QR Codes ensures permanent storage and retrieval for compliance and reference purposes.",
            image: "/images/invoicing/integration-flow-5.webp",
            icon: "/images/invoicing/integration-flow-icon-3.svg"
        },
        {
            number: "06",
            title: "Print the PDF with QR code. Send PDF A3",
            description: "Generate and print the PDF with the QR code, then dispatch the document in A3 size for comprehensive and accessible presentation.",
            image: "/images/invoicing/integration-flow-6.webp",
            icon: "/images/invoicing/integration-flow-icon-2.svg"
        }
    ]

    return (
        <section className="my-8 md:my-10 lg:my-12">
            <div className="max-w-[1200px] mx-auto px-6 md:px-8">
                {/* Header Section */}
                <div className="text-center mb-12 md:mb-16">
                    <h3 className="text-fluid-h2 lg:text-[38px] font-medium text-[#1C2041] mb-4" data-aos="fade-up">
                        E-Invoicing <span className="text-[#62B34F]">Integration</span> Flow
                    </h3>
                    <p className="text-[#5A6183] text-fluid-body" data-aos="fade-up">
                        Integrating your existing application through various format. Schedule your integration with ISTD
                    </p>
                </div>

                {/* Desktop Integration Flow */}
                <div className="hidden lg:block relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#194BED] to-transparent -translate-x-1/2"></div>

                    {integrationSteps.map((step, index) => (
                        <Row key={index} className={`items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                            <Col xs={24} md={11} className={`${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                                <img
                                    src={step.image}
                                    alt={`Step ${step.number}`}
                                    className="w-full max-w-[400px] mx-auto"
                                />
                            </Col>

                            <Col xs={0} md={2} className="flex justify-center relative z-10">
                                <div className="bg-white rounded-full p-3 shadow-lg border border-gray-200">
                                    <img
                                        src={step.icon}
                                        alt=""
                                        className="w-8 h-8 md:w-12 md:h-12"
                                    />
                                </div>
                            </Col>

                            <Col xs={24} md={11} className={`${index % 2 === 0 ? 'pl-8 text-left' : 'pr-8 text-right'}`}>
                                <div className="text-[#FF8D67] text-[32px] md:text-[40px] font-medium mb-2">
                                    {step.number}
                                </div>
                                <h3 className="text-fluid-body font-medium text-[#1C2041] mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-[#5A6183] text-fluid-small leading-relaxed">
                                    {step.description}
                                </p>
                            </Col>
                        </Row>
                    ))}
                </div>

                {/* Mobile Integration Flow */}
                <div className="block lg:hidden relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#194BED] to-transparent"></div>

                    {integrationSteps.map((step, index) => (
                        <div key={index} className="flex mb-12 relative">
                            {/* Icon */}
                            <div className="flex-shrink-0 w-12 mr-4 relative z-10">
                                <div className="bg-white rounded-full p-2 shadow-lg border border-gray-200 w-10 h-10 flex items-center justify-center">
                                    <img
                                        src={step.icon}
                                        alt=""
                                        className="w-5 h-5"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <div className="text-[#FF8D67] text-[28px] font-medium mb-1">
                                    {step.number}
                                </div>
                                <img
                                    src={step.image}
                                    alt={`Step ${step.number}`}
                                    className="w-full mb-4 rounded-lg"
                                />
                                <h4 className="text-[18px] font-medium text-[#1C2041] mb-3">
                                    {step.title}
                                </h4>
                                <p className="text-[#5A6183] text-[14px] leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}