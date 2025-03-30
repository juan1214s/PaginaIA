import React from "react";
import aboutInfo from "../../utilities/json/aboutInformation.json"; 
import AboutCard from "./aboutCard"; // Importamos el componente hijo

export default function AboutUs() {
    return (
        <div className="flex justify-center items-center flex-col mt-12">
            {/* Sección de introducción */}
            <div className="flex flex-col items-center text-center">
                <h1 className="text-3xl">{aboutInfo.title}</h1>
                <p className="max-w-2xl m-6">{aboutInfo.description}</p>
            </div>

            {/* Sección de tarjetas (Misión y Visión) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
                {aboutInfo.sections.map((section) => (
                    <AboutCard 
                        key={section.id} 
                        icon={section.icon} 
                        title={section.title} 
                        description={section.description} 
                    />
                ))}
            </div>
        </div>
    );
}
