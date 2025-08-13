"use client";
import CardSliderCurso from "@/app/components/CardSliderCurso";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import {useState} from "react";
import SaibaMaisBtn from "@/app/components/SaibaMaisBtn";



export default function SectionSliderMinicursos() {
    const [dia, setDia] = useState("")
    const [nome, setNome] = useState("")
    const [desc, setDesc] = useState("")
    return (
        <div className="w-full secCardCurso h-dvh flex flex-col items-center justify-center bg-[#0E1526]">
            <div className={"grid grid md:grid-cols-3 xs:grid-cols-1 w-full w-full"}>
                <div></div>
                <div></div>
                <div className={"flex flex-col items-center justify-center mb-10"}>
                    <div>
                        <p className={"text-3xl md:text-4xl text-white"}>MINICURSOS</p>
                    </div>
                </div>
            </div>

            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                centeredSlides
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                className="w-[80%] h-90"
                loop
                modules={[Pagination, Navigation]}
                style={{
                    "--swiper-navigation-color": "#FFB300",
                    "--swiper-pagination-color": "#0E1526",
                    "--swiper-pagination-bottom": "0px",
                } as React.CSSProperties}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
            >
                <SwiperSlide className="card w-1/4 h-full bg-[#fff] rounded-4xl">
                    <CardSliderCurso dia={"Segunda Feira"} hora={"08:00"} titulo1={"Titulo Mincurso 1"} hora2={"14:00"} titulo4={"Titulo Mincurso 4"}></CardSliderCurso>
                </SwiperSlide>

                <SwiperSlide className="card w-1/4 h-full bg-[#fff] rounded-4xl">
                    <CardSliderCurso dia={"Terça Feira"} hora={"08:00"} titulo1={"Titulo Mincurso 1"} hora2={"14:00"} titulo4={"Titulo Mincurso 4"}></CardSliderCurso>
                </SwiperSlide>

                <SwiperSlide className="card w-1/4 h-full bg-[#fff] rounded-4xl">
                    <CardSliderCurso dia={"Quarta Feira"} hora={"08:00"} titulo1={"Titulo Mincurso 1"} hora2={"14:00"} titulo4={"Titulo Mincurso 4"}></CardSliderCurso>
                </SwiperSlide>

                <SwiperSlide className="card w-1/4 h-full bg-[#fff] rounded-4xl">
                    <CardSliderCurso dia={"Quinta Feira"} hora={"08:00"} titulo1={"Titulo Mincurso 1"} hora2={"14:00"} titulo4={"Titulo Mincurso 4"}></CardSliderCurso>
                </SwiperSlide>

                <SwiperSlide className="card w-1/4 h-full bg-[#fff] rounded-4xl">
                    <CardSliderCurso dia={"Sexta feira"} hora={"08:00"} titulo1={"Titulo Mincurso 1"} hora2={"14:00"} titulo4={"Titulo Mincurso 4"} ></CardSliderCurso>
                </SwiperSlide>

            </Swiper>

            <SaibaMaisBtn></SaibaMaisBtn>

            <style jsx global>{`
        .swiper-slide {
          transition: filter 0.3s ease, transform 0.3s ease;
          filter: grayscale(70%) brightness(1);
            scale: 0.7;
        }
        .swiper-slide-active {
          filter: none !important;
            scale: 1 !important;
        }
        
      `}</style>
        </div>
    );
}
