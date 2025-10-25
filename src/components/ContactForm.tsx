"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import apiClient from "@/components/Util/apiClient";

const ContactFormPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      companyName: "",
      module: "",
      message: "",
      agree: false,
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
    <div className="min-h-screen bg-[#f5f7ff] flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Seamless generation of{" "}
          <span className="text-primary">ZATCA Phase II</span> e-invoices
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Our ZATCA compliant solution is developed for all Phase II waves & integrates with any ERP —
          making us the most sought-after cloud e-invoicing software in the market.
        </p>

        <form onSubmit={formik.handleSubmit} className="space-y-5">
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                {...formik.getFieldProps("name")}
                className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-primary focus:border-primary"
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
                className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-primary focus:border-primary"
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
                className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-primary focus:border-primary"
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
                className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-primary focus:border-primary"
                placeholder="Enter your company name"
              />
              {formik.touched.companyName && formik.errors.companyName && (
                <p className="text-red-500 text-sm">{formik.errors.companyName}</p>
              )}
            </div>
          </div>

          {/* Module Dropdown */}
          <div>
            <label className="block text-sm font-medium mb-1">Module</label>
            <select
              {...formik.getFieldProps("module")}
              className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-primary focus:border-primary"
            >
              <option value="">Select Module</option>
              <option value="E-invoicing Standalone Software">
                E-invoicing Standalone Software
              </option>
              <option value="E-invoicing API Integration Software">
                E-invoicing API Integration Software
              </option>
              <option value="ERP Software">ERP Software</option>
              <option value="Partner with Us">Partner with Us</option>
            </select>
            {formik.touched.module && formik.errors.module && (
              <p className="text-red-500 text-sm">{formik.errors.module}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              {...formik.getFieldProps("message")}
              rows={4}
              placeholder="Type your message here.."
              className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-primary focus:border-primary resize-none"
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
              className="mt-1 accent-primary"
            />
            <label htmlFor="agree" className="text-sm text-gray-700 leading-snug">
              I consent to the collection and use of my personal information provided in this form
              for the purpose of responding to my inquiry and related communication.
              My information will be handled in accordance with our{" "}
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                privacy policy
              </a>
              .
            </label>
          </div>
          {formik.touched.agree && formik.errors.agree && (
            <p className="text-red-500 text-sm">{formik.errors.agree}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-full font-semibold hover:bg-primary/90 transition-all"
          >
            Submit →
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactFormPage;
