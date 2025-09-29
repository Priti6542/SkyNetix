import React from "react";
import { motion } from "framer-motion";

export default function IndustryCard({ industry, expanded, onHover, onLeave }) {
  return (
    <motion.div
      className="relative flex flex-col border rounded-xl bg-white overflow-hidden transition-shadow cursor-pointer mt-10"
      style={{ height: 340 }}
      animate={expanded ? { zIndex: 20, boxShadow: "0 8px 32px rgba(0,0,0,0.25)" } : { zIndex: 10 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <motion.img
        src={industry.image}
        alt={industry.title}
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ height: "112px", top: "auto", bottom: "0", opacity: 0.85 }}
        animate={
          expanded
            ? { height: "100%", top: 0, bottom: 0, opacity: 1 }
            : { height: "112px", top: "auto", bottom: 0, opacity: 0.85 }
        }
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        style={{ zIndex: 1 }}
      />
      <motion.div
        className="relative z-10 flex flex-col p-6 h-full"
        initial={false}
        animate={expanded ? { color: "#fff" } : { color: "#222" }}
        transition={{ duration: 0.3 }}
      >
        <motion.span
          className="w-12 h-12 mb-4 inline-flex items-center justify-center bg-blue-100 rounded-xl"
          initial={false}
          animate={expanded ? { opacity: 0, y: -40 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <img src={industry.icon} alt="" className="w-8 h-8" />
        </motion.span>
        <motion.h3
          className="text-2xl font-semibold mb-3"
          initial={false}
          animate={expanded ? { y: -20 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {industry.title}
        </motion.h3>
        <motion.div
          className="flex flex-col"
          initial={false}
          animate={expanded ? { opacity: 1, y: 0 } : { opacity: 0.8, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          <p>{industry.description[0]}</p>
          <p>{industry.description[1]}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
