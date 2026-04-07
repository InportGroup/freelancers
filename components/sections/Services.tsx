"use client";
import dynamic from "next/dynamic";
import SectionHeader from "../ui/SectionHeader";

const NeuralNetwork = dynamic(() => import("@/components/three/NeuralNetwork"), {
  ssr: false,
  loading: () => null,
});

const services = [
  {
    id: "01",
    title: "AI Consultancy",
    description:
      "AI strategy, feasibility studies, architecture design, ROI analysis. We help you identify where AI creates the most value — and how to get there.",
    tags: ["Strategy", "Architecture", "ROI", "Feasibility"],
    icon: "⬡",
    color: "#00FF41",
  },
  {
    id: "02",
    title: "Full-Stack Development",
    description:
      "End-to-end web applications in Python, Node.js, React, Angular, Next.js, Nuxt.js. Clean code, scalable architecture, production-grade.",
    tags: ["Python", "React", "Next.js", "Node.js"],
    icon: "⬢",
    color: "#00FFFF",
  },
  {
    id: "03",
    title: "AI / LLMs",
    description:
      "Custom LLM integrations, RAG pipelines, fine-tuning, autonomous agents, and intelligent automation. From prototype to production.",
    tags: ["LLMs", "RAG", "Fine-tuning", "Agents"],
    icon: "◈",
    color: "#00FF41",
  },
  {
    id: "04",
    title: "Cloud & DevOps",
    description:
      "AWS, GCP, Azure, on-premise. Docker, Kubernetes, CI/CD pipelines. We deploy and maintain your infrastructure.",
    tags: ["AWS", "GCP", "Docker", "Kubernetes"],
    icon: "◎",
    color: "#00FFFF",
  },
  {
    id: "05",
    title: "Integrations",
    description:
      "Seamless connections between APIs, ERPs, CRMs, third-party SaaS, and internal tools. Your systems, unified.",
    tags: ["APIs", "ERPs", "CRMs", "SaaS"],
    icon: "◬",
    color: "#00FF41",
  },
  {
    id: "06",
    title: "Automation",
    description:
      "Workflow automation, intelligent data pipelines, and AI agents that handle repetitive tasks so your team focuses on what matters.",
    tags: ["Workflows", "Pipelines", "Agents", "RPA"],
    icon: "⬟",
    color: "#00FFFF",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 px-6 bg-[#0D0D0D] overflow-hidden">
      {/* 3D Neural network as subtle background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <NeuralNetwork />
      </div>
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeader
          label="capabilities"
          title="SERVICES"
          subtitle="Six core capability areas. One integrated team of 10–15 specialists."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="neon-card p-8 group cursor-default relative overflow-hidden"
            >
              {/* ID */}
              <div
                className="absolute top-4 right-4 text-xs tracking-widest opacity-30 font-bold"
                style={{ color: service.color }}
              >
                [{service.id}]
              </div>

              {/* Icon */}
              <div
                className="text-4xl mb-5 transition-transform group-hover:scale-110 duration-300"
                style={{ color: service.color }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="font-bold text-base tracking-widest uppercase mb-3"
                style={{ color: service.color }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#00FF41]/60 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 border tracking-wider"
                    style={{
                      borderColor: `${service.color}33`,
                      color: `${service.color}99`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover glow line */}
              <div
                className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: service.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
