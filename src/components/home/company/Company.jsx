import React from 'react';
import { companyHighlights } from './CompanyData';

const Company = () => (
  <section className="bg-gray-900 text-white py-16 px-8 mt-3">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
      {/* Left Side */}
      <div className="flex-1">
        <h4 className="text-lg font-semibold mb-5">{companyHighlights.title}</h4>
        <h2 className="text-4xl font-serif font-medium mb-3">{companyHighlights.subtitle}</h2>
      </div>
      {/* Right Side */}
      <div className="flex-1 grid grid-cols-2 gap-8">
        {companyHighlights.rows.map((item, idx) => (
          <div key={idx}>
            <div className="text-5xl font-bold mb-2">{item.value}</div>
            <div className="text-base">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
    {/* Bottom Logos */}
    {/* <div className="mt-10 flex justify-center gap-12  flex-wrap overflow-x-auto sm:flex-wrap sm:overflow-visible sm:whitespace-normal overflow-x-auto whitespace-nowrap">

      {companyHighlights.logos.map((logo, idx) => (
        <img key={idx} src={logo.src} alt={logo.alt} className="h-12 opacity-80" />
      ))}
    </div> */}
  </section>
);

export default Company;
