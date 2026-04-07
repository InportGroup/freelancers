"use client";

interface GlitchTextProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "span" | "p";
}

export default function GlitchText({
  text,
  className = "",
  tag: Tag = "h2",
}: GlitchTextProps) {
  return (
    <Tag
      className={`relative inline-block ${className}`}
      data-text={text}
      style={{ position: "relative" }}
    >
      <span className="relative z-10">{text}</span>
      <span
        aria-hidden
        className="absolute inset-0 text-[#00FF41]"
        style={{
          animation: "glitch1 4s infinite linear",
          color: "#00FF41",
          textShadow: "-2px 0 #00FFFF",
          left: 0,
          top: 0,
        }}
      >
        {text}
      </span>
      <span
        aria-hidden
        className="absolute inset-0"
        style={{
          animation: "glitch2 4s infinite linear",
          color: "#00FFFF",
          textShadow: "2px 0 #00FF41",
          left: 0,
          top: 0,
        }}
      >
        {text}
      </span>
    </Tag>
  );
}
