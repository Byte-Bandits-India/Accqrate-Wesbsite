/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Col, Row } from 'antd'
import T from "@/components/T";
import BlogLayout from "../layout/BlogLayout";

function SapIntegration() {
  return (
    <BlogLayout
      pageTitle={<T>SAP E-Invoicing and Its Integration with ZATCA: Paving the Way for Digital Excellence</T>}
      updatedOn="Feb 08th, 2024"
      minRead="23"
    >
      <img
        src="/images/blogs/sap-e-invocing-integration-with-zatca.webp"
        className="w-100 mb-3"
        alt="SAP E-Invoicing and Its Integration with ZATCA: Paving the Way for Digital Excellence"
      />

      <div className="story text-fluid-small leading-relaxed">
        <T>In the evolving digital landscape, Saudi Arabia&apos;s Zakat, Tax, and Customs Authority</T>
        <a href="https://zatca.gov.sa/en/Pages/default.aspx" className="text-blue-600 underline"> (ZATCA) </a>
        <T>
          has pioneered electronic invoicing, launching its first phase on 4th December 2021 and progressing
          into the second phase from 1st January 2023. The initiative ensures transparency, efficiency,
          and compliance within the digital economy.
        </T>
      </div>

      <h3 className="text-fluid-body font-semibold mt-6 mb-3">
        <T>Accqrate E-Invoicing Solutions: Bridging SAP and ZATCA</T>
      </h3>
      <div className="story text-fluid-small leading-relaxed">
        <T>Accqrate provides specialized</T>
        <a href="https://accqrate-erp.com/en/e-invoicing-plugin" className="text-blue-600 underline">
          <T> ERP integrators </T>
        </a>
        <T>
          for SAP to integrate with ZATCA via APIs, ensuring smooth real-time and batch processing between systems.
        </T>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>
            <b><T>Batch Mode Efficiency:</T></b>{" "}
            <T>Through RFC calls, Accqrate optimizes the generation of simplified invoices efficiently.</T>
          </li>
          <li>
            <b><T>Real-time Excellence:</T></b>{" "}
            <T>Leveraging API calls via ABAP programming to ensure instantaneous integration and validation.</T>
          </li>
        </ul>
      </div>

      <h3 className="text-fluid-body font-semibold mt-6 mb-3">
        <T>Integration Process Overview:</T>
      </h3>

      <div className="story text-fluid-small leading-relaxed">
        <img src="/images/integration/integration1.webp" className="w-100 mb-2" alt="integration1" />
        <T>1. An invoice is generated in SAP.</T>

        <img src="/images/integration/integration2.webp" className="w-100 mb-2 mt-3" alt="integration2" />
        <T>2. The output message ZINV is configured to invoke specific Z-Programs.</T>

        <img src="/images/integration/integration3.webp" className="w-100 mb-2 mt-3" alt="integration3" />
        <T>3. At this stage, invoice printouts lack the QR code or ZATCA ID.</T>

        <img src="/images/integration/integration4.webp" className="w-100 mb-2 mt-3" alt="integration4" />
        <T>4. Accqrate’s E-invoicing tracker in SAP provides a complete view of all processed invoices.</T>

        <img src="/images/integration/integration5.webp" className="w-100 mb-2 mt-3" alt="integration5" />
        <T>5. A green process indicator signifies ZATCA approval of the invoice.</T>

        <img src="/images/integration/integration6.webp" className="w-100 mb-2 mt-3" alt="integration6" />
        <T>6. Clicking on the XML icon displays the ZATCA-approved XML.</T>

        <img src="/images/integration/integration7.webp" className="w-100 mb-2 mt-3" alt="integration7" />
        <T>7. Clicking on the PDF icon shows the invoice printout.</T>

        <img src="/images/integration/integration8.webp" className="w-100 mb-2 mt-3" alt="integration8" />
        <T>8. Approved invoices feature the QR code, confirming ZATCA endorsement.</T>

        <img src="/images/integration/integration9.webp" className="w-100 mb-2 mt-3" alt="integration9" />
        <T>9. Error messages are consolidated and displayed in the error logs.</T>

        <img src="/images/integration/integration10.webp" className="w-100 mb-2 mt-3" alt="integration10" />
        <T>10. Users can correct errors and resubmit invoices to ZATCA.</T>

        <img src="/images/integration/integration11.webp" className="w-100 mb-2 mt-3" alt="integration11" />
        <T>11. Once submitted, ZATCA approval is typically received within milliseconds.</T>
      </div>

      <h3 className="text-fluid-body font-semibold mt-6 mb-3">
        <T>Seamless Integration with Accqrate: A Trusted ZATCA Provider</T>
      </h3>
      <div className="story text-fluid-small leading-relaxed">
        <T>
          Accqrate, an approved ZATCA provider, leads SAP integration by ensuring security, speed, and compliance:
        </T>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>
            <b><T>🔒 Security First:</T></b>{" "}
            <T>End-to-end encryption guarantees data integrity and audit-proof invoices.</T>
          </li>
          <li>
            <b><T>⏰ Swift Implementation:</T></b>{" "}
            <T>Go live with ZATCA integration in under two weeks.</T>
          </li>
          <li>
            <b><T>🔍 Try Before You Commit:</T></b>{" "}
            <T>Get a free Proof of Concept in the Sandbox environment before production deployment.</T>
          </li>
          <li>
            <b><T>📞 Dedicated Support:</T></b>{" "}
            <T>Contact yasir.mohammad@ethergulf.com for demo and support.</T>
          </li>
        </ul>
      </div>

      <section className="demo mt-10">
        <Row justify="center">
          <Col xs={24}>
            <h3 className="text-fluid-body font-semibold mb-3">
              <T>Accqrate Solution Offerings For Your Business</T>
            </h3>
            <iframe
              width="100%"
              height="450"
              style={{ border: 'none' }}
              src="https://www.youtube.com/embed/fDbqCMOl0_w"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </Col>
        </Row>
      </section>
    </BlogLayout>
  )
}

export default SapIntegration
