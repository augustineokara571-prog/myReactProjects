import { PartyPopper, Sparkles, CalendarHeart } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl"
        style={{ background: 'rgba(109,40,217,0.18)' }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-3xl"
        style={{ background: 'rgba(212,165,116,0.28)' }}
      />

      <div className="relative max-w-6xl mx-auto px-5 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span
            className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm"
            style={{ color: '#6D28D9' }}
          >
            <Sparkles size={16} /> 500+ unforgettable events planned
          </span>

          <h1
            className="mt-6 text-4xl md:text-6xl font-bold leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", color: '#1F1235' }}
          >
            Beautiful events,{' '}
            <span style={{ color: '#6D28D9' }}>effortlessly planned</span>.
          </h1>

          <p className="mt-5 text-lg max-w-md" style={{ color: 'rgba(31,18,53,0.7)' }}>
            From intimate birthdays to grand weddings — we design, coordinate,
            and deliver events that leave everyone speechless.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#booking"
              className="text-white px-7 py-3 rounded-full font-semibold transition shadow hover:opacity-90"
              style={{ background: '#6D28D9' }}
            >
              Start Planning
            </a>
            <a
              href="#services"
              className="bg-white px-7 py-3 rounded-full font-semibold border border-black/10 transition hover:border-purple-600"
              style={{ color: '#1F1235' }}
            >
              View Services
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm" style={{ color: 'rgba(31,18,53,0.7)' }}>
            <div className="flex items-center gap-2">
              <PartyPopper size={16} style={{ color: '#D4A574' }} /> Stress-free
            </div>
            <div className="flex items-center gap-2">
              <CalendarHeart size={16} style={{ color: '#6D28D9' }} /> On schedule
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-black/5">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="p-3 rounded-full"
                style={{ background: 'rgba(212,165,116,0.25)', color: '#6D28D9' }}
              >
                <CalendarHeart size={22} />
              </div>
              <div>
                <p className="font-semibold" style={{ color: '#1F1235' }}>First consultation?</p>
                <p className="text-sm" style={{ color: 'rgba(31,18,53,0.6)' }}>It's on us.</p>
              </div>
            </div>
            <ul className="space-y-3 text-sm" style={{ color: 'rgba(31,18,53,0.8)' }}>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full" style={{ background: '#D4A574' }} /> Free design mockup
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full" style={{ background: '#6D28D9' }} /> Full event coordination
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full" style={{ background: '#1F1235' }} /> Vetted vendor network
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}