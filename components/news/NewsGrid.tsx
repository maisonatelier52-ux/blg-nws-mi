import React from "react";
import { NewsArticle } from "@/lib/news";
import { NewsCard } from "./NewsCard";

interface NewsGridProps {
  articles: NewsArticle[];
  columns?: 2 | 3 | 4;
  showImages?: boolean;
  className?: string;
}

export function NewsGrid({
  articles,
  columns = 3,
  showImages = true,
  className = "",
}: NewsGridProps) {
  const columnClasses = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div
      className={`grid ${columnClasses[columns]} gap-8 ${className}`}
    >
      {articles.map((article) => (
        <NewsCard
          key={article.id}
          article={article}
          showImage={showImages}
          className="pb-4"
        />
      ))}
    </div>
  );
}
