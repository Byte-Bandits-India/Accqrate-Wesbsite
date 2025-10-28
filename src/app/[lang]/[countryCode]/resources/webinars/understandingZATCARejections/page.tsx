/* eslint-disable @typescript-eslint/no-unused-vars */

import T from '@/components/T'
import WebinarsLayout from '../integratingMultipleERPPOS/WebinarsLayout'

export default function understandingZATCARejections() {
    return (
        <WebinarsLayout
            pageTitle="Understanding ZATCA Rejections and Accqrate's Error Management"
            date="11th Aug"
            time="4 PM - 5 PM (KSA)"
            imageSource="/images/resources/web2.jpg"
            speakerName="Someswaran Krishnan">
            <p className='text-fluid-small mb-6 md:mb-8 lg:mb-10'>
                <T>
                    A detailed understanding of the common errors that lead to invoice rejections by ZATCA (Zakat, Tax
                    and Customs Authority) and how Accqrate efficiently manages these issues. The session will focus on
                    identifying, correcting, and efficiently re-submitting invoices to ensure compliance and minimize
                    disruptions in business processes.
                </T>
            </p>

            <h4 className='text-fluid-body font-medium mb-6'>
                <T>Key Points to Be Covered:</T>
            </h4>
            <ul className="list-disc pl-6 text-fluid-small font-normal">
                <li>
                    <T>Common reasons for invoice rejections by ZATCA.</T>
                </li>
                <li>
                    <T>Tools and technologies used in the error identification process.</T>
                </li>
                <li>
                    <T>Techniques and methods for correcting identified errors.</T>
                </li>
                <li>
                    <T>Steps taken to ensure accuracy in resubmissions.</T>
                </li>
                <li>
                    <T>Procedures for efficient and compliant invoice re-submission.</T>
                </li>
                <li>
                    <T>Ensuring timely corrections to minimize business impact.</T>
                </li>
                <li>
                    <T>Proactive strategies to avoid common errors.</T>
                </li>
                <li>
                    <T>Best practices in invoice management to adhere to ZATCA regulations.</T>
                </li>
                <li>
                    <T>Opportunity for participants to clarify doubts and discuss specific scenarios.</T>
                </li>
            </ul>

            <h4 className='text-fluid-body font-medium mt-6 md:mt-8 lg:mt-10'>
                <T>Target Audience:</T>
            </h4>
            <ul className="list-disc pl-6 text-fluid-small font-normal">
                <li>
                    <T>Financial and Accounting Professionals</T>
                </li>
                <li>
                    <T>Compliance Officers</T>
                </li>
                <li>
                    <T>ERP and POS System Managers</T>
                </li>
                <li>
                    <T>IT and Systems Integration Professionals</T>
                </li>
            </ul>

            <p className='mt-6 md:mt-8 lg:mt-10 text-fluid-small'>
                <span className="font-bold">
                    <T>Outcome:</T>
                </span>{' '}
                <T>
                    Participants will gain a thorough understanding of the complexities involved in integrating multiple
                    ERP and POS systems and how these can be effectively managed to maintain compliance and enhance
                    operational efficiency. They will also learn about the practical aspects of e-invoicing and the
                    latest best practices in the field.
                </T>
            </p>
            <p className='mt-6 md:mt-8 lg:mt-10 text-fluid-small'>
                <T>
                    This webinar is a must-attend for organizations looking to streamline their financial operations and
                    ensure stringent compliance with the latest regulatory requirements imposed by ZATCA.
                </T>
            </p>
        </WebinarsLayout>
    )
}
