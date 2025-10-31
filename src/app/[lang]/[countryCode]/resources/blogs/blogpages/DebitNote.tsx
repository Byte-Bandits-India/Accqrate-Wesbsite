"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import T from "@/components/T";
import BlogLayout from "../layout/BlogLayout";
import CtaNumber from "./CtaNumber";
import { useParams } from "next/navigation";

function DebitNote() {
  const params = useParams();
  const lang = params?.lang as string;
  const countryCode = params?.countryCode as string;

  return (
    <BlogLayout
      pageTitle={<T>Integration of Debit Memos with ZATCA: An In-Depth Overview</T>}
      updatedOn="Feb 08th, 2024"
      minRead="23"
    >
      {/* Cover Image */}
      <img
        src="/images/blogs/debit-notes.webp"
        className="w-full mb-6 rounded-lg"
        alt="Integration of Debit Memos with ZATCA: An In-Depth Overview"
      />

      {/* Intro Paragraph */}
      <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
        <T>
          Navigating the financial landscape of today, especially with the introduction of{" "}
        </T>
        <a
          href={`/${lang}/${countryCode}/resources/blogs/adapting-business`}
          className="text-blue-600 hover:underline"
        >
          <T>ZATCAs Phase 2 integration, </T>
        </a>
        <T>
          can be intricate. This article simplifies the concept of debit memos, shedding light on their
          significance from both the seller and buyer perspectives.
        </T>
      </p>

      {/* Section: Seller Perspective */}
      <h3 className="text-fluid-body font-semibold text-gray-900 mt-6 mb-3">
        <T>Understanding Debit Notes from the Seller's Perspective</T>
      </h3>

      <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
        <T>
          A debit note, commonly referred to as a debit memo, serves as a financial document from the seller
          to the buyer. Its main purpose is to inform the buyer about their current debts. Before issuing an
          official invoice for goods or services, businesses may use debit notes to outline the existing debt
          obligations.
        </T>
        <br />
        <br />
        <T>
          Debit notes are particularly helpful for sellers in tracking outstanding amounts when goods are
          purchased on credit. They are also used in B2C (simplified debit notes) transactions, notably in
          cases when customers return goods that were initially received on credit.
        </T>
        <br />
        <br />
        <T>
          While invoices represent sales, debit notes can represent returns or addendum to an already issued
          invoice. An important distinction to understand is that while an invoice cannot be a debit note, a
          debit note can sometimes function as an invoice, given that terms are clearly laid out. This is a
          rare occurrence but is a legal document considered for taxations.
        </T>
        <br />
        <br />
        <T>
          Another vital point is that debit notes don't necessarily involve the actual transfer of assets.
          They are primarily ledger entries to keep track of shipped inventories on credit and payments due.
          Payments aren’t demanded immediately upon issuing a debit note. Instead, a formal invoice is
          presented later, with the debit note adjusted against a credit note.
        </T>
        <br />
        <br />
        <T>
          In short, debit notes on the seller side are issued in the following scenarios: by the seller to
          remind the buyer of the current debt situation or obligations; by the seller as a credit extension
          until the costs of the goods are paid by the buyer.
        </T>
        <br />
        <br />
        <T>
          For instance, if a seller realizes they've invoiced the buyer $6,000 when the rightful amount is
          $7,000, they'll send a debit note for the extra $1,000, providing a reason for the adjustment.
        </T>
        <br />
        <br />
        <T>ZATCA has introduced classifications for debit notes:</T>
      </p>

      <ul className="list-disc ml-6 text-fluid-small text-gray-700 mb-4">
        <li>
          <T>B2C Debit notes are termed "Simplified Debit notes".</T>
        </li>
        <li>
          <T>B2B Debit notes are labeled "Tax Debit notes".</T>
        </li>
      </ul>

      <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
        <T>
          It's crucial for sellers to report these debit notes to ZATCA, regardless of whether they're in
          Phase 1 or Phase 2. Taxes from these notes are logged into ZATCA, with the seller responsible for
          the taxes tied to the debit notes issued.
        </T>
        <br />
        <br />
        <T>Assume the below Debit note is created by the seller and sent to ZATCA:</T>
        <br />
        <T>Net amount - 10,000 SAR</T> <br />
        <T>VAT amount - 1,500 SAR</T> <br />
        <T>Gross amount - 11,500 SAR</T> <br />
        <br />
        <T>
          At this stage, the debit memo is propagated to ZATCA and a VAT of 1500 SAR is recorded. After the
          deliveries are confirmed, the seller creates an invoice for 11,500 SAR and creates a credit note for
          11,500 SAR referring to the cancellation of the debit note.
        </T>
      </p>

      {/* Section: Buyer Perspective */}
      <h3 className="text-fluid-body font-semibold text-gray-900 mt-6 mb-3">
        <T>Debit Notes from the Buyer's Angle</T>
      </h3>

      <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
        <T>
          From the buyer's standpoint, a debit note is typically issued when there's a need to return a
          portion of a delivery or shipment to the seller. This action from the buyer corresponds with a
          credit note on the seller's end.
        </T>
      </p>

      <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
        <T>Below is an explanation of the scenario:</T>
      </p>

      <ul className="list-disc ml-6 text-fluid-small text-gray-700 mb-4">
        <li>
          <T>The buyer creates a Purchase Order for the seller.</T>
        </li>
        <li>
          <T>The seller delivers the material, and the buyer processes a goods inward.</T>
        </li>
        <li>
          <T>The seller issues a tax invoice.</T>
        </li>
        <li>
          <T>The buyer pays the invoice according to the payment terms.</T>
        </li>
        <li>
          <T>After this, the buyer observes defects in the delivered goods.</T>
        </li>
        <li>
          <T>
            At this stage, the buyer issues a debit note to the seller for the value of the damaged goods to
            recover the money.
          </T>
        </li>
        <li>
          <T>
            On the other hand, the seller creates a credit note to adjust the books and the taxes that need
            to be paid. The seller must declare this credit note to ZATCA. However, from ZATCA's viewpoint,
            there is no action needed from the buyer.
          </T>
        </li>
      </ul>

      <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
        <T>Example:</T>
        <br />
        <T>
          Assume that the buyer makes a credit purchase of material for 10,000 SAR from the seller at an
          agreed price. The seller produces the material, delivers it to the buyer, and creates an invoice for
          10,000 SAR.
        </T>
        <br />
        <br />
        <T>
          During inspection, the buyer finds that material worth 2,000 SAR is damaged and unusable. The buyer
          then creates a debit note for the seller for 2,000 SAR, indicating that the seller needs to debit
          this amount.
        </T>
        <br />
        <br />
        <T>Following the transaction:</T>
      </p>

      <ul className="list-disc ml-6 text-fluid-small text-gray-700 mb-6">
        <li>
          <T>The seller will debit its accounts receivable by 2,000 SAR.</T>
        </li>
        <li>
          <T>The buyer will credit its accounts payable by 2,000 SAR.</T>
        </li>
      </ul>

      {/* Section: Accqrate Edge */}
      <h3 className="text-fluid-body font-semibold text-gray-900 mt-6 mb-3">
        <T>The Accqrate Edge</T>
      </h3>

      <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
        <a
          href="https://accqrate-erp.com/en/e-invoicing-plugin"
          className="text-blue-600 underline"
        >
          Accqrate{" "}
        </a>
        <T>
          offers a streamlined solution for integrating your ERPs with ZATCA, facilitating the sending of
          credit and debit notes for both B2C (Simplified credit and debit note) and B2B (Tax credit and debit
          note). If you're seeking an efficient way to manage your ZATCA Phase 2 Integration, especially
          concerning credit and debit notes, Accqrate has the expertise and perfect solution you need.
        </T>
      </p>

      <CtaNumber />
    </BlogLayout>
  );
}

export default DebitNote;
