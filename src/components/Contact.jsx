import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "77aef593-c1d0-430d-ae34-d076d40d886e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        toast.success("Message sent successfully!");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="contact-us"
      className="section-margin-top flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-800 dark:text-white"
    >
      <Title
        title="Reach out to us"
        desc="Ready to grow your brand? Let's connect and build something exceptional together."
      />

      <form
        onSubmit={onSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-3xl"
      >
        {/* Name */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium">Your Name</label>
          <div className="flex items-center gap-2 px-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900">
            <img src={assets.person_icon} alt="Name Icon" className="w-5 h-5" />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full p-3 text-sm outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium">Your Email</label>
          <div className="flex items-center gap-2 px-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900">
            <img src={assets.email_icon} alt="Email Icon" className="w-5 h-5" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full p-3 text-sm outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Message */}
        <div className="sm:col-span-2 flex flex-col">
          <label className="mb-2 text-sm font-medium">Message</label>
          <textarea
            name="message"
            rows={6}
            placeholder="Enter your message"
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900"
          />
        </div>

        {/* Submit Button */}
        <div className="sm:col-span-2 flex justify-center sm:justify-start">
          <button
            type="submit"
            className="button flex items-center gap-2 text-white text-sm px-8 sm:px-10 py-3 rounded-full hover:scale-105 transition-transform"
          >
            Submit
            <img src={assets.arrow_icon} alt="Arrow Icon" className="w-4 h-4" />
          </button>
        </div>
      </form>
    </motion.div>
  );
}

export default Contact;
