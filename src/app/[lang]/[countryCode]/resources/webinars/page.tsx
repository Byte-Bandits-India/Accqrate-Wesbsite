"use client";

import Image from "next/image";
import Link from "next/link";
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
      link: "/en/sa/resources/webinars/integratingMultipleERPPOS",
    },
    {
      id: 2,
      image: "/images/resources/web2.jpg",
      alt: "Understanding ZATCA Rejections and Accqrate's Error Management",
      title: "Understanding ZATCA Rejections and Accqrate's Error Management",
      description:
        "A detailed understanding of the common errors that lead to invoice rejections by ZATCA (Zakat, Tax and Customs Authority) and how Accqrate resolves them efficiently.",
      link: "/en/sa/resources/webinars/understandingZATCARejections",
    },
  ];

  return (
    <div className="bg-[#F8F6FF] overflow-hidden">
      <section className="bg-[#F8F6FF] py-16 md:py-24">
        <div className="mx-auto px-6 md:px-8 max-w-[1440px]">
          {/* Heading */}
          <div>
            <h2 className="text-fluid-h1 lg:text-[58px] font-bold leading-tightfont-semibold text-[#333333] text-left mb-6 md:mb-8 lg:mb-[54px]">
              Unlocking Insights Of Webinar
            </h2>

            <div className="w-16 h-[2px] bg-[#194BED] mb-6 md:mb-8" />

            <p className="text-[#333333] text-fluid-body mb-14 text-left max-w-[800px]">
              This Webinar Is Essential For Professionals Who Handle Invoicing And Compliance In Their Organizations
            </p>
          </div>

          {/* Webinar Cards */}
          <div className="flex flex-col items-start lg:flex-row md:justify-start md:gap-[80px] lg:gap-[100px] py-8 md:py-10 lg:py-[50px]">
            {webinars.map((webinar) => (
              <Link
                key={webinar.id}
                href={webinar.link}
                className="max-w-md md:max-w-[600px] lg:max-w-md text-left group"
              >
                <div className="rounded-lg overflow-hidden cursor-pointer">
                  <Image
                    src={webinar.image}
                    alt={webinar.alt}
                    width={480}
                    height={340}
                    className="rounded-t-lg"
                    priority
                  />
                  <div className="p-4 md:p-6">
                    <h3 className="mt-2 text-fluid-h3 font-semibold text-gray-900">
                      {webinar.title}
                    </h3>
                    <p className="mt-3 text-fluid-small text-gray-600 mb-2">
                      {webinar.description}
                    </p>
                  </div>
                </div>
              </Link>
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
