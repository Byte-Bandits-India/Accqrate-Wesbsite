"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import apiClient from "@/components/Util/apiClient";
import { useParams } from "next/navigation";
import { CustomSelect } from "./CustomSelect";

const ContactFormPage = () => {
  const params = useParams();
  const countryCode = (params?.countryCode as string)?.toUpperCase();
  const [selectedModule, setSelectedModule] = useState("");

  // ✅ Define module options here
  const modules = [
    { value: "E-invoicing Standalone Software", label: "E-invoicing Standalone Software" },
    { value: "E-invoicing API Integration Software", label: "E-invoicing API Integration Software" },
    { value: "ERP Software", label: "ERP Software" },
    { value: "Partner with Us", label: "Partner with Us" },
  ];

  const countryContent: Record<string, { heading: string; description: string }> = {
    MU: {
      heading: "MRA e-invoices",
      description:
        "Our MRA compliant solution is developed for all and integrates with any ERP — making us the most sought-after cloud e-invoicing software in the market.",
    },
    MY: {
      heading: "LHDN e-invoices",
      description:
        "Our LHDN compliant solution is developed for all and integrates with any ERP — making us the most sought-after cloud e-invoicing software in the market.",
    },
    JD: {
      heading: "ISTD e-invoices",
      description:
        "Our ISTD compliant solution is developed for all and integrates with any ERP — making us the most sought-after cloud e-invoicing software in the market.",
    },
    AE: {
      heading: "Accounting Solution",
      description:
        "Our accounting solution is developed for all and integrates with any ERP — making us the most sought-after e-invoicing and accounting software in the market.",
    },
    DEFAULT: {
      heading: "ZATCA Phase II e-invoices",
      description:
        "Our ZATCA compliant solution is developed for all Phase II waves and integrates with any ERP — making us the most sought-after cloud e-invoicing software in the market.",
    },
  };

  const content = countryContent[countryCode] || countryContent.DEFAULT;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      companyName: "",
      module: "",
      message: "",
      agree: false,
      countryCode,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string().required("Phone is required"),
      companyName: Yup.string().required("Company name is required"),
      module: Yup.string().required("Module selection is required"),
      message: Yup.string().required("Message is required"),
      agree: Yup.boolean().oneOf([true], "You must accept the privacy policy"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await apiClient.post("contact-us/add", values);
        alert("Form submitted successfully!");
        resetForm();
      } catch (error) {
        console.error("Form submission failed:", error);
        alert("Submission failed. Please try again.");
      }
    },
  });

  return (
    <div className="min-h-screen bg-[#F8F6FF] px-4 pb-12 pt-10 md:pt-[60px] lg:pt-[100px]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-6">

        {/* ✅ Left Section - Info */}
        <div className="w-full lg:w-1/2 text-left">
          <h2 className="text-[26px] md:text-[36px] lg:text-[50px] font-medium">Get In Touch</h2>
          <div className="w-[100px] md:w-[156px] h-[2px] bg-[#194BED] my-6 md:my-8 lg:my-[40px]"></div>
          <p className="text-[#000000] text-fluid-body mb-8 max-w-[556px]">
            {content.description}
          </p>

          <h2 className="text-fluid-body font-medium text-[#000000] mb-2">Chat To Us</h2>
          <p className="text-[#000000] text-fluid-small mb-2">Our friendly team is here to help</p>

          <p className="text-fluid-small text-[#000000]">
            <a
              href="mailto:Contact@accqrate-erp.com"
              className="text-[#FF6E3E] hover:text-[#ff875c] no-underline transition-colors duration-200"
            >
              Contact@accqrate-erp.com
            </a>
          </p>

          <div className="flex justify-center mt-6 md:mt-[33px]">
            <img
              src="/images/contact-us.svg"
              alt="contact"
              className="max-w-[347px] w-full h-auto"
            />
          </div>
        </div>

        {/* ✅ Right Section - Contact Form */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white rounded-2xl p-8 w-full">
            <form onSubmit={formik.handleSubmit} className="space-y-5">
              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    {...formik.getFieldProps("name")}
                    className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-[#F48B69] focus:border-[#F48B69]"
                    placeholder="Enter your name"
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-red-500 text-sm">{formik.errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    {...formik.getFieldProps("email")}
                    className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-[#F48B69] focus:border-[#F48B69]"
                    placeholder="Enter your email"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-sm">{formik.errors.email}</p>
                  )}
                </div>
              </div>

              {/* Phone & Company */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input
                    type="text"
                    {...formik.getFieldProps("phone")}
                    className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-[#F48B69] focus:border-[#F48B69]"
                    placeholder="Enter your phone number"
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="text-red-500 text-sm">{formik.errors.phone}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Company Name</label>
                  <input
                    type="text"
                    {...formik.getFieldProps("companyName")}
                    className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-[#F48B69] focus:border-[#F48B69]"
                    placeholder="Enter your company name"
                  />
                  {formik.touched.companyName && formik.errors.companyName && (
                    <p className="text-red-500 text-sm">{formik.errors.companyName}</p>
                  )}
                </div>
              </div>

              {/* Module Dropdown */}
              <div className="w-full">
                <CustomSelect
                  label="Module"
                  options={modules}
                  value={formik.values.module}
                  onChange={(val) => formik.setFieldValue("module", val)}
                  error={formik.touched.module ? formik.errors.module : ""}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  {...formik.getFieldProps("message")}
                  rows={4}
                  placeholder="Type your message here..."
                  className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-[#F48B69] focus:border-[#F48B69] resize-y"
                />
                {formik.touched.message && formik.errors.message && (
                  <p className="text-red-500 text-sm">{formik.errors.message}</p>
                )}
              </div>

              {/* Consent */}
              <div className="flex items-start gap-2">
                <input
                  id="agree"
                  type="checkbox"
                  {...formik.getFieldProps("agree")}
                  checked={formik.values.agree}
                  className="mt-1 accent-[#194BED]"
                />
                <label htmlFor="agree" className="text-sm text-[#333333] leading-snug">
                  I consent to the collection and use of my personal information for responding to my
                  inquiry and related communication. My information will be handled in accordance with our{" "}
                  <a
                    href="/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#333333] underline"
                  >
                    privacy policy
                  </a>.
                </label>
              </div>
              {formik.touched.agree && formik.errors.agree && (
                <p className="text-red-500 text-sm">{formik.errors.agree}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#B4441E] via-[#F05A28] to-[#F48B69] text-white py-3 rounded-[10px] font-semibold hover:bg-[#194BED]/90 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ContactFormPage;
