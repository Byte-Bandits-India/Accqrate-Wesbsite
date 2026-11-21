const ZatcaUpdatesData = [
  {
    date: 'Oct 5, 2024',
    title: 'How many days free trial is given?',
    description: (
      <div>
        <p>
          30 days free trial is given. Prior to that you get a practice account for 14 days. So in total the
          trial period is 44 days.
        </p>
        <p>
          30 days free trial is given. Prior to that you get a practice account for 14 days. So in total the
          trial period is 44 days.
        </p>
        <p>
          30 days free trial is given. Prior to that you get a practice account for 14 days. So in total the
          trial period is 44 days.
        </p>
        <p>
          30 days free trial is given. Prior to that you get a practice account for 14 days. So in total the
          trial period is 44 days.
        </p>
      </div>
    )
  },
  {
    date: 'Oct 5, 2024',
    title: 'Can I terminate during the trial period?',
    description:
      'Absolutely. You can terminate your trial period anytime. Your account stays valid until 44 days and then is removed automatically.'
  },
  {
    date: 'Oct 5, 2024',
    title: 'Where is Accqrate cloud?',
    description: 'Accqrate cloud is in Riyadh, Saudi Arabia. Disaster recovery is also in Saudi Arabia.'
  },
  {
    date: 'Oct 5, 2023',
    title: 'Resolving Timestamp Discrepancies',
    description: (
      <div>
        <p>
          On October 5, 2023, ZATCA identified a discrepancy in the timestamp format for e-invoice responses.
          The removal of the 'Z' at the end of the signing time led to pending invoices without QR codes,
          affecting B2B and standard tax invoices.
        </p>
        <p>Impact: Invoices remained in a pending status, which disrupted downstream processes.</p>
        <p>
          Action: A change was implemented across both testing and production environments. Invoices attempted
          after 12 PM KSA time are now processed successfully, and pending invoices are being reprocessed
          based on updated guidelines from ZATCA.
        </p>
      </div>
    )
  },
  {
    date: 'September 9, 2024',
    title: 'Phased Rollouts & Technical Enhancements',
    description: (
      <div>
        <p>ZATCA is driving its e-invoicing initiative through phased rollouts:</p>
        <p>
          Wave 3 & 4: Targeted at enterprises with revenues exceeding SAR 250M and SAR 150M, respectively.
        </p>
        <p>
          Wave 2: Focused on businesses with revenues above SAR 500M, with a go-live timeline starting from
          July 2023.
        </p>
        <p>
          Recent SDK Update (Sep 9, 2024): Enhancements include validation rule amendments, bug fixes, and
          support updates for .Net Core 3.1 & 8.0, along with an upgrade to .Net Framework 4.8.
        </p>
      </div>
    )
  },
  {
    date: 'January 30, 2022',
    title: 'Compliance and Violation Management',
    description: (
      <div>
        <p>Accqrate is proactive in addressing common compliance issues reported by ZATCA, such as: </p>
        <p>Incorrect or missing Commercial Registration numbers.</p>
        <p>Delays in invoice reporting beyond 24 hours. </p>
        <p>Duplicate technical identifiers (UUID, Hash, IRN, etc.). </p>
        <p>Inaccurate buyer/seller addresses and CSR details during device onboarding. </p>
      </div>
    )
  },
  {
    date: 'Dec 19, 2022',
    title: 'ZATCA SDK & XML Updates',
    description: (
      <div>
        <div style={{ display: 'flex', fontWeight: 'bold' }}>
          <div style={{ flex: 1 }}>ZATCA Update</div>
          <div style={{ flex: 1 }}>What has changed?</div>
          <div style={{ flex: 1 }}>What does this mean?</div>
        </div>

        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1, fontWeight: 'bold' }}>BR-KSA-71 & BR-KSA-72</div>
          <div style={{ flex: 1 }}>
            Validations on:
            <br />
            1. Supply Date
            <br />
            2. Buyer Name
            <br />
            Summary Simplified Invoices were part of the documentation but not yet implemented in the SDK.
            They have now been implemented.
          </div>
          <div style={{ flex: 1 }}>
            An error will be returned by the SDK if the following fields on a Summary Simplified Invoice are
            left blank:
            <br />
            1. Supply Date
            <br />
            2. Buyer Name
            <br />
            This was already accounted for, so no additional changes are required on your end.
          </div>
        </div>

        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1, fontWeight: 'bold' }}>BR-KSA-EN16931-03, 04, 05</div>
          <div style={{ flex: 1 }}>
            Validations on:
            <br />
            1. Allowance Base Amount
            <br />
            2. Allowance Percentage
            <br />
            3. Allowance Amount
            <br />
            4. Invoiced Item Net Amount
          </div>
          <div style={{ flex: 1 }}>
            If the Allowance Percentage is given, the system calculates the allowance base amount from it.
            <br />
            If both (Allowance Percentage and Base Amount) are provided, no error is thrown.
            <br />
            If neither is provided, an error is thrown.
          </div>
        </div>

        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1, fontWeight: 'bold' }}>Updated PDF/A-3 Sample</div>
          <div style={{ flex: 1 }}>
            No changes in the standard PDF/A-3 sample, but a new sample in USD for Standard Tax Invoices and
            Simplified Invoices has been introduced.
          </div>
          <div style={{ flex: 1 }}>
            There is no direct impact on existing PDF/A-3 usage. The new sample simply provides an additional
            USD format option for Standard and Simplified Invoices.
          </div>
        </div>

        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1, fontWeight: 'bold' }}>New XML Samples in USD</div>
          <div style={{ flex: 1 }}>
            An additional set of XML samples in USD has been introduced for Standard Tax Invoices and
            Simplified Invoices.
          </div>
          <div style={{ flex: 1 }}>
            You can now reference an extra currency format for e-invoices. This addition helps users
            understand how to adapt invoice data for USD transactions, though it does not affect your existing
            PDF/A-3 usage.
          </div>
        </div>
      </div>
    )
  },
  {
    date: 'February 22, 2024',
    title: 'ZATCA Decimal Precision & Rounding Policy Update',
    description: (
      <div>
        <div style={{ display: 'flex', fontWeight: 'bold', textAlign: 'left', gap: '20px' }}>
          <div style={{ flex: 1, margin: 0 }}>ZATCA Update</div>
          <div style={{ flex: 2, margin: 0 }}>What does this update mean?</div>
        </div>

        <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
          <div style={{ flex: 1, fontWeight: 'bold', margin: 0 }}>
            Unlimited decimal places allowed in unit price and invoiced quantity fields
          </div>
          <div style={{ flex: 2, margin: 0 }}>
            This policy update means unlimited decimal places are allowed in these fields for better accuracy
            in calculations. You can send as many decimals as required in the unit price and quantity fields.
            The print/PDF output will reflect the exact number of decimals entered, ensuring precision when
            multiple decimal places are involved.
          </div>
        </div>

        <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
          <div style={{ flex: 1, fontWeight: 'bold', margin: 0 }}>
            All calculated fields will be rounded to 2 decimal places
          </div>
          <div style={{ flex: 2, margin: 0 }}>
            All calculations based on unit price and quantity must be precise and truncated or rounded to two
            decimals. This ensures the final value is always compliant with ZATCA requirements, minimizing
            discrepancies that might arise from extended decimal places.
          </div>
        </div>

        <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
          <div style={{ flex: 1, fontWeight: 'bold', margin: 0 }}>
            New field &quot;PayableRoundingAmount&quot; introduced for adjusting final invoice total
          </div>
          <div style={{ flex: 2, margin: 0 }}>
            This field accommodates a small positive or negative rounding difference if the final payable
            amount crosses .99 or .01, ensuring the buyer and seller agree on a neat final payable sum. This
            avoids inconsistencies between total payment and payable amount and simplifies the tax invoice
            calculation.
          </div>
        </div>
      </div>
    )
  },
  {
    date: 'March 4, 2024',
    title: 'ZATCA XML & Rounding Logic Update',
    description: (
      <div>
        <div style={{ display: 'flex', fontWeight: 'bold', textAlign: 'left', gap: '10px' }}>
          <div style={{ flex: 1, margin: 0 }}>ZATCA Data Dictionary Field Reference</div>
          <div style={{ flex: 1, margin: 0 }}>What has changed?</div>
          <div style={{ flex: 1, margin: 0 }}>What does this mean?</div>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ flex: 1, fontWeight: 'bold', margin: 0 }}>
            BR-KSA-50 & BR-KSA-EN16931-03 (ZATCA XML Implementation Standard doc, Page 47 & 52)
          </div>
          <div style={{ flex: 1, margin: 0 }}>
            <strong>Old requirement:</strong> Rounding was not working earlier as specified, and exact values
            were being stored. <strong>Updated requirement:</strong> Now all prices will have 2 decimal
            places. If you have more than 2 decimals, ensure the amount is truncated or rounded to 2 decimals.
            For example, if you had 3 decimals, the last digit should be rounded to the previous value.
          </div>
          <div style={{ flex: 1, margin: 0 }}>
            Users can pass values in a field with more than 2 decimals for <strong>Line VAT Amount</strong>{' '}
            and <strong>Allowance Amount</strong>. The system (SDK) will truncate or round these values to{' '}
            <strong>2 decimals automatically</strong>.
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ flex: 1, fontWeight: 'bold', margin: 0 }}>
            BR-O-05 (ZATCA XML Implementation Standard doc, Page 53)
          </div>
          <div style={{ flex: 1, margin: 0 }}>
            <div style={{ fontWeight: 'bold' }}>Old requirement:</div> For a line item with{' '}
            <strong>
              &quot;Invoiced item VAT category code&quot; = &quot;Services outside scope of tax&quot;
            </strong>
            , a percentage identifier had to be passed in the{' '}
            <strong>&quot;Invoiced item VAT rate&quot;</strong> field along with 0.{' '}
            <div style={{ fontWeight: 'bold' }}>Updated requirement:</div> For the same line item, the percentage
            identifier can be <strong>0 or not passed</strong> in the{' '}
            <strong>&quot;Invoiced item VAT rate&quot;</strong> field.
          </div>
          <div style={{ flex: 1, margin: 0 }}>
            Both <strong>0%</strong> and <strong>0</strong> values are now accepted by ZATCA for items
            categorized as <strong>&quot;Services outside scope of tax.&quot;</strong>
          </div>
        </div>
      </div>
    )
  },
  {
    date: 'December 1, 2022',
    title: 'ZATCA Penalty Exemption Initiative Announcement',
    description: (
      <div>
        <div style={{ fontWeight: 'bold' }}>Old Mandate</div>
        <p>
          Taxpayers were liable for a penalty if they remained non-compliant with E-invoicing requirements.
        </p>

        <div style={{ fontWeight: 'bold' }}>New Mandate</div>
        <p>
          ZATCA has now announced the "Cancellation of Fines and Exemption of Penalties initiative" for
          taxpayers, for an additional period of six months, beginning on 1 December 2022 and ending on 31 May
          2023.
        </p>

        <p>The fines covered by the exemption decision include fines for:</p>

        <ul>
          <li>Late registration in all tax systems</li>
          <li>Late payment</li>
          <li>Late filing of returns fines in all tax systems</li>
          <li>Fines to correct VAT returns</li>
          <li>
            Fines for violations of VAT field control related to applying the E-invoicing regulations and
            other general regulations
          </li>
        </ul>
      </div>
    )
  }
]

export default ZatcaUpdatesData