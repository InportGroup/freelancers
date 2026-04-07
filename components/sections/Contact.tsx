"use client";
import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";

interface FormData {
  name: string;
  company: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate send — wire up to email service (e.g. Resend, Nodemailer)
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
  };

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <SectionHeader
          label="contact"
          title="INITIALIZE CONTACT"
          subtitle="Tell us about your project. We'll respond within 24 hours."
        />

        {status === "sent" ? (
          <div className="neon-border p-12 text-center">
            <div className="text-4xl text-[#00FF41] mb-4">▸▸</div>
            <div className="neon-text font-bold text-xl tracking-widest mb-3">
              TRANSMISSION RECEIVED
            </div>
            <p className="text-[#00FF41]/60 text-sm">
              We&apos;ll be in touch within 24 hours.
              <br />
              <span className="text-[#00FFFF]">// Session ID: {Math.random().toString(36).substring(2, 10).toUpperCase()}</span>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Terminal header */}
            <div className="border border-[#00FF41]/20 p-3 flex items-center gap-3 bg-[#0D0D0D]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="text-xs text-[#00FF41]/40 tracking-widest">
                inportgroup@terminal:~$ ./contact.sh
              </span>
            </div>

            {/* Fields */}
            {[
              { name: "name", label: "YOUR_NAME", type: "text", placeholder: "John Doe", required: true },
              { name: "company", label: "COMPANY", type: "text", placeholder: "Acme Corp", required: false },
              { name: "email", label: "EMAIL_ADDRESS", type: "email", placeholder: "you@company.com", required: true },
            ].map((field) => (
              <div key={field.name} className="relative">
                <label className="block text-xs tracking-[0.2em] text-[#00FF41]/50 mb-1.5">
                  {field.label}{field.required && <span className="text-[#00FFFF]"> *</span>}
                </label>
                <div
                  className="relative border transition-all duration-200"
                  style={{
                    borderColor: focused === field.name ? "#00FF41" : "rgba(0,255,65,0.15)",
                    boxShadow: focused === field.name ? "0 0 12px rgba(0,255,65,0.15)" : "none",
                  }}
                >
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#00FF41]/40 text-sm">
                    &gt;
                  </span>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name as keyof FormData]}
                    onChange={handleChange}
                    onFocus={() => setFocused(field.name)}
                    onBlur={() => setFocused(null)}
                    placeholder={field.placeholder}
                    required={field.required}
                    className="w-full bg-transparent pl-8 pr-4 py-3 text-sm text-[#00FF41] placeholder-[#00FF41]/20 outline-none font-mono"
                  />
                </div>
              </div>
            ))}

            {/* Message */}
            <div>
              <label className="block text-xs tracking-[0.2em] text-[#00FF41]/50 mb-1.5">
                MESSAGE <span className="text-[#00FFFF]">*</span>
              </label>
              <div
                className="relative border transition-all duration-200"
                style={{
                  borderColor: focused === "message" ? "#00FF41" : "rgba(0,255,65,0.15)",
                  boxShadow: focused === "message" ? "0 0 12px rgba(0,255,65,0.15)" : "none",
                }}
              >
                <span className="absolute left-3 top-3 text-[#00FF41]/40 text-sm">&gt;</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  placeholder="Describe your project, goals, and timeline..."
                  required
                  rows={5}
                  className="w-full bg-transparent pl-8 pr-4 py-3 text-sm text-[#00FF41] placeholder-[#00FF41]/20 outline-none font-mono resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-neon w-full py-4 text-sm tracking-widest uppercase disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending"
                ? "[ Transmitting... ]"
                : "[ Send Transmission ]"}
            </button>

            <p className="text-xs text-[#00FF41]/30 text-center tracking-wider">
              // Your data is handled with professional discretion. No spam, ever.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
