"use client";
import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  mailToLink,
  type,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
  mailToLink?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}) => {
  const handleAction = () => {
    if (typeof window !== "undefined") {
      if (mailToLink) {
        window.location.href = mailToLink;
      }
    }
    if (handleClick) {
      handleClick();
    }
  };

  return (
    <button
      type={type || "button"}
      className={`relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none ${otherClasses}`}
      onClick={handleAction}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-black-200 px-6 md:px-7 text-sm md:text-base font-medium text-white-100 backdrop-blur-3xl gap-2 transition-all duration-300 hover:bg-gradient-to-r hover:from-purple/90 hover:to-indigo/90">
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
