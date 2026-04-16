import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const videos = [
  {
    title: "Customer Mini Vlog",
    username: "@iluvpabie",
    link: "https://www.tiktok.com/@iluvpabie/video/7456400169941208325",
    preview: "/social/video-1.mp4",
  },
  {
    title: "Traditional Foods",
    username: "@mkhulus.on.main",
    link: "https://www.tiktok.com/@mkhulus.on.main/video/7556117226600795409",
    preview: "/social/video-2.mp4",
  },
  {
    title: "Customer Mini Vlog",
    username: "@ms_khundo0",
    link: "https://www.tiktok.com/@ms_khundo0/video/7450188713570733318",
    preview: "/social/video-3.mp4",
  },
  {
    title: "Kota, View & Vibe",
    username: "@mkhulus.on.main",
    link: "https://www.tiktok.com/@mkhulus.on.main/video/7447607489664781574",
    preview: "/social/video-4.mp4",
  },
  {
    title: "Kids Easter Egg Hunt",
    username: "@mkhulus.on.main",
    link: "https://www.tiktok.com/@mkhulus.on.main/video/7355007991365586181",
    preview: "/social/video-5.mp4",
  },
  {
    title: "Ice Cream Date",
    username: "@mkhulus.on.main",
    link: "https://www.tiktok.com/@mkhulus.on.main/video/7553563118299827457",
    preview: "/social/video-6.mp4",
  },
  {
    title: "Kiddies Fun Day",
    username: "@mkhulus.on.main",
    link: "https://www.tiktok.com/@mkhulus.on.main/video/7398427347008998661",
    preview: "/social/video-7.mp4",
  },
  {
    title: "Sunday Jam Sessions",
    username: "@mkhulus.on.main",
    link: "https://www.tiktok.com/@mkhulus.on.main/video/7342605748528090374",
    preview: "/social/video-8.mp4",
  },
  {
    title: "Chillers",
    username: "@mkhulus.on.main",
    link: "https://www.tiktok.com/@mkhulus.on.main/video/7350014583060450566",
    preview: "/social/video-9.mp4",
  },
];

function ReelCard({ video, index, openViewer }) {
  return (
    <Reveal delay={index * 70}>
      <button
        type="button"
        onClick={() => openViewer(index)}
        className="group block w-full text-left"
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
              <video
                src={video.preview}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.00) 45%, rgba(12,26,14,0.50) 100%)",
              }}
            />

            <a
              href={video.link}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="social-tiktok-link absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.22em] font-semibold transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.94)",
                color: "#1b5e20",
                border: "1px solid rgba(212,160,23,0.18)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px) scale(1.05)";
                e.currentTarget.style.background = "#1b5e20";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.boxShadow = "0 0 22px rgba(45,154,71,0.28)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.background = "rgba(255,255,255,0.94)";
                e.currentTarget.style.color = "#1b5e20";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              TikTok
            </a>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="flex items-center justify-center rounded-full border border-white/30 bg-white/18 backdrop-blur-sm"
                style={{
                  width: "56px",
                  height: "56px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
                }}
              >
                <div
                  style={{
                    width: 0,
                    height: 0,
                    marginLeft: "4px",
                    borderTop: "8px solid transparent",
                    borderBottom: "8px solid transparent",
                    borderLeft: "14px solid rgba(255,255,255,0.95)",
                  }}
                />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3
                className="text-lg sm:text-xl font-bold font-['Playfair_Display'] leading-tight"
                style={{ color: "#ffffff" }}
              >
                {video.title}
              </h3>
              <p
                className="mt-1 text-sm"
                style={{ color: "rgba(255,255,255,0.82)" }}
              >
                {video.username}
              </p>
            </div>
          </div>
        </div>
      </button>
    </Reveal>
  );
}

function FullscreenViewer({ video, onClose, onPrev, onNext }) {
  const playerRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    document.body.style.overflow = "hidden";
    window.dispatchEvent(new Event("overlay:open"));
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.dispatchEvent(new Event("overlay:close"));
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.currentTime = 0;
      playerRef.current.play().catch(() => {});
    }
  }, [video]);

  return (
    <div className="fixed inset-0 z-[9999] bg-black" onClick={onClose}>
      <div
        className="relative h-full w-full flex items-center justify-center px-3 py-4 sm:px-6 sm:py-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
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
            e.currentTarget.style.boxShadow = "0 0 24px rgba(45,154,71,0.35)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 0 0 rgba(45,154,71,0)";
          }}
          aria-label="Close viewer"
        >
          <span className="text-2xl leading-none">×</span>
        </button>

        <button
          type="button"
          onClick={onPrev}
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
            e.currentTarget.style.boxShadow = "0 0 22px rgba(45,154,71,0.32)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 0 0 rgba(45,154,71,0)";
          }}
          aria-label="Previous video"
        >
          <span className="text-xl leading-none">‹</span>
        </button>

        <button
          type="button"
          onClick={onNext}
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
            e.currentTarget.style.boxShadow = "0 0 22px rgba(45,154,71,0.32)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 0 0 rgba(45,154,71,0)";
          }}
          aria-label="Next video"
        >
          <span className="text-xl leading-none">›</span>
        </button>

        <div className="relative w-full max-w-[380px] sm:max-w-[430px]">
          <div className="overflow-hidden rounded-[24px] bg-black shadow-2xl relative">
            <video
              ref={playerRef}
              src={video.preview}
              controls
              autoPlay
              playsInline
              className="w-full max-h-[85vh] object-cover bg-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SocialMediaSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const openViewer = (index) => setActiveIndex(index);
  const closeViewer = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  const showNext = () =>
    setActiveIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));

  return (
    <>
      <section
        id="social-media"
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
            <div className="text-center max-w-3xl mx-auto mb-20 relative">
              <p
                className="tracking-[0.35em] uppercase text-xs font-semibold mb-4"
                style={{ color: "#2d9a47" }}
              >
                Social Media
              </p>

              <h2
                className="text-5xl md:text-6xl font-bold mb-2 leading-tight"
                style={{ color: "#0c1a0e" }}
              >
                Follow Us for
              </h2>

              <h2
                className="text-5xl md:text-6xl font-bold italic mb-8 leading-tight"
                style={{ color: "#1b5e20" }}
              >
                Real Moments
              </h2>

              <div className="flex items-center justify-center gap-3 mb-8">
                <div
                  className="h-px w-10"
                  style={{ backgroundColor: "#d4a017" }}
                />
                <span style={{ color: "#d4a017", fontSize: "10px" }}>✦</span>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <ReelCard
                key={video.title + index}
                video={video}
                index={index}
                openViewer={openViewer}
              />
            ))}
          </div>

          <div
            className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-6"
            style={{ borderColor: "rgba(212,160,23,0.18)" }}
          >
            <p
              className="text-xs sm:text-sm uppercase tracking-[0.28em] text-center md:text-left"
              style={{ color: "#9e7d60" }}
            >
              Follow Mkhulu’s On Main online
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1"
                style={{
                  width: "46px",
                  height: "46px",
                  background: "#ffffff",
                  color: "#1b5e20",
                  border: "1px solid rgba(212,160,23,0.22)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
                }}
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://tiktok.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="flex items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1"
                style={{
                  width: "46px",
                  height: "46px",
                  background: "#ffffff",
                  color: "#1b5e20",
                  border: "1px solid rgba(212,160,23,0.22)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
                }}
              >
                <SiTiktok size={18} />
              </a>

              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1"
                style={{
                  width: "46px",
                  height: "46px",
                  background: "#ffffff",
                  color: "#1b5e20",
                  border: "1px solid rgba(212,160,23,0.22)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
                }}
              >
                <FaFacebookF size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {activeIndex !== null && (
        <FullscreenViewer
          video={videos[activeIndex]}
          onClose={closeViewer}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </>
  );
}