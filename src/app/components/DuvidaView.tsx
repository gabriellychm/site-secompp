type Props = {
  selected: string;
};

export default function DuvidaView({ selected }: Props) {
  const textos: Record<string, string> = {
    certificado: "Os certificados de participação serão enviados por e-mail após o encerramento da SECOMPP. Fique atento à sua caixa de entrada (e também ao spam/lixo eletrônico) para garantir que receba corretamente o documento.",
    participar: "A participação está aberta a todos os interessados, desde que seja realizada a inscrição prévia.",
    levar: "Para aproveitar ao máximo as palestras e minicursos do evento de tecnologia, recomendamos que os participantes tragam notebook ou tablet, carregadores, caderno e caneta, além de água e lanches leves.",
    inscricao: "A participação no evento será mediante inscrição, que será realizada por meio de um Google Forms, disponível em breve. A inscrição só será confirmada após a realização do pagamento correspondente.",
    pagamento: "O pagamento deverá ser realizado via PIX, com as informações que serão fornecidas no formulário de inscrição. Certifique-se de seguir todas as instruções para garantir sua vaga no evento.",
  };

  return (
    <div className="bg-[#000000B2] md:col-span-2 rounded-r-3xl rounded-bl-3xl flex flex-col">
      <h1 className="text-[#0E1526] text-5xl font-bold text-center md:text-right m-4">
        DÚVIDAS
      </h1>
      <p className="text-white text-center m-4 text-xl">
        {textos[selected]}
      </p>
    </div>
  );
}
