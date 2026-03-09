import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--sand-300)] bg-[var(--surface)] px-6 py-8 sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 text-center sm:text-left">
        <p className="text-lg text-[var(--ink-800)]">{siteConfig.trustCopy}</p>
        <p className="text-sm text-[var(--ink-700)]">{siteConfig.footerCopy}</p>
        <p className="text-xs uppercase tracking-[0.16em] text-[var(--gold-deep)]">
          {year} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
