"use client";
import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full" id="Experience">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "transparent",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 overflow-hidden group hover:shadow-lg hover:shadow-purple/30 transition-all duration-300"
          >
            <div className="flex flex-col p-6 md:p-7 gap-4 h-full relative">
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              {/* Top Section - Company Logo and Title */}
              <div className="flex items-center gap-5 relative z-10">
                {/* Company Logo - No hover effects */}
                <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 overflow-hidden rounded-xl">
                  <img
                    src={card.companyLogo}
                    alt={`${card.title} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Title - Left aligned */}
                <div className="flex-1 min-w-20">
                  <h1
                    className="text-lg md:text-xl font-bold tracking-tight text-white transition-colors duration-300 break-words"
                    style={{ textAlign: "left", paddingLeft: "4.8rem" }} // Shifts title left
                  >
                    {card.title}
                  </h1>
                </div>
              </div>

              {/* Thumbnail and Dates Section */}
              <div className="flex items-center justify-between w-full relative z-10 py-2 px-4 mt-2 rounded-lg bg-black/20 dark:bg-white/5 border border-purple/10 hover:border-purple/30 transform hover:-translate-y-1 transition-all duration-300">
                {/* Thumbnail */}
                <div className="flex items-center">
                  <img
                    src={card.thumbnail}
                    alt={card.title}
                    className="w-8 h-8 md:w-10 md:h-10 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Date Range with animation */}
                <div className="flex items-center gap-2 overflow-hidden">
                  <svg
                    className="w-4 h-4 text-purple opacity-70 group-hover:opacity-100 transition-all duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <p className="text-gray-400 text-xs md:text-sm whitespace-nowrap group-hover:text-white transition-colors duration-300">
                    {card.startDate} - {card.endDate}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/80 leading-relaxed text-sm md:text-base relative z-10 mt-2">
                {card.desc}
              </p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
