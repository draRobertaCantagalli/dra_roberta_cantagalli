import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-(--gold-deep)/35 bg-[linear-gradient(180deg,var(--surface)_0%,var(--surface-soft)_100%)] px-6 pb-36 pt-8 sm:px-10 md:pb-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 text-center sm:text-left">
        <p className="text-lg text-(--ink-800)">{siteConfig.trustCopy}</p>
        <p className="text-sm text-(--ink-700)">{siteConfig.footerCopy}</p>
        <p className="text-xs uppercase tracking-[0.16em] text-(--gold-deep)">
          © {year} {siteConfig.name}
        </p>
        <p className="text-[0.55rem] text-[rgba(107,107,107,0.8)] lg:text-[0.75rem]">
          <a
            href={siteConfig.developerCredit.contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-(--ink-700)"
          >
            {siteConfig.developerCredit.label}
          </a>
        </p>
      </div>
    </footer>
  );
}
