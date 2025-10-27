"use client";

import SuccessStoryCard from "./SuccessStoryCard";

const stories = [
  {
    id: 1,
    sourceSystem: "Source System: Accqrate",
    title: "ZATCA e-Invoicing Integration for Saudi's Top University",
    description:
      "University is the first private health institution in the Kingdom of Saudi Arabia and accredited by the Ministry of Higher Education and The CEA.",
    imageUrl:
      "/images/saudi-university.webp",
  },
  {
    id: 2,
    sourceSystem: "Source System: Accqrate",
    title: "ZATCA e-Invoicing Integration for Saudi's Top University",
    description:
      "University is the first private health institution in the Kingdom of Saudi Arabia and accredited by the Ministry of Higher Education and The CEA.",
    imageUrl:
      "/images/saudi-university.webp",
  },
  {
    id: 3,
    sourceSystem: "Source System: Accqrate",
    title: "ZATCA e-Invoicing Integration for Saudi's Top University",
    description:
      "University is the first private health institution in the Kingdom of Saudi Arabia and accredited by the Ministry of Higher Education and The CEA.",
    imageUrl:
      "/images/saudi-university.webp",
  },
  {
    id: 4,
    sourceSystem: "Source System: Accqrate",
    title: "ZATCA e-Invoicing Integration for Saudi's Top University",
    description:
      "University is the first private health institution in the Kingdom of Saudi Arabia and accredited by the Ministry of Higher Education and The CEA.",
    imageUrl:
      "/images/saudi-university.webp",
  },
  {
    id: 5,
    sourceSystem: "Source System: Accqrate",
    title: "ZATCA e-Invoicing Integration for Saudi's Top University",
    description:
      "University is the first private health institution in the Kingdom of Saudi Arabia and accredited by the Ministry of Higher Education and The CEA.",
    imageUrl:
      "/images/saudi-university.webp",
  },
  {
    id: 6,
    sourceSystem: "Source System: Accqrate",
    title: "ZATCA e-Invoicing Integration for Saudi's Top University",
    description:
      "University is the first private health institution in the Kingdom of Saudi Arabia and accredited by the Ministry of Higher Education and The CEA.",
    imageUrl:
      "/images/saudi-university.webp",
  },
];

export default function SuccessStories() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-left text-black mb-12">
          Success Stories from Brands Who Choose Accqrate
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <SuccessStoryCard key={story.id} {...story} />
          ))}
        </div>
      </div>
    </section>
  );
}
