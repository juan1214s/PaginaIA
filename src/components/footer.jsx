import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-dark text-white pt-12 pb-6 px-10 tracking-wide">
            <div className="max-w-screen-xl mx-auto text-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo */}
                    <div className="flex justify-center">
                        <a href="/">
                            <img src="../img/icon.png" alt="logo" className="w-48" />
                        </a>
                    </div>

                    {/* Redes sociales */}
                    <div className="flex justify-center">
                        <ul className="flex space-x-6">
                            <li>
                                <a href="https://www.instagram.com/oprocess.systems/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} className="text-gray-300 hover:text-[#6816bb] text-2xl" />
                                </a>
                            </li>
                            <li>
                                <a href="https://api.whatsapp.com/message/LL4KM7NN5MTVE1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faWhatsapp} className="text-gray-300 hover:text-[#6816bb] text-2xl" />
                                </a>
                            </li>
                                                        <li>
                                <a href="https://www.facebook.com/Oprocess.systems" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} className="text-gray-300 hover:text-[#6816bb] text-2xl" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Información */}
                    <div className="text-center">
                        <h4 className="mb-6 text-lg font-semibold">Información</h4>
                        <ul className="space-y-4">
                            <Link>
                            
                            </Link>
                            <li><a href="/whoWeAre" className="text-gray-400 hover:text-[#6816bb] text-sm">Más sobre nosotros</a></li>
                            <li><a href="/" className="text-gray-400 hover:text-[#6816bb] text-sm">Términos &amp; Condiciones</a></li>
                            <li><a href="/" className="text-gray-400 hover:text-[#6816bb] text-sm">Política y privacidad</a></li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div className="text-center">
                        <h4 className="mb-6 text-lg font-semibold">Contacto</h4>
                        <p className="text-gray-400 text-sm">📧 gerencia@oprocesss.com</p>
                        <p className="text-gray-400 text-sm">📞 +57 312 345 6789</p>
                    </div>
                </div>

                <p className="text-gray-400 text-sm mt-10 text-center">© 2025 Oprocess Systems. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}
