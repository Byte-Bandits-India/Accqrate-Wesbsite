"use client";

import T from "@/components/T";
import ZatcaPhaseTwoWaves from "./ZatcaPhaseTwoWaves";
import BlogLayout from "../layout/BlogLayout";

export default function ZatcaPhaseTwoBlog() {
  return (
    <BlogLayout
      pageTitle="Understanding ZATCA E-Invoicing Phase 2 Waves in Saudi Arabia"
      updatedOn="Jan 22nd, 2025"
      minRead="23"
    >
      {/* Main Content Container */}
      <div className="max-w-[780px] mx-auto overflow-x-hidden">

        {/* Social Share Sticky */}
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-10">
          <div className="bg-[#eff3ff] rounded-[30px] w-10 text-center py-2.5 px-2.5">
            <ul className="p-0 m-0">
              <li className="mb-1.5">
                <a className="text-[#29256f] text-xl block" href="#">
                  <i className="flaticon-facebook"></i>
                </a>
              </li>
              <li className="mb-1.5">
                <a className="text-[#29256f] text-xl block" href="#">
                  <i className="flaticon-twitter"></i>
                </a>
              </li>
              <li className="mb-1.5">
                <a className="text-[#29256f] text-xl block" href="#">
                  <i className="flaticon-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-2.5">
          <div className="mb-3">
            <img
              src="/images/blogs/zatca-einvocing-phase2.webp"
              className="w-full mb-3 rounded-lg"
              alt="Understanding ZATCA E-Invoicing Phase 2 Waves in Saudi Arabia"
            />
          </div>

          <p className="text-[#1c2041] font-normal text-fluid-small leading-[177%] font-['Inter'] mb-4">
            <a href="https://zatca.gov.sa/" className="text-[#194bed] no-underline hover:text-[#194bed] hover:no-underline">
              <T>ZATCA (Zakat, Tax and Customs Authority)</T>
            </a>{" "}
            <T>continues to roll out its</T>{" "}
            <a href="https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx" className="text-[#194bed] no-underline hover:text-[#194bed] hover:no-underline">
              <T>E-Invoicing Phase 2 requirements in waves.</T>
            </a>{" "}
            <T>
              Each wave targets businesses based on specific annual revenue thresholds and includes a grace period
              to help with the transition. In this blog, we'll break down the waves, clarify key dates, and
              highlight the latest updates and guidance from ZATCA.
            </T>
          </p>

          <hr className="my-6 border-[#ebecf3]" />

          <h3 className="text-fluid-body font-bold leading-[39px] font-['Inter'] mb-4">
            <T>What Are the ZATCA Phase 2 Waves?</T>
          </h3>

          <p className="text-[#1c2041] font-normal text-fluid-small leading-[177%] font-['Inter'] mb-4">
            <T>
              <a href="https://zatca.gov.sa/en/E-Invoicing/PreparingYourBusiness/Phase2/Pages/default.aspx" className="text-[#194bed] no-underline hover:text-[#194bed] hover:no-underline">
                <T>Phase 2 of ZATCA's E-Invoicing initiative</T>
              </a>{" "}
              involves integrating a taxpayer's e-invoice system with the ZATCA Fatoora portal in a phased manner.
              Businesses are segmented based on their revenue, ensuring a smoother transition for everyone.
            </T>
          </p>

          <h3 className="text-fluid-body font-bold leading-[28px] font-['Inter'] mt-6 mb-4">How Waves Are Determined</h3>

          <ul className="p-0 m-0 mb-4 text-fluid-small">
            <li className="mb-2">
              <b className="font-bold"><T>1. Annual Taxable Revenues</T></b>
              <ul className="p-0 m-0">
                <li className="list-none mb-2 pl-6 relative before:content-['\2022'] before:text-[#2334de] before:inline-block before:text-[24px] before:font-bold before:absolute before:left-0 before:w-[20px]">
                  <T>Your company's total taxable revenue in <b>2022 or 2023</b> determines which wave you fall under.</T>
                </li>
                <li className="list-none mb-2 pl-6 relative before:content-['\2022'] before:text-[#2334de] before:inline-block before:text-[24px] before:font-bold before:absolute before:left-0 before:w-[20px]">
                  <T>For the <b>initial waves (Wave 1 & 2),</b> the taxable revenue for 2021 was used.</T>
                </li>
                <li className="list-none mb-2 pl-6 relative before:content-['\2022'] before:text-[#2334de] before:inline-block before:text-[24px] before:font-bold before:absolute before:left-0 before:w-[20px]">
                  <T>For subsequent waves, <b>2022 or 2023</b> data is considered.</T>
                </li>
                <li className="list-none mb-2 pl-6 relative before:content-['\2022'] before:text-[#2334de] before:inline-block before:text-[24px] before:font-bold before:absolute before:left-0 before:w-[20px]">
                  <T>If your 2023 financials aren't finalized, consult your tax advisor or finance department to ensure you close your books promptly.</T>
                </li>
              </ul>
            </li>

            <li className="mb-2">
              <b className="font-bold"><T>2. ZATCA Notifications</T></b>
              <ul className="p-0 m-0">
                <li className="list-none mb-2 pl-6 relative before:content-['\2022'] before:text-[#2334de] before:inline-block before:text-[24px] before:font-bold before:absolute before:left-0 before:w-[20px]">
                  <T>ZATCA sends out email notifications to let you know which wave you're in.</T>
                </li>
                <li className="list-none mb-2 pl-6 relative before:content-['\2022'] before:text-[#2334de] before:inline-block before:text-[24px] before:font-bold before:absolute before:left-0 before:w-[20px]">
                  <T>Make sure the contact information ZATCA has on file is up to date (especially if the contact person has left your organization).</T>
                </li>
              </ul>
            </li>

            <li className="mb-2">
              <b className="font-bold"><T>3. Grace Period and Compliance Deadline</T></b>
              <ul className="p-0 m-0">
                <li className="list-none mb-2 pl-6 relative before:content-['\2022'] before:text-[#2334de] before:inline-block before:text-[24px] before:font-bold before:absolute before:left-0 before:w-[20px]">
                  <T>Each wave comes with a grace period to enable businesses to test and stabilize their e-invoicing processes.</T>
                </li>
                <li className="list-none mb-2 pl-6 relative before:content-['\2022'] before:text-[#2334de] before:inline-block before:text-[24px] before:font-bold before:absolute before:left-0 before:w-[20px]">
                  <T>ZATCA has shortened grace periods for subsequent waves; early waves had a <b>6-month</b> grace period, while later waves may have as little as <b>1 month</b>.</T>
                </li>
                <li className="list-none mb-2 pl-6 relative before:content-['\2022'] before:text-[#2334de] before:inline-block before:text-[24px] before:font-bold before:absolute before:left-0 before:w-[20px]">
                  <T><b>End Date:</b> You must integrate by this date because, after this point, ZATCA begins officially recording your taxable amounts.</T>
                </li>
              </ul>
            </li>
          </ul>

          <hr className="my-6 border-[#ebecf3]" />

          <h5 className="text-fluid-body font-bold font-['Inter'] mb-4">Latest Updates (as of 2025)</h5>
          <h3 className="text-fluid-h3 font-bold leading-[39px] font-['Inter'] mb-4">New Revenue Thresholds & Extended Deadlines</h3>

          <ZatcaPhaseTwoWaves />

          <div className="story">
            <ul className="p-0 m-0 text-fluid-small">
              <li className="list-none mb-2 pl-6 relative before:content-['\2022'] before:text-[#2334de] before:inline-block before:text-[24px] before:font-bold before:absolute before:left-0 before:w-[20px]">
                <T>
                  <b>Additional Waves Announced: </b> As of 2025 , ZATCA has announced more waves that cover small
                  and medium enterprises. For instance, companies with revenues above <b>SAR 1.75 million</b> are
                  now entering new waves by 30th September 2025.
                </T>
              </li>
              <li className="list-none mb-2 pl-6 relative before:content-['\2022'] before:text-[#2334de] before:inline-block before:text-[24px] before:font-bold before:absolute before:left-0 before:w-[20px]">
                <T>
                  <b>Penalties for Non-Compliance: </b> While ZATCA showed leniency for the initial waves, they
                  have issued recent press releases emphasizing stricter penalties for missing deadlines in later
                  waves. These fines can include monetary penalties based on the extent of non-compliance.
                </T>
              </li>
            </ul>
          </div>

          <h3 className="text-fluid-body font-bold leading-[39px] font-['Inter'] mt-6 mb-4">Clarification on Grace Period Usage</h3>

          <div className="story">
            <ul className="p-0 m-0 text-fluid-small">
              <li className="list-none mb-2 pl-6 relative before:content-['\2022'] before:text-[#2334de] before:inline-block before:text-[24px] before:font-bold before:absolute before:left-0 before:w-[20px]">
                <T>
                  <b>No 'Free Pass': </b> ZATCA reiterates in their 2024 press release that the grace period is
                  not a time to delay implementation but rather to <b>test and stabilize.</b> Businesses still
                  need to integrate as soon as possible.
                </T>
              </li>
              <li className="list-none mb-2 pl-6 relative before:content-['\2022'] before:text-[#2334de] before:inline-block before:text-[24px] before:font-bold before:absolute before:left-0 before:w-[20px]">
                <T>
                  <b>Shorter Grace for New Waves: </b> Newer waves announced for 2025 have shorter grace periods,
                  sometimes as little as <b>one month.</b>
                </T>
              </li>
            </ul>
          </div>

          <h3 className="text-fluid-body font-bold leading-[39px] font-['Inter'] mt-6 mb-4">Example of Compliance Timelines</h3>

          <p className="story mb-4 text-fluid-small">
            <T>
              If your wave's official deadline is <b>January 31, 2025:</b>
            </T>
          </p>
          <ul className="p-0 m-0 story text-fluid-small">
            <li className="list-none mb-2 pl-6 relative before:content-['\2022'] before:text-[#2334de] before:inline-block before:text-[24px] before:font-bold before:absolute before:left-0 before:w-[20px]">
              <T>
                <b>Before February 1, 2025:</b> You operate under Phase 1 norms and file invoices manually.
              </T>
            </li>
            <li className="list-none mb-2 pl-6 relative before:content-['\2022'] before:text-[#2334de] before:inline-block before:text-[24px] before:font-bold before:absolute before:left-0 before:w-[20px]">
              <T>
                <b>From February 1, 2025, onwards: </b> You must comply with ZATCA's Phase 2 requirements, and
                all e-invoices must be automatically filed through a compliant system.
              </T>
            </li>
          </ul>

          <h3 className="text-fluid-body font-bold leading-[39px] font-['Inter'] mt-6 mb-4">Missed Your Wave Deadline?</h3>

          <div className="story">
            <ul className="p-0 m-0 text-fluid-small">
              <li className="list-none mb-2 pl-6 relative before:content-['\2022'] before:text-[#2334de] before:inline-block before:text-[24px] before:font-bold before:absolute before:left-0 before:w-[20px]">
                <T>
                  <b>Immediate Action:</b> If you've missed your wave's deadline, start the integration process right away.
                </T>
              </li>
              <li className="list-none mb-2 pl-6 relative before:content-['\2022'] before:text-[#2334de] before:inline-block before:text-[24px] before:font-bold before:absolute before:left-0 before:w-[20px]">
                <T>
                  <b>One-Time Leniency: </b> Though ZATCA showed leniency for initial waves, they have warned of
                  stricter enforcement for later waves. Past invoices may be submitted once you are integrated,
                  but this is typically a one-time exception.
                </T>
              </li>
            </ul>
          </div>

          <hr className="my-6 border-[#ebecf3]" />

          <h3 className="text-fluid-h3 font-bold leading-[39px] font-['Inter'] mb-4">
            <T>Best Practices for ZATCA Phase 2 Compliance</T>
          </h3>

          <div className="story mb-4 text-fluid-small">
            <p className="mb-2 text-fluid-small">
              <T>
                <b>1. Identify Your Wave Early</b>
              </T>
            </p>
            <ul className="p-0 m-0">
              <li className="list-none mb-2 pl-6 relative before:content-['\2022'] before:text-[#2334de] before:inline-block before:text-[24px] before:font-bold before:absolute before:left-0 before:w-[20px]">
                <T>Consult your finance and tax teams to confirm your annual taxable revenue.</T>
              </li>
              <li className="list-none mb-2 pl-6 relative before:content-['\2022'] before:text-[#2334de] before:inline-block before:text-[24px] before:font-bold before:absolute before:left-0 before:w-[20px]">
                <T>Watch for ZATCA email notifications and verify your company's contact details.</T>
              </li>
            </ul>
          </div>

          <div className="story mb-4">
            <p className="mb-2 text-fluid-small">
              <T>
                <b>2. Plan & Implement</b>
              </T>
            </p>
            <ul className="p-0 m-0 text-fluid-small">
              <li className="list-none mb-2 pl-6 relative before:content-['\2022'] before:text-[#2334de] before:inline-block before:text-[24px] before:font-bold before:absolute before:left-0 before:w-[20px]">
                <T>
                  Begin your e-invoicing system setup well before the official start date to utilize the grace period effectively.
                </T>
              </li>
              <li className="list-none mb-2 pl-6 relative before:content-['\2022'] before:text-[#2334de] before:inline-block before:text-[24px] before:font-bold before:absolute before:left-0 before:w-[20px]">
                <T>Engage a ZATCA-approved solution provider for swift integration and testing.</T>
              </li>
            </ul>
          </div>

          <div className="story mb-4">
            <p className="mb-2 text-fluid-small">
              <T>
                <b>3. Train Your Staff</b>
              </T>
            </p>
            <ul className="p-0 m-0 text-fluid-small">
              <li className="list-none mb-2 pl-6 relative before:content-['\2022'] before:text-[#2334de] before:inline-block before:text-[24px] before:font-bold before:absolute before:left-0 before:w-[20px]">
                <T>Ensure that your finance, accounting, and sales teams are well-trained on the new system.</T>
              </li>
              <li className="list-none mb-2 pl-6 relative before:content-['\2022'] before:text-[#2334de] before:inline-block before:text-[24px] before:font-bold before:absolute before:left-0 before:w-[20px]">
                <T>
                  Proper training reduces errors and speeds up your ability to comply with Phase 2 requirements.
                </T>
              </li>
            </ul>
          </div>

          <div className="story mb-4">
            <p className="mb-2 text-fluid-small">
              <T>
                <b>4. Keep Up with ZATCA Updates</b>
              </T>
            </p>
            <ul className="p-0 m-0">
              <li className="list-none mb-2 pl-6 text-fluid-small relative before:content-['\2022'] before:text-[#2334de] before:inline-block before:text-[24px] before:font-bold before:absolute before:left-0 before:w-[20px]">
                <T>
                  Regularly check the ZATCA website and official press releases for any changes in compliance deadlines or wave announcements.
                </T>
              </li>
              <li className="list-none mb-2 pl-6 text-fluid-small relative before:content-['\2022'] before:text-[#2334de] before:inline-block before:text-[24px] before:font-bold before:absolute before:left-0 before:w-[20px]">
                <T>Stay aware of potential penalty structures for late compliance.</T>
              </li>
            </ul>
          </div>

          <hr className="my-6 border-[#ebecf3]" />

          <h3 className="text-2xl font-bold leading-[39px] font-['Inter'] mb-4">
            <T>Level Up Your E-Invoicing with Accqrate</T>
          </h3>

          <p className="story text-fluid-small mb-4">
            <T>
              Navigating ZATCA's Phase 2 can feel complex, but you don't have to do it alone. Over <b>5,000</b>{' '}
              Saudi businesses trust <b>Accqrate</b> to generate more than <b>300 million</b> compliant e-invoices
              every month. Our powerful e-invoicing API easily integrates with your ERP/POS, acting as a seamless
              gateway to the ZATCA Fatoora portal.
            </T>
          </p>

          <ul className="p-0 m-0 story">
            <li className="list-none mb-2 pl-6 text-fluid-small relative before:content-['\2022'] before:text-[#2334de] before:inline-block before:text-[24px] before:font-bold before:absolute before:left-0 before:w-[20px]">
              <T>
                <b>Proven Track Record:</b> Our Phase 2 Wave 1 customers have already passed ZATCA audits with
                flying colors, thanks to Accqrate's robust solutions.
              </T>
            </li>
            <li className="list-none mb-2 pl-6 text-fluid-small relative before:content-['\2022'] before:text-[#2334de] before:inline-block before:text-[24px] before:font-bold before:absolute before:left-0 before:w-[20px]">
              <T>
                <b>Continuous Compliance: </b> We monitor ZATCA updates and automatically adjust our systems so
                you remain compliant.
              </T>
            </li>
            <li className="list-none mb-2 pl-6 text-fluid-small relative before:content-['\2022'] before:text-[#2334de] before:inline-block before:text-[24px] before:font-bold before:absolute before:left-0 before:w-[20px]">
              <T>
                <b>Stress-Free Integration:</b> Our dedicated support ensures a painless transition to Phase 2,
                whether you're a large enterprise or an SMB.
              </T>
            </li>
          </ul>

          <p className="story text-fluid-small mt-4">
            For a <b>smart, seamless</b> e-invoicing solution that's fully equipped to handle ZATCA's latest
            requirements, <b>Accqrate</b> is your go-to partner.
          </p>

          <hr className="my-6 border-[#ebecf3]" />

          <h3 className="text-fluid-body font-bold leading-[39px] font-['Inter'] mb-4">Conclusion</h3>

          <p className="story text-fluid-small mb-4">
            <T>
              The transition to ZATCA E-Invoicing Phase 2 is a critical milestone for businesses in Saudi Arabia.
              Understanding your wave, managing the grace period effectively, and staying updated on the latest
              ZATCA announcements are key to avoiding penalties and ensuring a smooth process. By choosing a
              trusted partner like Accqrate, you can confidently navigate these requirements and future-proof your
              invoicing operations.
            </T>
          </p>

          <h3 className="text-2xl font-bold leading-[39px] font-['Inter'] mb-4">Ready to streamline your e-invoicing compliance?</h3>

          <p className="story text-fluid-small mb-4">
            Contact Accqrate today and make the switch to seamless, ZATCA-compliant e-invoicing!
          </p>

          <hr className="my-6 border-[#ebecf3]" />

          <h3 className="text-fluid-body font-bold leading-[39px] font-['Inter'] mb-4">Disclaimer:</h3>

          <p className="story mb-4 text-fluid-small">
            This blog post provides general information based on ZATCA guidelines and updates available as of
            2025. For personalized advice tailored to your specific business situation, consult your tax advisor
            or reach out directly to ZATCA.
          </p>

          <h3 className="text-fluid-body font-bold leading-[39px] font-['Inter'] mb-4">About Accqrate</h3>

          <p className="story mb-4 text-fluid-small">
            <T>
              <a href="https://accqrate-erp.com/" target="_blank" rel="noreferrer" className="text-[#194bed] text-fluid-small no-underline hover:text-[#194bed] hover:no-underline">
                Accqrate
              </a>{' '}
              is a Saudi-based e-invoicing and ERP solution provider offering comprehensive accounting,
              e-invoicing integrators, and a full-suite ERP system, including POS solutions. Recognized as one of
              the most cost-effective platforms in KSA, Accqrate ensures seamless integration with ZATCA's Fatoora
              portal, making Phase 2 compliance straightforward. Powered by GenAI and GPT technologies, the
              platform enhances user experience with intelligent features that boost business efficiency and
              inter-department collaboration.
            </T>
          </p>

          <p className="story text-fluid-small">
            <T>
              With scalability and flexibility at its core, Accqrate offers both cloud and on-premise solutions,
              encouraging businesses in KSA to embrace digital transformation. Trusted across MENA, European, and
              ASEAN markets, Accqrate is a global solution helping organizations achieve operational excellence.
            </T>
          </p>
        </div>

        {/* Social Share Horizontal */}
        <div className="mt-8 pt-4 border-t border-[#ebecf3]">
          <div className="social-share horizontal">
            <ul className="p-0 m-0">
              <li className="inline-block p-1.5 ml-2.5">
                <a className="text-[#29256f] text-base" href="#">
                  <i className="flaticon-facebook"></i> Share
                </a>
              </li>
              <li className="inline-block p-1.5 ml-2.5">
                <a className="text-[#29256f] text-base" href="#">
                  <i className="flaticon-twitter"></i> Tweet
                </a>
              </li>
              <li className="inline-block p-1.5 ml-2.5">
                <a className="text-[#29256f] text-base" href="#">
                  <i className="flaticon-linkedin"></i> Share
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}