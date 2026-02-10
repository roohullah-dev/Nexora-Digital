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
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl"
      >
        <div>
          <p className="mb-2 text-sm font-medium">Your name</p>
          <div className="flex items-center gap-2 pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="" />
            <input
              type="text"
              placeholder="Enter Your name"
              name="name"
              required
              className="w-full p-3 text-sm outline-none"
            />
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium">Your email</p>
          <div className="flex items-center gap-2 pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.email_icon} alt="" />
            <input
              type="email"
              placeholder="Enter Your email"
              name="email"
              required
              className="w-full p-3 text-sm outline-none"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            rows={8}
            placeholder="Enter your message"
            name="message"
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"
          />
        </div>

        <button
          type="submit"
          className="button w-full sm:w-max flex items-center justify-center sm:justify-start gap-2 text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          Submit
          <img src={assets.arrow_icon} alt="" className="w-4" />
        </button>
      </form>
    </motion.div>
  );
}

export default Contact;
