"use client";

import Link from "next/link";
import T from "@/components/T";
import { useParams } from "next/navigation";

export default function CtaNumber({ className = "" }) {
      const params = useParams();
        const lang = params?.lang as string;
        const countryCode = params?.countryCode as string;
  return (
    <div className={`pt-3 text-sm sm:text-base ${className}`}>
      <Link href={`/${lang}/${countryCode}/resources/faq`} className="text-blue-600 hover:underline">
        <T>Got questions</T>
      </Link>{" "}
      or{" "}
      <Link href={`/${lang}/${countryCode}/contact-us`} className="text-blue-600 hover:underline">
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
