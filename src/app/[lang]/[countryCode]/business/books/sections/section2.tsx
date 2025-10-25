"use client";

import React, { useContext, useRef, useMemo } from "react";
import { LoadingContext } from "./utils/LoadingContext";
import { Skeleton } from "@/components/ui/skeleton";
import useInView from "./utils/useInView";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AccordionCard
} from "@/components/ui/accordion";
import FadeUp from "@/components/ui/FadeUp";

interface DropdownItem {
  title: string;
  content: string;
}

export default function AccountSections(): React.JSX.Element {
  const { loading } = useContext(LoadingContext);
  const receivableRef = useRef<HTMLDivElement>(null);
  const isVisible = useInView(receivableRef, { threshold: 0 });

  // Memoized dropdowns so they don’t re-create on every render
  const receivableDropdowns = useMemo<DropdownItem[]>(
    () => [
      { title: "Automated Invoicing", content: "Generate, send, and track customer invoices in one click." },
      { title: "Payment Tracking", content: "Real-time view of outstanding, overdue, and incoming payments." },
      { title: "Receipts & Reconciliations", content: "Instantly post customer payments, AI matches receipts to open invoices." },
      { title: "Aging Analysis", content: "Visual dashboards and reports flag slow paying accounts for action." },
    ],
    []
  );

  const payableDropdowns = useMemo<DropdownItem[]>(
    () => [
      { title: "Smart Invoice Capture", content: "Snap or scan AI reads and maps them instantly." },
      { title: "Approval Routing", content: "Automated checks flag out-of-policy spends and duplicates." },
      { title: "Automated Payments", content: "Route expenses to the right managers for instant digital sign-off." },
      { title: "Supplier Payments", content: "See spend by department, project, or cost center in real time." },
      { title: "Payable Dashboard", content: "Submit, review, and approve on any device." },
    ],
    []
  );

  const expenseDropdowns = useMemo<DropdownItem[]>(
    () => [
      { title: "AI-Powered Capture", content: "Snap or scan AI reads and maps them instantly." },
      { title: "Policy Enforcement", content: "Automated checks flag out-of-policy spends and duplicates." },
      { title: "Approval Workflows", content: "Route expenses to the right managers for instant digital sign-off." },
      { title: "Live Dashboards", content: "See spend by department, project, or cost center in real time." },
      { title: "Mobile-Friendly", content: "Submit, review, and approve on any device no paper, no delays." },
    ],
    []
  );

  const financialDropdowns = useMemo<DropdownItem[]>(
    () => [
      { title: "Live Financials", content: "P&L, Balance Sheet, Trial Balance, and Cash Flow always up-to-date." },
      { title: "Regulatory Formats", content: "Instantly generate statements in KSA or IFRS layouts, as required." },
      { title: "Drill Down Detail", content: "Click any line for instant drill down to source transactions." },
      { title: "Division & Consolidation", content: "Produce division wise, consolidated, or project-based financials." },
      { title: "Export & Share", content: "One-click PDF/XLS export; schedule auto-email to management or auditors." },
    ],
    []
  );

  const operationsDropdowns = useMemo<DropdownItem[]>(
    () => [
      { title: "Live Financial Dashboards", content: "See your business performance in real time, visualized clearly." },
      { title: "Automated Bank Reconciliation", content: "Match transactions automatically and reduce manual effort." },
      { title: "Advanced Reporting", content: "Get deep insights with customizable, drill down reports." },
      { title: "Multi-Entity, Multi-Currency", content: "Consolidate accounts and report across companies or divisions in one click." },
      { title: "Customizable Chart of Accounts", content: "Adapt to any business or regulatory need flexibility without complexity." },
    ],
    []
  );

  if (loading || !isVisible) {
    return (
      <section
        ref={receivableRef}
        className="w-full max-w-[1280px] mx-auto px-6 md:px-[40px] py-6"
      >
        {loading || !isVisible ? (
          <div className="w-full space-y-6">
            {/* Accordion Section Skeleton */}
            <div className="w-full max-w-5xl mx-auto mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="bg-[#F2F2F2] rounded-lg p-6 h-[120px] flex flex-col justify-center w-full"
                >
                  <Skeleton className="w-8 h-8 rounded-full mb-3 block" />
                  <Skeleton className="h-6 flex-1 w-full block" />
                </div>
              ))}
            </div>

            {/* Use SectionSkeleton — it should also be full-width / min-height (see note below) */}
            <SectionSkeleton hasSubtitle />
            <SectionSkeleton hasSubtitle />
            <SectionSkeleton />
            <SectionSkeleton hasSubtitle bgWhite />
            <SectionSkeleton />
          </div>
        ) : (
          <div className="w-full">
            {/* === ORIGINAL VISIBLE CONTENT ===
              Keep the rest of your component as-is. I only moved the wrapper/ref.
          */}
            <div className="max-w-[1280px] mx-auto px-6 md:px-[40px] py-[24px] md:py-[32px]">
              {/* ...the Accordion, SectionWithAccordion components, etc (no change) */}
            </div>
          </div>
        )}
      </section>
    );
  }

  return (
    <div className="w-full">
      <div className="max-w-[1280px] mx-auto px-6 md:px-[40px] py-[24px] md:py-[32px]">
        <Accordion
          type="single"
          collapsible
          className="flex flex-col gap-4
        sm:grid sm:grid-cols-2
        md:grid md:grid-cols-2 md:max-w-5xl md:mb-[32px] mx-auto"
        >
          <AccordionCard
            value="card-1"
            icon="/images/business/books/Mask group.png"
            title="Custom Invoice Templates"
            content={
              <>Add your logo, adjust fields, and localize content
                no developer needed.</>
            }
          />

          <AccordionCard
            value="card-2"
            icon="/images/business/books/Mask group (1).png"
            title="Comprehensive Audit Trails "
            content={
              <>Every transaction and e-invoice is tracked, always audit ready for ZATCA and KSA requirements.</>
            }
          />
        </Accordion>
        {/* Receivables */}
        <SectionWithAccordion
          title="Accounts Receivable "
          subtitle="Accelerate your cash flow"
          description="Stay on top of collections and improve working capital  without chasing payments manually."
          items={receivableDropdowns}
          video="/videos/business/books/account-receivables.mp4"
        />

        {/* Payables */}
        <SectionWithAccordion
          title="Accounts Payable "
          subtitle="Control Vendor Spend"
          description="Eliminate late fees, maintain supplier trust, and get full visibility into every dirham out."
          items={payableDropdowns}
          video="/videos/business/books/Accounts_payables.mp4"
        />

        {/* Expenses */}
        <SectionWithAccordion
          title="Smart Expense Management"
          description="Control spending, eliminate manual errors, and boost accountability. Modernize every step of expense processing with automation, policy enforcement, and real-time tracking."
          items={expenseDropdowns}
          video="/videos/business/books/Smart_expense_management.mp4"
        />

        {/* Financial Statements */}
        <SectionWithAccordion
          title="Financial Statements "
          subtitle="Audit-Ready, Always-On"
          description="Move beyond monthly closings generate real-time, regulation ready financials anytime."
          items={financialDropdowns}
          video="/videos/business/books/Financial_statements.mp4"
          className="bg-white"
        />

        {/* Finance Operations */}
        <SectionWithAccordion
          title="Transform Your Finance Operations"
          description="Modern accounting isn’t about debits and credits it’s about business control, speed, and insight."
          items={operationsDropdowns}
          video="/videos/business/books/Transform_your_finance_operations.mp4"
        />
      </div>
    </div>
  );
}

interface SectionSkeletonProps {
  hasSubtitle?: boolean;
  bgWhite?: boolean;
}

/* Skeleton Subcomponent */
function SectionSkeleton({
  hasSubtitle = false,
  bgWhite = false,
}: SectionSkeletonProps): React.JSX.Element {
  return (
    <div className="my-6 md:my-[32px]">
      <section
        className={`${bgWhite ? "bg-white" : "bg-[#E8F1FB]"} border border-[#CECECE] py-6 px-6 md:p-[32px] rounded-xl md:rounded-2xl md:pb-10 lg:pb-20 mx-auto md:flex md:px-[32px] lg:px-10`}
      >
        {/* Left Content Column */}
        <div className="flex-1 md:max-w-[400px] lg:max-w-[520px]">
          {/* Title Skeleton */}
          <div className="pb-6 md:pb-[32px]">
            <Skeleton className="h-6 md:h-8 lg:h-10 w-3/4 mb-2" />
            {hasSubtitle && (
              <Skeleton className="h-5 md:h-7 lg:h-8 w-2/3" />
            )}
          </div>

          {/* Description Skeleton */}
          <div className="pb-6 md:pb-[32px] space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/5" />
            {!hasSubtitle && (
              <>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </>
            )}
          </div>

          {/* Accordion Items Skeleton */}
          <div className="w-full max-w-[400px] space-y-3">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="border-b border-[#E2E8F0] pb-3">
                <div className="flex justify-between items-center">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-4 rounded" />
                </div>
                <div className="mt-2">
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-5/6 mt-1" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Video Column */}
        <div className="flex-1 mt-6 lg:mt-0 flex justify-center items-center">
          <Skeleton className="rounded-lg w-full max-w-[500px] h-[250px] md:h-[300px] lg:h-[350px] xl:h-[420px]" />
        </div>
      </section>
    </div>
  );
}

interface SectionWithAccordionProps {
  title: string;
  subtitle?: string;
  description: string;
  items: DropdownItem[];
  video: string;
  className?: string;
}

/* Section With Accordion Subcomponent */
function SectionWithAccordion({
  title,
  subtitle,
  description,
  items,
  video,
  className,
}: SectionWithAccordionProps): React.JSX.Element {
  return (
    <FadeUp className="my-6 md:my-[32px] font-inter">
      <section
        className={`${className ?? "bg-[#E8F1FB]"} border border-[#CECECE] py-6 px-6 md:p-[32px] rounded-xl md:rounded-2xl md:pb-10 lg:pb-20 mx-auto md:flex md:px-[32px] lg:px-10`}
      >
        <div className="flex-1 md:max-w-[400px] lg:max-w-[520px]">
          <h2 className="text-[#1976D2] tracking-para text-[20px] font-medium md:text-[24px] lg:text-[30px] pb-4 leading-tight">
            {title} {subtitle}

          </h2>

          <p className="pb-6 md:pb-[32px] text-[#333333] tracking-para text-[14px] md:text-[16px] lg:text-[18px] leading-tight ">
            {description}
          </p>

          <Accordion type="single" collapsible className="w-full max-w-[400px]">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`${title.replace(/\s/g, "-")}-${index}`}
              >
                <AccordionTrigger className="text-[16px] md:text-[16px] lg:text-[18px] font-normal">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-[14px] md:text-[16px]  font-normal">
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
            aria-label={`${title} demo video`}
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </section>
    </FadeUp>
  );
}
