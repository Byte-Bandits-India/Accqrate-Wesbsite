// Base FAQs — shared by Saudi Arabia and all other countries except AE
const baseFAQ = [
  {
    question: "How many days free trial is given?",
    answer:
      "30 days free trial is given. Prior to that you get a practice account for 14 days. So in total the trial period is 44 days.",
  },
  {
    question: "Can I terminate during the trial period?",
    answer:
      "Absolutely. You can terminate your trial period anytime. Your account stays valid until 44 days and then is removed automatically.",
  },
  {
    question: "Where is Accqrate cloud?",
    answer:
      "Accqrate cloud is in Riyadh, Saudi Arabia. Disaster recovery is also in Saudi Arabia.",
  },
  {
    question:
      "Should I provide my Credit card or debit card or bank account details during the trial period?",
    answer:
      "No. We do not take any credit card or debit card or bank details. It is absolutely free and has no link with any payments.",
  },
  {
    question: "How do I pay my subscription?",
    answer:
      "You pay through invoices. Based on your subscription plan, we send you a tax invoice. You can pay it to our bank account within 10 days from the receipt of the invoice.",
  },
  {
    question: "What subscription plans are available?",
    answer:
      "You can pay monthly or quarterly or half yearly or annual subscription.",
  },
  {
    question: "Is there any discount for annual subscription?",
    answer: "Annual subscription has 8% discount on the total subscription value.",
  },
  {
    question: "What support is given for the trial period?",
    answer:
      "We take our customers seriously and each customer will get a consultant allocated for their queries and doubts. During the trial period, we train the users to learn the system, upload data like customers, materials etc and also design the printout templates with logo or any other changes that are need to the standard templates available.",
  },
  {
    question: "What happens after the trial period?",
    answer:
      "During the trial period you can try all the process and take a decision if the product is suitable for your needs. If yes, you can ask for the production account. If not, you can simply drop a mail or message to your contact person. There is absolutely no obligation to continue after the trial period.",
  },
  {
    question: "What is ZATCA, and why is it important for my business?",
    answer:
      "ZATCA—the Zakat, Tax, and Customs Authority—is responsible for enforcing e-invoicing regulations in Saudi Arabia. Accqrate’s solution is fully compliant with ZATCA’s standards, ensuring that your invoicing processes meet all local requirements.",
  },
  {
    question:
      "How does Accqrate support the phased implementation of e-invoicing in Saudi Arabia?",
    answer:
      "E-invoicing here is rolled out in two phases—the Generation Phase and the Integration Phase. Accqrate guides you through both stages, from generating compliant electronic invoices to integrating with ZATCA’s systems for clearance and cryptographic stamping.",
  },
  {
    question: "What are the penalties for non-compliance with Saudi e-invoicing regulations?",
    answer:
      "Failure to comply with ZATCA regulations can result in fines and disruptions to business operations. With Accqrate, you minimize these risks by ensuring every invoice meets the mandated criteria.",
  },
  {
    question: "How does Accqrate handle multiple billing channels in a Saudi business environment?",
    answer:
      "Whether you operate online, through POS systems, or across multiple branches, Accqrate consolidates all channels into one unified, compliant invoicing system.",
  },
  {
    question: "Can Accqrate assist with generating and validating QR codes for e-invoices?",
    answer:
      "Yes, our platform automatically generates and validates QR codes as required by ZATCA, ensuring that every invoice is both secure and compliant.",
  },
];

// UAE-specific FAQ (completely custom)
const AE_FAQ = [
  {
    question: "How long is the free trial?",
    answer: "UAE-based businesses receive a 90-day free trial.",
  },
  {
    question: "Can I cancel my trial at any time?",
    answer:
      "Absolutely. You may cancel whenever you wish. Your account remains active for the full 90-day period and is automatically removed afterward.",
  },
  {
    question: "Is Accqrate cloud-based in the UAE?",
    answer:
      "Yes. Accqrate Cloud is hosted within the UAE, with a disaster recovery server located in the GCC.",
  },
  {
    question:
      "Should I provide my Credit card or debit card or bank account details during the trial period?",
    answer:
      "No. We do not take any credit card or debit card or bank details. It is absolutely free and has no link with any payments.",
  },
  {
    question: "How do I pay my subscription?",
    answer:
      "You pay through invoices. Based on your subscription plan, we send you a tax invoice. You can pay it to our bank account within 10 days from the receipt of the invoice.",
  },
  {
    question: "What subscription plans are available?",
    answer:
      "We offer flexible half-yearly or annual subscription plans. Feel free to choose the option that best suits your business needs.",
  },
  {
    question: "Is there any discount for annual subscription?",
    answer: "Annual subscription has 8% discount on the total subscription value.",
  },
  {
    question: "What is PEPPOL e-invoicing, and how does it work in the UAE?",
    answer:
      "PEPPOL e-invoicing standardizes the electronic exchange of invoices across borders using a decentralized model. Accqrate’s solution integrates with the PEPPOL network, ensuring your invoices meet UAE standards for secure and efficient transmission.",
  },
  {
    question: "When will mandatory e-invoicing be implemented in the UAE?",
    answer:
      "Mandatory e-invoicing for B2B and B2G transactions in the UAE is expected to begin in July 2026. Accqrate is preparing its platform to support this transition with full compliance and smooth integration.",
  },
  {
    question: "How does Accqrate ensure compliance with UAE tax and data regulations?",
    answer:
      "We adhere to UAE regulations by using robust digital signatures, encryption protocols, and secure data hosting practices. Our platform works with Accredited Service Providers to guarantee that all invoice exchanges meet regulatory standards.",
  },
  {
    question:
      "Can I integrate my current accounting software with Accqrate’s PEPPOL e-invoicing solution?",
    answer:
      "Yes, Accqrate is designed for easy integration with your existing accounting or ERP systems, allowing you to leverage the benefits of the PEPPOL network without overhauling your current infrastructure.",
  },
  {
    question: "How does Accqrate facilitate secure and timely invoice exchanges in the UAE?",
    answer:
      "Our system ensures near real-time data integration and validation through certified channels, so your invoices are securely exchanged and reported to the Federal Tax Authority in compliance with local regulations.",
  },
];

const MA_FAQ = [
  {
    question: "How many days of free trial is given?",
    answer: `30 days free trial is given. Prior to that, you get a practice account for 14 days. So in total, the trial period is 44 days.`,
  },
  {
    question: "Can I terminate during the trial period?",
    answer: `Absolutely. You can terminate your trial period anytime. Your account stays valid until 44 days and then is removed automatically.`,
  },
  {
    question: "Is Accqrate cloud-based in Malaysia?",
    answer: `Yes. Accqrate Cloud is hosted within Malaysia, ensuring compliance with local data residency and protection laws.`,
  },
  {
    question: "Should I provide my credit card or bank account details during the trial?",
    answer: `No. We do not take any credit card, debit card, or bank details. It is absolutely free and has no link with any payments.`,
  },
  {
    question: "How do I pay my subscription?",
    answer: `You pay through invoices. Based on your subscription plan, we send you a tax invoice. You can pay it to our bank account within 10 days from the receipt of the invoice.`,
  },
  {
    question: "What subscription plans are available?",
    answer: `You can pay monthly, quarterly, half-yearly, or annual subscriptions.`,
  },
  {
    question: "Is there any discount for annual subscription?",
    answer: `Yes. Annual subscriptions have an 8% discount on the total subscription value.`,
  },
  {
    question: "What support is given during the trial period?",
    answer: `Each customer gets a dedicated consultant. During the trial, we train users to learn the system, upload master data (customers, materials, etc.), and help design printout templates with logos or other changes as needed.`,
  },
  {
    question: "How does communication happen between the Accqrate team and myself?",
    answer: `We communicate via Skype, WhatsApp, Telegram, IMO, Teams, Google Meet, and Zoom. You can also connect through our website support chat.`,
  },
  {
    question: "What happens after the trial period?",
    answer: `During the trial, you can test all features and decide if the product fits your needs. If yes, you can ask for a production account. If not, just inform your contact person—no obligation to continue.`,
  },
  {
    question: "What happens to my data if I terminate or cancel my subscription?",
    answer: `Your data resides for 14 days after termination. You can continue or download your data to Excel during this period. After 14 days, it will be permanently deleted and cannot be restored.`,
  },
  {
    question: "Can I transfer my data from the demo system to the production system?",
    answer: `Yes. Master data like customers, materials, and vendors can be transferred from demo to production. Transactional data (invoices, etc.) can also be transferred depending on your business needs.`,
  },
  {
    question: "If there are any issues, whom should I contact?",
    answer: `You will be assigned a dedicated consultant. You can always communicate with them for any issues—they will coordinate internally for resolution and keep you updated.`,
  },
  {
    question: "If I subscribe for e-invoicing, can I later add ERP modules?",
    answer: `Absolutely. You can extend your modules anytime with a marginal cost. We do not sell module-based products; it’s a package subscription. Just inform your contact person to activate the ERP functionalities you need.`,
  },
  {
    question: "How can I contact Accqrate’s sales team?",
    answer: `Email us at <a href="mailto:contact@accqrate-erp.com">contact@accqrate-erp.com</a> — our sales experts will assist you with demos and queries.`,
  },
    {
    question: "What is e-Invoice in Malaysia?",
    answer: `e-Invoice is an electronic invoice introduced by LHDN (Inland Revenue Board of Malaysia) to ensure transparency and tax compliance. It replaces paper or PDF invoices with structured digital invoices transmitted and validated through MyInvois or PEPPOL platforms.`,
  },
  {
    question: "What is MyInvois?",
    answer: `MyInvois is Malaysia’s national e-Invoice platform developed by LHDN for businesses to issue, validate, and receive invoices electronically. It ensures tax compliance and facilitates real-time invoice validation.`,
  },
  {
    question: "What is PEPPOL in the Malaysian e-Invoice system?",
    answer: `PEPPOL (Pan-European Public Procurement OnLine) is an international e-Invoicing network that allows secure and standardized exchange of invoices between businesses. In Malaysia, PEPPOL is adopted for interoperability and cross-border compliance.`,
  },
  {
    question: "What is the difference between MyInvois and PEPPOL?",
    answer: `
      MyInvois is LHDN’s official platform for direct validation and submission within Malaysia.
      PEPPOL is an international e-Invoicing network used for cross-border and standardized integrations.
    `,
  },
  {
    question: "What are the methods available to issue e-Invoices?",
    answer: `There are three methods:
      
        MyInvois Portal — Manual creation on the government portal (for small users).
        MyInvois API — Direct system integration via APIs (for large or automated businesses).
        PEPPOL Network — Through certified Access Points such as Accqrate.
      `,
  },
  {
    question: "How does Accqrate connect with LHDN?",
    answer: `Accqrate integrates via both MyInvois API and PEPPOL Access Point. You can issue and validate invoices from within Accqrate without logging into external portals.`,
  },
  {
    question: "Is Accqrate a PEPPOL Access Point in Malaysia?",
    answer: `Yes. Accqrate is officially certified as a PEPPOL Access Point and Service Provider under MDEC and LHDN guidelines.`,
  },
  {
    question: "Can I use Accqrate to send invoices to MyInvois without using PEPPOL?",
    answer: `Yes. You can choose your preferred submission route—either direct MyInvois API or via PEPPOL, depending on your business and integration type.`,
  },
  {
    question: "What validations does MyInvois perform?",
    answer: `When an e-Invoice is submitted, MyInvois performs validations like:
      
        Buyer and seller TIN and registration verification.
        Invoice data structure and mandatory fields.
        Duplicate or incorrect invoice detection.
        Tax and total calculations.
      `,
  },
  {
    question: "What happens after an e-Invoice is validated?",
    answer: `Once validated, the e-Invoice receives a Unique Identifier (UID) from LHDN. Accqrate automatically updates your invoice with this UID and allows sharing of the validated copy (PDF or QR-coded invoice) with your customer.`,
  },
  {
    question: "Can I cancel or reject an e-Invoice after submission?",
    answer: `Yes. Depending on the invoice status:
      
        Cancellation — Possible within 72 hours of validation if both parties agree.
        Rejection — Buyers can reject within 72 hours if discrepancies exist.
      `,
  },
  {
    question: "What if my invoice fails validation?",
    answer: `Accqrate automatically displays the validation error from MyInvois or PEPPOL. You can correct the data and re-submit instantly.`,
  },
  {
    question: "Do I need internet connectivity for e-Invoicing?",
    answer: `Yes. Since e-Invoicing involves real-time submission to MyInvois or PEPPOL, a stable internet connection is mandatory during invoice posting.`,
  },
  {
    question: "Can Accqrate work offline?",
    answer: `No. Accqrate is a cloud-based system. It requires internet access to validate, store, and synchronize e-Invoices and ERP data.`,
  },
  {
    question: "What file formats are supported for exporting e-Invoices?",
    answer: `Accqrate supports XML, JSON, and PDF formats for export. The validated QR-coded PDF is also downloadable for customer sharing or printing.`,
  },
  {
    question: "Can I upload historical invoices for validation?",
    answer: `No. Only invoices created after e-Invoice go-live date can be submitted for validation. Historical invoices remain in your records but are not part of the LHDN submission process.`,
  },
  {
    question: "Is e-Invoice mandatory for all companies in Malaysia?",
    answer: `Yes. E-Invoice is mandatory in a phased manner based on annual turnover. Businesses must comply according to LHDN’s rollout schedule.`,
  },
  {
    question: "Where can I find the e-Invoice rollout timeline?",
    answer: `LHDN provides the timeline on the official portal <a href="https://www.hasil.gov.my/">www.hasil.gov.my</a>. Accqrate also updates its dashboard with applicable deadlines for each business segment.`,
  },
  {
    question: "Does Accqrate support real-time reporting to LHDN?",
    answer: `Yes. Accqrate submits data in real time and updates status instantly once validated, rejected, or failed.`,
  },
  {
    question: "Can I integrate Accqrate e-Invoice with my existing ERP?",
    answer: `Yes. Accqrate provides API integration and PEPPOL connectivity, allowing your ERP to exchange invoices seamlessly with LHDN through Accqrate’s Access Point.`,
  },
  {
    question: "How do I integrate Accqrate with MyInvois API?",
    answer: `Integration with MyInvois API can be done by generating your company’s credentials (Client ID, Client Secret, and TIN) within Accqrate and linking them with the LHDN sandbox or production endpoints. Once configured, all invoices created in Accqrate are automatically validated via the API.`,
  },
  {
    question: "Does Accqrate provide a sandbox for testing?",
    answer: `Yes. Accqrate provides both Sandbox and Production environments. The sandbox allows you to test invoice submission, validation, and cancellation without affecting real data.`,
  },
  {
    question: "Can I test e-Invoicing before going live?",
    answer: `Yes. Using the sandbox mode, you can issue sample invoices, check validation flows, and verify QR codes before switching to the live environment.`,
  },
  {
    question: "Do I need separate credentials for Sandbox and Production?",
    answer: `Yes. MyInvois requires unique credentials for both environments. You can store and switch between them easily from Accqrate’s settings panel.`,
  },
  {
    question: "Does Accqrate support multi-branch or multi-company setup?",
    answer: `Yes. Accqrate supports multiple companies and branches under a single account. Each entity can have its own TIN, digital certificate, and invoice sequence.`,
  },
  {
    question: "Can Accqrate connect with external ERP systems?",
    answer: `Yes. Accqrate offers integration APIs and connectors for major ERP systems like SAP, Oracle, Tally, and Microsoft Dynamics. Data sync can be one-way or bi-directional depending on your configuration.`,
  },
  {
    question: "Does Accqrate provide REST APIs?",
    answer: `Yes. Accqrate offers secure REST APIs for invoice creation, validation, retrieval, and status checking. API documentation is available inside the developer portal.`,
  },
  {
    question: "How secure are Accqrate APIs?",
    answer: `All API requests use OAuth 2.0 authentication and HTTPS encryption. Sensitive data is stored in compliance with ISO 27001 and GDPR standards.`,
  },
  {
    question: "How does Accqrate handle errors from LHDN?",
    answer: `Accqrate automatically parses and displays validation errors returned from MyInvois or PEPPOL. Each error message includes the field name, code, and a suggested fix. Users can correct and re-submit instantly.`,
  },
  {
    question: "Can I automate invoice submission in Accqrate?",
    answer: `Yes. You can enable automatic submission so that every approved invoice is sent to LHDN for validation without manual action.`,
  },
  {
    question: "Does Accqrate store e-Invoice data securely?",
    answer: `Yes. All invoice data and validation responses are securely stored in encrypted cloud databases with full audit logs and backup replication.`,
  },
  {
    question: "How long is e-Invoice data retained?",
    answer: `As per LHDN guidelines, validated e-Invoice data is retained for 7 years. Accqrate ensures automatic archival and retrieval for compliance checks.`,
  },
  {
    question: "Can Accqrate integrate with POS systems?",
    answer: `Yes. Accqrate can integrate with Point-of-Sale systems through API endpoints or file import mechanisms for real-time invoice generation and validation.`,
  },
  {
    question: "Is there an onboarding guide for developers?",
    answer: `Yes. Accqrate provides a detailed developer onboarding kit including API keys setup, test data, endpoints, and example payloads for easy integration.`,
  },
  {
    question: "How do I get my Client ID and Client Secret for integration?",
    answer: `After registering your company in Accqrate, you can generate API credentials in your company settings under “Integration → MyInvois API Setup.”`,
  },
  {
    question: "Can I connect multiple systems to one Accqrate account?",
    answer: `Yes. You can register multiple systems (for ERP, POS, or invoicing) under the same Accqrate account. Each system will have a unique API key for traceability.`,
  },
  {
    question: "What are the system requirements to use Accqrate?",
    answer: `You only need a web browser and an internet connection. Accqrate works on all major browsers including Chrome, Edge, and Safari with no installation required.`,
  },
  {
    question: "Does Accqrate support mobile access?",
    answer: `Yes. You can access Accqrate on mobile browsers and tablets with a responsive interface optimized for smaller screens.`,
  },
  {
    question: "How do I switch between sandbox and live mode?",
    answer: `In Accqrate settings, you can toggle between Sandbox and Production environments anytime. Sandbox invoices are tagged as “TEST” and are not sent to LHDN.`,
  },
  {
    question: "Can I import existing customer and supplier data into Accqrate?",
    answer: `Yes. You can upload Excel or CSV files containing customer and supplier master data. Accqrate validates and maps them automatically.`,
  },
  {
    question: "Is e-Invoicing mandatory in Malaysia?",
    answer: `Yes. The Inland Revenue Board of Malaysia (IRBM / LHDN) has mandated e-Invoicing for all taxpayers in phases based on annual turnover. Large taxpayers have already begun implementation, and smaller ones will follow according to the official rollout schedule.`,
  },
  {
    question: "Who must issue an e-Invoice?",
    answer: `All businesses, including individuals carrying on business, companies, partnerships, and other entities registered for tax purposes in Malaysia are required to issue e-Invoices once e-Invoicing becomes mandatory for their category.`,
  },
  {
    question: "What is a TIN (Tax Identification Number)?",
    answer: `The Tax Identification Number (TIN) is a unique number assigned by LHDN to every taxpayer in Malaysia. It must be included in all e-Invoices submitted for validation.`,
  },
  {
    question: "Do foreign companies need to issue e-Invoices in Malaysia?",
    answer: `Foreign companies carrying on business in Malaysia or having a permanent establishment are required to comply with e-Invoicing requirements under IRBM’s guidelines.`,
  },
  {
    question: "Can I issue an e-Invoice to a foreign customer?",
    answer: `Yes. You can issue cross-border e-Invoices for export transactions. These must include the buyer’s country code and other required export details as per IRBM’s specifications.`,
  },
  {
    question: "What details are mandatory in an e-Invoice?",
    answer: `Each e-Invoice must contain mandatory fields such as supplier and buyer details, itemized descriptions, quantity, unit price, tax type, total amount, and the unique e-Invoice identifier assigned by LHDN.`,
  },
  {
    question: "Can I cancel a validated e-Invoice?",
    answer: `Yes, but only within the allowed time frame defined by LHDN. Once an e-Invoice is validated, cancellation requires issuing a credit note or debit note linked to the original invoice.`,
  },
  {
    question: "What happens if an e-Invoice fails validation?",
    answer: `If validation fails, the e-Invoice will not receive an IRBM UUID or QR code. You must correct the errors indicated in the response and re-submit the invoice.`,
  },
  {
    question: "Can an e-Invoice be amended after validation?",
    answer: `No. Once validated, the e-Invoice cannot be edited. Any change must be made through a credit note or debit note referring to the original document number.`,
  },
  {
    question: "What is the difference between a credit note and a debit note?",
    answer: `A credit note reduces the value of a previously issued invoice (for example, in case of overbilling or return of goods). A debit note increases the amount (for example, for additional charges after billing). Both must reference the original invoice number.`,
  },
  {
    question: "How does the QR code in an e-Invoice work?",
    answer: `The QR code in an e-Invoice allows the buyer, auditor, or tax authority to verify the authenticity of the invoice by scanning it. It links directly to the MyInvois verification portal with real-time validation details.`,
  },
  {
    question: "What URL does the QR code point to?",
    answer: `The QR code redirects users to LHDN’s MyInvois portal verification page, showing the validated e-Invoice details including IRBM UUID, supplier name, and invoice amount.`,
  },
  {
    question: "Are self-billed e-Invoices allowed?",
    answer: `Yes. Self-billing is permitted when the buyer is authorized to issue e-Invoices on behalf of the supplier, with prior approval from LHDN.`,
  },
  {
    question: "Can I issue simplified e-Invoices?",
    answer: `Yes. Simplified e-Invoices can be issued for B2C transactions below a certain threshold value as allowed by LHDN, with fewer required data fields.`,
  },
  {
    question: "Are receipts also considered e-Invoices?",
    answer: `Yes. Receipts, credit notes, debit notes, and refund documents all fall under the e-Invoicing framework and must be validated by LHDN.`,
  },
  {
    question: "What if I issue an invoice without validation?",
    answer: `Invoices not validated by LHDN are considered non-compliant and may result in penalties, tax disallowance, or rejection by business partners.`,
  },
  {
    question: "What should I do if the IRBM validation portal is down?",
    answer: `If the portal or API is temporarily unavailable, you may store invoices locally and re-submit once the service resumes. Accqrate handles automatic retry and queue processing.`,
  },
  {
    question: "How can I verify if an invoice was successfully validated?",
    answer: `In Accqrate, each validated e-Invoice is marked with an IRBM UUID and a QR Code. You can also check validation status directly in the MyInvois portal using the document reference number.`,
  },
  {
    question: "What are the penalties for non-compliance with e-Invoicing?",
    answer: `Non-compliance may lead to administrative penalties under the Income Tax Act. Businesses must ensure all invoices are submitted and validated through LHDN’s system to remain compliant.`,
  },
  {
    question: "How often must e-Invoices be submitted?",
    answer: `All e-Invoices must be validated in real-time before sharing with buyers. Batch or periodic uploads are not allowed once e-Invoicing is fully implemented.`,
  },
  {
    question: "What is the retention period for e-Invoices?",
    answer: `As per LHDN guidelines, all validated e-Invoices must be retained for at least 7 years for audit and compliance purposes.`,
  },
  {
    question: "How can buyers verify e-Invoices they receive?",
    answer: `Buyers can scan the QR code or access the IRBM portal to confirm the e-Invoice’s authenticity and details.`,
  },
  {
    question: "Can an e-Invoice be rejected by the buyer?",
    answer: `Yes. Buyers may reject an e-Invoice within the allowed rejection window if there are errors or disputes. Rejected invoices are automatically tagged as invalid in Accqrate.`,
  },
  {
    question: "Can I reissue a rejected e-Invoice?",
    answer: `Yes. After making necessary corrections, you can reissue the invoice as a new e-Invoice linked to the rejected one for traceability.`,
  },
  {
    question: "Does LHDN require digital signatures on e-Invoices?",
    answer: `Yes. Each validated e-Invoice carries a digital certificate issued or recognized by LHDN to ensure authenticity and prevent tampering.`,
  },
  {
    question: "How do I add multiple users to my Accqrate e-Invoice account?",
    answer: `Admins can invite additional users under Settings → User Management. Each user can be assigned roles such as Accountant, Auditor, or Approver with specific permissions for e-Invoicing actions.`,
  },
  {
    question: "Can I restrict access to e-Invoices for specific users?",
    answer: `Yes. Accqrate provides a role-based access control system that allows administrators to manage who can create, validate, or view e-Invoices.`,
  },
  {
    question: "What should I do if an e-Invoice submission fails?",
    answer: `Check the validation error message returned by LHDN. Accqrate displays detailed error descriptions and provides suggestions to fix missing or invalid fields before resubmitting.`,
  },
  {
    question: "How can I check the real-time validation status of an e-Invoice?",
    answer: `Every invoice has a validation indicator in Accqrate. You can also view LHDN’s response details, UUID, and QR Code under the invoice preview page.`,
  },
  {
    question: "Is there an audit log for all e-Invoice actions?",
    answer: `Yes. Accqrate automatically maintains a digital audit trail that records every user action, submission, validation, and status change for compliance and traceability.`,
  },
  {
    question: "Can Accqrate handle multiple branches or companies?",
    answer: `Yes. You can manage multiple business entities and branch codes within the same Accqrate account. Each entity can have separate e-Invoice credentials and configurations.`,
  },
  {
    question: "Does Accqrate support custom invoice templates?",
    answer: `Yes. You can personalize your invoice layout, add your company logo, custom colors, and terms while maintaining IRBM’s mandatory format requirements.`,
  },
  {
    question: "Can I attach supporting documents to e-Invoices?",
    answer: `Yes. You can upload attachments such as purchase orders, delivery notes, or contracts. These are stored securely and linked to the e-Invoice record.`,
  },
  {
    question: "What should I do if my IRBM credentials expire?",
    answer: `Accqrate will notify you in advance when your credentials are nearing expiry. You can update them under Settings → Integration → LHDN API Configuration.`,
  },
  {
    question: "Can I export e-Invoice reports from Accqrate?",
    answer: `Yes. Accqrate provides detailed reports and allows export in Excel, PDF, or CSV formats. You can also filter by date range, validation status, or customer name.`,
  },
  {
    question: "Is training provided for e-Invoicing users?",
    answer: `Yes. Accqrate offers free onboarding sessions, video tutorials, and documentation to help your team become proficient in e-Invoicing operations.`,
  },
  {
    question: "What kind of customer support does Accqrate provide?",
    answer: `We offer 24/7 technical support through chat, email, and phone. Our support specialists are trained in both Accqrate and LHDN e-Invoicing guidelines.`,
  },
  {
    question: "How secure is my company’s e-Invoice data in Accqrate?",
    answer: `Accqrate uses end-to-end encryption, two-factor authentication, and ISO-certified cloud infrastructure. All data is stored within Malaysian data centers, compliant with PDPA and LHDN standards.`,
  },
  {
    question: "Can I integrate Accqrate with accounting or ERP software?",
    answer: `Yes. Accqrate supports seamless integration with major ERP and accounting systems such as SAP, QuickBooks, and Xero through secure APIs.`,
  },
  {
    question: "Does Accqrate automatically handle version updates from LHDN?",
    answer: `Yes. Our team ensures Accqrate is always synchronized with the latest e-Invoicing schema updates and compliance changes released by LHDN.`,
  },
  {
    question: "Can I test e-Invoice submission before going live?",
    answer: `Yes. Accqrate provides a Sandbox (test) environment where you can practice generating and submitting e-Invoices safely before switching to production mode.`,
  },
  {
    question: "Does Accqrate support bilingual invoices (English and Bahasa Malaysia)?",
    answer: `Yes. You can create bilingual templates for invoices, receipts, and credit notes. Accqrate supports both English and Bahasa Malaysia text fields.`,
  },
  {
    question: "What happens if I exceed my subscription limit?",
    answer: `Accqrate will notify you when you approach your limit. You can easily upgrade your plan to accommodate more transactions or users without service interruption.`,
  },
  {
    question: "Can I generate consolidated invoices for recurring customers?",
    answer: `Yes. Accqrate allows generating recurring and consolidated invoices for regular clients with automatic validation scheduling.`,
  },
  {
    question: "Does Accqrate provide analytics or dashboards?",
    answer: `Yes. The dashboard displays real-time insights such as number of validated invoices, total transaction volume, rejection trends, and pending submissions.`,
  },
  {
    question: "How can I contact Accqrate support?",
    answer: `You can reach us anytime via email at <a href="mailto:Contact@accqrate-erp.com" class="text-primary hover:underline">Contact@accqrate-erp.com</a> or through live chat available in your Accqrate account dashboard.`,
  },
  {
    question: "What happens after I contact support?",
    answer: `Our support team reviews your query and responds within 24 hours (usually much sooner). Urgent cases are prioritized and handled via phone or remote session.`,
  },
  {
    question: "Is there an escalation path for unresolved issues?",
    answer: `Yes. You can escalate cases to senior support engineers or request direct coordination with our compliance team for LHDN-related issues.`,
  },
  {
    question: "Can Accqrate assist during LHDN audits?",
    answer: `Yes. Accqrate’s audit-ready reports and data logs help you provide accurate e-Invoice evidence to auditors and LHDN officers when requested.`,
  },
  {
    question: "How can I back up my data from Accqrate?",
    answer: `You can download your validated e-Invoices, audit trails, and reports anytime. Automated backups are also performed daily to ensure data safety.`,
  },
  {
    question: "Does Accqrate offer onboarding for large enterprises?",
    answer: `Yes. Our enterprise onboarding includes dedicated account management, workflow customization, and API setup assistance for high-volume organizations.`,
  },
  {
    question: "What happens if the e-Invoice format changes in future?",
    answer: `Accqrate automatically updates the platform to comply with new schemas or validation rules issued by LHDN, ensuring uninterrupted compliance.`,
  },
  {
    question: "Can Accqrate integrate with Point of Sale (POS) systems?",
    answer: `Yes. Accqrate offers POS integration modules for real-time invoice validation at the time of sale, fully compliant with LHDN’s retail transaction rules.`,
  },
  {
    question: "Is Accqrate certified by LHDN?",
    answer: `Yes. Accqrate is officially listed as an LHDN-compliant Peppol Access Point and API provider for Malaysia’s e-Invoicing framework.`,
  },
  {
    question: "Can I migrate from another e-Invoice provider to Accqrate?",
    answer: `Yes. Our onboarding team can import your existing validated invoice records and help you transition smoothly from other providers to Accqrate.`,
  },
  {
    question: "How can I request new features in Accqrate?",
    answer: `We welcome feedback! You can suggest new features through our in-app feedback form or directly via email. Feature requests are reviewed every release cycle.`,
  },
  {
    question: "Where does Accqrate store e-Invoice data?",
    answer: `All Malaysian customer data is securely stored in local Malaysian data centers to comply with data residency and PDPA regulations.`,
  },
  {
    question: "Does Accqrate support multi-currency invoices?",
    answer: `Yes. You can issue invoices in MYR and foreign currencies. Exchange rates can be auto-fetched from Bank Negara Malaysia or set manually.`,
  },
  {
    question: "Can I access Accqrate from mobile devices?",
    answer: `Yes. Accqrate is fully responsive and optimized for mobile browsers, allowing you to create, validate, and manage e-Invoices from anywhere.`,
  },
  {
    question: "Does Accqrate provide API documentation?",
    answer: `Yes. Complete API documentation is available under the developer section for clients integrating Accqrate into custom ERP systems.`,
  },
  {
    question: "How frequently is Accqrate updated?",
    answer: `Accqrate receives bi-weekly updates that include compliance improvements, performance enhancements, and new features aligned with LHDN announcements.`,
  },
  {
    question: "Is there downtime during maintenance?",
    answer: `No. All updates are deployed with zero downtime through our redundant cloud architecture. Users are notified of scheduled upgrades in advance.`,
  },
  {
    question: "What browsers are supported by Accqrate?",
    answer: `Accqrate supports modern browsers including Google Chrome, Microsoft Edge, Firefox, and Safari (latest versions). Internet Explorer is not supported.`,
  },
  {
    question: "Is Accqrate suitable for SMEs and startups?",
    answer: `Yes. Accqrate is designed to serve businesses of all sizes — from freelancers and startups to enterprises — with affordable and scalable plans.`,
  },
  {
    question: "Can Accqrate generate payment reminders?",
    answer: `Yes. Accqrate automatically sends email reminders for unpaid invoices and allows you to customize reminder frequency and content.`,
  },
  {
    question: "Does Accqrate include customer management features?",
    answer: `Yes. The built-in CRM lets you manage customers, view invoice history, and analyze payment trends — all within the same dashboard.`,
  },
  {
    question: "Can Accqrate help with tax filing in Malaysia?",
    answer: `Yes. Accqrate integrates with tax computation and reporting modules that simplify your tax submission and reconciliation with LHDN.`,
  },
  {
    question: "Does Accqrate support integration with Peppol network?",
    answer: `Yes. Accqrate acts as a certified Peppol Access Point to exchange compliant e-Invoices across international trade partners.`,
  },

]


export const faqData: Record<string, { question: string; answer: string }[]> = {
  AE: AE_FAQ,
  SA: baseFAQ,
  KW: baseFAQ,
  OM: baseFAQ,
  QA: baseFAQ,
  BH: baseFAQ,
  MU: baseFAQ,
  JD: baseFAQ,
  MA: MA_FAQ
  
};
