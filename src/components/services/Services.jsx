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
        { icon: <FiCode />, title: "Software Engineering", desc: "Modern web & mobile applications." },
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
        // { icon: <FiCloud />, title: "Security Compliance", desc: "Harden cloud environments." },
        { icon: <FiCloud />, title: "Security Complience", desc: "Monitor and operate cloud." },
      ],
    },
  ];

  const handleServiceClick = (title) => {
    const pathMap = {
      "Software Engineering": "/services/software-engineering",
      "System Engineering": "/services/system-engineering",
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
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 flex flex-col md:flex-row gap-6">
      {/* Left Panel - Categories */}
      <div className="w-full md:w-1/4 flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto pb-2 md:pb-0">
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

      {/* Right Panel - Services */}
      <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {categories[activeIndex].services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.3, delay: i * 0.05, ease: "easeOut" }}
            >
              <ServiceCard
                icon={s.icon}
                title={s.title}
                desc={s.desc}
                onClick={() => handleServiceClick(s.title)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

// Category Component
const Category = ({ title, desc, active, onHover }) => (
  <div
    onMouseEnter={onHover}
    className={`p-4 rounded-xl cursor-pointer transition-all duration-300
      ${active ? "bg-gradient-to-r from-blue-100 to-blue-200 shadow-md border-l-4 border-blue-500" : "hover:bg-blue-50 hover:border-l-4 hover:border-blue-400"}
      min-w-[140px] md:min-w-auto`}
    tabIndex={0}
    role="button"
    aria-pressed={active}
  >
    <h3 className={`font-semibold mb-1 ${active ? "text-blue-700" : "text-gray-800"}`}>{title}</h3>
    <p className="text-sm text-gray-500 line-clamp-2">{desc}</p>
  </div>
);

// Service Card Component
const ServiceCard = ({ icon, title, desc, onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      onClick={onClick}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl cursor-pointer flex flex-col justify-between h-52 transition-all duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        animate={{
          scale: hover ? 1.2 : 1,
          y: hover ? -5 : 0,
          rotate: hover ? 5 : 0,
          color: hover ? "#2563EB" : "#3B82F6",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
        className="text-4xl mb-4"
      >
        {icon}
      </motion.div>
      <h4 className={`font-semibold text-lg ${hover ? "text-blue-700" : "text-gray-800"}`}>{title}</h4>
      <p className="text-sm text-gray-500 mt-1 line-clamp-3">{desc}</p>
    </motion.div>
  );
};

export default Services;
