"use client";
import SectionHeader from "../ui/SectionHeader";

const stats = [
  { value: "10–15", label: "Specialists" },
  { value: "∞", label: "AI Capabilities" },
  { value: "1×", label: "Freelancer Cost" },
  { value: "10×", label: "Team Output" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 grid-bg overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeader
          label="about us"
          title="ONE PRICE. FULL TEAM."
          subtitle="InportGroup is an elite AI engineering collective of 10–15 specialists. At a freelancer's rate, you get an entire outsourced AI department — strategy, development, and deployment, all in one engagement."
        />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="neon-card p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold neon-text mb-2">{s.value}</div>
              <div className="text-xs text-[#00FF41]/60 tracking-widest uppercase">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Description blocks */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "◈",
              title: "EMBEDDED TEAM",
              body: "We don't deliver isolated projects. We become your AI department — aligned with your goals, your stack, and your cadence.",
            },
            {
              icon: "◎",
              title: "MONTHLY CYCLES",
              body: "Every month: define goals, build a Gantt roadmap, execute, deploy, iterate. Transparent, structured, accountable.",
            },
            {
              icon: "◬",
              title: "FULL SPECTRUM",
              body: "From LLM agents to Kubernetes deployments, from CI/CD to MLOps — every specialty covered, one team.",
            },
          ].map((block) => (
            <div key={block.title} className="neon-card p-6">
              <div className="text-3xl text-[#00FFFF] mb-4">{block.icon}</div>
              <h3 className="text-sm font-bold tracking-[0.2em] mb-3 text-[#00FF41]">
                {block.title}
              </h3>
              <p className="text-[#00FF41]/60 text-sm leading-relaxed">{block.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
