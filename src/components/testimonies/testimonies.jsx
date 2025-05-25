import testimonies from "../../utilities/json/testimonies.json";
import TestimonyCard from "./testimonyCard";
import { motion } from "framer-motion";

export default function Testimonies() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}       // Estado inicial: invisible y abajo
      whileInView={{ opacity: 1, y: 0 }}    // Cuando entra en pantalla: visible y posición normal
      transition={{ duration: 1.5 }}           // Duración de la animación 1.5 segundo
      viewport={{ once: true }}              // Se anima solo una vez
    >
      <div id="testimonies" className="flex flex-col items-center pt-25 pb-5 bg-[#0d0218]">
        <div className="text-center">
          <h1 className="text-5xl m-2 max-w-2xl text-center">
            Un Método Probado para
          </h1>
          <h1 className="text-5xl m-2 max-w-2xl text-center bg-gradient-to-r from-white to-[rgba(104,22,187,0.8)] bg-clip-text text-transparent leading-normal">
            Resultados Garantizados
          </h1>

          <p className="max-w-2xl mt-10">
            Descubre cómo hemos ayudado a empresas líderes a transformar sus operaciones y alcanzar nuevos niveles de excelencia.
          </p>
        </div>

        {testimonies.map((testimony) => (
          <TestimonyCard
            key={testimony.id}
            title={testimony.title}
            company={testimony.company}
            image={testimony.image}
            description={testimony.description}
            results={testimony.results}
          />
        ))}
      </div>
    </motion.div>
  );
}
