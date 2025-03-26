"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { socialMedia } from "@/data";
import {
  Menu,
  X,
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
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const socialLinks = {
    github: socialMedia.find((social) => social.id === 1),
    linkedin: socialMedia.find((social) => social.id === 2),
  };

  const navVariants = {
    initial: { opacity: 0, y: -100 },
    animate: {
      y: visible ? 0 : -100,
      opacity: visible ? 1 : 0,
    },
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  const mobileMenuVariants = {
    initial: {
      opacity: 0,
      y: -50,
      height: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      height: "auto",
    },
    exit: {
      opacity: 0,
      y: -50,
      height: 0,
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={navVariants.initial}
        animate={navVariants.animate}
        transition={navVariants.transition}
        className={cn(
          "fixed z-[5000] top-10 inset-x-0 mx-auto max-w-fit w-[95%] md:w-auto",
          className
        )}
      >
        {/* Desktop Navigation */}
        <div
          className="hidden md:flex items-center justify-center space-x-6 px-6 py-4 rounded-2xl shadow-2xl"
          style={{
            backdropFilter: "blur(24px) saturate(220%)",
            background:
              "linear-gradient(135deg, rgba(17, 25, 40, 0.9), rgba(40, 50, 70, 0.85))",
            boxShadow:
              "0 15px 40px rgba(0,0,0,0.2), 0 5px 15px rgba(0,0,0,0.15)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          {/* Desktop Social and Nav Content */}
          <div className="flex items-center space-x-4">
            {/* GitHub */}
            {socialLinks.github && (
              <motion.a
                href={socialLinks.github.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
                className="text-white/70 hover:text-white transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-6 h-6 drop-shadow-md" />
              </motion.a>
            )}

            {/* Navigation Items */}
            <div className="flex items-center space-x-4 border-l border-white/10 pl-4">
              {navItems.map((navItem, idx) => (
                <Link
                  key={`link-${idx}`}
                  href={navItem.link}
                  onMouseEnter={() => setActiveLink(navItem.link)}
                  onMouseLeave={() => setActiveLink(null)}
                  className={cn(
                    "relative group flex items-center space-x-2 text-neutral-300 hover:text-white transition-all duration-300",
                    activeLink === navItem.link ? "text-white" : ""
                  )}
                >
                  <motion.div
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0.6, scale: 0.95 }}
                    whileHover={{
                      opacity: 1,
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

                  <motion.span
                    className="absolute bottom-[-3px] left-0 w-full h-[2px] bg-white/80"
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: activeLink === navItem.link ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              ))}
            </div>

            {/* LinkedIn */}
            {socialLinks.linkedin && (
              <motion.a
                href={socialLinks.linkedin.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
                className="text-white/70 hover:text-white transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-6 h-6 drop-shadow-md" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          {/* Mobile Hamburger Button */}
          <motion.div
            className="flex justify-end"
            initial={navVariants.initial}
            animate={navVariants.animate}
            transition={navVariants.transition}
          >
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white/10 backdrop-blur-lg p-2 rounded-full"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </motion.button>
          </motion.div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={mobileMenuVariants}
                className="mt-4 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="flex flex-col items-center space-y-4 p-4">
                  {navItems.map((navItem, idx) => (
                    <Link
                      key={`mobile-link-${idx}`}
                      href={navItem.link}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center space-x-2 text-white hover:bg-white/20 w-full p-2 rounded-lg transition-colors"
                    >
                      {navItem.icon}
                      <span>{navItem.name}</span>
                    </Link>
                  ))}

                  {/* Mobile Social Links */}
                  <div className="flex space-x-4 pt-4 border-t border-white/10">
                    {socialLinks.github && (
                      <a
                        href={socialLinks.github.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white"
                        aria-label="GitHub Profile"
                      >
                        <GithubIcon className="w-6 h-6" />
                      </a>
                    )}
                    {socialLinks.linkedin && (
                      <a
                        href={socialLinks.linkedin.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white"
                        aria-label="LinkedIn Profile"
                      >
                        <LinkedinIcon className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

// Example usage with default icons
export const DefaultFloatingNav = () => {
  const defaultNavItems = [
    { name: "Home", link: "/", icon: <HomeIcon className="w-4 h-4" /> },
    { name: "About", link: "/about", icon: <UserIcon className="w-4 h-4" /> },
    {
      name: "Projects",
      link: "/projects",
      icon: <FolderIcon className="w-4 h-4" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <MailIcon className="w-4 h-4" />,
    },
  ];

  return <FloatingNav navItems={defaultNavItems} />;
};
