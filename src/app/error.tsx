"use client";

import { useEffect } from "react";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Keep production UI calm while still exposing the error to browser diagnostics.
    console.error("Engineering Studio application error");
  }, []);

  return (
    <main className="min-h-screen bg-void px-5 py-16 text-text sm:px-10">
      <div className="mx-auto max-w-4xl industrial-panel p-8 sm:p-12">
        <div className="font-mono text-xs tracking-[0.2em] text-emergency">SYSTEM FAULT // RECOVERABLE</div>
        <h1 className="mt-6 font-display text-4xl font-bold sm:text-6xl">PROCESS INTERRUPTED.</h1>
        <p className="mt-5 max-w-xl font-mono text-sm leading-7 text-text-muted">An unexpected application error interrupted this route. The system can attempt a clean recovery.</p>
        <button onClick={() => reset()} className="mt-10 border border-grid-bright px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] hover:border-hazard hover:text-hazard">Retry process →</button>
      </div>
    </main>
  );
}
