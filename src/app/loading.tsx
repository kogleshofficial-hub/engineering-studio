export default function Loading() {
  return (
    <main className="min-h-screen bg-void p-6 text-text lg:p-12" aria-busy="true" aria-label="Loading Engineering Studio">
      <div className="mx-auto max-w-[1600px] border border-grid">
        <div className="border-b border-grid p-5 text-[10px] tracking-[0.25em] text-text-muted">
          ENGINEERING<span className="text-hazard">//</span>STUDIO / INITIALIZING
        </div>
        <div className="engineering-grid-dense flex min-h-[60vh] items-center justify-center p-8">
          <div className="w-full max-w-md border border-grid bg-surface p-6">
            <div className="flex items-center justify-between text-[9px] tracking-[0.2em]">
              <span className="text-text-dim">SYSTEM BOOT</span>
              <span className="text-hazard">PROCESSING</span>
            </div>
            <div className="mt-5 h-1 bg-grid">
              <div className="h-full w-2/3 bg-hazard" />
            </div>
            <p className="mt-4 text-[10px] leading-6 text-text-dim">Loading engineering interface and system records.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
