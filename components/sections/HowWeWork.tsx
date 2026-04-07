"use client";
import SectionHeader from "../ui/SectionHeader";

const steps = [
  {
    phase: "01",
    title: "DEFINE GOALS",
    description:
      "Monthly kickoff: align on business objectives, KPIs, and scope. We translate your vision into engineering targets.",
    icon: "◈",
    color: "#00FFFF",
  },
  {
    phase: "02",
    title: "BUILD GANTT",
    description:
      "We construct a detailed Gantt roadmap — every task, dependency, and milestone visible. Full transparency, no surprises.",
    icon: "◎",
    color: "#00FF41",
  },
  {
    phase: "03",
    title: "BUILD",
    description:
      "10–15 specialists execute in parallel across their domains. Daily async updates. Code reviews. Continuous integration.",
    icon: "⬢",
    color: "#00FFFF",
  },
  {
    phase: "04",
    title: "DEPLOY",
    description:
      "We ship to production — cloud, on-premise, or hybrid. Zero-downtime deployments. Monitoring from day one.",
    icon: "◬",
    color: "#00FF41",
  },
  {
    phase: "05",
    title: "ITERATE",
    description:
      "Post-deploy review, performance analysis, next cycle planning. We compound value with every iteration.",
    icon: "⬟",
    color: "#00FFFF",
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="relative py-24 px-6 bg-[#0D0D0D] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeader
          label="process"
          title="HOW WE WORK"
          subtitle="A structured monthly cycle that delivers measurable progress every single month."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00FF41]/30 to-transparent" />

          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <div key={step.phase} className="relative flex flex-col items-center text-center group">
                {/* Phase number + icon bubble */}
                <div
                  className="relative w-14 h-14 flex items-center justify-center border-2 mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{
                    borderColor: step.color,
                    boxShadow: `0 0 20px ${step.color}33`,
                    background: `${step.color}0a`,
                  }}
                >
                  <span className="text-xl" style={{ color: step.color }}>
                    {step.icon}
                  </span>
                  {/* Arrow connector (mobile) */}
                  {i < steps.length - 1 && (
                    <div
                      className="lg:hidden absolute -bottom-10 left-1/2 -translate-x-1/2 w-px h-8"
                      style={{ background: `${step.color}40` }}
                    />
                  )}
                </div>

                <div
                  className="text-xs tracking-[0.2em] mb-2"
                  style={{ color: `${step.color}60` }}
                >
                  PHASE {step.phase}
                </div>

                <h3
                  className="font-bold text-sm tracking-widest mb-3"
                  style={{ color: step.color }}
                >
                  {step.title}
                </h3>

                <p className="text-[#00FF41]/50 text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom callout */}
        <div className="mt-14 border border-[#00FF41]/20 p-6 text-center bg-[#00FF41]/02">
          <div className="text-xs tracking-[0.3em] text-[#00FF41]/40 mb-3">// CADENCE</div>
          <p className="text-[#00FF41]/80 text-sm md:text-base">
            Monthly planning cycles. Weekly syncs. Daily async updates.
            <br />
            <span className="text-[#00FFFF]">You always know exactly where your AI department is.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
