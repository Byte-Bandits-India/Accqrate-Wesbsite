"use client";

import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";
import blogPosts from "./data/blogspost";
import { useParams } from "next/navigation";

export default function RecentBlogPosts() {
  const params = useParams();
  const lang = params?.lang as string;
  const countryCode = params?.countryCode as string;

  return (
    <section className="py-10 md:py-12 lg:py-[90px]">
      <div className="container mx-auto px-4 md:px-8">
        <FadeUp className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12 lg:mb-[70px] text-gray-900">
          Recent Blog Posts from Accqrate
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/${lang}/${countryCode}/resources/blogs/${post.url}`}
              className="block"
            >
              <div className="rounded-xl cursor-pointer overflow-hidden duration-300 mb-[50px] md:mb-0">
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
                  <FadeUp className="font-semibold text-fluid-body lg:h-[70px] lg:mt-10 lg:text-[26px] text-gray-900 line-clamp-2 leading-tight mb-[10px] md:mb-[30px]">
                    {post.title}
                  </FadeUp>
                  <FadeUp className="text-gray-600 text-fluid-small line-clamp-3 leading-tight">
                    {post.desc}
                  </FadeUp>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
