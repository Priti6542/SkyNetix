import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const ServicesPage = () => {
  const servicesNav = [
    { path: 'app-development', label: 'App Development' },
    { path: 'legacy-modernization', label: 'Legacy Modernization' },
    // Add more service routes here
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>

      {/* Common services navigation */}
      <nav className="mb-8 flex gap-6 border-b pb-3">
        {servicesNav.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              isActive
                ? 'border-b-2 border-blue-600 text-blue-600 font-semibold'
                : 'text-gray-600 hover:text-blue-600 transition'
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Outlet renders the nested route component */}
      <Outlet />
    </div>
  );
};

export default ServicesPage;
