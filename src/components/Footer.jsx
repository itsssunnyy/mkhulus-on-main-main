export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Events", href: "#events" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { label: "IG", href: "#" },
    { label: "FB", href: "#" },
    { label: "TT", href: "#" },
  ];

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #060d07 0%, #0c1a0e 35%, #1a0f06 70%, #0a0604 100%)",
        borderTop: "1px solid rgba(212,160,23,0.16)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 20%, rgba(30,107,48,0.14) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 45% 35% at 80% 30%, rgba(212,160,23,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr_0.8fr] gap-12 items-start">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-flex flex-col leading-tight group">
              <span
                className="font-['Playfair_Display'] text-3xl font-bold tracking-wide transition-all duration-300"
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

            <div
              className="flex items-center gap-3 my-6"
              style={{ color: "#d4a017" }}
            >
              <div
                className="h-px w-10"
                style={{ backgroundColor: "rgba(212,160,23,0.45)" }}
              />
              <span style={{ fontSize: "10px" }}>✦</span>
            </div>

            <p
              className="max-w-md text-sm leading-8"
              style={{ color: "#d7cfbf" }}
            >
              Premium kasi flavour, warm atmosphere, and memorable dining
              experiences built for food, people, and real moments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p
              className="text-xs uppercase tracking-[0.3em] font-semibold mb-5"
              style={{ color: "#d4af37" }}
            >
              Quick Links
            </p>

            <ul className="grid grid-cols-2 gap-y-4 gap-x-6">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs uppercase tracking-[0.18em] transition-all duration-300"
                    style={{ color: "#e7dcc7" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#d4af37";
                      e.currentTarget.style.opacity = "1";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#e7dcc7";
                      e.currentTarget.style.opacity = "0.92";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Contact vibe */}
          <div>
            <p
              className="text-xs uppercase tracking-[0.3em] font-semibold mb-5"
              style={{ color: "#d4af37" }}
            >
              Stay Connected
            </p>

            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-11 h-11 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300 active:scale-95"
                  style={{
                    border: "1px solid rgba(212,160,23,0.22)",
                    color: "#f3e7c0",
                    background: "rgba(212,160,23,0.06)",
                    boxShadow: "0 0 0 rgba(212,160,23,0)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px) scale(1.04)";
                    e.currentTarget.style.color = "#111111";
                    e.currentTarget.style.background =
                      "linear-gradient(135deg, #d4af37, #8d6b1f)";
                    e.currentTarget.style.boxShadow =
                      "0 14px 28px rgba(212,175,55,0.22)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.color = "#f3e7c0";
                    e.currentTarget.style.background = "rgba(212,160,23,0.06)";
                    e.currentTarget.style.boxShadow = "0 0 0 rgba(212,160,23,0)";
                  }}
                  aria-label={social.label}
                >
                  {social.label}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #1e6b30, #2d9a47)",
                color: "#ffffff",
                boxShadow: "0 10px 26px rgba(45,154,71,0.22)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px) scale(1.03)";
                e.currentTarget.style.boxShadow =
                  "0 18px 38px rgba(45,154,71,0.34)";
                e.currentTarget.style.filter = "brightness(1.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 10px 26px rgba(45,154,71,0.22)";
                e.currentTarget.style.filter = "brightness(1)";
              }}
            >
              Reserve a Table
              <span>→</span>
            </a>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
          style={{
            borderTop: "1px solid rgba(212,160,23,0.12)",
            color: "#9e8f76",
          }}
        >
          <p className="text-xs">
            © {new Date().getFullYear()} Mkhulu&apos;s On Main. All rights reserved.
          </p>

          <div className="flex items-center gap-3 text-xs">
            <a
              href="#"
              className="transition-opacity duration-300"
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.72")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Privacy Policy
            </a>
            <span style={{ color: "rgba(212,160,23,0.35)" }}>·</span>
            <a
              href="#"
              className="transition-opacity duration-300"
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.72")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
