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
    <div className="min-h-screen bg-[#f5f7ff] px-4 py-12">
      {/* ✅ Country-specific heading */}
      <div>
        <h2 className="text-fluid-h3 font-bold text-center mb-3">
          Seamless generation of{" "}
          <span className="text-[#194BED]">{content.heading}</span>
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-[758px] mx-auto">
          {content.description}
        </p>
      </div>

      {/* ✅ Contact Form */}
      <div className="flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-4xl">
          <form onSubmit={formik.handleSubmit} className="space-y-5">
            {/* Name & Email */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  {...formik.getFieldProps("name")}
                  className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-[#194BED] focus:border-[#194BED]"
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
                  className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-[#194BED] focus:border-[#194BED]"
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
                  className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-[#194BED] focus:border-[#194BED]"
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
                  className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-[#194BED] focus:border-[#194BED]"
                  placeholder="Enter your company name"
                />
                {formik.touched.companyName && formik.errors.companyName && (
                  <p className="text-red-500 text-sm">{formik.errors.companyName}</p>
                )}
              </div>
            </div>

            {/* ✅ CustomSelect Module Dropdown */}
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
                className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-[#194BED] focus:border-[#194BED] resize-y"
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
              <label htmlFor="agree" className="text-sm text-gray-700 leading-snug">
                I consent to the collection and use of my personal information provided in this form
                for the purpose of responding to my inquiry and related communication.
                My information will be handled in accordance with our{" "}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#194BED] underline"
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
              className="w-full bg-[#194BED] text-white py-3 rounded-full font-semibold hover:bg-[#194BED]/90 transition-all"
            >
              Submit →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFormPage;
