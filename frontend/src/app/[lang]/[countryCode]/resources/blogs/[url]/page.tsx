import type { JSX } from "react";
import React from "react";
import { notFound } from "next/navigation";

// ✅ Import all blog components
import CreditNote from "../blogpages/CreditNote";
import DebitNote from "../blogpages/DebitNote";
import AccqrateBooksMSMEAccounting from "../blogpages/AccqrateBooksMSMEAccounting";
import AdaptingBusiness from "../blogpages/AdaptingBusiness";
import AutomotiveIndustry from "../blogpages/AutomotiveIndustry";
import BahrainInvoicing from "../blogpages/BahrainInvoicing";
import BreakingBarriers from "../blogpages/BreakingBarriers";
import ComplaintInvoice from "../blogpages/ComplaintInvoice";
import FinancialPenalties from "../blogpages/FinancialPenalties";
import GoodsReceipts from "../blogpages/GoodsReceipts";
import Microsoft365 from "../blogpages/Microsoft365";
import OmanInvoicing from "../blogpages/OmanInvoicing";
import OracleInvoicing from "../blogpages/OracleInvoicing";
import Pos from "../blogpages/Pos";
import RiyadhExpoBlog from "../blogpages/RiyadhExpo";
import SapIntegration from "../blogpages/SapIntegration";
import SapEcc from "../blogpages/SapEccChallenge";
import Streamline from "../blogpages/Streamline";
import TransformComplaint from "../blogpages/TransformComplaint";
import ZatcaComprehensive from "../blogpages/ZatcaComprehensive";
import ZatcaFatooraDeviceRequirments from "../blogpages/ZatcaFatooraDeviceRequirments";
import ZatcaInvoice from "../blogpages/ZatcaInvoice";
import ZatcaInvoicing from "../blogpages/ZatcaInvoicing";
import BelgiumCreditNotes from "../blogpages/BelgiumCreditNotes";
import BelgiumEInvoicingFAQs from "../blogpages/BelgiumEInvoicingFAQs";
import BelgiumEInvoicingMandate from "../blogpages/BelgiumEInvoicingMandate";
import BelgiumCorporateTax from "../blogpages/BelgiumCorporateTax";
import BelgiumTechnicalRules from "../blogpages/BelgiumTechnicalRules";
import BelgiumTaxSystem2025 from "../blogpages/BelgiumTaxSystem2025";
import BelgiumIncomeTax from "../blogpages/BelgiumIncomeTax";
import BelgiumVAT from "../blogpages/BelgiumVAT";
import BelgiumVATNumber from "../blogpages/BelgiumVATNumber";
import PeppolMercuriusBelgium from "../blogpages/PeppolMercuriusBelgium";
import ErpAdoption2025 from "../blogpages/ErpAdoption2025";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ url: string }>;
}) {
  const { url } = await params;

  // ✅ Map URLs to blog components
  const blogComponents: Record<string, JSX.Element> = {
    "credit-note": <CreditNote />,
    "debit-note": <DebitNote />,
    "zatca-invoicing": <ZatcaInvoicing />,
    "oracle-invoicing": <OracleInvoicing />,
    "microsoft365": <Microsoft365 />,
    "zatca-comprehensive-guide": <ZatcaComprehensive />,
    "sap-integration-with-zatca": <SapIntegration />,
    "e-invoicing-bahrain": <BahrainInvoicing />,
    "e-invoicing-oman": <OmanInvoicing />,
    "streamline": <Streamline />,
    "good-receipts": <GoodsReceipts />,
    "adapting-business": <AdaptingBusiness />,
    "breaking-barriers": <BreakingBarriers />,
    "zatca-invoice": <ZatcaInvoice />,
    "financial-penalities": <FinancialPenalties />,
    "complaint-invoice": <ComplaintInvoice />,
    "riyadh-expo": <RiyadhExpoBlog />,
    "zatca-fatoora-device-onboarding-requirements": <ZatcaFatooraDeviceRequirments />,
    "pos-billing-software-intergration-with-zatca": <Pos />,
    "enabling-marketplaces-with-e-invoicing": <TransformComplaint />,
    "automotive-industry": <AutomotiveIndustry />,
    "sap-ecc-challenge": <SapEcc />,
    "accqrate-books-msme-accounting": <AccqrateBooksMSMEAccounting />,
    //belgium
    "belgium-credit-notes": <BelgiumCreditNotes />,
    "belgium-e-invoicing-faqs": <BelgiumEInvoicingFAQs />,
    "belgium-e-invoicing-mandate": <BelgiumEInvoicingMandate />,
    "belgium-corporate-tax": <BelgiumCorporateTax />,
    "belgium-technical-rules": <BelgiumTechnicalRules />,
    "belgium-tax-system-2025": <BelgiumTaxSystem2025 />,
    "belgium-income-tax": <BelgiumIncomeTax />,
    "belgium-vat": <BelgiumVAT />,
    "belgium-vat-number": <BelgiumVATNumber />,
    "peppol-mercurius-belgium": <PeppolMercuriusBelgium />,
    "erp-adoption-2025": <ErpAdoption2025 />
  };

  const Component = blogComponents[url];
  if (!Component) return notFound();

  // Wrap in a div with overflow-x-hidden to prevent horizontal scroll
  return (
    <div className="overflow-x-hidden">
      {Component}
    </div>
  );
}
