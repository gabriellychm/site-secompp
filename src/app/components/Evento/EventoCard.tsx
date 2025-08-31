// src/app/components/Evento/EventoCard.tsx
import React from "react";
import { Evento } from "@/data/events"; // Importe nossa interface

interface EventoCardProps extends Evento {
  // Recebe todas as propriedades do Evento
}

const InfoRow: React.FC<{ label: string; value?: string }> = ({
  label,
  value,
}) => (
  <div className="flex items-start text-sm sm:text-base">
    <p className="font-bold text-white w-2/5 flex-shrink-0">{label}</p>
    <p className="font-light text-white w-3/5">
      {value || "---------------------"}
    </p>
  </div>
);

const EventoCard: React.FC<EventoCardProps> = ({
  title,
  horario,
  ministrante,
  local,
  preRequisito,
  descricao,
  material,
  contato,
}) => {
  return (
    <div
      className="bg-black/75 backdrop-blur-sm rounded-2xl flex flex-col shadow-lg
      p-4 sm:p-6 w-full h-auto min-h-[40.625rem] max-w-[36rem] mx-auto"
    >
      <div className="text-center mb-4 sm:mb-6">
        <h2 className="text-yellow-400 text-xl sm:text-2xl font-bold uppercase inline-block border-b-4 border-yellow-400 pb-1">
          {title || "TÍTULO DO EVENTO"}
        </h2>
      </div>

      <div className="flex flex-col space-y-6 px-4 sm:px-6 md:px-8 lg:space-y-8 text-base md:text-lg">
        <InfoRow label="Horário:" value={horario} />
        <InfoRow label="Ministrante:" value={ministrante} />
        <InfoRow label="Local:" value={local} />
        <InfoRow label="Pré-requisito:" value={preRequisito} />

        <div className="flex flex-col md:flex-row items-start">
          <p className="font-bold text-white w-full md:w-2/5 flex-shrink-0">
            Descrição:
          </p>
          <p className="font-light text-white w-full md:w-3/5 whitespace-pre-wrap">
            {descricao || "---------------------"}
          </p>
        </div>

        <InfoRow label="Material:" value={material} />
        <InfoRow label="Contato:" value={contato} />
      </div>
    </div>
  );
};

export default EventoCard;
