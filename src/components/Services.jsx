// Services.jsx
import React from "react";
import assets from "../assets/assets";

// You can replace these with your actual icons/images
const services = [
  {
    icon: assets.service1,
    title: "Web Development",
    desc: "Building responsive and high-performance websites that drive results.",
  },
  {
    icon: assets.service2,
    title: "UI/UX Design",
    desc: "Creating engaging interfaces and seamless user experiences.",
  },
  {
    icon: assets.service3,
    title: "Mobile Apps",
    desc: "Designing and developing apps for iOS and Android platforms.",
  },
  {
    icon: assets.service4,
    title: "Brand Strategy",
    desc: "Helping businesses define their identity and grow their audience.",
  },
];

function Services() {
  return (
    <section
      id="services"
      // className="py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white bg-gray-50 dark:bg-gray-900"
      className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">What We Do</h2>
        <p className="text-gray-500 dark:text-white/75">
          We provide a full suite of digital solutions to grow your business and
          make an impact.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-gray-800">
            {/* Circle container */}
            <div className="w-16 h-16 mb-4 rounded-full overflow-hidden flex justify-center items-center bg-gray-100 dark:bg-gray-700">
              <img
                src={service.icon}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl font-medium mb-2">{service.title}</h3>
            <p className="text-gray-500 dark:text-white/75">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
