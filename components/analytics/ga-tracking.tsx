"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type MarketingAttribution = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  fbclid?: string;
  ttclid?: string;
};

const ATTR_KEY = "marketing_attribution_v1";
const ATTR_MARKER = "[origem]";
const BOT_UA_REGEX =
  /bot|crawler|spider|crawling|HeadlessChrome|Lighthouse|PageSpeed|GTmetrix|Pingdom|BingPreview|facebookexternalhit|Slackbot|Discordbot|Vercelbot|Google-InspectionTool|GoogleOther/i;

function isLikelyBotUserAgent(): boolean {
  if (typeof navigator === "undefined") {
    return false;
  }

  const ua = navigator.userAgent || "";
  return BOT_UA_REGEX.test(ua) || navigator.webdriver === true;
}

function readStoredAttribution(): MarketingAttribution {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const raw = window.localStorage.getItem(ATTR_KEY);
    return raw ? (JSON.parse(raw) as MarketingAttribution) : {};
  } catch {
    return {};
  }
}

function persistAttribution(value: MarketingAttribution) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(ATTR_KEY, JSON.stringify(value));
}

function readAttributionFromUrl(): MarketingAttribution {
  if (typeof window === "undefined") {
    return {};
  }

  const params = new URLSearchParams(window.location.search);

  return {
    utm_source: params.get("utm_source") || undefined,
    utm_medium: params.get("utm_medium") || undefined,
    utm_campaign: params.get("utm_campaign") || undefined,
    utm_content: params.get("utm_content") || undefined,
    utm_term: params.get("utm_term") || undefined,
    gclid: params.get("gclid") || undefined,
    fbclid: params.get("fbclid") || undefined,
    ttclid: params.get("ttclid") || undefined,
  };
}

function mergeAttribution(
  stored: MarketingAttribution,
  fromUrl: MarketingAttribution,
): MarketingAttribution {
  return {
    utm_source: fromUrl.utm_source || stored.utm_source,
    utm_medium: fromUrl.utm_medium || stored.utm_medium,
    utm_campaign: fromUrl.utm_campaign || stored.utm_campaign,
    utm_content: fromUrl.utm_content || stored.utm_content,
    utm_term: fromUrl.utm_term || stored.utm_term,
    gclid: fromUrl.gclid || stored.gclid,
    fbclid: fromUrl.fbclid || stored.fbclid,
    ttclid: fromUrl.ttclid || stored.ttclid,
  };
}

function buildAttributionSummary(attr: MarketingAttribution): string {
  const parts = [
    attr.utm_source ? `source=${attr.utm_source}` : null,
    attr.utm_medium ? `medium=${attr.utm_medium}` : null,
    attr.utm_campaign ? `campaign=${attr.utm_campaign}` : null,
    attr.utm_content ? `content=${attr.utm_content}` : null,
    attr.utm_term ? `term=${attr.utm_term}` : null,
    attr.gclid ? `gclid=${attr.gclid}` : null,
    attr.fbclid ? `fbclid=${attr.fbclid}` : null,
    attr.ttclid ? `ttclid=${attr.ttclid}` : null,
  ].filter(Boolean);

  return parts.join(" | ");
}

function attachAttributionToWhatsappLinks(attr: MarketingAttribution) {
  if (typeof window === "undefined") {
    return;
  }

  const summary = buildAttributionSummary(attr);
  if (!summary) {
    return;
  }

  const links = document.querySelectorAll<HTMLAnchorElement>(
    'a[data-cta][href^="https://wa.me/"]',
  );

  links.forEach((link) => {
    try {
      const url = new URL(link.href);
      const text = url.searchParams.get("text") || "";

      if (text.includes(ATTR_MARKER)) {
        return;
      }

      const updatedText = `${text}\n\n${ATTR_MARKER} ${summary}`;
      url.searchParams.set("text", updatedText);
      link.href = url.toString();
    } catch {
      // Ignore malformed URLs.
    }
  });
}

function trackWhatsappClick(
  ctaPosition: string,
  ctaVariant: string,
  ctaText: string,
  attr: MarketingAttribution,
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "whatsapp_click", {
    event_category: "engagement",
    event_label: ctaPosition,
    cta_position: ctaPosition,
    cta_variant: ctaVariant,
    cta_text: ctaText,
    source: attr.utm_source || "direct",
    medium: attr.utm_medium || "none",
    campaign: attr.utm_campaign || "none",
  });
}

function trackPageView(attr: MarketingAttribution) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "page_view", {
    page_title: document.title,
    page_location: window.location.href,
    page_path: `${window.location.pathname}${window.location.search}`,
    source: attr.utm_source || "direct",
    medium: attr.utm_medium || "none",
    campaign: attr.utm_campaign || "none",
    utm_content: attr.utm_content || "none",
    utm_term: attr.utm_term || "none",
    gclid: attr.gclid || "none",
    fbclid: attr.fbclid || "none",
    ttclid: attr.ttclid || "none",
  });
}

function trackPageViewWhenReady(attr: MarketingAttribution, retries = 10) {
  if (typeof window === "undefined") {
    return;
  }

  if (typeof window.gtag === "function") {
    trackPageView(attr);
    return;
  }

  if (retries <= 0) {
    return;
  }

  window.setTimeout(() => trackPageViewWhenReady(attr, retries - 1), 250);
}

type GaTrackingProps = {
  gaId: string;
};

export function GaTracking({ gaId }: GaTrackingProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isLikelyBotUserAgent()) {
      return;
    }

    const mergedAttribution = mergeAttribution(
      readStoredAttribution(),
      readAttributionFromUrl(),
    );

    persistAttribution(mergedAttribution);
    attachAttributionToWhatsappLinks(mergedAttribution);

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest("a[data-cta]") as HTMLAnchorElement | null;

      if (!link) {
        return;
      }

      const ctaPosition = link.dataset.cta || "unknown";
      const ctaVariant = link.dataset.ctaVariant || "A";
      const ctaText =
        link.dataset.ctaText ||
        link.textContent?.trim() ||
        link.getAttribute("aria-label") ||
        "unknown";
      trackWhatsappClick(
        ctaPosition,
        ctaVariant,
        ctaText,
        readStoredAttribution(),
      );
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (isLikelyBotUserAgent()) {
      return;
    }

    const mergedAttribution = mergeAttribution(
      readStoredAttribution(),
      readAttributionFromUrl(),
    );

    trackPageViewWhenReady(mergedAttribution);
  }, [pathname]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          var ua = navigator.userAgent || '';
          var isBot = /bot|crawler|spider|crawling|HeadlessChrome|Lighthouse|PageSpeed|GTmetrix|Pingdom|BingPreview|facebookexternalhit|Slackbot|Discordbot|Vercelbot|Google-InspectionTool|GoogleOther/i.test(ua);
          if (isBot || navigator.webdriver === true) {
            window.__gaBlockedForBot = true;
          } else {
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${gaId}', { send_page_view: false });
          }
        `}
      </Script>
    </>
  );
}
