// src/app/minicursos/page.tsx
import { Suspense } from "react";
import SectionEvento from "@/app/components/Evento/SectionEvento";
import { minicursos } from "@/data/events";
export default function MinicursosPage() {
  return (
    <Suspense fallback={<div>Carregando minicursos...</div>}>
      <SectionEvento
        pageTitle="MINICURSOS"
        dayOfWeek="Quinta-feira"
        eventos={minicursos}
        headerBgColor="#0e1226"
        headerTextColor="#FFFFFF"
        bgColor="#d9d9d9"
      />
    </Suspense>
  );
}
