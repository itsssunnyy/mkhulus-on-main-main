import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const galleryItems = [
  {
    title: "Head Chef",
    coverImage: "/gallery/chef-1.jpg",
    images: ["/gallery/chef-1.jpg"],
  },
  {
    title: "Platters & Variety",
    coverImage: "/gallery/platter-1.jpg",
    images: ["/gallery/platter-1.jpg"],
  },
  {
    title: "Hosted Moments",
    coverImage: "/gallery/events-1.jpg",
    images: ["/gallery/events-1.jpg"],
  },
  {
    title: "Kiddies Fun Day",
    coverImage: "/gallery/kids-1.jpg",
    images: ["/gallery/kids-1.jpg"],
  },
  {
    title: "Drinks & Pairings",
    coverImage: "/gallery/drinks-1.jpg",
    images: ["/gallery/drinks-1.jpg"],
  },
  {
    title: "Traditional Foods",
    coverImage: "/gallery/traditionalfood-1.jpg",
    images: ["/gallery/traditionalfood-1.jpg"],
  },
  {
    title: "Healthy Meals",
    coverImage: "/gallery/healthymeals-1.jpg",
    images: ["/gallery/healthymeals-1.jpg"],
  },
  {
    title: "Special Guests",
    coverImage: "/gallery/guests-1.jpg",
    images: ["/gallery/guests-1.jpg"],
  },
  {
    title: "Entrance View & More",
    coverImage: "/gallery/exterior-1.jpg",
    images: ["/gallery/exterior-1.jpg"],
  },
];

export default function Gallery() {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const selectedCard =
    selectedCardIndex !== null ? galleryItems[selectedCardIndex] : null;

  const selectedImage =
    selectedCard ? selectedCard.images[selectedImageIndex] : null;

  const openModal = (cardIndex) => {
    setSelectedCardIndex(cardIndex);
    setSelectedImageIndex(0);
  };

  const closeModal = () => {
    setSelectedCardIndex(null);
    setSelectedImageIndex(0);
  };

  const showPrev = () => {
    if (!selectedCard) return;

    setSelectedImageIndex((prev) =>
      prev === 0 ? selectedCard.images.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    if (!selectedCard) return;

    setSelectedImageIndex((prev) =>
      prev === selectedCard.images.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedCardIndex === null) return;

      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    if (selectedCardIndex !== null) {
      document.body.style.overflow = "hidden";
      window.dispatchEvent(new Event("overlay:open"));
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      window.dispatchEvent(new Event("overlay:close"));
    }

    return () => {
      document.body.style.overflow = "";
      window.dispatchEvent(new Event("overlay:close"));
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCardIndex]);

  return (
    <>
      <section
        id="gallery"
        className="py-28 relative overflow-hidden"
        style={{ backgroundColor: "#faf8f3" }}
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
                Gallery
              </p>

              <h2
                className="text-5xl md:text-6xl font-bold mb-2 leading-tight"
                style={{ color: "#0c1a0e" }}
              >
                See The
              </h2>

              <h2
                className="text-5xl md:text-6xl font-bold italic mb-8 leading-tight"
                style={{ color: "#1b5e20" }}
              >
                Experience
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
                A visual look into the flavour, atmosphere, people, and energy
                that define Mkhulu’s On Main.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {galleryItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <button
                  type="button"
                  onClick={() => openModal(index)}
                  className="group block w-full text-left"
                  aria-label={`Open ${item.title}`}
                >
                  <div
                    className="overflow-hidden rounded-[22px] transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "#ffffff",
                      border: "1px solid rgba(212,160,23,0.16)",
                      boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
                    }}
                  >
                    <div className="relative">
                      <div className="aspect-[3/4] overflow-hidden bg-[#f5f1e8]">
                        <img
                          src={item.coverImage}
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                      </div>

                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(0,0,0,0.00) 45%, rgba(12,26,14,0.55) 100%)",
                        }}
                      />

                      <div
                        className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.22em] font-semibold"
                        style={{
                          background: "rgba(255,255,255,0.94)",
                          color: "#1b5e20",
                          border: "1px solid rgba(212,160,23,0.18)",
                        }}
                      >
                        Gallery
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3
                          className="text-lg sm:text-xl font-bold font-['Playfair_Display'] leading-tight"
                          style={{ color: "#ffffff" }}
                        >
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {selectedCard && selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black"
          onClick={closeModal}
        >
          <div
            className="relative h-full w-full flex items-center justify-center px-3 py-4 sm:px-6 sm:py-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 z-30 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-105"
              style={{
                width: "48px",
                height: "48px",
                background: "rgba(255,255,255,0.10)",
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 0 0 rgba(45,154,71,0)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 24px rgba(45,154,71,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 0 rgba(45,154,71,0)";
              }}
              aria-label="Close image"
            >
              <span className="text-2xl leading-none">×</span>
            </button>

            {selectedCard.images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-105"
                  style={{
                    width: "42px",
                    height: "42px",
                    background: "rgba(255,255,255,0.10)",
                    color: "#ffffff",
                    border: "1px solid rgba(255,255,255,0.12)",
                    boxShadow: "0 0 0 rgba(45,154,71,0)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 22px rgba(45,154,71,0.32)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 0 rgba(45,154,71,0)";
                  }}
                  aria-label="Previous image"
                >
                  <span className="text-xl leading-none">‹</span>
                </button>

                <button
                  type="button"
                  onClick={showNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-105"
                  style={{
                    width: "42px",
                    height: "42px",
                    background: "rgba(255,255,255,0.10)",
                    color: "#ffffff",
                    border: "1px solid rgba(255,255,255,0.12)",
                    boxShadow: "0 0 0 rgba(45,154,71,0)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 22px rgba(45,154,71,0.32)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 0 rgba(45,154,71,0)";
                  }}
                  aria-label="Next image"
                >
                  <span className="text-xl leading-none">›</span>
                </button>
              </>
            )}

            <div className="relative w-full max-w-6xl flex items-center justify-center">
              <div className="overflow-hidden rounded-[24px] bg-black shadow-2xl relative">
                <img
                  src={selectedImage}
                  alt={selectedCard.title}
                  className="block max-w-full max-h-[85vh] w-auto h-auto object-contain bg-black"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}