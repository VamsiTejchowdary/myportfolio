"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { socialMedia } from "@/data";
import {
  GithubIcon,
  LinkedinIcon,
  HomeIcon,
  UserIcon,
  FolderIcon,
  MailIcon,
} from "lucide-react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down and past 50px threshold
        setVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const socialLinks = {
    github: socialMedia.find((social) => social.id === 1),
    linkedin: socialMedia.find((social) => social.id === 2),
  };

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: visible ? 1 : 0,
          y: visible ? 0 : -100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className={cn(
          "fixed z-[5000] top-10 inset-x-0 mx-auto max-w-fit w-[95%] md:w-auto",
          className
        )}
      >
        <div
          className="flex flex-row items-center justify-center px-4 md:px-6 py-3 md:py-4 rounded-2xl shadow-2xl"
          style={{
            backdropFilter: "blur(24px) saturate(220%)",
            background:
              "linear-gradient(135deg, rgba(17, 25, 40, 0.9), rgba(40, 50, 70, 0.85))",
            boxShadow:
              "0 15px 40px rgba(0,0,0,0.2), 0 5px 15px rgba(0,0,0,0.15)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          {/* Mobile View: All in single line with larger sizes */}
          <div className="flex items-center justify-center space-x-4 md:hidden">
            {socialLinks.github && (
              <motion.a
                href={socialLinks.github.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-white/70 hover:text-white transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-8 h-8 drop-shadow-md" />{" "}
                {/* Increased from w-6 h-6 */}
              </motion.a>
            )}
            {navItems.map((navItem, idx) => (
              <Link
                key={`link-${idx}`}
                href={navItem.link}
                className={cn(
                  "relative group flex items-center space-x-2 text-neutral-300 hover:text-white transition-all duration-300"
                )}
              >
                <motion.div
                  className="flex items-center space-x-2"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  {navItem.icon && (
                    <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                      {React.cloneElement(navItem.icon as React.ReactElement, {
                        className: "w-6 h-6", // Increased from w-5 h-5
                      })}
                    </span>
                  )}
                  <span className="text-sm font-medium tracking-tight">
                    {navItem.name}
                  </span>{" "}
                  {/* Increased from text-xs to text-sm */}
                </motion.div>
              </Link>
            ))}
            {socialLinks.linkedin && (
              <motion.a
                href={socialLinks.linkedin.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-white/70 hover:text-white transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-8 h-8 drop-shadow-md" />{" "}
                {/* Increased from w-6 h-6 */}
              </motion.a>
            )}
          </div>

          {/* Desktop View: Original layout without the vertical bar */}
          <div className="hidden md:flex items-center justify-center space-x-6">
            <div className="flex items-center space-x-4">
              {socialLinks.github && (
                <motion.a
                  href={socialLinks.github.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white/70 hover:text-white transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-6 h-6 drop-shadow-md" />
                </motion.a>
              )}

              <div className="flex items-center space-x-4">
                {navItems.map((navItem, idx) => (
                  <Link
                    key={`link-${idx}`}
                    href={navItem.link}
                    className={cn(
                      "relative group flex items-center space-x-2 text-neutral-300 hover:text-white transition-all duration-300"
                    )}
                  >
                    <motion.div
                      className="flex items-center space-x-2"
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                    >
                      {navItem.icon && (
                        <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                          {navItem.icon}
                        </span>
                      )}
                      <span className="text-sm font-medium tracking-tight">
                        {navItem.name}
                      </span>
                    </motion.div>
                  </Link>
                ))}
              </div>

              {socialLinks.linkedin && (
                <motion.a
                  href={socialLinks.linkedin.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white/70 hover:text-white transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-6 h-6 drop-shadow-md" />
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

// Example usage with default icons
export const DefaultFloatingNav = () => {
  const defaultNavItems = [
    { name: "Home", link: "/", icon: <HomeIcon className="w-5 h-5" /> },
    { name: "About", link: "/about", icon: <UserIcon className="w-5 h-5" /> },
    {
      name: "Projects",
      link: "/projects",
      icon: <FolderIcon className="w-5 h-5" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <MailIcon className="w-5 h-5" />,
    },
  ];

  return <FloatingNav navItems={defaultNavItems} />;
};
