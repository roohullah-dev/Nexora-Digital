import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ service, index }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-white/10"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
      ref={divRef}
    >
      {/* Gradient background blur */}
      <div
        className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-72 h-72 sm:w-80 sm:h-80 absolute z-0 transition-opacity duration-500 mix-blend-lighten ${
          visible ? "opacity-70" : "opacity-0"
        }`}
        style={{ top: position.y - 144, left: position.x - 144 }}
      />

      {/* Card content */}
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-xl z-10 relative transition-all duration-300 hover:scale-105">
        {/* Icon */}
        <div className="flex-shrink-0">
          <img
            src={service.icon}
            alt={service.title}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-contain bg-white dark:bg-gray-900 p-2"
          />
        </div>

        {/* Text */}
        <div className="flex-1 text-center sm:text-left">
          <h3 className="font-semibold text-lg sm:text-xl">{service.title}</h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
