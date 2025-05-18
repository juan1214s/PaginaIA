import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

// Función para hacer scroll suave hasta una sección específica
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // Estado del menú

  return (
    <header className="fixed top-0 left-0 w-full shadow-md tracking-wide z-50 bg-custom-dark">
      {/* Barra de navegación */}
      <div className="flex items-center justify-between px-10 py-3 min-h-[65px]">

        {/* Logo de la empresa */}
        <Link to="/">
          <img
            src="../img/icon.png"
            alt="logo"
            className="w-20"
          />
        </Link>

        {/* Botón de menú hamburguesa para móviles */}
        <button
          className="sm:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        {/* Menú de navegación */}
        <nav
          className={`absolute top-[65px] left-0 w-full .bg-custom-dark  shadow-md sm:shadow-none sm:relative sm:top-0 sm:w-auto sm:flex ${menuOpen ? "block" : "hidden"
            } sm:flex-row sm:gap-5 flex flex-col items-center sm:items-center sm:space-x-6`}
        >
          <button onClick={() => scrollToSection("servicios")} className="py-3 sm:py-0">
            <span className="hover:text-[#6816bb] text-slate-50 font-medium text-[15px] cursor-pointer">
              Servicios
            </span>
          </button>

          <button onClick={() => scrollToSection("aboutUs")} className="py-3 sm:py-0">
            <span className="hover:text-[#6816bb] text-slate-50 font-medium text-[15px] cursor-pointer">
              Sobre Nosotros
            </span>
          </button>
          {/* 
          <Link
            to="/testimonies"
            className="py-3 sm:py-0 hover:text-[#6816bb] text-slate-50 font-medium text-[15px]"
          >
            Testimonios
          </Link>

          <Link
            to="/whoWeAre"
            className="py-3 sm:py-0 hover:text-[#6816bb] text-slate-50 font-medium text-[15px]"
          >
            Más Sobre Nosotros
          </Link> */}
        </nav>
      </div>
    </header>
  );
}
