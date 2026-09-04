import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-void px-5 py-16 text-text sm:px-10">
      <div className="mx-auto max-w-4xl industrial-panel p-8 sm:p-12">
        <div className="font-mono text-xs tracking-[0.2em] text-emergency">FAULT // 404</div>
        <h1 className="mt-6 font-display text-5xl font-bold sm:text-7xl">NODE NOT FOUND.</h1>
        <p className="mt-6 max-w-xl font-mono text-sm leading-7 text-text-muted">The requested engineering record does not exist in the current system index.</p>
        <Link href="/" className="mt-10 inline-flex border border-grid-bright px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] hover:border-hazard hover:text-hazard">Return to command surface →</Link>
      </div>
    </main>
  );
}
