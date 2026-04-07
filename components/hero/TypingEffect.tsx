"use client";
import { useEffect, useState } from "react";

const lines = [
  "> Initializing InportGroup...",
  "> Loading AI modules...",
  "> Team online: 10-15 specialists active",
  "> InportGroup :: AI Department as a Service_",
];

export default function TypingEffect() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    if (currentLine >= lines.length) {
      setDone(true);
      return;
    }

    const line = lines[currentLine];

    if (currentChar < line.length) {
      const timeout = setTimeout(() => {
        setCurrentChar((c) => c + 1);
      }, currentLine === lines.length - 1 ? 60 : 30);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, line]);
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, currentLine === lines.length - 1 ? 400 : 200);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar, done]);

  const currentTyping =
    currentLine < lines.length ? lines[currentLine].slice(0, currentChar) : "";

  return (
    <div className="font-mono text-left space-y-1">
      {displayedLines.map((line, i) => (
        <div
          key={i}
          className={
            i === displayedLines.length - 1 && done
              ? "text-[#00FF41] neon-text text-lg md:text-2xl lg:text-3xl font-bold"
              : "text-[#00FF41]/60 text-sm md:text-base"
          }
        >
          {line}
        </div>
      ))}
      {!done && currentLine < lines.length && (
        <div
          className={
            currentLine === lines.length - 1
              ? "text-[#00FF41] neon-text text-lg md:text-2xl lg:text-3xl font-bold"
              : "text-[#00FF41]/60 text-sm md:text-base"
          }
        >
          {currentTyping}
          <span className="cursor-blink">█</span>
        </div>
      )}
      {done && (
        <span className="cursor-blink text-[#00FF41] neon-text text-lg md:text-2xl lg:text-3xl font-bold">
          █
        </span>
      )}
    </div>
  );
}
