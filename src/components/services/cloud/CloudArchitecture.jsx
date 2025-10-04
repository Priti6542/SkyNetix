import React from 'react';
import { CloudArchitectureData } from '../servicedata/ServiceData';
import Benefits from '../benefits/Benefits';
import ServiceSection from '../servicesection/serviceSection';

const CloudArchitecture = () => {
  const { hero, services, benefits } = CloudArchitectureData;

  // Defined heading for services section
  const ServiceSectionHeading = "Our Services";

  const benefitsHeading = "Why Choose Our Web Development?";
  const benefitsSubheading = "Explore the core advantages our services offer to help your business grow.";

  return (
    <section>
      {/* Hero Section */}
      <div className="hero">
        <img src={hero.imageUrl} alt="Web Development Hero" style={{ width: '100%', height: 'auto' }} />
        <h3>{hero.subtitle}</h3>
        <h1>{hero.title}</h1>
        <p>{hero.description}</p>
        <button>{hero.buttonText}</button>
      </div>

      {/* Services Section */}
      <ServiceSection heading={ServiceSectionHeading} services={services} />

      {/* Benefits Section */}
      <Benefits heading={benefitsHeading} subheading={benefitsSubheading} benefits={benefits} />
    </section>
  );
};

export default CloudArchitecture;
