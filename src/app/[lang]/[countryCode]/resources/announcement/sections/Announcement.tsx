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

  return (
    <div className="min-h-screen bg-[#F8F6FF]">
      <main className="container mx-auto  pt-12 md:py-20">
        {/* Hero Section */}
        <section className="max-w-[1440px] px-6 md:px-8 mx-auto mb-8 md:mb-10 lg:mb-[62px]">
          <h1 className="text-fluid-h1 font-semibold mb-6 max-lg:mb-8 lg:mb-[56px] leading-tight">
            We Will Keep You Updated At All <br className="hidden lg:block" /> Times
          </h1>
          <div className="w-[156px] h-[2px] bg-[#194BED] mb-6 md:mb-8" />
          <p className="text-fluid-body lg:text-[24px] text-foreground mb-8 md:mb-[43px] leading-relaxed">
            Stay Updated With The Latest News And Updates From ZATCA Or LHDN Or MRA Or OTA Or NBR Or ISTD, And
            Accurate E-Invoicing Enhancements For Seamless Business Operations.
          </p>

          {/* ✅ Dynamic route link */}
          <Link
            href={`/${lang}/${countryCode}/resources/Announcement/Form`}
            className="inline-flex items-center   text-white border font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-[#29266E] to-[#194BED]  "
          >
            Subscribe Now <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </section>

        {/* Update Cards Section */}
        <section className="max-w-[1440px] px-6 md:px-8 mx-auto md:flex gap-[36px] mb-16">
          <UpdateCard
            image="/images/resources/zatcaup.png"
            title="ZATCA Updates"
            description="Stay informed with the latest news, announcements, and software rollouts from ZATCA."
          />
          <UpdateCard
            image="/images/resources/zatcaprod.png"
            title="Accqrate Product Evolutions"
            description="Discover the latest upgrades, feature enhancements, and bug resolutions for Accqrate E-invoicing platform."
          />
        </section>
      </main>
      {/* CTA Section */}
      <section>
        <CTASection />
      </section>
      <div className="flex flex-col items-center md:flex md:flex-row md:justify-center md:gap-[10px] lg:gap-[30px] py-8 md:py-10 lg:py-[50px]">
        <button
          className="h-[40px] md:h-[46px] max-w-[399px] flex items-center justify-between px-4 text-white text-fluid-small md:text-[18px] mt-[32px]"
          style={{ background: 'linear-gradient(90deg, #194BED 0%, #29266E 100%)' }}
        >
          Get a Free Proof of Concept
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white">
            <path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          className="h-[40px] md:h-[46px] max-w-[399px] flex items-center justify-between px-4 text-white text-fluid-small md:text-[18px] mt-[32px]"
          style={{ background: 'linear-gradient(90deg, #194BED 0%, #29266E 100%)' }}
        >
          Start 30‑Day Free Trial
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white">
            <path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          className="h-[40px] md:h-[46px] max-w-[399px] flex items-center justify-between px-4 text-white text-fluid-small md:text-[18px] mt-[32px]"
          style={{ background: 'linear-gradient(90deg, #194BED 0%, #29266E 100%)' }}
        >
          Talk to Sales
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white">
            <path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Index;
