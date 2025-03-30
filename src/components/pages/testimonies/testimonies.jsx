import testimonies from "../../../utilities/json/testimonies.json";
import TestimonyCard from "./testimonyCard";

export default function Testimonies() {
  return (
    <div className="flex flex-col items-center mt-5 mb-5">
      <div className="text-center">
        <h1 className="text-3xl m-2">Casos de Éxito</h1>
        <p className="max-w-2xl m-2">
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
  );
}
