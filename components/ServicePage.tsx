import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

interface ServicePageProps {
  icon: string;
  sub: string;
  title: string;
  description: string;
  features: string[];
  process: { step: string; title: string; desc: string }[];
  sidebarTitle: string;
  sidebarDesc: string;
  waMessage: string;
  perks: string[];
}

export default function ServicePage({ icon, sub, title, description, features, process, sidebarTitle, sidebarDesc, waMessage, perks }: ServicePageProps) {
  return (
    <>
      <div className="page-hero">
        <span className="hidden md:block font-[family-name:var(--font-bebas)] absolute right-0 top-0 leading-none select-none pointer-events-none text-black/[0.04]" style={{ fontSize: "160px" }}>{title.split(" ")[0].toUpperCase()}</span>
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">
          <Link href="/" className="no-underline" style={{ color: "var(--color-brand)" }}>Home</Link>{" / "}
          <Link href="/services" className="no-underline" style={{ color: "var(--color-brand)" }}>Services</Link>{" / "}
          {title}
        </p>
        <div className="flex items-center gap-5 mb-4">
          <div className="w-16 h-16 border-2 flex items-center justify-center text-3xl flex-shrink-0" style={{ borderColor: "var(--color-brand)" }}>{icon}</div>
          <div>
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-gray-400 mb-1">{sub}</p>
            <h1 className="font-[family-name:var(--font-bebas)] tracking-wide text-gray-900" style={{ fontSize: "clamp(36px,6vw,64px)" }}>{title}</h1>
          </div>
        </div>
        <p className="text-gray-500 max-w-2xl leading-relaxed">{description}</p>
      </div>

      <section className="bg-white page-section">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-14 lg:gap-20">
          {/* Main content */}
          <div className="space-y-14">
            {/* Features */}
            <AnimatedSection>
              <h2 className="font-[family-name:var(--font-bebas)] text-3xl tracking-wide text-gray-900 mb-8">What&apos;s Included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-4 border border-gray-200 px-5 py-3.5 hover:border-[var(--color-brand)] transition-colors group">
                    <div className="w-5 h-5 border-2 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[var(--color-brand)] group-hover:border-[var(--color-brand)]"
                      style={{ borderColor: "var(--color-brand)" }}>
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                          className="text-[var(--color-brand)] group-hover:text-gray-900 transition-colors"/>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">{f}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Process */}
            <AnimatedSection delay={150}>
              <h2 className="font-[family-name:var(--font-bebas)] text-3xl tracking-wide text-gray-900 mb-8">Our Process</h2>
              <div className="space-y-4">
                {process.map((p, i) => (
                  <div key={p.step} className="group flex gap-6 border border-gray-200 p-7 hover:border-[var(--color-brand)] hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gray-50 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 -z-0"/>
                    <div className="relative z-10 flex gap-6 w-full">
                      <span className="font-[family-name:var(--font-bebas)] text-5xl leading-none shrink-0" style={{ color: "var(--color-brand)" }}>{p.step}</span>
                      <div>
                        <h4 className="font-[family-name:var(--font-bebas)] text-xl tracking-wide text-gray-900 mb-1">{p.title}</h4>
                        <div className="w-8 h-0.5 mb-3" style={{ background: "var(--color-brand)" }}/>
                        <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <AnimatedSection delay={300}>
            <div className="sticky top-24">
              {/* Booking card */}
              <div className="border border-gray-200 overflow-hidden">
                <div className="bg-gray-900 px-7 py-5">
                  <h3 className="font-[family-name:var(--font-bebas)] text-2xl tracking-wide text-white">{sidebarTitle}</h3>
                  <p className="text-xs text-gray-400 mt-1">{sidebarDesc}</p>
                </div>
                {/* Decorative corner */}
                <div className="relative p-7">
                  <div className="absolute -top-px -left-px w-12 h-12 border-t-2 border-l-2 pointer-events-none" style={{ borderColor: "var(--color-brand)" }}/>
                  <div className="absolute -bottom-px -right-px w-12 h-12 border-b-2 border-r-2 pointer-events-none" style={{ borderColor: "var(--color-brand)" }}/>
                  <div className="space-y-3">
                    <a href={`https://wa.me/971558251439?text=${encodeURIComponent(waMessage)}`} target="_blank" rel="noopener noreferrer"
                      className="btn-gold w-full text-center block">💬 WhatsApp Now</a>
                    <Link href="/contact" className="btn-outline w-full text-center block">Send Inquiry →</Link>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
                    {perks.map((perk) => (
                      <div key={perk} className="flex items-center gap-3 text-xs text-gray-500">
                        <div className="w-4 h-4 border flex items-center justify-center shrink-0" style={{ borderColor: "var(--color-brand)" }}>
                          <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                            <path d="M1 3l2 2 4-4" stroke="#D4A843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        {perk}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact block */}
              <div className="border border-gray-200 border-t-0 overflow-hidden">
                {[
                  { href: "tel:+971558251439", icon: "📞", label: "Call", value: "+971 558 251 439" },
                  { href: "mailto:fahadkayondo19@gmail.com", icon: "✉️", label: "Email", value: "fahadkayondo19@gmail.com" },
                ].map((c) => (
                  <a key={c.label} href={c.href}
                    className="flex items-center gap-4 border-t border-gray-100 px-7 py-4 hover:bg-gray-50 hover:text-[var(--color-brand)] transition-colors no-underline group">
                    <span className="text-base">{c.icon}</span>
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-0.5">{c.label}</p>
                      <p className="text-sm text-gray-600 group-hover:text-[var(--color-brand)] transition-colors break-all">{c.value}</p>
                    </div>
                    <span className="ml-auto text-gray-300 group-hover:text-[var(--color-brand)] transition-colors">→</span>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
