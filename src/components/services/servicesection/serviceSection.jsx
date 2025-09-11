import React, { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';

const ServiceSection = ({ heading, services }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleToggle = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="px-4 md:px-12 pb-12">
      <h2 className="text-2xl md:text-4xl font-semibold font-serif mb-10 text-gray-900 ml-35">
        {heading}
      </h2>

      <div className="relative flex w-full overflow-hidden ml-30">
        {services.map((service, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div
              key={index}
              onClick={() => handleToggle(index)}
              className={`relative cursor-pointer flex-shrink-0 transition-all duration-500 ease-in-out bg-white ${
                isExpanded ? 'w-[450px] z-10' : 'w-[250px] z-0'
              } ${index !== 0 ? 'border-l border-gray-300' : ''}`}
              style={{ minHeight: '250px' }}
            >
              <div className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="mb-3">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  {isExpanded && (
                    <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                  )}
                </div>
                <div className="flex justify-end mt-4 pointer-events-none">
                  <div className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center bg-white">
                    {isExpanded ? <FaTimes size={14} /> : <FaPlus size={14} />}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceSection;