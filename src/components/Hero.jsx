import React from "react";
import assets from "../assets/assets";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      // className="
      //   flex flex-col items-center gap-6 text-center w-full overflow-hidden
      //   text-gray-700 dark:text-white
      //   px-3 sm:px-12 lg:px-44 pt-16 sm:pt-24 lg:pt-32 pb-8 scroll-mt-20 sm:scroll-mt-32
      // "
      className="
  flex flex-col items-center gap-6 text-center w-full overflow-hidden
  text-gray-700 dark:text-white
  px-3 sm:px-12 lg:px-24 xl:px-40 pt-16 sm:pt-24 lg:pt-32 pb-8 scroll-mt-20 sm:scroll-mt-32
"
    >
      {/* Trusted div */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 border border-gray-700 p-1.5 pr-4 rounded-full"
      >
        <img src={assets.trusted_profile_Images} alt="" className="w-40" />
        <p className="text-xs font-medium">Trusted by 10K+ people</p>
      </motion.div>
       */}
      {/* Trusted div */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="
    inline-flex items-center gap-2 border border-gray-700 p-1.5 pr-4 rounded-full
    max-w-full
    w-11/12 sm:w-60 md:w-72 lg:w-auto
    justify-center
  "
      >
        <img
          src={assets.trusted_profile_Images}
          alt=""
          className="
      w-24 sm:w-32 md:w-36 lg:w-40
      h-auto
    "
        />
        <p className="text-xs sm:text-sm md:text-base font-medium text-center">
          Trusted by 10K+ people
        </p>
      </motion.div>

      {/* Hero heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl"
      >
        We Build Digital Experiences That{" "}
        <span className="bg-gradient-to-r from-[#6366f1] to-[#22d3ee] bg-clip-text text-transparent">
          Grow Your Business.
        </span>
      </motion.h1>

      {/* Hero description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-3xl pb-3"
      >
        We craft digital experiences through web design, brand storytelling, and
        results-driven marketing that grow your business.
      </motion.p>

      {/* Hero image with decorative overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative w-full max-w-full sm:max-w-7xl"
      >
        {/* Main hero image */}
        <img
          src={assets.project2}
          alt="Hero"
          className="w-full h-auto rounded-2xl object-cover"
        />

        {/* Decorative absolute image */}
        <img
          src={assets.bgImage1}
          alt="Decorative"
          className="absolute -top-24 -right-24 sm:-top-40 sm:-right-70 z-[-1] dark:hidden w-40 sm:w-64 md:w-80"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
