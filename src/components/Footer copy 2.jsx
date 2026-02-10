import React, { useState } from "react";
import assets from "../assets/assets";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast"; // optional for notifications
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
    console.log("Subscribed with email:", email);
    toast.success("Subscribed successfully!");
    setEmail("");
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80; // adjust for sticky navbar height
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const whatsappNumber = "1234567890"; // Replace with your WhatsApp number

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
      // link: `https://wa.me/${whatsappNumber}`,
      link: `https://wa.me/93731945209`,
      name: "WhatsApp",
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/yourprofile",
      name: "LinkedIn",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-slate-100 dark:bg-gray-900 dark:text-white pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40 sm:items-center"
    >
      {/* FOOTER TOP */}
      <div className="flex justify-between lg:items-start max-lg:flex-col gap-10">
        {/* Left Block */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-5 text-sm text-gray-700 dark:text-gray-400"
        >
          <button
            onClick={() => scrollToSection("home")}
            className="w-60 cursor-pointer focus:outline-none"
          >
            <img src="/logo_300_70.png" alt="Logo" className="w-60" />
          </button>
          <p className="max-w-md">
            From strategy to execution, we craft digital solutions that move
            your business forward.
          </p>
          <ul className="flex gap-8 flex-wrap">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-primary cursor-pointer transition-colors duration-200"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className="hover:text-primary cursor-pointer transition-colors duration-200"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("our-work")}
                className="hover:text-primary cursor-pointer transition-colors duration-200"
              >
                Our Work
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact-us")}
                className="hover:text-primary cursor-pointer transition-colors duration-200"
              >
                Contact
              </button>
            </li>
          </ul>
        </motion.div>

        {/* Right Block - Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400"
        >
          <h3 className="font-semibold">Subscribe to our newsletter</h3>
          <p className="text-sm mt-2 mb-6">
            The latest news articles and resources, sent to your inbox weekly
          </p>
          <div className="flex gap-1 text-sm max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none rounded-l-full dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500"
            />
            <button
              onClick={handleSubscribe}
              className="button text-white py-3 px-6 sm:px-10 rounded-r-full hover:scale-105 transition-transform duration-200"
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
        className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap items-center"
      >
        <p>Copyright © 2025 RoohullahDev - All Rights Reserved.</p>

        {/* Social Links */}
        <ul className="flex gap-4">
          {socialData.map((social, index) => (
            <li key={index}>
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-gray-500 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors duration-200 text-lg flex items-center justify-center"
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
    </motion.div>
  );
}

export default Footer;
