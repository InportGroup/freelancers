"use client";
import dynamic from "next/dynamic";
import TypingEffect from "../hero/TypingEffect";
import Link from "next/link";

const MatrixRain = dynamic(() => import("../hero/MatrixRain"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden scanlines"
    >
      {/* Matrix rain background */}
      <MatrixRain />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-[1]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-[#00FF41]/30 px-4 py-1.5 text-xs tracking-widest text-[#00FF41]/70 mb-10 bg-black/40">
          <span className="w-2 h-2 rounded-full bg-[#00FF41] animate-pulse" />
          SYSTEM ONLINE — 10–15 SPECIALISTS ACTIVE
        </div>

        {/* Typing effect */}
        <div className="mb-10 min-h-[140px] flex items-center justify-center">
          <TypingEffect />
        </div>

        {/* Tagline */}
        <p className="text-[#00FF41]/70 text-sm md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed tracking-wide">
          At a freelancer&apos;s price,{" "}
          <span className="text-[#00FFFF]">you get a full team of 10–15 specialized engineers.</span>
          <br />
          Full-stack AI consultancy, development &amp; deployment — without the cost of an in-house department.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#contact"
            className="btn-neon px-8 py-3 text-sm tracking-widest uppercase"
          >
            [ Initialize Contact ]
          </Link>
          <Link
            href="#services"
            className="btn-neon-cyan px-8 py-3 text-sm tracking-widest uppercase"
          >
            [ View Capabilities ]
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#00FF41]/40 text-xs tracking-widest">
          <span>SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#00FF41]/40 to-transparent animate-pulse" />
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-[#00FF41]/40 z-10" />
      <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-[#00FF41]/40 z-10" />
      <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-[#00FF41]/40 z-10" />
      <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-[#00FF41]/40 z-10" />
    </section>
  );
}
