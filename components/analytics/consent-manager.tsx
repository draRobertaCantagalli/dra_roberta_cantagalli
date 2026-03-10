"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { GaTracking } from "@/components/analytics/ga-tracking";

const CONSENT_KEY = "cookie_consent_v1";

type ConsentState = "granted" | "denied" | null;

type ConsentManagerProps = {
  gaId: string;
};

function readConsent(): ConsentState {
  if (typeof window === "undefined") {
    return null;
  }

  const value = window.localStorage.getItem(CONSENT_KEY);
  if (value === "granted" || value === "denied") {
    return value;
  }

  return null;
}

function saveConsent(value: Exclude<ConsentState, null>) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(CONSENT_KEY, value);
  window.dispatchEvent(new Event("cookie-consent-change"));
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handler = () => onStoreChange();
  window.addEventListener("storage", handler);
  window.addEventListener("cookie-consent-change", handler);

  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener("cookie-consent-change", handler);
  };
}

function getSnapshot(): ConsentState {
  return readConsent();
}

function getServerSnapshot(): ConsentState {
  return null;
}

export function ConsentManager({ gaId }: ConsentManagerProps) {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const handleChoice = (value: Exclude<ConsentState, null>) => {
    saveConsent(value);
  };

  return (
    <>
      {consent === "granted" ? <GaTracking gaId={gaId} /> : null}

      {consent === null ? (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-(--gold-deep)/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(247,244,236,0.98)_100%)] px-4 py-4 shadow-[0_-10px_24px_rgba(0,0,0,0.08)] backdrop-blur">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="max-w-3xl text-sm leading-relaxed text-(--ink-800)">
              Usamos cookies e tecnologias similares para medir desempenho e
              melhorar sua experiencia. Voce pode aceitar ou recusar os cookies
              analiticos. Leia nossa{" "}
              <Link
                href="/politica-de-privacidade"
                className="font-semibold text-(--gold-deep) underline-offset-2 hover:underline"
              >
                Politica de Privacidade
              </Link>
              .
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => handleChoice("denied")}
                className="rounded-full border border-(--sand-300) bg-(--surface) px-4 py-2 text-sm font-semibold text-(--ink-800) transition hover:border-(--gold-deep)/30"
              >
                Recusar
              </button>
              <button
                type="button"
                onClick={() => handleChoice("granted")}
                className="rounded-full bg-[linear-gradient(135deg,var(--gold-soft)_0%,var(--gold)_52%,var(--gold-deep)_100%)] px-4 py-2 text-sm font-semibold text-(--ink-900) shadow-[0_8px_20px_rgba(154,116,36,0.28)] transition hover:brightness-105"
              >
                Aceitar
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
