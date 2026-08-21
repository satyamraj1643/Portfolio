import React from "react";
import SectionHeader from "@/components/SectionHeader";

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="section-inner">
        <SectionHeader label="About" accent="primary" />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(16rem,0.65fr)]">
          <div className="space-y-5 text-base leading-[1.75] text-on-surface/82">
            <p>
              I&apos;m Satyam — an engineer, aspiring Product Manager, fantasy reader, and someone who is almost always curious about something new.
            </p>
            <p>
              I like understanding how things work, building things from scratch, and occasionally overthinking how they could work better.
            </p>
            <p>
              These days, I&apos;m mostly exploring technology, products, books, and the slightly harder problem of figuring out what a good life actually looks like.
            </p>
            <p className="pt-1 font-medium text-on-surface">
              Want to talk? Drop me a mail here: {" "}
              <a href="mailto:satyamraj1643@gmail.com" className="text-primary underline decoration-primary/35 underline-offset-4 transition-colors hover:text-primary-dark">
                satyamraj1643@gmail.com
              </a>
            </p>
          </div>

          <div className="border-l-2 border-primary pl-5">
            <p className="font-code-md text-[10px] font-bold uppercase tracking-[0.13em] text-primary">Education &amp; recognition</p>
            <div className="mt-5 space-y-5 text-sm leading-relaxed">
              <div>
                <strong className="block text-base text-on-surface">B.Tech · Computer Science</strong>
                <span className="text-on-surface/65">IIIT Bhagalpur · 2022—2026</span>
                <span className="mt-1 block font-code-md text-xs font-bold text-primary">CGPA 9.43 · Ranked 2nd</span>
              </div>
              <ul className="space-y-2 border-t border-on-surface/12 pt-4 text-on-surface/75">
                <li>Knight on LeetCode · 800+ problems</li>
                <li>CBSE Class XII gold medalist</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
