import React from 'react';
import Hero from '../hero/Hero';
import ServiceSection from '../servicesection/serviceSection';
import Benefits from '../benefits/Benefits';
import { FaDesktop, FaMobileAlt, FaChartLine, FaDatabase } from 'react-icons/fa';

const LegacyModernization = () => {
  const heroData = {
    imageUrl: 'https://eleks.com/wp-content/uploads/legacy-software-modernization-services-header-2048x707.jpg',
    subtitle: '○ Engineering',
    title: 'Legacy software\nmodernization services',
    description: 'Reimagine your outdated core systems through technological innovation that boosts performance, agility, scalability and UX with ELEKS legacy system modernization services.',
    buttonText: 'Get expert advice',
  };

  const services = [
    {
      icon: <FaDesktop size={32} className="text-blue-500" />,
      title: 'Requirements and scoping',
      description: 'We`ll get know your business inside out so we can define which appliction improvements will boost efficiency and performance. this could involve designing a more usable interface, helping you automate operation, or moving services to the cloud.',
    },
    {
      icon: <FaChartLine size={32} className="text-blue-500" />,
      title: 'Legacy software modernization',
      description: 'Once we’ve scoped your requirements, budget and timeline, our team of software engineers will design and test robust application modernization solutions with your current legacy setup. We’ll only make updates and adjustments that really add value.',
    },
    {
      icon: <FaMobileAlt size={32} className="text-blue-500" />,
      title: 'Launch and support',
      description: 'Our engineers deploy, configure, and launch your re-engineered solution to your environment: on-premises, via the cloud, or through the Android/iOS app store for Mobile apps. You’ll benefit from ELEKS’ ',
    },
  ];

  const benefits = [
    'Become more scalable and flexible',
    'Optimize applications faster',
    'Improve app maintainability',
    'Pre-empt performance issues',
    'Create a superior customer experience',
    
  ];

  return (
    <div className="py-10 bg-white overflow-hidden">
      <Hero {...heroData} />
      <ServiceSection heading='The end-to-end legacy application modernization services' services={services}  />
      <Benefits
        heading="Service benefits"
        subheading="How legacy system modernization transforms your business"
        benefits={benefits}
      />
    </div>
  );
};

export default LegacyModernization;
