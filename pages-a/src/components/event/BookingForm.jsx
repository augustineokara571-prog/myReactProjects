import { useState } from 'react';
import { CheckCircle2, Calendar, MessageCircle } from 'lucide-react';

// 07039668017  ->  2347039668017
const WHATSAPP_NUMBER = '2347039668017';

export default function BookingForm() {
  const [form, setForm] = useState({
    clientName: '',
    eventType: 'Wedding',
    eventDate: '',
    guestCount: '',
    phone: '',
    venue: '',
    notes: '',
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message =
      `*New Event Inquiry*%0A` +
      `--------------------------%0A` +
      `*Client:* ${form.clientName}%0A` +
      `*Event Type:* ${form.eventType}%0A` +
      `*Date:* ${form.eventDate || 'To be decided'}%0A` +
      `*Guests:* ${form.guestCount || 'Not specified'}%0A` +
      `*Venue:* ${form.venue || 'Not decided'}%0A` +
      `*Phone:* ${form.phone}%0A` +
      `*Notes:* ${form.notes || 'None'}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    setSent(true);
  };

  const reset = () => {
    setForm({
      clientName: '',
      eventType: 'Wedding',
      eventDate: '',
      guestCount: '',
      phone: '',
      venue: '',
      notes: '',
    });
    setSent(false);
  };

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-semibold uppercase text-sm tracking-wider" style={{ color: '#D4A574' }}>
            Book a Consultation
          </p>
          <h2
            className="mt-2 text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif", color: '#1F1235' }}
          >
            Tell us about your event
          </h2>
          <p className="mt-4" style={{ color: 'rgba(31,18,53,0.6)' }}>
            Fill the form — WhatsApp will open with your details ready to send.
          </p>
        </div>

        {sent ? (
          <div
            className="mt-12 rounded-2xl p-10 text-center border"
            style={{ background: 'rgba(212,165,116,0.18)', borderColor: 'rgba(212,165,116,0.45)' }}
          >
            <CheckCircle2 size={48} className="mx-auto" style={{ color: '#6D28D9' }} />
            <h3 className="mt-4 text-2xl font-bold" style={{ color: '#1F1235' }}>Almost done!</h3>
            <p className="mt-2" style={{ color: 'rgba(31,18,53,0.7)' }}>
              WhatsApp should have opened in a new tab. Just hit <b>Send</b> to confirm.
            </p>
            <button onClick={reset} className="mt-6 font-semibold underline" style={{ color: '#6D28D9' }}>
              Send another
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-12 rounded-3xl p-6 md:p-10 border border-black/5 shadow-sm grid sm:grid-cols-2 gap-5"
            style={{ background: '#FAF7F2' }}
          >
            <Field label="Your Name" required>
              <input name="clientName" value={form.clientName} onChange={handleChange}
                required placeholder="Enter your name" className={inputCls} />
            </Field>
            <Field label="Phone Number" required>
              <input name="phone" value={form.phone} onChange={handleChange}
                required placeholder="080 0000 0000" className={inputCls} />
            </Field>
            <Field label="Event Type">
              <select name="eventType" value={form.eventType} onChange={handleChange} className={inputCls}>
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Corporate Event</option>
                <option>Concert / Show</option>
                <option>Baby Shower</option>
                <option>Other</option>
              </select>
            </Field>
            <Field label="Preferred Date">
              <input name="eventDate" type="date" value={form.eventDate}
                onChange={handleChange} className={inputCls} />
            </Field>
            <Field label="Guest Count">
              <input name="guestCount" type="number" min="1"
                value={form.guestCount} onChange={handleChange}
                placeholder="100" className={inputCls} />
            </Field>
            <Field label="Venue (if known)">
              <input name="venue" value={form.venue} onChange={handleChange}
                placeholder="e.g. The Grand Hall, Lagos" className={inputCls} />
            </Field>
            <Field label="Additional Notes" className="sm:col-span-2">
              <textarea name="notes" rows="3" value={form.notes}
                onChange={handleChange} placeholder="Theme, budget, special requests…"
                className={inputCls} />
            </Field>

            <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 mt-2">
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 text-white py-3 rounded-full font-semibold transition hover:opacity-90"
                style={{ background: '#6D28D9' }}
              >
                <Calendar size={18} /> Send via WhatsApp
              </button>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I would like to plan an event with your team.')}`}
                target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-white border border-black/10 py-3 rounded-full font-semibold transition hover:border-purple-600"
                style={{ color: '#1F1235' }}
              >
                <MessageCircle size={18} style={{ color: '#6D28D9' }} /> Chat on WhatsApp
              </a>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

const inputCls =
  'w-full bg-white border border-black/10 rounded-xl px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-purple-600 transition';

function Field({ label, children, className = '' }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-sm font-semibold mb-1.5" style={{ color: 'rgba(31,18,53,0.8)' }}>
        {label}
      </span>
      {children}
    </label>
  );
}