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
        { icon: <FiCode />, title: "Code Optimization", desc: "Improve code efficiency." },
        { icon: <FiCode />, title: "API Development", desc: "Build scalable APIs." },
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
    switch (title) {
      case "Software Engineering":
        navigate("/services/software-engineering");
        break;
      case "System Engineering":
        navigate("/services/system-engineering");
        break;
      case "Code Optimization":
        navigate("/services/code-optimization");
        break;
      case "Testing Services":
        navigate("/services/testing-services");
        break;
      case "API Development":
        navigate("/services/api-development");
        break;
      case "AI & Data Science":
        navigate("/services/ai-and-data-science");
        break;
      case "Machine Learning":
        navigate("/services/machine-learning");
        break;
      case "AI Integration":
        navigate("/services/ai-integration");
        break;
      case "NLP Services":
        navigate("/services/nlp-services");
        break;
      case "Big Data":
        navigate("/services/big-data");
        break;
      case "Cloud Consulting":
        navigate("/services/cloud-consulting");
        break;
      case "Cloud Migration":
        navigate("/services/cloud-migration");
        break;
      case "Cloud Architecture":
        navigate("/services/cloud-architecture");
        break;
      case "Security Compliance":
        navigate("/services/security-compliance");
        break;
      case "Monitoring & Ops":
        navigate("/services/monitoring-ops");
        break;
      default:
        console.warn("Service not mapped:", title);
        break;
    }
  };

  return (
    <div
      className="
        w-full max-w-6xl mx-auto bg-white border shadow-lg mt-8 rounded-lg
        flex flex-col md:flex-row gap-6
        sm:p-6 md:p-8
        h-[10vh] md:h-auto overflow-hidden md:overflow-visible
      "
    >
      {/* Left Panel - Categories */}
      <div
        className="
          w-full md:w-1/3
          border-b md:border-b-0 md:border-r border-gray-200
          pb-4 md:pb-0 pr-0 md:pr-6 space-y-4
          overflow-y-auto max-h-[40vh] md:max-h-full
        "
      >
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

      {/* Right Panel - Services List */}
      <div
        className="
          w-full md:w-3/3
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative
          overflow-y-auto max-h-[85vh] md:max-h-full pr-2
        "
      >
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
      focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1`}
    tabIndex={0}
    role="button"
    aria-pressed={active}
  >
    <h3 className={`text-md font-semibold ${active ? "text-blue-700" : "text-gray-800"}`}>{title}</h3>
    <p className="text-sm text-gray-500 mt-1">{desc}</p>
  </div>
);

const ServiceCard = ({ icon, title, desc }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      className="p-5 border border-gray-200 rounded-lg hover:shadow-lg transition h-48 flex flex-col justify-between cursor-pointer bg-white
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
      tabIndex={0}
      role="button"
      aria-label={`Service: ${title}`}
    >
      <div className="flex flex-col">
        <motion.div
          animate={{
            rotate: isHovered ? 10 : 0,
            scale: isHovered ? 1.3 : 1,
            color: isHovered ? "#2563eb" : "#3b82f6",
          }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-blue-600 text-3xl mb-3"
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
      </div>

      <p className="text-sm text-gray-600 mt-2 line-clamp-2">{desc}</p>
    </motion.div>
  );
};

export default Services;
