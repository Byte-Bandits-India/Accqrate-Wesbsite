/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import T from "@/components/T";
import BlogLayout from "../layout/BlogLayout";
import Image from "next/image";

function BelgiumCreditNotes() {
    return (
        <BlogLayout
            pageTitle="Credit Notes in Belgium"
            updatedOn="Nov 25th, 2024"
            minRead="16"
        >
            <div className="relative w-full h-[400px] mb-6">
                <Image
                    src="/images/blogs/CreditNotes.png"
                    alt="Credit Notes in Belgium"
                    fill
                    className="object-cover rounded-lg"
                    priority
                />
            </div>

            <h2 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Meaning, Purpose, Rules and How to Issue Them Correctly</T>
            </h2>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Credit notes play a central role in Belgian accounting and VAT administration. They ensure that
                    businesses can rectify previously issued invoices without creating inconsistencies in financial
                    records. Whether the adjustment involves incorrect pricing, returned goods, or VAT recalculation,
                    Belgian law requires that credit notes follow strict documentation standards.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    This guide explains what credit notes are, when they must be issued, what they must contain and how
                    they differ from debit notes. It also outlines the steps required to issue a compliant credit note
                    under Belgian regulations.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>1. What Is a Credit Note in Belgium</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    A credit note is an official document issued by a seller to correct or reverse part of an earlier
                    invoice. It acknowledges that the buyer no longer owes the full amount stated on the original
                    invoice. Credit notes often arise from pricing errors, product returns or adjustments to VAT.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>A valid credit note in Belgium must:</T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>Mirror the original invoice&apos;s key details</T>
                </li>
                <li>
                    <T>Clearly reference the invoice that is being corrected</T>
                </li>
                <li>
                    <T>Contain its own unique sequential number</T>
                </li>
                <li>
                    <T>State the adjusted amounts using a minus sign</T>
                </li>
            </ul>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Credit notes form part of a company&apos;s legal accounting records and must be stored for VAT audit
                    purposes.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>2. When a Credit Note Must Be Issued</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Credit notes are issued in Belgium whenever the original invoice no longer reflects the correct
                    payable amount. Common scenarios include:
                </T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>Incorrect pricing or quantity on the original invoice</T>
                </li>
                <li>
                    <T>Goods returned by the customer</T>
                </li>
                <li>
                    <T>Cancellation of services after invoicing</T>
                </li>
                <li>
                    <T>Discounts or rebates granted after the invoice was created</T>
                </li>
                <li>
                    <T>Errors in VAT calculation</T>
                </li>
                <li>
                    <T>Full cancellation of the original sale</T>
                </li>
                <li>
                    <T>Debtor insolvency or non-payment (for VAT correction on bad debts)</T>
                </li>
            </ul>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Credit notes cannot be issued once the original invoice has expired or is no longer legally
                    adjustable.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>3. Credit Note vs Debit Note</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Credit notes reduce the amount owed by the buyer, while debit notes increase it. Their purpose and
                    accounting impact differ.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Comparison Table</T>
            </h3>

            <div className="overflow-x-auto mb-8">
                <table className="min-w-full border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-left font-medium">
                                <T>Aspect</T>
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left font-medium">
                                <T>Credit Note</T>
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-left font-medium">
                                <T>Debit Note</T>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">
                                <T>Purpose</T>
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                <T>Reduces or cancels part of an existing invoice</T>
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                <T>Increases the value of an existing invoice</T>
                            </td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2">
                                <T>Amount Display</T>
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                <T>Shown with a minus sign</T>
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                <T>Shown with a plus sign</T>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">
                                <T>Reference</T>
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                <T>Must be linked to the original invoice</T>
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                <T>Must also reference the original invoice</T>
                            </td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2">
                                <T>Accounting Impact</T>
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                <T>Reduction in revenue or receivables</T>
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                <T>Increase in receivables or revenue</T>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>Both documents must comply with Belgian accounting standards and VAT rules.</T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>4. How to Issue a Credit Note in Belgium</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Creating a compliant credit note requires careful attention to detail. The document must clearly
                    indicate that it modifies an earlier invoice and must contain all required VAT information.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Steps to Prepare a Credit Note</T>
            </h3>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>Clearly title the document as a &quot;Credit Note&quot;.</T>
                </li>
                <li>
                    <T>Cite the original invoice number and date.</T>
                </li>
                <li>
                    <T>Assign a new unique credit note number.</T>
                </li>
                <li>
                    <T>Include the supplier and customer details.</T>
                </li>
                <li>
                    <T>Specify the reason for issuing the credit.</T>
                </li>
                <li>
                    <T>Present the corrected amount using a minus sign.</T>
                </li>
                <li>
                    <T>Include account numbers or payment references if applicable.</T>
                </li>
                <li>
                    <T>
                        Include VAT adjustments where required. For example: &quot;VAT to be refunded to the state to the
                        extent originally deducted&quot;.
                    </T>
                </li>
            </ul>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>These elements ensure both the seller and the buyer can maintain proper accounting records.</T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>5. Mandatory Details Required on a Belgian Credit Note</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>A Belgian credit note must contain the following information:</T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>Title: &quot;Credit Note&quot;</T>
                </li>
                <li>
                    <T>Name, address and VAT ID of both supplier and customer</T>
                </li>
                <li>
                    <T>Credit note date</T>
                </li>
                <li>
                    <T>Unique credit note number</T>
                </li>
                <li>
                    <T>Reference to the original invoice</T>
                </li>
                <li>
                    <T>Reason for issuing the credit</T>
                </li>
                <li>
                    <T>Corrected amounts with a minus sign</T>
                </li>
                <li>
                    <T>Applicable VAT rate and VAT adjustment</T>
                </li>
                <li>
                    <T>Description of goods or services being corrected</T>
                </li>
            </ul>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>Incomplete credit notes can create problems during audits or VAT reconciliations.</T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>6. Sample Structure of a Belgian Credit Note</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>A compliant credit note generally includes the following fields:</T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>Supplier information and VAT ID</T>
                </li>
                <li>
                    <T>Buyer information and VAT ID</T>
                </li>
                <li>
                    <T>Credit note number</T>
                </li>
                <li>
                    <T>Credit note date</T>
                </li>
                <li>
                    <T>Original invoice reference</T>
                </li>
                <li>
                    <T>Description of adjustment</T>
                </li>
                <li>
                    <T>Quantity or service details</T>
                </li>
                <li>
                    <T>Corrected amounts</T>
                </li>
                <li>
                    <T>VAT rate and VAT amount</T>
                </li>
                <li>
                    <T>Final total displayed as a negative amount</T>
                </li>
            </ul>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>This model ensures clarity for both accounting and VAT purposes.</T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>7. Credit Notes for Bad Debts</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Belgian VAT rules allow suppliers to issue a credit note when a customer becomes insolvent or
                    refuses payment. Issuing a credit note in such situations enables the supplier to:
                </T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>Reverse revenue that will never be collected</T>
                </li>
                <li>
                    <T>Reclaim VAT previously paid to the treasury</T>
                </li>
                <li>
                    <T>Maintain clean and transparent accounting records</T>
                </li>
            </ul>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    Without a credit note, businesses would absorb the loss entirely and remain liable for VAT on unpaid
                    invoices.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>8. Impact of Belgium&apos;s E Invoicing Mandate</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Belgium will require structured e invoicing from 1 January 2026. This mandate applies to invoices
                    and credit notes. Businesses must ensure that:
                </T>
            </p>

            <ul className="story text-gray-700 text-fluid-small mb-6 space-y-2">
                <li>
                    <T>Credit notes are generated in a structured, compliant digital format</T>
                </li>
                <li>
                    <T>They follow the Peppol BIS standard or another accepted EN 16931 format</T>
                </li>
                <li>
                    <T>All references and VAT adjustments remain traceable within the electronic document</T>
                </li>
            </ul>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-6">
                <T>
                    This change reinforces the importance of accuracy, traceability and consistency when preparing
                    credit notes.
                </T>
            </p>

            <h3 className="text-fluid-body font-semibold mt-6 mb-2">
                <T>Conclusion</T>
            </h3>

            <p className="text-gray-700 text-fluid-small leading-relaxed mb-4">
                <T>
                    Credit notes are an essential part of financial and VAT compliance in Belgium. They allow businesses
                    to correct invoices, adjust VAT amounts and maintain transparent accounting records. As Belgium
                    moves toward mandatory structured e invoicing in 2026, companies must ensure their credit note
                    processes meet the new documentation requirements and integrate smoothly into their invoicing
                    systems.
                </T>
            </p>

            <p className="text-gray-700 text-fluid-small leading-relaxed">
                <T>
                    Many organizations are strengthening their digital invoicing workflows to prepare for this shift.
                    Platforms such as Accqrate, designed to support structured invoicing and automated compliance, can
                    help businesses manage credit notes and invoice adjustments with accuracy and confidence.
                </T>
            </p>
        </BlogLayout>
    );
}

export default BelgiumCreditNotes;