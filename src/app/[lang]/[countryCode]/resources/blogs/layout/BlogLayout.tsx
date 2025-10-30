"use client";

import React, { useEffect, useState } from "react";
import { Row, Col, Affix, Breadcrumb, Divider } from "antd";
import { useRouter } from "next/navigation";
import useMediaQuery from "@/hooks/useMediaQuery";
import SocialShare from "@/components/SocialShare";
import T from "@/components/T";
import CTASection from "@/components/CTASection";
import blogPosts from "../data/blogspost";
import { useParams } from "next/navigation";
import '@/components/Blogs.scss'
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

  const hideSocialShare = useMediaQuery("(max-width: 900px)");
  const hideRecentBlogs = useMediaQuery("(max-width: 767px)");
  const horizontalSocialShare = useMediaQuery("(max-width: 900px)");

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

 const params = useParams();
  const lang = params?.lang as string;
  const countryCode = params?.countryCode as string;

  const breadcrumbItems = [
    { title: "Home", href: "/" },
    { title: "Blogs", href: `/${lang}/${countryCode}/resources/blogs` },
    { title: pageTitle },
  ];

  return (
    <>
      {/* CTA banner */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <Row justify="center">
            <Col xs={24} md={18}>
              <img
                src="/images/blogs/accqrate-ad.webp"
                alt="Accqrate - ZATCA-compliant e-invoicing software"
                className="w-full cursor-pointer rounded-xl shadow"
                onClick={() => router.push(`/${lang}/${countryCode}/contact-us`)}
              />
            </Col>
          </Row>
        </div>
      </section>

      {/* Breadcrumb & Social Share */}
      <section className="bg-white pt-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <Breadcrumb
  items={breadcrumbItems.map((item) => ({
    title: <T>{item.title}</T>,
    href: item.href,
  }))}
/>

            {horizontalSocialShare && (
              <div className="mt-3 md:mt-0">
                <SocialShare className="flex space-x-3" />
              </div>
            )}
          </div>
          <Divider />
        </div>
      </section>

      {/* Blog Content Area */}
      <section className="bg-white pb-16">
        <div className="container mx-auto px-4">
          <Row justify="center" gutter={[20, 0]}>
            {/* Left Social Share */}
            {!hideSocialShare && (
              <Col xs={24} md={4}>
                <Affix offsetTop={120}>
                  <div className="bg-gray-100 rounded-full py-3 px-2 text-center shadow-md">
                    <SocialShare />
                  </div>
                </Affix>
              </Col>
            )}

            {/* Blog main content */}
            <Col xs={24} md={16}>
              <h1 className="text-2xl md:text-3xl font-semibold mb-3 text-gray-900">
                {pageTitle}
              </h1>
              {updatedOn && (
                <p className="text-gray-500 text-sm mb-6">
                  <T>
                    Updated On : {updatedOn} | {minRead} min read
                  </T>
                </p>
              )}
              <div className="prose max-w-none">{children}</div>
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
                        className=" w-full mb-2 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <h3 className="text-sm font-medium text-gray-800 line-clamp-2 group-hover:text-blue-600">
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

      {/* Call To Action */}
      <CTASection />

      {/* Footer Recent Blogs */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-semibold mb-6">
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
                  className="bg-white rounded-xl  cursor-pointer hover:shadow-lg transition "
                  onClick={() => router.push(data.url)}
                >
                  <img
                    src={data.image}
                    alt={data.heading}
                    className="rounded-lg mb-3 w-full object-cover"
                  />
                  <h3 className="text-base font-semibold p-4 text-gray-900 line-clamp-2 md:h-[60px]">
                    <T>{data.heading}</T>
                  </h3>
                  <p className="text-gray-500 text-sm p-4 line-clamp-3">
                    <T>{data.value}</T>
                  </p>
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
