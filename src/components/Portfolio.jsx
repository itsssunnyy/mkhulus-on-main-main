import Reveal from "./Reveal";

const portfolioItems = [
  {
    title: "Signature Kota Experience",
    category: "Food Highlight",
    description:
      "A bold showcase of flavour, generosity, and kasi food culture that makes Mkhulu’s a destination for people who want more than just a quick meal.",
    outcome:
      "Builds appetite, curiosity, and stronger first impressions for new visitors.",
    image: "/gallery/traditional-food.jpg",
  },
  {
    title: "Family Dining Atmosphere",
    category: "Experience",
    description:
      "A warm and welcoming setting for friends, families, and casual gatherings where the environment feels lively, local, and memorable.",
    outcome:
      "Strengthens trust with guests looking for comfort, warmth, and repeat visits.",
    image: "/gallery/guests.jpg",
  },
  {
    title: "Private Events & Moments",
    category: "Events",
    description:
      "A section that positions Mkhulu’s as a place for birthdays, celebrations, hosted gatherings, and meaningful occasions.",
    outcome:
      "Creates a stronger pathway for event bookings and premium enquiries.",
    image: "/gallery/events.jpg",
  },
  {
    title: "Platters & Shared Meals",
    category: "Group Orders",
    description:
      "A refined presentation of larger meals, platters, and shared dining experiences designed for groups and elevated occasions.",
    outcome:
      "Supports bigger-order thinking and future catering-style growth.",
    image: "/gallery/platters.jpg",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "#faf8f3" }}
    >
      <div
        className="absolute inset-y-0 left-0 w-1/3 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(30,107,48,0.05) 0%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p
              className="tracking-[0.35em] uppercase text-xs font-semibold mb-4"
              style={{ color: "#2d9a47" }}
            >
              Portfolio
            </p>

            <h2
              className="text-5xl md:text-6xl font-bold mb-2 leading-tight"
              style={{ color: "#0c1a0e" }}
            >
              Signature
            </h2>

            <h2
              className="text-5xl md:text-6xl font-bold italic mb-8 leading-tight"
              style={{ color: "#1b5e20" }}
            >
              Experiences
            </h2>

            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-10" style={{ backgroundColor: "#d4a017" }} />
              <span style={{ color: "#d4a017", fontSize: "10px" }}>✦</span>
            </div>

            <p
              className="text-sm leading-8"
              style={{ color: "#4a3828", lineHeight: "2" }}
            >
              A refined look at the food, atmosphere, and moments that make
              Mkhulu’s On Main feel memorable, trusted, and ready for bigger
              experiences.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 120}>
              <div
                className="group rounded-[24px] overflow-hidden transition-all duration-500 hover:-translate-y-2"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(212,160,23,0.2)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                }}
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.03) 0%, rgba(12,26,14,0.55) 100%)",
                    }}
                  />
                  <div
                    className="absolute top-5 left-5 px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.28em] font-semibold transition-all duration-300 group-hover:scale-105"
                    style={{
                      background: "rgba(255,255,255,0.86)",
                      color: "#1b5e20",
                      border: "1px solid rgba(212,160,23,0.2)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    {item.category}
                  </div>
                </div>

                <div className="p-7">
                  <h3
                    className="text-2xl font-bold mb-3 font-['Playfair_Display'] transition-colors duration-300"
                    style={{ color: "#0c1a0e" }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="text-sm leading-8 mb-5"
                    style={{ color: "#4a3828" }}
                  >
                    {item.description}
                  </p>

                  <div
                    className="pt-4"
                    style={{ borderTop: "1px solid rgba(212,160,23,0.18)" }}
                  >
                    <p
                      className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-2"
                      style={{ color: "#2d9a47" }}
                    >
                      Why it matters
                    </p>
                    <p className="text-sm leading-7" style={{ color: "#7a5230" }}>
                      {item.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
