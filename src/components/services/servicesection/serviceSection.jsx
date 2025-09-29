import React, { useState, useEffect } from 'react';
import {
  FaPlus, FaTimes,
  FaDesktop, FaChartLine, FaMobileAlt, FaDatabase,
} from 'react-icons/fa';

const iconMap = {
  FaDesktop: <FaDesktop />,
  FaChartLine: <FaChartLine />,
  FaMobileAlt: <FaMobileAlt />,
  FaDatabase: <FaDatabase />,
  // Add more icons if needed
};

const ServiceSection = ({ heading, services }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggle = (index) => {
    setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section className="px-4 md:px-12 pb-12 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-semibold font-serif mb-10 text-gray-900 text-center md:text-left">
        {heading}
      </h2>
      <div className="flex overflow-x-auto space-x-2 md:space-x-6 relative">
        {services.map((service, index) => {
          const isExpanded = expandedIndex === index;
          const baseWidth = 200;
          const expandedWidth = 350;
          const baseWidthMd = 250;
          const expandedWidthMd = 450;

          const widthStyle = {
            width: isExpanded
              ? (windowWidth >= 768 ? expandedWidthMd : expandedWidth)
              : (windowWidth >= 768 ? baseWidthMd : baseWidth),
            minHeight: 250,
          };

          return (
            <div
              key={index}
              onClick={() => handleToggle(index)}
              className={`relative cursor-pointer flex-shrink-0 transition-all duration-500 ease-in-out bg-white rounded-lg shadow-md ${
                isExpanded ? 'z-20' : 'z-0'
              } ${index !== 0 ? 'border-l border-gray-300' : ''}`}
              style={widthStyle}
            >
              <div className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="mb-3 text-3xl text-blue-600">
                    {iconMap[service.icon] || null}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
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
    </section>
  );
};

export default ServiceSection;
