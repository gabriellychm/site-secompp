"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

export default function CardSliderPalestra(props: {
  dia: string;
  nome: string;
  desc: string;
  onClick: () => void;
}) {
  return (
    <button onClick={props.onClick} className="h-full w-full text-left">
      <div className="bg-[#FFB300] text-center flex justify-center items-center rounded-t-4xl h-1/6">
        <p className="font-bold text-2xl">{props.dia}</p>
      </div>
      <div className="text-white text-center flex flex-col justify-between h-1/2">
        <p className={"mt-3"}>{props.nome}</p>
        <p>{props.desc}</p>
      </div>
    </button>
  );
}
