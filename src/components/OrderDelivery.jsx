const platforms = [
  {
    name: "Uber Eats",
    icon: "🛵",
    description: "Order via Uber Eats for fast delivery to your door.",
    cta: "Order on Uber Eats",
    href: "#",
  },
  {
    name: "Mr D / Takealot",
    icon: "📦",
    description: "Find us on Mr D Food for delivery across the area.",
    cta: "Order on Mr D",
    href: "#",
  },
  {
    name: "Direct Order",
    icon: "📱",
    description: "Call or WhatsApp us directly to place a takeaway or delivery order.",
    cta: "WhatsApp Us",
    href: "#",
  },
];

const paymentMethods = [
  { label: "Cash", icon: "💵" },
  { label: "Card (Visa / Mastercard)", icon: "💳" },
  { label: "SnapScan", icon: "📲" },
  { label: "Zapper", icon: "⚡" },
  { label: "EFT / Bank Transfer", icon: "🏦" },
  { label: "PayFast", icon: "🔒" },
];

export default function OrderDelivery() {
  return (
    <section id="order" className="py-24" style={{ backgroundColor: "#f9f6f1" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="tracking-[0.3em] uppercase text-xs font-light mb-3" style={{ color: "#4a7c3f" }}>
            Convenience First
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#2c1a0e" }}>
            Order Online & Delivery
          </h2>
          <div className="w-12 h-0.5 mx-auto mb-6" style={{ backgroundColor: "#4a7c3f" }} />
          <p className="max-w-xl mx-auto text-sm leading-relaxed" style={{ color: "#7a5230" }}>
            Can't make it in? No problem. Get Mkhulu's delivered straight to your door or collect at your convenience.
          </p>
        </div>

        {/* Delivery platforms */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="rounded-xl p-6 flex flex-col items-start gap-3 group transition-all duration-200"
              style={{ backgroundColor: "#fff", border: "1px solid #c9a882" }}
            >
              <span className="text-4xl">{p.icon}</span>
              <h3 className="font-bold text-lg" style={{ color: "#2c1a0e" }}>{p.name}</h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "#9e7d60" }}>{p.description}</p>
              <a
                href={p.href}
                className="mt-2 inline-block text-white text-sm font-semibold px-5 py-2 rounded tracking-wide transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#4a7c3f" }}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px" style={{ backgroundColor: "#c9a882" }} />
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#7a5230" }}>
            Payment Methods
          </span>
          <div className="flex-1 h-px" style={{ backgroundColor: "#c9a882" }} />
        </div>

        {/* Payment methods */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-12">
          {paymentMethods.map((m) => (
            <div
              key={m.label}
              className="rounded-xl p-4 flex flex-col items-center gap-2 text-center"
              style={{ backgroundColor: "#fff", border: "1px solid #c9a882" }}
            >
              <span className="text-2xl">{m.icon}</span>
              <span className="text-xs font-medium leading-tight" style={{ color: "#4a2c0a" }}>{m.label}</span>
            </div>
          ))}
        </div>

        {/* Online payment banner */}
        <div
          className="rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: "linear-gradient(120deg, #2c1a0e 0%, #3d6b33 100%)" }}
        >
          <div>
            <h3 className="text-white text-xl font-bold mb-2">Pay Online. Skip the Queue.</h3>
            <p className="text-sm leading-relaxed max-w-lg" style={{ color: "#c9d9c7" }}>
               Pre-pay for your order or reservation online through our secure payment portal. Powered by PayFast / Yoco / Stripe — to be linked here.
            </p>
          </div>
          <a
            href="#"
            className="whitespace-nowrap text-sm font-semibold px-7 py-3 rounded tracking-wide transition-opacity hover:opacity-90 flex-shrink-0"
            style={{ backgroundColor: "#fff", color: "#2c1a0e" }}
          >
            Pay Online — Coming Soon
          </a>
        </div>
      </div>
    </section>
  );
}
