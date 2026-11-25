import { Stethoscope, ShieldCheck, Sparkles, Baby, Smile, HeartPulse } from 'lucide-react';

const services = [
  { icon: <Stethoscope size={24} />, title: 'Routine Check-ups', desc: 'Gentle exams and cleaning to keep little teeth healthy.' },
  { icon: <ShieldCheck size={24} />, title: 'Fluoride & Sealants', desc: 'Extra protection against cavities for growing smiles.' },
  { icon: <Sparkles size={24} />, title: 'Cavity Treatment', desc: 'Pain-free fillings using child-friendly techniques.' },
  { icon: <Baby size={24} />, title: 'First Visit Program', desc: 'A fun, no-stress introduction to the dentist.' },
  { icon: <Smile size={24} />, title: 'Orthodontics', desc: 'Early guidance for healthy, straight smiles.' },
  { icon: <HeartPulse size={24} />, title: 'Emergency Care', desc: 'Same-day care when accidents happen.' },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-semibold uppercase text-sm tracking-wider" style={{ color: '#FF8A7A' }}>
            Our Services
          </p>
          <h2
            className="mt-2 text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "'Fraunces', serif", color: '#0B2E3B' }}
          >
            Care designed for tiny patients
          </h2>
          <p className="mt-4" style={{ color: 'rgba(11,46,59,0.6)' }}>
            Every treatment is gentle, playful, and tailored to your child's comfort.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl p-7 border border-black/5 hover:shadow-lg transition"
              style={{ background: '#FFF7F0' }}
            >
              <div
                className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm transition group-hover:bg-teal-600 group-hover:text-white"
                style={{ color: '#0E7C86' }}
              >
                {s.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold" style={{ color: '#0B2E3B' }}>{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'rgba(11,46,59,0.6)' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}