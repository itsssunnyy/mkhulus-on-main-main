import { Link } from "react-router-dom";
import { useState } from "react";
import Reveal from "./Reveal";

const menuSections = [
  {
    title: "Hot Drinks",
    items: [
      {
        id: "hot-tea",
        name: "Tea",
        price: 15,
        description: "Freshly prepared hot tea.",
      },
      {
        id: "hot-coffee",
        name: "Coffee",
        price: 15,
        description: "Classic hot coffee with rich flavour.",
      },
      {
        id: "hot-mocha",
        name: "Mocha",
        price: 20,
        description: "Smooth mocha with a rich chocolate touch.",
      },
      {
        id: "hot-cappuccino",
        name: "Cappuccino",
        price: 20,
        description: "Creamy cappuccino served hot.",
      },
      {
        id: "hot-chocolate",
        name: "Hot Chocolate",
        price: 20,
        description: "Warm chocolate drink, rich and comforting.",
      },
    ],
  },
  {
    title: "Breakfast",
    items: [
      {
        id: "breakfast-toasted-bacon-cheese-eggs",
        name: "2 Toasted Bacon, Cheese Griller & Eggs",
        price: 50,
        description: "A hearty breakfast to start the day strong.",
      },
      {
        id: "breakfast-bacon-egg",
        name: "Bacon and Egg",
        price: 30,
        description: "Simple breakfast favourite with bold flavour.",
      },
      {
        id: "breakfast-bacon-egg-cheese",
        name: "Bacon, Egg and Cheese",
        price: 35,
        description: "Classic breakfast combo with melted cheese.",
      },
    ],
  },
  {
    title: "Kotas",
    items: [
      {
        id: "kota-mini-cooper",
        name: "Mini Cooper",
        price: 40,
        description: "Compact kasi favourite packed with flavour.",
      },
      {
        id: "kota-range-rover",
        name: "Range Rover",
        price: 45,
        description: "A fuller kota option with satisfying taste.",
      },
      {
        id: "kota-porsche",
        name: "Porsche",
        price: 50,
        description: "Well-balanced flavour with extra satisfaction.",
      },
      {
        id: "kota-audi-rs7",
        name: "Audi RS7",
        price: 60,
        description: "Bold, loaded, and made to stand out.",
      },
      {
        id: "kota-lamborghini",
        name: "Lamborghini",
        price: 70,
        description: "Premium kota choice for serious appetite.",
      },
      {
        id: "kota-bugatti",
        name: "Bugatti",
        price: 75,
        description: "A powerful, loaded option for big flavour lovers.",
      },
      {
        id: "kota-rolls-royce",
        name: "Rolls Royce",
        price: 90,
        description: "Top-tier loaded kota experience.",
      },
    ],
  },
  {
    title: "Burgers",
    items: [
      {
        id: "burger-rib",
        name: "Rib Burger",
        price: 70,
        description: "Juicy rib burger with bold taste.",
      },
      {
        id: "burger-single",
        name: "Single Beef / Chicken Burger",
        price: 60,
        description: "Single patty burger done the Mkhulu's way.",
      },
      {
        id: "burger-double",
        name: "Double Beef / Chicken Burger",
        price: 70,
        description: "Double-layer flavour for bigger appetite.",
      },
    ],
  },
  {
    title: "Pizza",
    items: [
      {
        id: "pizza-chicken",
        name: "Chicken Pizza",
        description: "Chicken pizza with your preferred size.",
        sizes: [
          { label: "Small", price: 70 },
          { label: "Large", price: 120 },
        ],
      },
      {
        id: "pizza-salami",
        name: "Salami Pizza",
        description: "Salami pizza with your preferred size.",
        sizes: [
          { label: "Small", price: 70 },
          { label: "Large", price: 120 },
        ],
      },
      {
        id: "pizza-hawaiian",
        name: "Hawaiian Pizza",
        description: "Classic Hawaiian pizza with your preferred size.",
        sizes: [
          { label: "Small", price: 70 },
          { label: "Large", price: 120 },
        ],
      },
      {
        id: "pizza-beef",
        name: "Beef Pizza",
        description: "Beef pizza with your preferred size.",
        sizes: [
          { label: "Small", price: 80 },
          { label: "Large", price: 140 },
        ],
      },
      {
        id: "pizza-vegetarian",
        name: "Vegetarian Pizza",
        description: "Vegetarian pizza with your preferred size.",
        sizes: [
          { label: "Small", price: 60 },
          { label: "Large", price: 100 },
        ],
      },
      {
        id: "pizza-extra-cheese",
        name: "Extra Cheese",
        price: 15,
        description: "Add extra cheese to your pizza.",
      },
    ],
  },
  {
    title: "Platters",
    items: [
      {
        id: "platter-1",
        name: "Platter for 1",
        price: 180,
        description: "A platter built for one satisfying meal.",
      },
      {
        id: "platter-2",
        name: "Platter for 2",
        price: 250,
        description: "Perfect platter option for two people.",
      },
      {
        id: "platter-4",
        name: "Platter for 4",
        price: 450,
        description: "Large platter ideal for sharing.",
      },
      {
        id: "loaded-box",
        name: "Mkhulu's Loaded Box",
        price: 250,
        description: "Signature loaded box with serious flavour.",
      },
    ],
  },
  {
    title: "Grills",
    items: [
      {
        id: "grill-lamb-chop",
        name: "Lamb Chop with Chips / Salad / Starch",
        price: 120,
        description: "Tender lamb chop meal with your preferred side.",
      },
      {
        id: "grill-steak",
        name: "Steak with Chips / Salad / Starch",
        price: 120,
        description: "Steak meal served with filling sides.",
      },
      {
        id: "grill-buffalo-wings",
        name: "4 Buffalo Wings",
        price: 110,
        description: "Buffalo wings with bold spice and flavour.",
      },
      {
        id: "grill-400g-ribs",
        name: "400g Ribs",
        price: 120,
        description: "Smoky rib portion for a rich grill experience.",
      },
      {
        id: "grill-1kg-ribs",
        name: "1kg Ribs",
        price: 200,
        description: "Heavy rib portion for real grill lovers.",
      },
      {
        id: "grill-full-chicken",
        name: "Full Chicken",
        price: 110,
        description: "Full chicken meal packed with flavour.",
      },
      {
        id: "grill-half-chicken",
        name: "Half Chicken with Chips / Starch",
        price: 70,
        description: "Half chicken served with filling sides.",
      },
      {
        id: "grill-quarter-chicken",
        name: "Quarter Chicken with Chips",
        price: 60,
        description: "Quarter chicken meal for lighter appetite.",
      },
    ],
  },
  {
    title: "Healthy Meals",
    items: [
      {
        id: "healthy-chicken-shawarma",
        name: "Chicken Shawarma",
        price: 70,
        description: "Fresh shawarma option with balanced flavour.",
      },
      {
        id: "healthy-chicken-wrap",
        name: "Chicken Wrap",
        price: 60,
        description: "Light and satisfying chicken wrap.",
      },
      {
        id: "healthy-beef-wrap",
        name: "Beef Wrap",
        price: 70,
        description: "Beef wrap with rich taste and texture.",
      },
      {
        id: "healthy-beef-shawarma",
        name: "Beef Shawarma",
        price: 80,
        description: "Fresh beef shawarma option with full flavour.",
      },
    ],
  },
  {
    title: "Traditional Meals",
    items: [
      {
        id: "traditional-mogodu",
        name: "Mogodu with Samp or Pap",
        price: 70,
        description: "Traditional favourite served with hearty sides.",
      },
      {
        id: "traditional-beef-stew",
        name: "Beef Stew with Samp or Pap",
        price: 80,
        description: "Rich beef stew meal made for comfort.",
      },
      {
        id: "traditional-hard-body",
        name: "Hard Body with Samp or Pap",
        price: 70,
        description: "Authentic traditional meal with proper flavour.",
      },
      {
        id: "traditional-liver",
        name: "Ox Liver / Chicken Liver with Pap or Samp",
        price: 60,
        description: "A rich traditional option for real flavour lovers.",
      },
    ],
  },
  {
    title: "Kiddies Menu",
    items: [
      {
        id: "kids-chicken-strips",
        name: "Chicken Strips with Chips + Juice",
        price: 60,
        description: "Kid-friendly meal with flavour and fun.",
      },
      {
        id: "kids-chicken-pops",
        name: "Chicken Pops with Chips + Juice",
        price: 60,
        description: "Simple kids combo with a satisfying bite.",
      },
      {
        id: "kids-burger",
        name: "Kiddies Burger Meal",
        price: 70,
        description: "Burger meal made for younger appetites.",
      },
      {
        id: "kids-waffle",
        name: "Waffle",
        price: 50,
        description: "Sweet waffle treat for the little ones.",
      },
      {
        id: "kids-loaded-fries",
        name: "Loaded Fries",
        price: 40,
        description: "Crispy fries with extra flavour.",
      },
    ],
  },
  {
    title: "Ice Cream & Desserts",
    items: [
      {
        id: "dessert-small-tub",
        name: "Small Tub",
        price: 30,
        description: "Simple cold dessert option.",
      },
      {
        id: "dessert-plain-tub",
        name: "Plain Tub",
        price: 75,
        description: "Larger dessert serving for extra enjoyment.",
      },
      {
        id: "dessert-classic-waffle",
        name: "Classic Waffle",
        price: 40,
        description: "Classic waffle with warm sweet flavour.",
      },
      {
        id: "dessert-oreo-waffle",
        name: "Oreo / Chocolate Waffle",
        price: 75,
        description: "Loaded waffle dessert with sweet richness.",
      },
    ],
  },
  {
    title: "Cold Drinks",
    items: [
      {
        id: "drink-coke",
        name: "Coke",
        price: 16,
        description: "Cold soft drink refreshment.",
      },
      {
        id: "drink-fanta",
        name: "Fanta Orange",
        price: 16,
        description: "Bright orange soft drink option.",
      },
      {
        id: "drink-stoney",
        name: "Stoney",
        price: 16,
        description: "Refreshing ginger-flavoured soft drink.",
      },
      {
        id: "drink-liqui-fruit",
        name: "Liqui Fruit",
        price: 20,
        description: "Smooth juice option for refreshment.",
      },
      {
        id: "drink-coke-2l",
        name: "2 Litre Coke",
        price: 35,
        description: "Large bottle for sharing.",
      },
      {
        id: "drink-stoney-2l",
        name: "2 Litre Stoney",
        price: 35,
        description: "Large refreshing bottle option.",
      },
      {
        id: "drink-sprite-2l",
        name: "2 Litre Sprite",
        price: 35,
        description: "Large lemon-lime bottle for groups.",
      },
    ],
  },
  {
    title: "Alcohol",
    items: [
      {
        id: "alcohol-heineken",
        name: "Heineken",
        price: 35,
        description: "Premium beer option served cold.",
      },
      {
        id: "alcohol-corona",
        name: "Corona",
        price: 35,
        description: "Classic premium beer option.",
      },
      {
        id: "alcohol-brutal-fruit",
        name: "Brutal Fruit",
        price: 35,
        description: "Light fruity refreshment.",
      },
      {
        id: "alcohol-savanna",
        name: "Savanna",
        price: 35,
        description: "Crisp cider option.",
      },
      {
        id: "alcohol-flying-fish",
        name: "Flying Fish",
        price: 35,
        description: "Flavoured beer choice with unique taste.",
      },
      {
        id: "alcohol-hunters-dry",
        name: "Hunter's Dry",
        price: 35,
        description: "Dry cider option with clean finish.",
      },
    ],
  },
  {
    title: "Cocktails",
    items: [
      {
        id: "cocktail-mojito",
        name: "Mojito",
        price: 80,
        description: "Fresh cocktail with a cool finish.",
      },
      {
        id: "cocktail-long-island",
        name: "Long Island",
        price: 80,
        description: "Bold cocktail mix with strong flavour.",
      },
      {
        id: "cocktail-strawberry-daiquiri",
        name: "Strawberry Daiquiri",
        price: 80,
        description: "Smooth fruity cocktail with a sweet edge.",
      },
    ],
  },
];

export default function Menu() {
  const [quantities, setQuantities] = useState({});
  const [selectedSizes, setSelectedSizes] = useState({});
  const [addedMessage, setAddedMessage] = useState("");

  const updateQuantity = (id, type) => {
    setQuantities((prev) => {
      const current = prev[id] || 1;
      const nextValue =
        type === "increase" ? current + 1 : Math.max(1, current - 1);

      return {
        ...prev,
        [id]: nextValue,
      };
    });
  };

  const updateSelectedSize = (id, size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [id]: size,
    }));
  };

  const addToCart = (item, sectionTitle) => {
    const quantity = quantities[item.id] || 1;

    const chosenSize =
      item.sizes && item.sizes.length > 0
        ? selectedSizes[item.id] || item.sizes[0]
        : null;

    const cartItem = {
      id: chosenSize ? `${item.id}-${chosenSize.label.toLowerCase()}` : item.id,
      productId: item.id,
      name: item.name,
      description: item.description,
      quantity,
      category: sectionTitle,
      price: chosenSize ? chosenSize.price : item.price,
      size: chosenSize ? chosenSize.label : null,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItemIndex = existingCart.findIndex(
      (cartEntry) => cartEntry.id === cartItem.id
    );

    if (existingItemIndex !== -1) {
      existingCart[existingItemIndex].quantity += quantity;
    } else {
      existingCart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));

    setAddedMessage(
      chosenSize
        ? `${item.name} (${chosenSize.label}) added to cart`
        : `${item.name} added to cart`
    );

    setTimeout(() => {
      setAddedMessage("");
    }, 2200);
  };

  return (
    <section
      id="menu"
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      {addedMessage && (
        <div className="fixed top-24 right-5 z-[200]">
          <div
            className="px-5 py-3 rounded-2xl text-sm font-semibold shadow-lg"
            style={{
              background: "linear-gradient(135deg, #1e6b30, #2d9a47)",
              color: "#ffffff",
            }}
          >
            {addedMessage}
          </div>
        </div>
      )}

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
              Order Online
            </p>

            <h2
              className="text-5xl md:text-6xl font-bold mb-2 leading-tight"
              style={{ color: "#0c1a0e" }}
            >
              Build Your
            </h2>

            <h2
              className="text-5xl md:text-6xl font-bold italic mb-8 leading-tight"
              style={{ color: "#1b5e20" }}
            >
              Perfect Order
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
              Browse favourites, choose your quantity, and start building your
              order. Clean, simple, and ready for checkout.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-10">
          {menuSections.map((section, index) => (
            <Reveal key={section.title} delay={index * 80}>
              <div
                className="rounded-[24px] p-6 md:p-8"
                style={{
                  backgroundColor: "#f9f6f1",
                  border: "1px solid rgba(212,160,23,0.18)",
                  boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
                }}
              >
                <div className="mb-8">
                  <h3
                    className="text-2xl md:text-3xl font-bold font-['Playfair_Display']"
                    style={{ color: "#2d9a47" }}
                  >
                    {section.title}
                  </h3>

                  <div
                    className="w-10 h-px mt-3"
                    style={{ backgroundColor: "#d4a017" }}
                  />
                </div>

                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {section.items.map((item) => {
                    const quantity = quantities[item.id] || 1;
                    const currentSize =
                      item.sizes && item.sizes.length > 0
                        ? selectedSizes[item.id] || item.sizes[0]
                        : null;

                    return (
                      <div
                        key={item.id}
                        className="rounded-[20px] p-5 transition-all duration-300 hover:-translate-y-1"
                        style={{
                          backgroundColor: "#ffffff",
                          border: "1px solid rgba(45,154,71,0.12)",
                          boxShadow: "0 8px 18px rgba(0,0,0,0.04)",
                        }}
                      >
                        <div
                          className="rounded-[16px] mb-4 flex items-center justify-center text-xs uppercase tracking-[0.2em] font-semibold"
                          style={{
                            height: "88px",
                            background:
                              "linear-gradient(135deg, rgba(30,107,48,0.08), rgba(212,160,23,0.08))",
                            color: "#2d9a47",
                            border: "1px dashed rgba(45,154,71,0.2)",
                          }}
                        >
                          No Image Yet
                        </div>

                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h4
                            className="text-base font-bold leading-snug"
                            style={{ color: "#0c1a0e" }}
                          >
                            {item.name}
                          </h4>

                          <span
                            className="text-sm font-bold whitespace-nowrap"
                            style={{ color: "#2d9a47" }}
                          >
                            {currentSize ? `R${currentSize.price}` : `R${item.price}`}
                          </span>
                        </div>

                        <p
                          className="text-sm leading-6 mb-4"
                          style={{ color: "#6c5846" }}
                        >
                          {item.description}
                        </p>

                        {item.sizes && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {item.sizes.map((size) => {
                              const isActive = currentSize?.label === size.label;

                              return (
                                <button
                                  key={size.label}
                                  type="button"
                                  onClick={() => updateSelectedSize(item.id, size)}
                                  className="px-3 py-2 rounded-full text-xs font-semibold transition-all duration-300"
                                  style={{
                                    backgroundColor: isActive ? "#1e6b30" : "#f4efe7",
                                    color: isActive ? "#ffffff" : "#4a3828",
                                    border: isActive
                                      ? "1px solid #1e6b30"
                                      : "1px solid rgba(45,154,71,0.18)",
                                  }}
                                >
                                  {size.label} · R{size.price}
                                </button>
                              );
                            })}
                          </div>
                        )}

                        <div className="flex items-center justify-between gap-3">
                          <div
                            className="inline-flex items-center rounded-full px-2 py-1"
                            style={{
                              border: "1px solid rgba(45,154,71,0.18)",
                              backgroundColor: "#f7fbf8",
                            }}
                          >
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, "decrease")}
                              className="w-8 h-8 rounded-full text-lg font-semibold transition-all"
                              style={{ color: "#1b5e20" }}
                            >
                              -
                            </button>

                            <span
                              className="w-8 text-center text-sm font-semibold"
                              style={{ color: "#0c1a0e" }}
                            >
                              {quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, "increase")}
                              className="w-8 h-8 rounded-full text-lg font-semibold transition-all"
                              style={{ color: "#1b5e20" }}
                            >
                              +
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => addToCart(item, section.title)}
                            className="inline-flex items-center justify-center px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-300"
                            style={{
                              background:
                                "linear-gradient(135deg, #1e6b30, #2d9a47)",
                              color: "#ffffff",
                              boxShadow: "0 10px 24px rgba(45,154,71,0.18)",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform =
                                "translateY(-2px) scale(1.02)";
                              e.currentTarget.style.boxShadow =
                                "0 16px 30px rgba(45,154,71,0.28)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform =
                                "translateY(0) scale(1)";
                              e.currentTarget.style.boxShadow =
                                "0 10px 24px rgba(45,154,71,0.18)";
                            }}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-sm mb-5" style={{ color: "#9e7d60" }}>
            Build your order item by item. Checkout, payment, and confirmation
            will connect next.
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
            Download Full Menu
          </a>

<div className="mt-5">
  <Link
    to="/cart"
    className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300"
    style={{
      backgroundColor: "#ffffff",
      color: "#1e6b30",
      border: "1px solid rgba(45,154,71,0.18)",
      boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.boxShadow =
        "0 14px 30px rgba(0,0,0,0.12)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow =
        "0 8px 20px rgba(0,0,0,0.05)";
    }}
  >
    View Cart
  </Link>
</div>

        </div>
      </div>
    </section>
  );
}