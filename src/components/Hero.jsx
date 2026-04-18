import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen md:min-h-[88vh] flex items-center justify-center px-6 pt-20 sm:pt-24 md:pt-24 pb-10 md:pb-12"
      style={{
        background: "rgba(3,8,5,1)",
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/social/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/55 z-10"></div>

      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(18,53,25,0.10) 0%, rgba(212,160,23,0.07) 50%, rgba(18,53,25,0.10) 100%)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none hidden md:block z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 38%, rgba(245,244,232,0.32) 0%, rgba(245,244,232,0.12) 18%, rgba(45,154,71,0.08) 34%, rgba(8,22,12,0.84) 58%, rgba(3,8,5,0.96) 100%)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none md:hidden z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(245,244,232,0.16) 0%, rgba(245,244,232,0.06) 16%, rgba(45,154,71,0.05) 30%, rgba(8,22,12,0.88) 50%, rgba(3,8,5,0.96) 78%)",
        }}
      />

      <div className="relative z-20 max-w-6xl mx-auto text-center w-full">
        <Reveal>
          <p
            className="text-[10px] sm:text-xs uppercase tracking-[0.32em] sm:tracking-[0.42em] font-semibold mb-4 sm:mb-6 px-2"
            style={{ color: "#d4a017" }}
          >
            Authentic Kasi Dining Experience
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1
            className="font-['Playfair_Display'] font-bold leading-[0.92] text-[3rem] sm:text-[4.8rem] md:text-[5.8rem] lg:text-[6.6rem]"
            style={{ color: "#f8f6f0" }}
          >
            Mkhulu&apos;s
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <h2
            className="font-['Playfair_Display'] italic font-medium leading-none text-[1.8rem] sm:text-[2.7rem] md:text-[3.1rem] lg:text-[3.8rem] mt-1 sm:mt-2"
            style={{
              color: "#d4a017",
              textShadow: `
                0 0 8px rgba(212,160,23,0.35),
                0 0 18px rgba(212,160,23,0.25),
                0 0 32px rgba(212,160,23,0.15)
              `,
            }}
          >
            On Main
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-5 sm:mt-6 md:mt-6">
            <div
              className="h-px w-14 sm:w-16 md:w-20"
              style={{ backgroundColor: "rgba(212,160,23,0.75)" }}
            />
            <span
              className="text-sm md:text-base"
              style={{ color: "#d4a017" }}
            >
              ✦
            </span>
            <div
              className="h-px w-14 sm:w-16 md:w-20"
              style={{ backgroundColor: "rgba(212,160,23,0.75)" }}
            />
          </div>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-5 sm:mt-6 md:mt-6 leading-tight px-2">
            <p
              className="sm:hidden font-['Playfair_Display'] italic font-medium text-[0.95rem]"
              style={{
                color: "#4d9b49",
                textShadow: `
                  0 0 10px rgba(45,154,71,0.35),
                  0 0 20px rgba(45,154,71,0.25),
                  0 0 35px rgba(45,154,71,0.15)
                `,
              }}
            >
              The Best Or Nothing, It&apos;s Real McCoy
            </p>

            <p
              className="hidden sm:block font-['Playfair_Display'] italic font-medium text-[1.7rem] md:text-[2rem] lg:text-[2.4rem]"
              style={{
                color: "#4d9b49",
                textShadow: `
                  0 0 10px rgba(45,154,71,0.35),
                  0 0 20px rgba(45,154,71,0.25),
                  0 0 35px rgba(45,154,71,0.15)
                `,
              }}
            >
              The Best Or Nothing,
            </p>

            <p
              className="hidden sm:block font-['Playfair_Display'] italic font-medium text-[1.7rem] md:text-[2rem] lg:text-[2.4rem] -mt-1"
              style={{
                color: "#4d9b49",
                textShadow: `
                  0 0 10px rgba(45,154,71,0.35),
                  0 0 20px rgba(45,154,71,0.25),
                  0 0 35px rgba(45,154,71,0.15)
                `,
              }}
            >
              It&apos;s Real McCoy
            </p>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <p
            className="sm:hidden max-w-[20rem] mx-auto mt-4 text-[13px] leading-6 px-2"
            style={{ color: "rgba(248,246,240,0.88)" }}
          >
            Premium kota culture, and a warm atmosphere for real food lovers.
          </p>

          <p
            className="hidden sm:block max-w-3xl mx-auto mt-5 sm:mt-6 md:mt-6 text-base md:text-[1rem] leading-7 md:leading-7 px-2"
            style={{ color: "rgba(248,246,240,0.88)" }}
          >
            Premium kota culture, authentic kasi flavour, and a warm destination
            atmosphere for real food lovers, social moments, and unforgettable
            weekends.
          </p>
        </Reveal>

        <Reveal delay={380}>
          <div className="sm:hidden mt-7 flex flex-col items-center gap-3">
            <a
              href="#menu"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.08)",
                color: "#f8f6f0",
                border: "1px solid rgba(255,255,255,0.14)",
                boxShadow: "0 10px 24px rgba(0,0,0,0.12)",
              }}
            >
              View Our Menu
            </a>

            <a
              href="#order"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #c9a12c, #d4a017)",
                color: "#0c1a0e",
                boxShadow: "0 12px 30px rgba(212,160,23,0.22)",
              }}
            >
              Order Ahead
            </a>

            <div
              className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[10px] uppercase tracking-[0.18em] px-2"
              style={{ color: "rgba(248,246,240,0.72)" }}
            >
              <span>Old Etwatwa East</span>
              <span style={{ color: "#d4a017" }}>•</span>
              <span>Dine-In</span>
              <span style={{ color: "#d4a017" }}>•</span>
              <span>Order Ahead</span>
              <span style={{ color: "#d4a017" }}>•</span>
              <span>Events &amp; Group Dining</span>
            </div>
          </div>

          <div className="hidden sm:flex mt-7 sm:mt-8 md:mt-8 flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#menu"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.08)",
                color: "#f8f6f0",
                border: "1px solid rgba(255,255,255,0.14)",
                boxShadow: "0 10px 24px rgba(0,0,0,0.12)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
                e.currentTarget.style.borderColor = "rgba(212,160,23,0.42)";
                e.currentTarget.style.boxShadow =
                  "0 0 18px rgba(212,160,23,0.18), 0 0 28px rgba(45,154,71,0.14)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)";
                e.currentTarget.style.boxShadow = "0 10px 24px rgba(0,0,0,0.12)";
              }}
            >
              View Our Menu
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-9 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #c9a12c, #d4a017)",
                color: "#0c1a0e",
                boxShadow: "0 12px 30px rgba(212,160,23,0.22)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px) scale(1.03)";
                e.currentTarget.style.boxShadow =
                  "0 0 18px rgba(212,160,23,0.22), 0 0 30px rgba(45,154,71,0.16)";
                e.currentTarget.style.filter = "brightness(1.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow =
                  "0 12px 30px rgba(212,160,23,0.22)";
                e.currentTarget.style.filter = "brightness(1)";
              }}
            >
              Reserve a Table
            </a>

            <a
              href="#order"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.08)",
                color: "#f8f6f0",
                border: "1px solid rgba(255,255,255,0.14)",
                boxShadow: "0 10px 24px rgba(0,0,0,0.12)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
                e.currentTarget.style.borderColor = "rgba(212,160,23,0.42)";
                e.currentTarget.style.boxShadow =
                  "0 0 18px rgba(212,160,23,0.18), 0 0 28px rgba(45,154,71,0.14)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)";
                e.currentTarget.style.boxShadow = "0 10px 24px rgba(0,0,0,0.12)";
              }}
            >
              Order Ahead
            </a>
          </div>
        </Reveal>

        <Reveal delay={440}>
          <div
            className="hidden sm:flex mt-10 sm:mt-12 md:mt-10 flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 gap-y-3 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.28em] px-2"
            style={{ color: "rgba(248,246,240,0.72)" }}
          >
            <span>Open Today</span>
            <span style={{ color: "#d4a017" }}>•</span>
            <span>Old Etwatwa East</span>
            <span style={{ color: "#d4a017" }}>•</span>
            <span>Dine-In</span>
            <span style={{ color: "#d4a017" }}>•</span>
            <span>Order Ahead</span>
            <span style={{ color: "#d4a017" }}>•</span>
            <span>Events &amp; Group Dining</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}