"use client";

import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
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
        <div className="max-w-[1280px] px-6 md:px-8 mx-auto flex flex-col relative">
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
      <div className="font-inter">
        <div className="bg-gradient-to-t from-[#EFF3FF] to-transparent max-h-[290px] py-12">
          <div className="max-w-[1280px] mx-auto px-6 md:px-8 xl:px-0">
            {/* Heading Section */}
            <h2 className="text-fluid-h2 lg:text-[38px] font-semibold text-foreground leading-tight">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-[2px] bg-[#194BED] my-6 md:my-8 lg:my-[45px]"></div>

            <p className=" text-fluid-body font-medium mb-6 md:mb-8 lg:mb-[60px]">
              Ask Everything You Need To Know About Our Solutions And Services
            </p>
          </div>
        </div>


        <div className="max-w-[1280px] px-6 md:px-8 xl:px-0 mx-auto flex flex-col mt-6 md:mt-8 lg:mt-[60px]">
          {/* FAQ Section Container */}
          <div>
            <div className="flex flex-col lg:flex-row gap-12 w-full">
              {/* Right (Scrollable FAQs) */}
              <div className="overflow-y-auto pr-2">
                {faqs.length > 0 ? (
                  <Accordion type="single" collapsible className="max-w-[1280px] xl:w-[1280px] text-left">
                    {faqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`faq-${index}`}
                        className="border-b border-border py-4"
                      >
                        <AccordionTrigger className="text-[16px] md:text-[18px] font-semibold hover:no-underline leading-tight text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-[14px] md:text-[16px] font-normal text-[#262626] leading-tight mt-2">
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
