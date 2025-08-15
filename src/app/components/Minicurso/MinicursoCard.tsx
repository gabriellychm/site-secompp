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
  number: number;
}

// O InfoRow pode se beneficiar de fontes responsivas também
const InfoRow: React.FC<{ label: string; value?: string }> = ({
  label,
  value,
}) => (
  // ADICIONADO: texto menor em telas pequenas, base em telas maiores
  <div className="flex items-start text-sm sm:text-base">
    <p className="font-bold text-white w-2/5 flex-shrink-0">{label}</p>
    <p className="font-light text-white w-3/5">
      {value || "---------------------"}
    </p>
  </div>
);

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
    // ALTERAÇÕES PRINCIPAIS AQUI
    <div
      className="bg-black/75 backdrop-blur-sm rounded-2xl flex flex-col shadow-lg
      p-4 sm:p-6   
      w-full     
      h-auto       
      min-h-[28rem] sm:min-h-[32rem]
      max-w-[28rem]
      mx-auto
    "
    >
      <div className="text-center mb-4 sm:mb-6">
        <h2 className="text-yellow-400 text-xl sm:text-2xl font-bold uppercase inline-block border-b-4 border-yellow-400 pb-1">
          {title || "TÍTULO DO CURSO"}
        </h2>
      </div>

      <div className="flex flex-col space-y-2 sm:space-y-3">
        <InfoRow label="Horário:" value={horario} />
        <InfoRow label="Ministrante:" value={ministrante} />
        <InfoRow label="Local:" value={local} />
        <InfoRow label="Pré-requisito:" value={preRequisito} />

        <div className="flex items-start text-sm sm:text-base">
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
