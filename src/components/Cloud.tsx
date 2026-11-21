"use client";

import React, { useContext, useRef } from "react";
import { LoadingContext } from "../utils/LoadingContext";
import { Skeleton } from "./ui/skeleton";
import useInView from "../utils/useInView";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AccordionCard,
} from "../components/ui/accordion";
import FadeUp from "./ui/FadeUp";

// Type for dropdown items
interface DropdownItem {
  title: string;
  content: string;
}

export default function Cloud() {
  const { loading } = useContext(LoadingContext);
  const receivableRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useInView(receivableRef as React.RefObject<Element>, { threshold: 0 });

  // Dropdown data arrays
  const receivableDropdowns: DropdownItem[] = [
    { title: "Company CV Format", content: "Standardize CVs for easy review and evaluation" },
    { title: "Onboarding Link", content: "Seamless new hire onboarding—automate documentation, contracts, and initial setup. " },
    { title: "Job Postings & Evaluation", content: "Post open positions, evaluate candidates, and hire seamlessly. Automatic posting of job in social medias. " },
  ];

  const payableDropdowns: DropdownItem[] = [
    { title: "Automated Payroll Setup", content: "Set payroll rules once, then let Accqrate People generate accurate payslips without the headaches. " },
    { title: "Custom Payroll Components", content: "Tailor your payroll structure by department, role, or grade. " },
    { title: "Statutory & Loan Clearance", content: "Automatically manage loan deductions and statutory compliance. " },
  ];

  const expenseDropdowns: DropdownItem[] = [
    { title: "Company Calendar & Leave Balances", content: "Manage employee leave requests, approvals, and balances from a single calendar. " },
    { title: "Leave Request Automation", content: "Employees apply for leave; managers approve seamlessly. " },
    { title: "Comprehensive Leave Reporting", content: "Track and report leave data with detailed analytics for HR. " },
  ];

  const financialDropdowns: DropdownItem[] = [
    { title: "Termination Checklists", content: "Automate offboarding processes with predefined checklists. " },
    { title: "Complete Data & Asset Retrieval", content: "Ensure all assets are returned and all final payments are processed smoothly. " },
    { title: "Exit interviews & Documentation", content: "Capture feedback and complete necessary documentation. " },
  ];

  // Show skeleton while loading or not in view
  if (loading || !isVisible) {
    return (
      <section ref={receivableRef} className="mx-auto font-inter max-w-[1280px] space-y-12 my-6">
        {/* Main Heading Skeleton */}
        <div className="space-y-4 mt-8">
          <Skeleton className="h-8 md:h-10 lg:h-12 w-3/4 mx-auto" />
          <Skeleton className="h-6 md:h-7 w-2/3 mx-auto" />
          <Skeleton className="h-4 w-5/6 mx-auto" />
        </div>

        {/* Cloud/On-Premises Cards Skeleton */}
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 w-full">
            {[1, 2].map((item) => (
              <div key={item} className="flex-1 space-y-4 p-6 border rounded-[40px]">
                <Skeleton className="h-6 w-3/4 mx-auto" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Heading Skeleton */}
        <div className="space-y-4">
          <Skeleton className="h-8 md:h-10 lg:h-12 w-4/5 mx-auto" />
          <Skeleton className="h-6 w-1/3 mx-auto" />
        </div>

        {/* Recruitment Section Skeleton */}
        <section className="py-6 px-6 rounded-xl md:flex gap-8">
          <div className="flex-1 space-y-6">
            <Skeleton className="h-8 md:h-10 lg:h-12 w-3/4" />
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="space-y-2 border rounded-lg p-4">
                  <Skeleton className="h-5 w-2/3" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 mt-6 md:mt-0">
            <Skeleton className="w-full h-64 md:h-80 lg:h-96 rounded-lg" />
          </div>
        </section>

        {/* Payroll Section Skeleton */}
        <section className="py-6 px-6 rounded-xl md:flex gap-8">
          <div className="flex-1 space-y-6">
            <Skeleton className="h-8 md:h-10 lg:h-12 w-3/4" />
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="space-y-2 border rounded-lg p-4">
                  <Skeleton className="h-5 w-2/3" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 mt-6 md:mt-0">
            <Skeleton className="w-full h-64 md:h-80 lg:h-96 rounded-lg" />
          </div>
        </section>

        {/* Leave Management Section Skeleton */}
        <section className="py-6 px-6 rounded-xl md:flex gap-8 bg-gray-50">
          <div className="flex-1 space-y-6">
            <Skeleton className="h-8 md:h-10 lg:h-12 w-3/4" />
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="space-y-2 border rounded-lg p-4 bg-white">
                  <Skeleton className="h-5 w-2/3" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 mt-6 md:mt-0">
            <Skeleton className="w-full h-64 md:h-80 lg:h-96 rounded-lg" />
          </div>
        </section>

        {/* Termination Section Skeleton */}
        <section className="py-6 px-6 rounded-xl md:flex gap-8">
          <div className="flex-1 space-y-6">
            <Skeleton className="h-8 md:h-10 lg:h-12 w-3/4" />
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="space-y-2 border rounded-lg p-4">
                  <Skeleton className="h-5 w-2/3" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 mt-6 md:mt-0">
            <Skeleton className="w-full h-64 md:h-80 lg:h-96 rounded-lg" />
          </div>
        </section>
      </section>
    );
  }

  return (
    <>
      <section className="mx-auto font-inter max-w-[1280px]">
        <div className="mt-[32px]">
          <FadeUp>
            {/* Top Feature Cards */}
            <h2 className="text-[24px] max-w-[340px] lg:text-[38px] sm:max-w-[800px] mx-auto px-[24px] mt-[48px] leading-tight tracking-[-0.05em] md:text-fluid-h2 font-medium text-center mb-6">
              <span className="text-[#43A047]"> Cloud or On-Premises?</span> The Choice is Yours
            </h2>
            <p className="text-fluid-body font-medium px-[24px] tracking-para mx-auto text-center mb-6">
              Fast, Flexible, and Secure Deployment Options
            </p>
            <p className="text-center px-[24px] text-gray-700 tracking-para text-fluid-small max-w-5xl mx-auto pb-6">
              With Accqrate People, you're in control. Whether you choose to deploy in <br className="hidden lg:block" /> the cloud or on-premises, your HR data is secure and always accessible
            </p>
          </FadeUp>

          <FadeUp className="max-w-[1000px] mx-auto px-[24px] md:px-[32px] rounded-[40px] mb-[48px] md:mb-[56px]">
            <Accordion type="single" collapsible className="flex flex-col md:flex-row gap-4 w-[100%] mx-auto">
              <AccordionCard
                value="card-4"
                icon="/images/instant.png"
                title="Cloud Deployment"
                content={<>Cloud Deployment Accessible 24/7, anywhere, on any device. No hardware or IT resources needed. </>}
              />
              <AccordionCard
                value="card-5"
                icon="/images/invoice.png"
                title="On-Premises"
                content={<>Full control of your infrastructure, installed in under 2 hours with minimal downtime. </>}
              />
            </Accordion>
          </FadeUp>

          {/* Bottom Sections */}
          <FadeUp>
            <h2 className="text-fluid-h2 max-w-[340px] sm:max-w-[1280px] mx-auto px-[24px] mt-[48px] leading-tight tracking-heading  font-medium text-center mb-6">
              Manage Every <span className="text-[#43A047]">Employee Lifecycle</span> in One Platform
            </h2>
            <p className="text-fluid-small px-[24px] font-semibold mx-auto text-center">
              Streamlined HR, Payroll and Compliance
            </p>
          </FadeUp>

          {/* ================= Account Receivables ================= */}
          <FadeUp className="py-6 px-6 md:p-[32px] rounded-xl md:rounded-2xl mx-auto md:flex">
            <div className="flex-1 md:max-w-[400px] lg:max-w-[520px]">
              <h2 className="text-[#43A047] text-fluid-h3 font-medium tracking-[-0.05em] leading-tight pb-6">
                Simplify Recruitment and Onboarding
              </h2>
              <Accordion type="single" collapsible className="w-full max-w-[400px] md:mt-6 lg:mt-10">
                {receivableDropdowns.map((item, idx) => (
                  <AccordionItem key={idx} value={`receivable-${idx}`}>
                    <AccordionTrigger className="text-[16px] md:text-[14px] lg:text-[16px] font-medium text-left">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-[12px] md:text-[12px] lg:text-[14px]">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="flex-1 mt-6 lg:mt-0 flex justify-center items-center">
              <video
                className="rounded-lg w-full max-w-[500px] md:h-[300px] lg:h-auto xl:h-[420px] object-contain"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="videos/account-receivables.mp4" type="video/mp4" />
              </video>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================= Other Sections ================= */}
      <section className="md:bg-[#F2FFF3]">
        <div className="max-w-[1280px] mx-auto">
          {/* Account Payables */}
          <FadeUp className="py-6 px-6 md:p-[32px] rounded-xl md:rounded-2xl mx-auto md:flex">
            <div className="flex-1 md:max-w-[400px] lg:max-w-[520px]">
              <h2 className="text-[#43A047] text-fluid-h3 font-medium tracking-heading leading-tight pb-6">
                Effortless Payroll & Compliance
              </h2>
              <Accordion type="single" collapsible className="w-full max-w-[400px] md:mt-6 lg:mt-10">
                {payableDropdowns.map((item, idx) => (
                  <AccordionItem key={idx} value={`payable-${idx}`}>
                    <AccordionTrigger className="text-[16px] md:text-[14px] lg:text-[16px] font-medium text-left">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-[12px] md:text-[12px] lg:text-[14px]">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="flex-1 mt-6 lg:mt-0 flex justify-center items-center">
              <video
                className="rounded-lg w-full max-w-[500px] md:h-[300px] lg:h-auto xl:h-[420px] object-contain"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="videos/Accounts_payables.mp4" type="video/mp4" />
              </video>
            </div>
          </FadeUp>

          <div className="bg-[#F2FFF3] py-6 md:py-0">
            {/* Smart Expense Management */}
            <section className="my-6 mx-6 md:m-[32px]">
              <div className="rounded-xl md:rounded-2xl mx-auto md:flex md:bg-white md:p-[32px] md:shadow-[9px_7px_16.9px_rgba(67,160,71,0.2)]">
                <div className="flex-1 md:max-w-[400px] lg:max-w-[520px]">
                  <h2 className="text-[#43A047] text-fluid-h3 font-medium tracking-heading leading-tight pb-6">
                    Track Absences and Manage Leave with Ease
                  </h2>
                  <Accordion type="single" collapsible className="w-full max-w-[400px] md:mt-6 lg:mt-10">
                    {expenseDropdowns.map((item, idx) => (
                      <AccordionItem key={idx} value={`expense-${idx}`}>
                        <AccordionTrigger className="text-[16px] md:text-[14px] lg:text-[16px] font-medium text-left">
                          {item.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-[12px] md:text-[12px] lg:text-[14px]">
                          {item.content}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
                <div className="flex-1 mt-6 lg:mt-0 flex justify-center items-center">
                  <video
                    className="rounded-lg w-full max-w-[500px] md:h-[300px] lg:h-auto xl:h-[420px] object-contain"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="videos/Smart_expense_management.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </section>

            {/* Financial Statements */}
            <FadeUp className="py-6 px-6 md:p-[32px] rounded-xl md:rounded-2xl mx-auto md:flex">
              <div className="flex-1 md:max-w-[400px] lg:max-w-[520px]">
                <h2 className="text-[#43A047] text-fluid-h3 font-medium tracking-heading leading-tight pb-6">
                  Termination and Offboarding Made Simple
                </h2>
                <Accordion type="single" collapsible className="w-full max-w-[400px] md:mt-6 lg:mt-10">
                  {financialDropdowns.map((item, idx) => (
                    <AccordionItem key={idx} value={`financial-${idx}`}>
                      <AccordionTrigger className="text-[16px] md:text-[14px] lg:text-[16px] font-medium text-left">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-[12px] md:text-[12px] lg:text-[14px]">
                        {item.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              <div className="flex-1 mt-6 lg:mt-0 flex justify-center items-center">
                <video
                  className="rounded-lg w-full max-w-[500px] md:h-[300px] lg:h-auto xl:h-[420px] object-contain"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="videos/Financial_statements.mp4" type="video/mp4" />
                </video>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}