import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

const categoryGroups = {
  Engineering: ['software-engineering', 'system-engineering', 'cloud-devops-engineering'],
  'AI & Data': ['ai-and-data-science', 'machine-learning', 'ai-integration', 'nlp-services', 'big-data'],
  Cloud: ['cloud-consulting', 'cloud-migration', 'cloud-architecture', 'security-compliance'],
};

const ServicesPage = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('Engineering');

  useEffect(() => {
    const currentPath = location.pathname.split('/').pop();
    const foundCategory = Object.keys(categoryGroups).find(category =>
      categoryGroups[category].includes(currentPath)
    );
    if (foundCategory) setSelectedCategory(foundCategory);
  }, [location]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900 text-center">
        Our Services
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-10 text-center max-w-3xl mx-auto">
        Explore our cutting-edge technology services to grow, transform, and innovate your business.
      </p>

      {/* Category Tabs */}
      <div className="flex gap-4 justify-center mb-8 flex-wrap">
        {Object.keys(categoryGroups).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full font-semibold text-lg transition-all transform
              ${selectedCategory === category
                ? 'bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white scale-105 shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-gradient-to-r hover:from-purple-400 hover:via-purple-300 hover:to-indigo-400 hover:text-white hover:scale-105'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Sub-navigation Cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 p-6 rounded-2xl shadow-3xl"
        // style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.15)' }}
      >

        {categoryGroups[selectedCategory].map((path) => (
          <NavLink key={path} to={path}>
            {({ isActive }) => (
              <motion.div
                style={{
                  boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                  borderRadius: '5px solid rgba(234, 36, 161, 0.05)',
                }}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0,0,0,0.15)' }}
                className={`p-5 rounded-2xl border transition-all cursor-pointer
                  
                  ${isActive
                    ? 'bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white shadow-lg border-transparent'
                    : 'bg-white text-gray-800 border border-gray-200 hover:bg-purple-50 hover:border-purple-300'
                  }`}
              >
                <h3 className="font-semibold text-lg capitalize">{path.replace(/-/g, ' ')}</h3>
              </motion.div>
            )}
          </NavLink>
        ))}
      </div>

      {/* Outlet for service details with animation */}
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Outlet />
      </motion.div>
    </div>
  );
};

export default ServicesPage;
