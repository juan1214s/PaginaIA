import AboutUs from "../aboutUs/aboutUs";
import BannerContent from "../banner";
import Services from "../services/services";
import Testimoniees from "../testimonies/testimonies"
import WhatsappFixedIcon from "../whatsapp";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen background">
            <div className="mx-5">
                <BannerContent />
                <Services />
                <AboutUs />
                <Testimoniees />
                <WhatsappFixedIcon />
            </div>
        </div>
    );
}
