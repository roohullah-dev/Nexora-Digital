import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion, AnimatePresence } from "framer-motion";

function Navbar({ theme, setTheme }) {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    const yOffset = -80;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    setSideBarOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      // className="flex justify-between items-center px-3 sm:px-12 lg:px-44 py-2.5 sticky top-0 z-30 backdrop-blur-xl bg-white/50 dark:bg-gray-900/70 shadow-md font-medium"
      className="flex justify-between items-center px-3 sm:px-12 lg:px-24 xl:px-40 py-2.5 sticky top-0 z-30 backdrop-blur-xl bg-white/50 dark:bg-gray-900/70 shadow-md font-medium"
    >
      {/* Logo */}
      {/* <a
        onClick={() => scrollToSection("home")}
        className="cursor-pointer sm:w-32"
      >
        <img
          src="/logo_300_70.png"
          alt="Logo"
          className="w-60 sm:w-40 lg:w-40 xl:3-40"
        />
      </a> */}
      {/* Logo */}
      <a
        onClick={() => scrollToSection("home")}
        className="cursor-pointer flex items-center"
      >
        {/* <img
          src="/logo_300_70.png"
          alt="Logo"
          className="
      w-36          
      sm:w-40       
      md:w-44       
      lg:w-48       
      h-auto
    "
        /> */}
        <img
          src="/logo_300_70.png"
          alt="Logo"
          className="w-36 sm:w-40 md:w-44 h-auto"
        />
      </a>

      {/* Desktop Links (hidden on mobile) */}
      <div className="hidden sm:flex gap-8 text-gray-700 dark:text-white sm:text-sm items-center">
        <a
          onClick={() => scrollToSection("home")}
          className="hover:border-b cursor-pointer"
        >
          Home
        </a>
        <a
          onClick={() => scrollToSection("services")}
          className="hover:border-b cursor-pointer"
        >
          Services
        </a>
        <a
          onClick={() => scrollToSection("our-work")}
          className="hover:border-b cursor-pointer"
        >
          Our Work
        </a>
        <a
          onClick={() => scrollToSection("contact-us")}
          className="hover:border-b cursor-pointer"
        >
          Contact Us
        </a>
      </div>

      {/* Right side icons */}
      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        {/* Mobile menu button (only on small screens) */}
        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt="Menu"
          onClick={() => setSideBarOpen(true)}
          className="w-8 sm:hidden cursor-pointer"
        />

        {/* Connect button (hidden on mobile) */}
        <a
          onClick={() => scrollToSection("contact-us")}
          className="button text-sm hidden sm:flex items-center gap-2 text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all"
        >
          Connect <img src={assets.arrow_icon} width={14} alt="Arrow" />
        </a>
      </div>

      {/* Mobile Dropdown Links */}
      <AnimatePresence>
        {sideBarOpen && (
          // <motion.div
          //   initial={{ opacity: 0, y: -20, scale: 0.9 }}
          //   animate={{ opacity: 1, y: 0, scale: 1 }}
          //   exit={{ opacity: 0, y: -20, scale: 0.9 }}
          //   transition={{ duration: 0.25, ease: "easeOut" }}
          //   style={{ background: "var(--gradient-primary)" }}
          //   className="fixed top-14 right-4 rounded-lg shadow-lg flex flex-col gap-4 p-4 text-white z-50 sm:hidden"
          // >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{ background: "var(--gradient-primary)" }}
            className="
    fixed top-14 left-1/2 transform -translate-x-1/2
    w-11/12 sm:w-1/2
    rounded-lg shadow-lg
    flex flex-col items-center justify-center gap-2
    p-4 text-white text-center
    z-50 sm:hidden
    cursor-pointer
    hover:scale-105 hover:shadow-xl transition-all duration-200
  "
          >
            {/* Close icon */}
            <img
              src={assets.close_icon}
              alt="Close"
              className="w-5 self-end cursor-pointer"
              onClick={() => setSideBarOpen(false)}
            />

            {/* Nav links */}
            <a
              onClick={() => scrollToSection("home")}
              className="cursor-pointer hover:underline"
            >
              Home
            </a>
            <a
              onClick={() => scrollToSection("services")}
              className="cursor-pointer hover:underline"
            >
              Services
            </a>
            <a
              onClick={() => scrollToSection("our-work")}
              className="cursor-pointer hover:underline"
            >
              Our Work
            </a>
            <a
              onClick={() => scrollToSection("contact-us")}
              className="cursor-pointer hover:underline"
            >
              Contact Us
            </a>

            {/* Connect button (mobile) */}
            <a
              onClick={() => scrollToSection("contact-us")}
              className="button btn-primary flex items-center gap-2 text-white px-4 py-2 rounded-full cursor-pointer hover:scale-105 transition-all mt-2 justify-center"
            >
              Connect <img src={assets.arrow_icon} width={14} alt="Arrow" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Navbar;
