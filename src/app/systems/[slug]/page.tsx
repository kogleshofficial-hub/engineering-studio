import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSystem, systems } from "@/features/systems/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return systems.map((system) => ({ slug: system.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const system = getSystem(slug);
  if (!system) return { title: "System Not Found" };
  return { title: `${system.code} ${system.title}`, description: system.summary };
}

export default async function SystemPage({ params }: Props) {
  const { slug } = await params;
  const system = getSystem(slug);
  if (!system) notFound();

  return (
    <main className="min-h-screen bg-void px-5 py-8 text-text sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <Link href="/systems" className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted hover:text-text">← Back to systems</Link>
        <section className="industrial-panel mt-12 p-6 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-grid pb-5 font-mono text-xs text-text-muted"><span>{system.code}</span><span>{system.interface}</span></div>
          <h1 className="mt-8 font-display text-4xl font-bold sm:text-6xl">{system.title}</h1>
          <div className="mt-5 font-mono text-xs tracking-[0.16em] text-hazard">{system.domain} // OWNER: {system.owner}</div>
          <p className="mt-10 max-w-3xl text-xl leading-9 text-text-muted">{system.summary}</p>
        </section>
        <section className="mt-8 industrial-panel p-6 sm:p-8">
          <div className="font-mono text-xs text-hazard">CAPABILITY MATRIX</div>
          <div className="mt-6 grid gap-px border border-grid bg-grid sm:grid-cols-2 lg:grid-cols-5">
            {system.capabilities.map((capability, index) => <div key={capability} className="bg-surface p-5"><div className="font-mono text-[10px] text-text-dim">NODE 0{index + 1}</div><div className="mt-10 font-display text-lg font-bold">{capability}</div></div>)}
          </div>
        </section>
      </div>
    </main>
  );
}
