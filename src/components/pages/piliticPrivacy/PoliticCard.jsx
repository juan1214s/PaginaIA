import React from "react";

export default function PoliticCard({ title, content }) {
  return (
    <div className="mb-8 bg-[#1a0b2e] p-6 rounded-2xl shadow-lg border border-[#2d1b4f]">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      {content.map((paragraph, index) => (
        <p key={index} className="mb-3 text-justify whitespace-pre-line">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
