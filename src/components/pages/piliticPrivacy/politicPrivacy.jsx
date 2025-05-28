import React from "react";
import politicData from "../../../utilities/json/politicPrivacy.json";
import PoliticCard from "./PoliticCard";

export default function PoliticPrivacy() {
  return (
    <div className="bg-[#0d0218] pt-15 min-h-screen px-6 py-10 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center">{politicData.title}</h1>
        <h2 className="text-2xl text-center font-semibold mb-8">{politicData.company}</h2>

        {politicData.sections.map((section, index) => (
          <PoliticCard key={index} title={section.title} content={section.content} />
        ))}
      </div>
    </div>
  );
}
