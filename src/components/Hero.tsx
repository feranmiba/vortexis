"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "../components/ui/Button";
import cuate from "@/public/assets/cuate.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselItems = [
  {
    title: "The home for hackathons",
    titleHighlight: "hackathons",
    description:
      "Where organizations and developers come together to build, inspire, and innovate.",
    image: cuate,
    alt: "Hackathon illustration with developers and data visualization",
  },
  {
    title: "Build your future",
    titleHighlight: "future",
    description:
      "Connect with like-minded developers and bring your ideas to life.",
    image: cuate, // Replace with different image
    alt: "Developers collaborating on projects",
  },
  {
    title: "Showcase your talent",
    titleHighlight: "talent",
    description:
      "Demonstrate your skills and creativity in a competitive environment.",
    image: cuate, // Replace with different image
    alt: "Developers presenting their projects",
  },
];

export const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % carouselItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const goToPrevSlide = () => {
    setActiveIndex(
      (current) => (current - 1 + carouselItems.length) % carouselItems.length
    );
  };

  const goToNextSlide = () => {
    setActiveIndex((current) => (current + 1) % carouselItems.length);
  };

  return (
    <div className="bg-[#F5F7FA] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[550px]">
          <div className="relative mt-20 md:mt-0 flex flex-col justify-center h-full lg:min-h-[450px]">
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-500 absolute w-full ${
                  index === activeIndex
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <h1 className="text-4xl  md:text-5xl lg:text-6xl font-bold">
                  <span className="text-gray-900">
                    {item.title.replace(item.titleHighlight, "")}
                  </span>
                  <br />
                  <span className="text-[#407BFF]">{item.titleHighlight}</span>
                </h1>
                <p className="mt-4 text-gray-600 text-lg max-w-lg">
                  {item.description}
                </p>
                <div className="mt-8 lg:mt-12 flex flex-wrap gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                    className="bg-blue-500 text-white px-6 py-3 text-lg"
                  >
                    For Organizers
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-6 py-3 text-lg"
                  >
                    For Participants
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="relative h-72 md:h-96 lg:h-[450px] w-full mt-30 md:mt-0">
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 absolute w-full h-full ${
                  index === activeIndex
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  layout="fill"
                  className="object-contain"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="absolute inset-y-0 left-0  flex items-center">
        <button
          onClick={goToPrevSlide}
          className="bg-white/30 hover:bg-white/50 rounded-full p-2 ml-4 shadow-md focus:outline-none"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-gray-800" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          onClick={goToNextSlide}
          className="bg-white/30 hover:bg-white/50 rounded-full p-2 mr-4 shadow-md focus:outline-none"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-gray-800" />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full ${
              index === activeIndex ? "bg-[#407BFF] w-2" : "bg-gray-300"
            } transition-all duration-300`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
