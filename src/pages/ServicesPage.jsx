// import React from 'react';
// import { Outlet, NavLink } from 'react-router-dom';

// const ServicesPage = () => {
//   const servicesNav = [
//     { path: 'app-development', label: 'App Development' },
//     { path: 'legacy-modernization', label: 'Legacy Modernization' },
//     { path: 'cloud-migration', label: 'Cloud Migration' },
//     { path: 'code-optimization', label: 'Code Optimization' },
//     { path: 'testing-services', label: 'Testing Services' },
//     { path: 'api-development', label: 'API Development' },
//     // Add more service routes here
//   ];

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <h1 className="text-4xl font-bold mb-8">Our Services</h1>

//       {/* Common services navigation */}
//       <nav className="mb-8 flex gap-6 border-b pb-3">
//         {servicesNav.map(({ path, label }) => (
//           <NavLink
//             key={path}
//             to={path}
//             className={({ isActive }) =>
//               isActive
//                 ? 'border-b-2 border-blue-600 text-blue-600 font-semibold'
//                 : 'text-gray-600 hover:text-blue-600 transition'
//             }
//           >
//             {label}
//           </NavLink>
//         ))}
//       </nav>

//       {/* Outlet renders the nested route component */}
//       <Outlet />
//     </div>
//   );
// };

// export default ServicesPage;



import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const categoryGroups = {
  Engineering: [
    { path: 'app-development', label: 'App Development' },
    { path: 'legacy-modernization', label: 'Legacy Modernization' },
    { path: 'cloud-migration', label: 'Cloud Migration' },
    { path: 'code-optimization', label: 'Code Optimization' },
    { path: 'testing-services', label: 'Testing Services' },
    { path: 'api-development', label: 'API Development' },
  ],
  'AI & Data': [
    { path: 'data-analytics', label: 'Data Analytics' },
    { path: 'machine-learning', label: 'Machine Learning' },
    { path: 'ai-integration', label: 'AI Integration' },
    { path: 'deep-learning', label: 'Deep Learning' },
    { path: 'big-data', label: 'Big Data' },
    { path: 'nlp-services', label: 'NLP Services' },
  ],
  Cloud: [
    { path: 'cloud-consulting', label: 'Cloud Consulting' },
    { path: 'devops-automation', label: 'DevOps Automation' },
    { path: 'monitoring-ops', label: 'Monitoring & Ops' },
    { path: 'security-audit', label: 'Security Audit' },
    { path: 'multicloud-support', label: 'Multi-Cloud Support' },
    { path: 'infrastructure-as-code', label: 'Infrastructure as Code' },
  ],
};

const ServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Engineering');

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-900 text-center">
        Our Services
      </h1>
      <p className="text-lg text-gray-600 mb-10 text-center max-w-3xl mx-auto">
        Explore our range of cutting-edge technology services designed to help modern businesses grow, transform, and innovate.
      </p>

      {/* Category Tabs */}
      <nav className="mb-8 flex flex-wrap justify-center gap-4 border-b border-gray-200 pb-4">
        {Object.keys(categoryGroups).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`transition-all px-4 py-2 rounded-t font-semibold shadow-sm
              ${selectedCategory === category
                ? 'bg-blue-600 text-white scale-105 shadow-lg'
                : 'bg-white text-gray-700 hover:bg-blue-100 hover:text-blue-700'
              }`}
            style={{ minWidth: 140 }}
          >
            {category}
          </button>
        ))}
      </nav>

      {/* Sub-navigation */}
      <nav className="mb-10 flex gap-3 border-b border-gray-100 pb-3 overflow-x-auto whitespace-nowrap justify-center">
        {categoryGroups[selectedCategory].map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `inline-block px-3 py-1.5 text-base rounded font-medium transition-all
              ${isActive
                ? 'border-b-2 border-blue-600 text-blue-600 bg-blue-50 scale-105'
                : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`
            }
            style={{ minWidth: 120 }}
          >
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Outlet renders nested service detail */}
      <div className="animate-fade-in">
        <Outlet />
      </div>
    </div>
  );
};

export default ServicesPage;
