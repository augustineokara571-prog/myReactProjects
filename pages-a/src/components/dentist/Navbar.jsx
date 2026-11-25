import { useState } from 'react';
import { Smile, Menu, X } from 'lucide-react';

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
      style={{ background: 'rgba(255,247,240,0.9)' }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
        <a href="#home" className="flex items-center gap-2 group">
          <span
            className="text-white p-2 rounded-full group-hover:rotate-6 transition"
            style={{ background: '#0E7C86' }}
          >
            <Smile size={18} />
          </span>
          <span
            className="text-xl font-bold"
            style={{ fontFamily: "'Fraunces', serif", color: '#0B2E3B' }}
          >
            Little Smiles
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-semibold transition hover:opacity-70"
              style={{ color: '#0B2E3B' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#booking"
            className="text-white px-5 py-2.5 rounded-full font-semibold transition hover:opacity-90 shadow-sm"
            style={{ background: '#FF8A7A' }}
          >
            Book a Visit
          </a>
        </nav>

        <button
          className="md:hidden text-2xl"
          style={{ color: '#0B2E3B' }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-5 pb-5 flex flex-col gap-3" style={{ background: '#FFF7F0' }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 font-semibold border-b border-black/10"
              style={{ color: '#0B2E3B' }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}