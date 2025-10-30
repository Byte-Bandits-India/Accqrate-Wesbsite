"use client";

import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "./CountryFAQData";
import { Mail } from "lucide-react";
import { useCountry } from "@/contexts/CountryContext";
import { ContactModal } from "@/components/ContactModal";
import ZatcaSection from "./ZatcaSection";

export const CountryFAQ = () => {
  const { selectedCountry } = useCountry();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component is mounted to prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const faqs = faqData[selectedCountry.code] || [];

  // Show loading state until component is mounted
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-[#F8F6FF] py-12 font-inter">
        <div className="max-w-[1440px] px-6 md:px-8 mx-auto flex flex-col relative">
          {/* Loading skeleton */}
          <div className="h-20 bg-gray-200 rounded mb-6 animate-pulse"></div>
          <div className="w-20 h-[2px] bg-gray-300 mb-6"></div>
          <div className="h-8 bg-gray-200 rounded mb-12 animate-pulse"></div>

          <div className="flex flex-col lg:flex-row gap-12 w-full">
            <div className="lg:w-[40%]">
              <div className="h-8 bg-gray-200 rounded mb-6 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded mb-6 animate-pulse"></div>
              <div className="h-16 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="lg:w-[60%]">
              {[1, 2, 3].map((item) => (
                <div key={item} className="border-b border-gray-300 py-4">
                  <div className="h-6 bg-gray-200 rounded mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="min-h-screen bg-[#F8F6FF] py-12 font-inter">
        <div className="max-w-[1440px] px-6 md:px-8 mx-auto flex flex-col relative">
          {/* Heading Section */}
          <h2 className="text-fluid-h1 lg:text-[80px] font-semibold text-foreground mb-6 md:mb-8 lg:mb-[54px] leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-[2px] bg-[#194BED] mb-6 md:mb-8"></div>

          <p className="text-foreground text-fluid-body font-medium lg:text-[24px] mb-12">
            Ask Everything You Need To Know About Our Solutions And Services
          </p>

          {/* FAQ Section Container */}
          <div>
            <div className="flex flex-col lg:flex-row gap-12 w-full">
              {/* Left (Sticky) */}
              <div className="lg:w-[40%] flex flex-col justify-start lg:sticky lg:top-24 self-start">
                <h3 className="text-fluid-h3 font-semibold text-foreground mb-6 md:mb-8 lg:mb-[50px] lg:pt-[24px]">
                  If you have any other questions not addressed here
                </h3>
                <p className="text-fluid-small text-muted-foreground mb-6 lg:mb-[26px]">
                  please feel free to contact us at{" "}
                  <a
                    href="mailto:Contact@accqrate-erp.com"
                    className="text-primary hover:underline"
                  >
                    Contact@accqrate-erp.com
                  </a>
                </p>

                {/* Message Box (opens modal) */}
                <div
                  onClick={() => setModalOpen(true)}
                  className="group flex items-center gap-4 text-white rounded-md px-6 py-2 cursor-pointer hover:bg-[#2336A6] transition-all shadow-md w-fit"
                  style={{ background: 'linear-gradient(90deg, #29266E 0% , #194BED 100%)' }}
                >
                  <div className="p-3 rounded-md flex items-center justify-center">
                    <img className="w-[40px] h-[40px] " src="/images/mail.png" alt="mail" />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="font-semibold text-base">Leave a Message</span>
                    <span className="text-xs text-white/80">
                      Our experts will reach out to you
                    </span>
                  </div>
                </div>
              </div>

              {/* Right (Scrollable FAQs) */}
              <div className="lg:w-[60%] overflow-y-auto max-h-[80vh] pr-2">
                {faqs.length > 0 ? (
                  <Accordion type="single" collapsible className="w-full text-left">
                    {faqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`faq-${index}`}
                        className="border-b border-border py-4"
                      >
                        <AccordionTrigger className="text-[20px] md:text-[24px] lg:text-[30px] font-medium hover:no-underline leading-tight text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-[14px] md:text-[18px] lg:text-[24px] font-normal text-[#000000] leading-tight mt-2">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-lg text-muted-foreground">
                      No FAQs available for this country yet.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Please check back later or contact us directly.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Modal - Only render when mounted */}
        <ContactModal open={isModalOpen} onClose={() => setModalOpen(false)} />
      </div>


      <div className="pt-8 md:pt-12 lg:pt-20">
        <ZatcaSection />
      </div>
    </div>
  );
};
