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
      ref={divRef}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden w-full rounded-xl border border-gray-200 dark:border-gray-700 shadow-md dark:shadow-white/10"
    >
      <div
        className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-72 h-72 absolute z-0 transition-opacity duration-500 mix-blend-lighten ${
          visible ? "opacity-70" : "opacity-0"
        }`}
        style={{ top: position.y - 144, left: position.x - 144 }}
      />

      <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white dark:bg-gray-900 relative z-10 rounded-xl transition-all hover:scale-105 duration-300">
        <img
          src={service.icon}
          alt={service.title}
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover flex-none"
        />
        <div className="flex-1 text-center sm:text-left">
          <h3 className="font-bold text-lg">{service.title}</h3>
          <p className="text-sm mt-1">{service.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
