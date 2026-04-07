"use client";
import SectionHeader from "../ui/SectionHeader";

const categories = [
  {
    label: "Languages",
    color: "#00FF41",
    items: ["Python", "JavaScript", "TypeScript"],
  },
  {
    label: "AI & Agents",
    color: "#00FFFF",
    items: ["AI / LLMs", "AI Agents", "RAG", "MLOps"],
  },
  {
    label: "Cloud",
    color: "#00FFCC",
    items: ["AWS", "GCP", "Azure", "On-Premise"],
  },
  {
    label: "DevOps & Infra",
    color: "#7FFF00",
    items: ["Docker", "Kubernetes", "CI/CD"],
  },
  {
    label: "Automation",
    color: "#00FF41",
    items: ["Workflow Automation", "Integrations", "Data Pipelines"],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0D0D0D] to-black" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <SectionHeader
          label="tech stack"
          title="TECHNOLOGY"
          subtitle="Our core arsenal — battle-tested across dozens of production systems."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.label} className="neon-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
                <span
                  className="text-xs font-bold tracking-[0.2em] uppercase"
                  style={{ color: `${cat.color}99` }}
                >
                  {cat.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm font-bold tracking-wider px-3 py-1.5 border transition-all duration-200 cursor-default"
                    style={{
                      borderColor: `${cat.color}25`,
                      color: cat.color,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = cat.color;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 12px ${cat.color}33`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${cat.color}25`;
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
