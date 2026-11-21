"use client";

import { useContext, useRef } from "react";
import { LoadingContext } from "../utils/LoadingContext";
import Skeleton from "./ui/skeleton";
import useInView from "../utils/useInView";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import FadeUp from "./ui/FadeUp";

// Section + item types
type SectionItem = {
  label: string;
  content: string;
};

type Section = {
  title: string;
  items: SectionItem[];
};

export default function AutomationSection() {
  // define sections
  const sections: Section[] = [
    {
      title: "All-in-One Employee Performance Management",
      items: [
        {
          label: "Organization & Goal Setting",
          content: "Align employee performance with organizational goals to drive productivity and growth. ",
        },
        {
          label: "Appraisal Reviews",
          content: "Track and manage appraisals with integrated goal assignment and progress tracking. ",
        },
        {
          label: "Continuous Feedback",
          content: "Enable a feedback-rich environment for continuous performance improvement. ",
        },
      ],
    },
    {
      title: "ESS – Employee Self Service Portal",
      items: [
        {
          label: "Onboard your employees",
          content: "All employees get access to the ESS on successful onboarding completion ",
        },
        {
          label: "Centralized Portal",
          content: "Centralized employee actions including absences, expenses, loads, workflows, documents and so on",
        },
        {
          label: "Workflow",
          content: "Notifications for expiry of legal documents, payslips, loss of pay etc.",
        },
      ],
    },
  ];

  // context
  const { loading } = useContext(LoadingContext);

  // ref + inView - fix the type issue
  const automationRef = useRef<HTMLDivElement>(null);
  const isVisible = useInView(automationRef as React.RefObject<Element>, { threshold: 0 });

  // show skeleton if loading or not visible
  if (loading || !isVisible) {
    return (
      <div
        ref={automationRef}
        className="bg-white py-10 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto"
      >
        {/* Skeleton layout for two sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-6 flex flex-col"
            >
              <Skeleton height="28px" width="80%" className="mb-6" />
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="border-b border-gray-300 pb-2 flex justify-between items-center"
                  >
                    <Skeleton height="18px" width="70%" />
                    <Skeleton
                      height="16px"
                      width="16px"
                      className="rounded-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Video Skeleton */}
        <div className="mt-8">
          <Skeleton
            height="220px"
            className="w-full md:h-[300px] lg:h-[420px] rounded-lg"
          />
        </div>

        {/* Extra section skeleton */}
        <div className="my-12 bg-[#F2F2F2] py-12 px-6">
          <Skeleton height="38px" width="50%" className="mb-12 mx-auto" />
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8">
            <div className="flex justify-center items-center">
              <Skeleton
                height="320px"
                width="100%"
                className="max-w-[480px]"
              />
            </div>
            <ul className="space-y-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <li key={item}>
                  <Skeleton height="20px" width="100%" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // main UI
  return (
    <>
      <div className="mt-[24px] md:mt-8 lg:mt-10 px-[24px] md:px-[32px] max-w-[1280px] mx-auto font-inter">
        <FadeUp className="md:bg-[#E3E3E3] md:p-[32px] rounded-[20px]">
          {/* ================= Two Sections with Accordion ================= */}
          <div
            ref={automationRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-[24px] md:gap-10"
          >
            {sections.map((section, sIdx) => (
              <div
                key={sIdx}
                className="bg-white md:p-6 flex flex-col rounded-[20px]"
              >
                <h2 className="text-[#43A047] text-fluid-h3 font-medium leading-snug mb-6">
                  {section.title}
                </h2>

                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                >
                  {section.items.map((item, index) => (
                    <AccordionItem key={index} value={`item-${sIdx}-${index}`}>
                      <AccordionTrigger className="text-[16px] font-semibold text-left">
                        {item.label}
                      </AccordionTrigger>
                      <AccordionContent className="text-[12px] md:text-[14px]">
                        {item.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* Shared Video */}
          <div className="mt-8 md:mt-10">
            <video
              className="rounded-lg w-full md:h-[300px] lg:h-[420px] object-contain"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/Ai-driven_automation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </FadeUp>
      </div>

      {/* Why it works section */}
      <div className="mt-12 bg-[#F2F2F2] w-full py-6">
        <div className="max-w-[1280px] mx-auto px-[24px] md:px-[32px] font-inter">
          <FadeUp>
            <h2 className="text-[26px] sm:max-w-[800px] mx-auto sm:text-[28px] md:text-[32px] tracking-heading lg:text-[38px] font-medium mb-6 text-center leading-snug">
              Accqrate <span className="text-[#43A047]">People</span>: Why It
              Works for You
            </h2>
          </FadeUp>

          <FadeUp className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
            {/* Image */}
            <div className="flex items-center justify-center">
              <img
                src="/images/hiring.png"
                alt="Why Choose Accqrate Books"
                className="w-[320px] sm:w-[360px] md:w-[420px] lg:w-[650px] h-auto"
              />
            </div>

            {/* Text List */}
            <ul className="text-left px-[24px] list-disc list-inside text-fluid-small tracking-para leading-6 space-y-4 md:space-y-8">
              <li>
                Automation-First: Streamline your processes from hiring to
                payroll to performance reviews.
              </li>
              <li>
                Real-Time Reporting & Dashboards: Instant access to key metrics,
                analytics, and compliance reports.
              </li>
              <li>
                Compliance Without Worry: Always stay ahead of changing
                regulations with built-in compliance tools.
              </li>
              <li>
                Secure and Scalable: Whether on the cloud or on-premises, your
                HR data is secure and ready to scale as your business grows.
              </li>
            </ul>
          </FadeUp>

          {/* Buttons */}
          <FadeUp className="hidden md:block mt-[32px]">
            <div className="flex flex-col md:flex-row gap-3 px-8 w-full max-w-[1280px] mx-auto md:justify-center">
              <button className="bg-[#4CAF50] text-white py-3 px-4 rounded-md w-full md:w-[305px] md:h-[58px]">
                REQUEST A DEMO
              </button>
              <button className="bg-[#4CAF50] text-white py-3 px-4 rounded-md w-full md:w-[305px] md:h-[58px]">
                CONTACT SALES
              </button>
              <button className="bg-[#4CAF50] text-white py-3 px-4 rounded-md w-full md:w-[305px] md:h-[58px]">
                LEARN MORE
              </button>
            </div>
          </FadeUp>
        </div>
      </div>
    </>
  );
}