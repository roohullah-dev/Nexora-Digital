import React, { useRef, useEffect, useState } from "react";
import { company_logos } from "../assets/assets";
import { motion } from "framer-motion";

function TrustedBy() {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Track mouse movement for hover effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const bounds = containerRef.current?.getBoundingClientRect();
      if (bounds) {
        setMousePos({
          x: e.clientX - bounds.left,
          y: e.clientY - bounds.top,
        });
      }
    };

    const container = containerRef.current;
    container?.addEventListener("mousemove", handleMouseMove);

    return () => container?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="section-margin-top flex flex-col items-center gap-8 px-3 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white/80 overflow-hidden"
    >
      {/* Section Title */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="font-semibold text-center text-lg sm:text-xl"
      >
        Trusted by Leading Companies
      </motion.h3>

      {/* Marquee container */}
      <div className="w-full overflow-hidden relative">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex items-center gap-8 sm:gap-12"
        >
          {/* Duplicate logos for seamless scrolling */}
          {[...company_logos, ...company_logos].map((logo, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center flex-none"
              style={{
                transform: `translateX(${(mousePos.x - window.innerWidth / 2) * 0.002}px)
                            translateY(${(mousePos.y - 100) * 0.002}px)`,
                transition: "transform 0.1s ease-out",
              }}
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={logo}
                alt="company logo"
                className="max-h-6 sm:max-h-10 object-contain dark:drop-shadow-xl transition-transform duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default TrustedBy;
