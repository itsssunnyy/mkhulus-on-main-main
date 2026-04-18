import { useEffect, useState } from "react";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  useEffect(() => {
    const updateSectionVisibility = () => {
      const aboutSection = document.getElementById("about");
      if (!aboutSection) return;

      const aboutTop = aboutSection.getBoundingClientRect().top;
      setIsVisible(aboutTop <= window.innerHeight * 0.75);
    };

    const handleOpen = () => setIsOverlayOpen(true);
    const handleClose = () => setIsOverlayOpen(false);

    updateSectionVisibility();

    window.addEventListener("scroll", updateSectionVisibility);
    window.addEventListener("resize", updateSectionVisibility);
    window.addEventListener("overlay:open", handleOpen);
    window.addEventListener("overlay:close", handleClose);

    return () => {
      window.removeEventListener("scroll", updateSectionVisibility);
      window.removeEventListener("resize", updateSectionVisibility);
      window.removeEventListener("overlay:open", handleOpen);
      window.removeEventListener("overlay:close", handleClose);
    };
  }, []);

  const showButton = isVisible && !isOverlayOpen;

  return (
    <a
      href="https://wa.me/c/27730222523"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[120] transition-all duration-300 ${
        showButton
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-4 scale-95 pointer-events-none"
      }`}
      style={{
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <div
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          background: "linear-gradient(135deg, #1e6b30, #25D366)",
          boxShadow: "0 12px 30px rgba(37,211,102,0.32)",
          border: "1px solid rgba(255,255,255,0.18)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-3px) scale(1.06)";
          e.currentTarget.style.boxShadow =
            "0 18px 42px rgba(37,211,102,0.44)";
          e.currentTarget.style.filter = "brightness(1.06)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow =
            "0 12px 30px rgba(37,211,102,0.32)";
          e.currentTarget.style.filter = "brightness(1)";
        }}
      >
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8"
          fill="white"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.82 11.82 0 0012.06 0C5.5 0 .18 5.3.18 11.84c0 2.08.54 4.1 1.56 5.88L0 24l6.47-1.7a11.86 11.86 0 005.59 1.42h.01c6.55 0 11.88-5.3 11.88-11.84 0-3.16-1.23-6.13-3.43-8.4zm-8.46 18.2h-.01a9.9 9.9 0 01-5.04-1.38l-.36-.21-3.84 1.01 1.03-3.74-.24-.38a9.8 9.8 0 01-1.52-5.14C2.08 6.34 6.56 1.9 12.06 1.9c2.64 0 5.12 1.02 6.98 2.88a9.77 9.77 0 012.9 6.96c0 5.49-4.48 9.94-9.88 9.94zm5.42-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.16-.17.2-.35.22-.65.08-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.53.08-.8.38-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.06 2.9 1.2 3.1.15.2 2.08 3.17 5.04 4.44.7.3 1.24.48 1.66.61.7.22 1.33.19 1.83.11.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
        </svg>
      </div>
    </a>
  );
}