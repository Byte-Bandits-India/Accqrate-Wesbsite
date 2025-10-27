"use client";

import {  ChevronRight } from "lucide-react";
import Image from "next/image";

export interface SuccessStoryCardProps {
  sourceSystem: string;
  title: string;
  description: string;
  imageUrl: string;
}

export default function SuccessStoryCard({
  sourceSystem,
  title,
  description,
  imageUrl,
}: SuccessStoryCardProps) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        <p className="text-blue-600 text-sm font-semibold mb-2">
          {sourceSystem}
        </p>
        <h3 className="text-gray-900 text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        <button className="w-full bg-gradient-to-r from-[#29266E] to-[#194BED] text-white font-medium py-2 px-4 rounded-lg flex items-center justify-between group">
          <span>Read Story</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </div>
  );
}
