import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

export default function AboutCard({ icon, title, description }) {
  return (
    <div className="mb-10 max-w-md mx-auto bg-[#13072e] text-white shadow-2xl rounded-xl p-6 flex flex-col items-center text-center">
      {/* Icono */}
      {icon && <i className={`${icon} text-white text-5xl mb-4`}></i>}

      {/* Título */}
      <h2 className="text-2xl font-semibold text-white">{title}</h2>

      {/* Descripción */}
      <p className="mt-4 text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
}
