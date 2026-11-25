import { Heart, Award, Clock, Users } from 'lucide-react';

const points = [
  { icon: <Heart size={20} />, title: 'Gentle Approach', desc: 'Zero pressure. Zero fear. Just smiles.' },
  { icon: <Award size={20} />, title: 'Certified Experts', desc: 'Board-certified pediatric dentists.' },
  { icon: <Clock size={20} />, title: 'On-Time Visits', desc: 'We respect your schedule — every time.' },
  { icon: <Users size={20} />, title: 'Family Friendly', desc: 'Bring siblings along. Everyone is welcome.' },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20" style={{ background: 'rgba(212,241,232,0.4)' }}>
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-semibold uppercase text-sm tracking-wider" style={{ color: '#0E7C86' }}>
            Why Families Choose Us
          </p>
          <h2
            className="mt-2 text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "'Fraunces', serif", color: '#0B2E3B' }}
          >
            Dental care that feels like playtime
          </h2>
          <p className="mt-4" style={{ color: 'rgba(11,46,59,0.7)' }}>
            We blend clinical excellence with a warm, kid-focused environment so
            every visit feels like a small adventure.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {points.map((p) => (
              <div key={p.title} className="bg-white rounded-xl p-5 shadow-sm">
                <div style={{ color: '#FF8A7A' }}>{p.icon}</div>
                <h4 className="mt-2 font-semibold" style={{ color: '#0B2E3B' }}>{p.title}</h4>
                <p className="text-sm mt-1" style={{ color: 'rgba(11,46,59,0.6)' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-black/5">
            <div
              className="text-5xl font-bold"
              style={{ fontFamily: "'Fraunces', serif", color: '#0E7C86' }}
            >
              98%
            </div>
            <p className="mt-2" style={{ color: 'rgba(11,46,59,0.7)' }}>
              of parents say their child was calm and happy during the visit.
            </p>
            <div className="mt-6 h-2 rounded-full overflow-hidden" style={{ background: '#D4F1E8' }}>
              <div className="h-full rounded-full" style={{ width: '98%', background: '#0E7C86' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}