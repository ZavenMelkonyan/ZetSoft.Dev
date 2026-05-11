import Image from "next/image";
import Link from "next/link";

type NavItem = { href: string; label: string };

const links: NavItem[] = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function SiteNav({ variant = "landing" }: { variant?: "landing" | "page" }) {
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="absolute inset-0 -z-10 backdrop-blur-md bg-[color:var(--color-bg)]/65 border-b border-[color:var(--color-border)]" />
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <span className="relative grid h-9 w-9 place-items-center">
            <Image
              src="/logo-transparent.png"
              alt="ZetSoft"
              width={36}
              height={36}
              priority
              className="drop-shadow-[0_0_12px_rgba(46,196,255,0.55)]"
            />
          </span>
          <span className="font-semibold tracking-tight text-[color:var(--color-fg)]">
            Zet<span className="text-gradient">Soft</span>
          </span>
        </Link>

        {variant === "landing" ? (
          <ul className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-[color:var(--color-fg-muted)] transition hover:text-[color:var(--color-fg)]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <Link
            href="/"
            className="text-sm text-[color:var(--color-fg-muted)] transition hover:text-[color:var(--color-fg)]"
          >
            ← Back to home
          </Link>
        )}

        {variant === "landing" && (
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border-strong)] bg-[color:var(--color-bg-elev)]/60 px-4 py-2 text-sm font-medium text-[color:var(--color-fg)] transition hover:glow-ring"
          >
            Start a project
            <span aria-hidden>→</span>
          </Link>
        )}
      </nav>
    </header>
  );
}
