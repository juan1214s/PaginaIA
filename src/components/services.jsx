import React from "react"; // Importamos React para poder utilizar componentes
import "../App.css"; // Importamos los estilos generales de la aplicación
import servicesData from "../utilities/json/servicesInformation.json"; // Importamos el JSON con la información de los servicios

export default function Services() {
    return (
        // Contenedor principal con un identificador "servicios" para anclaje y clases de TailwindCSS
        <div id="servicios" className="flex justify-center items-center flex-col mt-10">
            
            {/* Sección de encabezado con el título y la descripción general de los servicios */}
            <div className="flex flex-col items-center text-center mt-6">
                <h1 className="text-3xl">Nuestros Servicios</h1>
                <p className="text-center max-w-2xl m-6">
                    Ofrecemos soluciones integrales para optimizar sus procesos empresariales y potenciar su transformación digital.
                </p>
            </div>

            {/* Contenedor de las tarjetas de servicio en formato grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
                {/* Se recorre el JSON con map() para generar dinámicamente cada tarjeta de servicio */}
                {servicesData.map((service) => (
                    <div 
                        key={service.id} 
                        className="border border-gray-300 shadow-lg rounded-lg p-6 flex flex-col items-center text-center max-w-md mx-auto"
                    >
                        {/* Icono del servicio, usando la clase de Bootstrap Icons almacenada en el JSON */}
                        <i className={`${service.icon} text-blue-500 text-5xl mb-4`}></i>

                        {/* Título del servicio */}
                        <h2 className="text-xl font-semibold">{service.title}</h2>

                        {/* Descripción corta del servicio */}
                        <p className="mt-4 text-gray-600">{service.description}</p>

                        {/* Lista de detalles del servicio, generados dinámicamente */}
                        <div className="flex flex-col mt-4">
                            {service.details.map((detail, index) => (
                                <p key={index} className="mb-2">
                                    {/* Ícono de check verde indicando cada característica del servicio */}
                                    <i className="bi bi-check text-green-500"></i> {detail}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
