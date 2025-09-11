import React from 'react';
import HeroSection from '../../commons/HeroSection';
import ServicesSection from '../../commons/ServicesSection';
import ServiceBenefits from '../../commons/ServiceBenefits';
import { FaDesktop, FaMobileAlt, FaChartLine, FaDatabase } from 'react-icons/fa';

const AppDevelopment = () => {
  const heroData = {
    imageUrl: 'https://eleks.com/wp-content/uploads/heade-application-development-min-2048x725.jpg',
    subtitle: '○ Engineering',
    title: 'Custom Application\nDevelopment Services',
    description: 'We’ll help you bring your software vision to life with our full-cycle development service.',
    buttonText: 'Get expert advice',
  };

  const services = [
    {
      icon: <FaDesktop size={32} className="text-blue-500" />,
      title: 'Desktop software',
      description: 'Full-cycle development for Windows, macOS, and Linux.',
    },
    {
      icon: <FaChartLine size={32} className="text-blue-500" />,
      title: 'Web applications',
      description: 'Covers front-end, back-end, UX, and deployment.',
    },
    {
      icon: <FaMobileAlt size={32} className="text-blue-500" />,
      title: 'Custom mobile apps',
      description: 'Cross-platform or native mobile solutions.',
    },
    {
      icon: <FaDatabase size={32} className="text-blue-500" />,
      title: 'Data visualization tools',
      description: 'Interactive dashboards and secure backend systems.',
    },
  ];

  const benefits = [
    'Faster time to market',
    'Improved customer experience',
    'Custom workflows & automation',
    'Better scalability & performance',
    'Lower development costs',
    'Cross-platform compatibility',
  ];

  return (
    <div className="py-10 bg-white overflow-hidden">
      <HeroSection {...heroData} />
      <ServicesSection heading="End-to-end Application Development" services={services} />
      <ServiceBenefits
        heading="Service benefits"
        subheading="What you can achieve with ELEKS’ custom application development services"
        benefits={benefits}
      />
    </div>
  );
};

export default AppDevelopment;