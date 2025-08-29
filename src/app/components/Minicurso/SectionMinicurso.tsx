// SectionMinicurso.tsx
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Controller } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import type { Swiper as SwiperCore } from "swiper/types";

import "swiper/css";
import "swiper/css/navigation";

import MinicursoHeader from "./MinicursoHeader";
import MinicursoCard from "./MinicursoCard";

const courses = [
  {
    title: "Minicurso de React",
    horario: "14:00 - 18:00",
    ministrante: "João da Silva",
    local: "Laboratório 5",
    preRequisito: "Conhecimentos básicos de HTML e JavaScript.",
    descricao:
      "Aprenda os fundamentos de React e crie sua primeira aplicação interativa do zero.",
    material: "Notebook com Node.js instalado.",
    contato: "joao.silva@email.com",
  },
  {
    title: "Introdução a Python para Ciência de Dados",
    horario: "8:00 - 12:00",
    ministrante: "Bruno Augusto Furquim, e Julio Santana",
    local: "Laboratório 5",
    descricao:
      "Aprenda os fundamentos de Python e os utilize para análise de dados e visualização.",
    material: "Notebook com Node.js instalado.",
    contato: "bruno.furquim@unesp.br, julio.santana@unesp.br",
  },
  { title: "Minicurso sem Infos" },
  {
    title: "Design de UI/UX com Figma",
    horario: "19:00 - 22:00",
    ministrante: "Ana Pereira",
    local: "Online",
    descricao: "Crie interfaces incríveis e protótipos interativos com Figma.",
  },
];

export default function SectionMinicurso() {
  const [mainSwiper, setMainSwiper] = useState<SwiperCore | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

  return (
    <div className="bg-[#d9d9d9] min-h-screen w-full flex flex-col relative overflow-x-hidden">
      <MinicursoHeader
        dayOfWeek="Quinta-feira"
        pageTitle="MINICURSOS"
        // bgColor="#fcfcff"
        // textColor="#0e1526"
      />
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center lg:justify-between p-4 md:p-10 relative">
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <h1 className="text-6xl sm:text-8xl lg:text-[180px] font-black text-black/10 select-none text-center break-words">
            Imagem das palestras
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
            {courses.map((curso, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <MinicursoCard {...curso} number={index + 1} />
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
            {" "}
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
              {courses.map((curso, index) => (
                <SwiperSlide
                  key={index}
                  className="opacity-50 transition-opacity"
                >
                  <div className="bg-gray-500/50 rounded-lg flex flex-col items-center justify-center w-full max-w-70 h-40 mx-auto sm:h-56 lg:h-[17.5rem]">
                    <span className="font-bold text-white text-sm text-center">
                      IMAGEM DO MINICURSO
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
