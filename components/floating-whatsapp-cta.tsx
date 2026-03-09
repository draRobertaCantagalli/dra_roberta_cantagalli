"use client";

import { useEffect, useState } from "react";

type FloatingWhatsAppCtaProps = {
  whatsappUrl: string;
  observeElementId: string;
};

export function FloatingWhatsAppCta({
  whatsappUrl,
  observeElementId,
}: FloatingWhatsAppCtaProps) {
  const [hasPassedHeroCta, setHasPassedHeroCta] = useState(false);

  useEffect(() => {
    const observedElement = document.getElementById(observeElementId);

    if (!observedElement) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show the floating CTA only after the hero CTA leaves the viewport.
        setHasPassedHeroCta(!entry.isIntersecting);
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(observedElement);

    return () => observer.disconnect();
  }, [observeElementId]);

  const showMobileCta = hasPassedHeroCta;

  return (
    <>
      {showMobileCta ? (
        <div className="fixed inset-x-0 bottom-0 z-20 border-t p-3 backdrop-blur md:hidden">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto block w-full max-w-xl rounded-full bg-[linear-gradient(135deg,var(--gold-soft)_0%,var(--gold)_52%,var(--gold-deep)_100%)] px-6 py-3 text-center font-semibold text-(--ink-900) shadow-[0_12px_26px_rgba(154,116,36,0.35)]"
          >
            Agende sua avaliação no WhatsApp
          </a>
        </div>
      ) : null}

      <div className="fixed bottom-6 right-6 z-20 hidden animate-[riseIn_320ms_ease-out_both] lg:block">
        <div className="group relative">
          <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-(--gold-deep)/20 bg-(--surface) px-3 py-1 text-xs font-semibold text-(--ink-800) opacity-0 shadow-sm transition group-hover:opacity-100">
            WhatsApp
          </span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar no WhatsApp"
            title="Agendar no WhatsApp"
            className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/45 bg-[linear-gradient(145deg,var(--gold-soft)_0%,var(--gold)_55%,var(--gold-deep)_100%)] text-white shadow-[0_16px_30px_rgba(154,116,36,0.35)] transition hover:scale-105 hover:brightness-105"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.058-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.073c.149.198 2.095 3.2 5.078 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12.004 2.003c-5.514 0-9.985 4.472-9.985 9.986 0 1.762.46 3.485 1.335 5.003L2 22l5.144-1.35a9.94 9.94 0 0 0 4.86 1.258h.004c5.513 0 9.989-4.472 9.989-9.986 0-2.672-1.04-5.184-2.93-7.075a9.92 9.92 0 0 0-7.063-2.844zm0 18.165h-.003a8.27 8.27 0 0 1-4.213-1.152l-.302-.18-3.053.801.815-2.976-.197-.306a8.28 8.28 0 0 1-1.279-4.393c0-4.578 3.723-8.301 8.302-8.301 2.218 0 4.302.863 5.871 2.432a8.25 8.25 0 0 1 2.431 5.869c-.001 4.579-3.724 8.306-8.372 8.306z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
