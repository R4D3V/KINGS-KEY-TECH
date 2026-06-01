"use client";
import { useState } from "react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const contactInfo = [
  { icon: "📞", title: "Call Us", value: "+971 558 251 439", sub: "Available Mon–Sat, 8AM–8PM", href: "tel:+971558251439" },
  { icon: "✉️", title: "Email Us", value: "fahadkayondo19@gmail.com", sub: "We reply within 24 hours", href: "mailto:fahadkayondo19@gmail.com" },
  { icon: "💬", title: "WhatsApp", value: "+971 558 251 439", sub: "Quick responses guaranteed", href: "https://wa.me/971558251439" },
];

const hours = [
  { day: "Monday – Saturday", time: "8:00 AM – 8:00 PM", note: "Open & ready to serve", open: true },
  { day: "Sunday", time: "On Request", note: "Contact for availability", open: true },
];

const services = ["OS & Program Installation","Phone Flashing & Unlocking","Website Designing","Computer Lessons","CV Making","Other"];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const msg = [
      "🔑 *New Inquiry — Kings Key Tech*",
      "",
      `*Name:* ${form.name}`,
      `*Email:* ${form.email || "Not provided"}`,
      `*Phone:* ${form.phone || "Not provided"}`,
      `*Service:* ${form.service || "General"}`,
      "",
      `*Message:*`,
      form.message,
    ].join("\n");
    const url = `https://wa.me/971558251439?text=${encodeURIComponent(msg)}`;
    setTimeout(() => {
      setSent(true);
      setLoading(false);
      window.open(url, "_blank");
      setTimeout(() => {
        setSent(false);
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
      }, 3000);
    }, 800);
  };

  return (
    <>
      <div className="page-hero">
        <span className="hidden md:block font-[family-name:var(--font-bebas)] absolute right-0 top-0 leading-none select-none pointer-events-none text-black/[0.04]" style={{ fontSize: "140px" }}>CONTACT</span>
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">
          <Link href="/" className="no-underline" style={{ color: "var(--color-brand)" }}>Home</Link> / Contact Us
        </p>
        <h1 className="font-[family-name:var(--font-bebas)] tracking-wide text-gray-900" style={{ fontSize: "clamp(48px,8vw,80px)" }}>Contact Us</h1>
        <p className="text-gray-500 mt-3 max-w-lg">Get in touch for all your technology service needs. I respond quickly.</p>
      </div>

      {/* Contact cards */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="px-6 md:px-16 lg:px-24 py-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border-x border-gray-200 -mt-1">
            {contactInfo.map((info) => (
              <a key={info.title} href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                className="bg-white p-9 group hover:bg-[var(--color-brand)] transition-colors duration-500 cursor-pointer no-underline block">
                <div className="w-11 h-11 border border-gray-200 group-hover:border-gray-900 flex items-center justify-center text-xl mb-6 transition-colors duration-300">{info.icon}</div>
                <p className="text-[10px] font-bold tracking-[0.22em] uppercase mb-2 transition-colors duration-300 group-hover:text-gray-900/60" style={{ color: "var(--color-brand)" }}>{info.title}</p>
                <p className="font-[family-name:var(--font-bebas)] text-xl tracking-wide text-gray-900 group-hover:text-gray-900 mb-1 transition-colors duration-300 break-all">{info.value}</p>
                <p className="text-xs text-gray-400 group-hover:text-gray-700 transition-colors duration-300">{info.sub}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-white page-section">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-14 lg:gap-20">
          {/* Left panel */}
          <AnimatedSection>
            <span className="section-label">Let&apos;s Talk</span>
            <h2 className="section-title">Get In Touch</h2>
            <div className="w-12 h-0.5 mb-8" style={{ background: "var(--color-brand)" }}/>
            <p className="text-gray-500 leading-relaxed mb-12 text-sm">
              Whether you need OS installation, phone repair, a website, computer training, or a professional CV — I&apos;m here to help.
            </p>

            {/* Quick action buttons */}
            <div className="space-y-3 mb-12">
              {[
                { href: "tel:+971558251439", label: "Call: +971 558 251 439", icon: "📞" },
                { href: "https://wa.me/971558251439", label: "WhatsApp Me", icon: "💬", target: "_blank" },
                { href: "mailto:fahadkayondo19@gmail.com", label: "Email Me", icon: "✉️" },
              ].map((a) => (
                <a key={a.label} href={a.href} target={(a as {target?: string}).target}
                  className="flex items-center gap-4 border border-gray-200 px-6 py-4 hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] transition-all duration-300 no-underline text-gray-700 group">
                  <span className="text-base w-6 text-center">{a.icon}</span>
                  <span className="text-xs font-bold tracking-[0.18em] uppercase">{a.label}</span>
                  <span className="ml-auto text-gray-300 group-hover:text-[var(--color-brand)] transition-colors">→</span>
                </a>
              ))}
            </div>

            {/* Hours */}
            <div className="border border-gray-200 overflow-hidden">
              <div className="bg-gray-900 px-6 py-3">
                <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-white/50">Availability</p>
              </div>
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between items-center px-6 py-4 border-t border-gray-100 first:border-0">
                  <div>
                    <p className="text-sm font-semibold text-gray-700">{h.day}</p>
                    <p className="text-xs text-gray-400">{h.note}</p>
                  </div>
                  <span className="font-[family-name:var(--font-bebas)] text-lg tracking-wide" style={{ color: "var(--color-brand)" }}>{h.time}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={200}>
            <div className="relative">
              <div className="absolute -top-3 -right-3 w-24 h-24 border-t-2 border-r-2 opacity-20 pointer-events-none" style={{ borderColor: "var(--color-brand)" }}/>
              <div className="absolute -bottom-3 -left-3 w-24 h-24 border-b-2 border-l-2 opacity-20 pointer-events-none" style={{ borderColor: "var(--color-brand)" }}/>

              <div className="border border-gray-200 p-8 md:p-12 relative">
                <h3 className="font-[family-name:var(--font-bebas)] text-4xl tracking-wide text-gray-900 mb-2">Send a Message</h3>
                <p className="text-sm text-gray-400 mb-10">Your message will be sent directly to my WhatsApp for a fast response.</p>

                <form onSubmit={submit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2">Full Name *</label>
                      <input name="name" value={form.name} onChange={handle} required placeholder="Your full name" className="input-field"/>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2">Email Address</label>
                      <input name="email" type="email" value={form.email} onChange={handle} placeholder="your@email.com" className="input-field"/>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2">Phone Number</label>
                      <input name="phone" type="tel" value={form.phone} onChange={handle} placeholder="+971 xxx xxx xxx" className="input-field"/>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2">Service Needed</label>
                      <select name="service" value={form.service} onChange={handle} className="input-field">
                        <option value="">Select a service…</option>
                        {services.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2">Message *</label>
                    <textarea name="message" value={form.message} onChange={handle} required rows={5}
                      placeholder="Describe what you need — the more detail the better!"
                      className="input-field resize-y"/>
                  </div>

                  <button type="submit" disabled={loading || sent}
                    className="w-full py-4 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer border-none text-gray-900 flex items-center justify-center gap-3"
                    style={{ background: sent ? "#16a34a" : loading ? "#B8891C" : "var(--color-brand)", color: sent ? "#fff" : undefined }}>
                    {sent ? (<><span>✓</span> Redirecting to WhatsApp…</>) : loading ? "Sending…" : (<>Send Message via WhatsApp <span>→</span></>)}
                  </button>
                  <p className="text-[11px] text-gray-400 text-center">Clicking send will open WhatsApp with your message pre-filled.</p>
                </form>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <div className="relative overflow-hidden bg-gray-900 px-6 md:px-16 lg:px-24 py-20">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.07]" style={{ background: "var(--color-brand)" }}/>
        <span className="absolute right-0 top-1/2 -translate-y-1/2 font-[family-name:var(--font-bebas)] leading-none select-none pointer-events-none text-white/[0.03]" style={{ fontSize: "200px" }}>CALL</span>
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          <div>
            <span className="block text-[11px] font-bold tracking-[0.25em] uppercase mb-4" style={{ color: "var(--color-brand)" }}>Need Immediate Assistance?</span>
            <h3 className="font-[family-name:var(--font-bebas)] text-white tracking-wide leading-none" style={{ fontSize: "clamp(36px,5vw,60px)" }}>I&apos;m Ready to Help You Now.</h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            {[
              { href: "tel:+971558251439", label: "📞 Call Now", primary: true },
              { href: "https://wa.me/971558251439", label: "💬 WhatsApp", target: "_blank" },
              { href: "mailto:fahadkayondo19@gmail.com", label: "✉️ Email Me" },
            ].map((a) => (
              <a key={a.label} href={a.href} target={(a as {target?: string}).target}
                className={`px-6 py-3.5 text-xs font-bold tracking-[0.18em] uppercase transition-all no-underline inline-block text-center ${
                  (a as {primary?: boolean}).primary ? "text-gray-900" : "border border-white/20 text-white/70 hover:border-white hover:text-white hover:bg-white/5"
                }`}
                style={(a as {primary?: boolean}).primary ? { background: "var(--color-brand)" } : undefined}>
                {a.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
