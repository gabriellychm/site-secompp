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
    title: "Minicurso de React",
    horario: "14:00 - 18:00",
    ministrante: "João da Silva",
    local: "Laboratório 5",
    preRequisito: "Conhecimentos básicos de HTML e JavaScript.",
    descricao:
      "Aprenda os fundamentos de React e crie sua primeira aplicação interativa do zero.",
    material: "Notebook com Node.js instalado.",
    contato: "joao.silva@email.com",
    imagemUrl: "/images/minicursos/react.png", // Exemplo de imagem
  },
  {
    title: "Introdução a Python para Ciência de Dados",
    horario: "8:00 - 12:00",
    ministrante: "Bruno Augusto Furquim, e Julio Santana",
    local: "Laboratório 5",
    descricao:
      "Aprenda os fundamentos de Python e os utilize para análise de dados e visualização.",
    material: "Notebook com Node.js instalado.",
    contato: "bruno.furquim@unesp.br, julio.santana@unesp.br",
    imagemUrl: "/images/minicursos/python.png",
  },
  {
    title: "Design de UI/UX com Figma",
    horario: "19:00 - 22:00",
    ministrante: "Ana Pereira",
    local: "Online",
    descricao: "Crie interfaces incríveis e protótipos interativos com Figma.",
    imagemUrl: "/images/minicursos/figma.png",
  },
  {
    title: "Minicurso sem Infos",
    imagemUrl: "/images/minicursos/placeholder.png",
  },
];

export const palestras: Evento[] = [
  {
    title: "A Revolução da IA Generativa",
    horario: "10:00 - 11:00",
    ministrante: "Dra. Helena Costa",
    local: "Auditório Principal",
    descricao:
      "Uma visão aprofundada sobre o impacto da IA generativa no mercado de tecnologia e na sociedade.",
    contato: "helena.costa@email.com",
    imagemUrl: "/images/palestras/ia.png",
  },
  {
    title: "Computação Quântica: O Futuro Agora",
    horario: "11:00 - 12:00",
    ministrante: "Prof. Ricardo Mendes",
    local: "Auditório Principal",
    descricao:
      "Desmistificando os conceitos da computação quântica e suas potenciais aplicações.",
    contato: "ricardo.mendes@email.com",
    imagemUrl: "/images/palestras/quantica.png",
  },
  {
    title: "Segurança Cibernética em um Mundo Conectado",
    horario: "15:00 - 16:00",
    ministrante: "Carlos Vieira",
    local: "Sala 10",
    descricao:
      "Principais ameaças e melhores práticas para proteção de dados na era digital.",
    contato: "carlos.vieira@email.com",
    imagemUrl: "/images/palestras/seguranca.png",
  },

];
