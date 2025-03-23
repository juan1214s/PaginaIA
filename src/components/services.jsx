import React from "react";
import "../App.css";

export default function Services() {
    return (
        <div className="flex justify-center items-center flex-col mt-10">
            <div className="flex flex-col items-center text-center mt-6">
                <h1 className="text-4xl">Nuestros Servicios</h1>
                <p className="text-center max-w-2xl m-6">
                    Ofrecemos soluciones integrales para optimizar sus procesos empresariales y potenciar su transformación digital.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
                {/* Tarjeta 1 */}
                <div className="border border-gray-300 shadow-lg rounded-lg p-6 flex flex-col items-center text-center max-w-md mx-auto">
                    <i className="bi bi-clipboard-check text-blue-500 text-5xl mb-4"></i>
                    <h2 className="text-xl font-semibold">Levantamiento de procesos</h2>
                    <p className="mt-4 text-gray-600">
                        Analizamos y documentamos sus procesos empresariales para identificar oportunidades de mejora y optimización.
                    </p>
                    <div className="flex flex-col mt-4">
                        <p className="mb-2"><i className="bi bi-check text-green-500"></i> Mapeo de procesos end-to-end</p>
                        <p className="mb-2"><i className="bi bi-check text-green-500"></i> Análisis de eficiencia operativa</p>
                        <p className="mb-2"><i className="bi bi-check text-green-500"></i> Identificación de cuellos de botella</p>
                        <p className="mb-2"><i className="bi bi-check text-green-500"></i> Documentación detallada de procedimientos</p>
                    </div>
                </div>

                {/* Tarjeta 2 */}
                <div className="border border-gray-300 shadow-lg rounded-lg p-6 flex flex-col items-center text-center max-w-md mx-auto">
                    <i className="bi bi-boxes text-blue-500 text-5xl mb-4"></i>
                    <h2 className="text-xl font-semibold">Gestión de la Calidad</h2>
                    <p className="mt-4 text-gray-600">
                        Implementamos sistemas de gestión de calidad para garantizar la excelencia en sus operaciones.
                    </p>
                    <div className="flex flex-col mt-4">
                        <p className="mb-2"><i className="bi bi-check text-green-500"></i> Implementación de ISO 9001</p>
                        <p className="mb-2"><i className="bi bi-check text-green-500"></i> Auditorías de calidad</p>
                        <p className="mb-2"><i className="bi bi-check text-green-500"></i> Mejora continua</p>
                        <p className="mb-2"><i className="bi bi-check text-green-500"></i> Capacitación en gestión de calidad</p>
                    </div>
                </div>

                {/* Tarjeta 3 */}
                <div className="border border-gray-300 shadow-lg rounded-lg p-6 flex flex-col items-center text-center max-w-md mx-auto">
                    <i className="bi bi-robot text-blue-500 text-5xl mb-4"></i>
                    <h2 className="text-xl font-semibold">Automatización con IA</h2>
                    <p className="mt-4 text-gray-600">
                        Desarrollamos soluciones de automatización inteligente para optimizar sus procesos empresariales.
                    </p>
                    <div className="flex flex-col mt-4">
                        <p className="mb-2"><i className="bi bi-check text-green-500"></i> Automatización de procesos robóticos (RPA)</p>
                        <p className="mb-2"><i className="bi bi-check text-green-500"></i> Implementación de Machine Learning</p>
                        <p className="mb-2"><i className="bi bi-check text-green-500"></i> Análisis predictivo</p>
                        <p className="mb-2"><i className="bi bi-check text-green-500"></i> Optimización de flujos de trabajo</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
