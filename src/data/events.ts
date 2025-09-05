// src/data/events.ts

export interface Evento {
  title: string;
  horario?: string;
  ministrante?: string;
  local?: string;
  preRequisito?: string;
  descricao?: string;
  material?: string;
  contato?: string;
  imagemUrl?: string; // Adicionamos para o card da home
}

export const minicursos: Evento[] = [
  {
    title: "Em Breve",
    horario: "---",
    ministrante: "---",
    local: "---",
    preRequisito: "---",
    descricao:
      "---",
    contato: "---",
    imagemUrl: "/images/minicursos/react.png", // Exemplo de imagem
  },
  {
    title: "Em Breve",
    horario: "---",
    ministrante: "---",
    local: "---",
    preRequisito: "---",
    descricao:
      "---",
    contato: "---",
    imagemUrl: "/images/minicursos/python.png",
  },
  {
    title: "Em Breve",
    horario: "---",
    ministrante: "---",
    local: "---",
    preRequisito: "---",
    descricao:
      "---",
    contato: "---",
    imagemUrl: "/images/minicursos/figma.png",
  },
  {
    title: "Em Breve",
    horario: "---",
    ministrante: "---",
    local: "---",
    preRequisito: "---",
    descricao:
      "---",
    contato: "---",
    imagemUrl: "/images/minicursos/placeholder.png",
  },
];

export const palestras: Evento[] = [
  {
    title: "Em Breve",
    horario: "---",
    ministrante: "---",
    local: "---",
    descricao:
      "---",
    contato: "---",
    imagemUrl: "/images/palestras/ia.png",
  },
  {
    title: "Em Breve",
    horario: "---",
    ministrante: "---",
    local: "---",
    descricao:
      "---",
    contato: "---",
    imagemUrl: "/images/palestras/quantica.png",
  },
  {
    title: "Em Breve",
    horario: "---",
    ministrante: "---",
    local: "---",
    descricao:
      "---",
    contato: "---",
    imagemUrl: "/images/palestras/seguranca.png",
  },

];
