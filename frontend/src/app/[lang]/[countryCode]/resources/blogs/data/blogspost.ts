interface BlogPost {
  id: number;
  url: string;
  title: string;
  image: string;
  desc: string;
  country: string;
  alt?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    url: "credit-note",
    title: "Integrating Credit Notes with ZATCA: A Comprehensive Guide",
    image: "/images/blogs/credit-notes.webp",
    desc: "The credit note, also known as a credit memo, plays a pivotal role in business financial transactions...",
    country: "KSA"
  },
  {
    id: 2,
    url: "debit-note",
    title: "Integration of Debit Memos with ZATCA: An In-Depth Overview",
    image: "/images/blogs/debit-notes.webp",
    desc: "Navigating the financial landscape of today, especially with ZATCA Phase 2 integration, can be intricate...",
    country: "KSA"
  },
  {
    id: 3,
    url: "zatca-invoicing",
    title: "Understanding ZATCA E-Invoicing Phase 2 Waves in Saudi Arabia",
    image: "/images/blogs/zatca-einvocing-phase2.webp",
    desc: "Each wave targets businesses based on specific annual revenue thresholds and includes a grace period...",
    country: "KSA"
  },
  {
    id: 4,
    url: "oracle-invoicing",
    title: "Oracle E-invoicing Integration with ZATCA Phase 2: A Seamless Fusion",
    image: "/images/blogs/zatcaintegration-with-oracle.webp",
    desc: "Oracle Fusion, a predominant ERP solution in Saudi Arabia, requires the Oracle Integration Cloud (OIC)...",
    country: "KSA"
  },
  {
    id: 5,
    url: "microsoft365",
    title: "Microsoft Dynamics 365 E-invoicing and Integration with ZATCA Phase 2",
    image: "/images/blogs/zatcaintegration-with-microsoft365.webp",
    desc: "As one of the top-tier ERP providers in Saudi Arabia, Microsoft Dynamics 365 caters to medium and large enterprises...",
    country: "KSA"
  },
  {
    id: 6,
    url: "zatca-comprehensive-guide",
    title: "Advance Invoice and Prepayment Invoices in ZATCA: A Comprehensive Guide",
    image: "/images/blogs/zatca-prepayment.webp",
    desc: "A comprehensive guide to declare VAT on advance invoices and prepayment invoices to ZATCA without double VAT payments...",
    country: "KSA"
  },
  {
    id: 7,
    url: "sap-integration-with-zatca",
    title: "SAP E-Invoicing and Its Integration with ZATCA: Paving the Way for Digital Excellence",
    image: "/images/blogs/sap-e-invocing-integration-with-zatca.webp",
    desc: "Saudi Arabia's ZATCA pioneered electronic invoicing, launching its first phase on 4th December 2021 and progressing to Phase 2...",
    country: "KSA"
  },
  {
    id: 8,
    url: "e-invoicing-bahrain",
    title: "The Complete Guide to E-Invoicing in Bahrain",
    image: "/images/blogs/the-complete-guide-to-e-invoicing-in-bahrain.webp",
    desc: "The National Bureau for Revenue (NBR) in Bahrain is progressively heading towards the implementation of e-invoicing...",
    country: "BH"
  },
  {
    id: 9,
    url: "e-invoicing-oman",
    title: "E-Invoicing in Oman: A Comprehensive Guide to Preparation and Compliance",
    image: "/images/blogs/einvoicing-in-the-sultanate-of-oman.webp",
    desc: "The Sultanate of Oman Tax Authority is poised to usher in electronic invoicing (e-invoicing) in 2023...",
    country: "OM"
  },
  {
    id: 10,
    url: "streamline",
    title: "Streamlining Business Transactions: e-Invoicing in the United Arab Emirates",
    image: "/images/blogs/streamlining-business-transactions.webp",
    desc: "The adoption of the e-invoicing system is accelerating in the Gulf nations, signaling a remarkable shift towards digital invoicing...",
    country: "AE"
  },
  {
    id: 11,
    url: "good-receipts",
    title: "Goods Receipts Accounting",
    image: "/images/blogs/goods-receipts-accounting.webp",
    desc: "The more inventory a company has, the less likely they will have what they need Taiichi Ohno, Toyota...",
    country: "KSA"
  },
  {
    id: 12,
    url: "adapting-business",
    title: "Adapting Business Processes for ZATCA e-Invoicing Phase 2 Compliance",
    image: "/images/blogs/adapting-business-processes-for-ZATCA.webp",
    desc: "In December 2021, the Zakat, Tax, and Customs Authority launched the ZATCA e-Invoicing Phase 2 Compliance initiative...",
    country: "KSA"
  },
  {
    id: 13,
    url: "breaking-barriers",
    title: "Breaking Barriers: Attaining ZATCA E-Invoicing Compliance with Limited ERP Integration",
    image: "/images/blogs/attainin-ZATCA-e-Invoicing-compliance-in-saudi-arabia.webp",
    desc: "The Zakat, Tax, and Customs Authority (ZATCA) launched its e-invoicing initiative mandating e-invoicing for resident taxpayers...",
    country: "KSA"
  },
  {
    id: 14,
    url: "zatca-invoice",
    title: "5 Key Steps to Choose the Right ZATCA Approved E-Invoicing Software in Saudi Arabia",
    image: "/images/blogs/key-steps-to-choose-right-zatca-approved-e-invoicing-software.webp",
    desc: "Five essential steps to choosing the right ZATCA-approved e-invoicing software for businesses in Saudi Arabia...",
    country: "KSA"
  },
  {
    id: 15,
    url: "financial-penalities",
    title: "Fines and Financial Penalties Exemption for Taxpayers by ZATCA, Saudi Arabia",
    image: "/images/blogs/fines-and-financial-penalties-exemption-for-its-taxpayers.webp",
    desc: "ZATCA has re-launched the cancellation of fines and exemption of financial penalties to support taxpayers...",
    country: "KSA"
  },
  {
    id: 16,
    url: "complaint-invoice",
    title: "A ZATCA Compliant E-Invoicing Software in KSA",
    image: "/images/blogs/a-compliant-e-invoicing-fatoorah-software.webp",
    desc: "E-invoicing is a critical requirement for businesses in Saudi Arabia under ZATCA regulations...",
    country: "KSA"
  },
  {
    id: 17,
    url: "riyadh-expo",
    title: "Riyadh World Expo 2030 and the Future of Business Innovation",
    image: "/images/blogs/riyadh-world-expo-2030-the-future-of-business-innovation.webp",
    desc: "Navigating new horizons: Riyadh World Expo 2030 and its role in shaping business innovation and transformation...",
    country: "KSA"
  },
  {
    id: 18,
    url: "zatca-fatoora-device-onboarding-requirements",
    title: "Ensuring Compliance and Efficiency: A Guide to ZATCA's FATOORA Device Onboarding Requirements",
    image: "/images/blogs/zatca-fatoora-device-onboarding-requirements.webp",
    desc: "In the rapidly evolving e-invoicing landscape, staying abreast of regulatory requirements is crucial for businesses...",
    country: "KSA"
  },
  {
    id: 19,
    url: "pos-billing-software-intergration-with-zatca",
    title: "POS Billing Software Integration with ZATCA: Accqrate",
    image: "/images/blogs/a-compliant-e-invoicing-fatoorah-software.webp",
    desc: "Point of Sale systems face new challenges integrating with ZATCA's e-invoicing compliance requirements...",
    country: "KSA"
  },
  {
    id: 20,
    url: "enabling-marketplaces-with-e-invoicing",
    title: "Transform Your Marketplace with ZATCA-Compliant E-Invoicing",
    image: "/images/blogs/a-compliant-e-invoicing-fatoorah-software.webp",
    desc: "Marketplaces involve bi-directional transactions, making e-invoicing compliance crucial for operational efficiency...",
    country: "KSA"
  },
  {
    id: 21,
    url: "automotive-industry",
    title: "Accelerating Digital Transformation: Tackling ZATCA E-invoicing in the Automotive Industry",
    image: "/images/blogs/AutomotiveIndustry.png",
    desc: "Saudi Arabia's automotive sector is rapidly evolving, embracing e-invoicing and digital transformation for efficiency...",
    country: "KSA"
  },
  {
    id: 22,
    url: "sap-ecc-challenge",
    title: "SAP ECC End of Life: The Best Alternative for E-invoicing Compliance and ERP Modernization",
    image: "/images/blogs/SAPBlog.png",
    desc: "With SAP ECC reaching end of life, businesses must explore modern alternatives for compliance and modernization...",
    country: "KSA"
  },
  {
    id: 23,
    url: "accqrate-books-msme-accounting",
    title: "Why Accqrate Books Is the Top Choice for MSME Accounting in 2025",
    image: "/images/blogs/msme.png",
    desc: "Accounting software built for the modern MSME Accqrate Books brings simplicity, accuracy, and compliance...",
    country: "KSA"
  },
  {
    id: 24,
    url: "belgium-credit-notes",
    title: "Credit Notes in Belgium: Meaning, Purpose, Rules and How to Issue Them Correctly",
    image: "/images/blogs/CreditNotes.png",
    desc: "A credit note is a commercial document issued by a seller to a buyer, reducing the amount owed on a previously issued invoice...",
    country: "BE"
  },
  {
    id: 25,
    url: "belgium-vat-number",
    title: "Belgium VAT Registration Number: What It Is, Why You Need It, and How to Obtain One",
    image: "/images/blogs/VatRegistration.png",
    desc: "A Belgian VAT registration number is a unique identifier assigned to businesses registered for VAT in Belgium...",
    country: "BE"
  },
  {
    id: 26,
    url: "belgium-income-tax",
    title: "Belgian Income Tax System: Rates, Deductions, Exemptions and How Filing Works",
    image: "/images/blogs/IncomeTax.png",
    desc: "Belgium's personal income tax system is progressive, meaning higher earners pay a higher percentage...",
    country: "BE"
  },
  {
    id: 27,
    url: "belgium-tax-system-2025",
    title: "Belgium Tax System 2025: A Comprehensive Guide to Tax Types, Rates, Filing Responsibilities and Key Compliance Requirements",
    image: "/images/blogs/TaxSystems.png",
    desc: "Belgium operates a complex tax system administered primarily by the Federal Public Service Finance...",
    country: "BE"
  },
  {
    id: 28,
    url: "belgium-corporate-tax",
    title: "Corporate Tax in Belgium: Complete Guide to Rates, Filing, Deductions, Incentives, Assessments, and Compliance Obligations",
    image: "/images/blogs/CorporateTax.png",
    desc: "Corporate income tax in Belgium applies to the worldwide income of Belgian resident companies...",
    country: "BE"
  },
  {
    id: 29,
    url: "belgium-vat",
    title: "VAT in Belgium: Rates, Registration, Liability, Returns, Payments and Compliance Essentials",
    image: "/images/blogs/VAT.png",
    desc: "Value Added Tax (VAT) in Belgium, known locally as BTW/TVA, is a consumption tax applied to most goods and services...",
    country: "BE"
  },
  {
    id: 30,
    url: "peppol-mercurius-belgium",
    title: "PEPPOL and the Mercurius Platform in Belgium: A Complete Guide for the 2026 E Invoicing Landscape",
    image: "/images/blogs/Mercurius.png",
    desc: "PEPPOL is a standardized framework that enables businesses to exchange electronic documents securely...",
    country: "BE"
  },
  {
    id: 31,
    url: "belgium-e-invoicing-faqs",
    title: "Belgium E-Invoicing FAQs: Rules, Scope and What Businesses Must Prepare for in 2026",
    image: "/images/blogs/FAQs.png",
    desc: "Belgium is preparing for one of the most important financial digitization shifts in its history...",
    country: "BE"
  },
  {
    id: 32,
    url: "belgium-technical-rules",
    title: "Technical Rules for E Invoicing in Belgium: Standards, Formats, and Compliance Requirements",
    image: "/images/blogs/TechnicalRules.png",
    desc: "Belgium's e-invoicing framework is built on technical precision. Learn about the EN16931 standard...",
    country: "BE"
  },
  {
    id: 33,
    url: "belgium-e-invoicing-mandate",
    title: "Belgium's e Invoicing Mandate: Complete Guide to Requirements, Timelines, Scope and Readiness",
    image: "/images/blogs/Mandate.png",
    desc: "Belgium is implementing a comprehensive e-invoicing mandate that will transform how businesses handle invoicing...",
    country: "BE"
  },
  {
    id: 34,
    url: "erp-adoption-2025",
    title: "Why ERP Adoption Will Surge in 2025 and Beyond",
    image: "/images/blogs/einvoicing-in-the-sultanate-of-oman.png",
    desc: "ERP solutions continue evolving with cloud tech and AI-powered tools driving smarter automation...",
    country: "OM"
  }
];

export default blogPosts;