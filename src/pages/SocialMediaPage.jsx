import { useRef } from "react";

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
    category: "Customer Experience",
  },
  {
    title: "Kota, View & Vibe",
    username: "@mkhulus.on.main",
    link: "https://www.tiktok.com/@mkhulus.on.main/video/7447607489664781574",
    preview: "/social/video-4.mp4",
    category: "Vibe & Atmosphere",
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

function VideoCard({ video }) {
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
    <a
      href={video.link}
      target="_blank"
      rel="noreferrer"
      className="group overflow-hidden rounded-[28px] bg-white shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(184,137,23,0.25)]"
      onMouseEnter={playPreview}
      onMouseLeave={stopPreview}
      onTouchStart={playPreview}
      onTouchEnd={stopPreview}
    >
      <div className="relative aspect-[9/16] overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={video.preview}
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent transition duration-300 group-hover:from-black/40" />

        <div className="absolute top-4 left-4 z-10">
          <span className="rounded-full bg-[#b88917] px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white">
            {video.category}
          </span>
        </div>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center transition duration-300 group-hover:opacity-0">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-xl">
            <span className="ml-1 text-3xl text-[#0f2a1d]">▶</span>
          </div>
        </div>
      </div>

      <div className="p-5">
        <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#b88917]">
          TikTok
        </p>

        <h2 className="mb-1 font-serif text-2xl text-[#0f2a1d]">
          {video.title}
        </h2>

        <p className="mb-4 text-sm text-[#666]">{video.username}</p>

        <span className="inline-flex items-center rounded-full border border-[#d8c7a0] px-4 py-2 text-sm font-medium text-[#0f2a1d] transition duration-300 group-hover:border-[#b88917] group-hover:bg-[#b88917] group-hover:text-white">
          Watch on TikTok
        </span>
      </div>
    </a>
  );
}

export default function SocialMediaPage() {
  return (
    <main className="min-h-screen bg-[#f6f1e7] px-6 pt-32 pb-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#b88917]">
            Social Media
          </p>

          <h1 className="font-serif text-4xl leading-tight text-[#0f2a1d] md:text-6xl">
            Follow Us for Real Moments
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#4a4a4a]">
            Real food. Real people. Real kasi moments. From customer vlogs to
            family events and everyday flavour at Mkhulu’s On Main.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {videos.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </div>
      </div>
    </main>
  );
}
