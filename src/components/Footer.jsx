import React, { useState } from "react";
import assets from "../assets/assets";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer({ theme }) {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      toast.error("Please enter your email!");
      return;
    }
    toast.success("Subscribed successfully!");
    setEmail("");
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const socialData = [
    {
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/yourpage",
      name: "Facebook",
    },
    {
      icon: <FaTwitter />,
      link: "https://twitter.com/yourprofile",
      name: "Twitter",
    },
    {
      icon: <FaWhatsapp />,
      link: `https://wa.me/93731945209`,
      name: "WhatsApp",
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/yourprofile",
      name: "LinkedIn",
    },
  ];

  const quickLinks = ["home", "services", "our-work", "contact-us"];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-slate-100 dark:bg-gray-900 dark:text-white pt-10 pb-6 px-4 sm:px-12 lg:px-24 xl:px-40"
    >
      {/* FOOTER TOP */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 w-full">
        {/* Logo & Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center lg:items-start space-y-5 w-full lg:w-1/2"
        >
          <button
            onClick={() => scrollToSection("home")}
            className="cursor-pointer focus:outline-none"
          >
            <img src="/logo_300_70.png" alt="Logo" className="w-48 sm:w-60" />
          </button>
          <p className="max-w-md text-sm sm:text-base text-center lg:text-left">
            Building digital experiences that drive results, inspire trust, and
            elevate your brand.
          </p>

          {/* Quick Links */}
          <ul className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
            {quickLinks.map((sec, idx) => (
              <li key={idx}>
                <button
                  onClick={() => scrollToSection(sec)}
                  className="transition-all duration-300 text-sm sm:text-base
                             hover:bg-gradient-to-r hover:from-[#6366f1] hover:via-[#22d3ee]
                             hover:via-[#a855f7] hover:to-[#6366f1]
                             hover:text-transparent hover:bg-clip-text"
                >
                  {sec
                    .replace("-", " ")
                    .replace(/\b\w/g, (c) => c.toUpperCase())}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col items-center lg:items-start w-full lg:w-1/2"
        >
          <h3 className="font-semibold text-lg sm:text-xl text-center lg:text-left">
            Subscribe to our newsletter
          </h3>
          <p className="text-sm mt-2 mb-4 text-center lg:text-left">
            The latest news and resources, sent to your inbox weekly
          </p>
          <div className="flex flex-col sm:flex-row w-full max-w-md gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none rounded-full sm:rounded-l-full dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500"
            />
            <button
              onClick={handleSubscribe}
              className="button text-center text-white py-3 px-6 sm:px-10 rounded-full sm:rounded-r-full hover:scale-105 transition-transform duration-200"
            >
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      <hr className="border-gray-300 dark:border-gray-600 my-6" />

      {/* FOOTER BOTTOM */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400"
      >
        <p className="text-center sm:text-left">
          Copyright © 2026 RoohullahDev - All Rights Reserved.
        </p>

        {/* Social Links */}
        <ul className="flex gap-4 justify-center">
          {socialData.map((social, index) => (
            <li key={index}>
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-gray-500 dark:text-gray-300 transition-all duration-300 text-lg flex items-center justify-center
                           hover:bg-gradient-to-r hover:from-[#6366f1] hover:via-[#22d3ee]
                           hover:via-[#a855f7] hover:to-[#6366f1]
                           hover:text-transparent hover:bg-clip-text"
              >
                <motion.span
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {social.icon}
                </motion.span>
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
