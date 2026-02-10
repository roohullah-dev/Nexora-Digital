import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import { motion } from "framer-motion";

const projects = [
  {
    img: assets.project1,
    title: "E-Commerce Website",
    category: "Web Development",
    desc: "A fully responsive online store with custom checkout, admin dashboard, and modern UX.",
  },
  {
    img: assets.project2,
    title: "Mobile App UI",
    category: "UI/UX Design",
    desc: "Sleek, intuitive interface designed for iOS and Android platforms.",
  },
  {
    img: assets.project3,
    title: "Brand Identity",
    category: "Brand Strategy",
    desc: "Complete branding package including logo, typography, and brand guidelines.",
  },
  {
    img: assets.project4,
    title: "SaaS Dashboard",
    category: "Web App",
    desc: "Dynamic dashboard with analytics, charts, and real-time data visualization.",
  },
];

function Portfolio() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="our-work"
      className="portfolio section-margin-top flex flex-col items-center gap-10 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white overflow-hidden"
    >
      <Title
        title="Our Work"
        desc="Projects that combine creativity, design, and technology to inspire."
      />

      <div className="flex flex-col gap-16 w-full">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-10 w-full ${
                !isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="relative w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105 hover:rotate-1">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-auto sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover lg:object-top rounded-3xl"
                />

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 sm:p-8">
                  <p className="text-sm uppercase text-white font-semibold mb-1 tracking-wide">
                    {project.category}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mt-1 sm:mt-2 text-sm sm:text-base">
                    {project.desc}
                  </p>
                </div>
              </div>

              {/* Text aside for larger screens */}
              <div className="lg:w-1/2 w-full hidden lg:flex flex-col justify-center gap-2">
                <p className="uppercase text-purple-400 font-semibold mb-2 tracking-wide">
                  {project.category}
                </p>
                <h3 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent from-[#6366f1] via-[#22d3ee] to-[#a855f7] bg-gradient-to-r">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-white/70 text-lg sm:text-xl">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}

export default Portfolio;
