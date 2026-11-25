import { Sparkles, Award, Clock, Users } from 'lucide-react';

const points = [
  { icon: <Sparkles size={20} />, title: 'Creative Vision', desc: 'Original concepts, never cookie-cutter.' },
  { icon: <Award size={20} />, title: 'Award-Winning Team', desc: 'Recognized planners with 10+ years.' },
  { icon: <Clock size={20} />, title: 'Flawless Execution', desc: 'Every detail on time, every time.' },
  { icon: <Users size={20} />, title: 'Trusted Vendors', desc: 'A curated network of the best in the biz.' },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20" style={{ background: 'rgba(212,165,116,0.15)' }}>
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-semibold uppercase text-sm tracking-wider" style={{ color: '#6D28D9' }}>
            Why Choose Us
          </p>
          <h2
            className="mt-2 text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif", color: '#1F1235' }}
          >
            Events that feel effortless
          </h2>
          <p className="mt-4" style={{ color: 'rgba(31,18,53,0.7)' }}>
            We handle the chaos so you can actually enjoy your big day. From
            timelines to lighting — every detail is handled with care.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {points.map((p) => (
              <div key={p.title} className="bg-white rounded-xl p-5 shadow-sm">
                <div style={{ color: '#6D28D9' }}>{p.icon}</div>
                <h4 className="mt-2 font-semibold" style={{ color: '#1F1235' }}>{p.title}</h4>
                <p className="text-sm mt-1" style={{ color: 'rgba(31,18,53,0.6)' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl bg-white p-8 shadow-xl border border-black/5">
            <div
              className="text-5xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif", color: '#6D28D9' }}
            >
              500+
            </div>
            <p className="mt-2" style={{ color: 'rgba(31,18,53,0.7)' }}>
              events successfully delivered across 5 countries — and counting.
            </p>
            <div className="mt-6 h-2 rounded-full overflow-hidden" style={{ background: 'rgba(109,40,217,0.15)' }}>
              <div className="h-full rounded-full" style={{ width: '92%', background: '#6D28D9' }} />
            </div>
            <p className="mt-2 text-sm" style={{ color: 'rgba(31,18,53,0.5)' }}>
              92% of clients rebook for their next celebration
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}