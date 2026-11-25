import Navbar from "../components/dentist/Navbar";
import Hero from "../components/dentist/Hero";
import Services from "../components/dentist/Services";
import WhyChooseUs from "../components/dentist/WhyChooseUs";
import BookingForm from "../components/dentist/BookingForm";
import Testimonials from "../components/dentist/Testimonials";
import Footer from "../components/dentist/Footer";
import WhatsAppButton from "../components/dentist/WhatsAppButton";

export default function Dentist() {
  return (
    <div className="min-h-screen" style={{ background: '#FFF7F0', color: '#0B2E3B', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <BookingForm />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}