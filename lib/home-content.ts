export type ServiceItem = {
  title: string;
  description: string;
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
    description: "Avaliação de couro cabeludo e folículos com alta precisão",
    image: "/protocol-camera.svg",
    alt: "Protocolo de análise capilar com câmera",
  },
  {
    title: "Microagulhamento no Couro Cabeludo",
    description: "Protocolo de estimulação controlada para suporte capilar",
    image: "/protocol-microneedling.svg",
    alt: "Protocolo de microagulhamento no couro cabeludo",
  },
  {
    title: "Terapia a Laser",
    description: "Protocolo moderno com luz para saúde capilar",
    image: "/protocol-laser.svg",
    alt: "Protocolo de terapia a laser",
  },
  {
    title: "Prescrição Personalizada",
    description: "Planejamento clínico individualizado para cada caso",
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

export const whoCanBeTreated: BulletItem[] = [
  { label: "Homens e mulheres de todas as idades" },
  { label: "Avaliação para todas as causas de queda capilar" },
];

export const faqs: FaqItem[] = [
  {
    question: "Quais problemas capilares são tratados aqui?",
    answer:
      "Queda capilar, falhas, inflamação do couro cabeludo, descamação, oleosidade excessiva e cuidado de apoio antes e depois do transplante.",
  },
  {
    question: "Como funciona a consulta?",
    answer:
      "Você recebe uma avaliação detalhada, mapeamento clínico do seu couro cabeludo e dos fios, e um protocolo personalizado.",
  },
  {
    question: "É indicado para homens e mulheres?",
    answer:
      "Sim. A avaliação e o plano de tratamento são adaptados para cada pessoa e fase da vida.",
  },
  {
    question: "Quais são os diferenciais da clínica?",
    answer:
      "Visão integrativa, protocolos baseados em evidência e acompanhamento próximo com transparência.",
  },
];
