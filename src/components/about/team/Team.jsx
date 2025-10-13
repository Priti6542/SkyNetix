import React from "react";
import teamData from "./TeamData";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-12">
        Meet Our Team
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {teamData.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
};

export default Team;
