import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "#faf8f3" }}
    >
      <div
        className="absolute top-0 left-0 w-1/3 h-full pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(30,107,48,0.04) 0%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p
              className="tracking-[0.35em] uppercase text-xs font-semibold mb-4"
              style={{ color: "#2d9a47" }}
            >
              Contact
            </p>

            <h2
              className="text-5xl md:text-6xl font-bold mb-2 leading-tight"
              style={{ color: "#0c1a0e" }}
            >
              Find Us &
            </h2>

            <h2
              className="text-5xl md:text-6xl font-bold italic mb-8 leading-tight"
              style={{ color: "#1b5e20" }}
            >
              Reach Out
            </h2>

            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-10" style={{ backgroundColor: "#d4a017" }} />
              <span style={{ color: "#d4a017", fontSize: "10px" }}>✦</span>
            </div>

            <p
              className="max-w-2xl mx-auto text-sm leading-8"
              style={{ color: "#4a3828" }}
            >
              Whether you want to visit, enquire, plan something bigger, or make
              a booking request, this is the best place to start.
            </p>
          </div>
        </Reveal>

        <div className="space-y-10">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <Reveal>
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
                  Get In Touch
                </p>

                <h3
                  className="text-3xl md:text-4xl font-bold mb-4"
                  style={{ color: "#0c1a0e" }}
                >
                  Let’s hear from you
                </h3>

                <p
                  className="text-sm leading-8 mb-8"
                  style={{ color: "#4a3828" }}
                >
                  Use this form for bookings, private events, platter requests,
                  general questions, or custom arrangements.
                </p>

                <form className="space-y-5">
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

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-300 focus:scale-[1.01]"
                    style={{
                      border: "1px solid rgba(212,160,23,0.25)",
                      color: "#1a0f06",
                      backgroundColor: "#fff",
                    }}
                  />

                  <select
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-300 focus:scale-[1.01]"
                    style={{
                      border: "1px solid rgba(212,160,23,0.25)",
                      color: "#1a0f06",
                      backgroundColor: "#fff",
                    }}
                  >
                    <option>General Enquiry</option>
                    <option>Table Booking</option>
                    <option>Private Event</option>
                    <option>Platters / Group Meals</option>
                    <option>Custom Request</option>
                  </select>

                  <textarea
                    rows="5"
                    placeholder="Tell us what you need..."
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
                      boxShadow: "0 10px 28px rgba(45,154,71,0.22)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px) scale(1.03)";
                      e.currentTarget.style.boxShadow = "0 18px 38px rgba(45,154,71,0.34)";
                      e.currentTarget.style.filter = "brightness(1.06)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0) scale(1)";
                      e.currentTarget.style.boxShadow = "0 10px 28px rgba(45,154,71,0.22)";
                      e.currentTarget.style.filter = "brightness(1)";
                    }}
                  >
                    Send Request
                    <span>→</span>
                  </button>
                </form>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="space-y-6">
                <div
                  className="rounded-[28px] p-8"
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(212,160,23,0.2)",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
                  }}
                >
                  <p
                    className="text-xs uppercase tracking-[0.35em] font-semibold mb-4"
                    style={{ color: "#2d9a47" }}
                  >
                    Visit Us
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4
                        className="text-lg font-bold mb-2"
                        style={{ color: "#0c1a0e" }}
                      >
                        Address
                      </h4>

                      <div className="flex items-start gap-3">
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=15522+Main+St,+Benoni,+Gauteng,+1519"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
                          style={{
                            background: "rgba(30,107,48,0.08)",
                            border: "1px solid rgba(30,107,48,0.14)",
                            color: "#1b5e20",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-2px) scale(1.05)";
                            e.currentTarget.style.color = "#d4a017";
                            e.currentTarget.style.border = "1px solid rgba(212,160,23,0.32)";
                            e.currentTarget.style.boxShadow = "0 12px 24px rgba(30,107,48,0.16)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0) scale(1)";
                            e.currentTarget.style.color = "#1b5e20";
                            e.currentTarget.style.border = "1px solid rgba(30,107,48,0.14)";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                          aria-label="Open location"
                          title="Open location"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.8}
                              d="M12 21s-6-5.33-6-11a6 6 0 1112 0c0 5.67-6 11-6 11z"
                            />
                            <circle cx="12" cy="10" r="2.2" strokeWidth="1.8" />
                          </svg>
                        </a>

                        <a
                          href="https://www.google.com/maps/search/?api=1&query=15522+Main+St,+Benoni,+Gauteng,+1519"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm leading-7 transition-colors duration-300"
                          style={{ color: "#4a3828" }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#d4a017";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#4a3828";
                          }}
                        >
                          15522 Main St, Benoni
                          <br />
                          Gauteng, 1519
                        </a>
                      </div>
                    </div>

                    <div>
                      <h4
                        className="text-lg font-bold mb-2"
                        style={{ color: "#0c1a0e" }}
                      >
                        Opening Hours
                      </h4>

                      <div
                        className="text-sm leading-8"
                        style={{ color: "#4a3828" }}
                      >
                        <p>
                          <span className="font-semibold">Monday – Friday</span>
                          <br />
                          10 AM – 8 PM
                        </p>

                        <p className="mt-3">
                          <span className="font-semibold">Saturday</span>
                          <br />
                          10 AM – 22 PM
                        </p>

                        <p className="mt-3">
                          <span className="font-semibold">Sunday</span>
                          <br />
                          10 AM – 22 PM
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4
                        className="text-lg font-bold mb-3"
                        style={{ color: "#0c1a0e" }}
                      >
                        Contact
                      </h4>

                      <div className="space-y-3">
                        <a
                          href="tel:+27730222523"
                          className="flex items-center gap-3 text-sm transition-colors duration-300"
                          style={{ color: "#4a3828" }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#d4a017";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#4a3828";
                          }}
                        >
                          <span className="text-base">📞</span>
                          <span>+27 73 022 2523</span>
                        </a>

                        <a
                          href="mailto:hello@mkhulusonmain.co.za"
                          className="flex items-center gap-3 text-sm transition-colors duration-300"
                          style={{ color: "#4a3828" }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#d4a017";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#4a3828";
                          }}
                        >
                          <span className="text-base">✉</span>
                          <span>hello@mkhulusonmain.co.za</span>
                        </a>

                        <a
                          href="https://wa.me/c/27730222523"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 mt-2 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300"
                          style={{
                            background: "rgba(30,107,48,0.08)",
                            border: "1px solid rgba(30,107,48,0.14)",
                            color: "#1b5e20",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-2px) scale(1.03)";
                            e.currentTarget.style.color = "#d4a017";
                            e.currentTarget.style.border = "1px solid rgba(212,160,23,0.32)";
                            e.currentTarget.style.boxShadow = "0 12px 24px rgba(30,107,48,0.16)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0) scale(1)";
                            e.currentTarget.style.color = "#1b5e20";
                            e.currentTarget.style.border = "1px solid rgba(30,107,48,0.14)";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                          aria-label="Open WhatsApp"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.52 3.48A11.82 11.82 0 0012.06 0C5.5 0 .18 5.3.18 11.84c0 2.08.54 4.1 1.56 5.88L0 24l6.47-1.7a11.86 11.86 0 005.59 1.42h.01c6.55 0 11.88-5.3 11.88-11.84 0-3.16-1.23-6.13-3.43-8.4zm-8.46 18.2h-.01a9.9 9.9 0 01-5.04-1.38l-.36-.21-3.84 1.01 1.03-3.74-.24-.38a9.8 9.8 0 01-1.52-5.14C2.08 6.34 6.56 1.9 12.06 1.9c2.64 0 5.12 1.02 6.98 2.88a9.77 9.77 0 012.9 6.96c0 5.49-4.48 9.94-9.88 9.94zm5.42-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.16-.17.2-.35.22-.65.08-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.53.08-.8.38-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.06 2.9 1.2 3.1.15.2 2.08 3.17 5.04 4.44.7.3 1.24.48 1.66.61.7.22 1.33.19 1.83.11.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
                          </svg>
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div
            className="rounded-[28px] overflow-hidden"
            style={{
              border: "1px solid rgba(212,160,23,0.2)",
              boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
            }}
          >
            <iframe
              title="Mkhulu's On Main Map"
              src="https://www.google.com/maps?q=15522%20Main%20St%2C%20Benoni%2C%20Gauteng%2C%201519&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
