"use client";

import React from "react";
import T from "@/components/T";
import BlogLayout from "../layout/BlogLayout";
import { useParams } from "next/navigation";

export default function BelgiumTechnicalRules() {
    const params = useParams();
    const lang = params?.lang as string;
    const countryCode = params?.countryCode as string;

    return (
        <BlogLayout
            pageTitle={<T>Technical Rules for E-Invoicing in Belgium</T>}
            updatedOn="Nov 27th, 2024"
            minRead={18}
        >
            <img
                src="/images/blogs/TechnicalRules.png"
                className="w-full mb-6 rounded-lg"
                alt="Technical Rules for E-Invoicing in Belgium"
            />

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Belgium is entering a decisive phase in its digital transformation, driven by the broader European
                    effort to create a unified, efficient and transparent invoicing ecosystem. Structured electronic
                    invoicing will soon become the default format for business-to-business transactions. This change has
                    major implications for how companies generate invoices, exchange documents and maintain VAT
                    compliance.
                </T>
            </p>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    The rules governing this new system are precise and highly technical, which is why understanding the
                    regulatory expectations early is essential. The following guide breaks down the technical
                    requirements, formats and standards that apply under Belgium's e-invoicing framework, and
                    explains how businesses can prepare for the transition.
                </T>
            </p>

            <h2 className="text-fluid-body font-semibold mt-6 mb-3 text-gray-900">
                <T>Shift to Mandatory Structured Invoicing from 2026</T>
            </h2>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Starting 1 January 2026, most VAT-registered Belgian businesses will be required to issue and
                    receive structured electronic invoices for all business-to-business transactions. This shift is
                    intended to create a fully automated, end-to-end invoicing process that removes manual work,
                    improves accuracy and enables more reliable VAT monitoring.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-4 mb-3 text-gray-900">
                <T>Scope of the Mandate</T>
            </h3>

            <h4 className="text-fluid-body font-semibold mt-3 mb-2 text-gray-900">
                <T>Business-to-Business Transactions</T>
            </h4>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Almost all B2B transactions between Belgian VAT-liable enterprises fall within the mandatory scope.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-3 mb-2 text-gray-900">
                <T>Business-to-Consumer Transactions</T>
            </h4>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Personal consumer transactions remain outside the requirement, and businesses may continue issuing
                    traditional invoices for B2C customers.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-3 mb-2 text-gray-900">
                <T>Business-to-Government Transactions</T>
            </h4>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Since 1 March 2024, structured e-invoicing has been compulsory for public procurement contracts
                    above €3,000.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-3 mb-2 text-gray-900">
                <T>Limited Exemptions</T>
            </h4>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Some entities are exempt, such as bankrupt persons registered for VAT, businesses performing only
                    VAT-exempt operations under Article 44 and flat-rate taxpayers until 2028.
                </T>
            </p>

            <h2 className="text-fluid-body font-semibold mt-6 mb-3 text-gray-900">
                <T>What Makes a Structured Electronic Invoice</T>
            </h2>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    A structured electronic invoice is a machine-readable data file. It is not a PDF, not an emailed
                    attachment and not a scanned copy. It is a digital document containing data in a format that
                    accounting systems can interpret without manual intervention.
                </T>
            </p>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>To comply with Belgian requirements, structured invoices must meet several strict conditions.</T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-4 mb-3 text-gray-900">
                <T>Alignment with European Standards</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Invoices must follow EN 16931, which defines the semantic structure and technical specifications
                    required for cross-border interoperability within the European Union.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-4 mb-3 text-gray-900">
                <T>Inclusion of Mandatory Data Fields</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Every invoice must include specific information such as the VAT identification of the buyer and
                    supplier, invoice number, invoice date, line items, tax amounts, totals and payment details.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-4 mb-3 text-gray-900">
                <T>Use of the Peppol BIS Format</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Belgium uses the Peppol BIS format as the default structure for transmitting electronic invoices.
                    This format ensures consistency and enables seamless data exchange through the Peppol network.
                </T>
            </p>

            <h2 className="text-fluid-body font-semibold mt-6 mb-3 text-gray-900">
                <T>The Technical Foundations: Authenticity, Integrity and Legibility</T>
            </h2>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Belgium's e-invoicing framework is built around three core technical principles. These
                    principles ensure that invoices remain reliable, traceable and compliant throughout their entire
                    life cycle.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-4 mb-3 text-gray-900">
                <T>Authenticity of Origin</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    The origin of the invoice must always be identifiable. Both supplier and customer share
                    responsibility for ensuring that the invoice genuinely originates from the correct issuer. This
                    requirement helps prevent fraudulent invoices and strengthens VAT control.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-4 mb-3 text-gray-900">
                <T>Integrity of Content</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Once issued, the invoice must remain unaltered. If a correction or amendment is required, it must be
                    made through a separate structured document that references the original invoice. This requirement
                    preserves the reliability of the financial record.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-4 mb-3 text-gray-900">
                <T>Legibility Over Time</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Invoices must remain readable for the entire retention period. For electronic invoicing, this means
                    the file must be retrievable in a clearly readable form at any time, and the displayed version must
                    match the original document.
                </T>
            </p>

            <h2 className="text-fluid-body font-semibold mt-6 mb-3 text-gray-900">
                <T>Electronic Modifications and Referencing</T>
            </h2>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>Any modification issued in an electronic format is treated as a structured invoice when it:</T>
            </p>
            <ul className="list-disc ml-6 mb-4 text-gray-700 text-fluid-small">
                <li>
                    <T>Follows the same technical structure as the original</T>
                </li>
                <li>
                    <T>References the original invoice clearly and accurately</T>
                </li>
            </ul>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>This ensures that the financial and audit history remains consistent, traceable and complete.</T>
            </p>

            <h2 className="text-fluid-body font-semibold mt-6 mb-3 text-gray-900">
                <T>Retention and VAT Compliance</T>
            </h2>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Beginning in 2026, structured invoices will serve as the main evidence for VAT deductions and
                    reporting. The familiar reliance on PDF files or paper documents will be replaced by a more precise
                    and auditable framework.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-4 mb-3 text-gray-900">
                <T>The Audit Trail Requirement</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>A reliable audit trail is essential. It must demonstrate:</T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-3 mb-2 text-gray-900">
                <T>Traceability</T>
            </h4>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>A clear link must exist between the invoice and the underlying business transaction.</T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-3 mb-2 text-gray-900">
                <T>Compliance with VAT Procedures</T>
            </h4>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>The audit trail must reflect the processes mandated by Belgian VAT legislation.</T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-3 mb-2 text-gray-900">
                <T>Accuracy of Operational Reality</T>
            </h4>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Documentation must match actual delivery of goods, performance of services and payment processes.
                </T>
            </p>

            <h2 className="text-fluid-body font-semibold mt-6 mb-3 text-gray-900">
                <T>Sending and Receiving Invoices through the Peppol Network</T>
            </h2>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    The Peppol network is at the heart of Belgium's structured invoicing ecosystem. It is an
                    international framework that allows businesses and public authorities to exchange electronic
                    documents securely and consistently.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-4 mb-3 text-gray-900">
                <T>Sending Invoices</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Companies must use software connected to a certified Peppol Access Point. Invoices are created in
                    the Peppol BIS format and sent through the network to the recipient's system.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-4 mb-3 text-gray-900">
                <T>Receiving Invoices</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Companies must ensure their system can receive structured invoices and interpret them correctly.
                    This often requires an upgrade of accounting software or a dedicated Peppol integration.
                </T>
            </p>

            <h2 className="text-fluid-body font-semibold mt-6 mb-3 text-gray-900">
                <T>Why Peppol is Central to Belgium's Approach</T>
            </h2>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    The Peppol framework brings structure and reliability to electronic invoicing. Its benefits include:
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-4 mb-3 text-gray-900">
                <T>Interoperability Across Borders</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Invoices can be exchanged with any business or authority registered on Peppol, regardless of the
                    country.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-4 mb-3 text-gray-900">
                <T>High Security Levels</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Invoices move through certified service providers, drastically lowering the risk of invoice fraud.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-4 mb-3 text-gray-900">
                <T>Operational Efficiency</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Because invoices are delivered in a structured format, automation becomes a natural part of
                    financial workflows.
                </T>
            </p>

            <h2 className="text-fluid-body font-semibold mt-6 mb-3 text-gray-900">
                <T>EN 16931 and Peppol BIS: How They Work Together</T>
            </h2>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>Belgium's technical rules combine a European standard with a network-specific format.</T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-4 mb-3 text-gray-900">
                <T>EN 16931</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Defines the European standard that dictates which data fields and semantic structures must appear in
                    a structured invoice.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-4 mb-3 text-gray-900">
                <T>Peppol BIS</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Provides a harmonised format that applies these rules in a practical, machine-readable structure.
                </T>
            </p>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    The combination of both ensures that invoices are compliant, interoperable and ready for automated
                    processing.
                </T>
            </p>

            <h2 className="text-fluid-body font-semibold mt-6 mb-3 text-gray-900">
                <T>Allowed and Prohibited Invoice Formats</T>
            </h2>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>Under the upcoming rules, the type of invoice businesses can issue will change significantly.</T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-4 mb-3 text-gray-900">
                <T>PDF Invoices</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Permitted only until the end of 2025. Starting January 2026, they will no longer be legally valid
                    for B2B VAT invoices.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-4 mb-3 text-gray-900">
                <T>Word or Excel</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>Allowed only with the recipient's approval and only until December 2025.</T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-4 mb-3 text-gray-900">
                <T>Structured EN 16931 Compliant Formats</T>
            </h3>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    From January 2026 onward, all B2B invoices must be created and transmitted in a structured
                    electronic format that follows Peppol BIS.
                </T>
            </p>

            <h2 className="text-fluid-body font-semibold mt-6 mb-3 text-gray-900">
                <T>Conclusion</T>
            </h2>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Belgium's e-invoicing reform represents one of the most significant modernisations of the
                    country's financial and VAT infrastructure. The shift to structured invoicing, enforced through
                    Peppol BIS and EN 16931, is designed to eliminate manual inefficiencies, improve VAT oversight and
                    support cross-border interoperability across Europe. Preparing early is essential. This includes
                    upgrading accounting systems, ensuring software compatibility, training teams and establishing
                    internal processes that support structured invoicing.
                </T>
            </p>
            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    As businesses make this transition, many find that dedicated platforms simplify the journey.
                    Solutions such as Accqrate help companies adopt structured invoicing with confidence by supporting
                    the required formats, enabling Peppol connectivity and strengthening compliance workflows in a
                    straightforward and reliable way.
                </T>
            </p>
        </BlogLayout>
    );
}