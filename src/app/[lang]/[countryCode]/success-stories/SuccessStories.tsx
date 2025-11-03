"use client";

import SuccessStoryCard from "./SuccessStoryCard";
import FadeUp from "@/components/ui/FadeUp";

const stories = [
  {
    id: 1,
    sourceSystem: "Source System: Accqrate",
    title: "ZATCA e-Invoicing Integration for Saudi's Top University",
    description:
      "University is the first private health institution in the Kingdom of Saudi Arabia and accredited by the Ministry of Higher Education and The CEA.",
    imageUrl:
      "/images/ss.png",
  },
  {
    id: 2,
    sourceSystem: "Source System: Accqrate",
    title: "ZATCA e-Invoicing Integration for Saudi's Top University",
    description:
      "University is the first private health institution in the Kingdom of Saudi Arabia and accredited by the Ministry of Higher Education and The CEA.",
    imageUrl:
      "/images/ss.png",
  },
  {
    id: 3,
    sourceSystem: "Source System: Accqrate",
    title: "ZATCA e-Invoicing Integration for Saudi's Top University",
    description:
      "University is the first private health institution in the Kingdom of Saudi Arabia and accredited by the Ministry of Higher Education and The CEA.",
    imageUrl:
      "/images/ss.png",
  },
  {
    id: 4,
    sourceSystem: "Source System: Accqrate",
    title: "ZATCA e-Invoicing Integration for Saudi's Top University",
    description:
      "University is the first private health institution in the Kingdom of Saudi Arabia and accredited by the Ministry of Higher Education and The CEA.",
    imageUrl:
      "/images/ss.png",
  },
  {
    id: 5,
    sourceSystem: "Source System: Accqrate",
    title: "ZATCA e-Invoicing Integration for Saudi's Top University",
    description:
      "University is the first private health institution in the Kingdom of Saudi Arabia and accredited by the Ministry of Higher Education and The CEA.",
    imageUrl:
      "/images/ss.png",
  },
  {
    id: 6,
    sourceSystem: "Source System: Accqrate",
    title: "ZATCA e-Invoicing Integration for Saudi's Top University",
    description:
      "University is the first private health institution in the Kingdom of Saudi Arabia and accredited by the Ministry of Higher Education and The CEA.",
    imageUrl:
      "/images/ss.png",
  },
];

export default function SuccessStories() {
  return (
    <section className="pt-8 md:pt-10 lg:py-[60px] px-4 max-w-[1228px] mx-auto">
      <div className="max-w-[1188px] mx-auto">
        <FadeUp className="text-fluid-h1 lg:text-[38px] leading-tight text-center mx-auto font-medium max-w-[652px] text-[#000000] mb-8 md:mb-10 lg:mb-[80px] ">
          Success Stories from Brands Who Choose Accqrate
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <SuccessStoryCard key={story.id} {...story} />
          ))}
        </div>
      </div>
    </section>
  );
}
