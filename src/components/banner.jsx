// Importación de módulos de Swiper y estilos CSS necesarios
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import slides from "../utilities/json/slides.json"; // Importa los datos del slider desde un archivo JSON
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../App.css";

export default function BannerContent() {
  // Función para abrir un enlace de Calendly en una nueva pestaña
  const openGerenciaOprocess = () => {
    window.open("https://calendly.com/gerencia-oprocesss/30min");
  };
  return (
    // Componente Swiper para crear el carrusel de imágenes
    <Swiper
      modules={[Navigation, Pagination, Autoplay]} // Módulos habilitados: navegación, paginación y auto-reproducción
      navigation // Activa los botones de navegación (adelante/atrás)
      pagination={{ clickable: true }} // Activa la paginación y permite hacer clic en los indicadores
      autoplay={{ delay: 4000 }} // Configura el auto-reproducción con un retraso de 4 segundos
      loop={true} // Permite que el carrusel sea infinito
      className="w-full rounded-xl mt-15" // Aplica estilos con Tailwind CSS
    >

      {/* Mapea cada slide desde el JSON y los convierte en diapositivas dinámicas */}
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">

          {/* Imagen del slide */}
          <img
            src={slide.image} // URL de la imagen desde el JSON
            alt={`Slide ${index + 1}`} // Texto alternativo para accesibilidad
            className="h-[500px] w-full object-cover rounded-xl" // Estilos de Tailwind para tamaño y bordes redondeados
          />

          {/* Superposición oscura con contenido centrado */}
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">

            {/* Título del slide */}
            <h1 className="text-white text-3xl md:text-4xl font-bold mb-2">
              {slide.title}
            </h1>

            {/* Descripción del slide */}
            <p className="text-white text-lg opacity-80 mb-4">
              {slide.description}
            </p>

            <button
              onClick={openGerenciaOprocess}
              className="btn-border-glow px-4 py-2 text-white bg-[#6816bb] rounded-lg relative z-10"
            >
              Solicita Nuestros Servicios
            </button>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
