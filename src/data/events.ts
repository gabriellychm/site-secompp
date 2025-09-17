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
    title: "FIGMA",
    horario: "Terça-feira 14:00-18:00 | Quarta-feira 14:00-18:00",
    ministrante: "Sabrina Paião Oliveira | Kauan Medeiros",
    local: "Sala 10",
    preRequisito: "Não há pré-requisitos",
    descricao: "---",
    contato: "sabrina@ejcomp.com.br",
    imagemUrl: "/images/minicursos/placeholder.png",
  },
  {
    title: "Desenvolvimento de jogo 2D para desktop",
    horario: "Segunda-feira 08:00-12:00 | Segunda-feira 14:00-18:00",
    ministrante: "Vinícius Andrei Parra Castilho | Gabriel Henrique Franco Vieira",
    local: "Sala 5B",
    preRequisito: "Não há pré-requisitos",
    descricao: "---",
    contato: "(18) 99645-4648",
    imagemUrl: "/images/minicursos/placeholder.png",
  },
  {
    title: "Introdução à linguagem Python",
    horario: "Terça-feira 08:00-12:00",
    ministrante: "Kelly Kimura | Enzo Racciatti",
    local: "Sala 5B",
    preRequisito: "Não há pré-requisitos",
    descricao: "---",
    contato: "enzonracciatti@gmail.com",
    imagemUrl: "/images/minicursos/placeholder.png",
  },
  {
    title: "O maior inimigo da cibersegurança: A engenharia social",
    horario: "Sexta-feira 08:00-12:00",
    ministrante: " | Matheus Chiosini Pscheidt",
    local: "Sala 5B",
    preRequisito: "Não há pré-requisitos",
    descricao: "---",
    contato: "matheus.pscheidt@unesp.br",
    imagemUrl: "/images/minicursos/placeholder.png",
  },
  {
    title: "Conceitos de Machine Learning na classificação e regressão",
    horario: "Quarta-feira 14:00-18:00",
    ministrante: "Pedro Henrique Milani Vagula",
    local: "Sala 06",
    preRequisito: "Não há pré-requisitos",
    descricao: "---",
    contato: "phm.vagula@unesp.br",
    imagemUrl: "/images/minicursos/placeholder.png",
  },

  {
    title: "Pentest, práticas e conceitos de testes de penetração",
    horario: "Quinta-feira 14:00-18:00",
    ministrante: "Henrique Dantas Quintana  | Thiago das Chagas Batista | Fernando Kendi Salesi",
    local: "Sala 06",
    preRequisito: "Não há pré-requisitos",
    descricao: "---",
    contato: "thiago.batista@unesp.br",
    imagemUrl: "/images/minicursos/placeholder.png",
  },

  {
    title: "Clean Architecture com MVVM: Boas Práticas para o Desenvolvimento Android",
    horario: "Sexta-feira 14:00-18:00",
    ministrante: "Fábio Michiura",
    local: "Sala 06",
    preRequisito: "Não há pré-requisitos",
    descricao: "---",
    contato: "fabiomichiura@gmail.com",
    imagemUrl: "/images/minicursos/placeholder.png",
  },

  {
    title: "Introdução Prática - Hardware e Manutenção de Computadores (Um Guia de Boas Práticas)",
    horario: "Segunda-feira 08:00-12:00",
    ministrante: "Paulo Celso dos Santos Júnior",
    local: "Sala 6B",
    preRequisito: "Não há pré-requisitos",
    descricao: "---",
    contato: "p.santos-junior@unesp.br",
    imagemUrl: "/images/minicursos/placeholder.png",
  },
  {
    title: "Programação orientada a gambiarra: o que (não) fazer",
    horario: "Terça-feira 08:00-12:00",
    ministrante: "Daniel Henrique Serezane Pereira",
    local: "Sala 6B",
    preRequisito: "Não há pré-requisitos",
    descricao: "---",
    contato: "nahksalies@gmail.com",
    imagemUrl: "/images/minicursos/placeholder.png",
  },

  {
    title: "Documentação e Produtividade com Markdown (Usando Obsidian e GitHub)",
    horario: "Quarta-feira 08:00-12:00",
    ministrante: "Abigail Sayury Nakashima",
    local: "Sala 6B",
    preRequisito: "Noções Básicas de GitHub",
    descricao: "---",
    contato: "abigailsayury.nakashima@gmail.com",
    imagemUrl: "/images/minicursos/placeholder.png",
  },
  {
    title: "Capacitação Impressora 3D",
    horario: "Sexta-feira 08:00-12:00 | 14:00-18:00",
    ministrante: "Nicolas dos Santos Fernandes | Gabriel Ciriaco",
    local: "Sala 6B",
    preRequisito: "Não há pré-requisitos",
    descricao: "---",
    contato: "",
    imagemUrl: "/images/minicursos/placeholder.png",
  },
  {
    title: "Construção de uma Pokedex com a POKEAPI",
    horario: "Segunda 08:00-12:00 | 14:00-18:00",
    ministrante: "Miguel Garrocini | Murilo Marques | Gabriel Henrique",
    local: "Sala LDC2",
    preRequisito: "Não há pré-requisitos",
    descricao: "---",
    contato: "",
    imagemUrl: "/images/minicursos/placeholder.png",
  },
  {
    title: "Python para análise de dados",
    horario: "Terça-feira 08:00-12:00 | 14:00-18:00",
    ministrante: "Bruno Augusto Furquim | Julio Oliveira Santana",
    local: "Sala LDC2",
    preRequisito: "Não há pré-requisitos",
    descricao: "---",
    contato: "bruno.furquim@unesp.br",
    imagemUrl: "/images/minicursos/placeholder.png",
  },
  {
    title: "Introdução a redes de computadores",
    horario: "Terça-feira 14:00-18:00 | Quarta-feira 14:00-18:00",
    ministrante: "Nathan Alves Da Cruz Silveira  | Lucas Henrique Gregorio",
    local: "Sala 5B",
    preRequisito: "Não há pré-requisitos",
    descricao: "---",
    contato: "lucas.gregorio@unesp.br",
    imagemUrl: "/images/minicursos/placeholder.png",
  },

  {
    title: "Api REST com Java Spring",
    horario: "Quinta-feira 14:00-18:00 | Sexta-feira 14:00-18:00",
    ministrante: "Augusto Macedo Almeida | Diego Gonçalves Mota",
    local: "Sala 5B",
    preRequisito: "Não há pré-requisitos",
    descricao: "---",
    contato: "augusto.macedo@unesp.br",
    imagemUrl: "/images/minicursos/placeholder.png",
  },
  {
    title: "A Cibersegurança para Iniciantes com Capture The Flag (CTF)",
    horario: "Segunda-feira 14:00-18:00",
    ministrante: "Matheus Chiosini Pscheidt | Lucas César Freitas | ",
    local: "Sala 6B",
    preRequisito: "Não há pré-requisitos",
    descricao: "---",
    contato: "lucascesarfreitas@gmail.com",
    imagemUrl: "/images/minicursos/placeholder.png",
  },
  {
    title: "Protocolos da camada de transporte, com foco em TCP e UDP",
    horario: "Terça-feira 14:00-18:00",
    ministrante: "José Henrique Ioki Yamaoki | Vítor Moreira Rodrigues | Rodrigo Isao Goto | Kauan dos Santos Loche",
    local: "Sala 6B",
    preRequisito: "Não há pré-requisitos",
    descricao: "---",
    contato: "jose.yamaoki@unesp.br",
    imagemUrl: "/images/minicursos/placeholder.png",
  },
  {
    title: "Desenvolvimento de uma API em Express",
    horario: "Quarta-feira 14:00-18:00 | Quinta-feira 14:00-18:00",
    ministrante: "Leonardo dos Santos Coradeli | Lucas Moreira Hungaro | Leonardo Cenedes Pereira",
    local: "Sala 6B",
    preRequisito: "Não há pré-requisitos",
    descricao: "---",
    contato: "leonardo.coradeli@unesp.br",
    imagemUrl: "/images/minicursos/placeholder.png",
  },
  {
    title: "Introdução a Visão Computacional com Redes Neurais",
    horario: "Quarta-feira 14:00-18:00",
    ministrante: "Rennan Furlaneto Collado | Enzo Racciatti | Daniel Henrique Peres Servejeira",
    local: "Sala LDC2",
    preRequisito: "Não há pré-requisitos",
    descricao: "---",
    contato: "rennan.collado@unesp.br",
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
