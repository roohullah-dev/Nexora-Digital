import React from "react";

const testimonials = [
  {
    name: "Sophia Williams",
    role: "CEO, TechCorp",
    message:
      "This service transformed our business. The team is incredibly professional and detail-oriented. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "James Anderson",
    role: "Founder, StartupX",
    message:
      "Exceptional experience from start to finish. Modern solutions with a human touch. Truly premium quality.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Olivia Brown",
    role: "Marketing Head, Creatives Ltd.",
    message:
      "Their approach is innovative and professional. Our ROI skyrocketed after collaborating with them.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

function TestimonialSection() {
  return (
    <section
      // className="py-20 px-6 md:px-20 w-full bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-white"
      className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-gray-900 dark:text-white">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 dark:text-white/75 mb-12 text-lg">
          We pride ourselves on delivering exceptional experiences. Here's what
          our clients think.
        </p>

        {/* Testimonials */}
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-12 md:space-y-0 justify-center items-start">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="flex-1 flex flex-col items-center text-center px-4"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6 shadow-lg bg-gray-100 dark:bg-gray-800">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-700 dark:text-white/75 italic mb-4">
                &quot;{testimonial.message}&quot;
              </p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {testimonial.name}
              </h3>
              <span className="text-gray-500 dark:text-white/60 text-sm">
                {testimonial.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
