import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Choose Your Request",
    description:
      "Select whether you want to reserve a table, plan a private event, request platters, or send a custom enquiry.",
  },
  {
    number: "02",
    title: "Share Your Details",
    description:
      "Enter your contact details, preferred date, group size, and notes so the request is clear from the start.",
  },
  {
    number: "03",
    title: "Receive The Next Step",
    description:
      "The team reviews your request and follows up with confirmation, availability, or the next best action.",
  },
];

export default function BookingFlow() {
  return (
    <section
      id="booking-flow"
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "#faf8f3" }}
    >
      <div
        className="absolute inset-y-0 right-0 w-1/3 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(30,107,48,0.04) 0%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <Reveal>
            <div>
              <p
                className="tracking-[0.35em] uppercase text-xs font-semibold mb-4"
                style={{ color: "#2d9a47" }}
              >
                Booking Flow
              </p>

              <h2
                className="text-5xl md:text-6xl font-bold mb-2 leading-tight"
                style={{ color: "#0c1a0e" }}
              >
                A Smoother Way
              </h2>

              <h2
                className="text-5xl md:text-6xl font-bold italic mb-8 leading-tight"
                style={{ color: "#1b5e20" }}
              >
                To Start
              </h2>

              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-10" style={{ backgroundColor: "#d4a017" }} />
                <span style={{ color: "#d4a017", fontSize: "10px" }}>✦</span>
              </div>

              <p
                className="text-sm leading-8 mb-10"
                style={{ color: "#4a3828", lineHeight: "2" }}
              >
                This section guides visitors from interest to action with less
                hesitation, more clarity, and a cleaner service journey.
              </p>

              <div className="space-y-5">
                {steps.map((step, index) => (
                  <Reveal key={step.number} delay={index * 110}>
                    <div
                      className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                      style={{
                        background: "#ffffff",
                        border: "1px solid rgba(212,160,23,0.2)",
                        boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-transform duration-300"
                          style={{
                            background:
                              "linear-gradient(135deg, #1e6b30, #2d9a47)",
                            color: "#ffffff",
                            boxShadow: "0 6px 18px rgba(45,154,71,0.24)",
                          }}
                        >
                          {step.number}
                        </div>

                        <div>
                          <h3
                            className="text-xl font-bold mb-2"
                            style={{ color: "#0c1a0e" }}
                          >
                            {step.title}
                          </h3>
                          <p
                            className="text-sm leading-7"
                            style={{ color: "#4a3828" }}
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div
              className="rounded-[28px] p-8 md:p-10"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(212,160,23,0.2)",
                boxShadow: "0 18px 50px rgba(0,0,0,0.08)",
              }}
            >
              <p
                className="text-xs uppercase tracking-[0.35em] font-semibold mb-4"
                style={{ color: "#2d9a47" }}
              >
                Start A Request
              </p>

              <h3
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: "#0c1a0e" }}
              >
                Let’s plan it properly
              </h3>

              <p
                className="text-sm leading-8 mb-8"
                style={{ color: "#4a3828" }}
              >
                A cleaner front-end form for bookings, private events, platter
                requests, and custom enquiries.
              </p>

              <form className="space-y-5">
                <div>
                  <label
                    className="block text-xs uppercase tracking-widest font-semibold mb-2"
                    style={{ color: "#2d9a47" }}
                  >
                    Request Type
                  </label>
                  <select
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-300 focus:scale-[1.01]"
                    style={{
                      border: "1px solid rgba(212,160,23,0.25)",
                      color: "#1a0f06",
                      backgroundColor: "#fff",
                    }}
                  >
                    <option>Reserve a Table</option>
                    <option>Private Event</option>
                    <option>Platters / Group Meals</option>
                    <option>Custom Enquiry</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-300 focus:scale-[1.01]"
                    style={{
                      border: "1px solid rgba(212,160,23,0.25)",
                      color: "#1a0f06",
                      backgroundColor: "#fff",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-300 focus:scale-[1.01]"
                    style={{
                      border: "1px solid rgba(212,160,23,0.25)",
                      color: "#1a0f06",
                      backgroundColor: "#fff",
                    }}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="date"
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-300 focus:scale-[1.01]"
                    style={{
                      border: "1px solid rgba(212,160,23,0.25)",
                      color: "#1a0f06",
                      backgroundColor: "#fff",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Group Size"
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-300 focus:scale-[1.01]"
                    style={{
                      border: "1px solid rgba(212,160,23,0.25)",
                      color: "#1a0f06",
                      backgroundColor: "#fff",
                    }}
                  />
                </div>

                <textarea
                  rows="5"
                  placeholder="Tell us more..."
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none resize-none transition-all duration-300 focus:scale-[1.01]"
                  style={{
                    border: "1px solid rgba(212,160,23,0.25)",
                    color: "#1a0f06",
                    backgroundColor: "#fff",
                  }}
                />

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:scale-[1.03] active:scale-95"
                  style={{
                    background: "linear-gradient(135deg, #1e6b30, #2d9a47)",
                    color: "#ffffff",
                    boxShadow: "0 10px 26px rgba(45,154,71,0.22)",
                  }}
                >
                  Submit Request
                  <span>→</span>
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
