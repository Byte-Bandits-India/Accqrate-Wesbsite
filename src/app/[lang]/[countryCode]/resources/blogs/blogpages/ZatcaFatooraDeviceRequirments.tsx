/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import T from "@/components/T";
import BlogLayout from "../layout/BlogLayout";
import CtaNumber from "./CtaNumber";

export default function ZatcaFatooraDeviceRequirments() {
  return (
    <BlogLayout
      pageTitle={
        <T>
          Ensuring Compliance and Efficiency: A Guide to ZATCA’s FATOORA Device
          Onboarding Requirements
        </T>
      }
      updatedOn="May 28th, 2024"
      minRead="23"
    >
      <img
        src="/images/blogs/zatca-fatoora-device-onboarding-requirements.webp"
        className="w-full mb-3"
        alt="Ensuring Compliance and Efficiency: A Guide to ZATCA’s FATOORA Device Onboarding Requirements"
      />

      <p>
        <T>
          In the rapidly evolving landscape of e-invoicing in Saudi Arabia,
          staying abreast of regulatory requirements is crucial for businesses
          of all sizes. A recent outreach from the Zakat, Tax, and Customs
          Authority{" "}
          <a
            href="https://zatca.gov.sa/en/E-Invoicing/Pages/default.aspx"
            className="text-blue-600 hover:underline"
          >
            <T>(ZATCA)</T>
          </a>{" "}
          underscores the importance of meticulous compliance during the device
          onboarding process, particularly in populating Certificate Signing
          Request (CSR) fields correctly. This blog delves into the nuances of
          this requirement and offers guidance on ensuring seamless integration
          with{" "}
          <a
            href="https://login.zatca.gov.sa/"
            className="text-blue-600 hover:underline"
          >
            <T>FATOORA</T>
          </a>
          , Saudi Arabia's official e-invoicing platform.
        </T>
      </p>

      <h2>
        <T>Understanding the ZATCA Notification</T>
      </h2>
      <p>
        <T>
          The essence of the ZATCA’s notification, titled "FATOORA - Device
          Onboarding Outreach," is to remind taxpayers of the criticality of
          accurately entering CSR details during device setup. This process is
          pivotal as it establishes a secure communication channel between
          taxpayers and ZATCA, enabling accurate and compliant e-invoicing.
        </T>
      </p>

      <h2>
        <T>Key Scenarios Requiring Multiple Device Registrations</T>
      </h2>
      <ul className="list-disc pl-5">
        <li>
          <T>Multiple Commercial Registrations (CRs) under one VAT</T>
        </li>
        <li>
          <T>Multiple Excise Goods Stores (EGS) under one VAT</T>
        </li>
        <li>
          <T>Multiple Point-of-Sale (POS) devices</T>
        </li>
        <li>
          <T>Multiple branches acting as independent devices</T>
        </li>
      </ul>

      <h2>
        <T>Essential Fields for Device Onboarding</T>
      </h2>
      <ol className="list-decimal pl-5 space-y-1">
        <li>
          <b>Common Name (CN):</b>{" "}
          <T>Name or Asset Tracking Number of the Solution Unit</T>
        </li>
        <li>
          <b>EGS Serial Number:</b>{" "}
          <T>Manufacturer Name, Model, Version, and Serial Number</T>
        </li>
        <li>
          <b>Organization Identifier:</b>{" "}
          <T>
            VAT Registration Number to associate the device correctly with your
            TIN
          </T>
        </li>
        <li>
          <b>Organization Unit Name:</b>{" "}
          <T>
            For branches or VAT groups, include the TIN of the group member
            whose device is being onboarded
          </T>
        </li>
        <li>
          <b>Organization Name:</b> <T>Organization/Taxpayer Name</T>
        </li>
        <li>
          <b>Country Name:</b> <T>The location of operation</T>
        </li>
        <li>
          <b>Invoice Type:</b>{" "}
          <T>
            Specify supported invoice types using a code system (e.g., 1100 for
            Standard and Simplified Tax Invoice)
          </T>
        </li>
        <li>
          <b>Location:</b>{" "}
          <T>Address of the branch or primary location of the device</T>
        </li>
        <li>
          <b>Industry:</b>{" "}
          <T>Sector for which the device will generate invoices</T>
        </li>
      </ol>

      <h2>
        <T>Serial Number Significance and Standardization</T>
      </h2>
      <p>
        <T>
          ZATCA utilizes serial numbers to meticulously track multiple devices
          operated by a single company. These serial numbers must be unique to
          ensure accurate tracking and management.
        </T>
      </p>

      <h4>
        <T>Common Issues and Standardization</T>
      </h4>
      <p>
        <T>
          Historically, serial number discrepancies have arisen due to varying
          formats. ZATCA urges all parties to adopt a standardized format,
          enabling efficient device tracking and management.
        </T>
      </p>

      <h4>
        <T>What to do if you have a wrong serial number?</T>
      </h4>
      <ol className="list-decimal pl-5 space-y-1">
        <li>
          <b>Create a New Device:</b> <T>Duplicate the existing device.</T>
        </li>
        <li>
          <b>Update the Serial Number:</b>{" "}
          <T>Ensure it follows the correct format.</T>
        </li>
        <li>
          <b>Access FATOORA:</b>{" "}
          <T>Log in to obtain a One-Time Password (OTP).</T>
        </li>
        <li>
          <b>Onboard the New Device:</b>{" "}
          <T>Register it with ZATCA for compliance.</T>
        </li>
        <li>
          <b>Switch Source Systems:</b>{" "}
          <T>Use the newly onboarded device.</T>
        </li>
        <li>
          <b>Deactivate the Old Device:</b>{" "}
          <T>Remove it to prevent duplication.</T>
        </li>
      </ol>

      <h4>
        <T>Coordinating Multiple Devices</T>
      </h4>
      <p>
        <T>
          For organizations using multiple devices, ensure teams coordinate
          effectively to prevent invoicing errors or mismatches.
        </T>
      </p>

      <h4>
        <T>Act Proactively</T>
      </h4>
      <p>
        <T>
          Don’t wait for reminders from ZATCA. Fix issues early to maintain
          compliance and efficiency.
        </T>
      </p>

      <h2>
        <T>Accqrate’s E-Invoicing Solutions: Tailored for Compliance</T>
      </h2>
      <p>
        <T>
          Accqrate’s e-invoicing solutions are ZATCA-approved, fully compliant
          with Phase 2, and integrate with ERPs, POS systems, and custom
          applications.
        </T>
      </p>

      <h4>
        <T>Why Choose Accqrate?</T>
      </h4>
      <p>
        <a
          href="https://accqrate-erp.com/en/e-invoicing-plugin"
          className="text-blue-600 hover:underline"
        >
          Accqrate
        </a>{" "}
        <T>
          simplifies ZATCA Phase 2 Integration, especially for managing credit
          and debit notes efficiently and compliantly.
        </T>
      </p>

      <CtaNumber />
    </BlogLayout>
  );
}
