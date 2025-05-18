import AboutUs from "../aboutUs/aboutUs";
import BannerContent from "../banner";
import Services from "../services/services";
import StrategicObject from "../strategicObject/strategicObject";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen background">
            <div className="mx-5">
                <BannerContent />
                <Services />
                <AboutUs />
                {/* <StrategicObject /> */}
            </div>
        </div>
    );
}
