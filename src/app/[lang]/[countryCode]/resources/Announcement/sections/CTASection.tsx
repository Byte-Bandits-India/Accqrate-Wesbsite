"use client";

import React, { useState } from "react";
import { ArrowRight, Sparkles, Clock, Zap } from "lucide-react";
import { ContactModal } from "../../../../../../components/ContactModal"; // adjust path if needed

const CTASection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="rounded-3xl max-w-7xl bg-[#194bed] p-8 md:p-12 relative overflow-hidden shadow-xl">
      <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
        {/* LEFT CONTENT */}
        <div className="text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Save time, save money
          </h2>

          <p className="text-lg mb-6 text-white/90 leading-relaxed">
            Want the latest on ZATCA updates, fresh product insights,<br />
            and exclusive Company editorials?
          </p>

          <p className="text-sm mb-8 text-white/80 leading-relaxed">
            Get fresh product insights and exclusive company editorials delivered straight to
            your inbox. Subscribe now to never miss a beat!
          </p>

          {/* MANUAL BUTTON */}
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center px-6 py-3 bg-white text-primary font-semibold rounded-full shadow-lg hover:bg-white/90 transition-all duration-200"
          >
            Sign Up
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>

          {/* Extra Info Tags */}
          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex items-center gap-2 text-white/90 text-sm">
              
              <span>Free Proof of Concept</span>
              <img src="/images/resources/star-yellow.svg" alt="star" className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 text-white/90 text-sm">
             
              <span>30 Days Free Trial</span>
               <img src="/images/resources/star-yellow.svg" alt="star" className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 text-white/90 text-sm">
              
              <span>No complexity, Subscribe and use</span>
              
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:flex justify-end">
          <img
            src="/images/chart-view.webp"
            alt="Dashboard Preview"
            className="max-w-full w-full transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32" />

      {/* Contact Modal */}
      <ContactModal open={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default CTASection;
