const telemetry = [
  ["BUILD", "PASS", "operational"],
  ["DEPLOY", "READY", "operational"],
  ["TELEMETRY", "SIMULATION", "info"],
  ["FAULTS", "00", "operational"],
];

const labs = [
  { id: "LAB-001", slug: "connected-sensor-fabric", title: "CONNECTED SENSOR FABRIC", tag: "IOT × CLOUD", metric: "SYSTEM STUDY", label: "STATUS: ACTIVE DESIGN" },
  { id: "LAB-002", slug: "edge-vision-node", title: "EDGE VISION NODE", tag: "CV × AI", metric: "SYSTEM STUDY", label: "STATUS: ACTIVE DESIGN" },
  { id: "LAB-003", slug: "autonomous-data-surface", title: "AUTONOMOUS DATA SURFACE", tag: "WEB × TELEMETRY", metric: "SYSTEM STUDY", label: "STATUS: ACTIVE DESIGN" },
];

const stack = [
  ["PHYSICAL", "ESP32 / ARDUINO", "SENSORS", "CIRCUITS"],
  ["EDGE", "PYTHON", "OPENCV", "TENSORFLOW"],
  ["INTERFACE", "NEXT.JS", "TYPESCRIPT", "REACT"],
  ["DATA", "SUPABASE", "POSTGRESQL", "REALTIME"],
  ["DEPLOY", "VERCEL", "CI/CD", "OBSERVABILITY"],
];

function Frame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`border border-grid bg-surface ${className}`}>{children}</section>;
}

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-4 text-[10px] font-semibold tracking-[0.28em] text-text-muted">
      <span className="text-hazard">{index}</span><span className="h-px w-8 bg-grid" />{children}
    </div>
  );
}

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-void text-text selection:bg-hazard selection:text-void">
      <header className="sticky top-0 z-20 border-b border-grid bg-void/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <a href="#top" className="w-fit text-xs font-bold tracking-[0.3em] text-text focus-visible:outline-2 focus-visible:outline-hazard">ENGINEERING<span className="text-hazard">//</span>STUDIO</a>
          <nav aria-label="Primary navigation" className="flex flex-wrap gap-x-5 gap-y-2 text-[10px] tracking-[0.2em] text-text-muted">
            <a href="/labs" className="hover:text-hazard focus-visible:outline-2 focus-visible:outline-hazard">LABS</a>
            <a href="/systems" className="hover:text-hazard focus-visible:outline-2 focus-visible:outline-hazard">SYSTEMS</a>
            <a href="/architecture" className="hover:text-hazard focus-visible:outline-2 focus-visible:outline-hazard">ARCHITECTURE</a>
            <a href="/command" className="hover:text-hazard focus-visible:outline-2 focus-visible:outline-hazard">COMMAND</a>
            <a href="/team" className="hover:text-hazard focus-visible:outline-2 focus-visible:outline-hazard">UNIT</a>
          </nav>
          <div className="flex items-center gap-2 text-[10px] tracking-widest whitespace-nowrap"><span className="h-2 w-2 bg-operational" aria-hidden="true" /> OPERATIONAL</div>
        </div>
      </header>

      <div className="engineering-grid">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-8">
          <section className="grid min-h-[calc(100vh-91px)] items-end border-x border-grid lg:grid-cols-[1.35fr_.65fr]">
            <div className="border-t border-grid px-5 pb-16 pt-24 lg:px-12 lg:pb-24">
              <div className="mb-8 flex flex-wrap items-center gap-3 text-[10px] tracking-[0.3em] text-text-muted">
                <span className="bg-hazard px-2 py-1 font-bold text-void">SYS-000</span>
                AUTONOMOUS ENGINEERING UNIT
              </div>
              <h1 className="max-w-5xl font-display text-[clamp(3.4rem,8vw,8.8rem)] font-black uppercase leading-[0.82] tracking-[-0.055em]">Hardware<br /><span className="text-hazard">×</span> Software<br />As One System.</h1>
              <p className="mt-10 max-w-2xl border-l-2 border-hazard pl-5 text-sm leading-7 text-text-muted lg:text-base">We engineer connected systems across physical devices, edge intelligence, data infrastructure and production interfaces.</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="/command" className="border border-hazard bg-hazard px-5 py-3 text-[10px] font-bold tracking-[0.2em] text-void transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-hazard">OPEN COMMAND CENTER →</a>
                <a href="/labs" className="border border-grid px-5 py-3 text-[10px] font-bold tracking-[0.2em] text-text-muted hover:border-grid-bright hover:text-text focus-visible:outline-2 focus-visible:outline-hazard">VIEW LABS</a>
              </div>
            </div>
            <div className="grid border-t border-grid lg:min-h-[420px] lg:grid-rows-[1fr_auto]">
              <div className="engineering-grid-dense scanline relative flex items-end p-6 lg:p-10">
                <div className="absolute left-6 top-6 text-[9px] tracking-[0.25em] text-text-dim">CONTROL SURFACE / REV 02</div>
                <div className="w-full border border-grid bg-void/90 p-5">
                  <div className="mb-5 flex justify-between text-[9px] tracking-widest text-text-muted"><span>SYSTEM STATUS</span><span className="text-operational">OPERATIONAL</span></div>
                  <div className="h-1 bg-grid"><div className="h-full w-[87%] bg-operational" /></div>
                  <div className="mt-3 flex justify-between text-[9px] text-text-dim"><span>DESIGN READINESS</span><span>87%</span></div>
                  <div className="mt-5 grid grid-cols-3 gap-px border border-grid bg-grid text-center text-[8px] tracking-wider">
                    <div className="bg-surface p-3"><span className="block text-text-dim">LAYER</span><span className="mt-1 block">05</span></div>
                    <div className="bg-surface p-3"><span className="block text-text-dim">FAULTS</span><span className="mt-1 block text-operational">00</span></div>
                    <div className="bg-surface p-3"><span className="block text-text-dim">MODE</span><span className="mt-1 block text-hazard">SIM</span></div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 border-t border-grid">
                <div className="p-5"><div className="text-[9px] tracking-widest text-text-dim">UNIT</div><div className="mt-2 text-xs">KOGLESH + YENNA</div></div>
                <div className="border-l border-grid p-5"><div className="text-[9px] tracking-widest text-text-dim">BASE</div><div className="mt-2 text-xs">MALAYSIA / MY</div></div>
              </div>
            </div>
          </section>
          <section aria-label="System telemetry" className="border-x border-t border-grid">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {telemetry.map(([name, value, state]) => (
                <div key={name} className="border-b border-grid p-5 md:border-r last:md:border-r-0"><div className="text-[9px] tracking-[0.25em] text-text-dim">{name}</div><div className={`mt-2 text-lg font-bold ${state === "operational" ? "text-operational" : "text-info"}`}>{value}</div></div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-5 lg:px-8">
        <section id="labs" className="border-x border-grid px-5 py-20 lg:px-12 lg:py-28">
          <SectionLabel index="01">INTEGRATED LABS</SectionLabel>
          <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_2fr]"><h2 className="font-display text-4xl font-black uppercase leading-none tracking-tight lg:text-6xl">Physical<br /><span className="text-hazard">Meets</span><br />Digital.</h2><p className="max-w-2xl text-sm leading-7 text-text-muted">Joint systems pair edge hardware and local intelligence with reliable cloud pipelines and live interfaces. Case studies expose the architecture instead of hiding it behind marketing language.</p></div>
          <div className="grid gap-px border border-grid bg-grid lg:grid-cols-3">
            {labs.map((lab) => (
              <Frame key={lab.id} className="group bg-surface p-5 transition-colors hover:bg-surface-2">
                <div className="flex justify-between text-[9px] tracking-[0.22em] text-text-dim"><span>{lab.id}</span><span className="text-hazard">{lab.tag}</span></div>
                <a href={`/labs/${lab.slug}`} className="block focus-visible:outline-2 focus-visible:outline-hazard">
                  <div className="engineering-grid-dense scanline my-7 flex aspect-[4/3] items-center justify-center border border-grid transition-colors group-hover:border-grid-bright"><div className="text-center text-[9px] tracking-[0.2em] text-text-dim">SCHEMATIC / CASE FILE<br /><span className="text-text-muted">OPEN SYSTEM RECORD →</span></div></div>
                  <h3 className="font-display text-xl font-bold uppercase">{lab.title}</h3>
                </a>
                <div className="mt-7 border-t border-grid pt-4"><div className="text-xl font-bold text-hazard">{lab.metric}</div><div className="mt-1 text-[9px] tracking-[0.2em] text-text-dim">{lab.label}</div></div>
              </Frame>
            ))}
          </div>
        </section>

        <section id="systems" className="border-x border-t border-grid px-5 py-20 lg:px-12 lg:py-28">
          <SectionLabel index="02">SPECIALIZED SYSTEMS</SectionLabel>
          <div className="grid border border-grid lg:grid-cols-2">
            <a href="/systems/software" className="group p-6 hover:bg-surface-2 lg:p-10 focus-visible:outline-2 focus-visible:outline-hazard"><div className="mb-8 text-[9px] tracking-[0.25em] text-hazard">SOFTWARE / KOGLESH</div><h2 className="font-display text-4xl font-black uppercase leading-none">Production<br />Interfaces.</h2><p className="mt-6 text-sm leading-7 text-text-muted">Full-stack systems engineered around real workflows, typed contracts, production deployments and interfaces that surface operational state.</p><div className="mt-8 grid grid-cols-2 gap-px border border-grid bg-grid text-[10px]">{["NEXT.JS", "TYPESCRIPT", "SUPABASE", "POSTGRESQL", "VERCEL", "REALTIME"].map(x => <div key={x} className="bg-surface p-4 tracking-wider">{x}</div>)}</div><div className="mt-6 text-[9px] tracking-[0.2em] text-text-dim group-hover:text-hazard">OPEN SYSTEM RECORD →</div></a>
            <a href="/systems/edge-intelligence" className="group border-t border-grid p-6 hover:bg-surface-2 lg:border-l lg:border-t-0 lg:p-10 focus-visible:outline-2 focus-visible:outline-hazard"><div className="mb-8 text-[9px] tracking-[0.25em] text-hazard">HARDWARE / YENNA</div><h2 className="font-display text-4xl font-black uppercase leading-none">Edge<br />Intelligence.</h2><p className="mt-6 text-sm leading-7 text-text-muted">Embedded systems, computer vision, local inference and physical prototypes built for real-world constraints.</p><div className="mt-8 grid grid-cols-2 gap-px border border-grid bg-grid text-[10px]">{["ESP32", "PYTHON", "OPENCV", "TENSORFLOW", "SENSORS", "FIRMWARE"].map(x => <div key={x} className="bg-surface p-4 tracking-wider">{x}</div>)}</div><div className="mt-6 text-[9px] tracking-[0.2em] text-text-dim group-hover:text-hazard">OPEN SYSTEM RECORD →</div></a>
          </div>
        </section>

        <section id="architecture" className="border-x border-t border-grid px-5 py-20 lg:px-12 lg:py-28">
          <SectionLabel index="03">LAB ARCHITECTURE</SectionLabel>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><h2 className="max-w-4xl font-display text-4xl font-black uppercase leading-none lg:text-7xl">One stack.<br /><span className="text-hazard">Multiple layers.</span></h2><a href="/architecture" className="w-fit border border-grid px-5 py-3 text-[10px] tracking-[0.2em] text-text-muted hover:border-hazard hover:text-hazard focus-visible:outline-2 focus-visible:outline-hazard">FULL ARCHITECTURE →</a></div>
          <div className="mt-12 overflow-x-auto border border-grid"><div className="min-w-[760px]">{stack.map(([layer, a, b, c], i) => <div key={layer} className="grid grid-cols-[180px_1fr_1fr_1fr] border-b border-grid last:border-b-0"><div className="bg-surface-2 p-5 text-[10px] font-bold tracking-[0.2em] text-hazard">0{i + 1} / {layer}</div><div className="border-l border-grid p-5 text-xs">{a}</div><div className="border-l border-grid p-5 text-xs">{b}</div><div className="border-l border-grid p-5 text-xs">{c}</div></div>)}</div></div>
        </section>

        <section id="team" className="border-x border-t border-grid px-5 py-20 lg:px-12 lg:py-28">
          <SectionLabel index="04">ENGINEERING UNIT</SectionLabel>
          <div className="grid gap-px border border-grid bg-grid lg:grid-cols-2">
            <a href="/team" className="bg-surface p-7 hover:bg-surface-2 lg:p-10 focus-visible:outline-2 focus-visible:outline-hazard"><div className="text-[9px] tracking-[0.25em] text-hazard">UNIT / 01</div><h3 className="mt-5 font-display text-4xl font-black uppercase">Koglesh R.<br />Murugan</h3><p className="mt-5 text-sm leading-7 text-text-muted">Full-stack software engineering — Next.js, TypeScript, Supabase, PostgreSQL and Vercel.</p></a>
            <a href="/team" className="bg-surface p-7 hover:bg-surface-2 lg:p-10 focus-visible:outline-2 focus-visible:outline-hazard"><div className="text-[9px] tracking-[0.25em] text-hazard">UNIT / 02</div><h3 className="mt-5 font-display text-4xl font-black uppercase">Yennamutan<br />Muthukumaran</h3><p className="mt-5 text-sm leading-7 text-text-muted">Hardware, IoT and AI engineering — embedded systems, computer vision, Python and edge intelligence.</p></a>
          </div>
        </section>

        <footer className="border-x border-t border-grid px-5 py-8 lg:px-12"><div className="flex flex-col justify-between gap-5 text-[9px] tracking-[0.2em] text-text-dim md:flex-row"><span>ENGINEERING//STUDIO · REV 02</span><span>© 2026 KOGLESH R. MURUGAN + YENNAMUTAN MUTHUKUMARAN</span><span>STATUS: OPERATIONAL · TELEMETRY: SIM</span></div></footer>
      </div>
    </main>
  );
}
