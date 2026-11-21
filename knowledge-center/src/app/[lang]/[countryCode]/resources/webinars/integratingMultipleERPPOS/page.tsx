/* eslint-disable @typescript-eslint/no-unused-vars */

import T from '@/components/T'
import WebinarsLayout from './WebinarsLayout'

export default function IntegratingMultipleERPPOS() {
  return (
    <WebinarsLayout
      pageTitle="Integrating Multiple ERP/POS Systems with ZATCA"
      date="30th June"
      time="4 PM - 5 PM (KSA)"
      imageSource="/images/resources/web1.jpg"
      speakerName="Senthil Natesan"
      speakerPosition="Founder & Global CEO">
      <p className='text-fluid-small mb-6 md:mb-8 lg:mb-10'>
        <T>
          A comprehensive discussion on how Accqrate, a leader in e-invoicing Solution in KSA, manages the
          integration of multiple ERP and POS systems within a single organization. With a focus on seamless
          e-invoicing processes, the webinar will delve into the technical strategies and methodologies
          employed by Accqrate to ensure smooth operations and full compliance with ZATCA regulations.
        </T>
      </p>

      <h4 className='text-fluid-body font-medium mb-6'>
        <T>Key Points to Be Covered:</T>
      </h4>
      <ul className="list-disc pl-6 text-fluid-small font-normal">
        <li>
          <T>Overview of ZATCA Regulations for E-invoicing and Data Handling</T>
        </li>
        <li>
          <T>Compliance Measures by Accqrate with ZATCA Regulations</T>
        </li>
        <li>
          <T>Integration Using APIs and Middleware</T>
        </li>
        <li>
          <T>Techniques for Data Consistency and Accuracy</T>
        </li>
        <li>
          <T>Automation and Synchronization of Invoicing</T>
        </li>
        <li>
          <T>Common Challenges in Managing Multiple Systems</T>
        </li>
        <li>
          <T>Security Protocols and Data Protection Measures</T>
        </li>
        <li>
          <T>Real-world Examples of Successful Integrations</T>
        </li>
        <li>
          <T>Lessons Learned and Best Practices</T>
        </li>
        <li>
          <T>Q&A Session: Addressing Specific Questions and Challenges</T>
        </li>
      </ul>


      <h4 className='text-fluid-body font-medium mt-6 md:mt-8 lg:mt-10'>
        <T>Target Audience:</T>
      </h4>
      <ul className="list-disc pl-6 text-fluid-small font-normal mt-6">
        <li>
          <T>IT Managers and Systems Integrators</T>
        </li>
        <li>
          <T>Compliance and Regulatory Affairs Professionals</T>
        </li>
        <li>
          <T>Financial Officers and Administrators</T>
        </li>
        <li>
          <T>Technology Consultants and Solution Providers</T>
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