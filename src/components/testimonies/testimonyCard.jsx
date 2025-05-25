export default function TestimonyCard({ title, company, image, description, results }) {
    return (
      <div className="card-glow flex flex-col sm:flex-row items-center mt-7 max-w-6xl mx-auto bg-white shadow-lg p-6 rounded-lg">
        {/* Imagen */}
        <div className="w-full sm:w-1/2">
          <img src={image} alt={title} className="w-full h-auto rounded-lg" />
        </div>
  
        {/* Información */}
        <div className="w-full sm:w-1/2 pl-5 mt-5 sm:mt-0">
          <h2 className="text-2xl font-semibold">
            <i className="bi bi-trophy text-white"></i> {title}
          </h2>
          <h3 className="mt-2 text-lg font-medium">{company}</h3>
          <p className="max-w-lg mt-5 text-white">{description}</p>
  
          {/* Resultados */}
          <h3 className="mt-5 text-xl font-semibold">
            <i className="me-2 bi bi-star text-white"></i> Resultados destacados
          </h3>
          {results.map((result, index) => (
            <p key={index} className="mt-2 text-white">
              <i className="bi bi-arrow-up-right text-white"></i> {result}
            </p>
          ))}
        </div>
      </div>
    );
  }
  