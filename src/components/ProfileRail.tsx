"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub, SiGmail, SiInstagram, SiLeetcode } from "react-icons/si";
import PlayfulPortrait from "@/components/PlayfulPortrait";

export const portfolioSections = ["experience", "projects", "skills"] as const;
export type PortfolioSection = (typeof portfolioSections)[number];

const socialLinks = [
  { href: "https://linkedin.com/in/satyamraj1643", label: "LinkedIn", color: "#0A66C2", Icon: FaLinkedin },
  { href: "mailto:satyamraj1643@gmail.com", label: "Gmail", color: "#EA4335", Icon: SiGmail },
  { href: "https://github.com/satyamraj1643", label: "GitHub", color: "#181717", Icon: SiGithub },
  { href: "https://www.instagram.com/satyam_jha1643/", label: "Instagram", color: "#E4405F", Icon: SiInstagram },
  { href: "https://leetcode.com/u/satyamraj1532/", label: "LeetCode", color: "#FFA116", Icon: SiLeetcode },
];

const pageLinks: { id: PortfolioSection; label: string }[] = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
];

type ProfileRailProps = {
  activeSection: PortfolioSection;
  onSectionChange: (section: PortfolioSection) => void;
};

export default function ProfileRail({ activeSection, onSectionChange }: ProfileRailProps) {
  const [isPortraitDragging, setIsPortraitDragging] = useState(false);

  return (
    <aside className={`relative self-start rounded-[22px] border border-on-surface/5 bg-surface-container-low text-on-surface shadow-[0_18px_46px_rgba(31,45,71,0.10)] lg:sticky lg:top-8 lg:min-h-[calc(100vh-4rem)] ${isPortraitDragging ? "z-[1004]" : "z-10"}`}>
      <div className="flex h-full p-5 sm:p-7">
        <div className="mx-auto flex w-full max-w-md flex-col lg:max-w-none">
          <PlayfulPortrait onDragStateChange={setIsPortraitDragging} />

          <div className="mt-6">
            <h2 className="font-headline-md text-3xl font-semibold leading-tight text-on-surface">Satyam Raj</h2>
            <p className="mt-3 max-w-[18rem] text-sm font-medium leading-7 text-on-surface/72">
              An aspiring Product Manager, surprisingly good at engineering things.
            </p>

            <div className="mt-5 border-t border-on-surface/8 pt-4">
              <p className="text-sm font-semibold text-on-surface">Computer Science Graduate @ 2026</p>
              <p className="mt-1 text-sm leading-6 text-on-surface/68">Indian Institute of Information Technology Bhagalpur</p>
              <p className="mt-2 text-sm font-semibold text-primary">CGPA: 9.43</p>
            </div>

          </div>

          <nav aria-label="Portfolio sections" className="mt-5 grid grid-cols-2 gap-2 border-t border-on-surface/10 pt-5 lg:grid-cols-1">
            {pageLinks.map((item) => {
              const isActive = item.id === activeSection;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? "location" : undefined}
                  onClick={(event) => { event.preventDefault(); onSectionChange(item.id); }}
                  className={`group flex min-h-11 items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-semibold transition-[background-color,color,transform] ${isActive ? "bg-lime text-primary" : "bg-surface-container text-on-surface/78 hover:-translate-y-0.5 hover:bg-surface-variant hover:text-on-surface"}`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className={`h-4 w-4 transition-transform ${isActive ? "translate-x-0 text-primary" : "text-on-surface/45 group-hover:translate-x-0.5 group-hover:text-primary"}`} />
                </a>
              );
            })}
          </nav>

          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="mt-6 flex items-center justify-center rounded-xl bg-primary px-4 py-3.5 font-code-md text-sm font-bold text-on-primary transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-primary-dark">
            Download Resume
          </a>
          <div className="mt-5 grid grid-cols-3 justify-items-center gap-x-3 gap-y-4 border-t border-on-surface/8 pt-5 sm:grid-cols-5">
            {socialLinks.map(({ href, label, color, Icon }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={label} title={label} className="flex w-14 flex-col items-center gap-2 text-center transition-transform hover:-translate-y-0.5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white shadow-sm ring-1 ring-on-surface/5">
                  <Icon className="h-6 w-6" style={{ color }} />
                </span>
                <span className="text-[11px] font-semibold leading-none text-on-surface/78">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
