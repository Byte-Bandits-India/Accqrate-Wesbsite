"use client";

import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "Ensuring Compliance and Efficiency: A Guide to ZATCA’s FATOORA ...",
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
    title: "Ensuring Compliance and Efficiency: A Guide to ZATCA’s FATOORA ...",
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
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 md:px-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-900">
          Recent Blog Posts from Accqrate
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className=" overflow-hidden  "
            >
              <Image
                src={post.image}
                alt={post.title}
                width={300}
                height={250}
                className="w-full h-[100px] md:h-[250px] "
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                  {post.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
