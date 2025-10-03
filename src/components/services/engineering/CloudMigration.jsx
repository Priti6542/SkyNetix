import React from 'react';
import { CloudMigration } from '../servicedata/ServiceData';
import Benefits from '../benefits/Benefits';
import ServiceSection from '../servicesection/serviceSection';

const CloudMigrationSection = () => {
  const { hero, services, benefits } = CloudMigration;

  // Defined heading for services section
  const ServiceSectionHeading = "Our Cloud Migration Services";

  // Benefits section headings
  const benefitsHeading = "Why Choose Our Cloud Migration?";
  const benefitsSubheading = "Explore the core advantages our migration services offer to modernize your business infrastructure.";

  return (
    <section>
      {/* Hero Section */}
      <div className="hero">
        <img
          src={hero.imageUrl}
          alt="Cloud Migration Hero"
          style={{ width: '100%', height: 'auto' }}
        />
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

export default CloudMigrationSection;
