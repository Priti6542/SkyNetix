import React, { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import FeatureData from "./FeatureData";
import {
  FaDesktop,
  FaChartLine,
  FaMobileAlt,
} from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";

const expandVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    marginTop: 0,
    transition: { duration: 0.25, ease: "easeInOut" }
  },
  visible: {
    opacity: 1,
    height: "auto",
    marginTop: 16,
    transition: { duration: 0.35, ease: "easeOut" }
  },
};

export default function HomeFeature() {
  const cardItems = FeatureData.slice(0, 3);

  const cardIcons = [
    <FaDesktop size={36} className="text-blue-500 mb-2" />,
    <FaChartLine size={36} className="text-blue-500 mb-2" />,
    <FaMobileAlt size={36} className="text-blue-500 mb-2" />,
  ];

  const [openIdx, setOpenIdx] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-center mx-auto mt-8 text-gray-900">
        Our Features
      </h1>
      <p className="text-base text-gray-600 text-center mt-2 max-w-xl mx-auto">
        Here are some typical services of SkyNetics Software Solutions Pvt. Ltd.
      </p>

      <div className="flex flex-col md:flex-row items-stretch w-full max-w-7xl mx-auto mt-10 bg-white rounded-xl overflow-hidden shadow mb-20">
        {cardItems.map((item, idx) => {
          const isOpen = idx === openIdx;
          return (
            <motion.div
              key={item.title || idx}
              className="flex flex-col relative p-8 min-h-[210px] justify-between
          border-b md:border-b-0 md:border-r last:border-none border-gray-200 bg-white cursor-pointer rounded-lg shadow-md"
              layout
              style={{
                // On mobile (column) make each card full width, else use the flexBasis logic for row
                flexBasis: isOpen ? (window.innerWidth >= 768 ? "60%" : "100%") : (window.innerWidth >= 768 ? "20%" : "100%"),
                transition: "flex-basis 0.5s ease",
                width: window.innerWidth < 768 ? "100%" : "auto",
              }}
            >
              {/* Card header */}
              <div>
                {cardIcons[idx]}
                <h3 className="mt-1 text-lg font-bold text-gray-900 w-60 md:w-auto">{item.title}</h3>
                {isOpen && (
                  <motion.p
                    key="desc"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-gray-700 text-[15px] leading-relaxed mt-4"
                  >
                    {item.description}
                  </motion.p>
                )}
              </div>

              {/* Toggle Button */}
              <button
                aria-label={isOpen ? "Collapse details" : "Expand details"}
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="absolute right-7 bottom-6 flex items-center justify-center w-9 h-9 rounded-full bg-white border border-gray-300 shadow-sm hover:bg-gray-100 focus:outline-none"
              >
                {isOpen ? <FiX size={22} className="text-gray-700" /> : <FiPlus size={22} className="text-gray-700" />}
              </button>
            </motion.div>
          );
        })}
      </div>


    </>
  );
}
