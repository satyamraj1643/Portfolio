"use client";

import { useEffect, useState } from "react";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProfileRail, { portfolioSections, type PortfolioSection } from "@/components/ProfileRail";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

function isPortfolioSection(value: string): value is PortfolioSection {
  return portfolioSections.some((section) => section === value);
}

export default function PortfolioTabs() {
  const [activeSection, setActiveSection] = useState<PortfolioSection>("experience");

  useEffect(() => {
    const sections = portfolioSections
      .map((section) => document.getElementById(section))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible && isPortfolioSection(visible.target.id)) {
          setActiveSection(visible.target.id);
          window.history.replaceState(null, "", `#${visible.target.id}`);
        }
      },
      { rootMargin: "-18% 0px -58% 0px", threshold: [0.08, 0.2, 0.45] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const changeSection = (section: PortfolioSection) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${section}`);
  };

  return (
    <main className="min-h-screen w-full px-4 py-5 font-sans sm:px-7 sm:py-8">
      <div className="mx-auto grid w-full max-w-[82rem] items-start gap-5 lg:grid-cols-[26rem_minmax(0,54rem)] lg:gap-7">
        <ProfileRail activeSection={activeSection} onSectionChange={changeSection} />

        <div className="min-w-0 space-y-5 lg:space-y-6">
          <div className="overflow-hidden rounded-[22px] border border-on-surface/5 bg-surface-container-low shadow-[0_18px_46px_rgba(31,45,71,0.10)]"><Hero /></div>
          <div className="overflow-hidden rounded-[22px] border border-on-surface/5 bg-surface-container-low shadow-[0_18px_46px_rgba(31,45,71,0.10)]"><Experience /></div>
          <div className="overflow-hidden rounded-[22px] border border-on-surface/5 bg-surface-container-low shadow-[0_18px_46px_rgba(31,45,71,0.10)]"><Projects /></div>
          <div className="overflow-hidden rounded-[22px] border border-on-surface/5 bg-surface-container-low shadow-[0_18px_46px_rgba(31,45,71,0.10)]"><Skills /></div>
          <div className="overflow-hidden rounded-[22px] border border-on-surface/5 bg-surface-container-low shadow-[0_18px_46px_rgba(31,45,71,0.10)]"><Footer /></div>
        </div>
      </div>
      <p className="mx-auto mt-5 max-w-4xl px-2 text-center text-xs leading-5 text-on-surface/58">
        © 2026 Satyam Raj. Content owned by Satyam Raj. Associated documents are issued by the relevant authorities.
      </p>
    </main>
  );
}
