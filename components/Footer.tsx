"use client";
import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { motion } from "framer-motion";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState("");
  const [isLoading, setIsLoading] = useState(false); // New loading state
  const [error, setError] = useState<string | null>(null); // New error state

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null); // Clear error on change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email, // Corrected to use formData
          name: formData.name,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error(
          "Failed to send email. Server responded with an error."
        );
      }

      console.log("Form submitted successfully:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" }); // Clear form only on success
    } catch (error) {
      console.error("Failed to send email:", error);
      setError("Failed to send email. Please try again.");
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  const handleFocus = (field: string) => {
    setFocused(field);
  };

  const handleBlur = () => {
    setFocused("");
  };

  const inputClasses = (fieldName: string) => `
    w-full p-3 rounded-lg 
    bg-black-200/80 border ${
      focused === fieldName ? "border-purple" : "border-black-300/60"
    } 
    text-white-100 placeholder-white-200/70
    focus:outline-none focus:border-purple
    transition-all duration-300 ease-in-out
    hover:border-purple/50
  `;

  return (
    <footer
      className="w-full pt-20 pb-10 px-6 md:px-16 relative overflow-hidden"
      id="contact"
    >
      {/* Background Grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-purple/10 rounded-full blur-2xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-0 right-0 w-40 h-40 bg-purple/10 rounded-full blur-2xl opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container max-w-screen-lg mx-auto flex flex-col items-center relative z-10">
        <motion.h1
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-center max-w-[85vw] md:max-w-[60vw] lg:max-w-[45vw] leading-tight md:leading-snug"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Looking for a developer who{" "}
          <span className="text-purple">delivers</span>? Let’s make it happen!
        </motion.h1>

        {/* Contact Form */}
        <motion.div
          className="w-full max-w-md mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLocationArrow className="text-purple text-2xl" />
              </div>
              <p className="text-center text-white font-semibold text-xl mb-2">
                Message Sent!
              </p>
              <p className="text-white-200">
                Thank you! I’ll get back to you soon.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus("name")}
                  onBlur={handleBlur}
                  placeholder="Your Name"
                  className={inputClasses("name")}
                  required
                  disabled={isLoading}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus("email")}
                  onBlur={handleBlur}
                  placeholder="Your Email"
                  className={inputClasses("email")}
                  required
                  disabled={isLoading}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus("message")}
                  onBlur={handleBlur}
                  placeholder="Your Message"
                  className={`${inputClasses(
                    "message"
                  )} min-h-[120px] resize-none`}
                  required
                  disabled={isLoading}
                />
              </motion.div>

              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-sm text-center"
                >
                  {error}
                </motion.p>
              )}

              <motion.div
                className="mt-2 flex justify-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <MagicButton
                  title={isLoading ? "Sending..." : "Say Hello"}
                  icon={<FaLocationArrow />}
                  position="right"
                  type="submit"
                  otherClasses="w-full max-w-[180px] bg-gradient-to-r from-purple to-purple/80 hover:from-purple/90 hover:to-purple text-white font-semibold"
                  disabled={isLoading}
                />
              </motion.div>
            </form>
          )}
        </motion.div>
      </div>

      <motion.div
        className="container max-w-screen-lg mx-auto flex flex-col items-center mt-12 md:mt-16 gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <p className="md:text-base text-sm md:font-normal font-light text-center">
          @VamsiTejChowdary
        </p>
        <div className="flex items-center gap-4 md:gap-6">
          {socialMedia.map((info, index) => (
            <motion.a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:border-purple/50 hover:bg-black-200/80 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <img
                src={info.img}
                alt={`Social ${info.id}`}
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </motion.a>
          ))}
        </div>
        <p className="md:text-base text-sm md:font-normal font-light text-center mt-2">
          Copyright © 2025 Full Stack Dev
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
