import "../../App.css";

export default function ServiceCard({ icon, title, description, details }) {
  return (
    <div className="card-glow max-w-md mx-auto flex flex-col items-center text-center">
      {/* Icono del servicio */}
      <i className={`${icon} text-white text-5xl mb-4`}></i>

      {/* Título del servicio */}
      <h2 className="text-xl font-semibold">{title}</h2>

      {/* Descripción corta del servicio */}
      <p className="mt-4">{description}</p>

      {/* Lista de detalles */}
      <div className="flex flex-col mt-4">
        {details.map((detail, index) => (
          <p key={index} className="mb-2 text-sm">
            <i className="bi bi-check text-white mr-2"></i> {detail}
          </p>
        ))}
      </div>
    </div>
  );
}
