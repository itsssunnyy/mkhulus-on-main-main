import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center justify-center px-6 pt-32 pb-20 md:pt-40 md:pb-24"
      style={{
        background: "rgba(3,8,5,1)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(18,53,25,0.10) 0%, rgba(212,160,23,0.07) 50%, rgba(18,53,25,0.10) 100%)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none hidden md:block"
        style={{
          background:
            "radial-gradient(circle at 50% 38%, rgba(245,244,232,0.72) 0%, rgba(245,244,232,0.28) 18%, rgba(45,154,71,0.10) 34%, rgba(8,22,12,0.88) 58%, rgba(3,8,5,1) 100%)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none md:hidden"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(245,244,232,0.58) 0%, rgba(245,244,232,0.22) 16%, rgba(45,154,71,0.08) 30%, rgba(8,22,12,0.92) 50%, rgba(3,8,5,1) 78%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto text-center">
        <Reveal>
          <p
            className="text-[11px] sm:text-xs uppercase tracking-[0.42em] font-semibold mb-8"
            style={{ color: "#d4a017" }}
          >
            Authentic Kasi Dining Experience
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1
            className="font-['Playfair_Display'] font-bold leading-[0.9] text-[4.2rem] sm:text-[5.4rem] md:text-[7.4rem] lg:text-[8.6rem]"
            style={{ color: "#f8f6f0" }}
          >
            Mkhulu&apos;s
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <h2
            className="font-['Playfair_Display'] italic font-medium leading-none text-[2.3rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.8rem] mt-3 md:mt-4"
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
          <div className="flex items-center justify-center gap-4 mt-10 md:mt-12">
            <div
              className="h-px w-16 md:w-24"
              style={{ backgroundColor: "rgba(212,160,23,0.75)" }}
            />
            <span
              className="text-sm md:text-base"
              style={{ color: "#d4a017" }}
            >
              ✦
            </span>
            <div
              className="h-px w-16 md:w-24"
              style={{ backgroundColor: "rgba(212,160,23,0.75)" }}
            />
          </div>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-10 md:mt-12 leading-tight">
            <p
              className="font-['Playfair_Display'] italic font-medium text-[1.6rem] sm:text-[2rem] md:text-[2.6rem] lg:text-[3rem]"
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
              className="font-['Playfair_Display'] italic font-medium text-[1.6rem] sm:text-[2rem] md:text-[2.6rem] lg:text-[3rem] -mt-1"
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
            className="max-w-3xl mx-auto mt-10 md:mt-12 text-base sm:text-lg md:text-[1.15rem] leading-8 md:leading-9 px-2"
            style={{ color: "rgba(248,246,240,0.88)" }}
          >
            Premium kota culture, authentic kasi flavour, and a warm destination
            atmosphere for real food lovers, social moments, and unforgettable
            weekends.
          </p>
        </Reveal>

        <Reveal delay={380}>
          <div className="mt-12 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
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
            className="mt-12 md:mt-14 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-[11px] sm:text-xs uppercase tracking-[0.28em]"
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