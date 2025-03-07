"use client";
import React, { useState, useEffect } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Enhanced floating heart with more dynamic animation
const FloatingHeart = ({ position }: { position: number }) => {
  // Create more varied random paths
  const xOffset = Math.random() * 120 - 60; // Random value between -60 and 60
  const scale = 0.5 + Math.random() * 1; // Random size between 0.5 and 1.5
  const duration = 1.5 + Math.random() * 1; // Random duration between 1.5 and 2.5 seconds
  const delay = Math.random() * 0.5; // Random delay for staggered effect
  const rotate = Math.random() * 360; // Full rotation possibilities

  // Create a custom curve path using cubic bezier
  const customPath = {
    type: "tween",
    duration: duration,
    ease: [0.34, 1.56, 0.64, 1], // Custom spring-like effect
    delay: delay,
  };

  return (
    <motion.div
      className="absolute text-purple"
      initial={{
        x: position,
        y: 0,
        opacity: 0,
        scale: 0,
        rotate: 0,
      }}
      animate={{
        x: [position, position + xOffset / 2, position + xOffset],
        y: [0, -50, -150],
        opacity: [0, 1, 0],
        scale: [0, scale, scale / 2],
        rotate: [0, rotate / 2, rotate],
      }}
      transition={{
        x: customPath,
        y: customPath,
        opacity: {
          duration: duration,
          times: [0, 0.2, 1],
          delay: delay,
        },
        scale: {
          duration: duration,
          times: [0, 0.2, 1],
          delay: delay,
        },
      }}
    >
      <FaHeart className="text-xl" />
    </motion.div>
  );
};

// Add sparkle effect that appears around the like button
const Sparkle = ({ index }: { index: number }) => {
  const size = 3 + Math.random() * 6;
  const angle = (index / 8) * Math.PI * 2; // Evenly distribute around circle
  const radius = 25 + Math.random() * 5;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
  const delay = index * 0.05;

  return (
    <motion.div
      className="absolute w-1 h-1 bg-purple rounded-full"
      style={{
        width: size,
        height: size,
      }}
      initial={{
        x: 0,
        y: 0,
        opacity: 0,
        scale: 0,
      }}
      animate={{
        x: x,
        y: y,
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
      }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
      }}
    />
  );
};

const WebsiteFeedback = () => {
  const [feedback, setFeedback] = useState<string | null>(null);
  const [hearts, setHearts] = useState<number[]>([]);
  const [showSparkles, setShowSparkles] = useState(false);
  const [likeCount, setLikeCount] = useState<number>(0);

  useEffect(() => {
    const fetchLikeCount = async () => {
      try {
        const res = await fetch("/api/GetLikes", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setLikeCount(data.count);
      } catch (error) {
        console.error("Error fetching like count:", error);
      }
    };
    fetchLikeCount();
  }, []);

  const handleFeedback = async (type: string) => {
    // If already selected, deselect
    if (feedback === type) {
      setFeedback(null);
      setHearts([]);
      setShowSparkles(false);
      return;
    }

    setFeedback(type);

    if (type === "like") {
      setShowSparkles(true);
      const newHearts = [];
      for (let i = 0; i < 15; i++) {
        newHearts.push(Math.random() * 120 - 60);
      }
      setHearts(newHearts);

      try {
        const res = await fetch("/api/GetLikes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setLikeCount(data.count);
      } catch (error) {
        console.error("Error incrementing like count:", error);
      }

      setTimeout(() => {
        setShowSparkles(false);
      }, 1500);

      setTimeout(() => {
        setHearts([]);
      }, 3000);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="my-4 flex items-center justify-center">
        <motion.p
          className="mr-4 text-white-100"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Did you like my website?
        </motion.p>

        <div className="flex gap-6 relative">
          <AnimatePresence>
            {hearts.map((position, index) => (
              <FloatingHeart key={`heart-${index}`} position={position} />
            ))}
          </AnimatePresence>

          <div className="relative">
            {showSparkles &&
              Array.from({ length: 8 }).map((_, index) => (
                <Sparkle key={`sparkle-${index}`} index={index} />
              ))}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => handleFeedback("like")}
              className={`w-12 h-12 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 ${
                feedback === "like"
                  ? "bg-purple/30 border-purple"
                  : "bg-black-200 border-black-300"
              } rounded-lg border hover:border-purple/50 transition-all duration-300`}
            >
              <motion.div
                animate={
                  feedback === "like"
                    ? {
                        scale: [1, 1.3, 1],
                        rotate: [0, 10, -10, 0],
                      }
                    : {}
                }
                transition={{ duration: 0.5 }}
              >
                <FaThumbsUp
                  className={`text-xl ${
                    feedback === "like" ? "text-purple" : "text-white-100"
                  }`}
                />
              </motion.div>
            </motion.button>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            onClick={() => handleFeedback("dislike")}
            className={`w-12 h-12 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 ${
              feedback === "dislike"
                ? "bg-purple/30 border-purple"
                : "bg-black-200 border-black-300"
            } rounded-lg border hover:border-purple/50 transition-all duration-300`}
          >
            <motion.div
              animate={
                feedback === "dislike"
                  ? {
                      scale: [1, 1.3, 1],
                      rotate: [0, -10, 10, 0],
                    }
                  : {}
              }
              transition={{ duration: 0.5 }}
            >
              <FaThumbsDown
                className={`text-xl ${
                  feedback === "dislike" ? "text-purple" : "text-white-100"
                }`}
              />
            </motion.div>
          </motion.button>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <AnimatePresence mode="wait">
          {feedback && (
            <motion.p
              key={feedback}
              initial={{ opacity: 0, y: 10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="mt-3 text-sm text-center text-purple overflow-hidden flex items-center justify-center gap-1"
            >
              {feedback === "like" ? (
                <>
                  Thanks for the feedback! {likeCount} people love this!{" "}
                  <FaHeart className="text-purple" />
                </>
              ) : (
                "Thanks for your feedback. How can I improve?"
              )}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WebsiteFeedback;
