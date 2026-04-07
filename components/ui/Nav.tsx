"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Stack", href: "#stack" },
  { label: "Process", href: "#how-we-work" },
  { label: "Cases", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(0,0,0,0.92)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(0,255,65,0.1)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="font-bold text-sm tracking-[0.2em] neon-text">
          INPORT<span className="text-[#00FFFF]">GROUP</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-widest text-[#00FF41]/50 hover:text-[#00FF41] transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#contact" className="hidden md:block btn-neon px-5 py-2 text-xs tracking-widest uppercase">
          [ Contact ]
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden text-[#00FF41] text-xl"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-[#00FF41]/10 px-6 py-6 space-y-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm tracking-widest text-[#00FF41]/60 hover:text-[#00FF41] uppercase"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-neon block text-center px-5 py-3 text-sm tracking-widest uppercase mt-4"
            onClick={() => setOpen(false)}
          >
            [ Contact ]
          </a>
        </div>
      )}
    </header>
  );
}
