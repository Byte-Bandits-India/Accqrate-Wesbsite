"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import UpdateCard from "./UpdateCard";
import CTASection from "./CTASection";
import { useParams } from "next/navigation";

const Index = () => {
  // ✅ Get dynamic route params like "en" and "ksa"
  const params = useParams();
  const lang = params?.lang as string;
  const countryCode = params?.countryCode as string;

  // ✅ Build dynamic base route for announcements
  const announcementBase = `/${lang}/${countryCode}/resources/announcement`;

  return (
    <div className="min-h-screen">
      <main className="pt-12 md:py-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-t from-[#EFF3FF] to-transparent">
          <section className="max-w-[1280px] px-6 md:px-8 xl:px-0 mx-auto mb-6 md:mb-8 lg:mb-[60px]">
            <h1 className="text-fluid-h3 lg:text-[38px] text-black font-semibold leading-tight">
              We Will Keep You Updated At All Times
            </h1>
            <div className="w-[126px] h-[2px] bg-[#194BED] my-6 md:my-8 lg:my-[45px]" />
            <p className="text-fluid-body max-w-[1100px] font-medium  mb-8 md:mb-[43px] leading-tight">
              Stay Updated With The Latest News And Updates From ZATCA Or LHDN Or
              MRA Or OTA Or NBR Or ISTD, And Accurate E-Invoicing Enhancements For
              Seamless Business Operations.
            </p>

            {/* ✅ Dynamic route link */}
            <Link
              href={`/${lang}/${countryCode}/contact-us`}
              className="inline-flex items-center text-white border font-medium px-6 py-3 rounded-full bg-gradient-to-r from-[#29266E] to-[#194BED] mb-6 md:mb-8 lg:mb-[60px]"
            >
              Subscribe Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </section>
        </div>

        {/* Update Cards Section */}
        {/* Update Cards Section */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-8 xl:px-0 mb-16">
          {/* Wrapper that controls spacing */}
          <div className="flex flex-col md:flex-row md:gap-[34px] max-w-[1034px] gap-8">
            {/* ✅ ZATCA Updates Card */}
            <Link
              href={`${announcementBase}/ZatcaUpdates`}
              className="block w-full md:w-1/2"
            >
              <UpdateCard
                image="/images/resources/zatcaup.png"
                title="ZATCA Updates"
                description="Stay informed with the latest news, announcements, and software rollouts from ZATCA."
              />
            </Link>

            {/* ✅ Product Updates Card */}
            <Link
              href={`${announcementBase}/ProductUpdates`}
              className="block w-full md:w-1/2"
            >
              <UpdateCard
                image="/images/resources/zatcaprod.png"
                title="Accqrate Product Evolutions"
                description="Discover the latest upgrades, feature enhancements, and bug resolutions for Accqrate E-Invoicing platform."
              />
            </Link>
          </div>
        </section>

      </main>

      {/* CTA Section */}
      <section>
        <CTASection />
      </section>
    </div>
  );
};

export default Index;
