"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useState } from "react";
import { RedditOutlined } from "@ant-design/icons";
import { Facebook, Linkedin, Twitter } from "feather-icons-react";

interface SocialShareProps {
  className?: string;
  inline?: boolean; // if true, renders inline (used under breadcrumb)
}

export default function SocialShare({ className = "", inline = false }: SocialShareProps) {
  const [currentUrl, setCurrentUrl] = useState<string>("");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Handle SSR-safe window usage and resize detection
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
      const handleResize = () => setIsMobile(window.innerWidth <= 900);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
  const twitterShareURL = `https://twitter.com/share?url=${currentUrl}`;
  const linkedInShareURL = `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`;
  const redditShareURL = `https://www.reddit.com/submit?url=${currentUrl}`;

  const SocialShareLink = [
    {
      platform: "Facebook",
      href: facebookShareURL,
      id: "facebookShare",
      title: "Share on Facebook",
      iconClass: <Facebook className="w-5 h-5" />,
    },
    {
      platform: "LinkedIn",
      href: linkedInShareURL,
      id: "linkedInShare",
      title: "Share on LinkedIn",
      iconClass: <Linkedin className="w-5 h-5" />,
    },
    {
      platform: "Twitter",
      href: twitterShareURL,
      id: "twitterShare",
      title: "Share on Twitter",
      iconClass: <Twitter className="w-5 h-5" />,
    },
    {
      platform: "Reddit",
      href: redditShareURL,
      id: "redditShare",
      title: "Share on Reddit",
      iconClass: <RedditOutlined className="text-xl" />,
    },
  ];

  // ✅ Inline horizontal version (under breadcrumb)
  if (inline || isMobile) {
    return (
      <div
        className={`flex justify-center  bg-transparent ${className}`}
      >
        <ul className="flex items-center justify-center space-x-6 mb-0">
          {SocialShareLink.map((data, i) => (
            <li key={i} className="list-none">
              <a
                className="text-[#0a0a55] hover:text-blue-600 transition-colors duration-300"
                href={data.href}
                id={data.id}
                target="_blank"
                rel="noopener noreferrer"
                title={data.title}
              >
                {data.iconClass}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // ✅ Desktop vertical version (left fixed)
  return (
    <div
      className={`fixed top-1/2  -translate-y-1/2 bg-[#f5f7ff] rounded-full shadow-md flex flex-col items-center justify-center p-3 space-y-4 z-50 ${className}`}
    >
      <ul>
        {SocialShareLink.map((data, i) => (
          <li key={i} className="list-none mb-3 last:mb-0">
            <a
              className="text-[#0a0a55] hover:text-blue-600 transition-colors duration-300"
              href={data.href}
              id={data.id}
              target="_blank"
              rel="noopener noreferrer"
              title={data.title}
            >
              {data.iconClass}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
