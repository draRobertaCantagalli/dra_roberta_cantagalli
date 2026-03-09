import Image from "next/image";
import { FloatingWhatsAppCta } from "@/components/floating-whatsapp-cta";
import {
  approachFoundations,
  differentiatedApproach,
  faqs,
  heroBackground,
  services,
  whoCanBeTreated,
} from "@/lib/home-content";

export default function Home() {
  const whatsappPhone = "5511955803300";
  const whatsappMessage =
    "Olá! Gostaria de agendar uma avaliação capilar com a Dra. Roberta.";
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-(--sand-50) text-(--ink-900)">
      <header className="relative isolate overflow-hidden border-b border-(--gold-deep)/35 px-6 pb-16 pt-12 sm:px-10 sm:pt-16 lg:px-16 lg:py-24">
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

            <h1 className="text-4xl leading-[1.02] sm:text-5xl lg:text-7xl">
              Tricologia e Saúde Capilar Integrativa
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-[rgba(255,244,230,0.96)] sm:text-xl">
              Tratamentos avançados para queda capilar, calvície e falhas,
              com protocolos modernos focados em resultados naturais.
            </p>

            <p className="max-w-2xl text-base leading-relaxed text-[rgba(255,244,230,0.9)] sm:text-lg">
              Meu compromisso é oferecer cuidado clínico individualizado,
              acompanhando de perto cada paciente com as melhores tecnologias
              para restaurar a saúde e a confiança dos seus cabelos.
            </p>

            <a
              id="hero-whatsapp-cta"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-[linear-gradient(135deg,var(--gold-soft)_0%,var(--gold)_52%,var(--gold-deep)_100%)] px-7 py-3 text-base font-semibold text-(--ink-900) shadow-[0_14px_30px_rgba(154,116,36,0.35)] transition hover:brightness-105"
            >
              Agende sua avaliação no WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main className="px-6 pb-24 sm:px-10 lg:px-16">
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
                  width={480}
                  height={320}
                  className="h-44 w-full object-cover"
                />
                <div className="space-y-3 p-6">
                  <h3 className="text-2xl">{service.title}</h3>
                  <p className="text-(--ink-700)">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 grid w-full max-w-5xl items-center gap-8 rounded-3xl border border-(--sand-300) bg-[linear-gradient(130deg,#fff_0%,var(--surface-soft)_58%,rgba(231,200,115,0.2)_100%)] p-8 sm:p-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="overflow-hidden rounded-2xl border border-white/70 bg-(--surface)/70">
            <Image
              src="/home/testemunho/dra_roberta.jpg"
              alt="Dra. Roberta Cantagalli"
              width={720}
              height={840}
              className="h-auto w-full"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--gold-deep)">
              Sobre e Depoimento
            </p>
            <blockquote className="mt-4 text-xl italic leading-relaxed text-(--ink-800) sm:text-2xl">
              &quot;Minha jornada pessoal me ensinou que estar &#39;dentro dos
              valores de referência&#39; nem sempre significa estar saudável.
              Hoje, investigo a queda capilar com o mesmo cuidado que eu
              gostaria de ter recebido...&quot;
            </blockquote>
          </div>
        </section>

        <section className="mx-auto mt-16 w-full max-w-5xl rounded-3xl border border-(--sand-300)/80 bg-[linear-gradient(145deg,#fff_0%,var(--surface-soft)_100%)] p-8 shadow-[0_16px_30px_rgba(154,116,36,0.08)] sm:p-12">
          <h2 className="text-3xl sm:text-4xl">Abordagem Diferenciada</h2>
          <div className="mt-5 space-y-3">
            {differentiatedApproach.map((item) => (
              <p key={item.label} className="text-base text-(--ink-700) sm:text-lg">
                {item.label}
              </p>
            ))}
          </div>
          <div className="mt-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--gold-deep)">
              Pilares
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {approachFoundations.map((item) => (
                <span
                  key={item.label}
                  className="rounded-full border border-(--sand-300) bg-[linear-gradient(145deg,var(--surface-soft),#fff)] px-4 py-2 text-sm font-semibold text-(--ink-800)"
                >
                  {item.label}
                </span>
              ))}
            </div>
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
            className="mt-7 inline-flex rounded-full bg-[linear-gradient(135deg,var(--gold-soft)_0%,var(--gold)_52%,var(--gold-deep)_100%)] px-8 py-3 text-base font-semibold text-(--ink-900) shadow-[0_14px_30px_rgba(154,116,36,0.35)] transition hover:brightness-105"
          >
            Falar no WhatsApp
          </a>
        </section>

        <section className="mx-auto mt-16 w-full max-w-5xl rounded-3xl border border-(--sand-300) bg-[linear-gradient(145deg,#fff_0%,var(--surface-soft)_100%)] p-8 shadow-[0_16px_30px_rgba(154,116,36,0.08)] sm:p-12">
          <h2 className="text-3xl sm:text-4xl">Perguntas Frequentes</h2>
          <div className="mt-7 space-y-5">
            <article>
              <h3 className="text-lg font-semibold text-(--ink-900)">
                Quem pode ser tratado?
              </h3>
              <div className="mt-2 space-y-1">
                {whoCanBeTreated.map((item) => (
                  <p key={item.label} className="text-(--ink-700)">
                    {item.label}
                  </p>
                ))}
              </div>
            </article>
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
      />
    </div>
  );
}
