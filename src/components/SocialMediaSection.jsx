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
    category: "Customer Experience",
  },
  {
    title: "Traditional Foods",
    username: "@mkhulus.on.main",
    link: "https://www.tiktok.com/@mkhulus.on.main/video/7556117226600795409",
    preview: "/social/video-2.mp4",
    category: "Food Showcase",
  },
  {
    title: "Customer Mini Vlog",
    username: "@ms_khundo0",
    link: "https://www.tiktok.com/@ms_khundo0/video/7450188713570733318",
    preview: "/social/video-3.mp4",
    category: "Guest Moments",
  },
  {
    title: "Kota, View & Vibe",
    username: "@mkhulus.on.main",
    link: "https://www.tiktok.com/@mkhulus.on.main/video/7447607489664781574",
    preview: "/social/video-4.mp4",
    category: "Atmosphere",
  },
  {
    title: "Kids Easter Egg Hunt",
    username: "@mkhulus.on.main",
    link: "https://www.tiktok.com/@mkhulus.on.main/video/7355007991365586181",
    preview: "/social/video-5.mp4",
    category: "Family Events",
  },
  {
    title: "Ice Cream Date",
    username: "@mkhulus.on.main",
    link: "https://www.tiktok.com/@mkhulus.on.main/video/7553563118299827457",
    preview: "/social/video-6.mp4",
    category: "Desserts & Moments",
  },
  {
    title: "Kiddies Fun Day",
    username: "@mkhulus.on.main",
    link: "https://www.tiktok.com/@mkhulus.on.main/video/7398427347008998661",
    preview: "/social/video-7.mp4",
    category: "Community & Family",
  },
];

function VideoCard({ video, index, openViewer }) {
  const videoRef = useRef(null);

  const playPreview = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const stopPreview = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <Reveal delay={index * 90}>
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
          e.currentTarget.style.boxShadow = "0 0 0 rgba(61,124,47,0)";
        }}
      >
        <button
          type="button"
          onClick={() => openViewer(index)}
          onMouseEnter={playPreview}
          onMouseLeave={stopPreview}
          onTouchStart={playPreview}
          onTouchEnd={stopPreview}
          className="block w-full text-left"
          aria-label={`Open ${video.title}`}
        >
          <div className="relative bg-[#f5f1e8]">
            <div className="h-[230px] sm:h-[280px] md:h-[340px] overflow-hidden">
              <video
                ref={videoRef}
                src={video.preview}
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>

            <div
              className="absolute inset-0 opacity-100 transition-opacity duration-400"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.00) 30%, rgba(12,26,14,0.42) 100%)",
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
              {video.category}
            </div>

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
              <div
                className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
                }}
              >
                <span
                  className="ml-1 text-2xl sm:text-3xl"
                  style={{ color: "#0c1a0e" }}
                >
                  ▶
                </span>
              </div>
            </div>
          </div>
        </button>

        <div className="p-5 sm:p-6">
          <span
            className="inline-flex px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.25em] font-semibold mb-4"
            style={{
              background: "rgba(45,154,71,0.08)",
              color: "#2d9a47",
              border: "1px solid rgba(45,154,71,0.15)",
            }}
          >
            TikTok
          </span>

          <h3
            className="text-xl sm:text-2xl font-bold mb-3 font-['Playfair_Display']"
            style={{ color: "#0c1a0e" }}
          >
            {video.title}
          </h3>

          <div
            className="w-8 h-px mb-4"
            style={{ backgroundColor: "#d4a017" }}
          />

          <p className="text-sm mb-5" style={{ color: "#1b5e20" }}>
            {video.username}
          </p>

          <span
            className="inline-flex items-center gap-3 px-5 sm:px-6 py-3 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #1e6b30, #2d9a47)",
              color: "#ffffff",
              boxShadow: "0 10px 26px rgba(45,154,71,0.22)",
            }}
          >
            View Fullscreen
            <span>→</span>
          </span>
        </div>
      </div>
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
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center px-3 sm:px-6 py-6"
      style={{ background: "rgba(6, 13, 7, 0.9)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
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
          aria-label="Close viewer"
        >
          <span className="text-xl leading-none">×</span>
        </button>

        <button
          type="button"
          onClick={onPrev}
          className="absolute left-1 sm:left-3 z-20 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
          style={{
            width: "42px",
            height: "42px",
            background: "rgba(12,26,14,0.82)",
            color: "#d4a017",
            border: "1px solid rgba(212,160,23,0.28)",
            boxShadow: "0 10px 22px rgba(0,0,0,0.24)",
          }}
          aria-label="Previous video"
        >
          <span className="text-xl leading-none">‹</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          className="absolute right-1 sm:right-3 z-20 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
          style={{
            width: "42px",
            height: "42px",
            background: "rgba(12,26,14,0.82)",
            color: "#d4a017",
            border: "1px solid rgba(212,160,23,0.28)",
            boxShadow: "0 10px 22px rgba(0,0,0,0.24)",
          }}
          aria-label="Next video"
        >
          <span className="text-xl leading-none">›</span>
        </button>

        <div
          className="w-full rounded-[22px] overflow-hidden"
          style={{
            background: "#0c1a0e",
            border: "1px solid rgba(212,160,23,0.22)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
          }}
        >
          <div className="grid lg:grid-cols-[420px_1fr]">
            <div className="bg-black">
              <video
                ref={playerRef}
                src={video.preview}
                controls
                autoPlay
                playsInline
                className="w-full h-full max-h-[76vh] object-cover"
              />
            </div>

            <div
              className="px-5 sm:px-7 py-6 sm:py-8"
              style={{ background: "#fffdf8" }}
            >
              <p
                className="tracking-[0.35em] uppercase text-xs font-semibold mb-4"
                style={{ color: "#2d9a47" }}
              >
                Social Media
              </p>

              <h3
                className="text-3xl sm:text-4xl font-bold font-['Playfair_Display']"
                style={{ color: "#0c1a0e" }}
              >
                {video.title}
              </h3>

              <div
                className="w-10 h-px my-5"
                style={{ backgroundColor: "#d4a017" }}
              />

              <p className="text-sm mb-6" style={{ color: "#1b5e20" }}>
                {video.username}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={video.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 active:scale-95"
                  style={{
                    background: "linear-gradient(135deg, #1e6b30, #2d9a47)",
                    color: "#ffffff",
                    boxShadow: "0 10px 26px rgba(45,154,71,0.22)",
                  }}
                >
                  Open on TikTok
                  <span>→</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 active:scale-95"
                  style={{
                    background: "#fff",
                    color: "#0c1a0e",
                    border: "1px solid rgba(212,160,23,0.25)",
                    boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
                  }}
                >
                  Close Viewer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SocialMediaSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const openViewer = (index) => {
    setActiveIndex(index);
  };

  const closeViewer = () => {
    setActiveIndex(null);
  };

  const showPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const showNext = () => {
    setActiveIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <section
        id="social-media"
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
                Social Media
              </p>

              <h2
                className="text-4xl md:text-6xl font-bold mb-2 leading-tight"
                style={{ color: "#0c1a0e" }}
              >
                Follow Us for
              </h2>

              <h2
                className="text-4xl md:text-6xl font-bold italic mb-8 leading-tight"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {videos.map((video, index) => (
              <VideoCard
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