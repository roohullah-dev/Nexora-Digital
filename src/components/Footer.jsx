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
      className="bg-slate-100 dark:bg-gray-900 dark:text-white  pt-10 mt-10 pb-6 px-4 sm:px-12 lg:px-24 xl:px-40"
    >
      {/* Footer Top */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Left Block */}
        <motion.div className="flex flex-col items-center lg:items-start space-y-5 w-full lg:w-1/2 text-center lg:text-left">
          <button
            onClick={() => scrollToSection("home")}
            className="cursor-pointer focus:outline-none"
          >
            <img src="/logo_300_70.png" alt="Logo" className="w-48 sm:w-60" />
          </button>
          <p className="max-w-md text-sm sm:text-base">
            Building digital experiences that drive results, inspire trust, and
            elevate your brand.
          </p>

          <ul className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
            {["home", "services", "our-work", "contact-us"].map((sec, idx) => (
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

        {/* Right Block */}
        {/* <motion.div className="flex flex-col items-center lg:items-end w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="font-semibold text-lg sm:text-xl">
            Subscribe to our newsletter
          </h3>
          <p className="text-sm mt-2 mb-4">
            The latest news and resources, sent to your inbox weekly
          </p>
          <div className="flex flex-col sm:flex-row w-full max-w-md gap-2 justify-center lg:justify-end">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none rounded-full sm:rounded-l-full bg-gray-800 border border-gray-700 text-white"
            />
            <button
              onClick={handleSubscribe}
              className="button text-center items-center text-white py-3 px-6 sm:px-10 rounded-full sm:rounded-r-full hover:scale-105 transition-transform duration-200"
            >
              Subscribe
            </button>
          </div>
        </motion.div> */}
        <motion.div className="flex flex-col items-center lg:items-end w-full lg:w-1/2 text-center lg:text-left p-4">
          <h3 className="font-semibold text-lg sm:text-xl">
            Subscribe to our newsletter
          </h3>
          <p className="text-sm mt-2 mb-4 text-gray-400">
            The latest news and resources, sent to your inbox weekly
          </p>

          <div className="flex flex-col sm:flex-row w-full max-w-md gap-2 justify-center lg:justify-end items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full sm:flex-1 p-3 text-sm outline-none rounded-full sm:rounded-l-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
            />
            {/* <button
              onClick={handleSubscribe}
              className="flex justify-center items-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 py-3 px-6 sm:px-10 rounded-full sm:rounded-r-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              Subscribe
            </button> */}

            <button
              onClick={handleSubscribe}
              className="button text-white py-3 px-6 sm:px-10 rounded-r-full hover:scale-105 transition-transform duration-200 flex justify-center items-center"
            >
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      <hr className="border-gray-300 my-6" />

      {/* Footer Bottom */}
      <motion.div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 text-sm text-gray-400">
        <p className="text-center sm:text-left">
          Copyright © 2026 RoohullahDev - All Rights Reserved.
        </p>

        <ul className="flex gap-4 justify-center">
          {socialData.map((social, index) => (
            <li key={index}>
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-gray-400 transition-all duration-300 text-lg flex items-center justify-center"
              >
                <motion.span
                  whileHover={{ scale: 1.2 }}
                  className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#6366f1] hover:via-[#22d3ee] hover:to-[#a855f7]"
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
