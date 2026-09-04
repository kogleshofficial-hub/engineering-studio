import Link from "next/link";
import { labs } from "@/features/labs/data";
import { systems } from "@/features/systems/data";

const signals = [
  { label: "BUILD", value: "PASS", state: "OPERATIONAL" },
  { label: "DEPLOY", value: "READY", state: "OPERATIONAL" },
  { label: "TELEMETRY", value: "SIMULATION", state: "DEMO" },
  { label: "FAULTS", value: "00", state: "OPERATIONAL" },
];

const layers = [
  ["PHYSICAL", "Sensors / MCUs", "01"],
  ["EDGE", "Python / CV / AI", "02"],
  ["DATA", "API / PostgreSQL", "03"],
  ["INTERFACE", "Next.js / TypeScript", "04"],
  ["DEPLOY", "CI / Vercel", "05"],
];

export default function CommandCenter() {
  return (
    <main className="min-h-screen bg-void text-text">
      <header className="border-b border-grid bg-void/95">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 lg:px-8">
          <Link href="/" className="text-xs font-bold tracking-[0.3em]">ENGINEERING<span className="text-hazard">//</span>STUDIO</Link>
          <div className="flex items-center gap-5 text-[9px] tracking-[0.22em] text-text-muted">
            <Link href="/labs" className="hover:text-hazard">LABS</Link>
            <Link href="/systems" className="hover:text-hazard">SYSTEMS</Link>
            <Link href="/architecture" className="hover:text-hazard">ARCHITECTURE</Link>
            <span className="text-hazard">COMMAND</span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1600px] px-5 lg:px-8">
        <section className="border-x border-b border-grid engineering-grid p-6 lg:p-12">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <div className="mb-5 text-[9px] font-bold tracking-[0.3em] text-hazard">SYS-CMD / REV 02</div>
              <h1 className="max-w-5xl font-display text-6xl font-black uppercase leading-[0.82] tracking-[-0.05em] lg:text-9xl">Engineering<br /><span className="text-hazard">Command</span> Center.</h1>
              <p className="mt-8 max-w-2xl text-sm leading-7 text-text-muted">A single operational surface for the studio&apos;s physical, edge, data and interface layers.</p>
            </div>
            <div className="min-w-[250px] border border-grid bg-surface p-5">
              <div className="flex justify-between text-[9px] tracking-widest text-text-dim"><span>CONTROL STATE</span><span className="text-operational">ONLINE</span></div>
              <div className="mt-5 h-1 bg-grid"><div className="h-full w-[86%] bg-operational" /></div>
              <div className="mt-3 flex justify-between text-[9px] text-text-dim"><span>SYSTEM COVERAGE</span><span>86%</span></div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 border-x border-b border-grid md:grid-cols-4">
          {signals.map((signal) => (
            <div key={signal.label} className="border-r border-grid p-5 last:border-r-0">
              <div className="text-[9px] tracking-[0.25em] text-text-dim">{signal.label}</div>
              <div className="mt-2 text-xl font-bold text-operational">{signal.value}</div>
              <div className="mt-1 text-[8px] tracking-widest text-text-dim">{signal.state}</div>
            </div>
          ))}
        </section>

        <section className="border-x border-b border-grid p-6 lg:p-12">
          <div className="mb-8 flex items-end justify-between gap-4"><div><div className="text-[9px] tracking-[0.25em] text-hazard">01 / SYSTEM MAP</div><h2 className="mt-3 font-display text-4xl font-black uppercase">Stack topology</h2></div><span className="text-[9px] tracking-widest text-text-dim">READ-ONLY</span></div>
          <div className="grid border border-grid md:grid-cols-5">
            {layers.map(([name, tools, index]) => (
              <div key={name} className="border-b border-grid p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
                <div className="text-[9px] text-hazard">{index}</div><div className="mt-6 text-xs font-bold tracking-wider">{name}</div><div className="mt-2 text-[10px] leading-5 text-text-muted">{tools}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid border-x border-b border-grid lg:grid-cols-2">
          <div className="p-6 lg:p-12">
            <div className="text-[9px] tracking-[0.25em] text-hazard">02 / ACTIVE LABS</div>
            <div className="mt-7 space-y-px border border-grid bg-grid">
              {labs.map((lab) => (
                <Link key={lab.slug} href={`/labs/${lab.slug}`} className="block bg-surface p-5 transition hover:bg-surface-2">
                  <div className="flex justify-between gap-4 text-[9px] tracking-widest text-text-dim"><span>{lab.code}</span><span className="text-hazard">{lab.status}</span></div>
                  <div className="mt-3 font-display text-xl font-bold">{lab.title}</div>
                  <div className="mt-2 text-[10px] leading-5 text-text-muted">{lab.subtitle}</div>
                </Link>
              ))}
            </div>
          </div>
          <div className="border-t border-grid p-6 lg:border-l lg:border-t-0 lg:p-12">
            <div className="text-[9px] tracking-[0.25em] text-hazard">03 / SYSTEM MODULES</div>
            <div className="mt-7 space-y-px border border-grid bg-grid">
              {systems.map((system) => (
                <Link key={system.slug} href={`/systems/${system.slug}`} className="block bg-surface p-5 transition hover:bg-surface-2">
                  <div className="flex justify-between gap-4 text-[9px] tracking-widest text-text-dim"><span>{system.code}</span><span className="text-operational">{system.status}</span></div>
                  <div className="mt-3 font-display text-xl font-bold">{system.title}</div>
                  <div className="mt-2 text-[10px] leading-5 text-text-muted">{system.subtitle}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-x border-b border-grid p-6 lg:p-12">
          <div className="text-[9px] tracking-[0.25em] text-hazard">04 / TELEMETRY CONTRACT</div>
          <div className="mt-7 grid gap-px border border-grid bg-grid md:grid-cols-3">
            {[["SOURCE", "REPOSITORY DATA", "STATIC"], ["AUTHORITY", "MEASURED HARDWARE", "FUTURE"], ["STREAM", "SUPABASE REALTIME", "FUTURE"]].map(([a,b,c]) => (
              <div key={a} className="bg-surface p-5"><div className="text-[9px] tracking-widest text-text-dim">{a}</div><div className="mt-3 text-xs font-bold">{b}</div><div className="mt-2 text-[9px] tracking-widest text-hazard">{c}</div></div>
            ))}
          </div>
          <p className="mt-5 max-w-3xl text-[10px] leading-6 text-text-dim">Telemetry shown here is intentionally non-live. No performance claim is presented as measured until the underlying hardware or service produces the value.</p>
        </section>

        <footer className="border-x border-grid px-6 py-8 text-[9px] tracking-[0.2em] text-text-dim lg:px-12">ENGINEERING//STUDIO · COMMAND SURFACE · REV 02</footer>
      </div>
    </main>
  );
}
