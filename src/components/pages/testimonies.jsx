import testimonies from "../../utilities/json/testimonies.json"

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
                <div
                    key={testimony.id}
                    className="flex flex-col sm:flex-row items-center mt-7 max-w-6xl mx-auto bg-white shadow-lg p-6 rounded-lg"
                >
                    <div className="w-full sm:w-1/2">
                        <img src={testimony.image} alt={testimony.title} className="w-full h-auto rounded-lg" />
                    </div>

                    <div className="w-full sm:w-1/2 pl-5 mt-5 sm:mt-0">
                        <h2 className="text-2xl font-semibold">
                            <i className="bi bi-trophy text-blue-500"></i> {testimony.title}
                        </h2>
                        <h3 className="mt-2 text-lg font-medium">{testimony.company}</h3>
                        <p className="max-w-lg mt-5 text-gray-700">{testimony.description}</p>

                        <h3 className="mt-5 text-xl font-semibold">
                            <i className="bi bi-star text-blue-500"></i> Resultados destacados
                        </h3>
                        {testimony.results.map((result, index) => (
                            <p key={index} className="mt-2 text-gray-700">
                                <i className="bi bi-arrow-up-right text-blue-500"></i> {result}
                            </p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
