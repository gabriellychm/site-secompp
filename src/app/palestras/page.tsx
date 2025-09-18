// src/app/palestras/page.tsx
import { Suspense } from "react";
import SectionEvento from "@/app/components/Evento/SectionEvento";
import { palestras } from "@/data/events";

export default function PalestrasPage() {
  return (
    <Suspense fallback={<div>Carregando palestras...</div>}>
      <SectionEvento
        pageTitle="PALESTRAS"
        dayOfWeek="Cronograma"
        eventos={palestras}
        headerBgColor="#fcfcff"
        headerTextColor="#0e1526"
        bgColor="#e0e0e0"
      />
    </Suspense>
  );
}
