import React from "react";
import "../App.css";

export default function AboutUs() {
    return (
        <div className="flex justify-center items-center flex-col mt-12">
            <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl">Sobre Nosotros</h1>
                <p className="text-center max-w-2xl m-6">
                    Somos una empresa líder en consultoría empresarial, especializada en optimización de procesos,
                    gestión de calidad y soluciones de IA para impulsar la transformación digital.
                </p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
                <div className="border border-gray-300 shadow-lg rounded-lg p-6">
                    <h1 className="text-4xl"><i class="bi bi-record-circle-fill text-blue-500 "></i> Misión</h1>
                    <p className="mt-6">
                        Nuestra misión es transformar organizaciones mediante la optimización de procesos
                        y la implementación de soluciones tecnológicas innovadoras, garantizando la excelencia
                        operativa y el crecimiento sostenible de nuestros clientes.
                    </p>
                </div>

                <div className="border border-gray-300 shadow-xl rounded-lg p-6">
                    <h1 className="text-4xl"> <i class="bi bi-vinyl text-blue-500 "></i> Visión</h1>
                    <p className="mt-6">
                        Ser reconocidos como referente líder en consultoría de procesos y transformación digital
                        en Latinoamérica, destacando por nuestra innovación, excelencia y compromiso con el éxito
                        de nuestros clientes.
                    </p>
                </div>
            </div>
        </div>
    );
}
