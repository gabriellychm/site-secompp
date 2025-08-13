import MinicursoHeader from "./MinicursoHeader";
import MinicursoCard from "./MinicursoCard";

const courseData = {
  title: "Minicurso de React",
  horario: "14:00 - 18:00",
  ministrante: "João da Silva",
  local: "Laboratório 5",
  preRequisito: "Conhecimentos básicos de HTML e JavaScript.",
  descricao:
    "Aprenda os fundamentos de React e crie sua primeira aplicação interativa do zero.",
  material: "Notebook com Node.js instalado.",
  contato: "joao.silva@email.com",
};

const courseDataEmpty = {
  title: "Minicurso sem Infos",
};

export default function SectionMinicurso() {
  return (
    <div className="">
      <MinicursoHeader dayOfWeek={"Quarta-Feira"} pageTitle={"Minicursos"} />
      <div className="min-h-screen bg-blue flex items-center justify-center p-10 space-x-8">
        <MinicursoCard {...courseData} />
        <MinicursoCard {...courseDataEmpty} />
      </div>
    </div>
  );
}
