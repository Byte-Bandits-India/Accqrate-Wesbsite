/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import T from "@/components/T";
import BlogLayout from "../layout/BlogLayout";
import Image from "next/image";

function BelgiumEInvoicingFAQs() {
    return (
        <BlogLayout
            pageTitle="Belgium E-Invoicing FAQs: Rules, Scope and What Businesses Must Prepare for in 2026"
            updatedOn="Nov 27th, 2024"
            minRead="22"
        >
            <div className="relative w-full h-[400px] mb-6">
                <Image
                    src="/images/blogs/FAQs.png"
                    alt="Belgium E-Invoicing FAQs"
                    fill
                    className="object-cover rounded-lg"
                    priority
                />
            </div>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Belgium is preparing for one of the most important financial digitization shifts in its history.
                    Starting January 2026, most business-to-business transactions will require structured electronic
                    invoices. This move brings Belgium in line with the broader European vision for real-time digital
                    reporting, secure tax administration and automated financial processes.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    E-invoicing in Belgium goes far beyond sending PDF files by email. It involves exchanging invoices
                    in a structured format that can be interpreted and processed directly by software. The country
                    relies on the Peppol network and the European EN16931 standard to ensure invoices can be validated,
                    routed and processed without manual intervention.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    To help businesses understand what this change means, the following FAQs explain the rules,
                    timelines and compliance requirements in a clear and practical way.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>General FAQs on E-Invoicing in Belgium</T>
            </h3>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>What is e-invoicing in Belgium?</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    E-invoicing refers to issuing, sending, receiving and processing invoices in a structured digital
                    format. In Belgium, structured invoices typically follow the European EN16931 standard and are
                    exchanged through Peppol-compatible software. This ensures machine readability and automation
                    throughout the entire invoice lifecycle.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>When does e-invoicing become mandatory?</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>E-invoicing is being introduced in phases.</T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <strong>
                        <T>B2G:</T>
                    </strong>{" "}
                    <T>
                        Required for federal public contracts published after 1 March 2024,
                        generally for amounts above €3,000.
                    </T>
                </li>
                <li>
                    <strong>
                        <T>B2B:</T>
                    </strong>{" "}
                    <T>
                        Required for almost all Belgian VAT-registered businesses from 1 January
                        2026.
                    </T>
                </li>
            </ul>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Who must comply with the e-invoicing mandate?</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Any business that is registered for VAT in Belgium and issues invoices to another VAT-registered
                    Belgian business is required to send and receive structured invoices from 2026. Suppliers to
                    government authorities are already required to follow structured invoicing rules.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Why is Belgium introducing mandatory e-invoicing?</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    The shift aims to reduce VAT fraud, simplify compliance, improve data accuracy, and increase the
                    speed of financial processing. It also supports the larger European transition toward digital
                    reporting and automation.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>What benefits can businesses expect?</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Common advantages include cost reduction, fewer manual errors, faster processing, reduced payment
                    delays, stronger audit trails and lowered environmental impact due to paper-free workflows.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Are self-billing arrangements still allowed?</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Yes. Self-billing remains permitted as long as both parties agree and follow the required acceptance
                    procedures. Self-invoices can also be exchanged through the Peppol network.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Scope, Timeline and Applicability</T>
            </h3>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Does e-invoicing apply to B2C transactions?</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    No. The mandate does not cover private consumers. However, businesses must still be capable of
                    receiving structured invoices from their suppliers even if their customers are private individuals.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Which transactions fall within scope?</T>
            </h4>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <strong>
                        <T>B2B:</T>
                    </strong>{" "}
                    <T>
                        Mandatory structured invoices for Belgian VAT-registered businesses from
                        January 2026.
                    </T>
                </li>
                <li>
                    <strong>
                        <T>B2G:</T>
                    </strong>{" "}
                    <T>
                        Mandatory since March 2024 for contracts above the applicable thresholds.
                    </T>
                </li>
                <li>
                    <strong>
                        <T>B2C:</T>
                    </strong>{" "}
                    <T>
                        Not mandatory.
                    </T>
                </li>
                <li>
                    <strong>
                        <T>International transactions:</T>
                    </strong>{" "}
                    <T>
                        Allowed if both parties agree and both are
                        technically capable of exchanging structured invoices.
                    </T>
                </li>
            </ul>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Are there exemptions?</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>The following parties are exempt:</T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>Bankrupt businesses that are still VAT-liable</T>
                </li>
                <li>
                    <T>Entities performing only VAT-exempt activities under Article 44 of the VAT Code</T>
                </li>
                <li>
                    <T>Non-resident taxpayers without a permanent establishment in Belgium</T>
                </li>
                <li>
                    <T>Flat-rate taxpayers, who remain exempt until the start of 2028</T>
                </li>
            </ul>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Is there a transition period?</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Yes. Businesses have until January 2026 to adjust their invoicing systems, prepare internal
                    workflows, update ERP configurations and train staff.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Are SMEs or freelancers offered support?</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Yes. Beginning in 2025, the investment allowance for digital tools will be increased to 20%. Small
                    businesses using subscription-based invoicing tools between 2024 and 2027 may also benefit from a
                    120% deductible for qualifying e-invoicing costs.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>What about international invoicing?</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Cross-border e-invoicing is allowed if both parties agree. Peppol can be used as long as the foreign
                    recipient is connected. Future rules may evolve under the European VAT in the Digital Age
                    initiative.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Technical and Format Requirements</T>
            </h3>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Which network does Belgium use for e-invoicing?</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Belgium uses the Peppol network. For public sector invoices, the Mercurius platform routes and
                    receives structured documents. For business-to-business transactions, invoices are exchanged
                    directly through Peppol-compatible software.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>What is the required format?</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Invoices must follow the European EN16931 standard. In practice, most invoices are transmitted in
                    the Peppol BIS format. Businesses may agree on an alternative EN16931-compliant format as long as it
                    can be converted into a compliant invoice.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>What model does Belgium rely on?</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Belgium uses a four-corner model, where the sender and receiver each use their preferred Access
                    Point to communicate through the Peppol network. This ensures interoperability regardless of
                    software.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>How is an e-invoice generated?</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Invoices are created within accounting or ERP systems capable of producing EN16931-compliant data.
                    The structured file is then transmitted through a Peppol Access Point. For B2G, the invoice passes
                    through the Mercurius platform before reaching the authority.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>What is Peppol?</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Peppol is a secure, decentralized network designed to support standardised business document
                    exchange across Europe. It ensures that invoices can be read, validated, and processed by any
                    compliant recipient, regardless of the software being used.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>What is EN16931?</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    EN16931 defines the core data model for electronic invoices in Europe. It ensures consistency,
                    interoperability and legal compliance across all participating countries.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Are PDF invoices still accepted?</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>PDF invoices remain acceptable until the end of 2025.</T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>From January 2026, PDF invoices alone will not be considered valid for B2B transactions.</T>
                </li>
                <li>
                    <T>For B2C and international invoicing, PDF remains allowed if the recipient agrees.</T>
                </li>
            </ul>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>How is invoice security guaranteed?</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    The Peppol network uses certified providers and secure communication protocols. This significantly
                    reduces risks related to modified invoices, fraud or tampering.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Must international transactions also comply with EN16931?</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Yes, if both parties agree to use structured invoicing. The Peppol network supports cross-border
                    exchange across all participating jurisdictions.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Compliance and Legal Obligations</T>
            </h3>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>What are the retention and audit requirements?</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Invoices must remain unaltered, readable and accessible for the entire retention period. Businesses
                    must be able to present the invoice and its audit trail at any time upon request by the tax
                    authority.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Can VAT be deducted from non-structured invoices after 2026?</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    From 2026, VAT deductions on B2B transactions require a structured invoice. B2C and transactions
                    outside the scope may still use regular electronic or paper invoices.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>What are the authenticity and integrity rules?</T>
            </h4>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <strong>
                        <T>Authenticity of origin</T>
                    </strong>{" "}
                    <T>means the issuer must always be identifiable.</T>
                </li>
                <li>
                    <strong>
                        <T>Integrity of content</T>
                    </strong>{" "}
                    <T>means the invoice data cannot be modified.</T>
                </li>
                <li>
                    <strong>
                        <T>Legibility</T>
                    </strong>{" "}
                    <T>means the invoice must remain readable at all times.</T>
                </li>
                <li>
                    <T>A reliable audit trail must connect each invoice to the underlying transaction.</T>
                </li>
            </ul>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Do I still need recipient consent to send electronic invoices?</T>
            </h4>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>
                        Until the end of 2025, recipient agreement is required unless they are already registered on
                        Peppol.
                    </T>
                </li>
                <li>
                    <T>
                        From January 2026, consent is not needed for domestic B2B transactions since structured invoicing
                        becomes mandatory.
                    </T>
                </li>
            </ul>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>What are the penalties for non-compliance?</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>Businesses that fail to issue or receive structured invoices face substantial fines.</T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>First offence: €1,500</T>
                </li>
                <li>
                    <T>Second offence: €3,000</T>
                </li>
                <li>
                    <T>Further offences: €5,000</T>
                </li>
                <li>
                    <T>Additional penalties may apply for issuing incorrect or late e-invoices.</T>
                </li>
            </ul>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Implementation and Software</T>
            </h3>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>What software is required?</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    You need software that supports EN16931 and can connect to the Peppol network. The Belgian
                    government will publish a list of approved tools, including low-cost options, beginning October
                    2024.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>What if my software is not compliant?</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    You can check your provider&apos;s compliance roadmap, switch to a certified vendor or work with a
                    Peppol Access Point that offers integration services.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Can I send a paper invoice along with a structured invoice?</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Yes, but only the structured version is considered legally valid for tax and compliance purposes.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>Will there be additional costs?</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Some businesses may incur expenses for system upgrades, integration or training. These costs are
                    generally outweighed by long-term operational savings.
                </T>
            </p>

            <h4 className="text-fluid-body font-semibold mt-4 mb-2">
                <T>How can a business implement e-invoicing?</T>
            </h4>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    At a minimum, companies should review their invoicing systems, select Peppol-compatible software,
                    integrate their internal processes, establish data validation controls and train staff before
                    January 2026.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Conclusion</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Belgium&apos;s transition to structured e-invoicing represents an important shift toward a more
                    transparent, secure and efficient financial ecosystem. Businesses that prepare early will be better
                    positioned to comply with the mandate, reduce administrative effort and integrate smoothly with the
                    broader European digital framework. Many organisations are choosing platforms that simplify
                    structured invoicing, validation and Peppol connectivity. Solutions such as Accqrate, which already
                    support automated and compliant e-invoicing workflows, can help companies adapt with confidence
                    while they modernise their financial operations.
                </T>
            </p>
        </BlogLayout>
    );
}

export default BelgiumEInvoicingFAQs;