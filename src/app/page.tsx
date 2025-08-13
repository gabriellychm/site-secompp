"use client";

import SectionSobre from "@/app/components/SectionSobre";
import SectionDuvidas from "@/app/components/SectionDuvidas";
import SectionMinicurso from "@/app/components/Minicurso/SectionMinicurso"; // Corrected import path
import { useState } from "react";

export default function Home() {
  const [showMinicurso, setShowMinicurso] = useState(false);

  const handleButtonClick = () => {
    setShowMinicurso(true);
  };

  if (showMinicurso) {
    return <SectionMinicurso />;
  }

  return (
    <div className="">
      <SectionSobre></SectionSobre>
      <SectionDuvidas />
      <div className="p-10">
        <button
          onClick={handleButtonClick}
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Open New Section
        </button>
      </div>
    </div>
  );
}
