const labs = ["LAB-001 / CONNECTED SENSOR FABRIC", "LAB-002 / EDGE VISION NODE", "LAB-003 / AUTONOMOUS DATA SURFACE"];

export default function LabsPage() {
  return <main className="min-h-screen bg-void p-6 text-text lg:p-12"><div className="mx-auto max-w-6xl border border-grid bg-surface p-8 lg:p-12"><p className="text-[10px] tracking-[0.3em] text-hazard">LABS / INDEX</p><h1 className="mt-6 font-display text-6xl font-black uppercase leading-none">Integrated Labs</h1><div className="mt-10 grid gap-px border border-grid bg-grid">{labs.map(lab => <div key={lab} className="bg-surface p-5 text-xs tracking-widest hover:bg-surface-2">{lab}</div>)}</div><a href="/" className="mt-10 inline-block border border-grid px-5 py-3 text-[10px] tracking-[0.2em] hover:border-hazard hover:text-hazard">← RETURN TO CONTROL SURFACE</a></div></main>;
}
