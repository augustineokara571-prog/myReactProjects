import { useState } from 'react';
import { CheckCircle2, Calendar, MessageCircle } from 'lucide-react';

// 07039668017  ->  2347039668017
const WHATSAPP_NUMBER = '2347039668017';

export default function BookingForm() {
  const [form, setForm] = useState({
    parentName: '', childName: '', childAge: '',
    phone: '', service: 'Routine Check-up', date: '', notes: '',
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message =
      `*New Booking Request*%0A` +
      `--------------------------%0A` +
      `*Parent:* ${form.parentName}%0A` +
      `*Child:* ${form.childName} (age ${form.childAge})%0A` +
      `*Phone:* ${form.phone}%0A` +
      `*Service:* ${form.service}%0A` +
      `*Preferred Date:* ${form.date || 'Not specified'}%0A` +
      `*Notes:* ${form.notes || 'None'}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    setSent(true);
  };

  const reset = () => {
    setForm({
      parentName: '', childName: '', childAge: '',
      phone: '', service: 'Routine Check-up', date: '', notes: '',
    });
    setSent(false);
  };

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-semibold uppercase text-sm tracking-wider" style={{ color: '#FF8A7A' }}>
            Book a Visit
          </p>
          <h2
            className="mt-2 text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "'Fraunces', serif", color: '#0B2E3B' }}
          >
            Schedule your child's appointment
          </h2>
          <p className="mt-4" style={{ color: 'rgba(11,46,59,0.6)' }}>
            Fill the form — WhatsApp will open with your booking ready to send.
          </p>
        </div>

        {sent ? (
          <div
            className="mt-12 rounded-2xl p-10 text-center border"
            style={{ background: 'rgba(212,241,232,0.5)', borderColor: 'rgba(14,124,134,0.3)' }}
          >
            <CheckCircle2 size={48} className="mx-auto" style={{ color: '#0E7C86' }} />
            <h3 className="mt-4 text-2xl font-bold" style={{ color: '#0B2E3B' }}>Almost done!</h3>
            <p className="mt-2" style={{ color: 'rgba(11,46,59,0.7)' }}>
              WhatsApp should have opened in a new tab. Just hit <b>Send</b> to confirm.
            </p>
            <button onClick={reset} className="mt-6 font-semibold underline" style={{ color: '#0E7C86' }}>
              Book another
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-12 rounded-3xl p-6 md:p-10 border border-black/5 shadow-sm grid sm:grid-cols-2 gap-5"
            style={{ background: '#FFF7F0' }}
          >
            <Field label="Parent / Guardian Name" required>
              <input name="parentName" value={form.parentName} onChange={handleChange}
                required placeholder="Jane Doe" className={inputCls} />
            </Field>
            <Field label="Child's Name" required>
              <input name="childName" value={form.childName} onChange={handleChange}
                required placeholder="Mia" className={inputCls} />
            </Field>
            <Field label="Child's Age" required>
              <input name="childAge" type="number" min="0" max="18"
                value={form.childAge} onChange={handleChange}
                required placeholder="6" className={inputCls} />
            </Field>
            <Field label="Phone Number" required>
              <input name="phone" value={form.phone} onChange={handleChange}
                required placeholder="080 0000 0000" className={inputCls} />
            </Field>
            <Field label="Service">
              <select name="service" value={form.service} onChange={handleChange} className={inputCls}>
                <option>Routine Check-up</option>
                <option>Fluoride & Sealants</option>
                <option>Cavity Treatment</option>
                <option>First Visit Program</option>
                <option>Orthodontics</option>
                <option>Emergency Care</option>
              </select>
            </Field>
            <Field label="Preferred Date">
              <input name="date" type="date" value={form.date}
                onChange={handleChange} className={inputCls} />
            </Field>
            <Field label="Notes (optional)" className="sm:col-span-2">
              <textarea name="notes" rows="3" value={form.notes}
                onChange={handleChange} placeholder="Anything we should know?"
                className={inputCls} />
            </Field>

            <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 mt-2">
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 text-white py-3 rounded-full font-semibold transition hover:opacity-90"
                style={{ background: '#0E7C86' }}
              >
                <Calendar size={18} /> Book via WhatsApp
              </button>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I would like to book an appointment for my child.')}`}
                target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-white border border-black/10 py-3 rounded-full font-semibold transition hover:border-teal-600"
                style={{ color: '#0B2E3B' }}
              >
                <MessageCircle size={18} style={{ color: '#0E7C86' }} /> Chat on WhatsApp
              </a>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

const inputCls =
  'w-full bg-white border border-black/10 rounded-xl px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-teal-600 transition';

function Field({ label, children, className = '' }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-sm font-semibold mb-1.5" style={{ color: 'rgba(11,46,59,0.8)' }}>
        {label}
      </span>
      {children}
    </label>
  );
}