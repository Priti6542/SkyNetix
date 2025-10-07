import React from 'react';
import { MachineLearningData } from '../servicedata/ServiceData';
import Benefits from '../benefits/Benefits';
// import ServiceSection from '../servicesection/serviceSection';

const MachineLearning = () => {
  const { hero, services, benefits } = MachineLearningData;

  // Defined heading for services section
  const ServiceSectionHeading = "Our Services";

  const benefitsHeading = "Why Choose Our Machine Learning?";
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
      {/* <ServiceSection heading={ServiceSectionHeading} services={services} /> */}

      {/* Benefits Section */}
      <Benefits heading={benefitsHeading} subheading={benefitsSubheading} benefits={benefits} />
    </section>
  );
};

export default MachineLearning
