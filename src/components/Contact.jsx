export default function Contact() {
  // Función para abrir un enlace de Calendly en una nueva pestaña
  const openGerenciaOprocess = () => {
    window.open("https://calendly.com/gerencia-oprocesss/30min");
  };
  return (
    <div className="bg-blue-600 mt-15 text-white py-12 px-8 text-center rounded-2xl shadow-lg max-8xl ">
      <h2 className="text-2xl sm:text-3xl font-bold mb-3">
        ¿Listo para transformar su empresa?
      </h2>
      <p className="text-sm mb-6 ">
        Contáctenos hoy mismo para descubrir cómo podemos ayudarle a optimizar
        sus procesos y alcanzar nuevos niveles de eficiencia.
      </p>


      <button
        onClick={openGerenciaOprocess} // Llama a la función para abrir Calendly al hacer clic
        className="bg-white text-black px-4 py-2 rounded-lg transition duration-300 hover:bg-white hover:text-black hover:shadow-lg hover:-translate-y-1"
      >
        Solicitar Consultoría
      </button>
    </div>
  );
}
