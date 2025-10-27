"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ComingSoon() {
      const params = useParams();
      const lang = params?.lang as string;
      const countryCode = params?.countryCode as string;
    
  return (
    <div className="min-h-screen flex flex-col items-center  justify-start bg-[#F8F6FF] text-center px-6">
      <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-10 mt-20 md:mb-28 md:mt-40">
        Coming Soon ...
      </h1>

      <p className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
        Get The Trial Version By Subscribing Here And Get A Feel Of Our Application
      </p>

      <p className="text-sm md:text-base text-gray-600 mb-12">
        Register your company for a trial application. Your data will be available in 30 days.
      </p>

      <Link
            href={`/${lang}/${countryCode}/resources/announcement/form`}
            className="inline-flex items-center   text-white border font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-[#29266E] to-[#194BED]  "
          >
            Subscribe Now <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
    </div>
  );
}
