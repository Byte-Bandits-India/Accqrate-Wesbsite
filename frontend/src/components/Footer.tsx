"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { comingSoonRoutes } from '@/lib/ComingSoonRoutes'


// ===================== Custom Hook for Dynamic Routing =====================
const useDynamicRouting = () => {
  const pathname = usePathname();

  const createHref = (path: string): string => {
    const segments = pathname.split('/').filter(segment => segment);
    const lang = segments[0] || 'en';
    const countryCode = segments[1] || 'sa';
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `/${lang}/${countryCode}${cleanPath}`;
  };

  return { createHref };
};

export default function Footer() {
  const { createHref } = useDynamicRouting();

  const footerSections = [
    {
      title: "E-invoicing Solution",
      items: [
        { name: "Accqrate E-invoicing", href: "/e-invoicing/accqrate" },
        { name: "Integration Solution", href: "/e-invoicing/integration" },
        { name: "Integration with SAP Suite", href: "/e-invoicing/sap" },
        { name: "Integration with Microsoft Suite", href: "/e-invoicing/microsoft" },
        { name: "Integration with Oracle Suite", href: "/e-invoicing/oracle" },
        { name: "Integration with Homegrown Solution", href: "/e-invoicing/custom" },
        { name: "Integration with Legacy Solutions", href: "/e-invoicing/legacy" },
        { name: "Multi Country Integration", href: "/e-invoicing/multi-country" },
      ],
    },
    {
      title: "Business Solution",
      items: [
        { name: "Accqrate Books", href: "/business/books" },
        { name: "Accqrate Retail", href: "/business/retail" },
        { name: "Accqrate People", href: "/business/people" },
        { name: "Accqrate CRM", href: "/business/crm" },
        { name: "Accqrate Factory", href: "/business/factory" },
        { name: "Accqrate Plan 360", href: "/business/plan360" },
        { name: "Accqrate Services", href: "/business/services" },
        { name: "Accqrate FileHub", href: "/business/fileHub" },
      ],
    },
    {
      title: "Resources",
      items: [
        { name: "FAQ", href: "/resources/faq" },
        { name: "Blogs", href: "/resources/blogs" },
        { name: "Events", href: "/resources/events" },
        { name: "Case Studies", href: "/resources/case-studies" },
        { name: "Announcements", href: "/resources/announcement" },
        { name: "Product Updates", href: "/resources/product-updates" },
        { name: "Alternate Product", href: "/resources/alternate-product" },
        { name: "Knowledge Center", href: "/resources/knowledge-center" },
      ],
    },
    {
      title: "Community",
      items: [
        { name: "Affiliates", href: "/community/affiliates" },
        { name: "Non Profits", href: "/community/non-profit" },
        { name: "Accqrate Sprouts", href: "/community/sprouts" },
        { name: "Become a Partner", href: "/community/become-partner" },
        { name: "Community Forum", href: "/community/forum" },
        { name: "Work with a Partner", href: "/community/work-with-partner" },
        { name: "Find an Accountant", href: "/community/find-accountant" },
        { name: "Partner Marketplace", href: "/community/marketplace" },
      ],
    },
    {
      title: "Data & Safety management",
      items: [
        { name: "Security", href: "/security" },
        { name: "Contact us", href: "/contact-us" },
        { name: "Compliance", href: "/compliance" },
        { name: "Cookie Policy", href: "/cookie-policy" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "GDPR Policies", href: "/gdpr" },
        { name: "Terms of Service", href: "/terms" },
        { name: "IPR Complaints", href: "/ipr-complaints" },
      ],
    },
  ];

  const leftColumnLinks = [
    { name: "Home", href: "/" },
    { name: "Company", href: "/about-us" },
    { name: "Accelera", href: "/accelera" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Join our Team", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Newsletter", href: "/resources/newsletter" },
    { name: "Branding Assets", href: "/resources/branding-assets" },
  ];

  const enterpriseLinks = [
    { name: "Assessments", href: "/assessments" },
    { name: "Accqrate ONE", href: "/business/one" },
    { name: "Custom Developments", href: "/custom-development" },
    { name: "Business Process Automations", href: "/bpa" },
  ];

  return (
    <footer className="bg-[#212121] font-inter text-black overflow-x-hidden">
      {/* ---------- Main Footer Section ---------- */}
      <div className="hidden xl:block max-w-[1600px] mx-auto px-8 py-12">
        <div className="flex justify-between items-start gap-12">
          {/* ---------- Left Column (Logo + Links) ---------- */}
          <div className="flex flex-col border-r border-gray-300 xl:pr-12 min-w-[220px]">
            <Link href={createHref("/")}>
              <Image
                src="/images/white.png"
                alt="Accqrate logo"
                width={160}
                height={50}
                className="mb-4 cursor-pointer"
              />
            </Link>
            <div className="flex flex-col space-y-[34px] lg:text-[16px] underline mt-[32px]">
              {leftColumnLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={
                    comingSoonRoutes.includes(link.href.replace(/^\//, ''))
                      ? createHref('/coming-soon')
                      : createHref(link.href)
                  }
                  className="hover:text-[#194BED] text-[#FFFFFF] tracking-para transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* ---------- Right Column (Main + Enterprise) ---------- */}
          <div className="flex flex-col flex-grow">
            {/* Main footer columns */}
            <div className="flex justify-between gap-4 xl:gap-8">
              {footerSections.map((section, idx) => (
                <div key={idx} className="flex flex-col min-w-[180px]">
                  <h3 className="font-medium mb-6 text-[#FFFFFF] lg:text-[16px] tracking-heading">
                    {section.title}
                  </h3>
                  <ul className="space-y-2 lg:text-[14px] font-normal">
                    {section.items.map((item, i) => (
                      <li key={i}>
                        <Link
                          key={i}
                          href={
                            comingSoonRoutes.includes(item.href.replace(/^\//, ''))
                              ? createHref('/coming-soon')
                              : createHref(item.href)
                          }
                          className={`hover:text-[#194BED] text-[#F0F0F0] tracking-para transition-colors ${comingSoonRoutes.includes(item.href.replace(/^\//, ''))
                            }`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Enterprise section BELOW main columns */}
            <div className="border-t border-gray-300 mt-12 pt-8 flex justify-start gap-6 text-sm text-gray-700">
              <div>
                <h4 className="font-medium mb-4 text-[#FFFFFF] text-fluid-small lg:text-[16px]  tracking-heading">
                  Enterprise Solution
                </h4>
                <ul className="space-y-2 lg:text-[14px] text-[#F0F0F0]">
                  {enterpriseLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={
                          comingSoonRoutes.includes(link.href.replace(/^\//, ''))
                            ? createHref('/coming-soon')
                            : createHref(link.href)
                        }
                        className="hover:text-[#194BED] tracking-para transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-4 lg:text-[16px]  text-[#FFFFFF] tracking-heading">Contact Sales</h4>
                <ul className="space-y-2 lg:text-[14px] text-[#F0F0F0] tracking-para">
                  <li><span className="text-[#FFFFFF]">Call:</span> +966 54 199 9357</li>
                  <li><span className="text-[#FFFFFF]">Email:</span> contact@accqrate-erp.com</li>
                  <li><span className="text-[#FFFFFF]">WhatsApp:</span> +966 50 763 5216</li>
                  <li>
                    <Link
                      href={
                        comingSoonRoutes.includes('connect-with-concierge')
                          ? createHref('/coming-soon')
                          : createHref('/connect-with-concierge')
                      }
                      className="text-[#FFFFFF] hover:underline transition-colors"
                    >
                      Connect with Accqrate Concierge
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="max-w-[400px] leading-6 flex items-start justify-start">
                <p className="lg:text-[14px] text-[#F0F0F0] tracking-para">
                  One unified platform with zero silos—integrated modules on a single data model, global compliance built-in, AI-powered automation, flexible cloud or on-prem deployment, fast implementation, and enterprise-grade security and scalability.
                </p>
              </div>
            </div>

            <div className="hidden">
              <div className="flex justify-end space-x-5 mt-4">
                {[
                  "facebook",
                  "linkedin",
                  "twitter",
                  "instagram",
                  "youtube",
                  "reddit",
                  "snapchat",
                  "whatsapp",
                ].map((icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="hover:scale-110 transition-transform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={`/images/${icon}.svg`}
                      alt={icon}
                      width={22}
                      height={22}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Mobile Footer Section ---------- */}
      <div className="hidden xl:hidden max-w-[1600px] mx-auto py-8 px-8">
        <div className="flex justify-center space-x-5">
          {[
            "facebook",
            "linkedin",
            "twitter",
            "instagram",
            "youtube",
            "reddit",
            "snapchat",
            "whatsapp",
          ].map((icon, idx) => (
            <a
              key={idx}
              href="#"
              className="hover:scale-110 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={`/images/${icon}.svg`}
                alt={icon}
                width={22}
                height={22}
              />
            </a>
          ))}
        </div>
      </div>

      {/* ---------- Bottom Section ---------- */}
      <div className="max-w-[1600px] mx-auto pb-8 py-8 flex flex-col items-center">
        {/* Line with logo in center */}
        <div className="w-full flex items-center justify-center mb-6">
          <div className="flex-grow h-[1px] bg-gray-300"></div>
          <Link href={createHref("/")}>
            <Image
              src="/images/footerlogo.png"
              alt="Accqrate"
              width={160}
              height={50}
              className="mx-6 cursor-pointer"
            />
          </Link>
          <div className="flex-grow h-[1px] bg-gray-300"></div>
        </div>

        {/* Copyright */}
        <p className="text-fluid-small lg:text-[16px] text-[#B7B7B7] text-center">
          © Copyright 2021 - 2025{" "}
          <span className="text-[#194BED] font-medium">Accqrate</span>, All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}