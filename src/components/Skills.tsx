import React from "react";

export default function Skills() {
  const skillCategories = [
    {
      title: "LANGUAGES",
      badge: "</>",
      skills: ["Go (Golang)", "Python", "TypeScript", "JavaScript", "C / C++", "SQL"],
    },
    {
      title: "BACKEND & DATA",
      badge: "DB",
      skills: ["REST APIs", "gRPC & Protobuf", "PostgreSQL", "Redis", "Node.js", "MySQL", "MongoDB"],
    },
    {
      title: "SYSTEMS",
      badge: "SYS",
      skills: ["Distributed Systems", "System Design", "Concurrency", "Rate Limiting", "Data Structures"],
    },
    {
      title: "AI & RETRIEVAL",
      badge: "AI",
      skills: ["RAG Pipelines", "AI Agents", "AWS Bedrock", "Vector Embeddings", "LangChain", "Evaluation"],
    },
    {
      title: "INFRA & DEVOPS",
      badge: "OPS",
      skills: ["Docker", "AWS / Cloud", "Kubernetes", "Git & CI/CD", "OpenTelemetry", "Linux"],
    },
    {
      title: "FRONTEND",
      badge: "UI",
      skills: ["React", "Next.js", "React Native", "HTML5 / CSS3", "TailwindCSS", "Redux"],
    },
  ];

  return (
    <section id="skills" className="p-8 md:p-16 border-b-[3px] border-on-surface graph-paper-dense">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="bg-primary text-on-primary font-code-md text-xs sm:text-sm font-bold px-4 py-1 border-[2px] border-on-surface brutalist-shadow-sm uppercase">
            04 // TOOLKIT
          </span>
          <h2 className="font-headline-lg text-3xl md:text-5xl font-black uppercase tracking-tight text-on-surface">
            Skills &amp; Technologies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white border-[3px] border-on-surface p-6 brutalist-shadow"
            >
              <h3 className="font-code-md text-sm font-bold uppercase tracking-wider mb-4 pb-2 border-b-[2px] border-on-surface/20 flex items-center justify-between">
                <span>{cat.title}</span>
                <span className="text-primary font-mono">{cat.badge}</span>
              </h3>
              <div className="flex flex-wrap gap-2 font-code-md text-xs font-bold">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="bg-cream border-[2px] border-on-surface px-3 py-1.5 hover:bg-lime transition-colors"
                  >
                    {skill}
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
