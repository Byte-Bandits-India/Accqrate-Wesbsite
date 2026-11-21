"use client";
import React, { JSX } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { LoadingContext } from "../utils/LoadingContext";
import { Skeleton } from "./ui/skeleton";
import useInView from "../utils/useInView";
import { useContext, useRef } from "react";
import FadeUp from "./ui/FadeUp";

interface FAQItem {
  question: string;
  answer: string;
}

export default function HRPayrollSection(): JSX.Element {
  const { loading } = useContext(LoadingContext);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useInView(heroRef as React.RefObject<Element>);
  const faqItems: FAQItem[] = [
    {
      question: "How quickly can we deploy Accqrate People?",
      answer:
        "Deploying Accqrate People is simple. For cloud deployment, you’re up and running in under an hour. On-premises takes just a couple of hours, with full control and customization. ",
    },
    {
      question: "Can Accqrate People integrate with other HR systems?",
      answer:
        "Yes, Accqrate People integrates seamlessly with most HR software, ERPs, and third-party applications, ensuring smooth data flow and synchronization. ",
    },
    {
      question: "Is my data secure with Accqrate People?",
      answer:
        "Absolutely. We use bank-level encryption, multi-factor authentication, and daily backups to ensure your data remains secure and accessible. ",
    },
  ];

  if (loading || !isVisible) {
    return (
      <section ref={heroRef} className="w-full">
        {/* Testimonials Section Skeleton */}
        <div className="w-full max-w-[1280px] mx-auto font-inter px-6 md:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12">
            {/* Testimonial 1 Skeleton */}
            <div className="border border-gray-200 rounded-lg p-6 lg:p-8 h-[280px] lg:h-[330px] flex flex-col">
              <div className="space-y-3 flex-1">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-5/6" />
              </div>
              <div className="flex items-center gap-4 mt-6">
                <Skeleton className="w-12 h-12 lg:w-16 lg:h-16 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-24" />
                </div>
              </div>
            </div>

            {/* Testimonial 2 Skeleton */}
            <div className="border border-gray-200 rounded-lg p-6 lg:p-8 h-[280px] lg:h-[330px] flex flex-col">
              <div className="space-y-3 flex-1">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-5/6" />
              </div>
              <div className="flex items-center gap-4 mt-6">
                <Skeleton className="w-12 h-12 lg:w-16 lg:h-16 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-24" />
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section Skeleton */}
          <section className="md:m-10 my-8 md:py-10 lg:m-[60px] lg:py-[60px] grid gap-8 md:grid-cols-2 md:items-start">
            <div className="self-center text-center md:text-left space-y-4">
              <Skeleton className="h-8 w-64 mx-auto md:mx-0" />
              <Skeleton className="h-8 w-48 mx-auto md:mx-0" />
            </div>

            <div className="space-y-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="space-y-4 border-b pb-6 last:border-b-0">
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* CTA Section Skeleton */}
        <div className="bg-[#F2F2F2] w-full py-12 md:py-16">
          <div className="max-w-[1280px] mx-auto px-6 md:px-8">
            <div className="text-center space-y-4 mb-8">
              <Skeleton className="h-8 w-80 mx-auto hidden md:block" />
              <div className="md:hidden space-y-2">
                <Skeleton className="h-7 w-64 mx-auto" />
                <Skeleton className="h-7 w-56 mx-auto" />
              </div>
              <div className="space-y-3 max-w-2xl mx-auto">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-11/12 mx-auto" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 w-full max-w-3xl mx-auto justify-center">
              <Skeleton className="h-12 w-full md:w-40 lg:w-48" />
              <Skeleton className="h-12 w-full md:w-40 lg:w-48" />
              <Skeleton className="h-12 w-full md:w-40 lg:w-48" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="w-full max-w-[1280px] mx-auto font-inter px-6 md:px-8 py-8 flex flex-col items-center text-left">
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Testimonial 1 */}
          <FadeUp className="border bg-[#D9D9D9] md:bg-[#F9FFF9] border-green-600 shadow-[0_6px_4px_rgba(67,160,71,0.85)] rounded-lg p-4 lg:p-8 lg:h-[330px] flex flex-col">
            <p className="text-fluid-caption lg:text-[20px] mb-4 tracking-para">
              "With Accqrate People, we've saved hours in payroll processing and
              improved accuracy significantly. It's simplified HR for us, allowing us
              to focus on what matters—our employees."
            </p>
            <div className="flex items-center gap-2 mt-auto pl-1">
              <img
                src="/images/man.png"
                alt="Head of HR"
                className="w-10 h-10 lg:h-[60px] lg:w-[60px] rounded-full"
              />
              <div className="text-left">
                <p className="text-sm font-semibold text-green-700">Head of HR</p>
                <p className="text-xs text-green-600">FMCG, Riyadh</p>
              </div>
            </div>
          </FadeUp>

          {/* Testimonial 2 */}
          <FadeUp className="border bg-[#D9D9D9] md:bg-[#F9FFF9] border-green-600 shadow-[0_6px_4px_rgba(67,160,71,0.85)] rounded-lg p-4 lg:p-8 lg:h-[330px] flex flex-col">
            <p className="text-fluid-caption lg:text-[20px] mb-4 tracking-para">
              "The automated compliance features ensure that we are always up to date
              with local laws, and the performance management system has helped us
              align team goals with the company's objectives."
            </p>
            <div className="flex items-center gap-2 mt-auto pl-1">
              <img
                src="/images/woman.png"
                alt="Head of HR"
                className="w-10 h-10 lg:h-[60px] lg:w-[60px] rounded-full"
              />
              <div className="text-left">
                <p className="text-sm font-semibold text-green-700">Head of HR</p>
                <p className="text-xs text-green-600">FMCG, Riyadh</p>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* FAQ */}
        <section className="md:m-10 my-8 md:py-10 lg:m-[60px] lg:py-[60px] max-w-[1280px] mx-auto grid gap-6 md:grid-cols-2 md:items-start">
          <FadeUp className="self-center text-center md:text-left">
            <h2 className="text-fluid-h2 lg:text-[48px] font-semibold tracking-heading">
              Any Questions?
            </h2>
            <h3 className="text-green-600 md:text-[#333333] lg:text-[48px] text-fluid-h2 font-bold tracking-heading">
              We Got You !!!
            </h3>
          </FadeUp>

          <FadeUp>
            <Accordion type="single" collapsible className="w-full text-left">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="space-y-8"
                >
                  <AccordionTrigger className="text-fluid-body font-light text-gray-800 lg:text-[26px] leading-8 md:mt-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-fluid-caption lg:text-[22px] font-light text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeUp>
        </section>
      </section>

      {/* CTA Section */}
      <div className="bg-[#F2F2F2] w-full py-6 md:py-8">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 ">
          <FadeUp>
            <h3 className="text-[#333333] text-center font-medium tracking-heading lg:text-[38px] text-fluid-h2 hidden md:block">
              <span className="text-[#43A047] md:text-[#333333]">Transform Your HR & Payroll</span> Today with Accqrate People
            </h3>
            <p className="text-gray-600 text-fluid-caption lg:text-[20px] mb-8 tracking-para text-center">
              Your HR and payroll systems should work for you, not the other way
              around. <br className="hidden md:block" /> Discover the seamless,
              intuitive solution trusted by businesses worldwide.
            </p>
          </FadeUp>

          <FadeUp className="flex flex-col md:flex-row gap-3 px-8 w-full max-w-[1280px] mx-auto md:justify-center">
            <button className="bg-[#4CAF50] text-white py-3 px-4 rounded-md w-full md:w-[300px] md:h-[58px]">
              REQUEST A DEMO
            </button>
            <button className="bg-[#4CAF50] text-white py-3 px-4 rounded-md w-full md:w-[300px] md:h-[58px]">
              CONTACT SALES
            </button>
            <button className="bg-[#4CAF50] text-white py-3 px-4 rounded-md w-full md:w-[300px] md:h-[58px]">
              LEARN MORE
            </button>
          </FadeUp>
        </div>
      </div>
    </>
  );
}