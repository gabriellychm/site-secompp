import React from "react";

interface MinicursoCardProps {
  title: string;
  horario?: string;
  ministrante?: string;
  local?: string;
  preRequisito?: string;
  descricao?: string;
  material?: string;
  contato?: string;
}

// A small helper component to keep the code clean and avoid repetition.
// It creates a single row for a piece of information (e.g., "Horário: 10:00").
const InfoRow: React.FC<{ label: string; value?: string }> = ({
  label,
  value,
}) => (
  <div className="flex items-start text-base">
    {/* Label (e.g., "Horário:") */}
    <p className="font-bold text-white w-2/5 flex-shrink-0">{label}</p>

    {/* Value (e.g., "10:00" or the placeholder) */}
    <p className="font-light text-white w-3/5">
      {value || "---------------------"}
    </p>
  </div>
);

// The main card component.
// It accepts all the course information as props.
const MinicursoCard: React.FC<MinicursoCardProps> = ({
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
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 w-96 h-auto flex flex-col shadow-lg">
      <div className="text-center mb-6">
        <h2 className="text-yellow-400 text-2xl font-bold uppercase inline-block border-b-4 border-yellow-400 pb-1">
          {title || "TÍTULO DO CURSO"}
        </h2>
      </div>

      <div className="flex flex-col space-y-3">
        <InfoRow label="Horário:" value={horario} />
        <InfoRow label="Ministrante:" value={ministrante} />
        <InfoRow label="Local:" value={local} />
        <InfoRow label="Pré-requisito:" value={preRequisito} />

        <div className="flex items-start text-base">
          <p className="font-bold text-white w-2/5 flex-shrink-0">Descrição:</p>
          <p className="font-light text-white w-3/5 whitespace-pre-wrap">
            {descricao || "---------------------"}
          </p>
        </div>

        <InfoRow label="Material:" value={material} />
        <InfoRow label="Contato:" value={contato} />
      </div>
    </div>
  );
};

export default MinicursoCard;
