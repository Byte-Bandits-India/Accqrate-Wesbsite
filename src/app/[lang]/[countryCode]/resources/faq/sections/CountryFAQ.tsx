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
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 relative">
        {/* Left (Sticky) */}
        <div className="lg:w-[40%] flex flex-col justify-start lg:sticky lg:top-24 self-start">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-foreground mb-3 leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-[3px] bg-primary mb-6"></div>

          <p className="text-foreground text-base md:text-lg mb-8">
            Ask Everything You Need To Know About Our Solutions And Services
          </p>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              If you have any other questions not addressed here
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
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
                <AccordionTrigger className="text-lg md:text-xl lg:text-[22px] font-medium text-foreground hover:no-underline leading-tight text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base lg:text-[18px] font-light text-muted-foreground leading-relaxed mt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal open={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};
