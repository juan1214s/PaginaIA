import React from "react";
import aboutInfo from "../utilities/json/aboutInformation.json"; // Importa el archivo JSON con la información sobre la empresa.

export default function AboutUs() {
    return (
        // Contenedor principal que centra el contenido en la pantalla
        <div className="flex justify-center items-center flex-col mt-12">
            
            {/* Sección de introducción con el título y descripción */}
            <div className="flex flex-col items-center text-center">
                <h1 className="text-3xl">{aboutInfo.title}</h1> {/* Muestra el título desde el JSON */}
                <p className="text-center max-w-2xl m-6">{aboutInfo.description}</p> {/* Muestra la descripción desde el JSON */}
            </div>

            {/* Sección que contiene la misión y visión en un grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
                {aboutInfo.sections.map((section) => ( // Mapea las secciones (Misión y Visión) desde el JSON
                    <div 
                        key={section.id} // Clave única para React
                        className="border border-gray-300 shadow-lg rounded-lg p-6"
                    >
                        {/* Título de la sección con su respectivo icono */}
                        <h1 className="text-3xl">
                            <i className={section.icon}></i> {section.title} {/* Usa la clase de icono del JSON */}
                        </h1>
                        <p className="mt-6">{section.description}</p> {/* Muestra la descripción de la sección */}
                    </div>
                ))}
            </div>
        </div>
    );
}
