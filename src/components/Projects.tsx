import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      slug: "janus",
      number: "01",
      tag: "BACKEND / INFRA",
      tagColor: "bg-primary text-on-primary",
      title: "Janus",
      desc: "Distributed admission control and rate-limiting service for multi-tenant systems. Evaluates token-bucket quotas, fair queuing, and downstream health probes.",
      metricLabel: "KEY METRIC",
      metricValue: "~40% reduction in cluster overload incidents & sub-millisecond hot path.",
      metricColor: "text-primary",
      tech: ["Go", "Redis", "Lua", "PostgreSQL", "Docker"],
      detailUrl: "/projects/janus",
      githubUrl: "https://github.com",
    },
    {
      slug: "pine",
      number: "02",
      tag: "AI / FULL-STACK",
      tagColor: "bg-purple-accent text-on-surface",
      title: "Pine",
      desc: "AI-assisted journaling platform that treats personal writing as a private knowledge base. Features semantic search, grounded reflections, and client-side encryption.",
      metricLabel: "KEY ARCHITECTURE",
      metricValue: "Vector embeddings with scoped private retrieval over AWS Bedrock.",
      metricColor: "text-purple-700",
      tech: ["Go", "React", "Bedrock", "Redis", "PostgreSQL"],
      detailUrl: "/projects/pine",
      githubUrl: "https://github.com",
    },
    {
      slug: "nexus",
      number: "03",
      tag: "SYSTEMS / NETWORKING",
      tagColor: "bg-lime text-on-surface",
      title: "Nexus",
      desc: "Lightweight service mesh control plane. Provides dynamic canary routing, circuit breaking, and OpenTelemetry instrumentation without heavyweight operational baggage.",
      metricLabel: "HIGHLIGHT",
      metricValue: "Pure Envoy xDS dynamic control plane written in Go with gRPC.",
      metricColor: "text-green-700",
      tech: ["Go", "Envoy", "gRPC", "OTel", "Kubernetes"],
      detailUrl: "/projects/nexus",
      githubUrl: "https://github.com",
    },
    {
      slug: "tracekit",
      number: "04",
      tag: "OBSERVABILITY",
      tagColor: "bg-cream border-[2px] border-on-surface text-on-surface",
      title: "Tracekit",
      desc: "Zero-overhead structured logging and correlation ID propagation library for Go microservices, seamlessly bridging slog and OpenTelemetry spans.",
      metricLabel: "PERFORMANCE",
      metricValue: "Zero allocations on critical hot logging paths with context injection.",
      metricColor: "text-on-surface",
      tech: ["Go", "slog", "OpenTelemetry", "Docker"],
      githubUrl: "https://github.com",
    },
  ];

  return (
    <section id="projects" className="p-8 md:p-16 border-b-[3px] border-on-surface graph-paper">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="bg-lime text-on-surface font-code-md text-xs sm:text-sm font-bold px-4 py-1 border-[2px] border-on-surface brutalist-shadow-sm uppercase">
            02 // PROJECTS
          </span>
          <h2 className="font-headline-lg text-3xl md:text-5xl font-black uppercase tracking-tight text-on-surface">
            Selected Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <article
              key={proj.slug}
              className="bg-white border-[3px] border-on-surface p-6 sm:p-8 brutalist-shadow flex flex-col justify-between relative group hover:-translate-y-1 transition-transform"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className={`font-code-md text-xs font-bold px-3 py-1 border-[2px] border-on-surface uppercase ${proj.tagColor}`}>
                    {proj.tag}
                  </span>
                  <span className="font-code-md text-xs font-bold text-on-surface/60">
                    {proj.number}
                  </span>
                </div>
                <h3 className="font-headline-md text-2xl sm:text-3xl font-black uppercase mb-3 text-on-surface">
                  {proj.title}
                </h3>
                <p className="text-on-surface/80 text-sm sm:text-base mb-6 leading-relaxed">
                  {proj.desc}
                </p>
                <div className="bg-cream border-[2px] border-on-surface p-3 mb-6 font-code-md text-xs font-bold">
                  <span className={`${proj.metricColor} block mb-1 font-bold`}>{proj.metricLabel}:</span>
                  <span>{proj.metricValue}</span>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-cream border-[2px] border-on-surface px-2.5 py-1 font-code-md text-xs font-bold"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {proj.detailUrl ? (
                    <>
                      <Link
                        href={proj.detailUrl}
                        className="flex-grow bg-on-surface text-cream hover:bg-primary font-code-md text-sm font-bold py-3 text-center border-[2px] border-on-surface transition-colors flex items-center justify-center gap-2"
                      >
                        CASE STUDY <ArrowRight className="w-4 h-4" />
                      </Link>
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${proj.title} on GitHub`}
                        className="bg-cream hover:bg-lime text-on-surface font-code-md text-sm font-bold px-4 py-3 border-[2px] border-on-surface transition-colors flex items-center justify-center"
                      >
                        GH
                      </a>
                    </>
                  ) : (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-grow bg-on-surface text-cream hover:bg-primary font-code-md text-sm font-bold py-3 text-center border-[2px] border-on-surface transition-colors flex items-center justify-center gap-2"
                    >
                      SOURCE REPOSITORY <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
