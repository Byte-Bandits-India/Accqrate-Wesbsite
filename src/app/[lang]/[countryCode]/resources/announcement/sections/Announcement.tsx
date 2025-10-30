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
    <div className="min-h-screen bg-[#F8F6FF]">
      <main className="container mx-auto pt-12 md:py-20">
        {/* Hero Section */}
        <section className="max-w-[1440px] px-6 md:px-8 mx-auto mb-8 md:mb-10 lg:mb-[62px]">
          <h1 className="text-fluid-h1 lg:text-[58px] text-black font-semibold mb-6 max-lg:mb-8 lg:mb-[56px] leading-tight">
            We Will Keep You Updated At All{" "}
            <br className="hidden lg:block" /> Times
          </h1>
          <div className="w-[156px] h-[2px] bg-[#194BED] mb-6 md:mb-8" />
          <p className="text-fluid-body text-foreground mb-8 md:mb-[43px] leading-relaxed">
            Stay Updated With The Latest News And Updates From ZATCA Or LHDN Or
            MRA Or OTA Or NBR Or ISTD, And Accurate E-Invoicing Enhancements For
            Seamless Business Operations.
          </p>

          {/* ✅ Dynamic route link */}
          <Link
            href={`/${lang}/${countryCode}/contact-us`}
            className="inline-flex items-center text-white border font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-[#29266E] to-[#194BED]"
          >
            Subscribe Now <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </section>

        {/* Update Cards Section */}
        <section className="max-w-[1440px] px-6 md:px-8 mx-auto md:flex gap-[36px] mb-16">
          {/* ✅ Dynamic Link to Zatca Updates */}
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

          {/* ✅ Dynamic Link to Product Updates */}
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
