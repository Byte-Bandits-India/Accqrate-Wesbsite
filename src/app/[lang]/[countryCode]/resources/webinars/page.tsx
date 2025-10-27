"use client";

import Image from "next/image";
import ZatcaSection from "@/components/ZatcaSection";
export default function WebinarSection() {
  return (
    <div className="bg-[#F8F6FF]">
        <section className="bg-[#F8F6FF] py-16 md:py-24">
      {/* container with larger left padding on md+ to match reference left alignment */}
      <div className="container mx-auto px-6 md:px-24 lg:px-32">
        {/* Heading / left aligned */}
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 text-left">
            Unlocking Insights Of Webinar
          </h2>

          {/* small underline left */}
          <div className="w-16 h-[2px] bg-[#2A1D8D] mt-4 mb-6" />

          {/* Subheading - left aligned and limited width */}
          <p className="text-gray-700 max-w-3xl mb-14 text-left">
            This Webinar Is Essential For Professionals Who Handle Invoicing And Compliance In Their Organizations
          </p>
        </div>

        {/* Webinar Cards - left aligned grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-start">
          {/* Card 1 */}
          <div className="max-w-md text-left">
            <Image
              src="/images/resources/web1.jpg"
              alt="Integrating Multiple ERP/POS Systems with ZATCA"
              width={480}
              height={340}
              className="rounded-lg shadow-md"
              priority
            />
            <h3 className="mt-4 text-lg md:text-xl font-semibold text-gray-900">
              Integrating Multiple ERP/POS Systems with ZATCA
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              A comprehensive discussion on how Accqrate, a leader in e-invoicing Solution in KSA, manages the integration of multiple ERP and POS systems within a single organization.
            </p>
          </div>

          {/* Card 2 */}
          <div className="max-w-md text-left">
            <Image
              src="/images/resources/web2.jpg"
              alt="Understanding ZATCA Rejections and Accqrate's Error Management"
              width={480}
              height={340}
              className="rounded-lg shadow-md"
              priority
            />
            <h3 className="mt-4 text-lg md:text-xl font-semibold text-gray-900">
              Understanding ZATCA Rejections and Accqrate&apos;s Error Management
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              A detailed understanding of the common errors that lead to invoice rejections by ZATCA (Zakat, Tax and Customs Authority) and how Accqrate resolves them efficiently.
            </p>
          </div>
        </div>
      </div>
    
    </section>
    <div className="mt-20 ">
    <ZatcaSection  />
    </div>
    </div>

  );
}
