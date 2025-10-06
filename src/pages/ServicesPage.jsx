import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const categoryGroups = {
  Engineering: [
    { path: 'software-engineering', label: 'Software Engineering' },
    { path: 'system-engineering', label: 'System Engineering' },
    { path: 'cloud-devops-engineering', label: 'Cloud DevOps Engineering' },
  ],
  'AI & Data': [
    { path: 'ai-and-data-science', label: 'AI & Data Science' },
    { path: 'machine-learning', label: 'Machine Learning' },
    { path: 'ai-integration', label: 'AI Deployment & Managed Services' },
    { path: 'nlp-services', label: 'NLP Services' },
    { path: 'big-data', label: 'Big Data' },
  ],
  Cloud: [
    { path: 'cloud-consulting', label: 'Cloud Consulting' },
    { path: 'cloud-migration', label: 'Cloud Migration' },
    { path: 'cloud-architecture', label: 'Cloud Architecture' },
    { path: 'security-compliance', label: 'Security Compliance' },
  ],
};

const ServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Engineering');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900 text-center">
        Our Services
      </h1>
      <p className="text-base sm:text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
        Explore our range of cutting-edge technology services designed to help modern businesses grow, transform, and innovate.
      </p>

      {/* Category Tabs */}
      <nav className="mb-4 flex overflow-x-auto scrollbar-hide gap-2 sm:gap-4 border-b border-gray-200 pb-2 snap-x snap-mandatory">
        {Object.keys(categoryGroups).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`transition-all px-3 sm:px-4 py-2 sm:py-3 rounded-t font-semibold shrink-0 snap-start
              ${selectedCategory === category
                ? 'bg-blue-600 text-white scale-105 shadow-lg'
                : 'bg-white text-gray-700 hover:bg-blue-100 hover:text-blue-700'
              }`}
            style={{ minWidth: 120 }}
          >
            {category}
          </button>
        ))}
      </nav>

      {/* Sub-navigation */}
      <nav className="mb-6 flex overflow-x-auto scrollbar-hide gap-2 sm:gap-3 border-b border-gray-100 pb-3 whitespace-nowrap snap-x snap-mandatory">
        {categoryGroups[selectedCategory].map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `inline-block px-3 sm:px-4 py-2 sm:py-2.5 rounded font-medium shrink-0 snap-start transition-all text-sm sm:text-base
              ${isActive
                ? 'border-b-2 border-blue-600 text-blue-600 bg-blue-50 scale-105'
                : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`
            }
            style={{ minWidth: 100 }}
          >
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Outlet renders nested service detail */}
      <div className="animate-fade-in mt-4 sm:mt-6">
        <Outlet />
      </div>
    </div>
  );
};

export default ServicesPage;
