export type ServiceItem = {
  title: string;
  problem: string;
  outcome: string;
  image: string;
  alt: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type BulletItem = {
  label: string;
};

export const heroBackground = {
  desktop: "/home/banner_principal/hero-desktop.jpg",
  mobile: "/home/banner_principal/hero-mobile.jpg",
} as const;

export const services: ServiceItem[] = [
  {
    title: "Análise Capilar com Tricoscópio",
    problem: "Identificar com precisão a causa da queda e da inflamação.",
    outcome: "Mapeamento detalhado para um plano terapêutico assertivo.",
    image: "/home/servicos/analise_capilar.webp",
    alt: "Protocolo de análise capilar com tricoscópio",
  },
  {
    title: "Microagulhamento no Couro Cabeludo",
    problem: "Estimular áreas com afinamento e baixa resposta capilar.",
    outcome: "Suporte à densidade e fortalecimento dos fios no protocolo.",
    image: "/home/servicos/microagulhamento.webp",
    alt: "Protocolo de microagulhamento no couro cabeludo",
  },
  {
    title: "Terapia a Laser",
    problem: "Tratar desequilíbrios do couro cabeludo com abordagem não invasiva.",
    outcome: "Melhora do ambiente capilar para crescimento saudável.",
    image: "/home/servicos/terapia_laser.webp",
    alt: "Protocolo de terapia a laser",
  },
  {
    title: "Prescrição Personalizada",
    problem: "Sem avaliação clínica e exames, o tratamento tende a ser genérico.",
    //problem: "Sem análise clínica e exames laboratoriais, não é possível individualizar o tratamento.",
    outcome: "Conduta personalizada baseada na investigação da causa da queda.",
    image: "/home/servicos/prescricao_personalizada.webp",
    alt: "Protocolo de prescrição clínica personalizada",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Esse tratamento é para o meu caso?",
    answer:
      "Na avaliação clínica, investigamos a causa da sua queda e definimos se o protocolo é indicado para o seu perfil, histórico e fase da vida.",
  },
  {
    question: "Como funciona a primeira consulta?",
    answer:
      "Você passa por avaliação clínica detalhada do couro cabeludo e dos fios, e já sai com direcionamento inicial e próximos passos do seu plano.",
  },
  {
    question: "Em quanto tempo começo a perceber resultados?",
    answer:
      "Isso varia de acordo com a causa da queda e adesão ao protocolo. Em geral, os primeiros sinais aparecem nas primeiras semanas, com evolução progressiva.",
  },
  {
    question: "Os procedimentos são dolorosos?",
    answer:
      "A maior parte dos protocolos é bem tolerada. Quando necessário, ajustamos técnica e conforto para que o tratamento seja seguro e tranquilo.",
  },
  {
    question: "O que é saúde capilar integrativa?",
    answer:
      "A saúde capilar integrativa considera o cabelo como um reflexo do estado geral de saúde, abordando fatores internos e externos para promover um crescimento saudável e sustentável.",
  },
];
