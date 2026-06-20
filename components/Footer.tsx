import Link from "next/link";

const serviceLinks = [
  { href: "/services/os-installation", label: "OS & Program Installation" },
  { href: "/services/phone-flashing", label: "Phone Flashing & Unlocking" },
  { href: "/services/website-design", label: "Website Designing" },
  { href: "/services/computer-lessons", label: "Computer Lessons" },
  { href: "/services/cv-making", label: "CV Making" },
];
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="px-6 md:px-16 lg:px-24 pt-16 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="no-underline inline-block mb-6">
            <div className="flex items-center gap-3">
              <svg width="36" height="36" viewBox="0 0 60 60" fill="none">
                <path
                  d="M30 2 L54 16 L54 44 L30 58 L6 44 L6 16 Z"
                  fill="#111"
                  stroke="#D4A843"
                  strokeWidth="1.5"
                />
                <path
                  d="M16 38 L16 30 L21 35 L30 24 L39 35 L44 30 L44 38 Z"
                  fill="none"
                  stroke="#D4A843"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                <rect x="16" y="37" width="28" height="3" fill="#D4A843" />
                <circle cx="21" cy="30" r="2" fill="#F5D070" />
                <circle cx="30" cy="26" r="2.5" fill="#F5D070" />
                <circle cx="39" cy="30" r="2" fill="#F5D070" />
              </svg>
              <span className="font-[family-name:var(--font-bebas)] text-xl tracking-widest text-gray-900">
                KINGS KEY{" "}
                <span style={{ color: "var(--color-brand)" }}>TECH</span>
              </span>
            </div>
          </Link>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            Professional tech services delivered with precision, speed, and
            integrity. Your trusted technology partner.
          </p>
          <div className="flex gap-3">
            {[
              { href: "https://wa.me/971558251439", label: "W" },
              { href: "mailto:fahadkayondo19@gmail.com", label: "E" },
              { href: "tel:+971558251439", label: "C" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="w-9 h-9 border border-gray-200 flex items-center justify-center text-[10px] font-bold tracking-widest text-gray-400 hover:border-[var(--color-brand)] hover:text-white hover:bg-[var(--color-brand)] transition-all duration-300 no-underline uppercase"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <div className="flex items-center gap-3 mb-7">
            <span className="block w-5 h-px bg-[var(--color-brand)]" />
            <h4 className="text-[11px] font-bold tracking-[0.22em] uppercase text-[var(--color-brand)]">
              Services
            </h4>
          </div>
          <ul className="list-none p-0 m-0 space-y-3">
            {serviceLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-gray-500 hover:text-gray-900 hover:pl-2 transition-all duration-300 no-underline flex items-center gap-2 group"
                >
                  <span className="block w-0 group-hover:w-3 h-px bg-[var(--color-brand)] transition-all duration-300" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <div className="flex items-center gap-3 mb-7">
            <span className="block w-5 h-px bg-[var(--color-brand)]" />
            <h4 className="text-[11px] font-bold tracking-[0.22em] uppercase text-[var(--color-brand)]">
              Navigation
            </h4>
          </div>
          <ul className="list-none p-0 m-0 space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-gray-500 hover:text-gray-900 hover:pl-2 transition-all duration-300 no-underline flex items-center gap-2 group"
                >
                  <span className="block w-0 group-hover:w-3 h-px bg-[var(--color-brand)] transition-all duration-300" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="flex items-center gap-3 mb-7">
            <span className="block w-5 h-px bg-[var(--color-brand)]" />
            <h4 className="text-[11px] font-bold tracking-[0.22em] uppercase text-[var(--color-brand)]">
              Contact Us
            </h4>
          </div>
          <div className="space-y-5">
            {[
              {
                label: "Phone",
                value: "+971 558 251 439",
                href: "tel:+971558251439",
              },
              {
                label: "Email",
                value: "fahadkayondo19@gmail.com",
                href: "mailto:fahadkayondo19@gmail.com",
              },
              {
                label: "WhatsApp",
                value: "Chat with Fahad K",
                href: "https://wa.me/971558251439",
              },
            ].map((c) => (
              <div key={c.label}>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-1">
                  {c.label}
                </p>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-[var(--color-brand)] transition-colors no-underline break-all"
                >
                  {c.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-6 md:mx-16 lg:mx-24 h-px bg-gray-200" />
      <div className="px-6 md:px-16 lg:px-24 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Kings Key Tech. All rights reserved.
        </p>
        <a
          href="http://raymonjohns.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-xs text-gray-400">
            Built with ❤️ by{" "}
            <span style={{ color: "var(--color-brand)" }}>RaymonJohns</span>
          </p>
        </a>
      </div>
    </footer>
  );
}
