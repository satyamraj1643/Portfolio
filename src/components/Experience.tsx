import React from "react";

export default function Experience() {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Example Corp",
      type: "Full-time",
      period: "2024 — PRESENT",
      isCurrent: true,
      points: [
        "Engineered a distributed admission-control service in Go & Redis, cutting overload downtime incidents by ~40%.",
        "Designed high-throughput token-bucket rate limiters with multi-tenant fair allocation.",
        "Instrumented distributed tracing and automated SLO tracking across core RPC endpoints.",
      ],
      tech: ["Go", "PostgreSQL", "Redis", "Docker", "AWS", "gRPC"],
    },
    {
      role: "Backend Engineer",
      company: "Startup Labs",
      type: "Full-time",
      period: "2022 — 2024",
      isCurrent: false,
      points: [
        "Built and deployed RAG-powered documentation search achieving sub-second p95 latency.",
        "Migrated high-traffic data pipelines from Node.js monolith into performant Go microservices.",
        "Designed event-driven asynchronous queuing architecture for LLM workflows and background batch tasks.",
      ],
      tech: ["Go", "Python", "PostgreSQL", "Bedrock", "LangChain"],
    },
    {
      role: "Software Engineering Intern",
      company: "Tech Platform Co.",
      type: "Internship",
      period: "2021 — 2022",
      isCurrent: false,
      points: [
        "Built service health and error budget monitoring dashboards used daily across engineering teams.",
        "Implemented Redis multi-tier caching strategies, reducing DB read load by 35%.",
      ],
      tech: ["Python", "Node.js", "PostgreSQL", "Docker"],
    },
  ];

  return (
    <section id="experience" className="p-8 md:p-16 border-b-[3px] border-on-surface bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="bg-purple-accent text-on-surface font-code-md text-xs sm:text-sm font-bold px-4 py-1 border-[2px] border-on-surface brutalist-shadow-sm uppercase">
            03 // TIMELINE
          </span>
          <h2 className="font-headline-lg text-3xl md:text-5xl font-black uppercase tracking-tight text-on-surface">
            Experience
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white border-[3px] border-on-surface p-6 sm:p-8 brutalist-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b-[2px] border-on-surface/20 pb-4">
                <div>
                  <h3 className="font-headline-md text-2xl font-black uppercase text-on-surface">
                    {exp.role}
                  </h3>
                  <span className="font-code-md text-sm font-bold text-primary">
                    {exp.company} · {exp.type}
                  </span>
                </div>
                <span
                  className={`border-[2px] border-on-surface px-4 py-1 font-code-md text-xs font-bold self-start sm:self-auto ${
                    exp.isCurrent ? "bg-lime" : "bg-cream"
                  }`}
                >
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2 text-sm sm:text-base mb-6 text-on-surface/90 list-disc list-inside">
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx}>{pt}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="bg-cream border-[2px] border-on-surface px-2.5 py-0.5 font-code-md text-xs font-bold"
                  >
                    {t}
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
