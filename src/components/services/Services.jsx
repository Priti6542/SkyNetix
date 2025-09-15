import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiDatabase, FiCloud } from 'react-icons/fi';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    {
      title: 'Engineering',
      desc: 'End-to-end software development services.',
      services: [
        { icon: <FiCode />, title: 'App Development', desc: 'Modern web/mobile applications.' },
        { icon: <FiCode />, title: 'Legacy Modernization', desc: 'Revamp outdated systems.' },
        { icon: <FiCloud />, title: 'Cloud Migration', desc: 'Scale infrastructure effortlessly.' },
        { icon: <FiCode />, title: 'Code Optimization', desc: 'Improve code efficiency.' },
        { icon: <FiCode />, title: 'Testing Services', desc: 'Automated QA solutions.' },
        { icon: <FiCode />, title: 'API Development', desc: 'Build scalable APIs.' },
      ],
    },
    {
      title: 'AI & Data',
      desc: 'Unlock value with AI-driven solutions.',
      services: [
        { icon: <FiDatabase />, title: 'Data Analytics', desc: 'Make data-driven decisions.' },
        { icon: <FiDatabase />, title: 'Machine Learning', desc: 'Train predictive models.' },
        { icon: <FiCode />, title: 'AI Integration', desc: 'Embed AI in products.' },
        { icon: <FiDatabase />, title: 'Deep Learning', desc: 'Advanced neural networks.' },
        { icon: <FiDatabase />, title: 'Big Data', desc: 'Handle massive datasets.' },
        { icon: <FiDatabase />, title: 'NLP Services', desc: 'Language understanding.' },
      ],
    },
    {
      title: 'Cloud',
      desc: 'Cloud transformation and operations.',
      services: [
        { icon: <FiCloud />, title: 'Cloud Consulting', desc: 'Migrate safely & securely.' },
        { icon: <FiCloud />, title: 'DevOps Automation', desc: 'CI/CD pipelines setup.' },
        { icon: <FiCloud />, title: 'Monitoring & Ops', desc: 'Cloud health monitoring.' },
        { icon: <FiCloud />, title: 'Security Audit', desc: 'Harden cloud environments.' },
        { icon: <FiCloud />, title: 'Multi-Cloud Support', desc: 'AWS, Azure, GCP' },
        { icon: <FiCloud />, title: 'Infrastructure as Code', desc: 'Automated provisioning.' },
      ],
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto bg-white border shadow-lg mt-6 p-6 rounded-lg 
                    flex flex-col md:flex-row gap-6">
      {/* Left Section */}
      <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 pr-0 md:pr-6 space-y-4">
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

      {/* Right Section with AnimatePresence */}
      <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        <AnimatePresence mode="wait">
          {categories[activeIndex].services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{
                duration: 0.3,
                delay: i * 0.01,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
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
    className={`p-4 rounded-lg cursor-pointer transition-all duration-300
      ${active ? 'bg-blue-50 border-l-4 border-blue-500' : 'hover:bg-blue-50 hover:border-l-4 hover:border-blue-400'}
    `}
  >
    <h3 className={`text-md font-semibold ${active ? 'text-blue-700' : 'text-gray-800'}`}>{title}</h3>
    <p className="text-sm text-gray-500 mt-1">{desc}</p>
  </div>
);

const ServiceCard = ({ icon, title, desc }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (title === 'App Development') {
      navigate('/services/app-development'); // nested route path
    } else if (title === 'Legacy Modernization') {
      navigate('/services/legacy-modernization');
    }
  };

  return (
    <motion.div
      onClick={handleClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.3 },
      }}
      className="p-4 border border-gray-200 rounded-md hover:shadow-lg transition h-44 flex flex-col justify-between cursor-pointer"
      tabIndex={0}
      role="button"
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleClick()}
      aria-label={`Service: ${title}`}
    >
      <div className="flex flex-col">
        <motion.div
          animate={{
            rotate: isHovered ? 10 : 0,
            scale: isHovered ? 1.2 : 1,
            color: isHovered ? '#2563eb' : '#3b82f6',
          }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="text-blue-600 text-2xl mb-2"
        >
          {icon}
        </motion.div>

        <motion.h4
          animate={{
            color: isHovered ? '#2563eb' : '#1f2937',
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="font-medium text-gray-800"
        >
          {title}
        </motion.h4>
      </div>

      <p className="text-sm text-gray-500 mt-1 line-clamp-2">{desc}</p>
    </motion.div>
  );
};

export default Services;
