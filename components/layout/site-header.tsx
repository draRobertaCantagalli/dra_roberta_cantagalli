type SiteHeaderProps = {
  whatsappUrl: string;
  ctaVariant?: "A" | "B";
  ctaText?: string;
};

export function SiteHeader({
  whatsappUrl,
  ctaVariant = "A",
  ctaText = "Agendar avaliação",
}: SiteHeaderProps) {
  return (
    <div className="sticky top-0 z-30 border-b border-(--gold-deep)/20 bg-[rgba(255,255,255,0.82)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3 sm:px-10 lg:px-16">
        <p className="text-sm font-semibold tracking-[0.04em] text-(--ink-900) sm:text-base">
          Dra. Roberta Cantagalli
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="header"
          data-cta-variant={ctaVariant}
          data-cta-text={ctaText}
          className="rounded-full bg-[linear-gradient(135deg,var(--gold-soft)_0%,var(--gold)_55%,var(--gold-deep)_100%)] px-4 py-2 text-xs font-semibold text-(--ink-900) shadow-[0_8px_18px_rgba(154,116,36,0.26)] transition hover:brightness-105 sm:px-5 sm:text-sm"
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
}
