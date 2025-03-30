import whoWeAreInfo from "../../../utilities/json/whoWeAreInfo.json"
import WhoWeAreCard from "./whoWeAreCard";

export default function WhoWeAre() {
  return (
    <div className="flex justify-center items-center flex-col mt-12 mx-10">
    {/* Sección de introducción */}
    <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl">{whoWeAreInfo.title}</h1>
        <p className="max-w-2xl m-6">{whoWeAreInfo.description}</p>
    </div>

    {/* Sección de tarjetas (Misión y Visión) */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
        {whoWeAreInfo.sections.map((section) => (
            < WhoWeAreCard
                key={section.id} 
                icon={section.icon} 
                title={section.title} 
                description={section.description} 
            />
        ))}
    </div>
</div>
    );
}