"use client";
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { Facebook, Linkedin, Twitter } from "feather-icons-react";
import { RedditOutlined } from "@ant-design/icons";

interface SocialShareProps {
  className?: string;
}

export default function SocialShare({ className = "" }: SocialShareProps) {
  const [currentUrl, setCurrentUrl] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
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
      title: "Share on Facebook",
      icon: <Facebook className="w-5 h-5" />,
    },
    {
      platform: "LinkedIn",
      href: linkedInShareURL,
      title: "Share on LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      platform: "Twitter",
      href: twitterShareURL,
      title: "Share on Twitter",
      icon: <Twitter className="w-5 h-5" />,
    },
    {
      platform: "Reddit",
      href: redditShareURL,
      title: "Share on Reddit",
      icon: <RedditOutlined className="text-lg" />,
    },
  ];

  return (
    <div
      className={`social-share ${
        className.includes("horizontal")
          ? "flex flex-row items-center space-x-4"
          : "flex flex-col items-center bg-gray-100 rounded-full p-3 space-y-3"
      } ${className}`}
    >
      <ul
        className={`flex ${
          className.includes("horizontal")
            ? "flex-row space-x-4"
            : "flex-col space-y-3"
        } list-none m-0 p-0`}
      >
        {SocialShareLink.map((data, i) => (
          <li key={i}>
            <a
              href={data.href}
              target="_blank"
              rel="noopener noreferrer"
              title={data.title}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              {data.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
