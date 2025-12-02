"use client";

import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";
import blogPosts from "./data/blogspost";
import { useParams } from "next/navigation";
import { useState, useEffect, useMemo } from "react";

// Country configuration
const countryConfig = [
  { code: "sa", name: "Saudi Arabia", blogCode: "KSA" },
  { code: "ae", name: "United Arab Emirates", blogCode: "AE" },
  { code: "bh", name: "Bahrain", blogCode: "BH" },
  { code: "om", name: "Oman", blogCode: "OM" },
  { code: "be", name: "Belgium", blogCode: "BE" },
  { code: "pl", name: "Poland", blogCode: "PL" },
  { code: "mu", name: "Mauritius", blogCode: "MU" },
  { code: "ma", name: "Malaysia", blogCode: "MA" },
  { code: "jd", name: "Jordan", blogCode: "JD" },
];

// 🔥 VALIDATE IMAGE BEFORE PASSING TO <Image />
const getValidImage = (img: string) => {
  if (!img || typeof img !== "string") return "/images/default-blog.png";

  // Valid remote URL
  if (img.startsWith("http://") || img.startsWith("https://")) return img;

  // Valid local path
  if (img.startsWith("/")) return img;

  // File name → assume local blogs folder
  if (/\.(png|jpg|jpeg|webp|svg)$/i.test(img)) {
    return `/images/blogs/${img}`;
  }

  // Fallback
  return "/images/default-blog.png";
};

export default function RecentBlogPosts() {
  const params = useParams();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  const lang = params?.lang as string || "en";
  const countryCode = (params?.countryCode as string || "sa").toLowerCase();

  // Current country
  const currentCountry = useMemo(
    () => countryConfig.find((country) => country.code === countryCode),
    [countryCode]
  );

  // Filter blog posts
  const filteredBlogPosts = useMemo(() => {
    if (!currentCountry) return [];
    return blogPosts.filter((post) => post.country === currentCountry.blogCode);
  }, [currentCountry]);

  // Recently added countries
  const recentlyAddedCountries = useMemo(() => {
    const countryBlogMap = new Map();

    blogPosts.forEach((post) => {
      countryBlogMap.set(post.country, (countryBlogMap.get(post.country) || 0) + 1);
    });

    return countryConfig
      .filter((country) => countryBlogMap.has(country.blogCode))
      .slice(0, 4);
  }, []);

  // Blog Card Component
  const BlogCard = ({ post }: { post: typeof blogPosts[0] }) => (
    <div className="block">
      <div className="rounded-xl overflow-hidden duration-300 mb-[50px] md:mb-0">
        <FadeUp className="relative w-full shadow-[0_4px_10px_rgba(0,0,0,0.25)] rounded-xl h-[188px] xl:h-[250px]">
          <Image
            src={getValidImage(post.image)}
            alt={post.title}
            fill
            className="object-cover w-full rounded-xl sm:rounded-2xl h-full"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            priority={false}
          />
        </FadeUp>

        <div className="p-4">
          <FadeUp className="font-semibold text-[18px] lg:h-[45px] mt-[20px] text-gray-900 line-clamp-2 leading-tight mb-[10px]">
            {post.title}
          </FadeUp>

          <FadeUp className="text-gray-600 text-[16px] line-clamp-3 leading-tight">
            {post.desc}
          </FadeUp>
        </div>
      </div>
    </div>
  );

  // Blog Card with Link
  const BlogCardWithLink = ({ post }: { post: typeof blogPosts[0] }) => (
    <Link
      key={post.id}
      href={`/${lang}/${countryCode}/resources/blogs/${post.url}`}
      className="block hover:opacity-90 transition-opacity"
    >
      <BlogCard post={post} />
    </Link>
  );

  // Country not supported
  if (!currentCountry) {
    return (
      <section className="py-10 md:py-12 lg:py-[90px] text-center">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 xl:px-0">
          <FadeUp className="text-fluid-h3 font-semibold mb-8 text-gray-900">
            Country Not Found
          </FadeUp>
          <p className="text-gray-600 text-lg">
            The country code "{countryCode}" is not supported.
          </p>
        </div>
      </section>
    );
  }

  // No blog posts for country
  if (filteredBlogPosts.length === 0) {
    return (
      <section className="py-10 md:py-12 lg:py-[90px]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 xl:px-0 text-center">
          <div className="py-12">
            <h3 className="text-2xl font-semibold mb-4">Coming Soon!</h3>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              We're preparing valuable blog content for {currentCountry.name}.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Final return UI
  return (
    <section className="py-10 md:py-12 lg:py-[90px]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 xl:px-0">
        <FadeUp className="text-fluid-h3 font-semibold mb-10 text-gray-900">
          Blog Posts from Accqrate
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredBlogPosts.map((post) =>
            isMounted ? (
              <BlogCardWithLink key={post.id} post={post} />
            ) : (
              <BlogCard key={post.id} post={post} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
