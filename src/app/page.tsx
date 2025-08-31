// src/app/page.tsx

// NÃO precisa de "use client" aqui. A página principal pode ser um Server Component.

// 1. Importar os componentes que fazem parte da Home
import SectionSobre from "@/app/components/SectionSobre";
import SectionDuvidas from "@/app/components/SectionDuvidas";
import Footer from "@/app/components/Footer";
import Presentation from "@/app/components/presentation/presentation";
import EventSlider from "@/app/components/presentation/EventSlider";

import { minicursos, palestras } from "@/data/events";

export default function Home() {
  return (
    <div>
      {" "}
      <Presentation />
      <SectionSobre />
      <EventSlider
        title="Minicursos"
        eventos={minicursos}
        eventType="minicursos"
        bgColor="bg-[#0E1526]"
        textColor="text-white"
      />
      <EventSlider
        title="Palestras"
        eventos={palestras}
        eventType="palestras"
        bgColor="bg-gray-100"
        textColor="text-black"
      />
      <SectionDuvidas />
      <Footer />
    </div>
  );
}
