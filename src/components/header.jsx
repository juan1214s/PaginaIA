import React, { useState } from "react";
import "../App.css";

// Función para hacer scroll suave hasta una sección específica
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para abrir/cerrar menú

  return (
    <header className="shadow-md tracking-wide relative z-50">
      {/* Barra de navegación */}
      <div className="flex items-center justify-between px-10 py-3 bg-white min-h-[65px]">
        
        {/* Logo de la empresa */}
        <a href="#">
          <img
            src="https://readymadeui.com/readymadeui.svg"
            alt="logo"
            className="w-36"
          />
        </a>

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
          className={`absolute top-[65px] left-0 w-full bg-white shadow-md sm:shadow-none sm:relative sm:top-0 sm:w-auto sm:flex ${
            menuOpen ? "block" : "hidden"
          } sm:flex-row sm:gap-5 flex flex-col items-center sm:items-center sm:space-x-6`}
        >
          {/* Enlaces del menú */}
          <button onClick={() => scrollToSection("servicios")} className="py-3 sm:py-0">
            <a href="#" className="hover:text-blue-700 text-slate-900 font-medium text-[15px]">
              Servicios
            </a>
          </button>
          <button onClick={() => scrollToSection("objetivos")} className="py-3 sm:py-0">
            <a href="#" className="hover:text-blue-700 text-slate-900 font-medium text-[15px]">
              Objetivos Estratégicos
            </a>
          </button>
          <button onClick={() => scrollToSection("testimonios")} className="py-3 sm:py-0">
            <a href="#" className="hover:text-blue-700 text-slate-900 font-medium text-[15px]">
              Testimonios
            </a>
          </button>
          <button onClick={() => scrollToSection("informacion")} className="py-3 sm:py-0">
            <a href="#" className="hover:text-blue-700 text-slate-900 font-medium text-[15px]">
              ¿Quiénes Somos?
            </a>
          </button>
        </nav>
      </div>
    </header>
  );
}
