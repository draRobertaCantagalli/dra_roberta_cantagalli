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
  const [showFloatingCta, setShowFloatingCta] = useState(false);

  useEffect(() => {
    const observedElement = document.getElementById(observeElementId);

    if (!observedElement) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show the floating CTA only after the hero CTA leaves the viewport.
        setShowFloatingCta(!entry.isIntersecting);
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(observedElement);

    return () => observer.disconnect();
  }, [observeElementId]);

  if (!showFloatingCta) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-20 border-t border-(--gold-deep)/35 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,244,236,0.98))] p-3 backdrop-blur md:hidden">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto block w-full max-w-xl rounded-full bg-[linear-gradient(135deg,var(--gold-soft)_0%,var(--gold)_52%,var(--gold-deep)_100%)] px-6 py-3 text-center font-semibold text-(--ink-900) shadow-[0_12px_26px_rgba(154,116,36,0.35)]"
      >
        Agende sua avaliação no WhatsApp
      </a>
    </div>
  );
}
