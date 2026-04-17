import { useEffect, useRef, useState } from "react";

const mainLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "#events" },
  { label: "Service Hub", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const moreLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const moreRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 20);

      const sections = [
        "home",
        "about",
        "menu",
        "gallery",
        "events",
        "services",
        "portfolio",
        "faq",
        "contact",
      ];

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 140;
          const bottom = top + el.offsetHeight;

          if (scrollY >= top && scrollY < bottom) {
            setActive(section);
          }
        }
      }
    };

    const onClickOutside = (event) => {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setMoreOpen(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    document.addEventListener("mousedown", onClickOutside);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  const getLinkColor = (href) => {
    return active === href.replace("#", "") ? "#d4af37" : "#e7dcc7";
  };

  const moreIsActive = active === "portfolio" || active === "faq";

  return (
    <nav
      className={`site-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl" : ""
      }`}
      style={{
        background: scrolled ? "rgba(8, 12, 10, 0.82)" : "transparent",
        borderBottom: scrolled
          ? "1px solid rgba(212, 175, 55, 0.18)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.25)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-2.5 flex items-center">
        <a href="#home" className="flex flex-col leading-[1.1] group shrink-0">
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

        <div className="hidden lg:flex flex-1 items-center ml-8 xl:ml-10">
          <ul className="flex items-center gap-6 xl:gap-8">
            {mainLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-xs tracking-[0.18em] uppercase font-medium transition-all duration-300 whitespace-nowrap"
                  style={{ color: getLinkColor(link.href) }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#d4af37";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = getLinkColor(link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li className="relative" ref={moreRef}>
              <button
                type="button"
                className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase font-medium transition-all duration-300 whitespace-nowrap"
                style={{
                  color: moreIsActive ? "#d4af37" : "#e7dcc7",
                }}
                onClick={() => setMoreOpen(!moreOpen)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#d4af37";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = moreIsActive
                    ? "#d4af37"
                    : "#e7dcc7";
                }}
              >
                More
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    moreOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`absolute top-full left-0 mt-4 w-56 rounded-[22px] overflow-hidden transition-all duration-300 ${
                  moreOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
                style={{
                  background: "rgba(10, 16, 12, 0.88)",
                  border: "1px solid rgba(212,175,55,0.14)",
                  boxShadow: "0 18px 50px rgba(0,0,0,0.28)",
                  backdropFilter: "blur(18px)",
                }}
              >
                <div className="p-3">
                  {moreLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMoreOpen(false)}
                      className="block px-4 py-3 rounded-xl text-xs tracking-[0.16em] uppercase font-medium transition-all duration-300"
                      style={{
                        color: getLinkColor(link.href),
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background =
                          "rgba(255,255,255,0.05)";
                        e.currentTarget.style.color = "#d4af37";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = getLinkColor(link.href);
                      }}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </li>
          </ul>

          <a
            href="#events"
            className="ml-auto inline-block text-xs font-semibold px-5 py-2.5 rounded-full tracking-[0.16em] uppercase transition-all duration-300 active:scale-95 active:brightness-110 whitespace-nowrap"
            style={{
              background: "linear-gradient(135deg, #1e6b30, #2d9a47)",
              color: "#ffffff",
              boxShadow:
                "0 0 0 rgba(45,154,71,0), 0 12px 30px rgba(45,154,71,0.25)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px) scale(1.03)";
              e.currentTarget.style.boxShadow =
                "0 0 24px rgba(45,154,71,0.35), 0 18px 42px rgba(45,154,71,0.34)";
              e.currentTarget.style.filter = "brightness(1.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow =
                "0 0 0 rgba(45,154,71,0), 0 12px 30px rgba(45,154,71,0.25)";
              e.currentTarget.style.filter = "brightness(1)";
            }}
          >
            Plan an Event
          </a>
        </div>

        <button
          className="ml-auto lg:hidden"
          style={{ color: "#f5f1e8" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
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
            background: "rgba(8,12,10,0.94)",
            borderColor: "rgba(212,175,55,0.12)",
            backdropFilter: "blur(16px)",
          }}
        >
          <ul className="flex flex-col gap-4 pt-5">
            {[...mainLinks, ...moreLinks].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-xs tracking-[0.16em] uppercase font-medium transition-all duration-200 active:scale-[0.98]"
                  style={{
                    color:
                      active === link.href.replace("#", "")
                        ? "#d4af37"
                        : "#e7dcc7",
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
            onClick={() => setOpen(false)}
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