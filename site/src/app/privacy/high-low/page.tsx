import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "High Low — Privacy Policy",
  description:
    "Privacy Policy for High Low, a mobile card game by ZetSoft LLC. Details on data collection, advertising, in-app purchases, and your rights.",
  alternates: { canonical: "/privacy/high-low" },
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = "May 11, 2026";
const LAST_UPDATED = "May 11, 2026";

const sections = [
  { id: "summary", label: "Summary" },
  { id: "scope", label: "Scope" },
  { id: "data-we-collect", label: "Data we collect" },
  { id: "how-we-use", label: "How we use data" },
  { id: "advertising", label: "Advertising (AdMob)" },
  { id: "purchases", label: "In-app purchases" },
  { id: "children", label: "Children's privacy" },
  { id: "rights", label: "Your privacy rights" },
  { id: "retention", label: "Data retention" },
  { id: "transfers", label: "International transfers" },
  { id: "security", label: "Security" },
  { id: "third-parties", label: "Third-party services" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact", label: "Contact us" },
];

export default function HighLowPrivacyPage() {
  return (
    <>
      <SiteNav variant="page" />

      <section className="relative isolate overflow-hidden">
        <div className="aurora opacity-40" />
        <div className="absolute inset-0 -z-10 bg-grid bg-grid-fade opacity-40" />
        <div className="mx-auto max-w-5xl px-6 pb-12 pt-20 md:pt-28">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
            High Low · Mobile Game
          </span>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-2xl text-[color:var(--color-fg-muted)]">
            This Privacy Policy explains how ZetSoft LLC (&ldquo;ZetSoft,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or
            &ldquo;us&rdquo;) collects, uses, and shares information when you use the High Low mobile game
            (the &ldquo;Game&rdquo;).
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-[color:var(--color-fg-dim)]">
            <span>Effective date: {EFFECTIVE_DATE}</span>
            <span className="hidden md:inline">·</span>
            <span>Last updated: {LAST_UPDATED}</span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid gap-10 md:grid-cols-[220px_1fr]">
          {/* Table of contents */}
          <aside className="md:sticky md:top-24 md:self-start">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-fg-dim)]">
              Contents
            </h2>
            <ol className="mt-3 space-y-2 text-sm">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="flex items-baseline gap-3 text-[color:var(--color-fg-muted)] transition hover:text-[color:var(--color-fg)]"
                  >
                    <span className="font-mono text-[10px] text-[color:var(--color-fg-dim)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{s.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </aside>

          {/* Body */}
          <article className="space-y-12 text-[color:var(--color-fg-muted)] leading-relaxed">
            <Section id="summary" title="Summary">
              <p>
                High Low is a casual single-player card game. <strong className="text-[color:var(--color-fg)]">We do not require an account to play, and we do not directly collect personal information.</strong> The Game shows
                advertisements through Google AdMob and offers optional in-app purchases. Those third parties may
                process limited data (such as device identifiers and purchase records) as described below.
              </p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                <Pill label="No sign-in" />
                <Pill label="Ads via AdMob" />
                <Pill label="Optional purchases" />
              </ul>
            </Section>

            <Section id="scope" title="1. Scope">
              <p>
                This policy applies to the High Low mobile application on iOS and (when released) Android.
                It does not apply to third-party websites, platforms, or services that may be linked from
                within the Game. Those third parties operate under their own privacy policies.
              </p>
              <p className="mt-3">
                <strong className="text-[color:var(--color-fg)]">Data controller:</strong> ZetSoft LLC, registered in the
                Republic of Armenia, Yerevan. Contact details are in the <a className="link" href="#contact">Contact us</a> section.
              </p>
            </Section>

            <Section id="data-we-collect" title="2. Data we collect">
              <p>
                ZetSoft itself does not maintain user accounts, profiles, or servers that store personal data for High Low.
                The Game does not ask you for your name, email, phone number, address, or any other identifying information.
                However, when you use the Game, the following categories of information may be collected automatically by
                the Game or by third-party SDKs we integrate:
              </p>

              <Table
                head={["Category", "Examples", "Source"]}
                rows={[
                  ["Device & technical data", "Device model, OS version, language, country, crash diagnostics", "Apple / Google platform & analytics SDKs"],
                  ["Advertising identifiers", "Identifier for Advertisers (IDFA) on iOS, Android Advertising ID (AAID) on Android — only with your permission", "AdMob / Apple ATT / Google Play services"],
                  ["Approximate location", "Country or region inferred from IP address (not precise GPS)", "AdMob"],
                  ["Ad interaction data", "Ad impressions, clicks, view-time, ad SDK diagnostic events", "AdMob"],
                  ["Purchase data", "Transaction IDs and product identifiers (no card numbers)", "Apple App Store / Google Play"],
                  ["Game progress (on-device)", "High scores, settings, preferences — stored locally on your device only", "The Game"],
                ]}
              />

              <p className="mt-4">
                <strong className="text-[color:var(--color-fg)]">We do not knowingly collect:</strong> precise GPS location,
                contacts, photos, microphone or camera data, health data, financial account numbers, or government IDs.
              </p>
            </Section>

            <Section id="how-we-use" title="3. How we use data">
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>To operate, maintain, and improve the Game.</li>
                <li>To display advertising, including limited personalized advertising where you have consented.</li>
                <li>To process and validate in-app purchases through Apple or Google.</li>
                <li>To diagnose crashes, performance issues, and SDK errors.</li>
                <li>To comply with applicable legal obligations and prevent fraud or abuse.</li>
              </ul>
              <p className="mt-4">
                We do not sell your personal information, and we do not share it with third parties for their independent
                marketing purposes.
              </p>
            </Section>

            <Section id="advertising" title="4. Advertising (Google AdMob)">
              <p>
                The Game displays advertisements through <strong className="text-[color:var(--color-fg)]">Google AdMob</strong>,
                provided by Google LLC and its affiliates. AdMob may collect and process device identifiers (such as IDFA on
                iOS or AAID on Android), IP-derived approximate location, ad interaction events, and similar diagnostic
                information to deliver ads and measure their performance.
              </p>

              <h3 className="mt-6 text-base font-semibold text-[color:var(--color-fg)]">
                Personalized vs. non-personalized ads
              </h3>
              <p className="mt-2">
                Where required by applicable law (for example, the EEA, UK, and Switzerland under GDPR/ePrivacy, or US states
                with applicable privacy laws), the Game presents a consent prompt powered by Google&apos;s User Messaging
                Platform (UMP) so you can choose between personalized and non-personalized advertising.
              </p>
              <p className="mt-2">
                On iOS 14.5+ devices, the Game uses Apple&apos;s <strong className="text-[color:var(--color-fg)]">App Tracking
                Transparency (ATT)</strong> framework. Personalized advertising and the use of the IDFA only occur if you
                explicitly grant permission via the iOS system prompt. If you decline, ads will still appear but will not be
                personalized and the IDFA will not be transmitted.
              </p>

              <h3 className="mt-6 text-base font-semibold text-[color:var(--color-fg)]">Your ad choices</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-[color:var(--color-fg)]">iOS:</strong> Settings → Privacy &amp; Security → Tracking
                  to revoke tracking permission at any time. You can also enable &ldquo;Limit Ad Tracking&rdquo; in Settings
                  → Privacy &amp; Security → Apple Advertising.
                </li>
                <li>
                  <strong className="text-[color:var(--color-fg)]">Android:</strong> Settings → Privacy → Ads to reset or
                  delete your advertising ID.
                </li>
                <li>
                  <strong className="text-[color:var(--color-fg)]">EEA/UK consent:</strong> Re-open the consent prompt from
                  the Game&apos;s Settings screen to change your preference.
                </li>
              </ul>

              <p className="mt-4 text-sm">
                For more on how Google uses data when you use partners&apos; sites or apps, see{" "}
                <a className="link" href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer">
                  policies.google.com/technologies/partner-sites
                </a>{" "}
                and the{" "}
                <a className="link" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
                  Google Privacy Policy
                </a>.
              </p>
            </Section>

            <Section id="purchases" title="5. In-app purchases">
              <p>
                The Game offers optional in-app purchases (for example, to remove ads or unlock additional content).
                All transactions are processed by <strong className="text-[color:var(--color-fg)]">Apple&apos;s App Store</strong>
                {" "}or <strong className="text-[color:var(--color-fg)]">Google Play Billing</strong>. ZetSoft never receives or
                stores your payment card number, billing address, or full account details. We receive only the transaction
                identifier and product information needed to validate and deliver the purchase to your device.
              </p>
              <p className="mt-3">
                Refunds and billing inquiries are handled by Apple or Google according to their respective policies:
              </p>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li><a className="link" href="https://support.apple.com/en-us/HT204084" target="_blank" rel="noreferrer">Apple — Request a refund</a></li>
                <li><a className="link" href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noreferrer">Google Play — Refund requests</a></li>
              </ul>
            </Section>

            <Section id="children" title="6. Children's privacy">
              <p>
                High Low is intended for a general audience. The Game is not directed at children under the age of 13
                (or the equivalent minimum age in your jurisdiction, such as 16 in some EEA countries), and we do not
                knowingly collect personal information from children. Parents or guardians who believe their child has
                provided us with personal information may contact us at the address below and we will take steps to
                delete such information.
              </p>
              <p className="mt-3">
                Where applicable, we configure third-party SDKs (including AdMob) to comply with Apple&apos;s and Google&apos;s
                policies regarding family-friendly content and age-appropriate advertising.
              </p>
            </Section>

            <Section id="rights" title="7. Your privacy rights">
              <p>
                Depending on where you live, you may have rights regarding your personal data. These can include the
                right to access, correct, delete, restrict, or port your data, the right to object to certain processing,
                and the right to withdraw consent at any time. Because we do not directly maintain user accounts or
                profiles, most rights can be exercised by adjusting permissions on your device or by contacting us.
              </p>

              <h3 className="mt-6 text-base font-semibold text-[color:var(--color-fg)]">
                EEA / UK / Switzerland (GDPR)
              </h3>
              <p className="mt-2">
                Our legal bases for processing are: consent (for personalized advertising and any non-essential analytics),
                performance of a contract (to deliver the Game and any in-app purchases you request), legitimate interests
                (to operate, secure, and improve the Game where these interests are not overridden by your rights), and
                compliance with legal obligations.
              </p>

              <h3 className="mt-6 text-base font-semibold text-[color:var(--color-fg)]">
                California (CCPA / CPRA)
              </h3>
              <p className="mt-2">
                We do not &ldquo;sell&rdquo; personal information in the traditional sense. Where our use of advertising
                identifiers constitutes &ldquo;sharing&rdquo; for cross-context behavioral advertising under California law,
                you may opt out by declining the App Tracking Transparency prompt on iOS, by resetting or limiting your
                advertising ID on Android, or by contacting us at the address below.
              </p>

              <h3 className="mt-6 text-base font-semibold text-[color:var(--color-fg)]">
                Armenia and other jurisdictions
              </h3>
              <p className="mt-2">
                If you reside in Armenia or another country with applicable data protection laws, you may exercise
                rights granted under local law by contacting us. We will respond within the time periods required by
                law.
              </p>
            </Section>

            <Section id="retention" title="8. Data retention">
              <p>
                Game progress and settings are stored locally on your device and remain there until you delete the Game
                or clear its data. We do not retain server-side copies of this data. Third-party SDKs retain data under
                their own retention policies (linked in the <a className="link" href="#third-parties">Third-party services</a> section).
                Transaction records may be retained by Apple or Google and by us, as required by tax and accounting law,
                for the period mandated by applicable regulations.
              </p>
            </Section>

            <Section id="transfers" title="9. International data transfers">
              <p>
                ZetSoft is based in Armenia. The third-party services we use (such as Google AdMob, Apple, and Google Play)
                are operated globally and may process data outside your country, including in the United States and other
                jurisdictions. Where required, these providers rely on appropriate safeguards such as Standard Contractual
                Clauses or equivalent mechanisms.
              </p>
            </Section>

            <Section id="security" title="10. Security">
              <p>
                We take reasonable technical and organizational measures designed to protect the limited information we
                process. However, no method of transmission over the internet or method of electronic storage is fully
                secure. We cannot guarantee absolute security, but we will notify users and competent authorities of any
                personal data breach affecting them when required by applicable law.
              </p>
            </Section>

            <Section id="third-parties" title="11. Third-party services">
              <p>
                The Game relies on the following third parties. Each operates under its own privacy policy, and we
                encourage you to review them:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-[color:var(--color-fg)]">Google AdMob</strong> (advertising) —{" "}
                  <a className="link" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">policies.google.com/privacy</a>
                </li>
                <li>
                  <strong className="text-[color:var(--color-fg)]">Apple</strong> (App Store, in-app purchases, App Tracking Transparency) —{" "}
                  <a className="link" href="https://www.apple.com/legal/privacy/" target="_blank" rel="noreferrer">apple.com/legal/privacy</a>
                </li>
                <li>
                  <strong className="text-[color:var(--color-fg)]">Google Play</strong> (Android distribution and billing — once Android version is released) —{" "}
                  <a className="link" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">policies.google.com/privacy</a>
                </li>
              </ul>
            </Section>

            <Section id="changes" title="12. Changes to this policy">
              <p>
                We may update this Privacy Policy from time to time. When we do, we will revise the &ldquo;Last
                updated&rdquo; date at the top of this page. For material changes, we will provide additional notice
                inside the Game or by other reasonable means. Continued use of the Game after changes become effective
                constitutes your acceptance of the revised policy.
              </p>
            </Section>

            <Section id="contact" title="13. Contact us">
              <p>
                For any questions, requests, or concerns regarding this Privacy Policy or your personal data, please
                contact us:
              </p>
              <div className="mt-5 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
                <dl className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-fg-dim)]">Company</dt>
                    <dd className="mt-1 text-[color:var(--color-fg)]">ZetSoft LLC</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-fg-dim)]">Location</dt>
                    <dd className="mt-1 text-[color:var(--color-fg)]">Yerevan, Armenia</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-fg-dim)]">Email</dt>
                    <dd className="mt-1">
                      <a className="link" href="mailto:zaven.melkonyan@zetsoft.dev">zaven.melkonyan@zetsoft.dev</a>
                    </dd>
                  </div>
                </dl>
              </div>
              <p className="mt-6 text-sm">
                Looking for our company site? <Link className="link" href="/">Return to zetsoft.dev →</Link>
              </p>
            </Section>
          </article>
        </div>
      </div>

      <SiteFooter />

      <style>{`
        .link {
          color: var(--color-accent);
          text-decoration: underline;
          text-decoration-color: color-mix(in oklab, var(--color-accent) 35%, transparent);
          text-underline-offset: 3px;
          transition: color 120ms ease, text-decoration-color 120ms ease;
        }
        .link:hover {
          color: #7fd9ff;
          text-decoration-color: #7fd9ff;
        }
      `}</style>
    </>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--color-fg)] md:text-3xl">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Pill({ label }: { label: string }) {
  return (
    <li className="flex items-center gap-2 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-3 py-2 text-sm text-[color:var(--color-fg)]">
      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)] shadow-[0_0_10px_rgba(46,196,255,0.7)]" />
      {label}
    </li>
  );
}

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="mt-5 overflow-x-auto rounded-2xl border border-[color:var(--color-border)]">
      <table className="w-full text-left text-sm">
        <thead className="bg-[color:var(--color-bg-elev)] text-[color:var(--color-fg)]">
          <tr>
            {head.map((h) => (
              <th key={h} className="border-b border-[color:var(--color-border)] px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-fg-dim)]">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="align-top">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-4 py-3 ${i < rows.length - 1 ? "border-b border-[color:var(--color-border)]" : ""} ${j === 0 ? "font-medium text-[color:var(--color-fg)]" : "text-[color:var(--color-fg-muted)]"}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
