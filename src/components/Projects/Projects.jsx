"use client";

import React, { useState } from "react";
import { Card } from "../Card/Card";
import Link from "next/link";

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);
  const cardData = [
    {
      title: "Stock Market Analysis Website",
      href: "https://github.com/satts27/Stock-Market",
      description:
        "A comprehensive platform for analyzing stock market trends and data.",
      img: "/StockMarket.png",
    },
    {
      title: "Cyber Bullying Detection",
      href: "https://github.com/satts27/Rns",
      description:
        "An AI-powered tool for detecting and preventing cyber bullying.",
      img: "/Guardify2.jpg",
    },
    {
      title: "Fraud Detection",
      href: "https://github.com/Khushipm/FraudDetectionWebsite",
      description:
        "A sophisticated fraud detection website utilizing advanced algorithms to ensure secure transactions.",
      img: "/StockMarket.png",
    },
    // {
    //   title: "Personal Blog",
    //   href: "https://example.com/blog",
    //   description: "A stylish and customizable personal blog template.",
    // },
    // {
    //   title: "Portfolio Website",
    //   href: "https://example.com/portfolio",
    //   description:
    //     "A sleek portfolio website to showcase your work and projects.",
    // },
  ];
  const cardCount = cardData.length;
  const visibleCount = 3;

  const handleNext = () => {
    if (startIndex < cardCount - visibleCount) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="p-4 sm:p-10">
      {/* <div className="flex justify-between mb-4 items-center">
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded mr-4"
          onClick={handlePrev}
          disabled={startIndex === 0}
        >
          Previous
        </button>
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded"
          onClick={handleNext}
          disabled={startIndex >= cardCount - visibleCount}
        >
          Next
        </button>
      </div> */}
      <div className="overflow-hidden grid grid-cols-1 sm:grid-cols-3 ">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="w-full sm:min-w-[calc(100%/3)] p-2 rounded-[12px]"
          >
            <Link href={card.href}>
              <Card
                title={card.title}
                href={card.href}
                description={card.description}
                img={card.img}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
