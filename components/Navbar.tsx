"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const leftLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
];
const rightLinks = [{ href: "/contact", label: "Contact" }];
const allLinks = [...leftLinks, ...rightLinks];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  const toggle = () => {
    const next = !open;
    setOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-[100] shadow-sm">
        <div className="px-6 md:px-16 lg:px-24 h-[68px] flex items-center justify-between">
          {/* Left links — desktop */}
          <ul className="hidden lg:flex gap-8 list-none m-0 p-0 flex-1 justify-end pr-10">
            {leftLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-xs font-bold tracking-widest uppercase no-underline transition-colors ${
                    isActive(link.href)
                      ? "text-[var(--color-brand)]"
                      : "text-gray-400 hover:text-gray-800"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Logo — centered */}
          <Link
            href="/"
            className="no-underline flex items-center gap-3 shrink-0"
            aria-label="Kings Key Tech"
          >
            {/* Crown SVG Logo */}
            <svg
              width="38"
              height="38"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
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
              <rect x="16" y="37" width="28" height="3" rx="0" fill="#D4A843" />
              <circle cx="21" cy="30" r="2" fill="#F5D070" />
              <circle cx="30" cy="26" r="2.5" fill="#F5D070" />
              <circle cx="39" cy="30" r="2" fill="#F5D070" />
            </svg>
            <div className="leading-none">
              <div className="font-[family-name:var(--font-bebas)] text-xl tracking-widest text-gray-900">
                KINGS KEY
                <span style={{ color: "var(--color-brand)" }}> TECH</span>
              </div>
            </div>
          </Link>

          {/* Right links — desktop */}
          <ul className="hidden lg:flex gap-8 list-none m-0 p-0 flex-1 justify-start pl-10">
            {rightLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-xs font-bold tracking-widest uppercase no-underline transition-colors ${
                    isActive(link.href)
                      ? "text-[var(--color-brand)]"
                      : "text-gray-400 hover:text-gray-800"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {/* <li>
              <Link href="/contact" className="btn-gold py-2 px-5 text-[10px]">
                Get a Quote
              </Link>
            </li> */}
          </ul>

          {/* Hamburger — mobile */}
          <button
            onClick={toggle}
            className="lg:hidden flex flex-col justify-between w-7 h-5 bg-transparent border-none cursor-pointer p-0 z-[300]"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-full bg-gray-800 transition-all duration-300 ${open ? "translate-y-[9px] rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-full bg-gray-800 transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-full bg-gray-800 transition-all duration-300 ${open ? "-translate-y-[9px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 top-[68px] bg-white z-[200] flex flex-col px-7 pt-6 pb-12 border-t-2 border-[var(--color-brand)] overflow-y-auto transition-all duration-300 ${
          open
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-2"
        }`}
      >
        {allLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`font-[family-name:var(--font-bebas)] text-3xl tracking-widest py-4 border-b border-gray-100 no-underline transition-colors ${
              isActive(link.href)
                ? "text-[var(--color-brand)]"
                : "text-gray-900 hover:text-[var(--color-brand)]"
            }`}
          >
            {link.label}
          </Link>
        ))}
        {/* <Link href="/contact" className="btn-gold text-center mt-7">
          Get a Quote
        </Link> */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">
            Contact
          </p>
          <a
            href="tel:+971558251439"
            className="block text-sm text-gray-600 mb-2 hover:text-[var(--color-brand)] no-underline"
          >
            📞 +971 558 251 439
          </a>
          <a
            href="mailto:fahadkayondo19@gmail.com"
            className="block text-sm text-gray-600 hover:text-[var(--color-brand)] no-underline"
          >
            ✉️ fahadkayondo19@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}
