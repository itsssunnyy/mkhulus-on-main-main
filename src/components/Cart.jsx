import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import Reveal from "./Reveal";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const updateCartStorage = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );

    updateCartStorage(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
        : item
    );

    updateCartStorage(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    updateCartStorage(updatedCart);
  };

  const clearCart = () => {
    updateCartStorage([]);
  };

  const subtotal = useMemo(() => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }, [cartItems]);

  return (
    <section
      id="cart"
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div
        className="absolute top-0 right-0 w-1/3 h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(30,107,48,0.04) 0%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16 relative">
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
              Your Cart
            </p>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight"
              style={{ color: "#0c1a0e" }}
            >
              Review Your
            </h2>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold italic mb-8 leading-tight"
              style={{ color: "#1b5e20" }}
            >
              Order Selection
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
              Adjust your quantities, remove what you do not need, and continue
              to checkout when your order looks right.
            </p>
          </div>
        </Reveal>

        {cartItems.length === 0 ? (
          <Reveal>
            <div
              className="max-w-2xl mx-auto rounded-[26px] p-6 md:p-8 text-center"
              style={{
                backgroundColor: "#f9f6f1",
                border: "1px solid rgba(212,160,23,0.18)",
                boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
              }}
            >
              <h3
                className="text-2xl md:text-3xl font-bold mb-4 font-['Playfair_Display']"
                style={{ color: "#0c1a0e" }}
              >
                Your cart is empty
              </h3>

              <p
                className="text-sm leading-7 mb-8"
                style={{ color: "#6c5846" }}
              >
                Start by adding your favourite meals, drinks, or platters from
                the menu.
              </p>

              <Link
                to="/#menu"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #1e6b30, #2d9a47)",
                  color: "#ffffff",
                  boxShadow: "0 10px 28px rgba(45,154,71,0.22)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-2px) scale(1.03)";
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
                Back to Menu
              </Link>
            </div>
          </Reveal>
        ) : (
          <div className="grid lg:grid-cols-[1.4fr_0.7fr] gap-8 items-start">
            <Reveal>
              <div
                className="rounded-[26px] p-6 md:p-8"
                style={{
                  backgroundColor: "#f9f6f1",
                  border: "1px solid rgba(212,160,23,0.18)",
                  boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
                }}
              >
                <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
                  <h3
                    className="text-2xl md:text-3xl font-bold font-['Playfair_Display']"
                    style={{ color: "#2d9a47" }}
                  >
                    Selected Items
                  </h3>

                  <button
                    type="button"
                    onClick={clearCart}
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.16em] transition-all duration-300"
                    style={{
                      backgroundColor: "#fff4f1",
                      color: "#9f3c2b",
                      border: "1px solid rgba(159,60,43,0.16)",
                    }}
                  >
                    Clear Cart
                  </button>
                </div>

                <div className="flex flex-col gap-5">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-[22px] p-5 md:p-6"
                      style={{
                        backgroundColor: "#ffffff",
                        border: "1px solid rgba(45,154,71,0.12)",
                        boxShadow: "0 8px 18px rgba(0,0,0,0.04)",
                      }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 flex-wrap mb-4">
                        <div className="flex-1 min-w-[220px]">
                          <div className="flex items-center gap-3 flex-wrap mb-2">
                            <h4
                              className="text-lg font-bold leading-snug break-words"
                              style={{ color: "#0c1a0e" }}
                            >
                              {item.name}
                            </h4>

                            {item.size && (
                              <span
                                className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.14em]"
                                style={{
                                  backgroundColor: "#edf7ef",
                                  color: "#1b5e20",
                                  border: "1px solid rgba(45,154,71,0.14)",
                                }}
                              >
                                {item.size}
                              </span>
                            )}

                            <span
                              className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.14em]"
                              style={{
                                backgroundColor: "#f8f2e8",
                                color: "#9e7d60",
                                border: "1px solid rgba(212,160,23,0.14)",
                              }}
                            >
                              {item.category}
                            </span>
                          </div>

                          <p
                            className="text-sm leading-7"
                            style={{ color: "#6c5846" }}
                          >
                            {item.description}
                          </p>
                        </div>

                        <div className="text-right min-w-[110px]">
                          <p
                            className="text-xs uppercase tracking-[0.15em] mb-1"
                            style={{ color: "#9e7d60" }}
                          >
                            Unit Price
                          </p>
                          <p
                            className="text-lg font-bold"
                            style={{ color: "#2d9a47" }}
                          >
                            R{item.price}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-4 flex-wrap">
                        <div
                          className="inline-flex items-center rounded-full px-2 py-1"
                          style={{
                            border: "1px solid rgba(45,154,71,0.18)",
                            backgroundColor: "#f7fbf8",
                          }}
                        >
                          <button
                            type="button"
                            onClick={() => decreaseQuantity(item.id)}
                            className="w-8 h-8 rounded-full text-lg font-semibold transition-all"
                            style={{ color: "#1b5e20" }}
                          >
                            -
                          </button>

                          <span
                            className="w-10 text-center text-sm font-semibold"
                            style={{ color: "#0c1a0e" }}
                          >
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() => increaseQuantity(item.id)}
                            className="w-8 h-8 rounded-full text-lg font-semibold transition-all"
                            style={{ color: "#1b5e20" }}
                          >
                            +
                          </button>
                        </div>

                        <div className="flex items-center gap-3 flex-wrap">
                          <p
                            className="text-sm font-semibold break-words" 
                            style={{ color: "#0c1a0e" }}
                          >
                            Total:{" "}
                            <span style={{ color: "#2d9a47" }}>
                              R{item.price * item.quantity}
                            </span>
                          </p>

                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="inline-flex items-center justify-center px-4 py-2.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.14em] transition-all duration-300"
                            style={{
                              backgroundColor: "#fff4f1",
                              color: "#9f3c2b",
                              border: "1px solid rgba(159,60,43,0.16)",
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div
                className="rounded-[26px] p-6 md:p-8 lg:sticky lg:top-24"
                style={{
                  backgroundColor: "#0f1d12",
                  border: "1px solid rgba(212,160,23,0.12)",
                  boxShadow: "0 18px 38px rgba(0,0,0,0.12)",
                }}
              >
                <p
                  className="tracking-[0.28em] uppercase text-[11px] font-semibold mb-4"
                  style={{ color: "#7ac78f" }}
                >
                  Order Summary
                </p>

                <h3
                  className="text-3xl font-bold mb-8 font-['Playfair_Display']"
                  style={{ color: "#ffffff" }}
                >
                  Ready for Checkout
                </h3>

                <div className="flex flex-col gap-4 mb-8">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm" style={{ color: "#c9d7cc" }}>
                      Items
                    </span>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "#ffffff" }}
                    >
                      {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm" style={{ color: "#c9d7cc" }}>
                      Subtotal
                    </span>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "#ffffff" }}
                    >
                      R{subtotal}
                    </span>
                  </div>

                  <div
                    className="h-px"
                    style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                  />

                  <div className="flex items-center justify-between gap-4">
                    <span
                      className="text-base font-semibold"
                      style={{ color: "#ffffff" }}
                    >
                      Total
                    </span>
                    <span
                      className="text-2xl font-bold"
                      style={{ color: "#d4a017" }}
                    >
                      R{subtotal}
                    </span>
                  </div>
                </div>

                <p
                  className="text-sm leading-7 mb-8"
                  style={{ color: "#c9d7cc" }}
                >
                  Proceed to checkout to enter your details, choose pickup or
                  delivery, and continue to payment.
                </p>

                <div className="flex flex-col gap-3">
                  <Link
                    to="/checkout"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg, #1e6b30, #2d9a47)",
                      color: "#ffffff",
                      boxShadow: "0 10px 28px rgba(45,154,71,0.22)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform =
                        "translateY(-2px) scale(1.03)";
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
                    Proceed to Checkout
                  </Link>

                  <Link
                    to="/#menu"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300"
                    style={{
                      backgroundColor: "transparent",
                      color: "#ffffff",
                      border: "1px solid rgba(255,255,255,0.14)",
                    }}
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}