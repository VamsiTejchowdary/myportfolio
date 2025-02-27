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

              {/* Company Logo with increased size */}
              <div className="absolute top-4 right-4 bg-black/20 p-2 rounded-full backdrop-blur-sm border border-white/5">
                <img
                  src={card.companyLogo}
                  alt={`${card.title} logo`}
                  className="w-12 h-12 object-contain" // Increased from w-8 h-8 to w-12 h-12
                />
              </div>

              {/* Row with thumbnail */}
              <div className="flex items-center gap-5 mb-3 relative z-10">
                <div className="overflow-hidden rounded-xl w-20 h-20 flex-shrink-0 border border-white/10 group-hover:border-purple/20 transition-all duration-300">
                  <img
                    src={card.thumbnail}
                    alt={card.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                </div>

                <div>
                  <h1 className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-purple/90 transition-colors duration-300">
                    {card.title}
                  </h1>
                  <p className="text-gray-400 text-sm mt-1 flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-purple mr-2"></span>
                    {card.startDate} - {card.endDate}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/80 leading-relaxed text-sm md:text-base relative z-10">
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
