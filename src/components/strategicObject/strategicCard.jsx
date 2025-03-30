import React from "react";

export default function StrategicCard({ icon, title, description }) {
    return (
        <div className="border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold">
                <i className={`${icon} text-blue-500 mr-2`}></i>
                {title}
            </h2>
            <p className="mt-6">{description}</p>
        </div>
    );
}
