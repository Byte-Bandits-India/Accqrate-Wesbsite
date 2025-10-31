"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import apiClient from "./Util/apiClient";
import { X } from "lucide-react";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ open, onClose }) => {
  if (!open) return null;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      companyName: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string().required("Phone is required"),
      companyName: Yup.string().required("Company name is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await apiClient.post("contact-us/add", values);
        console.log("Form submitted successfully");
        resetForm();
        onClose();
      } catch (err) {
        console.error("Error submitting contact form:", err);
      }
    },
  });

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 isolate"
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-white rounded-lg shadow-xl w-[95%] max-w-[600px] p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close contact form"
          className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <h2 className="text-lg font-semibold mb-2 text-gray-900">Contact</h2>

        {/* Divider Line */}
        <div className="h-[1px] bg-gray-300 w-full mb-6"></div>

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="space-y-5">
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                {...formik.getFieldProps("name")}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#2A45C2] outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                {...formik.getFieldProps("email")}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#2A45C2] outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Phone & Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="text"
                {...formik.getFieldProps("phone")}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#2A45C2] outline-none"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Company Name</label>
              <input
                type="text"
                {...formik.getFieldProps("companyName")}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#2A45C2] outline-none"
                placeholder="Enter your company name"
              />
            </div>
          </div>

          {/* Message */}
          <div className="pt-4">
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              {...formik.getFieldProps("message")}
              className="w-full border border-gray-300 rounded-md p-2 resize-y focus:ring-2 focus:ring-[#2A45C2] outline-none"
              rows={4}
              placeholder="Type your message here..."
            />
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="bg-[#1A4BED] text-white px-6 py-3 rounded-full hover:bg-[#2336A6] transition-all w-full md:w-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
