import React from "react";  // Importa React para poder utilizar JSX.
import "../App.css";  // Importa los estilos de la aplicación.
import CarouselStrategicObjt from "./carouselStrategicObj";  // Importa el componente del carrusel de objetivos estratégicos.
import strategicObjectives from "../utilities/json/strategicObjectInformation.json";  // Importa los datos desde un archivo JSON externo.

/**
 * Componente que muestra los Objetivos Estratégicos de la empresa.
 * Incluye un carrusel y una lista de objetivos cargados dinámicamente desde un archivo JSON.
 */
export default function StrategicObject() {
    return (
        <div id="objetivos" className="flex flex-col mt-10">
            {/* Sección del carrusel */}
            <div className="mt-5 mb-5">
                <CarouselStrategicObjt />
            </div>

            {/* Título de la sección */}
            <div className="flex justify-start w-full">
                <h3 className="text-2xl">
                    <i className="bi bi-graph-up text-blue-500"></i> Objetivos Estratégicos
                </h3>
            </div>

            {/* Sección que muestra los objetivos estratégicos en una cuadrícula */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
                {strategicObjectives.map((objective) => (
                    // Cada objetivo se muestra en una tarjeta con borde y sombra
                    <div key={objective.id} className="border border-gray-300 shadow-lg rounded-lg p-6">
                        <h2 className="text-xl font-semibold">
                            {/* Icono y título del objetivo */}
                            <i className={`${objective.icon} text-blue-500 mr-2`}></i>
                            {objective.title}
                        </h2>
                        {/* Descripción del objetivo */}
                        <p className="mt-6">{objective.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
