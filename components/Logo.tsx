import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
}

export default function Logo({ size = "md" }: LogoProps) {
  const sizes = {
    sm: { svg: 34, text: "text-lg" },
    md: { svg: 44, text: "text-xl" },
    lg: { svg: 60, text: "text-3xl" },
  };
  const s = sizes[size];

  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div
        className="relative flex-shrink-0"
        style={{ width: s.svg, height: s.svg }}
      >
        <svg
          width={s.svg}
          height={s.svg}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rounded-2xl"
        >
          <rect
            x="6"
            y="6"
            width="52"
            height="52"
            rx="14"
            fill="#0B0F18"
            stroke="#F4D35E"
            strokeWidth="2.5"
          />
          <circle cx="22" cy="22" r="10" fill="#E63946" />
          <path d="M32 52 L32 36 L44 36 L44 52 Z" fill="#457B9D" />
          <path
            d="M22 22 L42 22"
            stroke="#F8FAFC"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="leading-none">
        <div
          className={`${s.text} font-bold tracking-wide`}
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="gold-text">KINGS</span>
          <span style={{ color: "var(--color-text)" }}> KEY</span>
        </div>
        <div className="text-xs uppercase tracking-[0.3em] mt-1 text-[#F4D35E]">
          TECH
        </div>
      </div>
    </Link>
  );
}
