import AboutUs from "../aboutUs/aboutUs";
import BannerContent from "../banner";
import Contact from "../Contact";
import Services from "../services/services";
import StrategicObject from "../strategicObject/strategicObject";

export default function Home() {
    return (
        <div className="m-5 flex flex-col min-h-screen">
            <BannerContent />
            <AboutUs />
            <Contact />
            <Services />
            <StrategicObject />
        </div>
    );
}
