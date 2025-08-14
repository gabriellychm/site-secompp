import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  {
    title: "Minicurso sem Infos",
  },
];

export default function SectionMinicurso() {
  return (
    <div className="bg-[#d9d9d9] h-screen">
      <MinicursoHeader dayOfWeek={"Quarta-Feira"} pageTitle={"Minicursos"} />

      <div className="p-10">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="h-full"
        >
          {courses.map((curso, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <MinicursoCard {...curso} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
