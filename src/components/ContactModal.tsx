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
        alert("Your message was sent successfully!");
        resetForm();
        onClose();
      } catch (err) {
        alert("Error submitting form. Please try again.");
      }
    },
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-xl w-[95%] max-w-[600px] p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-semibold mb-6">Contact</h2>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                {...formik.getFieldProps("name")}
                className="w-full border rounded-md p-2"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                {...formik.getFieldProps("email")}
                className="w-full border rounded-md p-2"
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
                className="w-full border rounded-md p-2"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Company Name</label>
              <input
                type="text"
                {...formik.getFieldProps("companyName")}
                className="w-full border rounded-md p-2"
                placeholder="Enter your company name"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              {...formik.getFieldProps("message")}
              className="w-full border rounded-md p-2 resize-none"
              rows={4}
              placeholder="Type your message here.."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
