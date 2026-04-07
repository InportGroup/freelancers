"use client";
import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";

const useCases = [
  {
    id: "01",
    industry: "RETAIL SMB",
    title: "RAG Customer Support",
    description:
      "RAG-based customer support assistant integrated with existing CRM. Handles 80% of support tickets autonomously, deployed on Kubernetes for infinite scale.",
    stack: ["RAG", "LLMs", "CRM Integration", "Kubernetes", "Python"],
    metric: "80% ticket deflection",
    color: "#00FF41",
  },
  {
    id: "02",
    industry: "LOGISTICS",
    title: "Route Optimization AI",
    description:
      "ML-driven route optimization engine with a real-time Next.js dashboard. Deployed on-premise via Docker, integrated with fleet management systems.",
    stack: ["ML Models", "Next.js", "Docker", "On-Premise", "APIs"],
    metric: "23% cost reduction",
    color: "#00FFFF",
  },
  {
    id: "03",
    industry: "LEGAL FIRM",
    title: "Contract Analysis Pipeline",
    description:
      "LLM-powered document analysis pipeline that extracts clauses, flags risks, and summarizes contracts in seconds — not hours.",
    stack: ["LLMs", "NLP", "Python", "REST API", "Secure Infra"],
    metric: "10× faster review",
    color: "#00FF41",
  },
  {
    id: "04",
    industry: "E-COMMERCE",
    title: "Recommendation Engine",
    description:
      "Personalized product recommendation engine with automated marketing flows. Increases average order value and customer retention.",
    stack: ["ML", "Python", "React", "Marketing APIs", "A/B Testing"],
    metric: "+34% AOV",
    color: "#00FFFF",
  },
  {
    id: "05",
    industry: "MANUFACTURING",
    title: "Predictive Maintenance",
    description:
      "Sensor data processing pipeline with ML anomaly detection, custom dashboards, and real-time alerts before equipment fails.",
    stack: ["IoT", "ML", "Time Series", "Dashboard", "Alerting"],
    metric: "60% downtime cut",
    color: "#00FF41",
  },
  {
    id: "06",
    industry: "HEALTHCARE",
    title: "Patient Triage Chatbot",
    description:
      "HIPAA-compliant patient triage chatbot integrated with appointment booking systems. Reduces admin load and improves patient experience.",
    stack: ["LLMs", "HIPAA", "EHR Integration", "React", "Secure Cloud"],
    metric: "40% admin reduction",
    color: "#00FFFF",
  },
];

export default function UseCases() {
  const [active, setActive] = useState(0);
  const current = useCases[active];

  return (
    <section id="use-cases" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeader
          label="portfolio"
          title="USE CASES"
          subtitle="Real problems. Real solutions. Real results."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: navigation list */}
          <div className="space-y-2">
            {useCases.map((uc, i) => (
              <button
                key={uc.id}
                onClick={() => setActive(i)}
                className="w-full text-left p-4 border transition-all duration-200 group"
                style={{
                  borderColor: i === active ? uc.color : "rgba(0,255,65,0.1)",
                  background: i === active ? `${uc.color}08` : "transparent",
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span
                      className="text-xs tracking-widest"
                      style={{ color: i === active ? uc.color : "rgba(0,255,65,0.3)" }}
                    >
                      [{uc.id}]
                    </span>
                    <span
                      className="text-xs font-bold tracking-widest"
                      style={{ color: i === active ? uc.color : "rgba(0,255,65,0.5)" }}
                    >
                      {uc.industry}
                    </span>
                  </div>
                  <span
                    className="text-xs tracking-wider"
                    style={{ color: i === active ? uc.color : "rgba(0,255,65,0.2)" }}
                  >
                    {uc.title}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Right: detail panel */}
          <div
            key={active}
            className="p-8 border relative overflow-hidden"
            style={{
              borderColor: `${current.color}33`,
              background: `${current.color}04`,
            }}
          >
            {/* Corner accent */}
            <div
              className="absolute top-0 left-0 w-16 h-px"
              style={{ background: current.color }}
            />
            <div
              className="absolute top-0 left-0 w-px h-16"
              style={{ background: current.color }}
            />

            <div
              className="text-xs tracking-[0.3em] mb-2"
              style={{ color: `${current.color}60` }}
            >
              // {current.industry}
            </div>

            <h3
              className="text-xl font-bold tracking-widest mb-4"
              style={{ color: current.color }}
            >
              {current.title}
            </h3>

            <p className="text-[#00FF41]/60 text-sm leading-relaxed mb-6">
              {current.description}
            </p>

            {/* Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {current.stack.map((s) => (
                <span
                  key={s}
                  className="text-xs px-2 py-0.5 border"
                  style={{
                    borderColor: `${current.color}30`,
                    color: `${current.color}80`,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Metric */}
            <div
              className="inline-flex items-center gap-3 border px-4 py-2"
              style={{
                borderColor: `${current.color}50`,
                color: current.color,
              }}
            >
              <span className="text-xs tracking-widest opacity-60">RESULT</span>
              <span className="font-bold text-lg">{current.metric}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
