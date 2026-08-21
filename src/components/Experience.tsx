"use client";

import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    role: "AI Product Analyst - Intern",
    company: "Kookar AI",
    logo: "/kookar.svg",
    logoClass: "h-9 w-9",
    website: "https://kookar.in/",
    credentials: [
      { label: "Completion certificate", href: "/credentials/Kookar_Completion_Certificate_Satyam.pdf" },
      { label: "Letter of recommendation", href: "/credentials/Kookar_lor.pdf" },
    ],
    location: "Gurugram, India",
    period: "Jul 2025 — May 2026",
    points: [
      "Owned multiple AI products across lead capture, onboarding, customer interaction, and post-onboarding engagement.",
      "Redesigned the company’s primary customer-facing AI assistant from a 1-prompt setup to a 5-agent workflow, improving response accuracy from 35% to 90% through clearer memory, routing, and response rules.",
      "Reduced top-of-funnel drop-off by 10% by improving the lead-capture agent’s qualification flow and response quality.",
      "Launched a 0-to-1 onboarding agent that collected required customer data, triggered missing-detail follow-ups, and reached 95% accuracy against defined onboarding key results.",
    ],
  },
  {
    role: "Fullstack Developer - Intern",
    company: "Fento",
    logo: "/fento.svg",
    logoClass: "h-8 w-24",
    website: "https://www.fento.in/",
    credentials: [
      { label: "Completion certificate", href: "/credentials/Fento_Completion_Certificate_Satyam.pdf" },
    ],
    location: "Remote",
    period: "Sep 2024 — Jan 2025",
    points: [
      "Led 0-to-1 product ownership of Fento’s cross-platform app, defining user flows, product decisions, UX direction, and MVP scope from stakeholder requirements while executing and shipping features as the product builder.",
      "Mapped 20+ user actions to system outcomes, defining product behavior and implementing cloud-backed workflows across the app.",
    ],
  },
  {
    role: "Frontend developer Intern",
    company: "BotGauge",
    logo: "/botgauge.png",
    logoClass: "h-10 w-10",
    website: "https://www.botgauge.com/",
    credentials: [
      { label: "Completion certificate", href: "/credentials/Botgauge_Completion_Certificate_Satyam.pdf" },
    ],
    location: "Remote",
    period: "Feb 2024 — May 2024",
    points: [
      "Shipped frontend features for BotGauge’s beta product, translating stakeholder feedback into product improvements across core user workflows.",
    ],
  },
] as const;

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const reduceMotion = useReducedMotion();
  const activeExperience = experiences[activeIndex];

  const selectExperience = (index: number) => {
    setActiveIndex(index);
    tabRefs.current[index]?.focus();
  };

  const handleTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number | null = null;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % experiences.length;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + experiences.length) % experiences.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = experiences.length - 1;

    if (nextIndex !== null) {
      event.preventDefault();
      selectExperience(nextIndex);
    }
  };

  return (
    <section id="experience" className="section-shell">
      <div className="section-inner">
        <div className="mb-6">
          <h2 className="font-headline-xl text-3xl font-semibold leading-tight text-on-surface sm:text-4xl">
            Experience
          </h2>
          <div aria-hidden="true" className="mt-3 h-px w-10 bg-on-surface" />
        </div>

        <div>
          <div
            role="tablist"
            aria-label="Companies"
            className="flex gap-1 overflow-x-auto border-b border-on-surface/10"
          >
            {experiences.map((experience, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={experience.company}
                  ref={(element) => { tabRefs.current[index] = element; }}
                  id={`experience-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`experience-panel-${index}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                  className={`shrink-0 rounded-t-lg border-b-2 px-5 py-3 text-sm font-semibold transition-colors sm:text-base ${isActive ? "border-primary bg-surface-container text-primary" : "border-transparent text-on-surface/45 hover:bg-surface-container/60 hover:text-on-surface/72"}`}
                >
                  {experience.company}
                </button>
              );
            })}
          </div>

          <div className="pt-6">
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={activeExperience.company}
                id={`experience-panel-${activeIndex}`}
                role="tabpanel"
                aria-labelledby={`experience-tab-${activeIndex}`}
                initial={reduceMotion ? false : { opacity: 0, x: 6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, x: -4 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                <header className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="font-headline-md text-2xl font-semibold leading-tight text-on-surface sm:text-3xl">
                      {activeExperience.role}
                      <span className="text-primary"> @ {activeExperience.company}</span>
                    </h3>
                    <p className="mt-2 text-sm text-on-surface/64 sm:text-base">
                      {activeExperience.period} <span aria-hidden="true">·</span> {activeExperience.location}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                      {activeExperience.credentials.map((credential) => (
                        <a
                          key={credential.label}
                          href={credential.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1.5 text-xs font-medium text-on-surface/68 underline decoration-on-surface/25 underline-offset-4 transition-colors hover:text-primary"
                        >
                          {credential.label}
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      ))}
                    </div>
                  </div>
                  <a
                    href={activeExperience.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${activeExperience.company} website`}
                    title={`Visit ${activeExperience.company} website`}
                    className="mt-0.5 shrink-0 rounded-md opacity-80 transition-[opacity,transform] hover:scale-[1.04] hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    <Image
                      src={activeExperience.logo}
                      alt=""
                      width={96}
                      height={40}
                      className={`object-contain ${activeExperience.logoClass}`}
                    />
                  </a>
                </header>
                <ul className="mt-6 list-disc space-y-3 border-t border-on-surface/8 pt-6 pl-5 text-[15px] leading-7 text-on-surface/88 marker:text-primary">
                  {activeExperience.points.map((point) => (
                    <li key={point} className="pl-1">{point}</li>
                  ))}
                </ul>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
