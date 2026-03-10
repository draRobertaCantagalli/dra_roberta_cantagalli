import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "Politica de Privacidade | Dra. Roberta Cantagalli",
  description:
    "Saiba como os dados sao tratados no site da Dra. Roberta Cantagalli.",
};

export default function PrivacyPolicyPage() {
  const whatsappPhone = "5511955803300";
  const whatsappMessage =
    "Olá! Gostaria de agendar uma avaliação capilar com a Dra. Roberta.";
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <SiteHeader
        whatsappUrl={whatsappUrl}
        ctaVariant="A"
        ctaText="Agendar"
      />

      <main className="px-6 py-12 sm:px-10 lg:px-16">
        <section className="mx-auto w-full max-w-4xl rounded-3xl border border-(--sand-300) bg-[linear-gradient(145deg,#fff_0%,var(--surface-soft)_100%)] p-8 text-(--ink-800) shadow-[0_16px_30px_rgba(154,116,36,0.08)] sm:p-12">
          <h1 className="text-3xl text-(--ink-900) sm:text-4xl">
            Politica de Privacidade
          </h1>

          <div className="mt-6 space-y-5 text-sm leading-relaxed sm:text-base">
            <p>
              Esta pagina descreve como os dados podem ser tratados ao navegar
              no site da Dra. Roberta Cantagalli.
            </p>

            <p>
              Podemos utilizar cookies e tecnologias similares para medir o
              desempenho do site e entender, de forma agregada, como os
              visitantes interagem com o conteudo.
            </p>

            <p>
              Os cookies analiticos sao opcionais e so sao ativados mediante
              seu consentimento. Voce pode recusar esses cookies no banner
              exibido ao acessar o site.
            </p>

            <p>
              Quando voce clica em links de contato (como WhatsApp), dados do
              proprio clique podem ser usados para facilitar o atendimento e a
              analise de origem das campanhas.
            </p>

            <p>
              Para exercicio de direitos relacionados a dados pessoais, entre
              em contato pelos canais oficiais informados no atendimento.
            </p>

            <p className="text-xs text-(--ink-700)">
              Ultima atualizacao: 10 de marco de 2026.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
