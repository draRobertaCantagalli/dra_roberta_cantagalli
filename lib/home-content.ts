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
    title: "Analise Capilar com Camera",
    description: "Avaliacao de couro cabeludo e foliculos com alta precisao",
    image: "/protocol-camera.svg",
    alt: "Protocolo de analise capilar com camera",
  },
  {
    title: "Microagulhamento no Couro Cabeludo",
    description: "Protocolo de estimulacao controlada para suporte capilar",
    image: "/protocol-microneedling.svg",
    alt: "Protocolo de microagulhamento no couro cabeludo",
  },
  {
    title: "Terapia a Laser",
    description: "Protocolo moderno com luz para saude capilar",
    image: "/protocol-laser.svg",
    alt: "Protocolo de terapia a laser",
  },
  {
    title: "Prescricao Personalizada",
    description: "Planejamento clinico individualizado para cada caso",
    image: "/protocol-camera.svg",
    alt: "Protocolo de prescricao clinica personalizada",
  },
];

export const differentiatedApproach: BulletItem[] = [
  { label: "Aqui, a avaliacao e personalizada." },
  {
    label:
      "Eu nao analiso apenas o fio: cada caso de queda capilar tem sua propria historia.",
  },
  { label: "Protocolos modernos com abordagem multidisciplinar." },
];

export const approachFoundations: BulletItem[] = [
  { label: "Saude" },
  { label: "Nutricao" },
  { label: "Biomedicina" },
];

export const whoCanBeTreated: BulletItem[] = [
  { label: "Homens e mulheres de todas as idades" },
  { label: "Avaliacao para todas as causas de queda capilar" },
];

export const faqs: FaqItem[] = [
  {
    question: "Quais problemas capilares sao tratados aqui?",
    answer:
      "Queda capilar, falhas, inflamacao do couro cabeludo, descamacao, oleosidade excessiva e cuidado de apoio antes e depois do transplante.",
  },
  {
    question: "Como funciona a consulta?",
    answer:
      "Voce recebe uma avaliacao detalhada, mapeamento clinico do seu couro cabeludo e dos fios, e um protocolo personalizado.",
  },
  {
    question: "E indicado para homens e mulheres?",
    answer:
      "Sim. A avaliacao e o plano de tratamento sao adaptados para cada pessoa e fase da vida.",
  },
  {
    question: "Quais sao os diferenciais da clinica?",
    answer:
      "Visao integrativa, protocolos baseados em evidencia e acompanhamento proximo com transparencia.",
  },
];
