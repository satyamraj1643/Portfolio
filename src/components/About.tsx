import React from "react";

export default function About() {
  return (
    <section id="about" className="p-8 md:p-16 border-b-[3px] border-on-surface bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="bg-primary text-on-primary font-code-md text-xs sm:text-sm font-bold px-4 py-1 border-[2px] border-on-surface brutalist-shadow-sm uppercase">
            01 // ABOUT
          </span>
          <h2 className="font-headline-lg text-3xl md:text-5xl font-black uppercase tracking-tight text-on-surface">
            Engineering Philosophy
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Bio Card */}
          <div className="lg:col-span-7 bg-white border-[3px] border-on-surface p-6 md:p-8 brutalist-shadow flex flex-col justify-between gap-6">
            <div className="space-y-4 text-base md:text-lg leading-relaxed">
              <p>
                I'm a software engineer who cares deeply about how systems behave under pressure —
                latency spikes, partial failures, cascading retries, and keeping services predictable.
              </p>
              <p>
                Most of my work sits at the intersection of{" "}
                <strong className="bg-lime/50 px-1 border-b-[2px] border-on-surface font-bold">
                  backend engineering
                </strong>{" "}
                and{" "}
                <strong className="bg-purple-accent/50 px-1 border-b-[2px] border-on-surface font-bold">
                  distributed systems
                </strong>
                : designing APIs that stay reliable, services that fail independently, and data flows that
                remain consistent under heavy load.
              </p>
              <p>
                I apply the same engineering discipline to{" "}
                <strong className="bg-primary/20 px-1 border-b-[2px] border-on-surface font-bold">
                  applied AI &amp; retrieval
                </strong>{" "}
                — building performant RAG pipelines, agent orchestration, and evaluation frameworks.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t-[2px] border-on-surface/20 font-code-md text-sm font-bold">
              <div className="bg-cream border-[2px] border-on-surface p-3">
                <span className="text-xs text-on-surface/70 block uppercase">Location</span>
                <span>India (Open to Remote)</span>
              </div>
              <div className="bg-cream border-[2px] border-on-surface p-3">
                <span className="text-xs text-on-surface/70 block uppercase">Status</span>
                <span className="text-primary font-bold">Available for Roles</span>
              </div>
            </div>
          </div>

          {/* Focus & Learning Sidecards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-lime/20 border-[3px] border-on-surface p-6 brutalist-shadow">
              <h3 className="font-code-md text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-lime border-[2px] border-on-surface inline-block" />
                Primary Focus Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white border-[2px] border-on-surface px-3 py-1 font-code-md text-xs font-bold">
                  Backend Architecture
                </span>
                <span className="bg-white border-[2px] border-on-surface px-3 py-1 font-code-md text-xs font-bold">
                  Distributed Systems
                </span>
                <span className="bg-white border-[2px] border-on-surface px-3 py-1 font-code-md text-xs font-bold">
                  High-Throughput APIs
                </span>
                <span className="bg-white border-[2px] border-on-surface px-3 py-1 font-code-md text-xs font-bold">
                  AI Retrieval &amp; RAG
                </span>
                <span className="bg-white border-[2px] border-on-surface px-3 py-1 font-code-md text-xs font-bold">
                  Cloud Infrastructure
                </span>
              </div>
            </div>

            <div className="bg-purple-accent/20 border-[3px] border-on-surface p-6 brutalist-shadow">
              <h3 className="font-code-md text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-purple-accent border-[2px] border-on-surface inline-block" />
                Currently Exploring
              </h3>
              <ul className="font-code-md text-xs sm:text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">›</span> Advanced Go concurrency &amp; memory models
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">›</span> Multi-region data replication &amp; consensus
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">›</span> Production LLM evaluation &amp; guardrails
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
