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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      icon: assets.ads_icon,
    },
    {
      id: 2,
      title: "Branding",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      icon: assets.marketing_icon,
    },
    {
      id: 3,
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      icon: assets.content_icon,
    },

    {
      id: 4,
      title: "Mobile App Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      icon: assets.social_icon,
    },
  ];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ staggerChildren: 0.2 }}
      id="help"
      className="padding_left_right section-margin-top padding-section-card relative flex flex-col items-center gap-7 gpx-4 sm:px-  lg:px-24 xl:px-40 
      text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />
      <Title
        title="How can we help?"
        desc="From strategy to execution, we craft digital solutions that mvoe your business forward."
      />
      <div className="flex flex-col  md:grid grid-cols-2 card-flex-wrap">
        {servicesData.map((service, index) => {
          return <ServiceCard key={index} service={service} index={index} />;
        })}
      </div>

      {/*  */}
    </motion.div>
  );
}

export default Help;
