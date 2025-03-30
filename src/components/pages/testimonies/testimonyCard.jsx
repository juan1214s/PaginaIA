export default function TestimonyCard({ title, company, image, description, results }) {
    return (
      <div className="flex flex-col sm:flex-row items-center mt-7 max-w-6xl mx-auto bg-white shadow-lg p-6 rounded-lg">
        {/* Imagen */}
        <div className="w-full sm:w-1/2">
          <img src={image} alt={title} className="w-full h-auto rounded-lg" />
        </div>
  
        {/* Información */}
        <div className="w-full sm:w-1/2 pl-5 mt-5 sm:mt-0">
          <h2 className="text-2xl font-semibold">
            <i className="bi bi-trophy text-blue-500"></i> {title}
          </h2>
          <h3 className="mt-2 text-lg font-medium">{company}</h3>
          <p className="max-w-lg mt-5 text-gray-700">{description}</p>
  
          {/* Resultados */}
          <h3 className="mt-5 text-xl font-semibold">
            <i className="bi bi-star text-blue-500"></i> Resultados destacados
          </h3>
          {results.map((result, index) => (
            <p key={index} className="mt-2 text-gray-700">
              <i className="bi bi-arrow-up-right text-blue-500"></i> {result}
            </p>
          ))}
        </div>
      </div>
    );
  }
  