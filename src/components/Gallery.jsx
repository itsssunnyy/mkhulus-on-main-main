import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const galleryItems = [
  {
    title: "Head Chef",
    description:
      "The hands behind the flavour. Every dish is crafted with precision, consistency, and a deep understanding of kasi food culture.",
    coverImage: "/gallery/chef-1.jpg",
    images: ["/gallery/chef-1.jpg"],
  },
  {
    title: "Platters & Variety",
    description:
      "Built for sharing and satisfaction, our platters bring variety, bold flavour, and the perfect group dining experience.",
    coverImage: "/gallery/platter-1.jpg",
    images: ["/gallery/platter-1.jpg"],
  },
  {
    title: "Hosted Moments",
    description:
      "Events, celebrations, and gatherings that turn the restaurant into an experience.",
    coverImage: "/gallery/events-1.jpg",
    images: ["/gallery/events-1.jpg"],
  },
  {
    title: "Kiddies Fun Day",
    description:
      "Family-friendly experiences that create joy for the kids while parents enjoy a relaxed and welcoming atmosphere.",
    coverImage: "/gallery/kids-1.jpg",
    images: ["/gallery/kids-1.jpg"],
  },
  {
    title: "Drinks & Pairings",
    description:
      "Refreshments and add-ons that complete the full Mkhulu’s On Main visit.",
    coverImage: "/gallery/drinks-1.jpg",
    images: ["/gallery/drinks-1.jpg"],
  },
  {
    title: "Traditional Foods",
    description:
      "Authentic kasi flavours served with pride, delivering comfort, culture, and real home-style satisfaction.",
    coverImage: "/gallery/traditionalfood-1.jpg",
    images: ["/gallery/traditionalfood-1.jpg"],
  },
  {
    title: "Healthy Meals",
    description:
      "Balanced, fresh, and nourishing options for guests who want flavour without compromising their lifestyle.",
    coverImage: "/gallery/healthymeals-1.jpg",
    images: ["/gallery/healthymeals-1.jpg"],
  },
  {
    title: "Special Guests",
    description:
      "Real people, real moments, and real enjoyment — the heart of what makes Mkhulu’s feel alive.",
    coverImage: "/gallery/guests-1.jpg",
    images: ["/gallery/guests-1.jpg"],
  },
  {
    title: "Entrance View & More",
    description:
      "Your first impression sets the tone — a welcoming space that invites you into the full Mkhulu’s experience.",
    coverImage: "/gallery/exterior-1.jpg",
    images: ["/gallery/exterior-1.jpg"],
  },
];

function GalleryCard({ item, index, openModal }) {
  return (
    <Reveal delay={index * 70}>
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
  );
}

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
        className="py-20 md:py-24 relative overflow-hidden"
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
            <div className="text-center max-w-3xl mx-auto mb-14 relative">
              <p
                className="tracking-[0.35em] uppercase text-xs font-semibold mb-4"
                style={{ color: "#2d9a47" }}
              >
                Gallery
              </p>

              <h2
                className="text-4xl md:text-6xl font-bold mb-2 leading-tight"
                style={{ color: "#0c1a0e" }}
              >
                See The
              </h2>

              <h2
                className="text-4xl md:text-6xl font-bold italic mb-8 leading-tight"
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

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {galleryItems.map((item, index) => (
              <GalleryCard
                key={item.title}
                item={item}
                index={index}
                openModal={openModal}
              />
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