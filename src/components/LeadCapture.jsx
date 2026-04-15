import Reveal from "./Reveal";

export default function LeadCapture() {
  return (
    <section
      id="lead-capture"
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div
            className="grid lg:grid-cols-2 gap-0 rounded-[32px] overflow-hidden"
            style={{
              background: "#f9f6f1",
              border: "1px solid #c9a882",
              boxShadow: "0 18px 50px rgba(0,0,0,0.08)",
            }}
          >
            <div className="p-8 md:p-12">
              <p
                className="tracking-[0.35em] uppercase text-xs font-semibold mb-4"
                style={{ color: "#4a7c3f" }}
              >
                Priority Access
              </p>

              <h2
                className="text-5xl md:text-6xl font-bold mb-2 leading-tight"
                style={{ color: "#2c1a0e" }}
              >
                Stay Closer
              </h2>

              <h2
                className="text-5xl md:text-6xl font-bold italic mb-8 leading-tight"
                style={{ color: "#4a7c3f" }}
              >
                To Mkhulu’s
              </h2>

              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-10" style={{ backgroundColor: "#c9a882" }} />
                <span style={{ color: "#c9a882", fontSize: "10px" }}>✦</span>
              </div>

              <p className="text-sm leading-8 mb-8" style={{ color: "#7a5230" }}>
                A cleaner capture point for offers, updates, events, and future
                booking opportunities.
              </p>

              <div className="space-y-4">
                {[
                  "Special offers and featured meals",
                  "Private event announcements",
                  "Group meal and platter updates",
                  "Stronger repeat-customer engagement",
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
            </div>

            <div
              className="p-8 md:p-12"
              style={{
                background:
                  "linear-gradient(180deg, rgba(74,124,63,0.06) 0%, rgba(201,168,130,0.08) 100%)",
              }}
            >
              <p
                className="text-xs uppercase tracking-[0.35em] font-semibold mb-4"
                style={{ color: "#4a7c3f" }}
              >
                Join The List
              </p>

              <h3
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: "#2c1a0e" }}
              >
                Get updates that matter
              </h3>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-300 focus:scale-[1.01]"
                  style={{
                    border: "1px solid rgba(201,168,130,0.7)",
                    color: "#2c1a0e",
                    backgroundColor: "#fff",
                  }}
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-300 focus:scale-[1.01]"
                  style={{
                    border: "1px solid rgba(201,168,130,0.7)",
                    color: "#2c1a0e",
                    backgroundColor: "#fff",
                  }}
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-300 focus:scale-[1.01]"
                  style={{
                    border: "1px solid rgba(201,168,130,0.7)",
                    color: "#2c1a0e",
                    backgroundColor: "#fff",
                  }}
                />

                <select
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-300 focus:scale-[1.01]"
                  style={{
                    border: "1px solid rgba(201,168,130,0.7)",
                    color: "#2c1a0e",
                    backgroundColor: "#fff",
                  }}
                >
                  <option>Special Offers</option>
                  <option>Private Events</option>
                  <option>Platters / Group Meals</option>
                  <option>Booking Updates</option>
                  <option>General Updates</option>
                </select>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:scale-[1.03] active:scale-95"
                  style={{
                    background: "#3d7c2f",
                    color: "#ffffff",
                    boxShadow: "0 10px 26px rgba(61,124,47,0.22)",
                  }}
                >
                  Join Now
                  <span>→</span>
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
