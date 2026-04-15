import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "#events" },
  { label: "Order & Delivery", href: "#order" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 20);

      const sections = ["home", "about", "menu", "gallery", "events", "contact"];

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 120;
          const bottom = top + el.offsetHeight;

          if (scrollY >= top && scrollY < bottom) {
            setActive(section);
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`site-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl" : "backdrop-blur-md"
      }`}
      style={{
        background: scrolled ? "rgba(8, 12, 10, 0.88)" : "rgba(8, 12, 10, 0.45)",
        borderBottom: scrolled
          ? "1px solid rgba(212, 175, 55, 0.18)"
          : "1px solid rgba(255,255,255,0.04)",
        boxShadow: scrolled ? "0 10px 40px rgba(0,0,0,0.35)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <a href="#home" className="flex flex-col leading-tight group">
          <span
            className="font-['Playfair_Display'] text-2xl font-bold tracking-wide transition-all duration-300"
            style={{ color: "#f5f1e8" }}
          >
            Mkhulu&apos;s
          </span>
          <span
            className="text-xs tracking-[0.35em] uppercase font-light"
            style={{ color: "#d4af37" }}
          >
            On Main
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-xs tracking-[0.18em] uppercase font-medium transition-all duration-300"
                style={{
                  color:
                    active === link.href.replace("#", "")
                      ? "#d4af37"
                      : "#e7dcc7",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#d4af37";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color =
                    active === link.href.replace("#", "")
                      ? "#d4af37"
                      : "#e7dcc7";
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-block text-xs font-semibold px-5 py-2.5 rounded-full tracking-[0.16em] uppercase transition-all duration-300 active:scale-95 active:brightness-110"
          style={{
            background: "linear-gradient(135deg, #d4af37, #8d6b1f)",
            color: "#111111",
            boxShadow: "0 12px 30px rgba(212,175,55,0.22)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px) scale(1.03)";
            e.currentTarget.style.boxShadow = "0 18px 45px rgba(212,175,55,0.35)";
            e.currentTarget.style.filter = "brightness(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0) scale(1)";
            e.currentTarget.style.boxShadow = "0 12px 30px rgba(212,175,55,0.22)";
            e.currentTarget.style.filter = "brightness(1)";
          }}
        >
          Reserve a Table
        </a>

        <button
          className="lg:hidden"
          style={{ color: "#f5f1e8" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          className="lg:hidden px-6 pb-6 border-t"
          style={{
            background: "rgba(8,12,10,0.96)",
            borderColor: "rgba(212,175,55,0.12)",
          }}
        >
          <ul className="flex flex-col gap-4 pt-5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-xs tracking-[0.16em] uppercase font-medium transition-all duration-200 active:scale-[0.98] active:text-[#d4af37]"
                  style={{
                    color: "#e7dcc7",
                    WebkitTapHighlightColor: "transparent",
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-5 inline-block text-xs font-semibold px-5 py-2.5 rounded-full tracking-[0.16em] uppercase transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #d4af37, #8d6b1f)",
              color: "#111111",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.filter = "brightness(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.filter = "brightness(1)";
            }}
          >
            Reserve a Table
          </a>
        </div>
      )}
    </nav>
  );
}
