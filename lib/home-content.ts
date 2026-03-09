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
    title: "Análise Capilar com Câmera",
    problem: "Identificar com precisão a causa da queda e da inflamação.",
    outcome: "Mapeamento detalhado para um plano terapêutico assertivo.",
    image: "/protocol-camera.svg",
    alt: "Protocolo de análise capilar com câmera",
  },
  {
    title: "Microagulhamento no Couro Cabeludo",
    problem: "Estimular áreas com afinamento e baixa resposta capilar.",
    outcome: "Suporte à densidade e fortalecimento dos fios no protocolo.",
    image: "/protocol-microneedling.svg",
    alt: "Protocolo de microagulhamento no couro cabeludo",
  },
  {
    title: "Terapia a Laser",
    problem: "Tratar desequilíbrios do couro cabeludo com abordagem não invasiva.",
    outcome: "Melhora do ambiente capilar para crescimento saudável.",
    image: "/protocol-laser.svg",
    alt: "Protocolo de terapia a laser",
  },
  {
    title: "Prescrição Personalizada",
    problem: "Evitar protocolos genéricos que não respeitam sua história clínica.",
    outcome: "Conduta individualizada com acompanhamento próximo da evolução.",
    image: "/protocol-camera.svg",
    alt: "Protocolo de prescrição clínica personalizada",
  },
];

export const differentiatedApproach: BulletItem[] = [
  { label: "Aqui, a avaliação é personalizada." },
  {
    label:
      "Eu não analiso apenas o fio: cada caso de queda capilar tem sua própria história.",
  },
  { label: "Protocolos modernos com abordagem multidisciplinar." },
];

export const approachFoundations: BulletItem[] = [
  { label: "Saúde" },
  { label: "Nutrição" },
  { label: "Biomedicina" },
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
];
