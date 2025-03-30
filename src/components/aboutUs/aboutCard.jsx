import React from "react";
import { Link } from "react-router-dom";


export default function AboutCard({ icon, title, description }) {
    return (
        <div className="border border-gray-300 shadow-lg rounded-lg p-6">
            <h1 className="text-3xl">
                <i className={icon}></i> {title}
            </h1>
            <p className="mt-6">{description}</p>
            {/* Botón para ver más */}
            <Link
                to="/whoWeAre"
                className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
                Conócenos Más
            </Link>
        </div>
    );
}
