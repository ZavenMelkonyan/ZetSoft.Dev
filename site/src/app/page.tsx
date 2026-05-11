import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

const services = [
  {
    title: "Mobile Apps",
    desc: "Native iOS and Android applications crafted with performance, polish, and longevity in mind.",
    icon: "📱",
  },
  {
    title: "Game Development",
    desc: "Cross-platform mobile games with smooth monetization, ad mediation, and live-ops in mind.",
    icon: "🎮",
  },
  {
    title: "Web Engineering",
    desc: "Fast, accessible, modern web apps and marketing sites built on cutting-edge frameworks.",
    icon: "🌐",
  },
  {
    title: "Custom Software",
    desc: "Tailored backend systems, automations, and internal tools designed around your workflow.",
    icon: "⚙️",
  },
];

const stack = [
  "Swift", "Kotlin", "TypeScript", "Next.js", "React Native",
  "Unity", "Node.js", "Go", "PostgreSQL", "AWS",
];

const work = [
  {
    name: "High Low",
    tag: "Mobile Game",
    status: "In development — iOS first, Android next",
    blurb: "A minimalist higher-or-lower card game with crisp pacing and a clean, focused feel.",
  },
  {
    name: "Coming soon",
    tag: "In stealth",
    status: "Under wraps",
    blurb: "A new tool in the works. Quiet for now — louder later.",
  },
];

export default function Home() {
  return (
    <>
      <SiteNav variant="landing" />

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="aurora" />
        <div className="absolute inset-0 -z-10 bg-grid bg-grid-fade opacity-60" />
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-28 pt-24 text-center md:pt-36">
          <div className="rise inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border-strong)] bg-[color:var(--color-bg-elev)]/60 px-3 py-1 text-xs font-mono text-[color:var(--color-fg-muted)] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)] shadow-[0_0_12px_2px_rgba(46,196,255,0.7)]" />
            ZetSoft LLC · Yerevan, Armenia
          </div>

          <h1 className="rise rise-d1 mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Software engineered for{" "}
            <span className="text-gradient">what&apos;s next</span>.
          </h1>

          <p className="rise rise-d2 mt-6 max-w-2xl text-base text-[color:var(--color-fg-muted)] md:text-lg">
            We design and build mobile apps, games, and web platforms — with a relentless focus on
            performance, craft, and the experience your users will feel.
          </p>

          <div className="rise rise-d3 mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2ec4ff] to-[#1b5bc9] px-6 py-3 text-sm font-medium text-white shadow-[0_8px_32px_-8px_rgba(46,196,255,0.7)] transition hover:shadow-[0_12px_40px_-6px_rgba(46,196,255,0.85)]"
            >
              Start a project
              <span className="transition group-hover:translate-x-0.5" aria-hidden>→</span>
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border-strong)] bg-[color:var(--color-bg-elev)]/60 px-6 py-3 text-sm font-medium text-[color:var(--color-fg)] transition hover:border-[color:var(--color-accent)]"
            >
              What we do
            </Link>
          </div>

          <div className="rise rise-d4 mt-20 grid place-items-center">
            <div className="relative grid h-48 w-48 place-items-center">
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(46,196,255,0.4)_0%,transparent_65%)] blur-2xl" />
              <Image
                src="/logo-transparent.png"
                alt="ZetSoft"
                width={180}
                height={180}
                priority
                className="relative drop-shadow-[0_0_42px_rgba(46,196,255,0.65)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 flex flex-col items-start gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            01 — Services
          </span>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
            From idea to ship — end-to-end engineering.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 transition hover:border-[color:var(--color-accent)]"
            >
              <div
                className="pointer-events-none absolute -inset-px -z-10 rounded-2xl opacity-0 transition group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(400px circle at 50% 0%, rgba(46,196,255,0.18), transparent 60%)",
                }}
              />
              <div className="text-2xl">{s.icon}</div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-fg-muted)]">
                {s.desc}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-bg-elev)]/50 p-6">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[color:var(--color-border-strong)] to-transparent" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--color-fg-dim)]">
              Tech we work with
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[color:var(--color-border-strong)] to-transparent" />
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-[color:var(--color-fg-muted)]">
            {stack.map((t) => (
              <li key={t} className="font-mono tracking-tight">{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 flex flex-col items-start gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            02 — Work
          </span>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
            What we&apos;re shipping.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {work.map((w) => (
            <article
              key={w.name}
              className="relative overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-fg-dim)]">
                  {w.tag}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] px-2.5 py-0.5 text-[10px] text-[color:var(--color-fg-muted)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)] shadow-[0_0_10px_rgba(46,196,255,0.7)]" />
                  {w.status}
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight">{w.name}</h3>
              <p className="mt-3 text-sm text-[color:var(--color-fg-muted)]">{w.blurb}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              03 — About
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              A small studio with sharp focus.
            </h2>
          </div>
          <div className="space-y-4 text-[color:var(--color-fg-muted)]">
            <p>
              ZetSoft is an independent software studio based in Yerevan, Armenia. We work with founders,
              teams, and ideas that deserve careful engineering — and we treat every project as if our name
              were on the App Store listing alongside yours.
            </p>
            <p>
              We&apos;re small, deliberate, and pragmatic. We pick the right tool for the job, ship what works,
              and stay honest about tradeoffs along the way.
            </p>
            <dl className="mt-8 grid grid-cols-3 gap-6 border-t border-[color:var(--color-border)] pt-8">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-fg-dim)]">Based in</dt>
                <dd className="mt-2 text-sm font-medium">Yerevan, Armenia</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-fg-dim)]">Works with</dt>
                <dd className="mt-2 text-sm font-medium">Founders & Teams</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-fg-dim)]">Focus</dt>
                <dd className="mt-2 text-sm font-medium">Mobile · Web · Games</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl border border-[color:var(--color-border-strong)] bg-[color:var(--color-bg-elev)] p-10 md:p-16">
          <div className="aurora opacity-50" />
          <div className="absolute inset-0 -z-10 bg-grid bg-grid-fade opacity-40" />

          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            04 — Contact
          </span>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
            Have something to build? <span className="text-gradient">Let&apos;s talk.</span>
          </h2>
          <p className="mt-4 max-w-xl text-[color:var(--color-fg-muted)]">
            Drop a line or give us a call. We respond within one business day.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <a
              href="mailto:zaven.melkonyan@zetsoft.dev"
              className="group rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 transition hover:border-[color:var(--color-accent)]"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-fg-dim)]">
                Email
              </span>
              <div className="mt-2 text-lg font-medium transition group-hover:text-[color:var(--color-accent)]">
                zaven.melkonyan@zetsoft.dev
              </div>
            </a>
            <a
              href="tel:+37441405925"
              className="group rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 transition hover:border-[color:var(--color-accent)]"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-fg-dim)]">
                Phone
              </span>
              <div className="mt-2 text-lg font-medium transition group-hover:text-[color:var(--color-accent)]">
                +374 41 405 925
              </div>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
