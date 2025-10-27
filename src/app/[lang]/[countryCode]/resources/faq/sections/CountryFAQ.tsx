"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "./CountryFAQData";
import { Mail } from "lucide-react";
import { useCountry } from "@/contexts/CountryContext";
import { ContactModal } from "../../../../../../components/ContactModal";

export const CountryFAQ = () => {
  const { selectedCountry } = useCountry();
  const [isModalOpen, setModalOpen] = useState(false);

  const faqs = faqData[selectedCountry.code] || [];

  return (
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
                className="group flex items-center gap-4 bg-[#2A45C2] text-white rounded-md px-6 py-4 cursor-pointer hover:bg-[#2336A6] transition-all shadow-md w-fit"
              >
                <div className="bg-white/20 p-3 rounded-md flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
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
                    <AccordionContent className="text-fluid-body font-normal text-[#000000] leading-relaxed mt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal open={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>


  );
};
