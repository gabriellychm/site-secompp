"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

export default function CardSliderCurso(props) {
    return (
        <div className="h-full">
            <div className="bg-[#FFB300] text-center flex justify-center items-center rounded-t-4xl h-1/6">
                <p className="font-bold text-2xl">{props.dia}</p>
            </div>
            <div className="text-black text-center flex flex-col justify-between h-1/2">
                <div>
                    <p className={"mt-3"}>{props.hora}</p>
                    <p>{props.titulo1}</p>
                    <p>{props.titulo2}</p>
                    <p>{props.titulo3}</p>
                </div>
                <div>
                    <p className={"mt-3"}>{props.hora2}</p>
                    <p>{props.titulo4}</p>
                    <p>{props.titulo5}</p>
                    <p>{props.titulo6}</p>
                </div>
            </div>
        </div>
    );
}
