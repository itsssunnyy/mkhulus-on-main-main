import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import Events from "./components/Events";
import FAQ from "./components/FAQ";
import LeadCapture from "./components/LeadCapture";
import CustomCampaign from "./components/CustomCampaign";
import Contact from "./components/Contact";

import SocialMediaPage from "./pages/SocialMediaPage";

function Home() {
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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/social-media" element={<SocialMediaPage />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </Router>
  );
}