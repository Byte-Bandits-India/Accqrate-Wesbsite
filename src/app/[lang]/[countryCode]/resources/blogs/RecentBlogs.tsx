"use client";

import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";
import blogPosts from "./data/blogspost";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function RecentBlogPosts() {
  const params = useParams();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const lang = params?.lang as string || 'en';
  const countryCode = params?.countryCode as string || 'sa';

  // During SSR and initial hydration, render the same structure but without links
  // This prevents hydration mismatch
  const BlogCard = ({ post, isLink = false }: { post: typeof blogPosts[0], isLink?: boolean }) => (
    <div className="block">
      <div className="rounded-xl overflow-hidden duration-300 mb-[50px] md:mb-0">
        <FadeUp className="relative w-full rounded-xl h-[188px] xl:h-[250px]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover w-full rounded-xl sm:rounded-2xl h-full"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </FadeUp>
        <div className="p-4">
          <FadeUp className="font-semibold text-[16px] md:text-[18px] lg:h-[45px] lg:mt-10 text-gray-900 line-clamp-2 leading-tight mb-[10px] ">
            {post.title}
          </FadeUp>
          <FadeUp className="text-gray-600 text-[14px] md:text-[16px] line-clamp-3 leading-tight">
            {post.desc}
          </FadeUp>
        </div>
      </div>
    </div>
  );

  const BlogCardWithLink = ({ post }: { post: typeof blogPosts[0] }) => (
    <Link
      key={post.id}
      href={`/${lang}/${countryCode}/resources/blogs/${post.url}`}
      className="block"
    >
      <BlogCard post={post} />
    </Link>
  );

  return (
    <section className="py-10 md:py-12 lg:py-[90px]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 xl:px-0">
        <FadeUp className="text-fluid-h3 font-semibold mb-8 md:mb-12 lg:mb-[70px] text-gray-900">
          Recent Blog Posts from Accqrate
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
          {blogPosts.map((post) =>
            isMounted ? (
              <BlogCardWithLink key={post.id} post={post} />
            ) : (
              <BlogCard key={post.id} post={post} isLink={false} />
            )
          )}
        </div>
      </div>
    </section>
  );

}

