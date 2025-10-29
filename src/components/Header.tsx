"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";
import { IoChevronDown } from "react-icons/io5";
import { useRouter, usePathname } from "next/navigation";
import { FaArrowRight } from "react-icons/fa6";
import { useCountry } from "@/contexts/CountryContext";
import { setLanguage } from "@/lib/translations";
import T from "@/components/T"
import { t } from "@/lib/translations";

// ===================== Type Definitions =====================
interface SubItem {
  title: string;
  description: string;
  href: string;
  img?: string;
  icon?: string;
  stats?: string;
}

interface Section {
  heading: string;
  description?: string;
  images?: string;
  xl?: string;
  subItems: SubItem[];
}

interface Menu {
  id: string;
  title: string;
  type: "mega" | "simple" | "stories";
  sections: Section[];
}

interface Language {
  code: string;
  name: string;
  display: string;
}

interface LangCountryDropdownProps {
  show: boolean;
  setShow: (show: boolean) => void;
  align?: "left" | "right";
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  className?: string;
  title: string;
  img?: string;
  href: string;
}

interface ResourcesListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  className?: string;
  title: string;
  icon?: string;
  img?: string;
  href: string;
}

interface SuccessStoriesListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  className?: string;
  title: string;
  stats?: string;
  href: string;
}

// ===================== Data =====================
const menus = [
  {
    id: "products",
    title: "Business Solution",
    type: "mega",
    sections: [
      {
        heading: "Business Solution",
        images: "/images/header/line/pro1.svg",
        xl: "/images/header/fill/Buisness solution.png",
        subItems: [
          {
            title: "Accqrate Books",
            description: "Manage customer relationships efficiently.",
            img: "/images/header/fill/Books.svg",
            href: "/business/books",
          },
          {
            title: "Accqrate Retail",
            description: "Automate HR workflows and employee management.",
            img: "/images/header/fill/retail.svg",
            href: "/business/retail",
          },
          {
            title: "Accqrate Factory",
            description: "Manage customer relationships efficiently.",
            img: "/images/header/fill/Factory.svg",
            href: "/business/factory",
          },
          {
            title: "Accqrate People",
            description: "Manage customer relationships efficiently.",
            img: "/images/header/fill/people.svg",
            href: "/business/people",
          },
          {
            title: "Accqrate CRM",
            description: "Manage customer relationships efficiently.",
            img: "/images/header/fill/crm.svg",
            href: "/business/crm",
          },
          {
            title: "Accqrate Plan360",
            description: "Automate HR workflows and employee management.",
            img: "/images/header/fill/plan.svg",
            href: "/business/plan360",
          },
          {
            title: "E-invoicing Integration Solution",
            description: "Service operations streamlined: assign, track, resolve, delight.",
            img: "/images/header/fill/e-invoice.svg",
            href: "/business/e-invoicing/accqrate",
          },
          {
            title: "Accqrate Filehub",
            description: "Automate HR workflows and employee management.",
            img: "/images/header/fill/Filehub.svg",
            href: "/business/fileHub",
          },
        ],
      },
    ],
  },
  {
    id: "e-invoicing",
    title: "E-invoicing",
    type: "mega",
    sections: [
      {
        heading: "E-invoicing",
        images: "/images/header/line/pro2.svg",
        xl: "/images/header/fill/e-invoicing/e-invoicing.png",
        subItems: [
          {
            title: "Accqrate E-Invoicing",
            description: "Effortless invoicing and compliance, ZATCA Phase 2 approved and enterprise-ready.",
            img: "/images/header/fill/e-invoicing/1.png",
            href: "/e-invoicing/accqrate",
          },
          {
            title: "E-Invoicing Integration",
            description: "Seamless ZATCA integration for any ERP, POS, or custom application.",
            img: "/images/header/fill/e-invoicing/2.png",
            href: "/e-invoicing/integration",
          },
          {
            title: "E-invoicing with SAP Suite",
            description: "Connect your SAP suite with ZATCA, Ready Packages.",
            img: "/images/header/fill/e-invoicing/3.png",
            href: "/e-invoicing/sap",
          },
          {
            title: "E-invoicing with Oracle Suite",
            description: "Enterprise-grade ZATCA compliance for Oracle ecosystems.",
            img: "/images/header/fill/e-invoicing/4.png",
            href: "/e-invoicing/oracle",
          },
          {
            title: "E-invoicing with Microsoft Suite",
            description: "ZATCA integration built for Microsoft Dynamics, Business Central, Navision and More",
            img: "/images/header/fill/e-invoicing/5.png",
            href: "/e-invoicing/microsoft",
          },
          {
            title: "E-invoicing with Legacy System",
            description: "Modern compliance without replacing your legacy infrastructure.",
            img: "/images/header/fill/e-invoicing/6.png",
            href: "/e-invoicing/legacy",
          },
          {
            title: "E-invoicing with Custom & Homegrown Systems",
            description: "Future-proof ZATCA integration for bespoke, popular and in-house applications.",
            img: "/images/header/fill/e-invoicing/7.png",
            href: "/e-invoicing/custom",
          },
          {
            title: "Multi-Country Integration with One Single Framework",
            description: "One global framework. Multiple countries. Unified e-invoicing compliance.",
            img: "/images/header/fill/e-invoicing/8.png",
            href: "/e-invoicing/multi-country",
          },
        ],
      },
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise Solution",
    type: "mega",
    sections: [
      {
        heading: "Enterprise Solution",
        description: "End-to-end ERP for large enterprises.",
        images: "/images/header/line/pro3.svg",
        xl: "/images/header/fill/Enterprise-Solution.png",
        subItems: [
          {
            title: "Accqrate ONE",
            description: "End-to-end ERP for large enterprises.",
            img: "/images/header/fill/one.svg",
            href: "/business/one",
          },
        ],
      },
    ],
  },
  {
    id: "resources",
    title: "Resources",
    type: "simple",
    sections: [
      {
        heading: "Learn",
        description: "Expand your knowledge with our comprehensive resources",
        subItems: [
          {
            title: "Blogs",
            description: "Insights, tips and industry news",
            href: "/resources/blogs",
            icon: "/images/header/fill/res/1.png",
          },
          {
            title: "Case Studies",
            description: "Live and recorded sessions from experts",
            href: "/resources/case-studies",
            icon: "/images/header/fill/res/2.png",
          },
          {
            title: "Newsletter",
            description: "Stay updated with the latest news and updates",
            href: "/resources/newsletter",
            icon: "/images/header/fill/res/3.png",
          },
          {
            title: "Developer Center",
            description: "Resources for developers and integrators",
            href: "/resources/developer-center",
            icon: "/images/header/fill/res/4.png",
          },
        ],
      },
      {
        heading: "Support",
        description: "Get help when you need it",
        subItems: [
          {
            title: "Announcements",
            description: "Find answers to common questions",
            href: "/resources/announcement",
            icon: "/images/header/fill/res/5.png",
          },
          {
            title: "FAQs",
            description: "Connect with other users",
            href: "/resources/faq",
            icon: "/images/header/fill/res/6.png",
          },
          {
            title: "Knowledge Center",
            description: "Comprehensive knowledge base",
            href: "/resources/knowledge-center",
            icon: "/images/header/fill/res/7.png",
          },
          {
            title: "Product Updates",
            description: "Latest product features and updates",
            href: "/resources/product-updates",
            icon: "/images/header/fill/res/8.png",
          },
        ],
      },
      {
        heading: "Engage",
        description: "Resources to get started quickly",
        subItems: [
          {
            title: "Events",
            description: "Upcoming events and webinars",
            href: "/resources/events",
            icon: "/images/header/fill/res/9.png",
          },
          {
            title: "Alternate Product",
            description: "Explore alternative solutions",
            href: "/resources/alternate-product",
            icon: "/images/header/fill/res/10.png",
          },
          {
            title: "Tax Calculator",
            description: "Calculate your tax obligations",
            href: "/resources/vat",
            icon: "/images/header/fill/res/11.png",
          },
          {
            title: "Branding Assets",
            description: "Download brand resources",
            href: "/resources/branding-assets",
            icon: "/images/header/fill/res/12.png",
          },
        ],
      },
    ],
  },
  {
    id: "community",
    title: "Community",
    type: "mega",
    sections: [
      {
        heading: "Community",
        description: "Join our growing community of users and partners",
        images: "/images/header/line/pro3.svg",
        xl: "/images/header/fill/community/community.png",
        subItems: [
          {
            title: "Find an Accountant",
            description: "Connect with Accqrate certified experts to manage accounting — stress-free and accurate.",
            img: "/images/header/fill/community/1.png",
            href: "/community/find-accountant",
          },
          {
            title: "Accqrate Sprouts",
            description: "Empowering young professionals & Students with tools to scale smart and grow faster.",
            img: "/images/header/fill/community/5.png",
            href: "/community/sprouts",
          },
          {
            title: "Become a Partner",
            description: "Grow with us, deliver digital transformation powered by Accqrate.",
            img: "/images/header/fill/community/2.png",
            href: "/community/become-partner",
          },
          {
            title: "Work with a Partner",
            description: "Team up with trusted professionals to accelerate successful implementations.",
            img: "/images/header/fill/community/6.png",
            href: "/community/work-with-partner",
          },
          {
            title: "Community Forum",
            description: "Where Accqrate users learn, share, and solve together.",
            img: "/images/header/fill/community/3.png",
            href: "/community/forum",
          },
          {
            title: "Partner Marketplace",
            description: "Discover certified partners and services tailored to your business needs.",
            img: "/images/header/fill/community/6.png",
            href: "/community/marketplace",
          },
          {
            title: "Non-Profit Solutions",
            description: "Advanced solutions for organizations creating impact",
            img: "/images/header/fill/community/7.png",
            href: "/community/non-profit",
          },
          {
            title: "Affiliates",
            description: "Earn by enabling businesses to transform with Accqrate.",
            img: "/images/header/fill/community/8.png",
            href: "/community/affiliates",
          },
        ],
      },
    ],
  },
];

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

// ===================== Country & Language Dropdown =====================
const LangCountryDropdown: React.FC<LangCountryDropdownProps & { className?: string }> = ({
  show,
  setShow,
  align = "left",
  className = "",
}) => {
  const { selectedCountry, setSelectedCountry, countries, selectedLanguage, setSelectedLanguage, languages, isInitialized } = useCountry();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (lang: any) => {
    console.log('🔄 Header: Changing language to:', lang.code);
    setSelectedLanguage(lang);

    if (lang.code === 'ar' || lang.code === 'en') {
      setLanguage(lang.code as 'en' | 'ar');
      console.log('✅ Translation system updated to:', lang.code);
    }

    const pathSegments = pathname.split('/');
    pathSegments[1] = lang.code;
    router.replace(pathSegments.join('/'));
    setShow(false);

    setTimeout(() => {
      window.dispatchEvent(new Event('storage'));
    }, 100);
  };

  const handleCountryChange = (country: any) => {
    console.log('🔄 Header: Changing country to:', country.code);
    setSelectedCountry(country);

    const pathSegments = pathname.split('/');
    if (pathSegments.length >= 3) {
      pathSegments[2] = country.code.toLowerCase();
    } else {
      pathSegments.push(country.code.toLowerCase());
    }

    router.push(pathSegments.join('/'));
    setShow(false);
  };

  useEffect(() => {
    if (pathname && isInitialized) {
      const segments = pathname.split('/').filter(segment => segment);

      if (segments.length >= 1) {
        const urlLang = segments[0];
        const foundLang = languages.find(l => l.code === urlLang);
        if (foundLang && foundLang.code !== selectedLanguage.code) {
          setSelectedLanguage(foundLang);
        }
      }

      if (segments.length >= 2) {
        const urlCountry = segments[1].toUpperCase();
        const foundCountry = countries.find(c => c.code === urlCountry);
        if (foundCountry && foundCountry.code !== selectedCountry.code) {
          setSelectedCountry(foundCountry);
        }
      }
    }
  }, [pathname, isInitialized, languages, countries, selectedLanguage.code, selectedCountry.code, setSelectedLanguage, setSelectedCountry]);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        className="flex items-center justify-between gap-2 w-36 lg:w-44 px-3 py-2 rounded-md transition-colors"
        onClick={() => setShow(!show)}
        disabled={!isInitialized}
      >
        {isInitialized ? (
          <>
            <img
              src={selectedCountry.flag}
              alt={selectedCountry.name}
              className="w-[30px] h-[30px] rounded"
            />
            <span className="text-black truncate text-sm lg:text-base">
              {selectedLanguage.display} / {selectedCountry.code}
            </span>
            <i className="fa-solid fa-angle-down ml-1 text-gray-600"></i>
          </>
        ) : (
          <span className="text-gray-500">Loading...</span>
        )}
      </button>

      {show && (
        <div
          className={`absolute ${align === "right" ? "right-0" : "left-0"} top-full mt-2 max-w-xs w-60 bg-white rounded-md shadow-lg z-50 p-4 text-sm text-gray-700`}
        >
          <div className="mb-2 font-semibold text-black">Select Language</div>
          <div className="flex flex-wrap gap-2 mb-4">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`px-3 py-1 rounded-full transition ${selectedLanguage.code === lang.code
                  ? "bg-gray-100 text-black font-semibold"
                  : "text-black"
                  }`}
                onClick={() => handleLanguageChange(lang)}
                style={{ border: "1px solid black", borderRadius: "20px" }}
              >
                {lang.display}
              </button>
            ))}
          </div>

          <div className="mb-2 font-semibold text-black">Select Country</div>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {countries.map((country) => (
              <div
                key={country.code}
                className={`flex items-center cursor-pointer p-2 rounded-md hover:bg-gray-50 ${selectedCountry.code === country.code ? 'bg-gray-100' : ''
                  }`}
                onClick={() => handleCountryChange(country)}
              >
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-5 h-5 mr-2 rounded"
                />
                <span className="text-black">{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Arrow
const Arrow45: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-3 h-3 transform -rotate-45"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

// ===================== Mega Menu Component =====================
const MegaMenu: React.FC<{
  menu: Menu;
  activeSection: string;
  onSectionChange: (section: string) => void;
  onItemClick: () => void;
  headerHeight: number;
}> = ({ menu, activeSection, onSectionChange, onItemClick, headerHeight }) => {
  const { createHref } = useDynamicRouting();
  const { isInitialized } = useCountry();
  const menuRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={menuRef}
      className="fixed left-0 right-0 top-0 w-[1044px] mx-auto border-t border-gray-200 bg-white rounded-b-xl z-50"
      style={{ top: headerHeight }}
    >
      <div className="w-[900px] xl:w-[1044px] mx-auto px-8 py-10 bg-white rounded-b-xl flex flex-col">
        <div className="grid grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
          {/* Left: category list */}
          <div className="col-span-1 border-r pr-6 mb-2">
            <h6 className="pl-2.5 font-semibold uppercase text-sm text-gray-500">
              <T>{menu.title}</T>
            </h6>
            <ul className="mt-3 space-y-6">
              {menu.sections.map((section) => (
                <li
                  key={section.heading}
                  className={`
                    cursor-pointer px-2 py-2 rounded-md transition-colors duration-200
                    ${activeSection === section.heading
                      ? "text-[#534ED3] bg-[#f0f3ff] xl:bg-transparent"
                      : "text-gray-700 hover:bg-[#f0f3ff] hover:text-[#534ED3] xl:hover:bg-transparent xl:hover:text-gray-700"
                    }
                  `}
                  onClick={() => onSectionChange(section.heading)}
                >
                  <div className="flex items-center gap-2">
                    {/* Mobile/Tablet image */}
                    {"images" in section && section.images && (
                      <img
                        src={section.images}
                        alt={section.heading}
                        className="w-4 h-4 xl:hidden"
                      />
                    )}

                    {/* XL image - only show if it exists */}
                    {"xl" in section && section.xl && (
                      <img
                        src={section.xl}
                        alt={`${section.heading} large`}
                        className="hidden xl:block w-[264px] h-[342px] object-contain"
                        onError={(e) => {
                          // Fallback if image fails to load
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    )}

                    <span className="xl:hidden">
                      <T>{section.heading}</T>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: subitems */}
          <div className="col-span-2 mb-2">
            <h6 className="pl-2.5 font-semibold uppercase text-sm text-gray-500 mb-3">
              {activeSection}
            </h6>
            <ul className="grid grid-cols-2 gap-3 mb-2">
              {menu.sections
                .find((sec) => sec.heading === activeSection)
                ?.subItems.map((item) => (
                  <ListItem
                    key={item.title}
                    title={isInitialized ? t(item.title) : item.title}
                    href={item.href}
                    img={"img" in item ? item.img : "icon" in item ? item.icon : undefined}
                    onClick={onItemClick}
                  >
                    <T>{item.description}</T>
                  </ListItem>
                ))}
            </ul>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="mt-auto -mx-8 -mb-10 bg-[#F7F8FF] flex justify-end py-4 gap-4 rounded-b-xl">
          <Link
            href={createHref("/book-demo")}
            className="group inline-flex items-center justify-center gap-2 py-2 px-6 rounded-[80px] text-[14px] hover:text-[#534ED3] transition-colors"
            onClick={onItemClick}
          >
            <T>Book a Demo</T>
            <span className="inline-block transform transition-transform duration-300 ease-out group-hover:translate-x-1">
              →
            </span>
          </Link>

          <span
            role="separator"
            aria-orientation="vertical"
            className="self-center h-8 w-px bg-gray-300"
          ></span>

          <Link
            href={createHref("/contact-sales")}
            className="group inline-flex items-center gap-2 py-2 px-6 rounded-[80px] text-[14px] hover:text-[#534ED3] transition-colors"
            onClick={onItemClick}
          >
            <T>Contact Sales</T>
            <span className="inline-block transform transition-transform duration-300 ease-out group-hover:translate-x-1">
              →
            </span>
          </Link>

          <span
            role="separator"
            aria-orientation="vertical"
            className="self-center h-8 w-px bg-gray-300"
          ></span>

          <Link
            href={createHref("/connect-with-concierge")}
            className="group inline-flex items-center gap-2 py-2 px-6 rounded-[80px] text-[14px] hover:text-[#534ED3] transition-colors"
            onClick={onItemClick}
          >
            <T>Connect with Concierge</T>
            <span className="inline-block transform transition-transform duration-300 ease-out group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

// ===================== Header =====================
const Header: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { selectedCountry } = useCountry();
  const [activeMenu, setActiveMenu] = useState<string>("");
  const [activeSection, setActiveSection] = useState<string>("Business Solution");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [showLangCountryDropdown, setShowLangCountryDropdown] = useState<boolean>(false);
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const { isInitialized } = useCountry();

  const navRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  const { createHref } = useDynamicRouting();

  const contactInfo = useMemo(() => {
    switch (selectedCountry.code) {
      case "SA":
        return { phone: "+966 123 456 789", salesText: "Contact Sales" };
      case "AE":
        return { phone: "+971 123 456 789", salesText: "Contact Sales" };
      case "OM":
        return { phone: "+968 123 456 789", salesText: "Contact Sales" };
      default:
        return { phone: "+966 123 456 789", salesText: "Contact Sales" };
    }
  }, [selectedCountry.code]);

  useEffect(() => {
    console.log("Header: Current country is:", selectedCountry);
  }, [selectedCountry]);

  useEffect(() => setIsMobileMenuOpen(false), [pathname]);

  useEffect(() => {
    const computeHeaderHeight = () => {
      const h = headerRef.current?.getBoundingClientRect().height || 0;
      setHeaderHeight(h);
    };
    computeHeaderHeight();
    window.addEventListener("resize", computeHeaderHeight);
    window.addEventListener("load", computeHeaderHeight);
    return () => {
      window.removeEventListener("resize", computeHeaderHeight);
      window.removeEventListener("load", computeHeaderHeight);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setActiveMenu("");
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuClick = (menuId: string) => {
    setActiveMenu((prev) => (prev === menuId ? "" : menuId));
    // Set default section based on menu
    if (menuId === "products") setActiveSection("Business Solution");
    if (menuId === "e-invoicing") setActiveSection("E-invoicing");
    if (menuId === "enterprise") setActiveSection("Enterprise Solution");
    if (menuId === "community") setActiveSection("Community");
  };

  const handleMenuItemClick = () => setActiveMenu("");
  const handleSectionChange = (sectionHeading: string) => setActiveSection(sectionHeading);

  return (
    <>
      {activeMenu && (
        <div className="nav-overlay fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={() => setActiveMenu("")} />
      )}

      <header
        ref={headerRef}
        className="xl:sticky xl:top-0 z-50 m-0 p-0 w-full bg-white xl:border-b border-gray-200 pb-4 xl:pb-0"
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="w-full px-6 pt-6 xl:pt-0 md:px-[32px]">
            <div className="flex items-center justify-between gap-2">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href={createHref("/")} className="shrink-0">
                  <img
                    src="/images/business/books/logo.svg"
                    alt="Accqrate Logo"
                    className="h-[1.620rem] w-auto cursor-pointer max-w-[115px] sm:max-w-[100px] md:max-w-[140px]"
                  />
                </Link>
              </div>

              {/* Center: Desktop Nav */}
              <div className="logo-container flex items-center justify-start flex-1">
                <nav
                  ref={navRef}
                  className="hidden xl:flex items-start justify-center gap-5 text-[14px] text-gray-600"
                >
                  <ul className="flex items-center py-4">
                    {/* PRODUCTS */}
                    {menus
                      .filter((menu) => menu.id === "products")
                      .map((menu) => (
                        <li key={menu.id} className="relative">
                          <button
                            className={`flex items-center gap-1 px-3 py-2 font-normal rounded-md transition-colors hover:bg-[#f0f3ff] ${activeMenu === menu.id
                              ? "text-[#534ED3]"
                              : "text-gray-700 hover:text-[#534ED3]"
                              }`}
                            onClick={() => handleMenuClick(menu.id)}
                          >
                            <span>
                              <T>{menu.title}</T>
                            </span>
                            <IoChevronDown
                              className={`transition-transform duration-200 ${activeMenu === menu.id ? "rotate-180" : "rotate-0"
                                }`}
                            />
                          </button>

                          {activeMenu === menu.id && (
                            <MegaMenu
                              menu={menu as Menu}
                              activeSection={activeSection}
                              onSectionChange={handleSectionChange}
                              onItemClick={handleMenuItemClick}
                              headerHeight={headerHeight}
                            />
                          )}
                        </li>
                      ))}

                    {/* E-INVOICING */}
                    {menus
                      .filter((menu) => menu.id === "e-invoicing")
                      .map((menu) => (
                        <li key={menu.id} className="relative">
                          <button
                            className={`flex items-center gap-1 px-3 py-2 font-normal rounded-md transition-colors hover:bg-[#f0f3ff] ${activeMenu === menu.id
                              ? "text-[#534ED3]"
                              : "text-gray-700 hover:text-[#534ED3]"
                              }`}
                            onClick={() => handleMenuClick(menu.id)}
                          >
                            <span>
                              <T>{menu.title}</T>
                            </span>
                            <IoChevronDown
                              className={`transition-transform duration-200 ${activeMenu === menu.id ? "rotate-180" : "rotate-0"
                                }`}
                            />
                          </button>

                          {activeMenu === menu.id && (
                            <MegaMenu
                              menu={menu as Menu}
                              activeSection={activeSection}
                              onSectionChange={handleSectionChange}
                              onItemClick={handleMenuItemClick}
                              headerHeight={headerHeight}
                            />
                          )}
                        </li>
                      ))}

                    {/* ENTERPRISE SOLUTION */}
                    {menus
                      .filter((menu) => menu.id === "enterprise")
                      .map((menu) => (
                        <li key={menu.id} className="relative">
                          <button
                            className={`flex items-center gap-1 px-3 py-2 font-normal rounded-md transition-colors hover:bg-[#f0f3ff] ${activeMenu === menu.id
                              ? "text-[#534ED3]"
                              : "text-gray-700 hover:text-[#534ED3]"
                              }`}
                            onClick={() => handleMenuClick(menu.id)}
                          >
                            <span>
                              <T>{menu.title}</T>
                            </span>
                            <IoChevronDown
                              className={`transition-transform duration-200 ${activeMenu === menu.id ? "rotate-180" : "rotate-0"
                                }`}
                            />
                          </button>

                          {activeMenu === menu.id && (
                            <MegaMenu
                              menu={menu as Menu}
                              activeSection={activeSection}
                              onSectionChange={handleSectionChange}
                              onItemClick={handleMenuItemClick}
                              headerHeight={headerHeight}
                            />
                          )}
                        </li>
                      ))}

                    {/* RESOURCES */}
                    {menus
                      .filter((menu) => menu.id === "resources")
                      .map((menu) => (
                        <li key={menu.id} className="relative">
                          <button
                            className={`flex items-center gap-1 px-3 py-2 font-normal rounded-md transition-colors hover:bg-[#f0f3ff] ${activeMenu === menu.id
                              ? "text-[#534ED3]"
                              : "text-gray-700 hover:text-[#534ED3]"
                              }`}
                            onClick={() => handleMenuClick(menu.id)}
                          >
                            <span>
                              <T>{menu.title}</T>
                            </span>
                            <IoChevronDown
                              className={`transition-transform duration-200 ${activeMenu === menu.id ? "rotate-180" : "rotate-0"
                                }`}
                            />
                          </button>

                          {activeMenu === menu.id && (
                            <div
                              className="fixed left-0 right-0 top-0 w-[1044px] mx-auto border-t border-gray-200 bg-white rounded-b-xl z-50"
                              style={{ top: headerHeight }}
                            >
                              <div className="w-[900px] xl:w-[1044px] mx-auto px-8 py-10 bg-white rounded-b-xl flex flex-col">
                                <div className="w-full max-w-7xl mx-auto mb-2">
                                  <h6 className="pl-2.5 font-semibold uppercase text-sm text-gray-500 mb-6">
                                    <T>Resources</T>
                                  </h6>
                                  <div className="grid grid-cols-3 gap-8">
                                    {menu.sections.map((section, index) => (
                                      <div
                                        key={index}
                                        className="border-r last:border-r-0 pr-6 last:pr-0"
                                      >
                                        <h3 className="font-semibold text-lg mb-2">
                                          <T>{section.heading}</T>
                                        </h3>
                                        <ul className="space-y-4">
                                          {section.subItems.map((item, i) => (
                                            <ResourcesListItem
                                              key={i}
                                              title={isInitialized ? t(item.title) : item.title}
                                              href={item.href}
                                              img={"img" in item ? item.img : "icon" in item ? item.icon : undefined}
                                              onClick={handleMenuItemClick}
                                            />
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* CTA Footer */}
                                <div className="mt-auto -mx-8 -mb-10 bg-[#F7F8FF] flex justify-end py-4 gap-4 rounded-b-xl">
                                  <Link
                                    href={createHref("/book-demo")}
                                    className="group inline-flex items-center justify-center gap-2 py-2 px-6 rounded-[80px] text-[14px] hover:text-[#534ED3] transition-colors"
                                    onClick={handleMenuItemClick}
                                  >
                                    <T>Book a Demo</T>
                                    <span className="inline-block transform transition-transform duration-300 ease-out group-hover:translate-x-1">
                                      →
                                    </span>
                                  </Link>

                                  <span
                                    role="separator"
                                    aria-orientation="vertical"
                                    className="self-center h-8 w-px bg-gray-300"
                                  ></span>

                                  <Link
                                    href={createHref("/contact-sales")}
                                    className="group inline-flex items-center gap-2 py-2 px-6 rounded-[80px] text-[14px] hover:text-[#534ED3] transition-colors"
                                    onClick={handleMenuItemClick}
                                  >
                                    <T>{contactInfo.salesText}</T>
                                    <span className="inline-block transform transition-transform duration-300 ease-out group-hover:translate-x-1">
                                      →
                                    </span>
                                  </Link>
                                  <span
                                    role="separator"
                                    aria-orientation="vertical"
                                    className="self-center h-8 w-px bg-gray-300"
                                  ></span>

                                  <Link
                                    href={createHref("/connect-with-concierge")}
                                    className="group inline-flex items-center gap-2 py-2 px-6 rounded-[80px] text-[14px] hover:text-[#534ED3] transition-colors"
                                  >
                                    <T>Connect with Concierge</T>
                                    <span className="inline-block transform transition-transform duration-300 ease-out group-hover:translate-x-1">
                                      →
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          )}
                        </li>
                      ))}

                    {/* COMMUNITY */}
                    {menus
                      .filter((menu) => menu.id === "community")
                      .map((menu) => (
                        <li key={menu.id} className="relative">
                          <button
                            className={`flex items-center gap-1 px-3 py-2 font-normal rounded-md transition-colors hover:bg-[#f0f3ff] ${activeMenu === menu.id
                              ? "text-[#534ED3]"
                              : "text-gray-700 hover:text-[#534ED3]"
                              }`}
                            onClick={() => handleMenuClick(menu.id)}
                          >
                            <span>
                              <T>{menu.title}</T>
                            </span>
                            <IoChevronDown
                              className={`transition-transform duration-200 ${activeMenu === menu.id ? "rotate-180" : "rotate-0"
                                }`}
                            />
                          </button>

                          {activeMenu === menu.id && (
                            <MegaMenu
                              menu={menu as Menu}
                              activeSection={activeSection}
                              onSectionChange={handleSectionChange}
                              onItemClick={handleMenuItemClick}
                              headerHeight={headerHeight}
                            />
                          )}
                        </li>
                      ))}
                  </ul>
                </nav>
              </div>

              {/* Right section */}
              <div className="hidden md:flex items-center gap-2 shrink-0">
                <LangCountryDropdown
                  show={showLangCountryDropdown}
                  setShow={setShowLangCountryDropdown}
                  align="right"
                />
                <Link
                  href={createHref("/contact-sales")}
                  className="hidden xl:inline-flex items-center justify-center gap-2 text-[#F05A28] h-[41px] w-[155px] rounded-[80px] text-[14px] border border-[#29266E] bg-gradient-to-r from-[#194BED] to-[#29266E] bg-clip-text text-transparent"
                >
                  <T>{contactInfo.salesText}</T>
                </Link>
                <Link
                  href={createHref("/book-demo")}
                  className="hidden xl:inline-flex items-center justify-center gap-2 text-white h-[41px] w-[155px] rounded-[80px] text-[14px] bg-gradient-to-r from-[#194BED] to-[#29266E]"
                >
                  <T>Book a Demo</T>
                  <span className="inline-block mt-0.5"><FaArrowRight /></span>
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                className="block bg-transparent border-none text-gray-700 text-2xl cursor-pointer shrink-0 xl:hidden"
                aria-label="Toggle mobile menu"
                onClick={() => setIsMobileMenuOpen((p) => !p)}
              >
                <div className="w-[36px] h-[20px] flex items-center justify-center">
                  <i className={`fa-solid ${isMobileMenuOpen ? "fa-xmark" : "fa-bars"} text-[28px]`}></i>
                </div>
              </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="xl:hidden fixed top-[60px] md:top-[80px] left-0 w-full h-screen overflow-y-auto bg-white px-6 md:px-[32px] py-4 z-[999]">
                <Accordion type="single" collapsible className="w-full">
                  {menus.map(({ id, title, sections }) => (
                    <AccordionItem key={id} value={id}>
                      <AccordionTrigger className="text-gray-800 font-semibold hover:text-[#534ED3]">
                        <T>{title}</T>
                      </AccordionTrigger>
                      <AccordionContent>
                        <Accordion type="single" collapsible className="pl-4">
                          {sections.map((section, sectionIndex) => (
                            <AccordionItem key={sectionIndex} value={`${id}-${section.heading}`}>
                              <AccordionTrigger className="flex items-center justify-start gap-2 text-gray-700 font-medium">
                                {'images' in section && section.images && (
                                  <img src={section.images} alt={section.heading} className="w-4 h-4" />
                                )}
                                <span><T>{section.heading}</T></span>
                              </AccordionTrigger>
                              <AccordionContent>
                                <ul className="pl-4 mt-2 space-y-2">
                                  {section.subItems.map((item, i) => (
                                    <li
                                      key={i}
                                      className="flex items-center gap-2 text-[#737373] text-[14px] py-2 cursor-pointer border-b border-gray-200 hover:text-[#534ED3]"
                                    >
                                      {'img' in item && item.img && (
                                        <img src={item.img} alt={item.title} className="w-5 h-5" />
                                      )}
                                      <Link
                                        href={createHref(item.href)}
                                        className="flex-1"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                      >
                                        <T>{item.title}</T>
                                      </Link>
                                      <Arrow45 />
                                    </li>
                                  ))}
                                </ul>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {/* CTA Buttons */}
                <div className="mt-10 flex gap-4">
                  <Link
                    href={createHref("/contact-sales")}
                    className="block w-full text-center text-[#F05A28] border border-[#29266E] bg-gradient-to-r from-[#194BED] to-[#29266E] bg-clip-text text-transparent py-3 rounded-full text-sm font-bold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <T>{contactInfo.salesText}</T>
                  </Link>
                  <Link
                    href={createHref("/book-demo")}
                    className="block w-full text-center text-white py-3 rounded-full text-sm font-bold bg-gradient-to-r from-[#194BED] to-[#29266E]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <T>Book a Demo</T>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

// ===================== List Item Components =====================

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, img, href, onClick, ...props }, ref) => {
    const { createHref } = useDynamicRouting();
    const dynamicHref = createHref(href);

    return (
      <li>
        <Link
          href={dynamicHref}
          className="flex items-start space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer"
          onClick={onClick}
          {...props}
        >
          {img && (
            <img src={img} alt={title} className="w-[45px] h-[45px] mr-3" />
          )}
          <div>
            <div className="text-sm font-semibold leading-none">{title}</div>
            <p className="line-clamp-2 text-[12px] text-slate-500 leading-snug text-muted-foreground">
              {children}
            </p>
          </div>
        </Link>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";

const ResourcesListItem = React.forwardRef<HTMLAnchorElement, ResourcesListItemProps>(
  ({ className, title, children, icon, img, href, onClick, ...props }, ref) => {
    const { createHref } = useDynamicRouting();
    const dynamicHref = createHref(href);

    return (
      <li>
        <Link
          href={dynamicHref}
          className="flex items-start space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#f0f3ff] hover:text-[#534ED3] focus:bg-[#f0f3ff] cursor-pointer"
          onClick={onClick}
          {...props}
        >
          <div className="w-8 h-8 flex items-center justify-center rounded-full mr-3">
            {(() => {
              const source = img || icon;
              if (!source) return null;
              const isImagePath =
                /^\.|^\//.test(source) ||
                /\.(png|jpe?g|svg|webp|gif)$/i.test(source);
              if (isImagePath) {
                const normalized = source.replace(/^\.\//, "/");
                return (
                  <img
                    src={normalized}
                    alt={title}
                    className="w-6 h-6 object-contain"
                  />
                );
              }
              return (
                <i
                  className={`fa-solid ${source} text-gray-600`}
                  aria-hidden="true"
                ></i>
              );
            })()}
          </div>
          <div>
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </div>
        </Link>
      </li>
    );
  }
);
ResourcesListItem.displayName = "ResourcesListItem";

const SuccessStoriesListItem = React.forwardRef<HTMLAnchorElement, SuccessStoriesListItemProps>(
  ({ className, title, children, stats, href, onClick, ...props }, ref) => {
    const { createHref } = useDynamicRouting();
    const dynamicHref = createHref(href);

    return (
      <li>
        <Link
          href={dynamicHref}
          className="block rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 focus:bg-gray-50 cursor-pointer border border-gray-200"
          onClick={onClick}
          {...props}
        >
          <div className="text-sm font-medium leading-none mb-1">{title}</div>
          <p className="text-sm leading-snug text-muted-foreground mb-2">
            {children}
          </p>
          {stats && (
            <div className="text-xs font-semibold text-[#F05A28] bg-orange-50 px-2 py-1 rounded-full inline-block">
              {stats}
            </div>
          )}
        </Link>
      </li>
    );
  }
);
SuccessStoriesListItem.displayName = "SuccessStoriesListItem";

export default Header;