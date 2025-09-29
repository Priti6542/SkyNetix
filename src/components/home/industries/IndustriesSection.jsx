import React, { useState } from "react";
import industries from "./IndustriesData";
import IndustryCard from "./IndustryCard";

export default function IndustriesSection() {
  const [expandedKey, setExpandedKey] = useState(null);

  return (
    <div className="flex gap-6">
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
  );
}
