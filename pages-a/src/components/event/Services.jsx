import { Heart, Cake, Building2, Music, Camera, Sparkles } from 'lucide-react';

const services = [
  { icon: <Heart size={24} />, title: 'Weddings', desc: 'Timeless ceremonies crafted to reflect your love story.' },
  { icon: <Cake size={24} />, title: 'Birthdays', desc: 'Themed parties for all ages — from kids to milestone 50ths.' },
  { icon: <Building2 size={24} />, title: 'Corporate Events', desc: 'Product launches, galas, and team experiences that impress.' },
  { icon: <Music size={24} />, title: 'Concerts & Shows', desc: 'Full production — sound, stage, lights, and talent.' },
  { icon: <Camera size={24} />, title: 'Photo & Content', desc: 'Professional coverage so every moment lives forever.' },
  { icon: <Sparkles size={24} />, title: 'Décor & Styling', desc: 'Bespoke themes, florals, and lighting design.' },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-semibold uppercase text-sm tracking-wider" style={{ color: '#D4A574' }}>
            Our Services
          </p>
          <h2
            className="mt-2 text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif", color: '#1F1235' }}
          >
            Every occasion, beautifully done
          </h2>
          <p className="mt-4" style={{ color: 'rgba(31,18,53,0.6)' }}>
            From intimate gatherings to grand celebrations — we bring your vision to life.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl p-7 border border-black/5 hover:shadow-lg transition"
              style={{ background: '#FAF7F2' }}
            >
              <div
                className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm transition group-hover:bg-purple-700 group-hover:text-white"
                style={{ color: '#6D28D9' }}
              >
                {s.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold" style={{ color: '#1F1235' }}>{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'rgba(31,18,53,0.6)' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}