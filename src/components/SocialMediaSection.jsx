export default function SocialMediaSection() {
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
    <section className="py-16 bg-[#f6f1e7]">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-3xl font-serif text-center mb-10 text-[#0f2a1d]">
          Social Media Moments
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {videos.map((video, index) => (
            <video
              key={index}
              src={video}
              className="w-full h-[250px] object-cover rounded-lg cursor-pointer"
              muted
              loop
              autoPlay
              playsInline
            />
          ))}
        </div>

      </div>
    </section>
  );
}
