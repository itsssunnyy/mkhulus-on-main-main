import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import Reveal from "./Reveal";

export default function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [orderType, setOrderType] = useState("pickup");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const subtotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  const deliveryFee = orderType === "delivery" ? 30 : 0;
  const total = subtotal + deliveryFee;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (orderType === "delivery" && !formData.address.trim()) {
      newErrors.address = "Delivery address is required.";
    }

    if (cartItems.length === 0) {
      newErrors.cart = "Your cart is empty.";
    }

    return newErrors;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const orderPayload = {
      customer: formData,
      orderType,
      items: cartItems,
      subtotal,
      deliveryFee,
      total,
      createdAt: new Date().toISOString(),
      status: "pending",
    };

    localStorage.setItem("latestOrder", JSON.stringify(orderPayload));

    setSuccessMessage(
      "Order details captured successfully. Payment integration comes next."
    );

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <section
      id="checkout"
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      {successMessage && (
        <div className="fixed top-24 right-5 z-[200]">
          <div
            className="px-5 py-3 rounded-2xl text-sm font-semibold shadow-lg"
            style={{
              background: "linear-gradient(135deg, #1e6b30, #2d9a47)",
              color: "#ffffff",
            }}
          >
            {successMessage}
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
              Checkout
            </p>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight"
              style={{ color: "#0c1a0e" }}
            >
              Confirm Your
            </h2>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold italic mb-8 leading-tight"
              style={{ color: "#1b5e20" }}
            >
              Order Details
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
              Enter your details, choose pickup or delivery, and review your
              order before payment is connected.
            </p>
          </div>
        </Reveal>

        {cartItems.length === 0 ? (
          <Reveal>
            <div
              className="max-w-2xl mx-auto rounded-[26px] p-6 md:p-10 text-center"
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
                Add items to your cart before continuing to checkout.
              </p>

              <Link
                to="/#menu"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #1e6b30, #2d9a47)",
                  color: "#ffffff",
                  boxShadow: "0 10px 28px rgba(45,154,71,0.22)",
                }}
              >
                Back to Menu
              </Link>
            </div>
          </Reveal>
        ) : (
          <div className="grid lg:grid-cols-[1.1fr_0.8fr] gap-8 items-start">
            <Reveal>
              <form
                onSubmit={handlePlaceOrder}
                className="rounded-[26px] p-6 md:p-8"
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
                    Customer Details
                  </h3>

                  <div
                    className="w-10 h-px mt-3"
                    style={{ backgroundColor: "#d4a017" }}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5 mb-6">
                  <div className="md:col-span-2">
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold uppercase tracking-[0.16em] mb-2"
                      style={{ color: "#6c5846" }}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full rounded-2xl px-4 py-3 text-sm outline-none"
                      style={{
                        backgroundColor: "#ffffff",
                        border: "1px solid rgba(45,154,71,0.14)",
                        color: "#0c1a0e",
                      }}
                    />
                    {errors.fullName && (
                      <p className="text-xs mt-2" style={{ color: "#9f3c2b" }}>
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold uppercase tracking-[0.16em] mb-2"
                      style={{ color: "#6c5846" }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full rounded-2xl px-4 py-3 text-sm outline-none"
                      style={{
                        backgroundColor: "#ffffff",
                        border: "1px solid rgba(45,154,71,0.14)",
                        color: "#0c1a0e",
                      }}
                    />
                    {errors.phone && (
                      <p className="text-xs mt-2" style={{ color: "#9f3c2b" }}>
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-[0.16em] mb-2"
                      style={{ color: "#6c5846" }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full rounded-2xl px-4 py-3 text-sm outline-none"
                      style={{
                        backgroundColor: "#ffffff",
                        border: "1px solid rgba(45,154,71,0.14)",
                        color: "#0c1a0e",
                      }}
                    />
                    {errors.email && (
                      <p className="text-xs mt-2" style={{ color: "#9f3c2b" }}>
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="ordertype"
                    className="block text-xs font-semibold uppercase tracking-[0.16em] mb-3"
                    style={{ color: "#6c5846" }}
                  >
                    Order Type
                  </label>

                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setOrderType("pickup")}
                      className="px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300"
                      style={{
                        backgroundColor:
                          orderType === "pickup" ? "#1e6b30" : "#ffffff",
                        color: orderType === "pickup" ? "#ffffff" : "#1e6b30",
                        border:
                          orderType === "pickup"
                            ? "1px solid #1e6b30"
                            : "1px solid rgba(45,154,71,0.18)",
                      }}
                    >
                      Pickup
                    </button>

                    <button
                      type="button"
                      onClick={() => setOrderType("delivery")}
                      className="px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300"
                      style={{
                        backgroundColor:
                          orderType === "delivery" ? "#1e6b30" : "#ffffff",
                        color: orderType === "delivery" ? "#ffffff" : "#1e6b30",
                        border:
                          orderType === "delivery"
                            ? "1px solid #1e6b30"
                            : "1px solid rgba(45,154,71,0.18)",
                      }}
                    >
                      Delivery
                    </button>
                  </div>
                </div>

                {orderType === "delivery" && (
                  <div className="mb-6">
                    <label
                      htmlFor="address"
                      className="block text-xs font-semibold uppercase tracking-[0.16em] mb-2"
                      style={{ color: "#6c5846" }}
                    >
                      Delivery Address
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter your delivery address"
                      rows="4"
                      className="w-full rounded-2xl px-4 py-3 text-sm outline-none resize-none"
                      style={{
                        backgroundColor: "#ffffff",
                        border: "1px solid rgba(45,154,71,0.14)",
                        color: "#0c1a0e",
                      }}
                    />
                    {errors.address && (
                      <p className="text-xs mt-2" style={{ color: "#9f3c2b" }}>
                        {errors.address}
                      </p>
                    )}
                  </div>
                )}

                <div className="mb-8">
                  <label
                    htmlFor="notes"
                    className="block text-xs font-semibold uppercase tracking-[0.16em] mb-2"
                    style={{ color: "#6c5846" }}
                  >
                    Order Notes
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Extra instructions, custom notes, or requests"
                    rows="4"
                    className="w-full rounded-2xl px-4 py-3 text-sm outline-none resize-none"
                    style={{
                      backgroundColor: "#ffffff",
                      border: "1px solid rgba(45,154,71,0.14)",
                      color: "#0c1a0e",
                    }}
                  />
                </div>

                {errors.cart && (
                  <p className="text-sm mb-4" style={{ color: "#9f3c2b" }}>
                    {errors.cart}
                  </p>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg, #1e6b30, #2d9a47)",
                      color: "#ffffff",
                      boxShadow: "0 10px 28px rgba(45,154,71,0.22)",
                    }}
                  >
                    Save Order Details
                  </button>

                  <Link
                    to="/cart"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300"
                    style={{
                      backgroundColor: "#ffffff",
                      color: "#1e6b30",
                      border: "1px solid rgba(45,154,71,0.18)",
                    }}
                  >
                    Back to Cart
                  </Link>
                </div>
              </form>
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
                  Checkout Summary
                </p>

                <h3
                  className="text-3xl font-bold mb-8 font-['Playfair_Display']"
                  style={{ color: "#ffffff" }}
                >
                  Your Order
                </h3>

                <div className="flex flex-col gap-4 mb-8">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="pb-4"
                      style={{
                        borderBottom: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <p
                            className="text-sm font-semibold"
                            style={{ color: "#ffffff" }}
                          >
                            {item.name}
                          </p>

                          <div className="flex flex-wrap gap-2 mt-2">
                            {item.size && (
                              <span
                                className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.14em]"
                                style={{
                                  backgroundColor: "rgba(122,199,143,0.12)",
                                  color: "#7ac78f",
                                  border: "1px solid rgba(122,199,143,0.14)",
                                }}
                              >
                                {item.size}
                              </span>
                            )}

                            <span
                              className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.14em]"
                              style={{
                                backgroundColor: "rgba(212,160,23,0.12)",
                                color: "#d4a017",
                                border: "1px solid rgba(212,160,23,0.14)",
                              }}
                            >
                              Qty {item.quantity}
                            </span>
                          </div>
                        </div>

                        <p
                          className="text-sm font-semibold whitespace-nowrap"
                          style={{ color: "#ffffff" }}
                        >
                          R{item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-4 mb-8">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm" style={{ color: "#c9d7cc" }}>
                      Order Type
                    </span>
                    <span
                      className="text-sm font-semibold uppercase"
                      style={{ color: "#ffffff" }}
                    >
                      {orderType}
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

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm" style={{ color: "#c9d7cc" }}>
                      Delivery Fee
                    </span>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "#ffffff" }}
                    >
                      R{deliveryFee}
                    </span>
                  </div>

                  <div
                    className="h-px"
                    style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                  />

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-base font-semibold" style={{ color: "#ffffff" }}>
                      Total
                    </span>
                    <span
                      className="text-2xl font-bold"
                      style={{ color: "#d4a017" }}
                    >
                      R{total}
                    </span>
                  </div>
                </div>

                <div
                  className="rounded-[20px] p-4"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <p
                    className="text-xs uppercase tracking-[0.16em] font-semibold mb-2"
                    style={{ color: "#7ac78f" }}
                  >
                    Next Step
                  </p>
                  <p
                    className="text-sm leading-7"
                    style={{ color: "#c9d7cc" }}
                  >
                    This checkout screen is now ready for payment integration.
                    Next we connect PayFast or Paystack so customers can pay
                    securely after submitting their details.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}