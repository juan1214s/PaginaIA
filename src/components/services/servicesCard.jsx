import React from "react";

export default function ServiceCard({ icon, title, description, details }) {
    return (
        <div className="border border-gray-300 shadow-lg rounded-lg p-6 flex flex-col items-center text-center max-w-md mx-auto">
            {/* Icono del servicio */}
            <i className={`${icon} text-blue-500 text-5xl mb-4`}></i>

            {/* Título del servicio */}
            <h2 className="text-xl font-semibold">{title}</h2>

            {/* Descripción corta del servicio */}
            <p className="mt-4 text-gray-600">{description}</p>

            {/* Lista de detalles */}
            <div className="flex flex-col mt-4">
                {details.map((detail, index) => (
                    <p key={index} className="mb-2">
                        <i className="bi bi-check text-green-500"></i> {detail}
                    </p>
                ))}
            </div>
        </div>
    );
}
