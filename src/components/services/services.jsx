import React from "react";
import "../../App.css"; 
import servicesData from "../../utilities/json/servicesInformation.json";
import ServiceCard from "../services/servicesCard"; // Importamos el componente hijo

export default function Services() {
    return (
        <div id="servicios" className="flex justify-center items-center flex-col mt-10">
            <div className="flex flex-col items-center text-center mt-6">
                <h1 className="text-3xl">Nuestros Servicios</h1>
                <p className="text-center max-w-2xl m-6">
                    Ofrecemos soluciones integrales para optimizar sus procesos empresariales y potenciar su transformación digital.
                </p>
            </div>

            {/* Contenedor de las tarjetas de servicio */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
                {servicesData.map((service) => (
                    <ServiceCard 
                        key={service.id}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                        details={service.details}
                    />
                ))}
            </div>
        </div>
    );
}
