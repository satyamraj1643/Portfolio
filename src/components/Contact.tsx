import React from "react";
import { ArrowDown } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const contactLinks = [
  { label: "EMAIL", value: "satyamraj1643@gmail.com", href: "mailto:satyamraj1643@gmail.com" },
  { label: "GITHUB", value: "github.com/satyamraj1643", href: "https://github.com/satyamraj1643" },
  { label: "LINKEDIN", value: "linkedin.com/in/satyamraj1643", href: "https://www.linkedin.com/in/satyamraj1643/" },
];

export default function Contact() {
  return (
    <section id="contact" className="section-shell border-b-0">
      <div className="section-inner">
        <SectionHeader label="Contact" title="Let's Connect" accent="lime" />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <div className="neo-card p-5 md:p-6 lg:col-span-7">
            <p className="mb-5 max-w-2xl text-sm font-medium leading-relaxed md:text-base">
              I&apos;m open to Associate Product Manager and AI product roles, interesting customer problems, and conversations about thoughtful product delivery.
            </p>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-3 border-l-2 border-transparent bg-surface-container p-3 transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-lime/65"
                >
                  <span className="bg-on-surface px-2 py-1 font-code-md text-[10px] font-bold text-cream">{link.label}</span>
                  <span className="truncate font-code-md text-xs font-bold text-on-surface group-hover:underline sm:text-sm">{link.value}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between border-t-2 border-lime bg-primary p-5 text-on-primary md:p-6 lg:col-span-5">
            <div>
              <div className="mb-2 font-code-md text-[10px] font-bold uppercase tracking-wider text-lime">QUICK OVERVIEW</div>
              <h3 className="mb-3 font-headline-md text-xl font-semibold tracking-[-0.025em] text-white sm:text-2xl">Need a PDF copy?</h3>
              <p className="mb-5 text-sm leading-relaxed text-white/90">A concise overview of product ownership, outcomes, and delivery experience.</p>
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-lime px-5 py-3 font-code-md text-sm font-bold uppercase tracking-wider text-on-surface soft-shadow-hover"
            >
              DOWNLOAD RESUME <ArrowDown className="h-5 w-5 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
