import { useState } from 'react';
import { PartyPopper, Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Book', href: '#booking' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur border-b border-black/10"
      style={{ background: 'rgba(250,247,242,0.9)' }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
        <a href="#home" className="flex items-center gap-2 group">
          <span
            className="text-white p-2 rounded-full group-hover:rotate-6 transition"
            style={{ background: '#6D28D9' }}
          >
            <PartyPopper size={18} />
          </span>
          <span
            className="text-xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif", color: '#1F1235' }}
          >
            Lumière Events
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-semibold transition hover:opacity-70"
              style={{ color: '#1F1235' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#booking"
            className="text-white px-5 py-2.5 rounded-full font-semibold transition hover:opacity-90 shadow-sm"
            style={{ background: '#D4A574' }}
          >
            Plan My Event
          </a>
        </nav>

        <button
          className="md:hidden text-2xl"
          style={{ color: '#1F1235' }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-5 pb-5 flex flex-col gap-3" style={{ background: '#FAF7F2' }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 font-semibold border-b border-black/10"
              style={{ color: '#1F1235' }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}