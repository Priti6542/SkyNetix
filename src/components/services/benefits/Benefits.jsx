import React from 'react';
import { motion } from 'framer-motion';

const Benefits = ({ heading, subheading, benefits }) => {
  return (
    <div className="text-black ml-50 mt-20">
      <div className="text-2xl">
        <h1>{heading}</h1>
      </div>
      <p className="font-stretch-50% text-4xl mt-10">{subheading}</p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mr-16"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {benefits.map((title, index) => (
          <motion.div
            key={index}
            className="bg-white/40 backdrop-blur-md p-6 rounded-xl cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            whileHover={{
              scale: 1.06,
              rotate: -1.5,
              boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.15)',
              backgroundColor: 'rgba(255,255,255,0.6)',
              transition: { type: 'spring', stiffness: 200, damping: 12 },
            }}
          >
            <div className="text-lg font-bold text-blue-600 mb-1">{index + 1}.</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Quisque ut leo vitae justo blandit facilisis.
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Benefits;