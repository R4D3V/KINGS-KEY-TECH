"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const stats = [
  { num: "500+", label: "Clients Served" },
  { num: "3+", label: "Years Experience" },
  { num: "99%", label: "Satisfaction Rate" },
];

const services = [
  { icon: "💻", title: "OS & Program Installation", desc: "Fresh OS setup, driver installation, and software deployment for peak performance.", href: "/services/os-installation" },
  { icon: "📱", title: "Phone Flashing & Unlocking", desc: "Firmware flashing, factory reset, and carrier unlocking for all Android & iOS devices.", href: "/services/phone-flashing" },
  { icon: "🌐", title: "Website Designing", desc: "Modern, responsive websites built from scratch — portfolio, business, or e-commerce.", href: "/services/website-design" },
  { icon: "🎓", title: "Computer Lessons", desc: "Theory and practical IT training for all skill levels — from beginner to advanced.", href: "/services/computer-lessons" },
  { icon: "📄", title: "CV Making", desc: "Professionally crafted, ATS-optimised CVs that get you noticed and land interviews.", href: "/services/cv-making" },
];

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [typed, setTyped] = useState(0);
  const name = "Fahad K";

  useEffect(() => {
    setMounted(true);
    let i = 0;
    const iv = setInterval(() => {
      if (i < name.length) { setTyped(++i); }
      else clearInterval(iv);
    }, 130);
    return () => clearInterval(iv);
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">
        {/* BG image */}
        <div className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1600')", filter: "brightness(0.2)" }}/>
        {/* Layered gradient */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(105deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.55) 55%, rgba(212,168,67,0.08) 100%)" }}/>
        {/* Diagonal gold accent */}
        <div className="absolute top-0 right-0 w-[45%] h-full opacity-[0.05] pointer-events-none"
          style={{ background: "linear-gradient(135deg, transparent 40%, #D4A843 100%)" }}/>
        {/* Vertical decorative lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute left-[55%] top-0 bottom-0 w-px bg-white/[0.04]"/>
          <div className="absolute left-[72%] top-0 bottom-0 w-px bg-white/[0.04]"/>
        </div>

        <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 py-28">
          <div className="max-w-3xl"
            style={{ opacity: mounted ? 1 : 0, transform: mounted ? "none" : "translateY(20px)", transition: "opacity 1s ease 0.2s, transform 1s ease 0.2s" }}>
            {/* Label */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex gap-1">
                <span className="block w-6 h-px bg-[var(--color-brand)]"/>
                <span className="block w-2 h-px bg-[var(--color-brand)] opacity-50"/>
              </div>
              <span className="text-[var(--color-brand)] text-[11px] font-bold tracking-[0.35em] uppercase">
                Kings Key Tech
              </span>
            </div>

            {/* Headline */}
            <div className="font-[family-name:var(--font-bebas)] leading-[0.92] tracking-tight text-white mb-4"
              style={{ fontSize: "clamp(32px, 5.5vw, 72px)", transition: "opacity 1s ease 0.5s", opacity: mounted ? 1 : 0 }}>
              Hey, I am
            </div>
            <h1 className="font-[family-name:var(--font-bebas)] leading-[0.88] tracking-tight mb-8"
              style={{ fontSize: "clamp(68px, 11vw, 140px)", color: "var(--color-brand)", transition: "opacity 1s ease 0.7s", opacity: mounted ? 1 : 0 }}>
              {name.slice(0, typed)}
              <span className="inline-block w-[0.06em] h-[0.85em] bg-[var(--color-brand)] ml-1 align-middle"
                style={{ animation: typed >= name.length ? "blink 0.8s step-end infinite" : "none" }}/>
            </h1>

            {/* Red divider */}
            <div className="flex items-center gap-4 mb-8"
              style={{ opacity: mounted ? 1 : 0, transition: "opacity 1s ease 1s" }}>
              <div className="w-16 h-0.5 bg-[var(--color-brand)]"/>
              <span className="text-white/30 text-xs tracking-widest uppercase font-bold">Tech Specialist & Founder</span>
            </div>

            {/* Sub text */}
            <p className="text-white/50 text-lg leading-relaxed max-w-md mb-12 font-light"
              style={{ opacity: mounted ? 1 : 0, transition: "opacity 1s ease 1.2s" }}>
              Premium technology services — OS setup, phone repairs, web design, IT training, and professional CVs.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-16"
              style={{ opacity: mounted ? 1 : 0, transition: "opacity 1s ease 1.5s" }}>
              <Link href="/services"
                className="group relative overflow-hidden bg-[var(--color-brand)] text-gray-900 px-9 py-4 text-xs font-bold tracking-[0.2em] uppercase no-underline inline-flex items-center gap-3 transition-all duration-300 hover:gap-5">
                <span>Explore Services</span>
                <span className="text-base leading-none">→</span>
              </Link>
              <Link href="/contact"
                className="border border-white/20 text-white/70 px-9 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:border-white hover:text-white hover:bg-white/5 transition-all duration-300 no-underline inline-block">
                Contact Me
              </Link>
            </div>
          </div>
        </div>

        <style>{`@keyframes blink { from { opacity:1 } to { opacity:0 } }`}</style>
      </section>

      {/* ── ABOUT ── */}
      <section className="bg-white page-section overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          {/* Image side */}
          <AnimatedSection>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-2/3 h-2/3 bg-gray-50 border border-gray-200 -z-10"/>
              <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 opacity-10 -z-10" style={{ background: "var(--color-brand)" }}/>
              <div className="w-full bg-gray-900 relative" style={{ minHeight: "460px" }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8">
                  {/* Avatar monogram */}
                  <div className="w-36 h-36 border-2 border-[var(--color-brand)] flex items-center justify-center"
                    style={{ background: "rgba(212,168,67,0.08)" }}>
                    <span className="font-[family-name:var(--font-bebas)] text-6xl tracking-widest"
                      style={{ color: "var(--color-brand)" }}>FK</span>
                  </div>
                  <div className="text-center">
                    <p className="font-[family-name:var(--font-bebas)] text-3xl tracking-widest text-white">Fahad K</p>
                    <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-gray-400 mt-1">Tech Specialist & Founder</p>
                  </div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 justify-center mt-2">
                    {["Web Dev", "IT Trainer", "Tech Repair", "CV Expert"].map((t) => (
                      <span key={t} className="text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 border border-[var(--color-brand)]/30 text-[var(--color-brand)]">{t}</span>
                    ))}
                  </div>
                </div>
                {/* Floating stat badge */}
                <div className="absolute -bottom-5 -right-5 lg:-right-8 z-20 p-6 shadow-xl" style={{ background: "var(--color-brand)" }}>
                  <div className="font-[family-name:var(--font-bebas)] text-5xl leading-none text-gray-900">3+</div>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase mt-1 text-gray-900/70">Years of Trust</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Text side */}
          <AnimatedSection delay={200}>
            <span className="section-label">Who I Am</span>
            <h2 className="section-title">About Fahad K &<br/>Kings Key Tech</h2>
            <div className="w-12 h-0.5 mb-7" style={{ background: "var(--color-brand)" }}/>
            <p className="text-gray-500 leading-relaxed mb-6">
              I'm <strong className="text-gray-800">Fahad K</strong>, a passionate technology specialist with hands-on expertise across hardware, software, and digital services. I founded Kings Key Tech with a single mission — to make quality technology accessible to everyone.
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              From setting up operating systems to designing complete websites and crafting compelling CVs — every service is delivered with meticulous attention to detail and an unwavering commitment to your satisfaction.
            </p>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-px bg-gray-200 border border-gray-200">
              {stats.map((s) => (
                <div key={s.label} className="bg-white py-7 px-4 text-center group hover:bg-[var(--color-brand)] transition-colors duration-300 cursor-default">
                  <div className="font-[family-name:var(--font-bebas)] text-4xl leading-none group-hover:text-gray-900 transition-colors duration-300"
                    style={{ color: "var(--color-brand)" }}>{s.num}</div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 group-hover:text-gray-900/70 transition-colors duration-300 mt-2">{s.label}</div>
                </div>
              ))}
            </div>
            <Link href="/services" className="inline-flex items-center gap-4 mt-10 text-[11px] font-bold tracking-[0.2em] uppercase text-gray-900 hover:text-[var(--color-brand)] transition-colors group no-underline">
              <span className="block w-8 h-px bg-current group-hover:w-14 transition-all duration-300"/>
              Explore My Services
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-gray-50 page-section">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="section-label">What I Offer</span>
              <h2 className="section-title">My Services</h2>
            </div>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed md:text-right">
              Premium technology services tailored to your needs — fast, reliable, and professional.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 100}>
              <Link href={s.href} className="no-underline block h-full">
                <div className="group relative bg-white border border-gray-200 p-10 overflow-hidden hover:border-[var(--color-brand)] hover:shadow-xl transition-all duration-500 cursor-pointer h-full">
                  {/* Gold sweep from bottom */}
                  <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out -z-0"
                    style={{ background: "var(--color-brand)" }}/>
                  {/* Number watermark */}
                  <span className="absolute -bottom-3 -right-2 font-[family-name:var(--font-bebas)] leading-none select-none text-gray-100 group-hover:text-white/10 transition-colors"
                    style={{ fontSize: "90px" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div className="relative z-10">
                    <div className="w-14 h-14 border-2 border-gray-200 group-hover:border-gray-900 flex items-center justify-center mb-8 text-2xl transition-colors duration-300">
                      {s.icon}
                    </div>
                    <h3 className="font-[family-name:var(--font-bebas)] text-2xl tracking-wide text-gray-900 group-hover:text-gray-900 transition-colors duration-300 mb-2 leading-tight">
                      {s.title}
                    </h3>
                    <div className="w-8 h-0.5 mb-5 transition-colors duration-300 group-hover:bg-gray-900" style={{ background: "var(--color-brand)" }}/>
                    <p className="text-sm text-gray-500 group-hover:text-gray-700 leading-relaxed transition-colors duration-300">{s.desc}</p>
                    <div className="mt-6 text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-brand)] group-hover:text-gray-900 transition-colors duration-300 flex items-center gap-2">
                      Learn More <span>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── WHY ME ── */}
      <AnimatedSection>
        <section className="bg-white page-section">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="section-label">Why Kings Key Tech</span>
              <h2 className="section-title">Built on Trust & Excellence</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "⚡", title: "Lightning Fast", desc: "Quick turnaround without compromising on quality. Your time is always respected.", num: "01" },
              { icon: "🛡️", title: "Secure & Reliable", desc: "Your data and devices are in professional hands with enterprise-grade care.", num: "02" },
              { icon: "⭐", title: "Premium Quality", desc: "Every service delivered to the highest standard — nothing less than excellence.", num: "03" },
            ].map((item) => (
              <div key={item.title} className="group relative bg-gray-50 border border-gray-200 p-10 overflow-hidden hover:border-[var(--color-brand)] hover:shadow-xl transition-all duration-500">
                <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 -z-0"
                  style={{ background: "var(--color-brand)" }}/>
                <span className="absolute -bottom-3 -right-2 font-[family-name:var(--font-bebas)] text-gray-200 group-hover:text-white/10 leading-none select-none transition-colors"
                  style={{ fontSize: "90px" }}>{item.num}</span>
                <div className="relative z-10">
                  <div className="w-14 h-14 border-2 border-gray-200 group-hover:border-gray-900 flex items-center justify-center mb-8 text-2xl transition-colors duration-300">{item.icon}</div>
                  <h3 className="font-[family-name:var(--font-bebas)] text-2xl tracking-wide text-gray-900 mb-2 leading-tight">{item.title}</h3>
                  <div className="w-8 h-0.5 mb-5 group-hover:bg-gray-900 transition-colors duration-300" style={{ background: "var(--color-brand)" }}/>
                  <p className="text-sm text-gray-500 group-hover:text-gray-700 leading-relaxed transition-colors duration-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ── CTA BAND ── */}
      <section className="relative overflow-hidden bg-gray-900 px-6 md:px-16 lg:px-24 py-24">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10" style={{ background: "var(--color-brand)" }}/>
        <div className="absolute -left-10 -bottom-10 w-56 h-56 border border-white/5 rounded-full"/>
        <div className="absolute -left-20 -bottom-20 w-96 h-96 border border-white/5 rounded-full"/>
        <span className="absolute right-0 top-1/2 -translate-y-1/2 font-[family-name:var(--font-bebas)] leading-none select-none pointer-events-none text-white/[0.03]" style={{ fontSize: "220px" }}>KINGS</span>

        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          <div className="max-w-xl">
            <span className="block text-[11px] font-bold tracking-[0.25em] uppercase mb-4" style={{ color: "var(--color-brand)" }}>Get In Touch Today</span>
            <h2 className="font-[family-name:var(--font-bebas)] text-white tracking-wide leading-none mb-4" style={{ fontSize: "clamp(40px,5vw,64px)" }}>
              Ready to Get My Services Delivered to You?
            </h2>
            <p className="text-white/50 text-base leading-relaxed">Get in touch today and I&apos;ll solve your tech challenges with speed and precision.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/contact" className="btn-gold text-center">Request a Quote</Link>
            <a href="https://wa.me/971558251439" target="_blank" rel="noopener noreferrer"
              className="border border-white/30 text-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:border-white hover:bg-white/10 transition-all inline-block text-center">
              💬 WhatsApp Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
