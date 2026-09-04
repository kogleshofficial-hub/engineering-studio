export default function ArchitecturePage() {
  return (
    <main className="min-h-screen bg-void p-6 text-text lg:p-12">
      <div className="mx-auto max-w-6xl border border-grid bg-surface p-8 lg:p-12">
        <p className="text-[10px] tracking-[0.3em] text-hazard">SYS-ARCH / REV 01</p>
        <h1 className="mt-6 font-display text-5xl font-black uppercase leading-none lg:text-8xl">System Architecture</h1>
        <p className="mt-8 max-w-2xl text-sm leading-7 text-text-muted">The architecture surface will expose physical, edge, interface, data and deployment boundaries as the studio portfolio expands.</p>
        <a href="/" className="mt-10 inline-block border border-grid px-5 py-3 text-[10px] tracking-[0.2em] hover:border-hazard hover:text-hazard">← RETURN TO CONTROL SURFACE</a>
      </div>
    </main>
  );
}
