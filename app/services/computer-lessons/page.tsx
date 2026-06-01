import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

export const metadata = { title: "Computer Lessons — Kings Key Tech" };

const theory = ["Introduction to Computers","Computer Hardware Components","Operating System Fundamentals","File & Folder Management","Computer Networks & Internet","Cybersecurity & Online Safety","Cloud Computing Basics","Troubleshooting Concepts"];
const practical = ["Microsoft Word","Microsoft Excel","Microsoft PowerPoint","Google Workspace","Email & Communication","Touch Typing & Shortcuts","Web Browsing & Research","Basic HTML & Web","Python / JavaScript Intro","Canva Design Basics","Video Editing Basics","Computer Maintenance"];
const levels = [
  { num: "01", level: "Beginner", desc: "Start from zero — learn to use a computer with confidence.", duration: "4 weeks" },
  { num: "02", level: "Intermediate", desc: "Master MS Office, internet skills, and productivity tools.", duration: "3 weeks" },
  { num: "03", level: "Advanced", desc: "Deep dive into programming, networking, and advanced software.", duration: "6 weeks" },
];

export default function Page() {
  return (
    <>
      <div className="page-hero">
        <span className="hidden md:block font-[family-name:var(--font-bebas)] absolute right-0 top-0 leading-none select-none pointer-events-none text-black/[0.04]" style={{ fontSize: "180px" }}>LEARN</span>
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">
          <Link href="/" className="no-underline" style={{ color: "var(--color-brand)" }}>Home</Link> /{" "}
          <Link href="/services" className="no-underline" style={{ color: "var(--color-brand)" }}>Services</Link> / Computer Lessons
        </p>
        <div className="flex items-center gap-5 mb-4">
          <div className="w-16 h-16 border-2 flex items-center justify-center text-3xl shrink-0" style={{ borderColor: "var(--color-brand)" }}>🎓</div>
          <div>
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-gray-400 mb-1">IT Training & Education</p>
            <h1 className="font-[family-name:var(--font-bebas)] tracking-wide text-gray-900" style={{ fontSize: "clamp(36px,6vw,64px)" }}>Computer Lessons</h1>
          </div>
        </div>
        <p className="text-gray-500 max-w-2xl leading-relaxed">Structured computer training covering both theory and hands-on practice. Learn at your pace, at all skill levels.</p>
      </div>

      <section className="bg-white page-section">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-14 lg:gap-20">
          <div className="space-y-14">
            {/* Levels */}
            <AnimatedSection>
              <h2 className="font-[family-name:var(--font-bebas)] text-3xl tracking-wide text-gray-900 mb-8">Training Levels</h2>
              <div className="space-y-4">
                {levels.map((l) => (
                  <div key={l.level} className="group flex gap-6 border border-gray-200 p-7 hover:border-[var(--color-brand)] transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gray-50 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 -z-0"/>
                    <div className="relative z-10 flex gap-6 w-full">
                      <span className="font-[family-name:var(--font-bebas)] text-5xl leading-none shrink-0" style={{ color: "var(--color-brand)" }}>{l.num}</span>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h4 className="font-[family-name:var(--font-bebas)] text-xl tracking-wide text-gray-900">{l.level}</h4>
                          <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 border" style={{ borderColor: "var(--color-brand)", color: "var(--color-brand)" }}>{l.duration}</span>
                        </div>
                        <div className="w-8 h-0.5 mb-3" style={{ background: "var(--color-brand)" }}/>
                        <p className="text-sm text-gray-500">{l.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Theory */}
            <AnimatedSection delay={150}>
              <h2 className="font-[family-name:var(--font-bebas)] text-3xl tracking-wide text-gray-900 mb-8">Theory Modules</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {theory.map((f) => (
                  <div key={f} className="flex items-center gap-4 border border-gray-200 px-5 py-3.5 hover:border-[var(--color-brand)] transition-colors group">
                    <div className="w-5 h-5 border-2 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-brand)] group-hover:border-[var(--color-brand)] transition-colors" style={{ borderColor: "var(--color-brand)" }}>
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="#D4A843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-gray-900"/></svg>
                    </div>
                    <span className="text-sm text-gray-600">{f}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Practical */}
            <AnimatedSection delay={250}>
              <h2 className="font-[family-name:var(--font-bebas)] text-3xl tracking-wide text-gray-900 mb-8">Practical Sessions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {practical.map((f) => (
                  <div key={f} className="flex items-center gap-4 border border-gray-200 px-5 py-3.5 hover:border-[var(--color-brand)] transition-colors group">
                    <div className="w-5 h-5 border-2 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-brand)] group-hover:border-[var(--color-brand)] transition-colors" style={{ borderColor: "var(--color-brand)" }}>
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="#D4A843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span className="text-sm text-gray-600">{f}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <AnimatedSection delay={300}>
            <div className="sticky top-24">
              <div className="border border-gray-200 overflow-hidden">
                <div className="bg-gray-900 px-7 py-5">
                  <h3 className="font-[family-name:var(--font-bebas)] text-2xl tracking-wide text-white">Enroll Now</h3>
                  <p className="text-xs text-gray-400 mt-1">Flexible scheduling, one-on-one or group.</p>
                </div>
                <div className="relative p-7">
                  <div className="absolute -top-px -left-px w-12 h-12 border-t-2 border-l-2 pointer-events-none" style={{ borderColor: "var(--color-brand)" }}/>
                  <div className="absolute -bottom-px -right-px w-12 h-12 border-b-2 border-r-2 pointer-events-none" style={{ borderColor: "var(--color-brand)" }}/>
                  <div className="space-y-3">
                    <a href="https://wa.me/971558251439?text=Hello%20Fahad%2C%20I%20want%20to%20enroll%20in%20Computer%20Lessons." target="_blank" rel="noopener noreferrer"
                      className="btn-gold w-full text-center block">💬 WhatsApp Now</a>
                    <Link href="/contact" className="btn-outline w-full text-center block">Send Inquiry →</Link>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
                    {["Flexible schedules","Certificate on completion","Beginner-friendly","Group & private sessions"].map((p) => (
                      <div key={p} className="flex items-center gap-3 text-xs text-gray-500">
                        <div className="w-4 h-4 border flex items-center justify-center shrink-0" style={{ borderColor: "var(--color-brand)" }}>
                          <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3l2 2 4-4" stroke="#D4A843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
