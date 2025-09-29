import React from 'react';
import { motion } from 'framer-motion';

const Benefits = ({ heading, subheading, benefits }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:mt-20 text-black">
      <header className="mb-8 md:mb-12 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl font-extrabold">{heading}</h1>
        <p className="font-light text-lg sm:text-2xl mt-4 max-w-4xl mx-auto md:mx-0 whitespace-pre-line">
          {subheading}
        </p>
      </header>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {benefits.map(({ title, description }, index) => (
          <motion.div
            key={index}
            className="bg-white bg-opacity-40 backdrop-blur-md p-6 rounded-xl cursor-pointer shadow-md hover:shadow-lg transition-shadow"
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
            <div className="text-xl font-bold text-blue-600 mb-2">{index + 1}.</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
            <p className="text-gray-700">{description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Benefits;
