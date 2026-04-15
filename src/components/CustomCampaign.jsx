import Reveal from "./Reveal";

export default function CustomCampaign() {
  return (
    <section
      id="campaign"
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div
            className="rounded-[32px] overflow-hidden"
            style={{
              background: "#f9f6f1",
              border: "1px solid #c9a882",
              boxShadow: "0 18px 50px rgba(0,0,0,0.08)",
            }}
          >
            <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-12 lg:p-14">
                <p
                  className="tracking-[0.35em] uppercase text-xs font-semibold mb-4"
                  style={{ color: "#4a7c3f" }}
                >
                  Featured Campaign
                </p>

                <h2
                  className="text-5xl md:text-6xl font-bold mb-2 leading-tight"
                  style={{ color: "#2c1a0e" }}
                >
                  Make Your Next
                </h2>

                <h2
                  className="text-5xl md:text-6xl font-bold italic mb-8 leading-tight"
                  style={{ color: "#4a7c3f" }}
                >
                  Weekend Count
                </h2>

                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-10" style={{ backgroundColor: "#c9a882" }} />
                  <span style={{ color: "#c9a882", fontSize: "10px" }}>✦</span>
                </div>

                <p className="text-sm leading-8 mb-8" style={{ color: "#7a5230" }}>
                  A focused campaign block built for ads, specials, events, group
                  dining, and any offer that needs one clear message and one clear
                  action.
                </p>

                <div className="space-y-4 mb-10">
                  {[
                    "Perfect for weekend specials and event pushes",
                    "Cleaner focus than sending people to the whole homepage",
                    "Built for faster conversion and clearer messaging",
                    "Easy to duplicate into multiple campaign pages later",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                        style={{
                          background: "linear-gradient(135deg, #1e6b30, #2d9a47)",
                          color: "#ffffff",
                        }}
                      >
                        ✓
                      </div>
                      <p className="text-sm leading-7" style={{ color: "#7a5230" }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#booking-flow"
                    className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:scale-[1.03]"
                    style={{
                      background: "#3d7c2f",
                      color: "#ffffff",
                      boxShadow: "0 10px 26px rgba(61,124,47,0.22)",
                    }}
                  >
                    Book This Experience
                    <span>→</span>
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:scale-[1.03]"
                    style={{
                      background: "#ffffff",
                      color: "#4a7c3f",
                      border: "1px solid rgba(74,124,63,0.18)",
                    }}
                  >
                    Ask A Question
                  </a>
                </div>
              </div>

              <div
                className="relative min-h-[420px] p-8 md:p-12 flex items-center justify-center overflow-hidden"
                style={{
                  background:
                    "linear-gradient(160deg, #060d07 0%, #0c1a0e 35%, #1a0f06 70%, #0a0604 100%)",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse 70% 60% at 35% 65%, rgba(30,107,48,0.18) 0%, transparent 70%)",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse 50% 40% at 75% 40%, rgba(212,160,23,0.12) 0%, transparent 65%)",
                  }}
                />

                <div className="relative z-10 max-w-md text-center">
                  <p
                    className="text-xs uppercase tracking-[0.35em] font-semibold mb-4"
                    style={{ color: "#d4af37" }}
                  >
                    Campaign Focus
                  </p>

                  <h3
                    className="text-3xl md:text-4xl font-bold mb-6"
                    style={{ color: "#fffdf7" }}
                  >
                    One message. One offer. One action.
                  </h3>

                  <p
                    className="text-sm leading-8 mb-8"
                    style={{ color: "#d7cfbf" }}
                  >
                    This visual block makes campaign messaging feel more premium,
                    direct, and conversion-ready.
                  </p>

                  <div
                    className="rounded-2xl p-6 text-left"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(212,160,23,0.18)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <p
                      className="text-xs uppercase tracking-[0.25em] font-semibold mb-2"
                      style={{ color: "#d4af37" }}
                    >
                      Why it works
                    </p>
                    <p className="text-sm leading-7" style={{ color: "#d7cfbf" }}>
                      Campaign pages reduce distractions and make it easier for
                      visitors to act on one clear offer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
