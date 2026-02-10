import React from "react";
import Title from "./Title";
import { teamData } from "../assets/assets";
// import { motion } from "motion/react";

function Teams() {
  return (
    <div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className=" container-100 section-margin-top flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40  text-gray-800 dark:text-white"
    >
      <Title
        title="Meet The Team"
        desc="Projects that combine creativity, design, and technology to inspire."
      />

      <div className="card-flex-wrap grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {teamData.map((member, index) => (
          <div
            // initial={{ opacity: 0, y: 30 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.4, delay: index * 0.1 }}
            // viewport={{ once: true }}
            key={index}
            className="flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:sxale-103 transition-all duration-400"
          >
            <img src={member.image} className="w-12 h-12 rounded-full" alt="" />
            <div flex-1>
              <h3 className="font-bold text-sm">{member.name}</h3>
              <p className="text-xs opacity-60">{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;
