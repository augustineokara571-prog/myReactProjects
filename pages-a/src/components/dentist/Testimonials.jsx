import { Quote, Star } from 'lucide-react';

const items = [
  { name: 'Amaka O.', text: 'My daughter used to cry at the dentist. Now she asks when we are going back!' },
  { name: 'Daniel K.', text: 'Super gentle staff. Booking was easy and they were right on time.' },
  { name: 'Fatima B.', text: 'The play area and friendly team make all the difference. Highly recommend.' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20" style={{ background: 'rgba(205,232,255,0.4)' }}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-semibold uppercase text-sm tracking-wider" style={{ color: '#0E7C86' }}>
            Happy Parents
          </p>
          <h2
            className="mt-2 text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "'Fraunces', serif", color: '#0B2E3B' }}
          >
            Loved by families
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-7 shadow-sm">
              <Quote size={24} style={{ color: '#FF8A7A' }} />
              <p className="mt-4 leading-relaxed" style={{ color: 'rgba(11,46,59,0.8)' }}>
                "{t.text}"
              </p>
              <div className="mt-5 flex items-center justify-between">
                <span className="font-semibold" style={{ color: '#0B2E3B' }}>{t.name}</span>
                <div className="flex gap-0.5" style={{ color: '#FF8A7A' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}