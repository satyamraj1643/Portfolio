import React from "react";
import { ArrowDown } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="p-8 md:p-16 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="bg-lime text-on-surface font-code-md text-xs sm:text-sm font-bold px-4 py-1 border-[2px] border-on-surface brutalist-shadow-sm uppercase">
            05 // REACH OUT
          </span>
          <h2 className="font-headline-lg text-3xl md:text-5xl font-black uppercase tracking-tight text-on-surface">
            Let's Connect
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Details Card */}
          <div className="lg:col-span-7 bg-white border-[3px] border-on-surface p-6 sm:p-8 brutalist-shadow">
            <p className="text-lg md:text-xl font-medium mb-8">
              Whether you're hiring for a backend/distributed systems engineering role, want to discuss
              architectural challenges, or collaborate on applied AI projects — let's talk.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:satyam@example.com"
                className="flex items-center gap-4 p-4 border-[2px] border-on-surface bg-cream hover:bg-lime transition-colors brutalist-shadow-sm group"
              >
                <span className="font-code-md text-xs font-bold uppercase bg-on-surface text-cream px-3 py-1">
                  EMAIL
                </span>
                <span className="font-code-md text-base sm:text-lg font-bold text-on-surface group-hover:underline">
                  satyam@example.com
                </span>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border-[2px] border-on-surface bg-cream hover:bg-lime transition-colors brutalist-shadow-sm group"
              >
                <span className="font-code-md text-xs font-bold uppercase bg-on-surface text-cream px-3 py-1">
                  GITHUB
                </span>
                <span className="font-code-md text-base sm:text-lg font-bold text-on-surface group-hover:underline">
                  github.com/satyam
                </span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border-[2px] border-on-surface bg-cream hover:bg-lime transition-colors brutalist-shadow-sm group"
              >
                <span className="font-code-md text-xs font-bold uppercase bg-on-surface text-cream px-3 py-1">
                  LINKEDIN
                </span>
                <span className="font-code-md text-base sm:text-lg font-bold text-on-surface group-hover:underline">
                  linkedin.com/in/satyam
                </span>
              </a>
            </div>
          </div>

          {/* Resume Download Card */}
          <div className="lg:col-span-5 bg-primary text-on-primary border-[3px] border-on-surface p-6 sm:p-8 brutalist-shadow flex flex-col justify-between">
            <div>
              <div className="font-code-md text-xs font-bold text-lime uppercase tracking-wider mb-2">
                QUICK OVERVIEW
              </div>
              <h3 className="font-headline-md text-2xl sm:text-3xl font-black uppercase mb-4 text-white">
                Need a PDF copy?
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6">
                Get a concise single-page summary of technical experience, projects, and architecture specializations.
              </p>
            </div>

            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-lime text-on-surface font-code-md text-base font-bold px-6 py-4 border-[3px] border-on-surface brutalist-shadow brutalist-shadow-hover uppercase tracking-wider flex items-center justify-center gap-2"
            >
              DOWNLOAD RESUME <ArrowDown className="w-5 h-5 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
