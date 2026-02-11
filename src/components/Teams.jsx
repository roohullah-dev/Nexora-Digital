import React from "react";
import Title from "./Title";
import { teamData } from "../assets/assets";
import { motion } from "framer-motion";

function Teams() {
  return (
    <div className="section-margin-top flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-800 dark:text-white">
      <Title
        title="Meet The Team"
        desc="Our talented team combines creativity, expertise, and passion to deliver exceptional digital solutions. Each member brings unique skills to help your business succeed."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 w-full">
        {teamData.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl dark:shadow-white/5 hover:scale-105 transition-transform duration-300 w-full"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full object-cover flex-none"
            />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-bold text-sm md:text-base">{member.name}</h3>
              <p className="text-xs md:text-sm opacity-60">{member.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Teams;
