import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const galleryItems = [
  {
    title: "Head Chef",
    description:
      "The hands behind the flavour. Every dish is crafted with precision, consistency, and a deep understanding of kasi food culture.",
    coverImage: "/gallery/chef-1.jpg",
    images: [
      "/gallery/chef-1.jpg",
      // add more later, for example:
      // "/gallery/chef-2.jpg",
      // "/gallery/chef-3.jpg",
    ],
  },
  {
    title: "Platters & Variety",
    description:
      "Built for sharing and satisfaction, our platters bring variety, bold flavour, and the perfect group dining experience.",
    coverImage: "/gallery/platter-1.jpg",
    images: [
      "/gallery/platter-1.jpg",
      // "/gallery/platter-2.jpg",
      // "/gallery/platter-3.jpg",
    ],
  },
  {
    title: "Hosted Moments",
    description:
      "Events, celebrations, and gatherings that turn the restaurant into an experience.",
    coverImage: "/gallery/events-1.jpg",
    images: [
      "/gallery/events-1.jpg",
      // "/gallery/events-2.jpg",
      // "/gallery/events-3.jpg",
    ],
  },
  {
    title: "Kiddies Fun Day",
    description:
      "Family-friendly experiences that create joy for the kids while parents enjoy a relaxed and welcoming atmosphere.",
    coverImage: "/gallery/kids-1.jpg",
    images: [
      "/gallery/kids-1.jpg",
      // "/gallery/kids-2.jpg",
      // "/gallery/kids-3.jpg",
    ],
  },
  {
    title: "Drinks & Pairings",
    description:
      "Refreshments and add-ons that complete the full Mkhulu’s On Main visit.",
    coverImage: "/gallery/drinks-1.jpg",
    images: [
      "/gallery/drinks-1.jpg",
      // "/gallery/drinks-2.jpg",
      // "/gallery/drinks-3.jpg",
    ],
  },
  {
    title: "Traditional Foods",
    description:
      "Authentic kasi flavours served with pride, delivering comfort, culture, and real home-style satisfaction.",
    coverImage: "/gallery/traditionalfood-1.jpg",
    images: [
      "/gallery/traditionalfood-1.jpg",
      // "/gallery/traditionalfood-2.jpg",
      // "/gallery/traditionalfood-3.jpg",
    ],
  },
  {
    title: "Healthy Meals",
    description:
      "Balanced, fresh, and nourishing options for guests who want flavour without compromising their lifestyle.",
    coverImage: "/gallery/healthymeals-1.jpg",
    images: [
      "/gallery/healthymeals-1.jpg",
      // "/gallery/healthymeals-2.jpg",
      // "/gallery/healthymeals-3.jpg",
    ],
  },
  {
    title: "Special Guests",
    description:
      "Real people, real moments, and real enjoyment — the heart of what makes Mkhulu’s feel alive.",
    coverImage: "/gallery/guests-1.jpg",
    images: [
      "/gallery/guests-1.jpg",
      // "/gallery/guests-2.jpg",
      // "/gallery/guests-3.jpg",
    ],
  },
  {
    title: "Entrance View & More",
    description:
      "Your first impression sets the tone — a welcoming space that invites you into the full Mkhulu’s experience.",
    coverImage: "/gallery/exterior-1.jpg",
    images: [
      "/gallery/exterior-1.jpg",
      // "/gallery/exterior-2.jpg",
      // "/gallery/exterior-3.jpg",
    ],
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
            <div className="text-center max-w-3xl mx-auto mb-16">
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

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <div
                  className="group rounded-[24px] overflow-hidden transition-all duration-500 hover:-translate-y-2"
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(212,160,23,0.18)",
                    boxShadow: "0 0 0 rgba(61,124,47,0)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 18px 35px rgba(61,124,47,0.18)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 0 rgba(61,124,47,0)";
                  }}
                >
                  <button
                    type="button"
                    onClick={() => openModal(index)}
                    className="block w-full text-left"
                    aria-label={`Open ${item.title}`}
                  >
                    <div className="relative bg-[#f5f1e8]">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={item.coverImage}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                      </div>

                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(0,0,0,0.00) 35%, rgba(12,26,14,0.42) 100%)",
                        }}
                      />

                      <div
                        className="absolute top-4 left-4 px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.25em] font-semibold"
                        style={{
                          background: "rgba(255,255,255,0.92)",
                          color: "#1b5e20",
                          border: "1px solid rgba(212,160,23,0.18)",
                          backdropFilter: "blur(8px)",
                        }}
                      >
                        {item.title}
                      </div>
                    </div>
                  </button>

                  <div className="p-6">
                    <h3
                      className="text-2xl font-bold mb-3 font-['Playfair_Display']"
                      style={{ color: "#0c1a0e" }}
                    >
                      {item.title}
                    </h3>

                    <div
                      className="w-8 h-px mb-4"
                      style={{ backgroundColor: "#d4a017" }}
                    />

                    <p
                      className="text-sm leading-8"
                      style={{ color: "#4a3828" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <p
            className="text-center text-xs mt-8"
            style={{ color: "#9e7d60" }}
          >
            Tap any image to view that gallery.
          </p>
        </div>
      </section>

      {selectedCard && selectedImage && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center px-3 sm:px-6 py-6"
          style={{ background: "rgba(6, 13, 7, 0.9)" }}
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-5xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute z-30 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
              style={{
                top: "-12px",
                right: "-2px",
                width: "40px",
                height: "40px",
                background: "rgba(12,26,14,0.92)",
                color: "#d4a017",
                border: "1px solid rgba(212,160,23,0.34)",
                boxShadow: "0 10px 22px rgba(0,0,0,0.3)",
              }}
              aria-label="Close image"
            >
              <span className="text-xl leading-none">×</span>
            </button>

            {selectedCard.images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPrev}
                  className="absolute left-1 sm:left-3 z-20 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
                  style={{
                    width: "42px",
                    height: "42px",
                    background: "rgba(12,26,14,0.82)",
                    color: "#d4a017",
                    border: "1px solid rgba(212,160,23,0.28)",
                    boxShadow: "0 10px 22px rgba(0,0,0,0.24)",
                  }}
                  aria-label="Previous image"
                >
                  <span className="text-xl leading-none">‹</span>
                </button>

                <button
                  type="button"
                  onClick={showNext}
                  className="absolute right-1 sm:right-3 z-20 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
                  style={{
                    width: "42px",
                    height: "42px",
                    background: "rgba(12,26,14,0.82)",
                    color: "#d4a017",
                    border: "1px solid rgba(212,160,23,0.28)",
                    boxShadow: "0 10px 22px rgba(0,0,0,0.24)",
                  }}
                  aria-label="Next image"
                >
                  <span className="text-xl leading-none">›</span>
                </button>
              </>
            )}

            <div
              className="w-full rounded-[22px] overflow-hidden"
              style={{
                background: "#0c1a0e",
                border: "1px solid rgba(212,160,23,0.22)",
                boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
              }}
            >
              <img
                src={selectedImage}
                alt={selectedCard.title}
                className="w-full h-auto max-h-[76vh] object-contain"
              />

              <div
                className="px-5 sm:px-7 py-4 text-center"
                style={{ background: "#fffdf8" }}
              >
                <h3
                  className="text-2xl sm:text-3xl font-bold font-['Playfair_Display']"
                  style={{ color: "#0c1a0e" }}
                >
                  {selectedCard.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
