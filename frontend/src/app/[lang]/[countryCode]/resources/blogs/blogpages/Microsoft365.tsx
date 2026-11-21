/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Col, Row } from "antd";
import T from "@/components/T";
import BlogLayout from "../layout/BlogLayout";

export default function Microsoft365() {
  return (
    <BlogLayout
      pageTitle="Microsoft Dynamics 365 E-invoicing and Integration with ZATCA Phase 2 E-invoicing"
      updatedOn="Feb 08th, 2024"
      minRead="23"
    >
      <img
        src="/images/blogs/zatcaintegration-with-microsoft365.webp"
        className="w-full mb-4 rounded-md"
        alt="Microsoft Dynamics 365 E-invoicing and Integration with ZATCA Phase 2 E-invoicing"
      />

      <p className="text-fluid-small text-gray-700 leading-relaxed mb-4">
        <T>As one of the top-tier ERP providers in Saudi Arabia,</T>{" "}
        <a href="https://dynamics.microsoft.com/en-in/" className="text-blue-600 hover:underline">
          <T>Microsoft Dynamics 365</T>
        </a>{" "}
        <T>
          caters predominantly to medium and large enterprises. One of its standout features is the technology
          stack that facilitates a seamless integration with the ZATCA E-invoicing platform. The rapid
          implementation of proven
        </T>{" "}
        <a href="https://accqrate-erp.com/en/e-invoicing-plugin/" className="text-blue-600 hover:underline">
          <T>ZATCA approved e-invoicing packages</T>
        </a>{" "}
        <T>for Microsoft Dynamics 365 means your solution can be up and running within a week.</T>
      </p>

      <h3 className="text-fluid-body font-semibold mb-3">
        <T>How Microsoft Dynamics 365 and ZATCA Integration Works?</T>
      </h3>

      <p className="text-fluid-small text-gray-700 leading-relaxed mb-3">
        <T>Accqrate’s E-invoicing package for</T>{" "}
        <a href="https://zatca.gov.sa/en/Pages/default.aspx" className="text-blue-600 hover:underline">
          <T>Microsoft Dynamics 365</T>
        </a>{" "}
        <T>
          communicates with ZATCA using real-time APIs for Tax invoices and operates in batch mode for
          Simplified invoices. This integration ensures ZATCA-approved XMLs and PDFs, complete with QR codes,
          are stored directly in Microsoft Dynamics 365. This creates an enriching user experience for
          business teams, allowing them to effortlessly manage:
        </T>
      </p>

      <ul className="list-disc pl-6 mb-4 text-fluid-small text-gray-700 leading-relaxed">
        <li><T>Order-based invoices</T></li>
        <li><T>Direct invoices</T></li>
        <li><T>Credit and Debit memos</T></li>
        <li>
          <a href="https://accqrate-erp.com/en/zatca-comprehensive-guide" className="text-blue-600 hover:underline">
            <T>Advance and milestone invoices</T>
          </a>
        </li>
      </ul>

      <h3 className="text-fluid-body font-semibold mt-6 mb-3">
        <T>The Integration Process:</T>
      </h3>

      <img src="/images/microsoft/image1.webp" className="w-full my-3 rounded-md" alt="integration1" />
      <p className="text-fluid-small text-gray-700 leading-relaxed mb-4">
        <T>The process of handshake between Microsoft Dynamics 365 to ZATCA happens as explained below</T>
      </p>

      {/* Steps Section */}
      {[
        {
          title: "1. Company Onboarding to ZATCA",
          img: "image2.webp",
          text: "The initial step involves integrating your business with ZATCA. Utilizing the Microsoft Dynamics 365 package, Endpoint, Secret keys, and App keys are generated. This automated process ensures your company is effortlessly onboarded into the ZATCA Fatoora portal, laying down the foundation for seamless E-invoicing."
        },
        {
          title: "2. E-invoice Creation",
          img: "image3.webp",
          text: "Businesses can generate E-invoices directly within Microsoft Dynamics 365, where all required information such as buyer details, line items, and tax values are compiled and ready for submission."
        },
        {
          title: "3. Direct & Scheduled E-invoicing with ZATCA",
          img: "image4.webp",
          text: "With the integrated menus, businesses can directly send their invoices to ZATCA, either instantly or on a scheduled basis, ensuring timely and efficient management."
        },
        {
          title: "4. ZATCA Approval",
          img: "image5.webp",
          text: "Every e-invoice undergoes a rapid approval process by ZATCA. APIs work in the background, embedding digital signatures, CSIDs, and Digest values, and checking compliance before submission."
        },
        {
          title: "5. Invoice Verification",
          img: "image6.webp",
          text: "Approved invoices receive QR codes and XML data, which act as verification tokens for transparency and compliance."
        },
        {
          title: "6. Access Invoice PDF",
          img: "image7.webp",
          text: "Users can access the invoice PDF embedded with the ZATCA QR code and UDID for both tax and simplified invoices, ensuring easy verification."
        },
        {
          title: "7. E-Invoicing Logs",
          img: "image8.webp",
          text: "Businesses can view comprehensive logs showing transmission status, timestamps, and ZATCA responses, helping maintain full traceability."
        },
        {
          title: "8. Archive and Audit",
          img: "image10.webp",
          text: "Approved XMLs are archived in Microsoft Dynamics 365 with all signatures, details, and serial numbers for audit-ready compliance."
        },
      ].map((step, idx) => (
        <div key={idx}>
          <h3 className="font-semibold text-fluid-body mt-5 mb-2">
            <T>{step.title}</T>
          </h3>
          <img src={`/images/microsoft/${step.img}`} className="w-full my-3 rounded-md" alt={step.title} />
          <p className="text-fluid-small text-gray-700 leading-relaxed mb-4">
            <T>{step.text}</T>
          </p>
        </div>
      ))}

      <img src="/images/microsoft/image9.webp" className="w-full my-4 rounded-md" alt="extra-image" />

      <h3 className="text-fluid-small font-semibold mt-6 mb-3">
        <T>Seamless Integration with Accqrate: The Trusted ZATCA Provider</T>
      </h3>

      <p className="text-fluid-small text-gray-700 leading-relaxed mb-3">
        <T>
          Accqrate, an approved ZATCA provider, sets the standard for integration within Microsoft Dynamics
          365, supporting both cloud and on-premises setups.
        </T>
      </p>

      <ul className="list-disc pl-6 mb-5 text-fluid-small text-gray-700 leading-relaxed space-y-2">
        <li>
          <b><T>🔒 Security Above All:</T></b>{" "}
          <T>End-to-end encryption ensures safety, privacy, and compliance for all e-invoicing data.</T>
        </li>
        <li>
          <b><T>⏰ Efficiency Redefined:</T></b>{" "}
          <T>Integration can be completed in under two weeks, minimizing downtime and maximizing efficiency.</T>
        </li>
        <li>
          <b><T>🔍 Experience Before Commitment:</T></b>{" "}
          <T>Try Accqrate’s proof-of-concept for ZATCA Sandbox testing before full implementation.</T>
        </li>
        <li>
          <b><T>📞 Dedicated Assistance:</T></b>{" "}
          <T>Need help? Write to us at contact@accqrate-erp.com for support or demo scheduling.</T>
        </li>
      </ul>

      <section className="demo my-8">
        <Row justify="center">
          <Col xs={24} sm={24} md={24} lg={26}>
            <h3 className="text-fluid-body font-semibold mb-4 text-left">
              <T>Accqrate Solution Offerings For Your Business</T>
            </h3>
            <div className="aspect-video w-full  overflow-hidden">
              <iframe
                className=""
                width="100%"
                height="450"
                style={{ border: "none" }}

                src="https://www.youtube.com/embed/8Ji66DQ9bC4"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </Col>
        </Row>
      </section>
    </BlogLayout>
  );
}
