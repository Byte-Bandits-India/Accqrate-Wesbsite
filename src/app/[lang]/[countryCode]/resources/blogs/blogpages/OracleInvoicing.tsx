/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Col, Row } from "antd";
import T from "@/components/T";
import BlogLayout from "../layout/BlogLayout";
import CtaNumber from "./CtaNumber";

function OracleInvoicing() {
  return (
    <BlogLayout
      pageTitle="Oracle E-invoicing Integration with ZATCA Phase 2: A Seamless Fusion"
      updatedOn="Feb 08th, 2024"
      minRead="23"
    >
      <img
        src="/images/invoicing/oracle1.png"
        className="w-full  mb-4"
        alt="Oracle E-invoicing Integration with ZATCA Phase 2: A Seamless Fusion"
      />

      <p className="text-fluid-small leading-relaxed text-gray-700 mb-4">
        <T>
          <a href="https://www.oracle.com/in/cx/service/" className="text-blue-600 underline">
            <T>Oracle Fusion</T>
          </a>
          <T>
            , a predominant ERP solution in Saudi Arabia and globally, is tailored for large enterprises. Its
            design necessitates the use of the
          </T>
          <a href="https://www.oracle.com/in/integration/" className="text-blue-600 underline">
            <T>Oracle Integration Cloud (OIC)</T>
          </a>
          <T>
            when interfacing with external systems. Recognizing this challenge, Accqrate has introduced
            E-invoicing packages designed specifically for Oracle Fusion, facilitating communication with
          </T>
          <a href="https://zatca.gov.sa/en/Pages/default.aspx" className="text-blue-600 underline">
            <T>ZATCA</T>
          </a>
          <T>, both with and without OIC.</T>
        </T>
      </p>

      <h3 className="text-fluid-body font-semibold text-gray-900 mb-3">
        <T>How Oracle Fusion and ZATCA Integration Works?</T>
      </h3>
      <p className="text-fluid-small leading-relaxed text-gray-700 mb-4">
        <T>
          Accqrate’s E-invoicing package for Oracle Fusion operates in real-time for Tax invoices and in batch
          mode for Simplified invoices, establishing a bridge with ZATCA (Fatoora Portal).
        </T>
      </p>

      <img src="/images/invoicing/oracle14.png" className="w-full  mb-4" alt="integration1" />

      <h3 className="text-fluid-body font-semibold text-gray-900 mb-3">
        <T>Company Onboarding:</T>
      </h3>
      <p className="text-fluid-small leading-relaxed text-gray-700 mb-4">
        <T>
          Upon successful registration in Fatoora and receipt of the OTP, Accqrate provides an avenue to
          onboard your firm to ZATCA’s e-invoicing portal.
        </T>
      </p>

      <img src="/images/invoicing/oracle10.png" className="w-full  mb-4" alt="oracle10" />

      <p className="text-fluid-small leading-relaxed text-gray-700 mb-4">
        <T>
          Subsequently, essential components like Certificates, CSIDs, Digital signatures, and secret keys are
          automatically generated. This API will do the magic for you to integrate with your Oracle ERP.
        </T>
      </p>

      <img src="/images/invoicing/oracle8.png" className="w-full  mb-4" alt="oracle8" />

      <h3 className="text-fluid-body font-semibold text-gray-900 mb-3">
        <T>E-invoicing Package Deployment:</T>
      </h3>
      <p className="text-fluid-small leading-relaxed text-gray-700 mb-4">
        <T>
          The below example shows the OCI-based integration. In the background, this integration process will
          call the Accqrate plug-in that can seamlessly communicate with ZATCA and get the invoice approvals.
        </T>
      </p>

      <img src="/images/invoicing/oracle6.png" className="w-full  mb-4" alt="oracle6" />

      <h3 className="text-fluid-body font-semibold text-gray-900 mb-3">
        <T>Invoice Generation within Oracle:</T>
      </h3>
      <p className="text-fluid-small leading-relaxed text-gray-700 mb-4">
        <T>
          This is illustrated using sales order-based invoice integration. However, the procedure remains
          consistent for other forms like direct invoices, credit, and debit memos.
        </T>
      </p>

      <img src="/images/invoicing/oracle13.png" className="w-full  mb-4" alt="oracle13" />

      <p className="text-fluid-small leading-relaxed text-gray-700 mb-4">
        <T>Search the order and select the “Fulfillment View”</T>
      </p>

      <img src="/images/invoicing/oracle11.png" className="w-full  mb-4" alt="oracle11" />
      <img src="/images/invoicing/oracle4.png" className="w-full  mb-4" alt="oracle4" />
      <img src="/images/invoicing/oracle7.png" className="w-full  mb-4" alt="oracle7" />

      <h3 className="text-fluid-body font-semibold text-gray-900 mb-3">
        <T>Transmission of Invoice to ZATCA:</T>
      </h3>
      <p className="text-fluid-small leading-relaxed text-gray-700 mb-4">
        <T>
          The system, post the billing stage, processes the invoices automatically. Nonetheless, users retain
          the discretion to initiate this procedure manually. Ideally for Simplified invoices, the integration
          process is scheduled once per day, and for tax invoices, it is triggered on a real-time basis.
        </T>
      </p>

      <img src="/images/invoicing/oracle5.png" className="w-full  mb-4" alt="oracle5" />

      <p className="text-fluid-small leading-relaxed text-gray-700 mb-4">
        <T>In a few milliseconds, the response (approval or rejection) is received from ZATCA.</T>
      </p>

      <img src="/images/invoicing/oracle1.png" className="w-full  mb-4" alt="oracle1" />

      <p className="text-fluid-small leading-relaxed text-gray-700 mb-4">
        <T>
          For rejected invoices, the error messages are recorded. For approved invoices, the XML, QR code, and
          UDIDs are returned back to Oracle from Accqrate middleware.
        </T>
      </p>

      <img src="/images/invoicing/oracle2.png" className="w-full  mb-4" alt="oracle2" />
      <p className="text-fluid-small leading-relaxed text-gray-700 mb-4">
        <T>The XML is saved in Oracle for Auditing purposes.</T>
      </p>

      <h3 className="text-fluid-body font-semibold text-gray-900 mb-3">
        <T>Document Archiving in Oracle:</T>
      </h3>
      <img src="/images/invoicing/oracle3.png" className="w-full  mb-4" alt="oracle3" />

      <p className="text-fluid-small leading-relaxed text-gray-700 mb-4">
        <T>
          PDFs and XMLs are archived in Oracle and can be referenced anytime. The invoice is customized to show
          the PDF and XMLs.
        </T>
      </p>

      <img src="/images/invoicing/oracle12.png" className="w-full  mb-4" alt="oracle12" />
      <img src="/images/invoicing/oracle9.png" className="w-full  mb-4" alt="oracle9" />
      <img src="/images/invoicing/oracle15.png" className="w-full  mb-4" alt="oracle15" />

      <h3 className="text-fluid-body font-semibold text-gray-900 mb-3">
        <T>The Accqrate Advantage in Oracle Integration</T>
      </h3>
      <ul className="list-disc ml-6 text-fluid-small text-gray-700 mb-4 space-y-2">
        <li>
          <strong>
            <T>🔒 Unparalleled Security:</T>
          </strong>
          <T> Enjoy end-to-end encryption ensuring data safety and audit-compliant invoices.</T>
        </li>
        <li>
          <strong>
            <T>⏰ Swift Implementation:</T>
          </strong>
          <T> Get ZATCA integration live in under two weeks with minimal disruption.</T>
        </li>
        <li>
          <strong>
            <T>🔍 Trust Before Commitment:</T>
          </strong>
          <T> Experience Accqrate’s capabilities with a complimentary ZATCA Sandbox test.</T>
        </li>
        <li>
          <strong>
            <T>📞 Always Here for You:</T>
          </strong>{" "}
          <CtaNumber />
          <T> Let us navigate you through seamless integrations and unmatched security.</T>
        </li>
      </ul>

      <section className="demo mt-10">
        <Row justify="center">
          <Col xs={24}>
            <h3 className="text-fluid-body font-semibold text-gray-900 mb-3 text-left">
              <T>Accqrate Solution Offerings For Your Business</T>
            </h3>
            <iframe
              width="100%"
              height="450"
              style={{ border: "none" }}
              src="https://www.youtube.com/embed/uh-RZOY0Mks"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </Col>
        </Row>
      </section>
    </BlogLayout>
  );
}

export default OracleInvoicing;
