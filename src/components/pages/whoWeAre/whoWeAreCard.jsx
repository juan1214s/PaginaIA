import React from "react";

export default function WhoWeAreCard({ icon, title, description }) {
    return (
        <div className="border border-gray-300 shadow-lg rounded-lg p-6">
            <h1 className="text-3xl">
                <i className={icon}></i> {title}
            </h1>
            <p className="mt-6">{description}</p>
        </div>
    );
}