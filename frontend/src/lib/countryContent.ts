// utils/countryContent.ts

export interface Card {
    icon: string;
    title: string;
    description: string;
    color: string;
    link: string;
}

export interface CountryContent {
  backgroundImage: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroTagline: string;
  contactInfo: {
    phone: string;
    salesText: string;
  };
  cards: Card[];
}

export const countryContentMap: Record<string, CountryContent> = {
  SA: {
    backgroundImage: "/images/home/saudi.webp",
    heroTitle: "Accqrate: The AI-Powered Modern ERP, E-invoicing, & Business Suite Built for Scale",
    heroSubtitle: "One Unified Platform. Infinite Possibilities.",
    heroDescription: "Experience the future of  ERP & E-Invoicing integrated, intelligent, and incredibly scalable. From Sales to Accounting, Payroll to Procurement, manage your entire business seamlessly on one secure, cloud-based or on-premise platform.",
    heroTagline: "Simple . Powerful . Designed for Tomorrow.",
    contactInfo: { phone: "+966 123 456 789", salesText: "Contact Sales KSA" },
    cards: [
      {
        icon: "/images/cards/crm.png",
        title: "CRM",
        description: "Automate leads. Boost conversions.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "SA/business/crm",
      },
      {
        icon: "/images/cards/books.png",
        title: "Books",
        description: "Smart accounting made simple.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "SA/business/books",
      },
      {
        icon: "/images/cards/people.png",
        title: "People",
        description: "Complete HR & payroll solution",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "SA/business/people",
      },
      {
        icon: "/images/cards/retail.png",
        title: "Retail",
        description: "All-in-one smart retail POS.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "SA/business/retail",
      },
      {
        icon: "/images/cards/factory.png",
        title: "Factory",
        description: "Optimize full manufacturing process.",
        color: "linear-gradient(to right, #FFFFFF, #FFF3E6)",
        link: "SA/business/factory",
      },
      {
        icon: "/images/cards/E‑Invoicing.png",
        title: "E‑Invoicing",
        description: "Seamless, compliant tax integration.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "SA/business/e-invoicing-standalone",
      }
    ]
  },
  AE: {
    backgroundImage: "/images/home/uae.webp",
    heroTitle: "Accqrate: The AI-Powered Modern ERP, E-invoicing, & Business Suite Built for Scale",
    heroSubtitle: "One Unified Platform. Infinite Possibilities.",
    heroDescription: "Experience the future of  ERP & E-Invoicing integrated, intelligent, and incredibly scalable. From Sales to Accounting, Payroll to Procurement, manage your entire business seamlessly on one secure, cloud-based or on-premise platform.",
    heroTagline: "Simple . Powerful . Designed for Tomorrow.",
    contactInfo: { phone: "+971 123 456 789", salesText: "Contact Sales UAE" },
    cards: [
      {
        icon: "/images/cards/crm.png",
        title: "CRM",
        description: "Automate leads. Boost conversions.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "SA/business/crm",
      },
      {
        icon: "/images/cards/books.png",
        title: "Books",
        description: "Smart accounting made simple.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "SA/business/books",
      },
      {
        icon: "/images/cards/people.png",
        title: "People",
        description: "Complete HR & payroll solution",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "SA/business/people",
      },
      {
        icon: "/images/cards/retail.png",
        title: "Retail",
        description: "All-in-one smart retail POS.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "SA/business/retail",
      },
      {
        icon: "/images/cards/factory.png",
        title: "Factory",
        description: "Optimize full manufacturing process.",
        color: "linear-gradient(to right, #FFFFFF, #FFF3E6)",
        link: "SA/business/factory",
      },
      {
        icon: "/images/cards/E‑Invoicing.png",
        title: "E‑Invoicing",
        description: "Seamless, compliant tax integration.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "SA/business/e-invoicing-standalone",
      }
    ]
  },
  OM: {
    backgroundImage: "/images/home/oman.webp",
    heroTitle: "Accqrate: The AI-Powered Modern ERP, E-invoicing, & Business Suite Built for Scale",
    heroSubtitle: "One Unified Platform. Infinite Possibilities.",
    heroDescription: "Experience the future of  ERP & E-Invoicing integrated, intelligent, and incredibly scalable. From Sales to Accounting, Payroll to Procurement, manage your entire business seamlessly on one secure, cloud-based or on-premise platform.",
    heroTagline: "Simple . Powerful . Designed for Tomorrow.",
    contactInfo: { phone: "+968 123 456 789", salesText: "Contact Sales Oman" },
    cards: [
      {
        icon: "/images/cards/crm.png",
        title: "CRM",
        description: "Automate leads. Boost conversions.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "SA/business/crm",
      },
      {
        icon: "/images/cards/books.png",
        title: "Books",
        description: "Smart accounting made simple.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "SA/business/books",
      },
      {
        icon: "/images/cards/people.png",
        title: "People",
        description: "Complete HR & payroll solution",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "SA/business/people",
      },
      {
        icon: "/images/cards/retail.png",
        title: "Retail",
        description: "All-in-one smart retail POS.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "SA/business/retail",
      },
      {
        icon: "/images/cards/factory.png",
        title: "Factory",
        description: "Optimize full manufacturing process.",
        color: "linear-gradient(to right, #FFFFFF, #FFF3E6)",
        link: "SA/business/factory",
      },
      {
        icon: "/images/cards/E‑Invoicing.png",
        title: "E‑Invoicing",
        description: "Seamless, compliant tax integration.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "SA/business/e-invoicing-standalone",
      }
    ]
  },
  BH: {
    backgroundImage: "/images/home/baharaim.webp",
    heroTitle: "Accqrate: The AI-Powered Modern ERP, E-invoicing, & Business Suite Built for Scale",
    heroSubtitle: "One Unified Platform. Infinite Possibilities.",
    heroDescription: "Experience the future of  ERP & E-Invoicing integrated, intelligent, and incredibly scalable. From Sales to Accounting, Payroll to Procurement, manage your entire business seamlessly on one secure, cloud-based or on-premise platform.",
    heroTagline: "Simple . Powerful . Designed for Tomorrow.",
    contactInfo: { phone: "+973 123 456 789", salesText: "Contact Sales Bahrain" },
    cards: [
      {
        icon: "/images/cards/crm.png",
        title: "CRM",
        description: "Automate leads. Boost conversions.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "SA/business/crm",
      },
      {
        icon: "/images/cards/books.png",
        title: "Books",
        description: "Smart accounting made simple.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "SA/business/books",
      },
      {
        icon: "/images/cards/people.png",
        title: "People",
        description: "Complete HR & payroll solution",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "SA/business/people",
      },
      {
        icon: "/images/cards/retail.png",
        title: "Retail",
        description: "All-in-one smart retail POS.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "SA/business/retail",
      },
      {
        icon: "/images/cards/factory.png",
        title: "Factory",
        description: "Optimize full manufacturing process.",
        color: "linear-gradient(to right, #FFFFFF, #FFF3E6)",
        link: "SA/business/factory",
      },
      {
        icon: "/images/cards/E‑Invoicing.png",
        title: "E‑Invoicing",
        description: "Seamless, compliant tax integration.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "SA/business/e-invoicing-standalone",
      }
    ]
  },
  MA: {
    backgroundImage: "/images/home/malaysia.webp",
    heroTitle: "Accqrate: The AI-Powered Modern ERP, E-invoicing, & Business Suite Built for Scale",
    heroSubtitle: "One Unified Platform. Infinite Possibilities.",
    heroDescription: "Experience the future of  ERP & E-Invoicing integrated, intelligent, and incredibly scalable. From Sales to Accounting, Payroll to Procurement, manage your entire business seamlessly on one secure, cloud-based or on-premise platform.",
    heroTagline: "Simple . Powerful . Designed for Tomorrow.",
    contactInfo: { phone: "+60 123 456 789", salesText: "Contact Sales Malaysia" },
    cards: [
      {
        icon: "/images/cards/crm.png",
        title: "CRM",
        description: "Automate leads. Boost conversions.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "SA/business/crm",
      },
      {
        icon: "/images/cards/books.png",
        title: "Books",
        description: "Smart accounting made simple.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "SA/business/books",
      },
      {
        icon: "/images/cards/people.png",
        title: "People",
        description: "Complete HR & payroll solution",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "SA/business/people",
      },
      {
        icon: "/images/cards/retail.png",
        title: "Retail",
        description: "All-in-one smart retail POS.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "SA/business/retail",
      },
      {
        icon: "/images/cards/factory.png",
        title: "Factory",
        description: "Optimize full manufacturing process.",
        color: "linear-gradient(to right, #FFFFFF, #FFF3E6)",
        link: "SA/business/factory",
      },
      {
        icon: "/images/cards/E‑Invoicing.png",
        title: "E‑Invoicing",
        description: "Seamless, compliant tax integration.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "SA/business/e-invoicing-standalone",
      }
    ]
  },
  MU: {
    backgroundImage: "/images/home/mautitius.webp",
    heroTitle: "Accqrate: The AI-Powered Modern ERP, E-invoicing, & Business Suite Built for Scale",
    heroSubtitle: "One Unified Platform. Infinite Possibilities.",
    heroDescription: "Experience the future of  ERP & E-Invoicing integrated, intelligent, and incredibly scalable. From Sales to Accounting, Payroll to Procurement, manage your entire business seamlessly on one secure, cloud-based or on-premise platform.",
    heroTagline: "Simple . Powerful . Designed for Tomorrow.",
    contactInfo: { phone: "+230 123 456 789", salesText: "Contact Sales Mauritius" },
    cards: [
      {
        icon: "/images/cards/crm.png",
        title: "CRM",
        description: "Automate leads. Boost conversions.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "SA/business/crm",
      },
      {
        icon: "/images/cards/books.png",
        title: "Books",
        description: "Smart accounting made simple.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "SA/business/books",
      },
      {
        icon: "/images/cards/people.png",
        title: "People",
        description: "Complete HR & payroll solution",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "SA/business/people",
      },
      {
        icon: "/images/cards/retail.png",
        title: "Retail",
        description: "All-in-one smart retail POS.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "SA/business/retail",
      },
      {
        icon: "/images/cards/factory.png",
        title: "Factory",
        description: "Optimize full manufacturing process.",
        color: "linear-gradient(to right, #FFFFFF, #FFF3E6)",
        link: "SA/business/factory",
      },
      {
        icon: "/images/cards/E‑Invoicing.png",
        title: "E‑Invoicing",
        description: "Seamless, compliant tax integration.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "SA/business/e-invoicing-standalone",
      }
    ]
  },
  JD: {
    backgroundImage: "/images/home/jordan.webp",
    heroTitle: "Accqrate: The AI-Powered Modern ERP, E-invoicing, & Business Suite Built for Scale",
    heroSubtitle: "One Unified Platform. Infinite Possibilities.",
    heroDescription: "Experience the future of  ERP & E-Invoicing integrated, intelligent, and incredibly scalable. From Sales to Accounting, Payroll to Procurement, manage your entire business seamlessly on one secure, cloud-based or on-premise platform.",
    heroTagline: "Simple . Powerful . Designed for Tomorrow.",
    contactInfo: { phone: "+962 123 456 789", salesText: "Contact Sales Jordan" },
    cards: [
      {
        icon: "/images/cards/crm.png",
        title: "CRM",
        description: "Automate leads. Boost conversions.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "SA/business/crm",
      },
      {
        icon: "/images/cards/books.png",
        title: "Books",
        description: "Smart accounting made simple.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "SA/business/books",
      },
      {
        icon: "/images/cards/people.png",
        title: "People",
        description: "Complete HR & payroll solution",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "SA/business/people",
      },
      {
        icon: "/images/cards/retail.png",
        title: "Retail",
        description: "All-in-one smart retail POS.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "SA/business/retail",
      },
      {
        icon: "/images/cards/factory.png",
        title: "Factory",
        description: "Optimize full manufacturing process.",
        color: "linear-gradient(to right, #FFFFFF, #FFF3E6)",
        link: "SA/business/factory",
      },
      {
        icon: "/images/cards/E‑Invoicing.png",
        title: "E‑Invoicing",
        description: "Seamless, compliant tax integration.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "SA/business/e-invoicing-standalone",
      }
    ]
  },
  BE: {
    backgroundImage: "/images/home/jordan.webp",
    heroTitle: "Accqrate: The AI-Powered Modern ERP, E-invoicing, & Business Suite Built for Scale",
    heroSubtitle: "One Unified Platform. Infinite Possibilities.",
    heroDescription: "Experience the future of  ERP & E-Invoicing integrated, intelligent, and incredibly scalable. From Sales to Accounting, Payroll to Procurement, manage your entire business seamlessly on one secure, cloud-based or on-premise platform.",
    heroTagline: "Simple . Powerful . Designed for Tomorrow.",
    contactInfo: { phone: "+962 123 456 789", salesText: "Contact Sales Jordan" },
    cards: [
      {
        icon: "/images/cards/crm.png",
        title: "CRM",
        description: "Automate leads. Boost conversions.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "SA/business/crm",
      },
      {
        icon: "/images/cards/books.png",
        title: "Books",
        description: "Smart accounting made simple.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "SA/business/books",
      },
      {
        icon: "/images/cards/people.png",
        title: "People",
        description: "Complete HR & payroll solution",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "SA/business/people",
      },
      {
        icon: "/images/cards/retail.png",
        title: "Retail",
        description: "All-in-one smart retail POS.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "SA/business/retail",
      },
      {
        icon: "/images/cards/factory.png",
        title: "Factory",
        description: "Optimize full manufacturing process.",
        color: "linear-gradient(to right, #FFFFFF, #FFF3E6)",
        link: "SA/business/factory",
      },
      {
        icon: "/images/cards/E‑Invoicing.png",
        title: "E‑Invoicing",
        description: "Seamless, compliant tax integration.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "SA/business/e-invoicing-standalone",
      }
    ]
  },
  PL: {
    backgroundImage: "/images/home/jordan.webp",
    heroTitle: "Accqrate: The AI-Powered Modern ERP, E-invoicing, & Business Suite Built for Scale",
    heroSubtitle: "One Unified Platform. Infinite Possibilities.",
    heroDescription: "Experience the future of  ERP & E-Invoicing integrated, intelligent, and incredibly scalable. From Sales to Accounting, Payroll to Procurement, manage your entire business seamlessly on one secure, cloud-based or on-premise platform.",
    heroTagline: "Simple . Powerful . Designed for Tomorrow.",
    contactInfo: { phone: "+962 123 456 789", salesText: "Contact Sales Jordan" },
    cards: [
      {
        icon: "/images/cards/crm.png",
        title: "CRM",
        description: "Automate leads. Boost conversions.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "SA/business/crm",
      },
      {
        icon: "/images/cards/books.png",
        title: "Books",
        description: "Smart accounting made simple.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "SA/business/books",
      },
      {
        icon: "/images/cards/people.png",
        title: "People",
        description: "Complete HR & payroll solution",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "SA/business/people",
      },
      {
        icon: "/images/cards/retail.png",
        title: "Retail",
        description: "All-in-one smart retail POS.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "SA/business/retail",
      },
      {
        icon: "/images/cards/factory.png",
        title: "Factory",
        description: "Optimize full manufacturing process.",
        color: "linear-gradient(to right, #FFFFFF, #FFF3E6)",
        link: "SA/business/factory",
      },
      {
        icon: "/images/cards/E‑Invoicing.png",
        title: "E‑Invoicing",
        description: "Seamless, compliant tax integration.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "SA/business/e-invoicing-standalone",
      }
    ]
  }
};

export const getCountryContent = (countryCode: string): CountryContent => {
  return countryContentMap[countryCode as keyof typeof countryContentMap] || countryContentMap.SA;
};