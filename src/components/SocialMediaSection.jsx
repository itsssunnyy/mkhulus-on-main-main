import { useState } from "react";

export default function SocialMediaSection() {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    "/social/video-1.mp4",
    "/social/video-2.mp4",
    "/social/video-3.mp4",
    "/social/video-4.mp4",
    "/social/video-5.mp4",
    "/social/video-6.mp4",
    "/social/video-7.mp4",
  ];

  return (
    <section className="py-20 bg-[#f6f1e7]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-[#b88917] mb-2">
            Social Media
          </p>
          <h2 className="text-4xl font-serif text-[#0f2a1d]">
            Real Moments at Mkhulu’s
          </h2>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => setActiveVideo(video)}
            >
              <video
                src={video}
                className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-300"
                muted
                loop
                autoPlay
                playsInline
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
            </div>
          ))}
        </div>
      </div>

      {/* FULLSCREEN VIEWER */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          
          {/* Close Button */}
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 text-white text-3xl font-bold"
          >
            ✕
          </button>

          {/* Video */}
          <video
            src={activeVideo}
            controls
            autoPlay
            className="max-w-[90%] max-h-[90%] rounded-lg"
          />
        </div>
      )}
    </section>
  );
}
