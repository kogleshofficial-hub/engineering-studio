const members = [
  { id: "UNIT-01", name: "Koglesh R. Murugan", role: "FULL-STACK SOFTWARE ENGINEER", stack: "NEXT.JS · TYPESCRIPT · SUPABASE · POSTGRESQL · VERCEL" },
  { id: "UNIT-02", name: "Yennamutan Muthukumaran", role: "HARDWARE · IOT · AI ENGINEER", stack: "PYTHON · TENSORFLOW · OPENCV · ESP32 · EMBEDDED SYSTEMS" },
];

export default function TeamPage() {
  return <main className="min-h-screen bg-void p-6 text-text lg:p-12"><div className="mx-auto max-w-6xl border border-grid bg-surface p-8 lg:p-12"><p className="text-[10px] tracking-[0.3em] text-hazard">UNIT / PERSONNEL</p><h1 className="mt-6 font-display text-6xl font-black uppercase leading-none">Engineering Unit</h1><div className="mt-10 grid gap-px border border-grid bg-grid md:grid-cols-2">{members.map(member => <article key={member.id} className="bg-surface p-7"><p className="text-[9px] tracking-[0.25em] text-text-dim">{member.id}</p><h2 className="mt-6 font-display text-3xl font-black uppercase">{member.name}</h2><p className="mt-4 text-[10px] tracking-[0.2em] text-hazard">{member.role}</p><p className="mt-6 text-xs leading-6 text-text-muted">{member.stack}</p></article>)}</div><a href="/" className="mt-10 inline-block border border-grid px-5 py-3 text-[10px] tracking-[0.2em] hover:border-hazard hover:text-hazard">← RETURN TO CONTROL SURFACE</a></div></main>;
}
