'use client'
import { useState } from "react";
import DuvidaSelector from '@/app/components/DuvidaSelector';
import DuvidaView from "@/app/components/DuvidaView";

export default function SectionDuvidas() {
  const [selected, setSelected] = useState("certificado");

  return (
    <div className="grid md:grid-cols-3 grid-rows-2 md:grid-rows-1 p-10 gap-3 bg-gray-300">
      <DuvidaSelector selected={selected} setSelected={setSelected} />
      <DuvidaView selected={selected} />
    </div>
  );
}
