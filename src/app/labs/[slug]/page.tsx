import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLab, labs } from "@/features/labs/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return labs.map((lab) => ({ slug: lab.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const lab = getLab(slug);
  if (!lab) return { title: "Lab Not Found" };
  return { title: `${lab.code} ${lab.title}`, description: lab.summary };
}

export default async function LabPage({ params }: Props) {
  const { slug } = await params;
  const lab = getLab(slug);
  if (!lab) notFound();

  return (
    <main className="min-h-screen bg-void px-5 py-8 text-text sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <Link href="/labs" className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted hover:text-text">← Back to labs</Link>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_320px]">
          <section className="industrial-panel p-6 sm:p-10">
            <div className="font-mono text-xs tracking-[0.2em] text-hazard">{lab.code} // {lab.status}</div>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold tracking-tight sm:text-6xl">{lab.title}</h1>
            <p className="mt-5 max-w-2xl font-mono text-sm leading-7 text-text-muted">{lab.subtitle}</p>
            <p className="mt-10 max-w-3xl text-lg leading-8 text-text">{lab.summary}</p>
          </section>
          <aside className="industrial-panel p-6">
            <div className="font-mono text-[10px] tracking-[0.2em] text-text-dim">SYSTEM RECORD</div>
            <div className="mt-6 border-t border-grid pt-5"><div className="font-mono text-[10px] text-text-dim">OWNER</div><div className="mt-2 font-mono text-sm">{lab.owner}</div></div>
            <div className="mt-5 border-t border-grid pt-5"><div className="font-mono text-[10px] text-text-dim">{lab.metricLabel}</div><div className="mt-2 font-display text-2xl font-bold">{lab.metricValue}</div></div>
            <div className="mt-5 border-t border-grid pt-5"><div className="font-mono text-[10px] text-text-dim">STACK</div><div className="mt-3 flex flex-wrap gap-2">{lab.stack.map((item) => <span key={item} className="border border-grid px-2 py-1 font-mono text-[10px]">{item}</span>)}</div></div>
          </aside>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <section className="industrial-panel p-6 sm:p-8"><div className="font-mono text-xs text-hazard">01 // PROBLEM</div><p className="mt-5 leading-8 text-text-muted">{lab.problem}</p></section>
          <section className="industrial-panel p-6 sm:p-8"><div className="font-mono text-xs text-hazard">02 // APPROACH</div><p className="mt-5 leading-8 text-text-muted">{lab.approach}</p></section>
        </div>

        <section className="industrial-panel mt-8 p-6 sm:p-8">
          <div className="font-mono text-xs text-hazard">03 // ENGINEERING OUTPUTS</div>
          <div className="mt-6 grid gap-px border border-grid bg-grid sm:grid-cols-2 lg:grid-cols-4">
            {lab.outputs.map((output, index) => <div key={output} className="bg-surface p-5"><div className="font-mono text-[10px] text-text-dim">0{index + 1}</div><div className="mt-8 font-display font-bold">{output}</div></div>)}
          </div>
        </section>
      </div>
    </main>
  );
}
