"use client";
import React from "react";
import { education } from "@/data";
import { cn } from "@/lib/utils";
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTrophy,
} from "react-icons/fa";

// Define types for the education data
interface EducationItem {
  id: string | number;
  university: string;
  course: string;
  startDate: string;
  endDate: string;
  location: string;
  collegeImage: string;
  cgpa: string;
}

// Custom Education Card component
const EducationCard: React.FC<{ edu: EducationItem }> = ({ edu }) => {
  const borderDuration = Math.floor(Math.random() * 10000) + 10000; // Random duration between 10s and 20s

  return (
    <div
      className={cn(
        "relative bg-transparent text-white overflow-hidden rounded-xl border border-slate-800 group",
        "h-full flex flex-col" // Ensure consistent height
      )}
    >
      {/* Moving border effect similar to Experience */}
      <div
        className="absolute inset-0 border-[2px] border-transparent rounded-xl bg-[conic-gradient(#9333ea_20deg,#1e3a8a_180deg,#9333ea_360deg)] animate-[spin_linear_infinite]"
        style={{
          animationDuration: `${borderDuration}ms`,
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div className="absolute inset-[1px] bg-black-100 rounded-xl" />
      </div>

      {/* Card content */}
      <div className="relative bg-slate-900/50 backdrop-blur-xl p-4 md:p-5 h-full flex flex-col rounded-xl z-10">
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple/10 via-transparent to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

        {/* Top Section with Logo and University Info */}
        <div className="flex items-center gap-3 relative z-10">
          {/* College Image - Larger, no background */}
          <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 overflow-hidden rounded-full">
            <img
              src={edu.collegeImage}
              alt={`${edu.university} logo`}
              className="w-full h-full object-contain"
            />
          </div>

          {/* University Name and Dates */}
          <div className="flex-1 min-w-0">
            <h1 className="text-base md:text-lg font-bold tracking-tight text-white group-hover:text-purple/90 transition-colors duration-300 break-words">
              {edu.university}
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <FaCalendarAlt className="w-3 h-3 text-purple opacity-70 group-hover:opacity-100 transition-all duration-300" />
              <p className="text-gray-400 text-xs group-hover:text-white transition-colors duration-300">
                {edu.startDate} - {edu.endDate}
              </p>
            </div>
          </div>
        </div>

        {/* Course, CGPA, and Location */}
        <div className="mt-3 relative z-10">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1">
              <FaGraduationCap className="w-4 h-4 text-purple" />
              <p className="text-white/80 text-sm font-medium break-words">
                {edu.course}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <FaTrophy className="w-4 h-4 text-yellow-500 group-hover:text-yellow-400 transition-colors duration-300" />
              <p className="text-gray-400 text-xs group-hover:text-white/80 transition-colors duration-300 whitespace-nowrap">
                {edu.cgpa}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <FaMapMarkerAlt className="w-3 h-3 text-purple" />
            <p className="text-gray-400 text-xs group-hover:text-white/80 transition-colors duration-300 whitespace-nowrap">
              {edu.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  return (
    <div className="py-16 w-full" id="Education">
      <h1 className="heading">
        My <span className="text-purple">Academic Journey</span>
      </h1>

      <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
        {education.map((edu) => (
          <EducationCard key={edu.id} edu={edu} />
        ))}
      </div>
    </div>
  );
};

export default Education;
