"use client";

import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";

const blogPosts = [
  {
    id: 1,
    title: "Ensuring Compliance and Efficiency: A Guide to ZATCA's FATOORA ...",
    image: "/images/resources/blog-1.png",
    desc: "In the rapidly evolving landscape of e-invoicing in Saudi Arabia, ensuring accuracy of regulatory requirements is crucial for businesses...",
  },
  {
    id: 2,
    title: "E-Invoicing in Oman: A Comprehensive Guide to Preparation ...",
    image: "/images/resources/blog-2.png",
    desc: "The Sultanate of Oman Tax Authority is poised to usher in electronic invoicing (e-Invoicing) in 2023. Initially planned to be launched...",
  },
  {
    id: 3,
    title: "Fines and Financial Penalties exemption for its Taxpayers by ...",
    image: "/images/resources/blog-3.png",
    desc: "Fines and Financial Penalties exemption for its Taxpayers by ZATCA, Saudi Arabia: The Zakat, Tax and Customs Authority (ZATCA) has ...",
  },
  {
    id: 4,
    title: "Ensuring Compliance and Efficiency: A Guide to ZATCA's FATOORA ...",
    image: "/images/resources/blog-1.png",
    desc: "In the rapidly evolving landscape of e-invoicing in Saudi Arabia, ensuring accuracy of regulatory requirements is crucial for businesses...",
  },
  {
    id: 5,
    title: "E-Invoicing in Oman: A Comprehensive Guide to Preparation ...",
    image: "/images/resources/blog-2.png",
    desc: "The Sultanate of Oman Tax Authority is poised to usher in electronic invoicing (e-Invoicing) in 2023. Initially planned to be launched...",
  },
  {
    id: 6,
    title: "Fines and Financial Penalties exemption for its Taxpayers by ...",
    image: "/images/resources/blog-3.png",
    desc: "Fines and Financial Penalties exemption for its Taxpayers by ZATCA, Saudi Arabia: The Zakat, Tax and Customs Authority (ZATCA) has ...",
  },
];

export default function RecentBlogPosts() {
  return (
    <section className="py-10 md:py-12 lg:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <FadeUp className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12 lg:mb-[70px] text-gray-900">
          Recent Blog Posts from Accqrate
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="rounded-lg overflow-hidden duration-300 border mb-[50px] md:mb-0 border-gray-100"
            >
              <FadeUp className="relative w-full rounded-md h-[180px] lg:h-[250px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover w-full rounded-lg sm:rounded-none h-full"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </FadeUp>
              <div className="p-4">
                <FadeUp className="font-semibold text-fluid-body lg:text-[26px] text-gray-900 line-clamp-2 leading-tight mb-[20px] md:mb-[30px]">
                  {post.title}
                </FadeUp>
                <FadeUp className="text-gray-600 text-fluid-small line-clamp-3 leading-relaxed">
                  {post.desc}
                </FadeUp>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}