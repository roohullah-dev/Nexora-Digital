import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "framer-motion";

function Navbar({ theme, setTheme }) {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    const yOffset = -80; // offset for sticky navbar height
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    setSideBarOpen(false); // close sidebar on mobile
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-between items-center px-3 sm:px-12 lg:px-44 py-2.5 sticky top-0 z-30 backdrop-blur-xl bg-white/50 dark:bg-gray-900/70 shadow-md font-medium"
    >
      {/* Logo */}
      <a
        onClick={() => scrollToSection("home")}
        className="cursor-pointer sm:w-32"
      >
        <img src="/logo_300_70.png" alt="Logo" className="w-60" />
      </a>

      {/* Links */}
      <div
        style={{
          background:
            window.innerWidth <= 640 ? "var(--gradient-primary)" : undefined,
        }}
        className={`text-gray-700 dark:text-white sm:text-sm ${
          !sideBarOpen
            ? "max-sm:w-0 overflow-hidden"
            : "max-sm:w-60 max-sm:pl-10"
        } max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:text-white max-sm:pt-20 flex gap-8 sm:items-center  transition-all`}
      >
        {/* Close icon for mobile */}
        <img
          src={assets.close_icon}
          alt="Close"
          className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer"
          onClick={() => setSideBarOpen(false)}
        />

        {/* Nav links */}
        <a
          onClick={() => scrollToSection("home")}
          className="sm:hover:border-b cursor-pointer "
        >
          Home
        </a>
        <a
          onClick={() => scrollToSection("services")}
          className="sm:hover:border-b cursor-pointer"
        >
          Services
        </a>
        <a
          onClick={() => scrollToSection("our-work")}
          className="sm:hover:border-b cursor-pointer"
        >
          Our Work
        </a>
        <a
          onClick={() => scrollToSection("contact-us")}
          className="sm:hover:border-b cursor-pointer"
        >
          Contact Us
        </a>
      </div>

      {/* Right side icons */}
      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        {/* Mobile menu button */}
        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt="Menu"
          onClick={() => setSideBarOpen(true)}
          className="w-8 sm:hidden cursor-pointer"
        />

        {/* Connect button */}
        <a
          onClick={() => scrollToSection("contact-us")}
          className="button text-sm max-sm:hidden flex items-center gap-2 text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all"
        >
          Connect <img src={assets.arrow_icon} width={14} alt="Arrow" />
        </a>
      </div>
    </motion.div>
  );
}

export default Navbar;
