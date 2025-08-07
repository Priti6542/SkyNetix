// src/components/ClientCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ClientCard = ({ logo, name }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all"
    >
      <img src={logo} alt={name} className="h-16 w-16 object-contain mb-2" />
      <h3 className="text-sm font-medium text-gray-800">{name}</h3>
    </motion.div>
  );
};

export default ClientCard;
