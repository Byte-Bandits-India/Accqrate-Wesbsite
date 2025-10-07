"use client";

import React, { useContext, useState, useEffect, JSX } from "react";
import { LoadingContext } from "../app/business/books/sections/utils/LoadingContext";
import { Skeleton } from "@/components/ui/skeleton";
import FadeUp from "./ui/FadeUp";

interface Section {
  title: string;
  items: string[];
}

interface SocialLink {
  href: string;
  src: string;
}

export default function Footer(): JSX.Element {
  const { loading } = useContext(LoadingContext);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [showSections, setShowSections] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setShowSections(window.innerWidth >= 1024); // show only on desktop
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("footerSection");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const sections: Section[] = [
    {
      title: "Accqrate-erp.com",
      items: ["Home", "Success Stories", "E-Invoicing solution", "Business solution", "ERP solution", "Testimonials"],
    },
    {
      title: "About",
      items: ["Company", "Demo Videos", "Careers", "Blogs", "Announcements", "Webinars", "Partner with Us", "FAQs"],
    },
    {
      title: "Featured Modules",
      items: ["E-Invoicing Software", "E-Invoicing Middleware", "Accounting Solutions", "Sales Management", "Purchase Management", "Inventory Management", "Fixed Asset Management"],
    },
    {
      title: "More Modules",
      items: ["Production Management", "Document Management", "HR & Payroll", "Services", "POS", "CRM"],
    },
    {
      title: "Data & Safety Management",
      items: ["Data Security", "Disaster Recovery", "Enhancements and Upgrades", "Application Support and Maintenance", "Terms and Conditions", "Privacy Policy", "Contact Support"],
    },
    {
      title: "Integrations",
      items: ["SAP suits", "Oracle suits", "Microsoft suits", "VAT Calculator"],
    },
  ];

  const socialLinks: SocialLink[] = [
    { href: "https://www.facebook.com/people/Accqrate/100077291530631/", src: "/images/business/books/facebook.svg" },
    { href: "https://www.linkedin.com/showcase/accqrate", src: "/images/business/books/linkedin.svg" },
    { href: "https://twitter.com/accqrate_erp", src: "/images/business/books/twitter.svg" },
    { href: "https://www.instagram.com/accqrateerp/", src: "/images/business/books/instagram.svg" },
    { href: "https://www.youtube.com/channel/UCAzO34h3KxRrObyRor70D9A", src: "/images/business/books/youtube.svg" },
    { href: "https://www.reddit.com/user/Accqrate_ERP", src: "/images/business/books/reddit.svg" },
    { href: "https://www.snapchat.com/add/accqrate", src: "/images/business/books/snapchat.svg" },
    { href: "https://api.whatsapp.com/send/?phone=966541999357&type=phone_number&app_absent=0", src: "/images/business/books/whatsapp.svg" },
  ];

  if (loading || !isVisible) {
    return (
      <footer id="footerSection" className="bg-white border-t border-gray-200 font-inter min-h-full mt-[5%]">
        {/* Sections Skeleton */}
        <div className="flex justify-between flex-nowrap max-w-[1400px] mx-auto px-4 py-10 text-black gap-8 overflow-x-auto">
          {sections.map((section, idx) => (
            <div key={idx} className="flex flex-col min-w-[150px]">
              {/* Section Title Skeleton */}
              <Skeleton className="h-6 w-3/4 mb-4" />

              {/* Section Items Skeleton */}
              <div className="space-y-2">
                {section.items.map((_, i) => (
                  <Skeleton
                    key={i}
                    className={`h-4 ${i % 2 === 0 ? 'w-full' : 'w-5/6'}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Social Links Skeleton */}
        <div className="flex flex-wrap justify-center gap-4 my-4 mt-5 mx-auto">
          {socialLinks.map((_, idx) => (
            <Skeleton
              key={idx}
              className="w-6 h-6 rounded-full"
            />
          ))}
        </div>

        {/* Copyright Skeleton */}
        <div className="border-t border-gray-200 w-full my-2 mx-auto py-8">
          <div className="text-center">
            <Skeleton className="h-4 w-64 mx-auto" />
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer id="footerSection" className="bg-white font-inter min-h-full mt-[5%]">
      {showSections && (
        <div className="flex justify-between flex-nowrap max-w-[1400px] mx-auto px-4 py-10 text-black gap-8 overflow-x-auto">
          {sections.map((section, idx) => (
            <FadeUp key={idx} className="flex flex-col">
              <h3 className="font-bold mb-4 text-[16px] leading-6 whitespace-normal break-words">{section.title}</h3>
              {section.items.map((item, i) => (
                <p key={i} className="mb-4 text-sm leading-5 text-gray-600 whitespace-normal break-words">{item}</p>
              ))}
            </FadeUp>
          ))}
        </div>
      )}

      <div>
        <FadeUp className="flex flex-wrap justify-center gap-3 md:gap-[20px] my-5 md:mb-6 mt-5 md:mt-[89px] mx-auto">
          {socialLinks.map(({ href, src }, idx) => (
            <a key={idx} href={href} target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
              <img src={src} alt="social icon" className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] " />
            </a>
          ))}
        </FadeUp>

        <FadeUp className="border-t border-black/25 w-full mx-auto py-[14px] md:py-[24px] text-center text-xs text-gray-600 px-6">
          © Copyright 2021 - 2025{" "}
          <span className="text-[#194BED] text-sm leading-6 font-medium">Accqrate</span>, All rights reserved.
        </FadeUp>
      </div>
    </footer>
  );
}