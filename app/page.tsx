import Image from "next/image";
import { FloatingWhatsAppCta } from "@/components/floating-whatsapp-cta";
import { SiteHeader } from "@/components/layout/site-header";
import {
  faqs,
  heroBackground,
  services,
} from "@/lib/home-content";

export default function Home() {
  const whatsappPhone = "5511955803300";
  const whatsappMessage =
    "Olá! Gostaria de agendar uma avaliação capilar com a Dra. Roberta.";
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(whatsappMessage)}`;
  const ctaPrincipalLabel =
    process.env.NEXT_PUBLIC_CTA_VARIANT === "B"
      ? "Quero iniciar meu tratamento"
      : "Agendar avaliação no WhatsApp";
  const ctaVariant = process.env.NEXT_PUBLIC_CTA_VARIANT === "B" ? "B" : "A";
  const ctaHeaderLabel = "Agendar";

  return (
    <div className="bg-(--sand-50) text-(--ink-900)">
      <SiteHeader
        whatsappUrl={whatsappUrl}
        ctaVariant={ctaVariant}
        ctaText={ctaHeaderLabel}
      />

      <section className="relative isolate overflow-hidden border-b border-(--gold-deep)/35 px-6 pb-16 pt-12 sm:px-10 sm:pt-16 lg:px-16 lg:py-24" aria-labelledby="hero-title">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:hidden"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(26,26,26,0.28) 0%, rgba(26,26,26,0.63) 68%, rgba(26,26,26,0.78) 100%), url(${heroBackground.mobile})`,
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat lg:block"
          style={{
            backgroundImage: `linear-gradient(108deg, rgba(26,26,26,0.86) 0%, rgba(26,26,26,0.74) 28%, rgba(26,26,26,0.57) 50%, rgba(26,26,26,0.36) 71%, rgba(26,26,26,0.2) 86%, rgba(26,26,26,0.1) 100%), url(${heroBackground.desktop})`,
          }}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 hidden lg:block bg-[linear-gradient(122deg,rgba(231,200,115,0.18)_8%,rgba(231,200,115,0.08)_36%,transparent_62%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_4%,rgba(231,200,115,0.34),transparent_44%)]" />
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[rgba(201,162,74,0.22)] blur-3xl" />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl items-end lg:min-h-[72vh]">
          <div className="w-full max-w-3xl space-y-7 rounded-3xl border border-white/35 bg-[rgba(255,248,238,0.18)] p-6 text-(--surface) backdrop-blur-[2px] sm:p-8 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
            <p className="inline-flex rounded-full border border-(--gold-soft)/75 bg-[rgba(154,116,36,0.24)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-(--sand-50)">
              Dra. Roberta Cantagalli
            </p>

            <h1 id="hero-title" className="text-4xl leading-[1.02] sm:text-5xl lg:text-7xl">
              Tricologia e Saúde Capilar Integrativa
            </h1>

            <ul className="max-w-2xl text-lg leading-relaxed text-[rgba(255,244,230,0.96)] sm:text-xl list-disc list-inside">
              <li>Tratamentos Avançados para Queda Capilar</li>
              <li>Investigação das Causas da Queda de Cabelo</li>
              <li>Acompanhamento Pré e Pós Transplante Capilar</li>
            </ul>

            <p className="max-w-2xl text-base leading-relaxed text-[rgba(255,244,230,0.9)] sm:text-lg">
              Meu compromisso é oferecer um cuidado clínico individualizado para a saúde do seu cabelo, com foco na investigação da causa da queda e em resultados naturais através de acompanhamento contínuo.
            </p>

            <a
              id="hero-whatsapp-cta"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="hero"
              data-cta-variant={ctaVariant}
              data-cta-text={ctaPrincipalLabel}
              className="text-center inline-flex rounded-full bg-[linear-gradient(135deg,var(--gold-soft)_0%,var(--gold)_52%,var(--gold-deep)_100%)] px-7 py-3 text-base font-semibold text-(--ink-900) shadow-[0_14px_30px_rgba(154,116,36,0.35)] transition hover:brightness-105"
            >
              {ctaPrincipalLabel}
            </a>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-white/35 bg-[rgba(255,255,255,0.12)] px-3 py-1 text-xs font-semibold text-[rgba(255,244,230,0.95)]">
                Atendimento individualizado
              </span>
              <span className="rounded-full border border-white/35 bg-[rgba(255,255,255,0.12)] px-3 py-1 text-xs font-semibold text-[rgba(255,244,230,0.95)]">
                Avaliação detalhada
              </span>
              <span className="rounded-full border border-white/35 bg-[rgba(255,255,255,0.12)] px-3 py-1 text-xs font-semibold text-[rgba(255,244,230,0.95)]">
                Protocolos baseados em evidência
              </span>
            </div>
          </div>
        </div>
      </section>

      <main className="px-6 pb-16 sm:px-10 lg:px-16">
        <section className="mx-auto mt-16 w-full max-w-6xl">
          <article className="rounded-3xl border border-(--sand-300)/80 bg-[linear-gradient(160deg,#fff_0%,var(--surface-soft)_100%)] p-8 shadow-[0_16px_30px_rgba(154,116,36,0.08)] sm:p-12">
            <h2 className="text-3xl leading-tight sm:text-4xl">
              Seu cabelo está caindo mais do que o normal?
            </h2>
            <p className="mt-4 max-w-3xl text-base text-(--ink-700) sm:text-lg">
              Muitas pessoas percebem mudanças no volume, na densidade ou no
              conforto do couro cabeludo e demoram para investigar. A avaliação
              clínica precoce ajuda a identificar o que está acontecendo e
              direcionar um tratamento mais seguro.
            </p>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-(--gold-deep)">
              Atendimento personalizado, visão integrativa e protocolos baseados
              em evidência.
            </p>
          </article>
        </section>

        <section className="mx-auto mt-16 w-full max-w-6xl">
          <h2 className="text-3xl sm:text-4xl">Principais Serviços e Abordagens</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="group overflow-hidden rounded-3xl border border-(--sand-300)/85 bg-[linear-gradient(165deg,#fff_0%,var(--surface-soft)_100%)] shadow-[0_14px_28px_rgba(154,116,36,0.08)] transition hover:-translate-y-1 hover:shadow-[0_20px_35px_rgba(154,116,36,0.18)]"
              >
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={1200}
                  height={800}
                  className="h-44 sm:h-46 lg:h-60 w-full object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                />
                <div className="space-y-3 p-6">
                  <h3 className="text-2xl">{service.title}</h3>
                  <p className="text-sm font-semibold uppercase tracking-[0.08em] text-(--gold-deep)">
                    Problema
                  </p>
                  <p className="text-(--ink-700)">{service.problem}</p>
                  <p className="text-sm font-semibold uppercase tracking-[0.08em] text-(--gold-deep)">
                    Resultado Esperado
                  </p>
                  <p className="text-(--ink-700)">{service.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 grid w-full max-w-5xl items-center gap-8 rounded-3xl border border-(--sand-300) bg-[linear-gradient(130deg,#fff_0%,var(--surface-soft)_58%,rgba(231,200,115,0.2)_100%)] p-8 sm:p-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="overflow-hidden rounded-2xl border border-white/70 bg-(--surface)/70">
            <Image
              src="/home/testemunho/dra_roberta.webp"
              alt="Dra. Roberta Cantagalli"
              width={1080}
              height={1417}
              className="h-auto w-full"
              sizes="(max-width: 640px) 88vw, (max-width: 1024px) 42vw, 420px"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--gold-deep)">
              Uma Vivência Que Mudou Minha Prática
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-(--sand-300) bg-(--surface) px-3 py-1 text-xs font-semibold text-(--ink-800)">
                Atendimento Individualizado
              </span>
              <span className="rounded-full border border-(--sand-300) bg-(--surface) px-3 py-1 text-xs font-semibold text-(--ink-800)">
                Conduta Baseada em Evidência
              </span>
            </div>
            <blockquote className="mt-4 space-y-3 text-lg leading-relaxed italic text-(--ink-800) sm:text-xl">
              <p className="indent-6">
                <span className="font-semibold text-(--gold-deep)">&ldquo;</span>{" "}
                Minha jornada pessoal me ensinou que, muitas vezes, estar dentro
                da referência nem sempre significa estar saudável.
              </p>
              <p>
                Eu sei o que é perceber que algo está errado e ouvir que está
                tudo normal. Foi essa experiência que transformou minha forma de
                atuar.
              </p>
              <p>
                Hoje, investigo a queda capilar com o mesmo cuidado que gostaria
                de ter recebido.
              </p>
              <p className="font-semibold text-(--gold-deep)">
                A queda capilar não é um evento isolado: ela é um reflexo.&rdquo;
              </p>
            </blockquote>
          </div>
        </section>

        <section id="contact" className="mx-auto mt-16 w-full max-w-5xl rounded-3xl border border-(--gold-deep)/30 bg-[linear-gradient(160deg,rgba(231,200,115,0.2)_0%,rgba(255,255,255,0.95)_45%,rgba(201,162,74,0.17)_100%)] px-6 py-10 text-center sm:px-10">
          <h2 className="text-3xl sm:text-4xl">Pronta para iniciar seu plano de cuidado?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-(--ink-700)">
            Agende sua avaliação personalizada e receba um protocolo desenhado
            para os seus objetivos de saúde capilar.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="contact"
            data-cta-variant={ctaVariant}
            data-cta-text={ctaPrincipalLabel}
            className="mt-7 inline-flex rounded-full bg-[linear-gradient(135deg,var(--gold-soft)_0%,var(--gold)_52%,var(--gold-deep)_100%)] px-8 py-3 text-base font-semibold text-(--ink-900) shadow-[0_14px_30px_rgba(154,116,36,0.35)] transition hover:brightness-105"
          >
            {ctaPrincipalLabel}
          </a>
        </section>

        <section id="faq" className="mx-auto mt-16 w-full max-w-5xl scroll-mt-24 rounded-3xl border border-(--sand-300) bg-[linear-gradient(145deg,#fff_0%,var(--surface-soft)_100%)] p-8 shadow-[0_16px_30px_rgba(154,116,36,0.08)] sm:p-12">
          <h2 className="text-3xl sm:text-4xl">Perguntas Frequentes</h2>
          <div className="mt-7 space-y-5">
            {faqs.map((faq) => (
              <article key={faq.question}>
                <h3 className="text-lg font-semibold text-(--ink-900)">
                  {faq.question}
                </h3>
                <p className="mt-1 text-(--ink-700)">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

      </main>

      <FloatingWhatsAppCta
        whatsappUrl={whatsappUrl}
        observeElementId="hero-whatsapp-cta"
        ctaVariant={ctaVariant}
        ctaText={ctaPrincipalLabel}
      />
    </div>
  );
}
