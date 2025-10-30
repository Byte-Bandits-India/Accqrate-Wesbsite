"use client";

import Link from "next/link";
import T from "@/components/T";

export default function CtaNumber({ className = "" }) {
  return (
    <div className={`pt-3 text-sm sm:text-base ${className}`}>
      <Link href="/faq" className="text-blue-600 hover:underline">
        <T>Got questions</T>
      </Link>{" "}
      or{" "}
      <Link href="/contact-us" className="text-blue-600 hover:underline">
        <T>need a demo?</T>
      </Link>{" "}
      <T>Drop us a mail at</T>{" "}
      <a
        href="mailto:Contact@accqrate-erp.com"
        className="text-blue-600 hover:underline"
      >
        <T>Contact@accqrate-erp.com</T>
      </a>
    </div>
  );
}
