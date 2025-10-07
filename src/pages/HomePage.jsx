import React from "react";
import Hero from "../components/home/hero/Hero";
import Card from "../components/home/card/Card";
import HomeFeature from "../components/home/features/HomeFeature";
import VideoSection from "../components/home/videosection/VideoSection";
import Company from "../components/home/company/Company";

const HomePage = ({ setShowServicesPopup }) => {
  return (
    <div className="overflow-x-hidden">
      <section data-speed="1.2">
        <Hero />
      </section>

      <section data-speed="0.9" className="mt-12">
        {/* Passing setShowServicesPopup to Card for popup control */}
        <Card setShowServicesPopup={setShowServicesPopup} className="top-[90px]" />
      </section>

      <section data-speed="1.1" className="mt-12">
        <HomeFeature />
      </section>

      <section data-lag="0.3" className="mt-12">
        <VideoSection />
      </section>

      <section data-speed="0.8" className="mt-12 mb-20">
        <Company />
      </section>

      <section data-speed="1.3">{/* Future IndustriesSection */}</section>
    </div>
  );
};

export default HomePage;
