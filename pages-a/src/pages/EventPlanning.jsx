import Navbar from "../components/event/Navbar";
import Hero from "../components/event/Hero";
import Services from "../components/event/Services";
import WhyChooseUs from "../components/event/WhyChooseUs";
import BookingForm from "../components/event/BookingForm";
import Testimonials from "../components/event/Testimonials";
import Footer from "../components/event/Footer";
import WhatsAppButton from "../components/event/WhatsAppButton";

export default function EventPlanning() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: '#FAF7F2',
        color: '#1F1235',
        fontFamily: "'Inter', sans-serif",
      }}
    >
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