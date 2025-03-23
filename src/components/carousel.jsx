import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import slides from "../utilities/json/slides.json"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CarouselWithContent() {


  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      loop={true}
      className="w-full rounded-xl"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="h-[500px] w-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">
              {slide.title}
            </h2>
            <p className="text-white text-lg opacity-80 mb-4">
              {slide.description}
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-black px-4 py-2 rounded-lg">
                Mas informacion
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
