/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import T from "@/components/T";
import BlogLayout from "../layout/BlogLayout";

function ZatcaComprehensive() {
  return (
    <BlogLayout
      pageTitle="Advance Invoice and Prepayment Invoices in ZATCA: A Comprehensive Guide"
      updatedOn="Feb 08th, 2024"
      minRead="23"
    >
      <img
        src="/images/blogs/zatca-prepayment.webp"
        className="w-full mb-4 rounded-md"
        alt="Advance Invoice and Prepayment Invoices in ZATCA: A Comprehensive Guide"
      />

      <h3 className="text-fluid-small font-semibold leading-snug mb-4">
        <T>
          A Comprehensive Guide to declare VAT on advance invoices and prepayment invoices to ZATCA without
          double VAT payments
        </T>
      </h3>

      <div className="text-fluid-small text-gray-700 leading-relaxed mb-4 space-y-3">
        <p className="text-fluid-small">
          <T>
            Managing customer advances is pivotal for any enterprise, especially given the intricacies of the
            Sales Management process. With companies routinely receiving advances for the delivery of goods or
            services, understanding the nuances of different advance types becomes essential. These can be
            categorized as:
          </T>
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><T>Order-specific advances</T></li>
          <li><T>Adhoc advances (not order-specific)</T></li>
          <li><T>Milestone-based advances (aligned with payment schedules in invoices)</T></li>
        </ul>
        <p className="text-fluid-small">
          <T>
            It is vital that businesses adjust these advances in subsequent Sales Invoices or Direct Finance
            invoices. As per the ZATCA guidelines,
          </T>{" "}
          <a
            href="https://zatca.gov.sa/en/RulesRegulations/VAT/Pages/default.aspx#vat_page"
            className="text-blue-600 hover:underline"
          >
            VAT
          </a>{" "}
          <T>
            accrued in these advances must be promptly declared post-transaction. A strategic approach ensures
            businesses don't inadvertently pay double taxes: once for the advance and again for the invoice.
          </T>
        </p>
      </div>

      <h3 className="text-fluid-body font-semibold mb-3">
        <T>ZATCA E-invoicing Solution</T>
      </h3>

      <div className="text-fluid-small text-gray-700 leading-relaxed mb-4 space-y-3">
        <p className="text-fluid-small">
          ZATCA&apos;s{" "}
          <a
            href="https://zatca.gov.sa/en/E-Invoicing/PreparingYourBusiness/Phase2/Pages/How-to-prepare.aspx"
            className="text-blue-600 hover:underline"
          >
            <T>Phase 2 e-Invoicing</T>
          </a>{" "}
          <T>
            offers businesses a robust solution to seamlessly manage their advances. Among the available options
            for advance or prepayment adjustments in invoices include:
          </T>
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><T>Single advance/prepayment linked to one invoice</T></li>
          <li><T>Single advance/prepayment distributed across multiple invoices</T></li>
          <li><T>Multiple advances/prepayments apportioned over various invoices</T></li>
          <li><T>Several advances/prepayment tied to a single invoice</T></li>
        </ul>
      </div>

      <h3 className="text-fluid-body font-semibold mb-3">
        <T>The Process at a Glance</T>
      </h3>

      <div className="text-fluid-small text-gray-700 leading-relaxed mb-5 space-y-3">
        <p className="text-fluid-small">
          <T>
            1. When an advance invoice is generated in the ERP or Source system, it’s forwarded to ZATCA as a
            standard Tax invoice but tagged as Advance (with a fixed Invoice Type Code “386”).
          </T>
        </p>
        <p className="text-fluid-small">
          <T>
            2. When the actual invoice is later created, it’s sent to ZATCA as a Tax or Simplified invoice tagged
            as “Invoice” (code “388”) and includes advance details such as:
          </T>
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><T>Tax category (S, Z, E, or O)</T></li>
          <li><T>Advance/prepayment number and UDID</T></li>
          <li><T>Advance issue date in UTC</T></li>
          <li><T>Advance amounts (Net, VAT, Gross)</T></li>
          <li><T>VAT rate and currency</T></li>
        </ul>
        <p className="text-fluid-small">
          <T>
            The total advances adjusted in the invoice must match “cbc:PrepaidAmount” in ZATCA’s glossary.
          </T>
        </p>
      </div>

      <h3 className="text-fluid-body font-semibold mb-3">
        <T>Key Checks by ZATCA</T>
      </h3>
      <ul className="list-disc pl-6 mb-5 text-fluid-small text-gray-700 leading-relaxed space-y-1">
        <li><T>Ensure the same advance isn’t adjusted twice</T></li>
        <li><T>Provide VAT category for each adjustment</T></li>
        <li><T>Sum of prepaid net = total prepaid adjusted (0.01 rounding allowed)</T></li>
        <li><T>Advance currency must match invoice currency</T></li>
      </ul>

      <h3 className="text-fluid-body font-semibold mb-3">
        <T>Practical Business Scenario:</T>
      </h3>

      {/* Table 1 */}
      <div className="overflow-x-auto my-4">
        <table className="w-full border border-gray-300 text-fluid-small">
          <tbody>
            <tr><td className="p-3"><T>Issued on</T></td><td className="p-3"><T>01.Mar.2023 10:00:00</T></td></tr>
            <tr><td className="p-3"><T>Advance/Prepayment</T></td><td className="p-3"><T>IN23090001</T></td></tr>
            <tr><td className="p-3"><T>VAT Category</T></td><td className="p-3"><T>Standard</T></td></tr>
            <tr><td className="p-3"><T>Net amount</T></td><td className="p-3"><T>60,000 SAR</T></td></tr>
            <tr><td className="p-3"><T>VAT%</T></td><td className="p-3"><T>15%</T></td></tr>
            <tr><td className="p-3"><T>VAT amount</T></td><td className="p-3"><T>9,000 SAR</T></td></tr>
            <tr><td className="p-3"><T>Gross amount</T></td><td className="p-3"><T>69,000 SAR</T></td></tr>
          </tbody>
        </table>
      </div>

      <p className="text-center text-fluid-small text-gray-700 mb-6">
        <T>Sent to ZATCA and approved</T>
      </p>

      {/* Table 2 */}
      <div className="overflow-x-auto my-4">
        <table className="w-full border border-gray-300 text-fluid-small">
          <tbody>
            <tr><td className="p-3"><T>Issued on</T></td><td className="p-3"><T>04.Mar.2023 10:00:00</T></td></tr>
            <tr><td className="p-3"><T>Advance/Prepayment</T></td><td className="p-3"><T>IN23090002</T></td></tr>
            <tr><td className="p-3"><T>VAT Category</T></td><td className="p-3"><T>Standard</T></td></tr>
            <tr><td className="p-3"><T>Net amount</T></td><td className="p-3"><T>40,000 SAR</T></td></tr>
            <tr><td className="p-3"><T>VAT%</T></td><td className="p-3"><T>15%</T></td></tr>
            <tr><td className="p-3"><T>VAT amount</T></td><td className="p-3"><T>6,000 SAR</T></td></tr>
            <tr><td className="p-3"><T>Gross amount</T></td><td className="p-3"><T>46,000 SAR</T></td></tr>
          </tbody>
        </table>
      </div>

      <p className="text-center text-fluid-small text-gray-700 mb-6">
        <T>Sent to ZATCA and approved</T>
      </p>

      {/* Table 3 */}
      <div className="overflow-x-auto my-4">
        <table className="w-full border border-gray-300 text-fluid-small">
          <tbody>
            <tr><td className="p-3"><T>Issued on</T></td><td className="p-3"><T>14.Apr.2023 11:45:00</T></td></tr>
            <tr><td className="p-3"><T>Advance/Prepayment</T></td><td className="p-3"><T>IN23090003</T></td></tr>
            <tr><td className="p-3"><T>VAT Category</T></td><td className="p-3"><T>Standard</T></td></tr>
            <tr><td className="p-3"><T>Net amount</T></td><td className="p-3"><T>80,000 SAR</T></td></tr>
            <tr><td className="p-3"><T>VAT%</T></td><td className="p-3"><T>15%</T></td></tr>
            <tr><td className="p-3"><T>VAT amount</T></td><td className="p-3"><T>12,000 SAR</T></td></tr>
            <tr><td className="p-3"><T>Gross amount</T></td><td className="p-3"><T>92,000 SAR</T></td></tr>
          </tbody>
        </table>
      </div>

      <p className="text-center text-fluid-small text-gray-700 mb-6">
        <T>
          When the above invoice is sent to ZATCA, it should include all the information of the advances numbers.
        </T>
      </p>

      <h3 className="text-fluid-body font-semibold mb-3">
        <T>Here there could be two scenarios</T>
      </h3>

      <div className="text-fluid-small text-gray-700 leading-relaxed space-y-3">
        <p className="text-fluid-small text-gray-700">
          <T>
            1. Adjust advance to match invoice amount (e.g., IN23090003 = 92,000 SAR adjusted with earlier
            advances).
          </T>
        </p>
        <p className="text-fluid-small text-gray-700">
          <T>
            2. Adjust the advance fully — if over-adjusted, raise a Credit Note for difference (e.g., 23,000 SAR).
          </T>
        </p>
        <p className=" text-fluid-small text-gray-700 leading-relaxed">
          <T>Navigating VAT declarations with</T>{" "}
          <a href="https://zatca.gov.sa/en/Pages/default.aspx" className="text-blue-600 hover:underline">ZATCA</a>{" "}
          <T>
            can be complex. But imagine a world where your ERP effortlessly aligns with ZATCA’s rules, ensuring
            compliance, integration, and security.
          </T>{" "}
          <a href="https://accqrate-erp.com/en/e-invoicing-plugin" className="text-blue-600 hover:underline">Accqrate</a>{" "}
          <a href="https://accqrate-erp.com/en/contact-us" className="text-blue-600 hover:underline">
            <T>is here to help.</T>
          </a>
        </p>
      </div>
    </BlogLayout>
  );
}

export default ZatcaComprehensive;
