/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import T from "@/components/T";
import BlogLayout from "../layout/BlogLayout";
import ZatcaPhaseTwoWaves from "./ZatcaPhaseTwoWaves";

export default function ZatcaInvoicing() {
  return (
    <BlogLayout
      pageTitle="Understanding ZATCA E-Invoicing Phase 2 Waves in Saudi Arabia"
      updatedOn="Jan 22nd, 2025"
      minRead="23"
    >
      <img
        src="/images/blogs/zatca-einvocing-phase2.webp"
        className="w-full mb-3 rounded-lg"
        alt="Understanding ZATCA E-Invoicing Phase 2 Waves in Saudi Arabia"
      />

      <p>
        <a href="https://zatca.gov.sa/">
          <T>ZATCA (Zakat, Tax and Customs Authority)</T>
        </a>{" "}
        <T>continues to roll out its</T>{" "}
        <a href="https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx">
          <T>E-Invoicing Phase 2 requirements in waves.</T>
        </a>{" "}
        <T>
          Each wave targets businesses based on specific annual revenue thresholds and includes a grace period
          to help with the transition. In this blog, we'll break down the waves, clarify key dates, and
          highlight the latest updates and guidance from ZATCA.
        </T>
      </p>

      <hr />
      <h3><T>What Are the ZATCA Phase 2 Waves?</T></h3>

      <p>
        <T>
          <a href="https://zatca.gov.sa/en/E-Invoicing/PreparingYourBusiness/Phase2/Pages/default.aspx">
            <T>Phase 2 of ZATCA’s E-Invoicing initiative</T>
          </a>{" "}
          involves integrating a taxpayer’s e-invoice system with the ZATCA Fatoora portal in a phased manner.
          Businesses are segmented based on their revenue, ensuring a smoother transition for everyone.
        </T>
      </p>

      <h3 className="text-lg font-semibold mt-4">How Waves Are Determined</h3>
      <ul className="list-disc pl-10 space-y-2">
        <li>
          <b><T>1. Annual Taxable Revenues</T></b>
          <ul className="pl-6 list-disc">
            <li><T>Your company’s total taxable revenue in <b>2022 or 2023</b> determines your wave.</T></li>
            <li><T>For <b>initial waves</b>, 2021 revenue was used.</T></li>
            <li><T>For later waves, <b>2022 or 2023</b> data is used.</T></li>
            <li><T>Consult your finance team if 2023 books are not finalized.</T></li>
          </ul>
        </li>

        <li>
          <b><T>2. ZATCA Notifications</T></b>
          <ul className="pl-6 list-disc">
            <li><T>ZATCA emails you which wave you’re in.</T></li>
            <li><T>Ensure contact info on file is updated.</T></li>
          </ul>
        </li>

        <li>
          <b><T>3. Grace Period and Compliance Deadline</T></b>
          <ul className="pl-6 list-disc">
            <li><T>Each wave includes a grace period for stabilization.</T></li>
            <li><T>Early waves: <b>6 months</b>; later waves: <b>1 month</b>.</T></li>
            <li><T>After deadline, ZATCA begins official tax recording.</T></li>
          </ul>
        </li>
      </ul>

      <hr className="my-6" />
      <h5>Latest Updates (as of 2025)</h5>
      <h3>New Revenue Thresholds & Extended Deadlines</h3>
      <ZatcaPhaseTwoWaves />

      <ul className="list-disc pl-10 space-y-2">
        <li>
          <T>
            <b>Additional Waves:</b> As of 2025, new waves now include small & medium enterprises with revenues
            above <b>SAR 1.75 million</b> (deadline: <b>30th Sept 2025</b>).
          </T>
        </li>
        <li>
          <T>
            <b>Penalties for Non-Compliance:</b> ZATCA has emphasized stricter fines for missing deadlines.
          </T>
        </li>
      </ul>

      <h3 className="mt-6">Clarification on Grace Period Usage</h3>
      <ul className="list-disc pl-10 space-y-2">
        <li>
          <T>
            <b>No “Free Pass”:</b> Grace period is for testing, not delay. Integrate as soon as possible.
          </T>
        </li>
        <li>
          <T>
            <b>Shorter Grace:</b> New waves (2025) may have just <b>one month</b>.
          </T>
        </li>
      </ul>

      <h3 className="mt-6">Example of Compliance Timelines</h3>
      <T>If your wave’s official deadline is <b>January 31, 2025:</b></T>
      <ul className="list-disc pl-10 space-y-2">
        <li><T><b>Before Feb 1:</b> Operate under Phase 1 norms.</T></li>
        <li><T><b>From Feb 1:</b> Full Phase 2 compliance required.</T></li>
      </ul>

      <h3 className="mt-6">Missed Your Wave Deadline?</h3>
      <ul className="list-disc pl-10 space-y-2">
        <li><T><b>Immediate Action:</b> Begin integration immediately.</T></li>
        <li><T><b>One-Time Leniency:</b> Past invoices can be submitted once integrated.</T></li>
      </ul>

      <hr className="my-6" />
      <h3><T>Best Practices for ZATCA Phase 2 Compliance</T></h3>
      <ul className="list-disc pl-10 space-y-2">
        <li><b><T>1. Identify Your Wave Early</T></b></li>
        <li><b><T>2. Plan & Implement</T></b></li>
        <li><b><T>3. Train Your Staff</T></b></li>
        <li><b><T>4. Keep Up with ZATCA Updates</T></b></li>
      </ul>

      <hr className="my-6" />
      <h3><T>Level Up Your E-Invoicing with Accqrate</T></h3>
      <p className="story">
        <T>
          Over <b>5,000</b> Saudi businesses trust <b>Accqrate</b> for <b>300M+</b> compliant e-invoices monthly.
          Integrate easily with ERP/POS systems for seamless ZATCA Fatoora portal connectivity.
        </T>
      </p>
      <ul className="list-disc pl-10 space-y-2">
        <li><T><b>Proven Track Record:</b> Wave 1 clients passed audits successfully.</T></li>
        <li><T><b>Continuous Compliance:</b> Automatic ZATCA update tracking.</T></li>
        <li><T><b>Stress-Free Integration:</b> Dedicated onboarding & support.</T></li>
      </ul>

      <hr className="my-6" />
      <h3>Conclusion</h3>
      <p className="story">
        <T>
          The transition to ZATCA Phase 2 is a key milestone. Identify your wave, meet deadlines, and choose
          trusted partners like Accqrate for smooth compliance.
        </T>
      </p>

      <h3>Disclaimer</h3>
      <p className="story">
        <T>
          This article is based on 2025 ZATCA guidelines. For personalized guidance, consult your tax advisor.
        </T>
      </p>

      <h3>About Accqrate</h3>
      <p className="story">
        <T>
          <a href="https://accqrate-erp.com/" target="_blank" rel="noreferrer">Accqrate</a> is a Saudi-based
          ERP & e-invoicing provider offering full-suite ERP and POS solutions powered by AI.
        </T>
      </p>
    </BlogLayout>
  );
}
