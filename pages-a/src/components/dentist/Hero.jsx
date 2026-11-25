import { Smile, ShieldCheck, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl"
        style={{ background: 'rgba(205,232,255,0.6)' }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-3xl"
        style={{ background: 'rgba(255,217,192,0.6)' }}
      />

      <div className="relative max-w-6xl mx-auto px-5 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span
            className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm"
            style={{ color: '#0E7C86' }}
          >
            <ShieldCheck size={16} /> Trusted by 2,000+ families
          </span>

          <h1
            className="mt-6 text-4xl md:text-6xl font-bold leading-tight"
            style={{ fontFamily: "'Fraunces', serif", color: '#0B2E3B' }}
          >
            Gentle dental care for{' '}
            <span style={{ color: '#0E7C86' }}>little smiles</span>.
          </h1>

          <p className="mt-5 text-lg max-w-md" style={{ color: 'rgba(11,46,59,0.7)' }}>
            A calm, playful, and safe dental experience built just for children.
            From first check-ups to cavity care — we make visits fun.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#booking"
              className="text-white px-7 py-3 rounded-full font-semibold transition shadow hover:opacity-90"
              style={{ background: '#0E7C86' }}
            >
              Book an Appointment
            </a>
            <a
              href="#services"
              className="bg-white px-7 py-3 rounded-full font-semibold border border-black/10 transition hover:border-teal-600"
              style={{ color: '#0B2E3B' }}
            >
              Explore Services
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm" style={{ color: 'rgba(11,46,59,0.7)' }}>
            <div className="flex items-center gap-2">
              <Smile size={16} style={{ color: '#FF8A7A' }} /> Kid-friendly
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} style={{ color: '#0E7C86' }} /> Pain-free
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-black/5">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="p-3 rounded-full"
                style={{ background: '#D4F1E8', color: '#0E7C86' }}
              >
                <Heart size={22} />
              </div>
              <div>
                <p className="font-semibold" style={{ color: '#0B2E3B' }}>First Visit?</p>
                <p className="text-sm" style={{ color: 'rgba(11,46,59,0.6)' }}>We make it magical.</p>
              </div>
            </div>
            <ul className="space-y-3 text-sm" style={{ color: 'rgba(11,46,59,0.8)' }}>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full" style={{ background: '#FF8A7A' }} /> Free first consultation
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full" style={{ background: '#0E7C86' }} /> Playful waiting area
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full" style={{ background: '#0B2E3B' }} /> Certified pediatric dentists
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}