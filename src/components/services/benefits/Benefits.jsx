import React from "react";
import { motion } from "framer-motion";

const Benefits = ({ heading, subheading, benefits }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-10 md:mt-20 font-poppins bg-[#e6edf7] py-[80px]">
      {/* Section Header */}
      <header className="mb-12 text-center md:text-left max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 relative inline-block">
          {heading}
          <span className="absolute bottom-0 left-1/2 w-12 h-1 bg-[#ff4500] rounded-sm transform -translate-x-1/2" />
          <span className="absolute bottom-0 left-[calc(50%+30px)] w-2.5 h-1 bg-[#504f93] rounded-sm" />
        </h1>
        <p className="font-light text-lg sm:text-2xl max-w-4xl mx-auto whitespace-pre-line text-[#282828]">
          {subheading}
        </p>
      </header>

      {/* Benefit Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto border-tr-100 "
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.25 } },
        }}
      >
        {benefits.map(({ title, description }, index) => (
          <motion.div
            key={index}
            className="relative bg-white p-8 rounded-tr-[60px] rounded-bl-[60px] cursor-pointer shadow-md flex flex-col space-y-4 text-left overflow-hidden group"
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.5, type: "spring", stiffness: 120, damping: 20 }}
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            {/* Top-Right Half-Circle that Expands */}
            <motion.div
              className="absolute top-0 right-0 z-0"
              variants={{
                rest: {
                  width: 500,
                  height: 10,
                  background: "linear-gradient(135deg, #710b5dff, #210020ff)",
                  borderTopRightRadius: "40px",
                  // borderBottomRightRadius: "200px",
                  // borderBottomLeftRadius: "200px",
                  // borderTopLeftRadius: "200px",
                  opacity: 0.7,
                  transition: { duration: 0.4, ease: "easeInOut" },
                },
                hover: {
                  width: "100%",
                  height: "100%",
                  borderRadius: "18px",
                  opacity: 1,
                  transition: { duration: 0.6, ease: "easeInOut" },
                },
              }}
              style={{
                pointerEvents: "none",
                boxShadow: "4px 4px 4px 4px #d2d3d7ff", // subtle shadow like in the image
              }}
            />

            {/* Card Content */}
            <div className="relative z-10 flex flex-col space-y-3 transition-colors duration-500 group-hover:text-white">
              <h3 className="text-2xl font-bold mt-10">{title}</h3>
              <p className="text-gray-600 group-hover:text-gray-100 text-base transition-colors duration-500">
                {description}
              </p>
              {/* <a
                href="#"
                className="text-[#ff4500] font-semibold underline w-max group-hover:text-white transition-colors duration-500"
              >
                Learn More
              </a> */}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Benefits;
