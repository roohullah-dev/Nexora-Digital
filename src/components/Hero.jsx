import React from "react";
import assets from "../assets/assets";

import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="section-margin-top flex flex-col items-center gap-6 text-center w-full overflow-hidden text-gray-700 dark:text-white  
      px-3 sm:px-12 lg:px-44 py-2.5 
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, y: 0.7 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 border border-gray-700 p-1.5 pr-4 rounded-full"
      >
        <img src={assets.trusted_profile_Images} alt="" className="w-40" />
        <p className="text-xs font-medium">Trusted by 10K+ people</p>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, y: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl"
      >
        We Build Digital Experiences That{" "}
        <span className="bg-gradient-to-r from-[#6366f1] to-[#22d3ee] bg-clip-text text-transparent">
          Grow Your Business.
        </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, y: 1 }}
        viewport={{ once: true }}
        className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-3xl pb-3"
      >
        We craft digital experiences through web design, brand storytelling, and
        results-driven marketing that grow your business.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative"
      >
        <img
          src={assets.project2}
          alt=""
          className="w-full max-w-7xl rounded-2xl"
        />
        <img
          src={assets.bgImage1}
          alt=""
          className="absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
