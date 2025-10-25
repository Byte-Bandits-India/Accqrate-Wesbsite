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
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12 md:py-20">
        {/* Hero Section */}
        <section className="max-w-4xl mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            We Will Keep You Updated At All Times
          </h1>
          <div className="w-16 h-1 bg-primary mb-6" />
          <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed max-w-3xl">
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
        <section className="grid md:grid-cols-2 gap-6 mb-16">
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

        {/* CTA Section */}
        <section>
          <CTASection />
        </section>
      </main>
    </div>
  );
};

export default Index;
