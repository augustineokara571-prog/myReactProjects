import { Smile, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '2347039668017';
const WHATSAPP_LINK =
  `https://wa.me/${WHATSAPP_NUMBER}?text=` +
  encodeURIComponent('Hello! I would like to know more about your children dental services.');

export default function Footer() {
  return (
    <footer style={{ background: '#0B2E3B', color: 'white' }}>
      <div className="max-w-6xl mx-auto px-5 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-full" style={{ background: '#0E7C86' }}>
              <Smile size={18} />
            </span>
            <span className="text-xl font-bold" style={{ fontFamily: "'Fraunces', serif" }}>
              Little Smiles
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Gentle, playful dental care for children — every smile matters.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
            <li><a href="#services" className="hover:text-teal-400">Services</a></li>
            <li><a href="#why-us" className="hover:text-teal-400">Why Us</a></li>
            <li><a href="#testimonials" className="hover:text-teal-400">Testimonials</a></li>
            <li><a href="#booking" className="hover:text-teal-400">Book Now</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
            <li className="flex items-center gap-2"><MapPin size={16} /> 12 Smile Avenue, Lagos</li>
            <li className="flex items-center gap-2"><Phone size={16} /> +234 703 966 8017</li>
            <li className="flex items-center gap-2"><Mail size={16} /> hello@littlesmiles.com</li>
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

      <div className="border-t py-5 text-center text-sm" style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}>
        © {new Date().getFullYear()} Little Smiles Dental. All rights reserved.
      </div>
    </footer>
  );
}