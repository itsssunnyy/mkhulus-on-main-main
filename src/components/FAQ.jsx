import { useState } from "react";
import Reveal from "./Reveal";

const faqItems = [
  {
    question: "Do you take table bookings?",
    answer:
      "Yes. Guests can send a booking request for dine-in visits, group reservations, and planned occasions.",
  },
  {
    question: "Can I host a private event at Mkhulu’s On Main?",
    answer:
      "Yes. The business can accommodate event enquiries, celebrations, and hosted gatherings depending on the request and availability.",
  },
  {
    question: "Do you offer platters or group meals?",
    answer:
      "Yes. Platter requests and larger shared meal enquiries can be submitted for group dining and special occasions.",
  },
  {
    question: "Can I order food before arriving?",
    answer:
      "Yes. The site can support order enquiries and ahead-of-time requests for smoother collection or planning.",
  },
  {
    question: "Do you run specials or campaign offers?",
    answer:
      "Yes. Mkhulu’s On Main can feature selected specials, seasonal promotions, and campaign-style offers depending on what is currently available.",
  },
  {
    question: "Where is Mkhulu’s On Main located?",
    answer:
      "Mkhulu’s On Main is located at 15522 Main St, Benoni, Gauteng, 1519.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "#faf8f3" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p
              className="tracking-[0.35em] uppercase text-xs font-semibold mb-4"
              style={{ color: "#2d9a47" }}
            >
              FAQ
            </p>

            <h2
              className="text-5xl md:text-6xl font-bold mb-2 leading-tight"
              style={{ color: "#0c1a0e" }}
            >
              Clear Answers
            </h2>

            <h2
              className="text-5xl md:text-6xl font-bold italic mb-8 leading-tight"
              style={{ color: "#1b5e20" }}
            >
              Before Action
            </h2>

            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-10" style={{ backgroundColor: "#d4a017" }} />
              <span style={{ color: "#d4a017", fontSize: "10px" }}>✦</span>
            </div>

            <p className="text-sm leading-8" style={{ color: "#4a3828" }}>
              The answers people usually need before they book, enquire, or plan
              their visit.
            </p>
          </div>
        </Reveal>

        <div className="space-y-5">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <Reveal key={item.question} delay={index * 90}>
                <div
                  className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(212,160,23,0.2)",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <span
                      className="text-lg md:text-xl font-bold pr-6"
                      style={{ color: "#0c1a0e" }}
                    >
                      {item.question}
                    </span>

                    <span
                      className="text-2xl transition-transform duration-300"
                      style={{
                        color: "#1b5e20",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      +
                    </span>
                  </button>

                  <div
                    style={{
                      maxHeight: isOpen ? "220px" : "0px",
                      opacity: isOpen ? 1 : 0,
                      overflow: "hidden",
                      transition: "all 0.35s ease",
                    }}
                  >
                    <div
                      className="px-6 pb-6 pt-1 text-sm leading-8"
                      style={{
                        color: "#4a3828",
                        borderTop: "1px solid rgba(212,160,23,0.14)",
                      }}
                    >
                      {item.answer}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
