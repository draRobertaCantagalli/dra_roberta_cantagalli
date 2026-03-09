import Image from "next/image";
import {
  approachFoundations,
  differentiatedApproach,
  faqs,
  heroBackground,
  services,
  whoCanBeTreated,
} from "@/lib/home-content";

export default function Home() {
  return (
    <div className="bg-[var(--sand-50)] text-[var(--ink-900)]">
      <header className="relative isolate overflow-hidden border-b border-[var(--sand-300)]/70 px-6 pb-16 pt-12 sm:px-10 sm:pt-16 lg:px-16 lg:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:hidden"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(34,26,19,0.22) 0%, rgba(34,26,19,0.58) 72%, rgba(34,26,19,0.72) 100%), url(${heroBackground.mobile})`,
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat lg:block"
          style={{
            backgroundImage: `linear-gradient(104deg, rgba(34,26,19,0.76) 0%, rgba(34,26,19,0.52) 42%, rgba(34,26,19,0.22) 74%, rgba(34,26,19,0.10) 100%), url(${heroBackground.desktop})`,
          }}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_8%,rgba(255,247,236,0.22),transparent_40%)]" />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl items-end lg:min-h-[72vh]">
          <div className="w-full max-w-3xl space-y-7 rounded-3xl border border-white/35 bg-[rgba(255,248,238,0.18)] p-6 text-[var(--surface)] backdrop-blur-[2px] sm:p-8 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
            <p className="inline-flex rounded-full border border-[var(--gold)]/60 bg-[rgba(245,229,211,0.24)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sand-50)]">
              Dra. Roberta Cantagalli
            </p>

            <h1 className="text-4xl leading-[1.02] sm:text-5xl lg:text-7xl">
              Tricologia e Saude Capilar Integrativa
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-[rgba(255,244,230,0.96)] sm:text-xl">
              Tratamentos avancados para queda capilar, calvicie e falhas,
              com protocolos modernos focados em resultados naturais.
            </p>

            <p className="max-w-2xl text-base leading-relaxed text-[rgba(255,244,230,0.9)] sm:text-lg">
              Meu compromisso e oferecer cuidado clinico individualizado,
              acompanhando de perto cada paciente com as melhores tecnologias
              para restaurar a saude e a confianca dos seus cabelos.
            </p>

            <a
              href="#contact"
              className="inline-flex rounded-full bg-[var(--gold)] px-7 py-3 text-base font-semibold text-[var(--ink-900)] shadow-[0_10px_24px_rgba(180,146,104,0.35)] transition hover:bg-[var(--gold-soft)]"
            >
              Agende sua avaliacao
            </a>
          </div>
        </div>
      </header>

      <main className="px-6 pb-24 sm:px-10 lg:px-16">
        <section className="mx-auto mt-16 grid w-full max-w-6xl gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="rounded-3xl border border-[var(--sand-300)] bg-[var(--surface)] p-8 shadow-sm sm:p-12">
            <h2 className="text-3xl leading-tight sm:text-4xl">
              Seu cabelo esta caindo mais do que o normal?
            </h2>
            <p className="mt-4 max-w-3xl text-base text-[var(--ink-700)] sm:text-lg">
              Muitas pessoas percebem mudancas no volume, na densidade ou no
              conforto do couro cabeludo e demoram para investigar. A avaliacao
              clinica precoce ajuda a identificar o que esta acontecendo e
              direcionar um tratamento mais seguro.
            </p>
          </article>

          <article className="rounded-3xl border border-[var(--sand-300)] bg-[var(--surface)] p-8 shadow-sm sm:p-12">
            <h2 className="text-3xl sm:text-4xl">Abordagem Diferenciada</h2>
            <div className="mt-5 space-y-3">
              {differentiatedApproach.map((item) => (
                <p key={item.label} className="text-base text-[var(--ink-700)] sm:text-lg">
                  {item.label}
                </p>
              ))}
            </div>
            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold-deep)]">
                Pilares
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                {approachFoundations.map((item) => (
                  <span
                    key={item.label}
                    className="rounded-full border border-[var(--sand-300)] bg-[var(--surface-soft)] px-4 py-2 text-sm font-semibold text-[var(--ink-800)]"
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section className="mx-auto mt-16 w-full max-w-6xl">
          <h2 className="text-3xl sm:text-4xl">Principais Servicos e Abordagens</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="group overflow-hidden rounded-3xl border border-[var(--sand-300)] bg-[var(--surface)] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
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
                  <p className="text-[var(--ink-700)]">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 grid w-full max-w-5xl items-center gap-8 rounded-3xl border border-[var(--sand-300)] bg-[linear-gradient(130deg,var(--surface)_0%,var(--surface-soft)_100%)] p-8 sm:p-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="overflow-hidden rounded-2xl border border-white/70 bg-[var(--surface)]/70">
            <Image
              src="/home/testemunho/dra_roberta.jpg"
              alt="Dra. Roberta Cantagalli"
              width={720}
              height={840}
              className="h-auto w-full"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold-deep)]">
              Sobre e Depoimento
            </p>
            <blockquote className="mt-4 text-xl italic leading-relaxed text-[var(--ink-800)] sm:text-2xl">
              &quot;Minha jornada pessoal me ensinou que estar &#39;dentro dos
              valores de referencia&#39; nem sempre significa estar saudavel.
              Hoje, investigo a queda capilar com o mesmo cuidado que eu
              gostaria de ter recebido...&quot;
            </blockquote>
          </div>
        </section>

        <section id="contact" className="mx-auto mt-16 w-full max-w-5xl text-center">
          <h2 className="text-3xl sm:text-4xl">Pronta para iniciar seu plano de cuidado?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--ink-700)]">
            Agende sua avaliacao personalizada e receba um protocolo desenhado
            para os seus objetivos de saude capilar.
          </p>
          <a
            href="#"
            className="mt-7 inline-flex rounded-full bg-[var(--gold)] px-8 py-3 text-base font-semibold text-[var(--ink-900)] shadow-[0_10px_24px_rgba(186,156,119,0.38)] transition hover:bg-[var(--gold-soft)]"
          >
            Entrar em contato
          </a>
        </section>

        <section className="mx-auto mt-16 w-full max-w-5xl rounded-3xl border border-[var(--sand-300)] bg-[var(--surface)] p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl">Perguntas Frequentes</h2>
          <div className="mt-7 space-y-5">
            <article>
              <h3 className="text-lg font-semibold text-[var(--ink-900)]">
                Quem pode ser tratado?
              </h3>
              <div className="mt-2 space-y-1">
                {whoCanBeTreated.map((item) => (
                  <p key={item.label} className="text-[var(--ink-700)]">
                    {item.label}
                  </p>
                ))}
              </div>
            </article>
            {faqs.map((faq) => (
              <article key={faq.question}>
                <h3 className="text-lg font-semibold text-[var(--ink-900)]">
                  {faq.question}
                </h3>
                <p className="mt-1 text-[var(--ink-700)]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

      </main>

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-[var(--sand-300)] bg-[var(--surface)]/95 p-3 backdrop-blur md:hidden">
        <a
          href="#contact"
          className="mx-auto block w-full max-w-xl rounded-full bg-[var(--gold)] px-6 py-3 text-center font-semibold text-[var(--ink-900)] shadow-[0_10px_24px_rgba(186,156,119,0.38)]"
        >
          Agende sua avaliacao
        </a>
      </div>
    </div>
  );
}
