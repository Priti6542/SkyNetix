import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Hero = ({ imageUrl, subtitle, title, description, buttonText }) => {
  return (
    <div className="relative h-[65vh] max-w-6xl mx-auto rounded-lg overflow-hidden mb-20">
      <img
        src={imageUrl}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 h-full flex items-center justify-between px-6 md:px-12">
        <div className="text-white max-w-xl">
          <p className="text-base font-medium text-gray-300 mb-2">{subtitle}</p>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold leading-tight">{title}</h1>
          <p className="mt-4 text-md text-gray-300">{description}</p>
          <button className="mt-6 inline-flex items-center gap-2 bg-white text-black font-medium px-5 py-2.5 rounded-full hover:scale-105 transition">
            {buttonText} <FaArrowRight className="mt-[2px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;