import Reveal from "./Reveal";

const reviews = [
  {
    name: "Google Review",
    rating: "5.0",
    text:
      "We hosted our fundraising event here. Their service was excellent, and we were treated like Aristocracy.",
  },
  {
    name: "Google Review",
    rating: "5.0",
    text:
      "After traveling the world and visiting restaurants, this is home after many travels and homesickness.",
  },
  {
    name: "Google Review",
    rating: "5.0",
    text:
      "I ordered before lunch time and was promised delivery in 30 minutes. That was a promise kept.",
  },
  {
    name: "Google Review",
    rating: "5.0",
    text:
      "The rib burger and chips took my taste buds on a trip, and the delivery guy was also friendly.",
  },
];

const duplicatedReviews = [...reviews, ...reviews];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
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
              Public Reviews
            </p>

            <h2
              className="text-5xl md:text-6xl font-bold mb-2 leading-tight"
              style={{ color: "#0c1a0e" }}
            >
              Real Words.
            </h2>

            <h2
              className="text-5xl md:text-6xl font-bold italic mb-8 leading-tight"
              style={{ color: "#1b5e20" }}
            >
              Real Trust.
            </h2>

            <div className="flex items-center justify-center gap-3 mb-8">
              <div
                className="h-px w-10"
                style={{ backgroundColor: "#d4a017" }}
              />
              <span style={{ color: "#d4a017", fontSize: "10px" }}>✦</span>
            </div>

            <p
              className="text-sm leading-8 max-w-2xl mx-auto"
              style={{ color: "#4a3828" }}
            >
              Real feedback from real customers — building trust, confidence, and
              a stronger connection before they even arrive.
            </p>
          </div>
        </Reveal>
      </div>

      {/* 🔥 SCROLLING REVIEWS */}
      <div className="reviews-marquee">
        <div className="reviews-track">
          {duplicatedReviews.map((review, index) => (
            <article
              key={index}
              className="review-card group"
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
              <div className="flex items-center justify-between mb-5">
                <span
                  className="text-[10px] uppercase tracking-[0.28em] font-semibold"
                  style={{ color: "#2d9a47" }}
                >
                  {review.name}
                </span>

                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #1e6b30, #2d9a47)",
                    color: "#ffffff",
                  }}
                >
                  ★ {review.rating}
                </span>
              </div>

              <p
                className="text-sm leading-8 mb-6"
                style={{ color: "#4a3828" }}
              >
                “{review.text}”
              </p>

              <div
                className="pt-4"
                style={{
                  borderTop: "1px solid rgba(212,160,23,0.2)",
                }}
              >
                <span
                  className="text-xs uppercase tracking-[0.22em] font-semibold"
                  style={{ color: "#9e7d60" }}
                >
                  Customer Feedback
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* 🔥 STYLE */}
      <style>{`
        .reviews-marquee {
          overflow: hidden;
          width: 100%;
          position: relative;
        }

        .reviews-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: reviewsScroll 38s linear infinite;
          padding: 8px 24px;
        }

        .reviews-marquee:hover .reviews-track {
          animation-play-state: paused;
        }

        .review-card {
          width: 380px;
          flex: 0 0 380px;
          border-radius: 22px;
          padding: 28px;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .review-card:hover {
          transform: translateY(-8px);
        }

        @keyframes reviewsScroll {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @media (max-width: 768px) {
          .review-card {
            width: 300px;
            flex-basis: 300px;
            padding: 22px;
          }

          .reviews-track {
            gap: 18px;
            animation-duration: 28s;
          }
        }
      `}</style>
    </section>
  );
}
