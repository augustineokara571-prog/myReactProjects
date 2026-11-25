import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '2347039668017';
const WHATSAPP_LINK =
  `https://wa.me/${WHATSAPP_NUMBER}?text=` +
  encodeURIComponent('Hello! I would like to plan an event with your team.');

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 text-white px-5 py-3 rounded-full shadow-lg transition hover:opacity-90"
      style={{ background: '#25D366' }}
      aria-label="Contact me on WhatsApp"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline font-semibold">Contact me on WhatsApp</span>
    </a>
  );
}