import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  { icon: "💻", title: "OS & Program Installation", sub: "System Setup & Software", desc: "Complete OS installation, driver setup, and software deployment. Windows, Linux, and more.", features: ["Windows 10/11", "Linux Distros", "Driver Installation", "Software Bundle", "System Optimization"], href: "/services/os-installation", badge: "Popular" },
  { icon: "📱", title: "Phone Flashing & Unlocking", sub: "Mobile Device Services", desc: "Firmware flashing, carrier unlocking, FRP bypass, and device recovery for all brands.", features: ["Firmware Flashing", "Carrier Unlock", "FRP Bypass", "Custom ROM", "Dead Recovery"], href: "/services/phone-flashing", badge: null },
  { icon: "🌐", title: "Website Designing", sub: "Web Development", desc: "Beautiful, responsive websites from scratch — portfolio, business, or e-commerce stores.", features: ["Custom Design", "Mobile Responsive", "SEO Ready", "Fast Loading", "CMS Integration"], href: "/services/website-design", badge: "New" },
  { icon: "🎓", title: "Computer Lessons", sub: "IT Training", desc: "Structured computer training covering theory and hands-on practice at all levels.", features: ["MS Office Suite", "Internet Skills", "Basic Programming", "Typing & Shortcuts", "Hardware Basics"], href: "/services/computer-lessons", badge: null },
  { icon: "📄", title: "CV Making", sub: "Career Documents", desc: "Professionally designed, ATS-optimised CVs and cover letters that stand out.", features: ["Custom Design", "ATS Optimised", "Cover Letter", "24hr Turnaround", "Multiple Formats"], href: "/services/cv-making", badge: "Quick" },
];

export default function ServicesPage() {
  return (
    <>
      <div className="page-hero">
        <span className="hidden md:block font-[family-name:var(--font-bebas)] absolute right-0 top-0 leading-none select-none pointer-events-none text-black/[0.04]" style={{ fontSize: "180px" }}>SERVICES</span>
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">
          <Link href="/" className="no-underline" style={{ color: "var(--color-brand)" }}>Home</Link> / Services
        </p>
        <h1 className="font-[family-name:var(--font-bebas)] tracking-wide text-gray-900" style={{ fontSize: "clamp(48px,8vw,80px)" }}>Our Services</h1>
        <p className="text-gray-500 mt-3 max-w-lg">Comprehensive technology services delivered with professionalism and care.</p>
      </div>

      <section className="bg-white page-section">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 100}>
              <Link href={s.href} className="no-underline block h-full">
                <div className="group relative bg-white border border-gray-200 p-10 overflow-hidden hover:border-[var(--color-brand)] hover:shadow-xl transition-all duration-500 cursor-pointer h-full">
                  {/* Gold sweep */}
                  <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 -z-0"
                    style={{ background: "var(--color-brand)" }}/>
                  {/* Badge */}
                  {s.badge && (
                    <span className="absolute top-5 right-5 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 border border-[var(--color-brand)] text-[var(--color-brand)] group-hover:border-gray-900 group-hover:text-gray-900 transition-colors z-10">
                      {s.badge}
                    </span>
                  )}
                  {/* Number watermark */}
                  <span className="absolute -bottom-3 -right-2 font-[family-name:var(--font-bebas)] leading-none select-none text-gray-100 group-hover:text-white/10 transition-colors"
                    style={{ fontSize: "90px" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div className="relative z-10">
                    <div className="w-14 h-14 border-2 border-gray-200 group-hover:border-gray-900 flex items-center justify-center mb-8 text-2xl transition-colors duration-300">{s.icon}</div>
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 group-hover:text-gray-700 mb-1 transition-colors">{s.sub}</p>
                    <h3 className="font-[family-name:var(--font-bebas)] text-2xl tracking-wide text-gray-900 mb-2 leading-tight">{s.title}</h3>
                    <div className="w-8 h-0.5 mb-5 group-hover:bg-gray-900 transition-colors duration-300" style={{ background: "var(--color-brand)" }}/>
                    <p className="text-sm text-gray-500 group-hover:text-gray-700 leading-relaxed mb-6 transition-colors">{s.desc}</p>
                    <ul className="space-y-1.5 mb-6">
                      {s.features.slice(0, 3).map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-gray-400 group-hover:text-gray-700 transition-colors">
                          <span className="w-3 h-px bg-[var(--color-brand)] group-hover:bg-gray-900 transition-colors shrink-0"/>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-brand)] group-hover:text-gray-900 transition-colors flex items-center gap-2">
                      View Details <span>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gray-900 px-6 md:px-16 lg:px-24 py-20">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.07]" style={{ background: "var(--color-brand)" }}/>
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div>
            <span className="block text-[11px] font-bold tracking-[0.25em] uppercase mb-4" style={{ color: "var(--color-brand)" }}>Not Sure What You Need?</span>
            <h2 className="font-[family-name:var(--font-bebas)] text-white tracking-wide leading-none" style={{ fontSize: "clamp(36px,5vw,56px)" }}>
              Talk to Me Directly
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/contact" className="btn-gold text-center">Contact Me</Link>
            <a href="https://wa.me/971558251439" target="_blank" rel="noopener noreferrer"
              className="border border-white/30 text-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:border-white hover:bg-white/10 transition-all inline-block text-center">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
