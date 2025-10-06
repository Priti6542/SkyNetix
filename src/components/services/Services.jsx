import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiCode, FiDatabase, FiCloud } from "react-icons/fi";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const categories = [
    {
      title: "Engineering",
      desc: "End-to-end software development services.",
      services: [
        { icon: <FiCode />, title: "Software Engineering", desc: "Modern web/mobile applications." },
        { icon: <FiCode />, title: "System Engineering", desc: "Revamp outdated systems." },
        { icon: <FiCloud />, title: "Cloud DevOps Engineering", desc: "Scale infrastructure effortlessly." },
      ],
    },
    {
      title: "AI & Data",
      desc: "Unlock value with AI-driven solutions.",
      services: [
        { icon: <FiDatabase />, title: "AI & Data Science", desc: "Make data-driven decisions." },
        { icon: <FiDatabase />, title: "Machine Learning", desc: "Train predictive models." },
        { icon: <FiCode />, title: "AI Integration", desc: "Embed AI in products." },
        { icon: <FiDatabase />, title: "NLP Services", desc: "Language understanding." },
        { icon: <FiDatabase />, title: "Big Data", desc: "Handle massive datasets." },
      ],
    },
    {
      title: "Cloud",
      desc: "Cloud transformation and operations.",
      services: [
        { icon: <FiCloud />, title: "Cloud Consulting", desc: "Migrate safely & securely." },
        { icon: <FiCloud />, title: "Cloud Migration", desc: "CI/CD pipelines setup." },
        { icon: <FiCloud />, title: "Cloud Architecture", desc: "Cloud health monitoring." },
        { icon: <FiCloud />, title: "Security Compliance", desc: "Harden cloud environments." },
        { icon: <FiCloud />, title: "Monitoring & Ops", desc: "Monitor and operate cloud." },
      ],
    },
  ];

  const handleServiceClick = (title) => {
    const pathMap = {
      "Software Engineering": "/services/software-engineering",
      "System Engineering": "/services/system-engineering",
      "Code Optimization": "/services/code-optimization",
      "Testing Services": "/services/testing-services",
      "API Development": "/services/api-development",
      "AI & Data Science": "/services/ai-and-data-science",
      "Machine Learning": "/services/machine-learning",
      "AI Integration": "/services/ai-integration",
      "NLP Services": "/services/nlp-services",
      "Big Data": "/services/big-data",
      "Cloud Consulting": "/services/cloud-consulting",
      "Cloud Migration": "/services/cloud-migration",
      "Cloud Architecture": "/services/cloud-architecture",
      "Security Compliance": "/services/security-compliance",
      "Monitoring & Ops": "/services/monitoring-ops",
    };
    if (pathMap[title]) navigate(pathMap[title]);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 flex flex-col md:flex-row gap-6">
      {/* Left Panel */}
      <div className="w-full md:w-1/3 flex md:flex-col overflow-x-auto md:overflow-y-auto gap-3 md:gap-4 pb-2 md:pb-0">
        {categories.map((cat, index) => (
          <Category
            key={index}
            title={cat.title}
            desc={cat.desc}
            active={index === activeIndex}
            onHover={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto max-h-[85vh] md:max-h-full">
        <AnimatePresence mode="wait">
          {categories[activeIndex].services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.3, delay: i * 0.01, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={() => handleServiceClick(s.title)}
            >
              <ServiceCard icon={s.icon} title={s.title} desc={s.desc} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Category = ({ title, desc, active, onHover }) => (
  <div
    onMouseEnter={onHover}
    className={`p-3 rounded-lg cursor-pointer transition-all duration-300
      ${active ? "bg-blue-50 border-l-4 border-blue-500 shadow-sm" : "hover:bg-blue-50 hover:border-l-4 hover:border-blue-400"}
      focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 min-w-[150px] md:min-w-auto`}
    tabIndex={0}
    role="button"
    aria-pressed={active}
  >
    <h3 className={`text-md font-semibold ${active ? "text-blue-700" : "text-gray-800"}`}>{title}</h3>
    <p className="text-sm text-gray-500 mt-1 line-clamp-2">{desc}</p>
  </div>
);

const ServiceCard = ({ icon, title, desc }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(37, 99, 235, 0.2)" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="p-5 border border-gray-200 rounded-lg bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 h-48 flex flex-col justify-between"
      tabIndex={0}
      role="button"
      aria-label={`Service: ${title}`}
    >
      <motion.div
        animate={{
          y: isHovered ? -10 : 0,
          rotate: isHovered ? 15 : 0,
          scale: isHovered ? 1.2 : 1,
          color: isHovered ? "#2563eb" : "#3b82f6",
          filter: isHovered ? "drop-shadow(0 4px 8px rgba(37, 99, 235, 0.3))" : "none",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="text-3xl text-blue-600 mb-3"
      >
        {icon}
      </motion.div>

      <motion.h4
        animate={{ color: isHovered ? "#2563eb" : "#1f2937", scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
        className="font-semibold text-gray-800"
      >
        {title}
      </motion.h4>

      <p className="text-sm text-gray-600 mt-2 line-clamp-2">{desc}</p>
    </motion.div>
  );
};

export default Services;
