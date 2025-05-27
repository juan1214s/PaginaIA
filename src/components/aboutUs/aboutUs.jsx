import React from "react";
import aboutInfo from "../../utilities/json/aboutInformation.json"; 
import AboutCard from "./aboutCard"; // Importamos el componente hijo
import { motion } from "framer-motion";

export default function AboutUs() {
    return (
        <motion.div
          id="aboutUs"
          className="flex justify-center items-center flex-col pt-30 md:pt-25 pb-10 bg-[#0d0218]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
            {/* Sección de introducción */}
            <div className="flex flex-col items-center text-center">
                <h1 className="text-5xl">{aboutInfo.title}</h1>
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
        </motion.div>
    );
}
