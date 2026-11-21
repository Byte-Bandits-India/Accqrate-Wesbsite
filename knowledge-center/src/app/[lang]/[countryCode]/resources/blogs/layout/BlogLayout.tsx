"use client";

import React, { useEffect, useState } from "react";
import { Row, Col, Affix, Breadcrumb, Divider } from "antd";
import { useRouter, useParams } from "next/navigation";
import useMediaQuery from "@/hooks/useMediaQuery";
import SocialShare from "@/components/SocialShare";
import T from "@/components/T";
import CTASection from "@/components/CTASection";
import blogPosts from "../data/blogspost";
import "@/components/Blogs.scss";

interface BlogLayoutProps {
  children: React.ReactNode;
  pageTitle: string | React.ReactNode;
  updatedOn?: string;
  minRead?: string | React.ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({
  children,
  pageTitle,
  updatedOn,
  minRead,
}) => {
  const router = useRouter();
  const params = useParams();
  const lang = params?.lang as string;
  const countryCode = params?.countryCode as string;

  // Responsive checks
  const isMobile = useMediaQuery("(max-width: 900px)");
  const hideRecentBlogs = useMediaQuery("(max-width: 767px)");

  // Random blog posts
  const [randomBlogs, setRandomBlogs] = useState<
    { url: string; image: string; heading: string; value: string }[]
  >([]);

  useEffect(() => {
    const mappedBlogs = blogPosts.map((post) => ({
      url: post.url,
      image: post.image,
      heading: post.title,
      value: post.desc,
    }));
    const shuffled = [...mappedBlogs].sort(() => 0.5 - Math.random());
    setRandomBlogs(shuffled.slice(0, 4));
  }, []);

  const breadcrumbItems = [
    { title: "Home", href: "/" },
    { title: "Blogs", href: `/${lang}/${countryCode}/resources/blogs` },
    { title: pageTitle },
  ];

  return (
    <>
      {/* CTA Banner */}
      <section className="bg-[#eff3ff] py-10 overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <Row justify="center">
            <Col xs={24} md={18}>
              <img
                src="/images/blogs/accqrate-ad.webp"
                alt="Accqrate - ZATCA-compliant e-invoicing software"
                className="w-full cursor-pointer"
                onClick={() => router.push(`/${lang}/${countryCode}/contact-us`)}
              />
            </Col>
          </Row>
        </div>
      </section>

      {/* Breadcrumb Section */}
      <section className="bg-white py-4">
        <div className="container mx-auto px-4 md:px-40">
          {/* Breadcrumb Row */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <Breadcrumb
              items={breadcrumbItems.map((item) => ({
                title: <T>{item.title}</T>,
                href: item.href,
              }))}
            />
          </div>

          {/* Social Share under breadcrumb (visible only below 900px) */}
          {isMobile && (
            <div className="flex justify-center mt-3">
              <SocialShare className="flex flex-row space-x-4 bg-transparent shadow-none" />
            </div>
          )}

          <Divider />
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="bg-white pb-16">
        <div className="container mx-auto px-4">
          <Row justify="center" gutter={[20, 0]}>
            {/* Left fixed vertical SocialShare on desktop only */}
            {!isMobile && (
              <Col xs={0} md={2}>
                <Affix offsetTop={120}>
                  <SocialShare />
                </Affix>
              </Col>
            )}

            {/* Blog main content */}
            <Col xs={24} md={12}>
              <h1 className="text-2xl md:text-[30px] leading-tight font-semibold mb-3 text-[#1c2041] max-w-[700px]">
                {pageTitle}
              </h1>
              {updatedOn && (
                <p className="text-gray-500 text-[14px] mb-6">
                  <T>
                    Updated On : {updatedOn} | {minRead} min read
                  </T>
                </p>
              )}
              <div className="prose max-w-[800px]">{children}</div>
            </Col>

            {/* Right Sidebar: Recent Blogs */}
            {!hideRecentBlogs && (
              <Col xs={24} md={4}>
                <div className="p-2">
                  {randomBlogs.map((data, i) => (
                    <div
                      key={i}
                      onClick={() => router.push(data.url)}
                      className="cursor-pointer mb-5 group"
                    >
                      <img
                        src={data.image}
                        alt={data.heading}
                        className="w-full mb-2 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <h3 className="text-sm font-semibold text-[#1c2041] line-clamp-2 group-hover:text-blue-600">
                        {data.heading}
                      </h3>
                    </div>
                  ))}
                </div>
              </Col>
            )}
          </Row>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Footer Recent Blogs */}
     <section className="bg-[#eff3ff] py-10">
  <div className="container mx-auto px-4 max-w-[1250px]">
    <h3 className="text-xl md:text-[28px] text-[#1c2041] font-semibold mb-6 md:mb-10">
      <T>Recent Blog Posts from Accqrate</T>
    </h3>
    <Row
      justify="center"
      gutter={[
        { xs: 0, sm: 15, md: 20, lg: 20 },
        { xs: 10, sm: 15, md: 20, lg: 20 },
      ]}
    >
      {randomBlogs.map((data, i) => (
        <Col xs={24} sm={12} md={6} lg={6} key={i}>
          <div
            className="bg-white rounded-xl cursor-pointer hover:shadow-lg transition flex flex-col h-full"
            onClick={() => router.push(data.url)}
          >
            <img
              src={data.image}
              alt={data.heading}
              className="rounded-lg mb-3 w-full h-[180px] object-cover"
            />
            <div className="flex flex-col flex-grow px-4 pb-4">
              <h3 className="text-base leading-snug font-semibold text-gray-900 line-clamp-2 mb-2">
                <T>{data.heading}</T>
              </h3>
              <p className="text-gray-500 text-sm line-clamp-2 leading-tight">
                <T>{data.value}</T>
              </p>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  </div>
</section>

    </>
  );
};

export default BlogLayout;
