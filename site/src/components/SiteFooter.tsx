import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-32 border-t border-[color:var(--color-border)]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo-transparent.png"
                alt="ZetSoft"
                width={36}
                height={36}
                className="drop-shadow-[0_0_12px_rgba(46,196,255,0.55)]"
              />
              <span className="font-semibold tracking-tight">
                Zet<span className="text-gradient">Soft</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-[color:var(--color-fg-muted)]">
              Software development studio crafting mobile, web, and game experiences from Yerevan, Armenia.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-fg-dim)]">
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link className="text-[color:var(--color-fg-muted)] hover:text-[color:var(--color-fg)]" href="/#services">Services</Link></li>
              <li><Link className="text-[color:var(--color-fg-muted)] hover:text-[color:var(--color-fg)]" href="/#about">About</Link></li>
              <li><Link className="text-[color:var(--color-fg-muted)] hover:text-[color:var(--color-fg)]" href="/#contact">Contact</Link></li>
              <li><Link className="text-[color:var(--color-fg-muted)] hover:text-[color:var(--color-fg)]" href="/privacy/high-low">High Low — Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-fg-dim)]">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  className="text-[color:var(--color-fg-muted)] hover:text-[color:var(--color-fg)]"
                  href="mailto:zaven.melkonyan@zetsoft.dev"
                >
                  zaven.melkonyan@zetsoft.dev
                </a>
              </li>
              <li>
                <a
                  className="text-[color:var(--color-fg-muted)] hover:text-[color:var(--color-fg)]"
                  href="tel:+37441405925"
                >
                  +374 41 405 925
                </a>
              </li>
              <li className="text-[color:var(--color-fg-muted)]">Yerevan, Armenia</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-[color:var(--color-border)] pt-6 text-xs text-[color:var(--color-fg-dim)] md:flex-row md:items-center">
          <span>© {year} ZetSoft LLC. All rights reserved.</span>
          <span className="font-mono">v1.0 · Yerevan ⟶ Worldwide</span>
        </div>
      </div>
    </footer>
  );
}
