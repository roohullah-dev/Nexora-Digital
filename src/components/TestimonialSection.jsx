import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";
import Title from "./Title";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Product Manager",
    feedback:
      "Working with [Your Name] was an absolute pleasure. The web application was delivered on time, fully responsive, and exceeded our expectations.",
    rating: 5,
    avatar: "https://i.pravatar.cc/200?img=32",
  },
  {
    name: "Michael Smith",
    role: "CEO, TechCorp",
    feedback:
      "Exceptional front-end development skills! Attention to detail, clean code, and great communication throughout the project.",
    rating: 5,
    avatar: "https://i.pravatar.cc/200?img=12",
  },
  {
    name: "Sophia Lee",
    role: "UX Designer",
    feedback:
      "The UI/UX design was seamless and visually stunning. Truly elevated the user experience of our platform.",
    rating: 5,
    avatar: "https://i.pravatar.cc/200?img=45",
  },
  {
    name: "David Kim",
    role: "Founder, StartupX",
    feedback:
      "Professional and reliable! The components were reusable and visually stunning. Highly recommended.",
    rating: 5,
    avatar: "https://i.pravatar.cc/200?img=18",
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  // Auto-slide every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      // className="py-24 bg-black/70 relative z-10"
      className="section-margin-top relative z-10 px-3 sm:px-12 lg:px-44 py-2.5"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <Title
          title="What Our Clients Say"
          desc="Our clients trust us to deliver exceptional digital experiences. Here’s what they have to say about working with our team."
        />

        {/* Testimonial Body */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <motion.p
                // className="dark:text-white text-base md:text-lg leading-relaxed"
                className="max-w-lg text-center text-gray-500 dark:text-white/75 mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6 }}
              >
                "{testimonials[current].feedback}"
              </motion.p>

              <div className="flex items-center justify-center gap-4 mt-6">
                {/* <img
                  src={testimonials[current].avatar}
                  alt={testimonials[current].name}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-green-400"
                /> */}
                <img
                  src={testimonials[current].avatar}
                  alt={testimonials[current].name}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-transparent"
                  style={{
                    borderImage:
                      "linear-gradient(45deg, #6366f1, #22d3ee, #a855f7, #6366f1) 1",
                    borderImageSlice: 1,
                  }}
                />

                <div className="text-left">
                  <h3 className="dark:text-white font-semibold text-sm md:text-base">
                    {testimonials[current].name}
                  </h3>
                  <p className=" dark:text-white text-xs md:text-sm">
                    {testimonials[current].role}
                  </p>

                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: testimonials[current].rating }).map(
                      (_, i) => (
                        <FaStar
                          key={i}
                          className="text-yellow-400 text-xs md:text-sm"
                        />
                      ),
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 md:mt-8 gap-3">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              // className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all cursor-pointer ${
              //   idx === current ? "bg-green-400 scale-125" : "bg-gray-600"
              // }`}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 cursor-pointer ${
                idx === current
                  ? "gradient-dot scale-125 shadow-md"
                  : "bg-gray-600"
              }`}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
