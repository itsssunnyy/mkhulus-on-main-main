import Reveal from "./Reveal";

const events = [
  {
    title: "Weekend Social Dining",
    tag: "Featured",
    description:
      "A lively weekend atmosphere built for shared meals, relaxed catchups, and memorable moments around great food.",
    status: "Available",
  },
  {
    title: "Birthday Gatherings",
    tag: "Celebrations",
    description:
      "A better way to host casual birthday moments with good food, comfort, and a space that feels familiar and energetic.",
    status: "Enquire",
  },
  {
    title: "Private Event Requests",
    tag: "Bookings",
    description:
      "Create a direct path for private functions, hosted gatherings, and more organised dining experiences.",
    status: "Open",
  },
  {
    title: "Group Platters & Shared Meals",
    tag: "Group Dining",
    description:
      "A practical and premium option for bigger tables, shared experiences, and food moments designed for more than one person.",
    status: "Available",
  },
];

export default function Events() {
  return (
    <section
      id="events"
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "#faf8f3" }}
    >
      {/* subtle background */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(30,107,48,0.04) 0%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* 🔥 PREMIUM HEADING */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20 relative">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 40% at 50% 20%, rgba(30,107,48,0.08) 0%, transparent 70%)",
              }}
            />

            <p
              className="tracking-[0.35em] uppercase text-xs font-semibold mb-4"
              style={{ color: "#2d9a47" }}
            >
              Events
            </p>

            <h2
              className="text-5xl md:text-6xl font-bold mb-2 leading-tight"
              style={{ color: "#0c1a0e" }}
            >
              Moments That
            </h2>

            <h2
              className="text-5xl md:text-6xl font-bold italic mb-8 leading-tight"
              style={{ color: "#1b5e20" }}
            >
              Bring People Together
            </h2>

            <div className="flex items-center justify-center gap-3 mb-8">
              <div
                className="h-px w-10"
                style={{ backgroundColor: "#d4a017" }}
              />
              <span style={{ color: "#d4a017", fontSize: "10px" }}>✦</span>
            </div>

            <p
              className="max-w-2xl mx-auto text-sm leading-8"
              style={{ color: "#4a3828" }}
            >
              From social dining to private occasions, these experiences position
              Mkhulu’s as more than just a place to eat.
            </p>
          </div>
        </Reveal>

        {/* 🔥 CARDS */}
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <Reveal key={event.title} delay={index * 100}>
              <div
                className="group rounded-[24px] p-7 transition-all duration-500 hover:-translate-y-2"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(212,160,23,0.18)",
                  boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 18px 35px rgba(61,124,47,0.18)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 8px 22px rgba(0,0,0,0.05)";
                }}
              >
                {/* top row */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <span
                    className="inline-flex px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.25em] font-semibold"
                    style={{
                      background: "rgba(45,154,71,0.08)",
                      color: "#2d9a47",
                      border: "1px solid rgba(45,154,71,0.15)",
                    }}
                  >
                    {event.tag}
                  </span>

                  <span
                    className="text-[10px] uppercase tracking-[0.22em] font-semibold"
                    style={{ color: "#9e7d60" }}
                  >
                    {event.status}
                  </span>
                </div>

                <h3
                  className="text-2xl font-bold mb-3 font-['Playfair_Display']"
                  style={{ color: "#0c1a0e" }}
                >
                  {event.title}
                </h3>

                <div
                  className="w-8 h-px mb-4"
                  style={{ backgroundColor: "#d4a017" }}
                />

                <p
                  className="text-sm leading-8 mb-6"
                  style={{ color: "#4a3828" }}
                >
                  {event.description}
                </p>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 active:scale-95"
                  style={{
                    background: "linear-gradient(135deg, #1e6b30, #2d9a47)",
                    color: "#ffffff",
                    boxShadow: "0 10px 24px rgba(45,154,71,0.22)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-2px) scale(1.03)";
                    e.currentTarget.style.boxShadow =
                      "0 18px 38px rgba(45,154,71,0.34)";
                    e.currentTarget.style.filter = "brightness(1.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 24px rgba(45,154,71,0.22)";
                    e.currentTarget.style.filter = "brightness(1)";
                  }}
                >
                  Enquire Now
                  <span>→</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
