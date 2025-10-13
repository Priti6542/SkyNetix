


import React, { useState } from "react";
import { CardData } from "./CardData.jsx";

function CardSection({ setShowServicesPopup }) {
  const { heading, description } = CardData[0];
  const cardItems = CardData.slice(1);

  return (
    <section className="advertisers-service-sec w-[100%] py-12 px-4 sm:px-8 lg:px-20">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">
          {heading.split(" ")[0]}{" "}
          <span className="text-pink-600">{heading.split(" ").slice(1).join(" ")}</span>
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto text-base">{description}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  justify-items-center w-[100%]">
        {cardItems.map((item, idx) => (
          <ServiceCard
            key={idx}
            logo={item.logo}
            icon={item.icon} // pass React Icon
            title={item.title}
            description={item.description}
            openServices={() => setShowServicesPopup(true)}
          />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ logo, icon, title, description, openServices }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`Open services popup for ${title}`}
      onClick={openServices}
      onKeyDown={e => (e.key === "Enter" || e.key === " ") && openServices()}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative w-[100%] max-w-xs bg-white rounded-bl-[60px] rounded-tr-[60px] shadow-lg p-8 
        cursor-pointer flex flex-col items-center justify-start transition-all duration-500 overflow-hidden min-h-[370px]
        border-2 border-gray-200 "
      style={{
        boxShadow: `
          0 6px 10px rgba(28, 5, 18, 0.3), 
          0 10px 30px rgba(128, 0, 255, 0.2), 
          0 30px 40px rgba(0, 200, 255, 0.1)
        `
      }}
    >
      {/* Hover Gradient */}
      <div
        className="absolute inset-0 z-0 transition-all duration-500"
        style={{
          background: hover ? 'linear-gradient(to bottom, #bc84eaff, #ff1783)' : 'none',
          opacity: hover ? 0.8 : 1,
        }}
      />

      {/* Logo */}
      {logo && (
        <img
          src={logo}
          alt={`${title} logo`}
          className="w-14 h-14 rounded-full object-contain mb-4 z-10 bg-white border p-2 shadow"
          style={{ boxShadow: hover ? "0 0 12px #ff1783" : "0 0 6px #eee" }}
        />
      )}

      {/* React Icon */}
      {icon && (
        <div
          className={`w-12 h-12 mb-4 rounded-full flex items-center justify-center bg-white shadow transition-all duration-300 z-10 transform ${
            hover ? "scale-110" : ""
          }`}
          style={{ color: hover ? "#0dcaf0" : "rgb(255, 23, 131)" }}
        >
          {icon}
        </div>
      )}

      {/* Title */}
      <h3
        className={`font-semibold text-lg mb-2 text-center transition-colors duration-300 z-10 ${
          hover ? "text-white" : "text-[#1f194c]"
        }`}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={`text-sm text-[#575a7b] text-center transition-colors duration-300 z-10 ${
          hover ? "text-white/90" : ""
        }`}
      >
        {description}
      </p>
    </div>
  );
}

export default CardSection;
