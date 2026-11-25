import { PartyPopper, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '2347039668017';
const WHATSAPP_LINK =
  `https://wa.me/${WHATSAPP_NUMBER}?text=` +
  encodeURIComponent('Hello! I would like to know more about your event planning services.');

export default function Footer() {
  return (
    <footer style={{ background: '#1F1235', color: 'white' }}>
      <div className="max-w-6xl mx-auto px-5 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-full" style={{ background: '#6D28D9' }}>
              <PartyPopper size={18} />
            </span>
            <span className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              Lumière Events
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Designing unforgettable moments — one celebration at a time.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
            <li><a href="#services" className="hover:text-purple-300">Services</a></li>
            <li><a href="#why-us" className="hover:text-purple-300">Why Us</a></li>
            <li><a href="#testimonials" className="hover:text-purple-300">Testimonials</a></li>
            <li><a href="#booking" className="hover:text-purple-300">Book Now</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
            <li className="flex items-center gap-2"><MapPin size={16} /> 12 Celebration Way, Lagos</li>
            <li className="flex items-center gap-2"><Phone size={16} /> +234 703 966 8017</li>
            <li className="flex items-center gap-2"><Mail size={16} /> hello@lumiere-events.com</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Chat with us</h4>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition hover:opacity-90"
            style={{ background: '#25D366', color: 'white' }}
          >
            <MessageCircle size={18} /> Message us on WhatsApp
          </a>
        </div>
      </div>

      <div
        className="border-t py-5 text-center text-sm"
        style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}
      >
        © {new Date().getFullYear()} Lumière Events. All rights reserved.
      </div>
    </footer>
  );
}