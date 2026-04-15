import Reveal from "./Reveal";

const services = [
  {
    title: "Dine In Experience",
    tag: "Core Service",
    description:
      "Enjoy the atmosphere, the energy, and the full Mkhulu’s On Main experience in a relaxed dine-in setting.",
    cta: "Reserve a Table",
    href: "#contact",
  },
  {
    title: "Order Ahead",
    tag: "Fast Access",
    description:
      "A faster route for customers who want food prepared with less waiting and more convenience.",
    cta: "Order Enquiry",
    href: "#order",
  },
  {
    title: "Private Events",
    tag: "Bookings",
    description:
      "A clear path for birthdays, celebrations, casual gatherings, and hosted occasions.",
    cta: "Plan an Event",
    href: "#contact",
  },
  {
    title: "Platters & Group Meals",
    tag: "Group Dining",
    description:
      "Position larger meal requests as a premium shared experience for tables, functions, and groups.",
    cta: "Request Platters",
    href: "#contact",
  },
  {
    title: "Custom Requests",
    tag: "Flexible Service",
    description:
      "Open the door for tailored requests, unique arrangements, and more specific customer needs.",
    cta: "Send Request",
    href: "#contact",
  },
  {
    title: "Community & Business Enquiries",
    tag: "Partnerships",
    description:
      "Create a path for collaborations, local activations, and organised group experiences.",
    cta: "Contact Us",
    href: "#contact",
  },
];

export default function ServicesHub() {
  return (
    <section
      id="services"
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* subtle background */}
      <div
        className="absolute top-0 left-0 w-1/3 h-full pointer-events-none"
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
              Services Hub
            </p>

            <h2
              className="text-5xl md:text-6xl font-bold mb-2 leading-tight"
              style={{ color: "#0c1a0e" }}
            >
              Explore How
            </h2>

            <h2
              className="text-5xl md:text-6xl font-bold italic mb-8 leading-tight"
              style={{ color: "#1b5e20" }}
            >
              We Serve You
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
              A clearer path for customers to move toward the right experience —
              whether they want to dine in, book, order, or plan something bigger.
            </p>
          </div>
        </Reveal>

        {/* 🔥 CARDS */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 90}>
              <div
                className="group rounded-[22px] p-6 h-full transition-all duration-500 hover:-translate-y-2"
                style={{
                  background: "#f9f6f1",
                  border: "1px solid rgba(212,160,23,0.2)",
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
                <span
                  className="inline-flex px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.25em] font-semibold mb-4 transition-all duration-300 group-hover:scale-105"
                  style={{
                    background: "rgba(45,154,71,0.08)",
                    color: "#2d9a47",
                    border: "1px solid rgba(45,154,71,0.15)",
                  }}
                >
                  {service.tag}
                </span>

                <h3
                  className="text-2xl font-bold mb-4 font-['Playfair_Display']"
                  style={{ color: "#0c1a0e" }}
                >
                  {service.title}
                </h3>

                <div
                  className="w-8 h-px mb-4"
                  style={{ backgroundColor: "#d4a017" }}
                />

                <p
                  className="text-sm leading-8 mb-8"
                  style={{ color: "#4a3828" }}
                >
                  {service.description}
                </p>

                <a
                  href={service.href}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 active:scale-95"
                  style={{
                    background: "linear-gradient(135deg, #1e6b30, #2d9a47)",
                    color: "#ffffff",
                    boxShadow: "0 10px 26px rgba(45,154,71,0.22)",
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
                      "0 10px 26px rgba(45,154,71,0.22)";
                    e.currentTarget.style.filter = "brightness(1)";
                  }}
                >
                  {service.cta}
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
