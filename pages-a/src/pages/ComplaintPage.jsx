import { useState } from "react";

export default function ComplaintPage() {
  const [form, setForm] = useState({ name: "", email: "", complaint: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/complaintpg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setMessage(data.message);
      setForm({ name: "", email: "", complaint: "" });
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full px-4 py-3 text-[15px] text-slate-800 bg-slate-50 border-[1.5px] border-slate-200 rounded-xl outline-none box-border transition-all duration-200 placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100 resize-y font-[inherit]";

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-teal-500 font-['Inter','Segoe_UI',system-ui,sans-serif] p-6 box-border">
      {/* soft radial glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-fuchsia-400/30 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-300/30 blur-[120px]" />

      {/* card */}
      <div className="relative w-full max-w-[440px] bg-white/95 backdrop-blur-sm rounded-[20px] px-8 py-10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)] border border-white/60">
        <h2 className="m-0 mb-1.5 text-[26px] font-bold text-slate-800 tracking-[-0.5px]">
          Submit a Complaint
        </h2>
        <p className="m-0 mb-7 text-sm text-slate-400 leading-relaxed">
          We take every message seriously. Tell us what happened and we'll get
          back to you.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className={inputClass}
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className={inputClass}
          />
          <textarea
            name="complaint"
            placeholder="Your Complaint"
            rows="4"
            value={form.complaint}
            onChange={handleChange}
            required
            className={inputClass}
          />
          <button
            type="submit"
            disabled={loading}
            className="mt-2 py-3.5 text-[15px] font-semibold tracking-[0.3px] text-white bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl border-none shadow-[0_8px_20px_-8px_rgba(79,70,229,0.6)] transition-all duration-200 hover:-translate-y-px hover:brightness-110 hover:shadow-[0_12px_24px_-8px_rgba(79,70,229,0.75)] active:translate-y-0 active:brightness-95 disabled:opacity-70 disabled:cursor-wait font-[inherit]"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        {message && (
          <div className="mt-5 px-4 py-3 text-sm text-teal-700 bg-teal-50 border border-teal-100 rounded-xl text-center">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}