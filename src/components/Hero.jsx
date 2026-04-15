export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 md:pt-36 lg:pt-40 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Deep layered background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(160deg, #060d07 0%, #0c1a0e 35%, #1a0f06 70%, #0a0604 100%)",
        }}
      />

      {/* Radial glow — green */}
      <div
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: "radial-gradient(ellipse 70% 60% at 30% 60%, rgba(30,107,48,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Radial glow — gold */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 40% at 75% 40%, rgba(212,160,23,0.12) 0%, transparent 65%)",
        }}
      />

      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* Thin horizontal gold line */}
      <div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          top: "72px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(212,160,23,0.3), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-10 max-w-5xl mx-auto opacity-0 animate-fadeUp">
        <p
          className="tracking-[0.45em] uppercase text-[11px] font-light mb-6"
          style={{ color: "#c7b07a", letterSpacing: "0.45em" }}
        >
          ✦ Authentic Kasi Dining Experience ✦
        </p>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-4"
          style={{
            color: "#fffdf7",
            textShadow: "0 0 32px rgba(212,175,55,0.10)",
          }}
        >
          Mkhulu&apos;s
        </h1>

        <h2
          className="text-xl sm:text-2xl md:text-4xl font-light italic tracking-[0.22em] mb-8"
          style={{ color: "#d4af37" }}
        >
          On Main
        </h2>

        {/* Ornamental divider */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div
            className="h-px w-16"
            style={{ background: "linear-gradient(90deg, transparent, #d4af37)" }}
          />
          <span style={{ color: "#d4af37", fontSize: "13px" }}>✦</span>
          <div
            className="h-px w-16"
            style={{ background: "linear-gradient(90deg, #d4af37, transparent)" }}
          />
        </div>

        <p
          className="text-base md:text-lg font-light max-w-2xl mx-auto leading-8 mb-12"
          style={{ color: "#d7cfbf", lineHeight: "1.9" }}
        >
          Premium kota culture, authentic kasi flavour, and a warm destination atmosphere built for food, people, and unforgettable moments in Etwatwa.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <a
            href="#menu"
            className="premium-btn group relative overflow-hidden text-white font-semibold px-8 md:px-10 py-4 rounded-full text-xs tracking-[0.22em] uppercase transition-all duration-300 hover:brightness-110 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #1e6b30, #2d9a47)",
              boxShadow: "0 10px 30px rgba(45,154,71,0.30)",
            }}
          >
            View Our Menu
          </a>

          <a
            href="#contact"
            className="text-xs font-semibold px-8 md:px-10 py-4 rounded-full tracking-[0.22em] uppercase transition-all duration-300 hover:brightness-110 active:scale-95"
            style={{
              border: "1px solid rgba(212,175,55,0.28)",
              color: "#f3e7c0",
              background: "rgba(212,175,55,0.08)",
              backdropFilter: "blur(10px)",
            }}
          >
            Make a Reservation
          </a>
        </div>

        {/* Opening hours */}
        <div
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs"
          style={{ color: "#b9b39f" }}
        >
          <span>🕒 Mon - Fri: 10:00 AM - 20:00</span>
          <span className="hidden sm:inline" style={{ color: "rgba(212,175,55,0.35)" }}>
            |
          </span>
          <span>🕐 Sat – Sun: 10 AM – 22:00</span>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute left-1/2 bottom-2 -translate-x-1/2 flex justify-center pointer-events-none">
        <div
          className="flex flex-col items-center gap-2 animate-bounce duration-1000"
          style={{ color: "#8f845f" }}
        >
          <span
            className="text-[10px] tracking-[0.35em] uppercase"
            style={{ color: "#b8a56a" }}
          >
            Scroll
          </span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
