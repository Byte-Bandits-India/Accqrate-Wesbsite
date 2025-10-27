"use client";

import Image from "next/image";
import ZatcaSection from "@/components/ZatcaSection";

export default function WebinarSection() {
  const webinars = [
    {
      id: 1,
      image: "/images/resources/web1.jpg",
      alt: "Integrating Multiple ERP/POS Systems with ZATCA",
      title: "Integrating Multiple ERP/POS Systems with ZATCA",
      description:
        "A comprehensive discussion on how Accqrate, a leader in e-invoicing Solution in KSA, manages the integration of multiple ERP and POS systems within a single organization.",
    },
    {
      id: 2,
      image: "/images/resources/web2.jpg",
      alt: "Understanding ZATCA Rejections and Accqrate's Error Management",
      title: "Understanding ZATCA Rejections and Accqrate's Error Management",
      description:
        "A detailed understanding of the common errors that lead to invoice rejections by ZATCA (Zakat, Tax and Customs Authority) and how Accqrate resolves them efficiently.",
    },
  ];

  return (
    <div className="bg-[#F8F6FF] overflow-hidden">
      <section className="bg-[#F8F6FF] py-16 md:py-24">
        <div className="mx-auto px-6 md:px-8 max-w-[1440px]">
          {/* Heading */}
          <div>
            <h2 className="text-fluid-h1 font-semibold text-gray-900 text-left mb-6 md:mb-8 lg:mb-[54px]">
              Unlocking Insights Of Webinar
            </h2>

            <div className="w-16 h-[2px] bg-[#194BED] mb-6 md:mb-8" />

            <p className="text-gray-700 text-fluid-body lg:text-[24px] mb-14 text-left max-w-[800px]">
              This Webinar Is Essential For Professionals Who Handle Invoicing And Compliance In Their Organizations
            </p>
          </div>

          {/* Webinar Cards */}
          <div className="flex flex-col items-start lg:flex-row md:justify-start md:gap-[80px] lg:gap-[100px] py-8 md:py-10 lg:py-[50px]">
            {webinars.map((webinar) => (
              <div key={webinar.id} className="max-w-md md:max-w-[600px] lg:max-w-md text-left">
                <Image
                  src={webinar.image}
                  alt={webinar.alt}
                  width={480}
                  height={340}
                  className="rounded-lg shadow-md"
                  priority
                />
                <h3 className="mt-4 text-fluid-h3 font-semibold text-gray-900 lg:mt-[77px]">
                  {webinar.title}
                </h3>
                <p className="mt-4 text-fluid-small text-gray-600 mb-6 lg:mt-[30px]">{webinar.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <ZatcaSection />
        </div>
      </section>
    </div>
  );
}
