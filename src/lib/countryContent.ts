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
    backgroundImage: "/images/landingpage/sa.png",
    heroTitle: "Accqrate: The AI-Powered Modern ERP, E-invoicing, & Business Suite Built for Scale",
    heroSubtitle: "One Unified Platform. Infinite Possibilities.",
    heroDescription: "Experience the future of  ERP & E-Invoicing integrated, intelligent, and incredibly scalable. From Sales to Accounting, Payroll to Procurement, manage your entire business seamlessly on one secure, cloud-based or on-premise platform.",
    heroTagline: "Simple . Powerful . Designed for Tomorrow.",
    contactInfo: { phone: "+966 123 456 789", salesText: "Contact Sales KSA" },
    cards: [
      {
        icon: "/images/cards/crm.png",
        title: "CRM",
        description: "Lead capture, pipeline visibility and faster conversions.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/business/crm",
      },
      {
        icon: "/images/cards/books.png",
        title: "Books",
        description: "Accounting + sales, purchase, inventory & project accounting for MSMEs.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/business/books",
      },
      {
        icon: "/images/cards/people.png",
        title: "People",
        description: "HR & Payroll from hire to retire with local labor‑law compliance.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "/business/people",
      },
      {
        icon: "/images/cards/retail.png",
        title: "Retail",
        description: "Modern, device‑agnostic POS with 8‑hour deployment & e‑invoice.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/business/retail",
      },
      {
        icon: "/images/cards/factory.png",
        title: "Factory",
        description: "Production, inventory, costing & budgeting for manufacturers.",
        color: "linear-gradient(to right, #FFFFFF, #FFF3E6)",
        link: "/business/factory",
      },
      {
        icon: "/images/cards/E‑Invoicing.png",
        title: "E‑Invoicing",
        description: "Seamless, compliant connections to tax authorities.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "/e-invoicing",
      }
    ]
  },
  AE: {
    backgroundImage: "/images/landingpage/ua.png",
    heroTitle: "Accqrate: The AI-Powered Modern ERP, E-invoicing, & Business Suite Built for Scale",
    heroSubtitle: "One Unified Platform. Infinite Possibilities.",
    heroDescription: "Experience the future of  ERP & E-Invoicing integrated, intelligent, and incredibly scalable. From Sales to Accounting, Payroll to Procurement, manage your entire business seamlessly on one secure, cloud-based or on-premise platform.",
    heroTagline: "Simple . Powerful . Designed for Tomorrow.",
    contactInfo: { phone: "+971 123 456 789", salesText: "Contact Sales UAE" },
    cards: [
      {
        icon: "/images/cards/crm.png",
        title: "CRM",
        description: "Lead capture, pipeline visibility and faster conversions.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/business/crm",
      },
      {
        icon: "/images/cards/books.png",
        title: "Books",
        description: "Accounting + sales, purchase, inventory & project accounting for MSMEs.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/business/books",
      },
      {
        icon: "/images/cards/people.png",
        title: "People",
        description: "HR & Payroll from hire to retire with local labor‑law compliance.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "/business/people",
      },
      {
        icon: "/images/cards/retail.png",
        title: "Retail",
        description: "Modern, device‑agnostic POS with 8‑hour deployment & e‑invoice.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/business/retail",
      },
      {
        icon: "/images/cards/factory.png",
        title: "Factory",
        description: "Production, inventory, costing & budgeting for manufacturers.",
        color: "linear-gradient(to right, #FFFFFF, #FFF3E6)",
        link: "/business/factory",
      },
      {
        icon: "/images/cards/E‑Invoicing.png",
        title: "E‑Invoicing",
        description: "Seamless, compliant connections to tax authorities.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "/e-invoicing",
      }
    ]
  },
  OM: {
    backgroundImage: "/images/landingpage/om.png",
    heroTitle: "Accqrate: The AI-Powered Modern ERP, E-invoicing, & Business Suite Built for Scale",
    heroSubtitle: "One Unified Platform. Infinite Possibilities.",
    heroDescription: "Experience the future of  ERP & E-Invoicing integrated, intelligent, and incredibly scalable. From Sales to Accounting, Payroll to Procurement, manage your entire business seamlessly on one secure, cloud-based or on-premise platform.",
    heroTagline: "Simple . Powerful . Designed for Tomorrow.",
    contactInfo: { phone: "+968 123 456 789", salesText: "Contact Sales Oman" },
    cards: [
      {
        icon: "/images/cards/crm.png",
        title: "CRM",
        description: "Lead capture, pipeline visibility and faster conversions.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/business/crm",
      },
      {
        icon: "/images/cards/books.png",
        title: "Books",
        description: "Accounting + sales, purchase, inventory & project accounting for MSMEs.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/business/books",
      },
      {
        icon: "/images/cards/people.png",
        title: "People",
        description: "HR & Payroll from hire to retire with local labor‑law compliance.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "/business/people",
      },
      {
        icon: "/images/cards/retail.png",
        title: "Retail",
        description: "Modern, device‑agnostic POS with 8‑hour deployment & e‑invoice.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/business/retail",
      },
      {
        icon: "/images/cards/factory.png",
        title: "Factory",
        description: "Production, inventory, costing & budgeting for manufacturers.",
        color: "linear-gradient(to right, #FFFFFF, #FFF3E6)",
        link: "/business/factory",
      },
      {
        icon: "/images/cards/E‑Invoicing.png",
        title: "E‑Invoicing",
        description: "Seamless, compliant connections to tax authorities.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "/e-invoicing",
      }
    ]
  },
  BH: {
    backgroundImage: "/images/landingpage/bh.png",
    heroTitle: "Accqrate: The AI-Powered Modern ERP, E-invoicing, & Business Suite Built for Scale",
    heroSubtitle: "One Unified Platform. Infinite Possibilities.",
    heroDescription: "Experience the future of  ERP & E-Invoicing integrated, intelligent, and incredibly scalable. From Sales to Accounting, Payroll to Procurement, manage your entire business seamlessly on one secure, cloud-based or on-premise platform.",
    heroTagline: "Simple . Powerful . Designed for Tomorrow.",
    contactInfo: { phone: "+973 123 456 789", salesText: "Contact Sales Bahrain" },
    cards: [
      {
        icon: "/images/cards/crm.png",
        title: "CRM",
        description: "Lead capture, pipeline visibility and faster conversions.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/business/crm",
      },
      {
        icon: "/images/cards/books.png",
        title: "Books",
        description: "Accounting + sales, purchase, inventory & project accounting for MSMEs.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/business/books",
      },
      {
        icon: "/images/cards/people.png",
        title: "People",
        description: "HR & Payroll from hire to retire with local labor‑law compliance.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "/business/people",
      },
      {
        icon: "/images/cards/retail.png",
        title: "Retail",
        description: "Modern, device‑agnostic POS with 8‑hour deployment & e‑invoice.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/business/retail",
      },
      {
        icon: "/images/cards/factory.png",
        title: "Factory",
        description: "Production, inventory, costing & budgeting for manufacturers.",
        color: "linear-gradient(to right, #FFFFFF, #FFF3E6)",
        link: "/business/factory",
      },
      {
        icon: "/images/cards/E‑Invoicing.png",
        title: "E‑Invoicing",
        description: "Seamless, compliant connections to tax authorities.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "/e-invoicing",
      }
    ]
  },
  MA: {
    backgroundImage: "/images/landingpage/ma.png",
    heroTitle: "Accqrate: The AI-Powered Modern ERP, E-invoicing, & Business Suite Built for Scale",
    heroSubtitle: "One Unified Platform. Infinite Possibilities.",
    heroDescription: "Experience the future of  ERP & E-Invoicing integrated, intelligent, and incredibly scalable. From Sales to Accounting, Payroll to Procurement, manage your entire business seamlessly on one secure, cloud-based or on-premise platform.",
    heroTagline: "Simple . Powerful . Designed for Tomorrow.",
    contactInfo: { phone: "+60 123 456 789", salesText: "Contact Sales Malaysia" },
    cards: [
      {
        icon: "/images/cards/crm.png",
        title: "CRM",
        description: "Lead capture, pipeline visibility and faster conversions.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/business/crm",
      },
      {
        icon: "/images/cards/books.png",
        title: "Books",
        description: "Accounting + sales, purchase, inventory & project accounting for MSMEs.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/business/books",
      },
      {
        icon: "/images/cards/people.png",
        title: "People",
        description: "HR & Payroll from hire to retire with local labor‑law compliance.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "/business/people",
      },
      {
        icon: "/images/cards/retail.png",
        title: "Retail",
        description: "Modern, device‑agnostic POS with 8‑hour deployment & e‑invoice.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/business/retail",
      },
      {
        icon: "/images/cards/factory.png",
        title: "Factory",
        description: "Production, inventory, costing & budgeting for manufacturers.",
        color: "linear-gradient(to right, #FFFFFF, #FFF3E6)",
        link: "/business/factory",
      },
      {
        icon: "/images/cards/E‑Invoicing.png",
        title: "E‑Invoicing",
        description: "Seamless, compliant connections to tax authorities.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "/e-invoicing",
      }
    ]
  },
  MU: {
    backgroundImage: "/images/landingpage/mu.png",
    heroTitle: "Accqrate: The AI-Powered Modern ERP, E-invoicing, & Business Suite Built for Scale",
    heroSubtitle: "One Unified Platform. Infinite Possibilities.",
    heroDescription: "Experience the future of  ERP & E-Invoicing integrated, intelligent, and incredibly scalable. From Sales to Accounting, Payroll to Procurement, manage your entire business seamlessly on one secure, cloud-based or on-premise platform.",
    heroTagline: "Simple . Powerful . Designed for Tomorrow.",
    contactInfo: { phone: "+230 123 456 789", salesText: "Contact Sales Mauritius" },
    cards: [
      {
        icon: "/images/cards/crm.png",
        title: "CRM",
        description: "Lead capture, pipeline visibility and faster conversions.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/business/crm",
      },
      {
        icon: "/images/cards/books.png",
        title: "Books",
        description: "Accounting + sales, purchase, inventory & project accounting for MSMEs.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/business/books",
      },
      {
        icon: "/images/cards/people.png",
        title: "People",
        description: "HR & Payroll from hire to retire with local labor‑law compliance.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "/business/people",
      },
      {
        icon: "/images/cards/retail.png",
        title: "Retail",
        description: "Modern, device‑agnostic POS with 8‑hour deployment & e‑invoice.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/business/retail",
      },
      {
        icon: "/images/cards/factory.png",
        title: "Factory",
        description: "Production, inventory, costing & budgeting for manufacturers.",
        color: "linear-gradient(to right, #FFFFFF, #FFF3E6)",
        link: "/business/factory",
      },
      {
        icon: "/images/cards/E‑Invoicing.png",
        title: "E‑Invoicing",
        description: "Seamless, compliant connections to tax authorities.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "/e-invoicing",
      }
    ]
  },
  JD: {
    backgroundImage: "/images/landingpage/jd.png",
    heroTitle: "Accqrate: The AI-Powered Modern ERP, E-invoicing, & Business Suite Built for Scale",
    heroSubtitle: "One Unified Platform. Infinite Possibilities.",
    heroDescription: "Experience the future of  ERP & E-Invoicing integrated, intelligent, and incredibly scalable. From Sales to Accounting, Payroll to Procurement, manage your entire business seamlessly on one secure, cloud-based or on-premise platform.",
    heroTagline: "Simple . Powerful . Designed for Tomorrow.",
    contactInfo: { phone: "+962 123 456 789", salesText: "Contact Sales Jordan" },
    cards: [
      {
        icon: "/images/cards/crm.png",
        title: "CRM",
        description: "Lead capture, pipeline visibility and faster conversions.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/business/crm",
      },
      {
        icon: "/images/cards/books.png",
        title: "Books",
        description: "Accounting + sales, purchase, inventory & project accounting for MSMEs.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/business/books",
      },
      {
        icon: "/images/cards/people.png",
        title: "People",
        description: "HR & Payroll from hire to retire with local labor‑law compliance.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "/business/people",
      },
      {
        icon: "/images/cards/retail.png",
        title: "Retail",
        description: "Modern, device‑agnostic POS with 8‑hour deployment & e‑invoice.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/business/retail",
      },
      {
        icon: "/images/cards/factory.png",
        title: "Factory",
        description: "Production, inventory, costing & budgeting for manufacturers.",
        color: "linear-gradient(to right, #FFFFFF, #FFF3E6)",
        link: "/business/factory",
      },
      {
        icon: "/images/cards/E‑Invoicing.png",
        title: "E‑Invoicing",
        description: "Seamless, compliant connections to tax authorities.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "/e-invoicing",
      }
    ]
  }
};

export const getCountryContent = (countryCode: string): CountryContent => {
  return countryContentMap[countryCode as keyof typeof countryContentMap] || countryContentMap.SA;
};