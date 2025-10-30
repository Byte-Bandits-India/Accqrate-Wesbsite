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
      minRead="23">
      
      <img
        src="/images/blogs/sap-e-invocing-integration-with-zatca.webp"
        className="w-100 mb-3"
        alt="SAP E-Invoicing and Its Integration with ZATCA: Paving the Way for Digital Excellence"
      />

      <p className="story">
        <T>In the evolving digital landscape, Saudi Arabia`s Zakat, Tax, and Customs Authority</T>
        <a href="https://zatca.gov.sa/en/Pages/default.aspx"> (ZATCA) </a>
        <T>
          has pioneered electronic invoicing, launching its first phase on 4th December 2021 and progressing
          into the second phase from 1st January 2023...
        </T>
      </p>

      <h3><T>Accqrate E-Invoicing Solutions: Bridging SAP and ZATCA</T></h3>
      <div className="story">
        <T>Accqrate provides specialized</T>
        <a href="https://accqrate-erp.com/en/e-invoicing-plugin"><T> ERP integrators </T></a>
        &nbsp;
        <T>for SAP to integrate with ZATCA via APIs...</T>
        <ul>
          <li>
            <b><T>Batch Mode Efficiency:</T></b>
            <T> Through RFC calls, we optimize the generation of simplified invoices.</T>
          </li>
          <li>
            <b><T>Real-time Excellence:</T></b>
            <T> Leveraging API calls via ABAP programming, ensuring instantaneous integration.</T>
          </li>
        </ul>
      </div>

      <h3><T>Integration Process Overview:</T></h3>
      <img src="/images/integration/integration1.webp" className="w-100 mb-2" alt="integration1" />
      <p className="story"><T>1. An invoice is generated in SAP.</T></p>

      <img src="/images/integration/integration2.webp" className="w-100 mb-2" alt="integration2" />
      <p className="story"><T>2. The output message ZINV is configured to invoke specific Z-Programs.</T></p>

      <img src="/images/integration/integration3.webp" className="w-100 mb-2" alt="integration3" />
      <p className="story"><T>3. At this juncture, the invoice printouts lack the QR code or ZATCA ID.</T></p>

      <img src="/images/integration/integration4.webp" className="w-100 mb-2" alt="integration4" />
      <p className="story">
        <T>4. Accqrate E-invoicing tracker in SAP provides a comprehensive view of all processed invoices.</T>
      </p>

      <img src="/images/integration/integration5.webp" className="w-100 mb-2" alt="integration5" />
      <p className="story"><T>5. A green process indicator signifies ZATCA approval of the invoice.</T></p>

      <img src="/images/integration/integration6.webp" className="w-100 mb-2" alt="integration6" />
      <p className="story"><T>6. Clicking on the XML icon displays the ZATCA-approved XML.</T></p>

      <img src="/images/integration/integration7.webp" className="w-100 mb-2" alt="integration7" />
      <p className="story"><T>7. Clicking on the PDF icon reveals the invoice printout.</T></p>

      <img src="/images/integration/integration8.webp" className="w-100 mb-2" alt="integration8" />
      <p className="story"><T>8. Approved invoices will feature the QR code, indicating ZATCA endorsement.</T></p>

      <img src="/images/integration/integration9.webp" className="w-100 mb-2" alt="integration9" />
      <p className="story"><T>9. Error messages will be consolidated and displayed in the error logs.</T></p>

      <img src="/images/integration/integration10.webp" className="w-100 mb-2" alt="integration10" />
      <p className="story"><T>10. Users can rectify errors and resubmit invoices to ZATCA.</T></p>

      <img src="/images/integration/integration11.webp" className="w-100 mb-2" alt="integration11" />
      <p className="story"><T>11. Once submitted, ZATCA approval is typically received within milliseconds.</T></p>

      <h3><T>Seamless Integration with Accqrate: A Trusted ZATCA Provider</T></h3>
      <p className="story">
        <T>
          Accqrate, an approved ZATCA provider, stands at the forefront of SAP integration...
        </T>
        <ul>
          <li>
            <b><T>🔒 Security First:</T></b>
            <T> Accqrate ensures end-to-end encryption and audit-proof invoices.</T>
          </li>
          <li>
            <b><T>⏰ Swift Implementation:</T></b>
            <T> Achieve ZATCA integration in under two weeks.</T>
          </li>
          <li>
            <b><T>🔍 Try Before You Commit:</T></b>
            <T> Get a free Proof of Concept for Sandbox testing before production.</T>
          </li>
          <li>
            <b><T>📞 Dedicated Support:</T></b>
            <T> Contact yasir.mohammad@ethergulf.com for demo and support.</T>
          </li>
        </ul>
      </p>

      <section className="demo">
        <Row justify="center">
          <Col xs={24}>
            <h3><T>Accqrate Solution Offerings For Your Business</T></h3>
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
