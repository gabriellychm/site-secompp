// src/app/components/Evento/SectionEvento.tsx
"use client"; // Precisa ser client component por causa dos hooks e do Swiper

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Controller } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import type { Swiper as SwiperCore } from "swiper/types";

import "swiper/css";
import "swiper/css/navigation";

import EventoHeader from "./EventoHeader";
import EventoCard from "./EventoCard";
import { Evento } from "@/data/events";

interface SectionEventoProps {
  pageTitle: "MINICURSOS" | "PALESTRAS";
  dayOfWeek: string;
  eventos: Evento[];
  // Cores para diferenciar as seções
  headerBgColor: string;
  headerTextColor: string;
  bgColor: string;
}

export default function SectionEvento({
  pageTitle,
  dayOfWeek,
  eventos,
  headerBgColor,
  headerTextColor,
  bgColor,
}: SectionEventoProps) {
  const [mainSwiper, setMainSwiper] = useState<SwiperCore | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const searchParams = useSearchParams();

  // Efeito para ir para o slide correto quando a página carrega
  useEffect(() => {
    const initialSlideId = searchParams.get("id");
    if (initialSlideId && mainSwiper) {
      const slideIndex = parseInt(initialSlideId, 10);
      if (!isNaN(slideIndex) && slideIndex < eventos.length) {
        mainSwiper.slideToLoop(slideIndex); // slideToLoop para funcionar com o loop
      }
    }
  }, [mainSwiper, searchParams, eventos.length]);

  return (
    <div
      className={`min-h-screen w-full flex flex-col relative overflow-x-hidden`}
      style={{ backgroundColor: bgColor }}
    >
      <EventoHeader
        dayOfWeek={dayOfWeek}
        pageTitle={pageTitle}
        bgColor={headerBgColor}
        textColor={headerTextColor}
      />
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center lg:justify-between p-4 md:p-10 relative">
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <h1 className="text-6xl sm:text-8xl lg:text-[180px] font-black text-black/10 select-none text-center break-words">
            {pageTitle}
          </h1>
        </div>
        <div className="w-full max-w-md lg:max-w-none lg:w-5/12 z-10">
          <Swiper
            modules={[Navigation, A11y, Controller]}
            controller={{ control: thumbsSwiper }}
            onSwiper={setMainSwiper}
            slidesPerView={1}
            spaceBetween={50}
            loop={true}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
          >
            {eventos.map((evento, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <EventoCard {...evento} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 lg:mt-0 lg:w-auto lg:absolute lg:bottom-10 lg:right-10 z-10">
          <div className="flex items-center space-x-4">
            <button className="custom-prev text-black p-2 rounded-full hover:bg-black/20 transition-colors">
              <FaChevronLeft size={24} />
            </button>
            <button className="custom-next text-black p-2 rounded-full hover:bg-black/20 transition-colors">
              <FaChevronRight size={24} />
            </button>
          </div>

          <div className="w-full max-w-xs sm:max-w-none sm:w-[25rem]">
            <Swiper
              modules={[Controller, A11y]}
              controller={{ control: mainSwiper }}
              onSwiper={setThumbsSwiper}
              slidesPerView={2}
              spaceBetween={10}
              loop={true}
              watchSlidesProgress={true}
              slideToClickedSlide={true}
              className="thumbs-swiper"
            >
              {eventos.map((evento, index) => (
                <SwiperSlide
                  key={index}
                  className="opacity-50 transition-opacity"
                >
                  <div className="bg-gray-500/50 rounded-lg flex flex-col items-center justify-center w-full max-w-70 h-40 mx-auto sm:h-56 lg:h-[17.5rem]">
                    <span className="font-bold text-white text-sm text-center">
                      <img src={evento.imagemUrl} alt={evento.title}/>
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
