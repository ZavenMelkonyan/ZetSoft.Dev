import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policies",
  description: "Privacy policies for ZetSoft products.",
};

const policies = [
  {
    href: "/privacy/high-low",
    name: "High Low",
    tag: "Mobile Game",
    desc: "Privacy policy for the High Low mobile game on iOS and Android.",
  },
];

export default function PrivacyIndex() {
  return (
    <>
      <SiteNav variant="page" />
      <section className="relative isolate overflow-hidden">
        <div className="aurora opacity-40" />
        <div className="absolute inset-0 -z-10 bg-grid bg-grid-fade opacity-40" />
        <div className="mx-auto max-w-5xl px-6 pb-12 pt-20 md:pt-28">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            ZetSoft · Privacy
          </span>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Privacy Policies
          </h1>
          <p className="mt-4 max-w-2xl text-[color:var(--color-fg-muted)]">
            Each ZetSoft product has its own privacy policy. Choose a product below to view the
            applicable policy.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid gap-5 md:grid-cols-2">
          {policies.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group relative overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 transition hover:border-[color:var(--color-accent)]"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-fg-dim)]">
                {p.tag}
              </span>
              <h2 className="mt-2 text-xl font-semibold text-[color:var(--color-fg)]">{p.name}</h2>
              <p className="mt-2 text-sm text-[color:var(--color-fg-muted)]">{p.desc}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm text-[color:var(--color-accent)]">
                View policy
                <span className="transition group-hover:translate-x-0.5" aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
