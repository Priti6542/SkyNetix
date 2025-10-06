import React, { useState, useEffect } from 'react';
import {
  FaPlus, FaTimes,
  FaDesktop, FaChartLine, FaMobileAlt, FaDatabase,
} from 'react-icons/fa';

// Icon mapping for reuse
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
    <section className="px-4 md:px-12 pb-16 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold font-serif mb-12 text-gray-900 text-center md:text-left tracking-tight">
        {heading}
      </h2>
      <div className="flex overflow-x-auto space-x-6 md:space-x-8 relative snap-x snap-mandatory">
        {services.map((service, index) => {
          const isExpanded = expandedIndex === index;
          const baseWidth = 220;
          const expandedWidth = 370;
          const baseWidthMd = 270;
          const expandedWidthMd = 480;

          const widthStyle = {
            width: isExpanded
              ? (windowWidth >= 768 ? expandedWidthMd : expandedWidth)
              : (windowWidth >= 768 ? baseWidthMd : baseWidth),
            minHeight: 280,
          };

          return (
            <div
              key={index}
              tabIndex={0}
              role="button"
              aria-expanded={isExpanded}
              aria-label={`${service.title} ${isExpanded ? 'collapse' : 'expand'}`}
              onClick={() => handleToggle(index)}
              onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleToggle(index)}
              className={`
                relative cursor-pointer flex-shrink-0 snap-center transition-all duration-500 ease-in-out
                bg-white rounded-xl shadow-lg
                ${isExpanded
                  ? 'ring-2 ring-blue-400 shadow-xl z-20 scale-105'
                  : 'z-0 scale-100 hover:ring-2 hover:ring-blue-300 hover:shadow-lg'}
                group
                outline-none
              `}
              style={widthStyle}
            >
              <div className="p-7 h-full flex flex-col justify-between">
                <div>
                  <div className={`mb-4 text-4xl
                    ${isExpanded ? 'text-blue-500 scale-110' : 'text-blue-600 group-hover:scale-105'}
                    transition-all`}
                  >
                    {iconMap[service.icon] || null}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  {isExpanded && (
                    <p className="text-[15px] text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  )}
                </div>
                <div className="flex justify-end mt-6 pointer-events-none">
                  <div className={`
                    w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center
                    bg-white transition-all
                    ${isExpanded
                      ? 'bg-blue-50 border-blue-400 text-blue-600 animate-spin-slow'
                      : 'group-hover:bg-blue-50 group-hover:border-blue-400 group-hover:text-blue-600'}
                  `}>
                    {isExpanded
                      ? <FaTimes size={15} />
                      : <FaPlus size={15} />}
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
