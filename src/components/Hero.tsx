import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="flex flex-col w-full min-h-[calc(100vh-88px)]">
      <div className="flex flex-col lg:flex-row flex-grow w-full">
        {/* Hero Left Column */}
        <div className="flex-1 graph-paper px-8 sm:px-12 md:px-16 lg:px-24 py-12 md:py-16 flex flex-col justify-center gap-8 relative z-10">
        
        {/* Eyebrow Chip */}
        <div className="font-code-md text-xs sm:text-sm font-bold bg-purple-accent text-on-surface border-[3px] border-on-surface px-6 py-2 self-start brutalist-shadow-sm uppercase tracking-wider">
          HEY, I'M SATYAM 👋
        </div>

        {/* Hero Headline */}
        <h1 className="font-headline-xl text-[3.75rem] sm:text-[4.5rem] md:text-[5rem] lg:text-[5.5rem] xl:text-[6rem] leading-[0.9] uppercase font-black tracking-tighter text-on-surface">
          SOFTWARE<br />ENGINEER
        </h1>

        {/* Hero Description */}
        <p className="font-body-lg text-lg sm:text-xl md:text-2xl font-medium max-w-md text-on-surface bg-cream/80 p-2 border-[3px] border-transparent">
          I build products, backend systems, and software that solves interesting problems.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 mt-2">
          <Link
            href="/#projects"
            className="bg-primary text-on-primary font-code-md font-bold text-base md:text-lg px-7 py-4 border-[3px] border-on-surface brutalist-shadow brutalist-shadow-hover uppercase tracking-wider flex items-center justify-center gap-2 text-center"
          >
            VIEW MY WORK
            <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
          </Link>
          <a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-lime text-on-surface font-code-md font-bold text-base md:text-lg px-7 py-4 border-[3px] border-on-surface brutalist-shadow brutalist-shadow-hover uppercase tracking-wider flex items-center justify-center gap-2 text-center"
          >
            DOWNLOAD RESUME
            <ArrowDown className="w-5 h-5 stroke-[2.5]" />
          </a>
        </div>

        {/* Social Buttons */}
        <div className="flex gap-4 sm:gap-6 mt-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-14 h-14 border-[3px] border-on-surface bg-cream flex items-center justify-center hover:-translate-y-1 hover:bg-lime transition-all brutalist-shadow"
          >
            <span className="font-code-md text-lg font-bold">GH</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-14 h-14 border-[3px] border-on-surface bg-cream flex items-center justify-center hover:-translate-y-1 hover:bg-lime transition-all brutalist-shadow"
          >
            <span className="font-code-md text-lg font-bold">IN</span>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter Profile"
            className="w-14 h-14 border-[3px] border-on-surface bg-cream flex items-center justify-center hover:-translate-y-1 hover:bg-lime transition-all brutalist-shadow"
          >
            <span className="font-code-md text-lg font-bold">TW</span>
          </a>
        </div>
        </div>

        {/* Divider: Mobile (Horizontal) */}
        <div className="flex lg:hidden flex-col w-full">
          <div className="h-[3px] w-full bg-on-surface" />
          <div className="h-[3px] w-full bg-lime" />
          <div className="h-[3px] w-full bg-on-surface" />
        </div>

        {/* Divider: Desktop (Vertical) */}
        <div className="hidden lg:flex flex-row h-full">
          <div className="w-[3px] h-full bg-on-surface" />
          <div className="w-[3px] h-full bg-lime" />
          <div className="w-[3px] h-full bg-on-surface" />
        </div>

        {/* Hero Right Column */}
        <div className="flex-1 bg-primary flex items-center justify-center relative px-8 sm:px-12 md:px-16 lg:px-24 py-12 md:py-16 overflow-hidden min-h-[480px]">
        <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl z-10 my-4 sm:my-8">
          
          {/* Offset Shadow Layer (Lime square) */}
          <div
            className="absolute inset-0 bg-lime border-[3px] border-on-surface translate-x-5 -translate-y-5 sm:translate-x-6 sm:-translate-y-6 aspect-square"
            aria-hidden="true"
          />

          {/* Image Container */}
          <div className="relative bg-cream border-[3px] border-on-surface overflow-hidden brutalist-shadow aspect-square">
            <Image
              src="/screen.png"
              alt="Neo-brutalist software engineer workstation illustration"
              width={600}
              height={600}
              priority
              className="w-full h-full object-cover aspect-square"
            />
          </div>

          {/* Floating Terminal Box */}
          <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 md:-bottom-10 md:-right-10 bg-on-surface text-lime border-[3px] border-on-surface p-4 sm:p-5 brutalist-shadow z-20 min-w-[240px] sm:min-w-[280px]">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4 border-b-[2px] border-white/20 pb-2 sm:pb-3">
              <div className="w-3.5 h-3.5 bg-primary border-[2px] border-on-surface rounded-full" />
              <div className="w-3.5 h-3.5 bg-lime border-[2px] border-on-surface rounded-full" />
              <div className="w-3.5 h-3.5 bg-purple-accent border-[2px] border-on-surface rounded-full" />
            </div>
            <div className="font-code-md text-sm sm:text-base md:text-lg font-bold tracking-wide">
              &gt; go run main.go<br />
              <span className="text-white mt-1.5 inline-block font-medium">
                server listening :8080
              </span>
              <span className="animate-pulse font-bold text-lime">_</span>
            </div>
          </div>

        </div>
      </div>
      </div>

      {/* Bottom Sandwich Divider */}
      <div className="w-full flex flex-col">
        <div className="h-[3px] w-full bg-on-surface" />
        <div className="h-[3px] w-full bg-lime" />
        <div className="h-[3px] w-full bg-on-surface" />
      </div>
    </section>
  );
}
