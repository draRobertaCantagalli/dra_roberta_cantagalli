import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-(--gold-deep)/35 bg-[linear-gradient(180deg,var(--surface)_0%,var(--surface-soft)_100%)] px-6 pb-24 pt-8 sm:px-10 md:pb-8 lg:px-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 text-center sm:text-left">
        <p className="text-lg text-(--ink-800)">{siteConfig.trustCopy}</p>
        <p className="text-sm text-(--ink-700)">{siteConfig.footerCopy}</p>
        <p className="text-xs uppercase tracking-[0.16em] text-(--gold-deep)">
          {year} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
