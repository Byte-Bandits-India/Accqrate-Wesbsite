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
    heroTitle: "Accqrate: The AI-Powered Modern ERP, E-invoicing, & Business Suite Built for Scale in Saudi Arabia",
    heroSubtitle: "One Unified Platform. Infinite Possibilities for KSA Businesses.",
    heroDescription: "Experience the future of ERP & E-Invoicing integrated, intelligent, and incredibly scalable. From Sales to Accounting, Payroll to Procurement, manage your entire business seamlessly on one secure, cloud-based or on-premise platform. Fully compliant with ZATCA regulations.",
    heroTagline: "Simple · Powerful · ZATCA Compliant",
    contactInfo: { phone: "+966 123 456 789", salesText: "Contact Sales KSA" },
    cards: [
      {
        icon: "/images/cards/crm.png",
        title: "CRM",
        description: "Lead capture, pipeline visibility and faster conversions with KSA market focus.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/sa/business/crm",
      },
      {
        icon: "/images/cards/books.png",
        title: "Books",
        description: "Accounting + sales, purchase, inventory & project accounting for Saudi MSMEs.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/sa/business/books",
      },
      {
        icon: "/images/cards/people.png",
        title: "People",
        description: "HR & Payroll from hire to retire with Saudi labor-law compliance.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "/sa/business/people",
      },
      {
        icon: "/images/cards/retail.png",
        title: "Retail",
        description: "Modern, device-agnostic POS with 8-hour deployment & ZATCA e-invoice.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/sa/business/retail",
      },
      {
        icon: "/images/cards/factory.png",
        title: "Factory",
        description: "Production, inventory, costing & budgeting for Saudi manufacturers.",
        color: "linear-gradient(to right, #FFFFFF, #FFF3E6)",
        link: "/sa/business/factory",
      },
      {
        icon: "/images/cards/E‑Invoicing.png",
        title: "E‑Invoicing",
        description: "Seamless, ZATCA compliant connections to Saudi tax authorities.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "/sa/e-invoicing",
      }
    ]
  },
  AE: {
    backgroundImage: "/images/landingpage/ua.png",
    heroTitle: "Accqrate: Modern ERP & Business Solutions for UAE Enterprises",
    heroSubtitle: "Streamlined Operations for UAE Business Excellence",
    heroDescription: "Transform your UAE business with our comprehensive ERP suite. From Dubai to Abu Dhabi, we provide tailored solutions that meet local regulatory requirements while driving operational efficiency.",
    heroTagline: "Efficient · Compliant · UAE Focused",
    contactInfo: { phone: "+971 123 456 789", salesText: "Contact Sales UAE" },
    cards: [
      {
        icon: "/images/cards/crm.png",
        title: "CRM",
        description: "Lead capture and pipeline management optimized for UAE market dynamics.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/ae/business/crm",
      },
      {
        icon: "/images/cards/books.png",
        title: "Books",
        description: "Accounting solutions tailored for UAE VAT compliance and business needs.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/ae/business/books",
      },
      {
        icon: "/images/cards/people.png",
        title: "People",
        description: "HR & Payroll with UAE labor law compliance and WPS integration.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "/ae/business/people",
      },
      {
        icon: "/images/cards/retail.png",
        title: "Retail",
        description: "Modern POS solutions for Dubai and Abu Dhabi retail markets.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/ae/business/retail",
      },
      {
        icon: "/images/cards/factory.png",
        title: "Factory",
        description: "Manufacturing solutions for UAE industrial zones and free zones.",
        color: "linear-gradient(to right, #FFFFFF, #FFF3E6)",
        link: "/ae/business/factory",
      },
    ]
  },
  OM: {
    backgroundImage: "/images/landingpage/om.png",
    heroTitle: "Accqrate: Business Solutions for Omani Enterprises",
    heroSubtitle: "Empowering Omani Businesses with Digital Transformation",
    heroDescription: "Leverage our comprehensive business suite designed specifically for the Omani market. From Muscat to Salalah, drive efficiency and compliance across your operations.",
    heroTagline: "Reliable · Scalable · Oman Ready",
    contactInfo: { phone: "+968 123 456 789", salesText: "Contact Sales Oman" },
    cards: [
      {
        icon: "/images/cards/crm.png",
        title: "CRM",
        description: "Customer relationship management for Omani business culture.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/om/business/crm",
      },
      {
        icon: "/images/cards/books.png",
        title: "Books",
        description: "Accounting solutions compliant with Oman tax regulations.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/om/business/books",
      },
      {
        icon: "/images/cards/people.png",
        title: "People",
        description: "HR & Payroll with Omani labor law compliance.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "/om/business/people",
      },
      {
        icon: "/images/cards/retail.png",
        title: "Retail",
        description: "POS solutions for Muscat and Salalah retail markets.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/om/business/retail",
      },
      {
        icon: "/images/cards/factory.png",
        title: "Factory",
        description: "Manufacturing solutions for Omani industrial sectors.",
        color: "linear-gradient(to right, #FFFFFF, #FFF3E6)",
        link: "/om/business/factory",
      },
      {
        icon: "/images/cards/E‑Invoicing.png",
        title: "E‑Invoicing",
        description: "Oman tax authority compliant e-invoicing solutions.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "/om/e-invoicing",
      }
    ]
  },
  BH: {
    backgroundImage: "/images/landingpage/bh.png",
    heroTitle: "Accqrate: Innovative Solutions for Bahraini Businesses",
    heroSubtitle: "Driving Digital Excellence in Bahrain",
    heroDescription: "Transform your Bahraini enterprise with our tailored business solutions. From Manama to Riffa, experience seamless operations and regulatory compliance.",
    heroTagline: "Innovative · Compliant · Bahrain Focused",
    contactInfo: { phone: "+973 123 456 789", salesText: "Contact Sales Bahrain" },
    cards: [
      {
        icon: "/images/cards/crm.png",
        title: "CRM",
        description: "Customer management solutions for Bahraini market dynamics.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/bh/business/crm",
      },
      {
        icon: "/images/cards/books.png",
        title: "Books",
        description: "Accounting with Bahrain VAT compliance and financial reporting.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/bh/business/books",
      },
      {
        icon: "/images/cards/people.png",
        title: "People",
        description: "HR & Payroll compliant with Bahrain labor regulations.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "/bh/business/people",
      },
      {
        icon: "/images/cards/retail.png",
        title: "Retail",
        description: "POS solutions for Manama and Bahrain retail sector.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/bh/business/retail",
      },
      {
        icon: "/images/cards/factory.png",
        title: "Factory",
        description: "Manufacturing solutions for Bahrain industrial areas.",
        color: "linear-gradient(to right, #FFFFFF, #FFF3E6)",
        link: "/bh/business/factory",
      },
      {
        icon: "/images/cards/E‑Invoicing.png",
        title: "E‑Invoicing",
        description: "Bahrain NBR compliant e-invoicing solutions.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "/bh/e-invoicing",
      }
    ]
  },
  MA: {
    backgroundImage: "/images/landingpage/ma.png",
    heroTitle: "Accqrate: Business Solutions for Malaysia",
    heroSubtitle: "Digital Transformation for Malaysian Enterprises",
    heroDescription: "Empower your Malaysian business with our comprehensive ERP solutions tailored for the local market requirements and business practices.",
    heroTagline: "Adaptive · Efficient · Malaysia Ready",
    contactInfo: { phone: "+60 123 456 789", salesText: "Contact Sales Malaysia" },
    cards: [
      {
        icon: "/images/cards/crm.png",
        title: "CRM",
        description: "Customer relationship management for Malaysian businesses.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/ma/business/crm",
      },
      {
        icon: "/images/cards/books.png",
        title: "Books",
        description: "Accounting with SST compliance and Malaysian financial standards.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/ma/business/books",
      },
      {
        icon: "/images/cards/people.png",
        title: "People",
        description: "HR & Payroll with EPF, SOCSO, and EIS compliance.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "/ma/business/people",
      },
      {
        icon: "/images/cards/retail.png",
        title: "Retail",
        description: "POS solutions for Kuala Lumpur and Malaysian retail markets.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/ma/business/retail",
      },
      {
        icon: "/images/cards/factory.png",
        title: "Factory",
        description: "Manufacturing solutions for Malaysian industrial sectors.",
        color: "linear-gradient(to right, #FFFFFF, #FFF3E6)",
        link: "/ma/business/factory",
      },
      {
        icon: "/images/cards/E‑Invoicing.png",
        title: "E‑Invoicing",
        description: "MyInvois and LHDN compliant e-invoicing solutions.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "/ma/e-invoicing",
      }
    ]
  },
  MU: {
    backgroundImage: "/images/landingpage/mu.png",
    heroTitle: "Accqrate: Business Solutions for Mauritius",
    heroSubtitle: "Driving Business Excellence in Mauritius",
    heroDescription: "Transform your Mauritian enterprise with our comprehensive business suite designed for the unique needs of the island's economy.",
    heroTagline: "Reliable · Efficient · Mauritius Focused",
    contactInfo: { phone: "+230 123 456 789", salesText: "Contact Sales Mauritius" },
    cards: [
      {
        icon: "/images/cards/crm.png",
        title: "CRM",
        description: "Customer management for Mauritian business environment.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/mu/business/crm",
      },
      {
        icon: "/images/cards/books.png",
        title: "Books",
        description: "Accounting with MRA compliance and Mauritian standards.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/mu/business/books",
      },
      {
        icon: "/images/cards/people.png",
        title: "People",
        description: "HR & Payroll with Mauritius labor regulations compliance.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "/mu/business/people",
      },
      {
        icon: "/images/cards/retail.png",
        title: "Retail",
        description: "POS solutions for Port Louis and Mauritian retail sector.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/mu/business/retail",
      },
      {
        icon: "/images/cards/factory.png",
        title: "Factory",
        description: "Manufacturing solutions for Mauritian EPZ companies.",
        color: "linear-gradient(to right, #FFFFFF, #FFF3E6)",
        link: "/mu/business/factory",
      },
      {
        icon: "/images/cards/E‑Invoicing.png",
        title: "E‑Invoicing",
        description: "Mauritius MRA compliant e-invoicing solutions.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "/mu/e-invoicing",
      }
    ]
  },
  JD: {
    backgroundImage: "/images/landingpage/jd.png",
    heroTitle: "Accqrate: Business Solutions for Jordan",
    heroSubtitle: "Empowering Jordanian Enterprises with Digital Innovation",
    heroDescription: "Leverage our comprehensive business solutions tailored for the Jordanian market, driving efficiency and growth across your operations.",
    heroTagline: "Innovative · Scalable · Jordan Ready",
    contactInfo: { phone: "+962 123 456 789", salesText: "Contact Sales Jordan" },
    cards: [
      {
        icon: "/images/cards/crm.png",
        title: "CRM",
        description: "Customer relationship management for Jordanian businesses.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/jd/business/crm",
      },
      {
        icon: "/images/cards/books.png",
        title: "Books",
        description: "Accounting with Jordanian tax compliance and standards.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/jd/business/books",
      },
      {
        icon: "/images/cards/people.png",
        title: "People",
        description: "HR & Payroll with Jordanian labor law compliance.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "/jd/business/people",
      },
      {
        icon: "/images/cards/retail.png",
        title: "Retail",
        description: "POS solutions for Amman and Jordanian retail markets.",
        color: "linear-gradient(to right, #FFFFFF, #FCF1FF)",
        link: "/jd/business/retail",
      },
      {
        icon: "/images/cards/factory.png",
        title: "Factory",
        description: "Manufacturing solutions for Jordanian industrial zones.",
        color: "linear-gradient(to right, #FFFFFF, #FFF3E6)",
        link: "/jd/business/factory",
      },
      {
        icon: "/images/cards/E‑Invoicing.png",
        title: "E‑Invoicing",
        description: "Jordanian tax authority compliant e-invoicing solutions.",
        color: "linear-gradient(to right, #FFFFFF, #E7FFE8)",
        link: "/jd/e-invoicing",
      }
    ]
  }
};

export const getCountryContent = (countryCode: string): CountryContent => {
  return countryContentMap[countryCode as keyof typeof countryContentMap] || countryContentMap.SA;
};