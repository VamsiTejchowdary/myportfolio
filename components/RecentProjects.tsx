"use client";

import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20" id="Projects">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="heading"
      >
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center p-4 sm:p-6 md:p-8 gap-8 sm:gap-12 md:gap-16 mt-10">
        {projects.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 120,
            }}
            viewport={{ once: true }}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center w-[85vw] sm:w-[70vw] md:w-96 hover:scale-[1.02] transition-transform duration-300 ease-in-out"
          >
            <PinContainer
              title={item.subtitle}
              href="https://twitter.com/mannupaaji"
            >
              <div className="relative flex items-center justify-center w-full sm:w-96 h-[22vh] mb-10 overflow-hidden">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl shadow-2xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  {/* Media Container with Hover Effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    {item.video ? (
                      <video
                        src={item.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    ) : (
                      <img
                        src={item.img}
                        alt="cover"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    )}
                  </div>
                </div>
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 hover:text-purple transition-colors">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 hover:text-gray-300 transition-colors"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 300,
                      }}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </motion.div>
                  ))}
                </div>

                <motion.a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex justify-center items-center cursor-pointer group"
                >
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple group-hover:text-purple-400 transition-colors">
                    Discover
                  </p>
                  <FaLocationArrow
                    className="ms-3 transition-transform group-hover:translate-x-1"
                    color="#CBACF9"
                  />
                </motion.a>
              </div>
            </PinContainer>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
