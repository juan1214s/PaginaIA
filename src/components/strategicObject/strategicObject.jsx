import React from "react";
import "../../App.css";
import CarouselStrategicObjt from "../carouselStrategicObj";
import strategicObjectives from "../../utilities/json/strategicObjectInformation.json";
import StrategicCard from "./strategicCard"; // Importamos el componente hijo

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

            {/* Sección de tarjetas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
                {strategicObjectives.map((objective) => (
                    <StrategicCard 
                        key={objective.id} 
                        icon={objective.icon} 
                        title={objective.title} 
                        description={objective.description} 
                    />
                ))}
            </div>
        </div>
    );
}
