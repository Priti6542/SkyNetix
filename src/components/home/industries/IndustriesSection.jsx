import React, { useState } from "react";
import industries from "./IndustriesData";
import IndustryCard from "./IndustryCard";

export default function IndustriesSection() {
  const [expandedKey, setExpandedKey] = useState(null);

  return (
    <>
      <h2 className="text-3xl mt-8 font-serif text-center">Game-changing solutions tailored for every sector</h2>

      <div className="flex justify-center gap-6">
        {industries.map(industry => (
          <IndustryCard
            key={industry.key}
            industry={industry}
            expanded={expandedKey === industry.key}
            onHover={() => setExpandedKey(industry.key)}
            onLeave={() => setExpandedKey(null)}
          />
        ))}
      </div>
    </>
  );
}
