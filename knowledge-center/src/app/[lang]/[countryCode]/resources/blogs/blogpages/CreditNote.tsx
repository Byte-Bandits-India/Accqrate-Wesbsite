/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import T from "@/components/T"
import BlogLayout from "../layout/BlogLayout";
import { useParams } from "next/navigation";

export default function CreditNote() {
  const params = useParams();
  const lang = params?.lang as string;
  const countryCode = params?.countryCode as string;

  return (
    <BlogLayout
      pageTitle={<T>Integrating Credit Notes with ZATCA: A Comprehensive Guide</T>}
      updatedOn="Feb 08th, 2024"
      minRead={23}
    >
      <img
        src="/images/blogs/credit-notes.webp"
        className="w-full mb-6 rounded-lg"
        alt="Integrating Credit Notes with ZATCA: A Comprehensive Guide"
      />

      <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
        <T>
          <a
            href="https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf"
            className="text-blue-600 "
          >
            <T>The credit note</T>
          </a>
          ,&nbsp;
          <T>
            also known as a credit memo, plays a pivotal role in business financial transactions. It signifies
            the return of funds to a company under various circumstances such as invoice errors, the receipt
            of incorrect or damaged products, or the cancellation of a purchase order. Credit notes can be
            issued for the full invoice amount or a partial sum. Not only do they adjust your account
            receivables, but they also rectify the taxes associated with the invoices. It’s essential to note
            that the credited sum should not surpass the invoice’s total gross amount.
          </T>
        </T>
      </p>

      <h2 className="text-fluid-body font-semibold mt-6 mb-3 text-gray-900">
        <T>Scenarios Leading to the Issuance of Credit Notes:</T>
      </h2>
      <ul className="list-disc ml-6 mb-6 text-fluid-small text-gray-700">
        <li>
          <T>
            To rectify invoice errors. For instance, if the invoice amount is overstated or the correct
            discount has not been applied.
          </T>
        </li>
        <li>
          <T>
            To cancel outstanding payments on an invoice. When companies anticipate a customer would not
            settle an invoice, they often produce a credit note to sidestep related taxations or VAT.
          </T>
        </li>
        <li>
          <T>
            To refund payments made against an invoice, especially when products malfunction within the
            warranty period.
          </T>
        </li>
      </ul>

      <h4 className="text-fluid-body font-semibold text-gray-900 mb-3">
        <T>Illustrating Credit Note Integration with ZATCA</T>
      </h4>

      <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
        <T>Below illustrates a scenario where a buyer procures products worth:</T>
        <br />
        <T>Net amount - 10,000 SAR</T> <br />
        <T>VAT amount - 1,500 SAR</T> <br />
        <T>Gross amount - 11,500 SAR</T> <br />
        <br />
        <T>
          The seller must get the invoice approved by ZATCA before dispatching it to the buyer. This process
          results in a VAT of 1,500 SAR, payable to ZATCA.
        </T>
        <br />
        <br />
        <T>
          Suppose, weeks later, the buyer decides to return the products due to defects. They assert that 20%
          of the goods are flawed and request a refund. Given the seller has already processed the invoice
          with ZATCA, a credit note for the 20% refund becomes imperative.
        </T>
        <br />
        <br />
        <T>The seller’s credit note details would be:</T>
        <br />
        <T>Net amount - 2,000 SAR</T> <br />
        <T>VAT amount - 300 SAR</T> <br />
        <T>Gross amount - 2,300 SAR</T> <br />
        <br />
        <T>
          Upon sending this credit note to ZATCA, referencing the original invoice, the new VAT payable
          becomes 1,200 SAR (1,500 – 300 = 1,200 SAR).
        </T>
      </p>

      <h3 className="text-fluid-body font-semibold text-gray-900 mt-6 mb-3">
        <T>Key Points on Credit Note Integration with ZATCA:</T>
      </h3>

      <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
        <T>
          With Accqrate, handling credit note generation and its integration with ZATCA becomes seamless. Here
          are essential integration steps:
        </T>
        <br />
        <br />
        <T>
          When sending a credit note to ZATCA, ensure you include the return invoice number, reason
          (instruction note), and return invoice date.
        </T>
      </p>

      <img src="/images/blogs/creditnote1.png" alt="creditnote1" className="w-full mb-4 rounded-lg shadow" />

      <p className="text-gray-700 leading-relaxed text-fluid-small mb-4">
        <T>Tags to remember for ZATCA submission:</T>
      </p>
      <ul className="list-disc ml-6 text-gray-700 text-fluid-small mb-4">
        <li>
          <T>Reference document: cbd:ID</T>
        </li>
        <li>
          <T>Reason for Credit note: cbc:InstructionNote</T>
        </li>
      </ul>

      <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
        <T>The approved XML from ZATCA will contain the references as shown below</T>
      </p>

      <img src="/images/blogs/creditnote2.png" alt="creditnote2" className="w-full mb-4 rounded-lg shadow" />

      <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
        <T>Once approved, the VAT will be deducted from the relevant invoice immediately.</T>
      </p>

      <h4 className="text-fluid-body font-semibold text-gray-900 mb-3">
        <T>Why Choose Accqrate?</T>
      </h4>

      <p className="text-gray-700 leading-relaxed mb-4 text-fluid-small">
        <a
          href="https://accqrate-erp.com/en/e-invoicing-plugin"
          className="text-blue-600 underline"
        >
          Accqrate
        </a>{" "}
        <T>
          offers a streamlined solution for integrating your ERPs with ZATCA, facilitating the sending of
          credit and debit notes for both B2C (Simplified credit and debit note) and B2B (Tax credit and debit
          note). If you are seeking an efficient way to manage your ZATCA Phase 2 Integration, especially
          concerning credit and debit notes, Accqrate has the expertise and perfect solution you need.
        </T>
        <br />
        <br />
        <a href={`/${lang}/${countryCode}/resources/faq`} className="text-blue-600 underline">
          <T>Got questions?</T>
        </a>{" "}
        or{" "}
        <a href={`/${lang}/${countryCode}/contact-us`} className="text-blue-600 underline">
          <T>need a demo?</T>
        </a>{" "}
        <T>Drop us a mail at</T>{" "}
        <a href="mailto:Contact@accqrate-erp.com" className="text-blue-600 underline">
          <T>Contact@accqrate-erp.com</T>
        </a>
      </p>
    </BlogLayout>
  );
}
