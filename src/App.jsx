import { useEffect } from "react";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Menu from "./components/Menu";
import ServicesHub from "./components/ServicesHub";
import BookingFlow from "./components/BookingFlow";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
import SocialMediaSection from "./components/SocialMediaSection";
import Events from "./components/Events";
import FAQ from "./components/FAQ";
import LeadCapture from "./components/LeadCapture";
import CustomCampaign from "./components/CustomCampaign";
import Contact from "./components/Contact";

import SocialMediaPage from "./pages/SocialMediaPage";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#menu") {
      const menuSection = document.getElementById("menu");

      if (menuSection) {
        setTimeout(() => {
          menuSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80);
      }
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <About />
      <Portfolio />
      <Menu />
      <ServicesHub />
      <BookingFlow />
      <Reviews />
      <Gallery />
      <SocialMediaSection />
      <Events />
      <FAQ />
      <LeadCapture />
      <CustomCampaign />
      <Contact />
    </main>
  );
}

export default function App() {
  return (
    <Router>
       <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/social-media" element={<SocialMediaPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </Router>
  );
}