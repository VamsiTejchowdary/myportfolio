"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaDownload } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const hasRun = useRef<boolean>(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const updateVisitorCount = async () => {
      try {
        const res = await fetch("/api/GetCount", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data: { count?: number; error?: string } = await res.json();
        if (data.count !== undefined) {
          setVisitorCount(data.count);
        } else {
          console.error("No count in response:", data);
          // Fallback to GET if POST fails
          const fallbackRes = await fetch("/api/GetCount", { method: "GET" });
          const fallbackData = await fallbackRes.json();
          setVisitorCount(fallbackData.count || 0);
        }
      } catch (error) {
        console.error("Failed to update visitor count:", error);
        // Fallback to GET on error
        try {
          const res = await fetch("/api/GetCount", { method: "GET" });
          const data = await res.json();
          setVisitorCount(data.count || 0);
        } catch (fallbackError) {
          console.error("Fallback fetch failed:", fallbackError);
        }
      }
    };

    updateVisitorCount();
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Vamsi_Tej_Chowdary.pdf";
    link.download = "Vamsi_Tej_Chowdary_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pb-20 pt-36 relative">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid Background */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center gap-6">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            2+ years of experience with building web applications
          </p>

          <TextGenerateEffect
            words="Hi! I'm Vamsi Tej, a Full Stack Developer based in Cincinnati."
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <div className="eye-tracker inline-flex items-center gap-1 relative mb-2">
            <FaEye className="text-purple/80 eye-icon text-sm md:text-base" />
            <span className="text-white/80 text-xs md:text-sm font-light count-number">
              {visitorCount}
            </span>
            <div className="tooltip hidden absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-white/80 text-xs whitespace-nowrap">
              No. of Visits
            </div>
          </div>

          <MagicButton
            title="Grab My Resume"
            icon={<FaDownload />}
            position="right"
            handleClick={handleDownload}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

// Global Styles (unchanged)
const GlobalStyles = () => {
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      .eye-tracker {
        transition: all 0.3s ease;
        position: relative;
      }
      
      .eye-tracker:hover {
        transform: translateY(-1px);
      }
      
      .eye-icon {
        animation: eye-blink 4s infinite ease-in-out;
      }
      
      @keyframes eye-blink {
        0%, 100% {
          opacity: 1;
          transform: scaleY(1);
        }
        48% {
          opacity: 1;
          transform: scaleY(1);
        }
        50% {
          opacity: 0.4;
          transform: scaleY(0.1);
        }
        52% {
          opacity: 1;
          transform: scaleY(1);
        }
        54% {
          opacity: 1;
          transform: scaleY(1);
        }
        56% {
          opacity: 0.4;
          transform: scaleY(0.1);
        }
        58% {
          opacity: 1;
          transform: scaleY(1);
        }
      }
      
      .count-number {
        position: relative;
        display: inline-block;
        min-width: 20px;
        text-align: center;
      }
      
      .eye-tracker:hover .count-number {
        color: rgba(255, 255, 255, 0.9);
        text-shadow: 0 0 8px rgba(139, 92, 246, 0.3);
      }

      @keyframes countUp {
        0% {
          transform: translateY(10px);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }

      .count-number {
        animation: countUp 0.3s ease-out forwards;
      }

      .eye-tracker:hover .tooltip {
        display: block;
        animation: fadeIn 0.2s ease-in;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translate(-50%, 5px);
        }
        to {
          opacity: 1;
          transform: translate(-50%, 0);
        }
      }

      @media (max-width: 768px) {
        .eye-tracker {
          transform: scale(0.9);
        }
        
        .tooltip {
          font-size: 0.6rem;
        }
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return null;
};
