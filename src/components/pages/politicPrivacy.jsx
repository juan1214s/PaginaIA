import React from "react";
import politicData from "../../utilities/json/politicPrivacy.json";

export default function PoliticPrivacy() {
  return (
    <div className="bg-[#0d0218] pt-15 min-h-screen px-6 py-10 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center">{politicData.title}</h1>
        <h2 className="text-2xl text-center font-semibold mb-8">{politicData.company}</h2>

        {politicData.sections.map((section, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-bold mb-2">{section.title}</h3>
            {section.content.map((paragraph, i) => (
              <p key={i} className="mb-2 whitespace-pre-line">{paragraph}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
