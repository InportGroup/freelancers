import SectionHeader from "../ui/SectionHeader";
import Link from "next/link";

const included = [
  "10–15 specialized engineers",
  "Full-stack AI development",
  "Monthly Gantt roadmap",
  "Daily async updates",
  "Architecture & consulting",
  "Cloud / on-premise deployment",
  "CI/CD pipelines",
  "MLOps & AI agents",
  "Post-deploy monitoring",
  "Dedicated Slack/Teams channel",
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 px-6 bg-[#0D0D0D] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <SectionHeader
          label="pricing"
          title="ONE PRICE. FULL TEAM."
          subtitle="You pay for one freelancer. You get a team of 10–15 specialists."
        />

        {/* Pricing card */}
        <div className="relative neon-border p-12 mx-auto max-w-2xl">
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00FF41]" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00FF41]" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00FF41]" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00FF41]" />

          <div className="text-xs tracking-[0.3em] text-[#00FF41]/40 mb-3">// ENGAGEMENT MODEL</div>

          <div className="mb-2">
            <span className="text-6xl font-bold neon-text">1×</span>
          </div>
          <div className="text-[#00FF41]/60 text-sm tracking-widest mb-8">
            FREELANCER COST &nbsp;|&nbsp; 10–15 SPECIALIST TEAM
          </div>

          {/* Included list */}
          <div className="grid sm:grid-cols-2 gap-3 text-left mb-10">
            {included.map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-[#00FF41]/70">
                <span className="text-[#00FF41] text-xs">▸</span>
                {item}
              </div>
            ))}
          </div>

          <div className="border-t border-[#00FF41]/10 pt-8">
            <p className="text-[#00FF41]/50 text-xs tracking-widest mb-6">
              CUSTOM PRICING BASED ON SCOPE &amp; ENGAGEMENT DURATION
            </p>
            <Link
              href="#contact"
              className="btn-neon inline-block px-10 py-4 text-sm tracking-widest uppercase"
            >
              [ Request Proposal ]
            </Link>
          </div>
        </div>

        {/* Comparison hint */}
        <p className="mt-10 text-[#00FF41]/30 text-xs tracking-wider">
          Avg. in-house AI dept: 10–15 engineers × $120k–$200k/yr salary each.
          <br />
          <span className="text-[#00FFFF]/50">
            InportGroup: one freelancer price. Full specialized team. Monthly. Cancel anytime.
          </span>
        </p>
      </div>
    </section>
  );
}
