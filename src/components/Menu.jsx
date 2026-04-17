import Reveal from "./Reveal";

const menuSections = [
  {
    title: "Hot Drinks",
    items: [
      { name: "Tea", price: "R15" },
      { name: "Coffee", price: "R15" },
      { name: "Mocha", price: "R20" },
      { name: "Cappuccino", price: "R20" },
      { name: "Hot Chocolate", price: "R20" },
    ],
  },
  {
    title: "Breakfast",
    items: [
      { name: "2 Toasted Bacon, Cheese Griller & Eggs", price: "R50" },
      { name: "Bacon and Egg", price: "R30" },
      { name: "Bacon, Egg and Cheese", price: "R35" },
    ],
  },
  {
    title: "Kotas",
    items: [
      { name: "Mini Cooper", price: "R40" },
      { name: "Range Rover", price: "R45" },
      { name: "Porsche", price: "R50" },
      { name: "Audi RS7", price: "R60" },
      { name: "Lamborghini", price: "R70" },
      { name: "Bugatti", price: "R75" },
      { name: "Rolls Royce", price: "R90" },
    ],
  },
  {
    title: "Burgers",
    items: [
      { name: "Rib Burger", price: "R70" },
      { name: "Single Beef / Chicken Burger", price: "R60" },
      { name: "Double Beef / Chicken Burger", price: "R70" },
    ],
  },
  {
    title: "Pizza",
    items: [
      { name: "Chicken Pizza", price: "R70 / R120" },
      { name: "Salami Pizza", price: "R70 / R120" },
      { name: "Hawaiian Pizza", price: "R70 / R120" },
      { name: "Beef Pizza", price: "R80 / R140" },
      { name: "Vegetarian Pizza", price: "R60 / R100" },
      { name: "Extra Cheese", price: "R15" },
    ],
  },
  {
    title: "Platters",
    items: [
      { name: "Platter for 1", price: "R180" },
      { name: "Platter for 2", price: "R250" },
      { name: "Platter for 4", price: "R450" },
      { name: "Mkhulu's Loaded Box", price: "R250" },
    ],
  },
  {
    title: "Grills",
    items: [
      { name: "Lamb Chop with Chips / Salad / Starch", price: "R120" },
      { name: "Steak with Chips / Salad / Starch", price: "R120" },
      { name: "4 Buffalo Wings", price: "R110" },
      { name: "400g Ribs", price: "R120" },
      { name: "1kg Ribs", price: "R200" },
      { name: "Full Chicken", price: "R110" },
      { name: "Half Chicken with Chips / Starch", price: "R70" },
      { name: "Quarter Chicken with Chips", price: "R60" },
    ],
  },

  // ✅ NEW SECTION
  {
    title: "Healthy Meals",
    items: [
      { name: "Chicken Shawarma", price: "R70" },
      { name: "Chicken Wrap", price: "R60" },
      { name: "Beef Wrap", price: "R70" },
      { name: "Beef Shawarma", price: "R80" },
    ],
  },

  {
    title: "Traditional Meals",
    items: [
      { name: "Mogodu with Samp or Pap", price: "R70" },
      { name: "Beef Stew with Samp or Pap", price: "R80" },
      { name: "Hard Body with Samp or Pap", price: "R70" },
      { name: "Ox Liver / Chicken Liver with Pap or Samp", price: "R60" },
    ],
  },

  // ✅ NEW SECTION
  {
    title: "Kiddies Menu",
    items: [
      { name: "Chicken Strips with Chips + Juice", price: "R60" },
      { name: "Chicken Pops with Chips + Juice", price: "R60" },
      { name: "Kiddies Burger Meal", price: "R70" },
      { name: "Waffle", price: "R50" },
      { name: "Loaded Fries", price: "R40" },
    ],
  },

  // ✅ NEW SECTION
  {
    title: "Ice Cream & Desserts",
    items: [
      { name: "Small Tub", price: "R30" },
      { name: "Plain Tub", price: "R75" },
      { name: "Classic Waffle", price: "R40" },
      { name: "Oreo / Chocolate Waffle", price: "R75" },
    ],
  },

  {
    title: "Cold Drinks",
    items: [
      { name: "Coke", price: "R16" },
      { name: "Fanta Orange", price: "R16" },
      { name: "Stoney", price: "R16" },
      { name: "Liqui Fruit", price: "R20" },
      { name: "2 Litre Coke", price: "R35" },
      { name: "2 Litre Stoney", price: "R35" },
      { name: "2 Litre Sprite", price: "R35" },
    ],
  },

  // ✅ CLEANED (NO COCKTAILS HERE)
  {
    title: "Alcohol",
    items: [
      { name: "Heineken", price: "R35" },
      { name: "Corona", price: "R35" },
      { name: "Brutal Fruit", price: "R35" },
      { name: "Savanna", price: "R35" },
      { name: "Flying Fish", price: "R35" },
      { name: "Hunter's Dry", price: "R35" },
    ],
  },

  // ✅ NEW SECTION
  {
    title: "Cocktails",
    items: [
      { name: "Mojito", price: "R80" },
      { name: "Long Island", price: "R80" },
      { name: "Strawberry Daiquiri", price: "R80" },
    ],
  },
];

export default function Menu() {
  return (
    <section
      id="menu"
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div
        className="absolute top-0 left-0 w-1/3 h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(30,107,48,0.04) 0%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
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
              Menu
            </p>

            <h2
              className="text-5xl md:text-6xl font-bold mb-2 leading-tight"
              style={{ color: "#0c1a0e" }}
            >
              Explore Our
            </h2>

            <h2
              className="text-5xl md:text-6xl font-bold italic mb-8 leading-tight"
              style={{ color: "#1b5e20" }}
            >
              Signature Flavours
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
              From bold kota flavour to traditional meals, grills, platters and
              drinks — every dish is crafted to deliver real taste, consistency,
              and satisfaction.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10">
          {menuSections.map((cat, index) => (
            <Reveal key={cat.title} delay={index * 90}>
              <div
                className="rounded-[22px] p-6 transition-all duration-500 hover:-translate-y-2"
                style={{
                  backgroundColor: "#f9f6f1",
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
                <h3
                  className="text-xl font-bold mb-1 font-['Playfair_Display']"
                  style={{ color: "#2d9a47" }}
                >
                  {cat.title}
                </h3>

                <div
                  className="w-8 h-px mb-5"
                  style={{ backgroundColor: "#d4a017" }}
                />

                <ul className="flex flex-col gap-5">
                  {cat.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex justify-between gap-4 items-start"
                    >
                      <p
                        className="font-medium text-sm transition-colors duration-300"
                        style={{ color: "#0c1a0e" }}
                      >
                        {item.name}
                      </p>

                      <span
                        className="text-sm font-semibold whitespace-nowrap transition-transform duration-300"
                        style={{ color: "#2d9a47" }}
                      >
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-sm mb-5" style={{ color: "#9e7d60" }}>
            Full menu available in-store and upon reservation. Seasonal items may vary.
          </p>

          <a
            href="/mkhulus-on-menu.pdf"
            download
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #1e6b30, #2d9a47)",
              color: "#ffffff",
              boxShadow: "0 10px 28px rgba(45,154,71,0.22)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px) scale(1.03)";
              e.currentTarget.style.boxShadow =
                "0 18px 38px rgba(45,154,71,0.34)";
              e.currentTarget.style.filter = "brightness(1.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow =
                "0 10px 28px rgba(45,154,71,0.22)";
              e.currentTarget.style.filter = "brightness(1)";
            }}
          >
            Download Our Menu
          </a>
        </div>
      </div>
    </section>
  );
}
