"use client";
import CardSliderPalestra from "@/app/components/CardSliderPalestra";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import {useState} from "react";
import SaibaMaisBtn from "@/app/components/SaibaMaisBtn";
import SaibaMaisBtnBlack from "@/app/components/SaibaMaisBtnBlack";



export default function SectionSliderPalestra() {
    const [dia, setDia] = useState("")
    const [nome, setNome] = useState("")
    const [desc, setDesc] = useState("")
    return (
        <div className="w-full secCardPalestra h-dvh flex flex-col items-center justify-center">
            <div className={"grid md:grid-cols-3 xs:grid-cols-1 w-full"}>
                <div className={"flex flex-col items-center justify-center mb-10"}>
                    <div>
                        <div className={"border-b-4 border-[#FFB300]"}>
                            <p className={"text-4xl md:text-5xl"}>PROGRAMAÇÃO</p>
                        </div>
                        <p className={"text-3xl md:text-4xl"}>PALESTRAS</p>
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
                    "--swiper-pagination-color": "#FFB300",
                    "--swiper-pagination-bullet-inactive-color": "#fff",
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
                <SwiperSlide className="card w-1/4 h-full bg-[#0E1526] rounded-4xl">
                    <CardSliderPalestra dia={"Segunda Feira"} nome={"Convidado 1"} desc={"Curso 1"}></CardSliderPalestra>
                </SwiperSlide>

                <SwiperSlide className="card w-1/4 h-full bg-[#0E1526] rounded-4xl">
                    <CardSliderPalestra dia={"Terça Feira"} nome={"Convidado 2"} desc={"Curso 2"}></CardSliderPalestra>
                </SwiperSlide>

                <SwiperSlide className="card w-1/4 h-full bg-[#0E1526] rounded-4xl">
                    <CardSliderPalestra dia={"Quarta Feira"} nome={"Convidado 3"} desc={"Curso 3"}></CardSliderPalestra>
                </SwiperSlide>

                <SwiperSlide className="card w-1/4 h-full bg-[#0E1526] rounded-4xl">
                    <CardSliderPalestra dia={"Quinta Feira"} nome={"Convidado 4"} desc={"Curso 4"}></CardSliderPalestra>
                </SwiperSlide>

                <SwiperSlide className="card w-1/4 h-full bg-[#0E1526] rounded-4xl">
                    <CardSliderPalestra dia={"Sexta feira"} nome={"Convidado 5"} desc={"Curso 5"}></CardSliderPalestra>
                </SwiperSlide>


            </Swiper>
            <SaibaMaisBtnBlack></SaibaMaisBtnBlack>

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
