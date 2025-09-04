// src/app/components/presentation/EventSlider.tsx
"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Pagination } from "swiper/modules";
import { Evento } from "@/data/events";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface EventSliderProps {
  title: string;
  eventos: Evento[];
  eventType: "minicursos" | "palestras";
  bgColor: string;
  textColor: string;
}

export default function EventSlider({
  title,
  eventos,
  eventType,
  bgColor,
  textColor,
}: EventSliderProps) {
  const sectionClasses = `w-full h-dvh flex flex-col items-center justify-center ${bgColor}`;
  const textClasses = `${textColor}`;
  const swiperNavColor = eventType === "minicursos" ? "#FFB300" : "#FFB300";
  const swiperPagiColor = eventType === "minicursos" ? "#FFB300" : "#FFB300";

  return (
    <div className={sectionClasses}>
      <div className="text-center mb-10">
        <h2 className={`text-4xl font-bold uppercase ${textClasses}`}>
          {title}
        </h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        initialSlide={3}
        centeredSlides
        loop={true}
        navigation
        pagination={{ clickable: true }}
        className="w-[80%] h-90"
        style={
          {
            "--swiper-navigation-color": swiperNavColor,
            "--swiper-pagination-color": swiperPagiColor,
            "--swiper-pagination-bullet-inactive-color": "#fff",
            "--swiper-pagination-bottom": "0px",
          } as React.CSSProperties
        }
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 50 },
        }}
      >
        {eventos.map((evento, index) => (
          <SwiperSlide key={index} className="self-stretch">
            <Link href={`/${eventType}?id=${index}`} className="h-full block">
              <div className="h-full w-full text-left bg-white rounded-2xl overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300 shadow-lg">
                <div className="bg-[#FFB300] text-center flex justify-center items-center py-4 px-2">
                  <p className="font-bold text-xl text-[#0E1526]">
                    {evento.horario || "Horário a definir"}
                  </p>
                </div>
                <div className="text-black text-center flex flex-col justify-center items-center p-4 flex-grow">
                  <h3 className="text-lg font-bold mb-2">{evento.title}</h3>
                  <p className="text-sm text-gray-600">
                    {evento.ministrante || "Ministrante a definir"}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
