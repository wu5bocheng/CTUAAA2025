"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

interface Article {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  externalUrl?: string;
}

// Define articles
const unsortedArticles: Article[] = [
  {
    slug: "2024-gong-fengmin-interview",
    title: "对话弓峰敏：硅谷信息安全创业拓荒者",
    date: "2025年03月03日",
    coverImage: "/articles/2024-gong-fengmin-interview/cover.jpg",
    externalUrl: "https://mp.weixin.qq.com/s/jrnA2ttj-7a0Dc895PNeBg",
  },
  {
    slug: "2024-02-09-summit-registration",
    title: "【报名正式开启】2025交通大学美洲校友联谊峰会与您相约硅谷",
    date: "2024年02月09日",
    coverImage: "/articles/2024-02-09-summit-registration/cover.png",
    externalUrl: "https://mp.weixin.qq.com/s/VdptH1tOzIwHx21ml8HhZA",
  },
  {
    slug: "2024-02-24-five-universities",
    title: "五所交大母校新动态抢先看，2025美洲校友峰会等你来",
    date: "2024年02月24日",
    coverImage: "/articles/2024-02-24-five-universities/cover.png",
    externalUrl: "https://mp.weixin.qq.com/s/EFUrWIgpinsrxIaZpRMR7A",
  },
  {
    slug: "2025-03-12-guest-announce",
    title: "【重磅嘉宾揭晓】交通大学美洲校友峰会火热报名中",
    date: "2025年03月12日",
    coverImage: "/articles/2024-02-09-summit-registration/cover.png",
    externalUrl: "https://mp.weixin.qq.com/s/FXaaTADfEGAX8x3qU_bqhw",
  },
  {
    slug: "2025-03-15-kenneth-li-interview",
    title: "从工程师到上市公司CFO——与交大校友 Kenneth Li 共话先进电力制造之路",
    date: "2025年03月15日",
    coverImage: "/articles/2025-kennth-li/cover.jpeg",
    externalUrl: "https://mp.weixin.qq.com/s/s-1gPr_THwnUQt4InFkxag",
  },
  {
    slug: "2025-03-12-hanxu-guest-announce",
    title: "文远知行创始人兼CEO韩旭将出席交大美洲峰会｜Robobus亮相西班牙",
    date: "2025年03月22日",
    coverImage: "/articles/2025-Robobus-spain/cover.jpg",
    externalUrl: "https://mp.weixin.qq.com/s/tw_-8f4WxuZ5LFp1Io1E9g",
  },
  {
    slug: "2025-03-12-summit-registration",
    title: "聚“交”硅谷，创领未来|交通大学美洲校友峰会创投路演报名开启！",
    date: "2025年03月26日",
    coverImage: "/articles/2024-02-09-summit-registration/cover.png",
    externalUrl: "https://mp.weixin.qq.com/s/jI-ANze1prms4At5gx-vUg",
  },
  {
    slug: "2025-03-12-virtual-marathon-registration",
    title: "【交大生日·峰会云跑】虚拟马拉松挑战赛全球开跑！",
    date: "2025年03月27日",
    coverImage: "/articles/2025-virtual-marathon/cover.png",
    externalUrl: "https://mp.weixin.qq.com/s/6Du2bArlgVh1z7ZIcvLwjg",
  },

  // Add more articles here
];

// Sort articles by date (most recent first)
const articles = [...unsortedArticles].sort((a, b) => {
  // Extract year, month, day from the date strings
  const aMatch = a.date.match(/(\d{4})年(\d{2})月(\d{2})日/);
  const bMatch = b.date.match(/(\d{4})年(\d{2})月(\d{2})日/);

  if (!aMatch || !bMatch) return 0;

  const aDate = new Date(parseInt(aMatch[1]), parseInt(aMatch[2]) - 1, parseInt(aMatch[3]));

  const bDate = new Date(parseInt(bMatch[1]), parseInt(bMatch[2]) - 1, parseInt(bMatch[3]));

  // Sort in descending order (newest first)
  return bDate.getTime() - aDate.getTime();
});

export default function ArticleSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSlide = useCallback(
    (direction: "left" | "right") => {
      if (isAnimating) return;

      setIsAnimating(true);
      setIsPaused(true);
      setCurrentIndex((prev) => {
        if (direction === "left") {
          return prev === 0 ? articles.length - 1 : prev - 1;
        } else {
          return prev === articles.length - 1 ? 0 : prev + 1;
        }
      });

      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!isPaused && !isHovered) {
      interval = setInterval(() => {
        handleSlide("right");
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [isPaused, handleSlide, isHovered]);

  // Reset pause after 10 seconds of inactivity
  useEffect(() => {
    if (isPaused) {
      const timeout = setTimeout(() => {
        setIsPaused(false);
      }, 10000);

      return () => clearTimeout(timeout);
    }
  }, [isPaused]);

  const handleArticleClick = (e: React.MouseEvent, article: Article) => {
    if (article.externalUrl) {
      e.preventDefault();
      window.open(article.externalUrl, "_blank", "noopener,noreferrer");
    }
  };

  if (!isClient) {
    return <div className="relative w-full max-w-6xl mx-auto h-[400px]" />;
  }

  return (
    <div
      className="relative w-full max-w-6xl mx-auto h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Navigation Arrows - Hide on small screens */}
      <button
        onClick={() => handleSlide("left")}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 
          text-white p-2 rounded-full backdrop-blur-sm transition-all"
      >
        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => handleSlide("right")}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 
          text-white p-2 rounded-full backdrop-blur-sm transition-all"
      >
        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Articles */}
      <div className="relative w-full h-full flex items-center justify-center">
        {articles.map((article, index) => {
          const position = (index - currentIndex + articles.length) % articles.length;
          const isActive = position === 0;
          const isPrev = position === articles.length - 1;
          const isNext = position === 1;

          const ArticleWrapper = article.externalUrl ? "a" : Link;
          const linkProps = article.externalUrl
            ? {
                href: article.externalUrl,
                target: "_blank",
                rel: "noopener noreferrer",
              }
            : {
                href: `/articles/${article.slug}`,
              };

          return (
            <ArticleWrapper
              key={article.slug}
              {...linkProps}
              onClick={(e) => handleArticleClick(e, article)}
              className={`absolute w-[320px] sm:w-[600px] md:w-[800px] h-full transition-all duration-500 ease-in-out
                ${isActive ? "z-10 scale-100 opacity-100 translate-x-0" : ""}
                ${isPrev ? "z-0 scale-90 opacity-50 -translate-x-full" : ""}
                ${isNext ? "z-0 scale-90 opacity-50 translate-x-full" : ""}
                ${!isActive && !isPrev && !isNext ? "opacity-0" : ""}
              `}
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden group">
                <Image src={article.coverImage} alt={article.title} fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 text-white">
                  <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 group-hover:underline line-clamp-2">{article.title}</h3>
                  <p className="text-sm sm:text-base text-gray-200">{article.date}</p>
                </div>
              </div>
            </ArticleWrapper>
          );
        })}
      </div>

      {/* Dots */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2 z-20">
        {articles.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all
              ${currentIndex === index ? "bg-white w-3 sm:w-4" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}
