import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slides from "../utilities/json/strategicObjt.json"

export default function CarouselStrategicObjt() {
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop={true}
                className="w-full rounded-xl"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="relative">
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="h-[500px] w-full object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
                            <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">
                                {slide.title}
                            </h2>
                            <p className="text-white text-lg opacity-80 mb-4 max-w-2xl">
                                {slide.description}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}