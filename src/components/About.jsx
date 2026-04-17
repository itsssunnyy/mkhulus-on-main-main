import Reveal from "./Reveal";

const highlights = [
  { icon: "🍽️", label: "Cuisine", value: "Grill / Fast Food" },
  { icon: "📍", label: "Location", value: "15522 Main St, Benoni, Gauteng, 1519" },
  { icon: "👨‍🍳", label: "Head Chef", value: "Mkhulu" },
  { icon: "🕐", label: "Est.", value: "2020" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "#faf8f3" }}
    >
      <div
        className="absolute top-0 right-0 w-1/3 h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(30,107,48,0.04) 0%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <Reveal>
              <p
                className="tracking-[0.4em] uppercase text-xs font-semibold mb-4"
                style={{ color: "#2d9a47" }}
              >
                Our Story
              </p>
            </Reveal>

            <Reveal delay={120}>
              <h2
                className="text-5xl md:text-6xl font-bold mb-2 leading-tight"
                style={{ color: "#0c1a0e" }}
              >
                About
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <h2
                className="text-5xl md:text-6xl font-bold italic mb-8 leading-tight"
                style={{ color: "#1b5e20" }}
              >
                Mkhulu&apos;s On Main
              </h2>
            </Reveal>

            <div className="flex items-center gap-3 mb-8">
              <div
                className="h-px w-10"
                style={{ backgroundColor: "#d4a017" }}
              />
              <span style={{ color: "#d4a017", fontSize: "10px" }}>✦</span>
            </div>

            <p
              className="text-sm leading-8 mb-5"
              style={{ color: "#4a3828", lineHeight: "2" }}
            >
              Mkhulu’s On Main started with a simple vision to create a place where
              real food meets real people. Inspired by the energy of the township
              and the love for bold, satisfying flavours, it grew from the idea
              that great meals should be accessible, consistent, and full of
              character. The name “Mkhulu” represents more than just a person it
              reflects wisdom, respect, and warmth. It’s the feeling of being
              welcomed, looked after, and served with intention. That spirit is
              carried into every meal, every interaction, and every experience at
              Mkhulu’s On Main.
            </p>

            <p
              className="text-sm leading-8 mb-5"
              style={{ color: "#4a3828", lineHeight: "2" }}
            >
              The atmosphere is built around comfort and connection. Whether you’re
              stopping by for a quick bite or spending time with friends, the
              environment is relaxed, familiar, and full of life. The food stays
              true to its roots authentic kota and street food made with care,
              flavour, and consistency. Every order is prepared to satisfy, not
              just hunger, but the experience of enjoying something genuinely
              good. Mkhulu’s serves a community that values real taste, real
              moments, and a place they can always come back to.
            </p>

            <p
              className="text-sm leading-8 mb-12"
              style={{ color: "#4a3828", lineHeight: "2" }}
            >
              “Good food brings people together and when it’s done right, it keeps
              them coming back.”
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=15522+Main+St,+Benoni,+Gauteng,+1519"
              target="_blank"
              rel="noopener noreferrer"
              className="premium-btn group relative overflow-hidden inline-flex items-center gap-3 text-white font-semibold px-8 md:px-10 py-4 rounded-full text-xs tracking-[0.22em] uppercase transition-all duration-300 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #1e6b30, #2d9a47)",
                boxShadow: "0 10px 30px rgba(45,154,71,0.30)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px) scale(1.03)";
                e.currentTarget.style.boxShadow =
                  "0 18px 42px rgba(45,154,71,0.38)";
                e.currentTarget.style.filter = "brightness(1.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(45,154,71,0.30)";
                e.currentTarget.style.filter = "brightness(1)";
              }}
            >
              Visit Us
              <span style={{ fontSize: "14px" }}>→</span>
            </a>
          </div>

          <div className="flex flex-col gap-5">
            <Reveal delay={100}>
              <div
                className="relative w-full h-[26rem] rounded-[28px] overflow-hidden group"
                style={{
                  border: "1px solid rgba(212,160,23,0.22)",
                  background: "#0c1a0e",
                }}
              >
                <img
                  src="/gallery/about-new.jpg"
                  alt="Mkhulu's On Main exterior"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                />

                {/* ✅ PERFECT BALANCED OVERLAY */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)",
                  }}
                />

                <div
                  className="absolute top-5 left-5 px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.25em] font-semibold"
                  style={{
                    background: "rgba(255,255,255,0.9)",
                    color: "#1b5e20",
                    border: "1px solid rgba(212,160,23,0.18)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  Mkhulu&apos;s On Main
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <p
                    className="text-xs uppercase tracking-[0.28em] mb-2"
                    style={{ color: "#d4af37" }}
                  >
                    Etwatwa • Benoni
                  </p>
                  <h3
                    className="text-2xl md:text-3xl font-bold font-['Playfair_Display'] mb-3"
                    style={{ color: "#fffdf7" }}
                  >
                    Real flavour. Real atmosphere.
                  </h3>
                  <p
                    className="text-sm leading-7 max-w-md"
                    style={{ color: "#d7cfbf" }}
                  >
                    A warm destination built for food, people, and memorable kasi
                    dining moments.
                  </p>
                </div>

                <div
                  className="absolute top-4 right-4 w-8 h-8 border-t border-r"
                  style={{ borderColor: "rgba(212,160,23,0.45)" }}
                />
                <div
                  className="absolute bottom-4 left-4 w-8 h-8 border-b border-l"
                  style={{ borderColor: "rgba(212,160,23,0.45)" }}
                />
              </div>
            </Reveal>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, index) => (
                <Reveal key={h.label} delay={160 + index * 80}>
                  <div
                    className="rounded-xl p-5 flex flex-col gap-2 group transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "#fff",
                      border: "1px solid rgba(212,160,23,0.2)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 18px 35px rgba(61,124,47,0.18)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 4px 20px rgba(0,0,0,0.06)";
                    }}
                  >
                    <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
                      {h.icon}
                    </span>
                    <span
                      className="text-xs uppercase tracking-widest font-semibold"
                      style={{ color: "#2d9a47" }}
                    >
                      {h.label}
                    </span>
                    <span
                      className="text-sm font-medium leading-6"
                      style={{ color: "#1a0f06" }}
                    >
                      {h.value}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}