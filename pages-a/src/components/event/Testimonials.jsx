import { Quote, Star } from 'lucide-react';

const items = [
  { name: 'Ifeoma & Tunde', text: 'Our wedding was pure magic. Every detail was flawless — we just danced and enjoyed.' },
  { name: 'Chinedu A.', text: 'The corporate gala they planned for us was the best we have ever hosted. Truly professional.' },
  { name: 'Bisi O.', text: 'They turned my daughter\'s 10th birthday into a fairytale. The kids are still talking about it!' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20" style={{ background: 'rgba(109,40,217,0.08)' }}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-semibold uppercase text-sm tracking-wider" style={{ color: '#6D28D9' }}>
            Client Love
          </p>
          <h2
            className="mt-2 text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif", color: '#1F1235' }}
          >
            Moments we created
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-7 shadow-sm">
              <Quote size={24} style={{ color: '#D4A574' }} />
              <p className="mt-4 leading-relaxed" style={{ color: 'rgba(31,18,53,0.8)' }}>
                "{t.text}"
              </p>
              <div className="mt-5 flex items-center justify-between">
                <span className="font-semibold" style={{ color: '#1F1235' }}>{t.name}</span>
                <div className="flex gap-0.5" style={{ color: '#D4A574' }}>
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