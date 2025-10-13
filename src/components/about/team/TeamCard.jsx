import React, { useState, useRef } from "react";

const TeamCard = ({ member }) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative w-90 h-96 rounded-xl p-0.5 bg-white backdrop-blur-md text-gray-800 overflow-hidden shadow-lg cursor-pointer"
    >
      {/* Background gradient blur effect */}
      {visible && (
        <div
          className="pointer-events-none blur-xl bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 w-60 h-60 absolute z-0 transition-opacity duration-300 rounded-full"
          style={{ top: position.y - 120, left: position.x - 120 }}
        />
      )}

      {/* Card content */}
      <div className="relative z-10 bg-white p-6 h-full w-full rounded-[10px] flex flex-col items-center justify-center text-center">
        <img
          src={member.image}
          alt={member.name}
          className="w-24 h-24 rounded-full shadow-md my-4 object-cover"
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-1">{member.name}</h2>
        <p className="text-sm text-indigo-500 font-medium mb-4">{member.role}</p>
        <p className="text-sm text-gray-500 mb-4 px-4">{member.description}</p>

        {/* Social icons */}
        <div className="flex space-x-4 mb-4 text-xl text-indigo-600">
          <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="hover:-translate-y-0.5 transition">
            <i className="fa fa-github"></i>
          </a>
          <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:-translate-y-0.5 transition">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:-translate-y-0.5 transition">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
