"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaDownload } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const hasRun = useRef<boolean>(false);
  const counterRef = useRef<HTMLDivElement>(null);

  // Function to animate count from start to end value
  const animateCount = (start: number, end: number, duration: number) => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = Math.floor(start + (end - start) * progress);
      setVisitorCount(current);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };

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
          animateCount(0, data.count, 3000); // 3-second animation
        } else {
          console.error("No count in response:", data);
          const fallbackRes = await fetch("/api/GetCount", { method: "GET" });
          const fallbackData = await fallbackRes.json();
          animateCount(0, fallbackData.count || 0, 3000);
        }
      } catch (error) {
        console.error("Failed to update visitor count:", error);
        try {
          const res = await fetch("/api/GetCount", { method: "GET" });
          const data = await res.json();
          animateCount(0, data.count || 0, 2500);
        } catch (fallbackError) {
          console.error("Fallback fetch failed:", fallbackError);
        }
      }
    };

    updateVisitorCount();

    // Add subtle parallax effect to the counter on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (!counterRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const moveX = clientX / innerWidth - 0.5;
      const moveY = clientY / innerHeight - 0.5;

      counterRef.current.style.transform = `translate(${moveX * 3}px, ${
        moveY * 3
      }px)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Vamsi_Tej_Chowdary.pdf";
    link.download = "Vamsi_Tej_Chowdary_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Format the visitor count with commas
  const formattedCount = visitorCount.toLocaleString();

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
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80"
          >
            4 years of experience with building web applications
          </motion.p>

          <TextGenerateEffect
            words="Hi! I'm Vamsi Tej, a Full Stack Developer based in Cincinnati."
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <motion.div
            ref={counterRef}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
              delay: 0.5,
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="eye-tracker inline-flex items-center gap-1 relative mb-2"
          >
            <motion.div
              animate={{
                scale: isHovering ? [1, 1.1, 1] : 1,
              }}
              transition={{
                duration: 0.8,
                repeat: isHovering ? Infinity : 0,
                repeatType: "reverse",
              }}
            >
              <FaEye className="text-purple/80 eye-icon text-sm md:text-base" />
            </motion.div>

            <motion.span className="text-white/60 text-xs md:text-sm font-light count-number">
              {formattedCount}
            </motion.span>

            <AnimatePresence>
              {isHovering && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-white/60 text-xs whitespace-nowrap"
                >
                  No. of Visits
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.7,
            }}
          >
            <MagicButton
              title="Grab My Resume"
              icon={<FaDownload />}
              position="right"
              handleClick={handleDownload}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// Global Styles with enhanced animations
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
        letter-spacing: 0.03em;
        font-variant-numeric: tabular-nums;
      }
      
      .eye-tracker:hover .count-number {
        color: rgba(255, 255, 255, 0.8);
        text-shadow: 0 0 8px rgba(139, 92, 246, 0.2);
      }

      @keyframes countUp {
        0% {
          transform: translateY(10px);
          opacity: 0;
          filter: blur(2px);
        }
        100% {
          transform: translateY(0);
          opacity: 1;
          filter: blur(0);
        }
      }

      .count-number {
        animation: countUp 0.5s ease-out forwards;
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
