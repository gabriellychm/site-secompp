// src/app/components/CardSliderCurso.tsx

interface CardSliderCursoProps {
  title: string;
  horario?: string;
  ministrante?: string;
  onClick: () => void; // A função de clique que já tínhamos adicionado
}

export default function CardSliderCurso({
  title,
  horario,
  ministrante,
  onClick,
}: CardSliderCursoProps) {
  return (
    <button
      onClick={onClick}
      className="h-full w-full text-left bg-white rounded-4xl overflow-hidden flex flex-col"
    >
      <div className="bg-[#FFB300] text-center flex justify-center items-center py-4 px-2">
        <p className="font-bold text-xl text-[#0E1526]">
          {horario || "Horário a definir"}
        </p>
      </div>
      <div className="text-black text-center flex flex-col justify-center items-center p-4 flex-grow">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">
          {ministrante || "Ministrante a definir"}
        </p>
      </div>
    </button>
  );
}
