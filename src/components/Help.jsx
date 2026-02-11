import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

function Help() {
  const servicesData = [
    {
      id: 1,
      title: "Advertising",
      description:
        "I create targeted campaigns that reach the right audience and boost engagement.",
      icon: assets.ads_icon,
    },
    {
      id: 2,
      title: "Branding",
      description:
        "I craft memorable brand identities that reflect your vision and build trust.",
      icon: assets.marketing_icon,
    },
    {
      id: 3,
      title: "Web Development",
      description:
        "I build responsive websites with fast loading, seamless UX, and scalable solutions.",
      icon: assets.content_icon,
    },
    {
      id: 4,
      title: "Mobile App Development",
      description:
        "I design intuitive mobile apps for iOS and Android with smooth performance.",
      icon: assets.mobile,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="services"
      className="section-margin-top relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-28 -left-16 sm:-top-40 sm:-left-24 -z-1 dark:hidden"
      />
      <Title
        title="How can we help?"
        desc="I help businesses grow by creating impactful digital solutions. From strategy and design to marketing and technology, I deliver results-driven experiences that engage audiences and strengthen your brand."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

export default Help;
