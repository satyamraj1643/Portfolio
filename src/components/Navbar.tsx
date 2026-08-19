"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="flex flex-col w-full sticky top-0 z-50 bg-cream"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="flex flex-col md:flex-row justify-between items-stretch w-full">
      {/* Brand box */}
      <div className="flex items-center justify-between border-b-[3px] md:border-b-0 md:border-r-[3px] border-on-surface bg-primary text-on-primary font-code-md text-xl font-bold px-8 sm:px-12 md:px-16 lg:px-24 py-6 md:py-7 tracking-widest whitespace-nowrap">
        <Link href="/#home" className="flex items-center gap-2 hover:opacity-90">
          &lt;/&gt; SATYAM RAJ
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none p-1"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Nav Links */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row flex-grow gap-6 lg:gap-10 items-center justify-center px-8 py-6 md:py-0 bg-cream border-b-[3px] md:border-b-0 border-on-surface`}
      >
        <Link
          href="/#about"
          onClick={() => setIsOpen(false)}
          className="font-code-md text-base uppercase font-bold tracking-wider text-on-surface px-3 py-2 border-[2px] border-transparent hover:border-on-surface hover:bg-lime hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all duration-150"
        >
          ABOUT
        </Link>
        <Link
          href="/#projects"
          onClick={() => setIsOpen(false)}
          className="font-code-md text-base uppercase font-bold tracking-wider text-on-surface px-3 py-2 border-[2px] border-transparent hover:border-on-surface hover:bg-lime hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all duration-150"
        >
          WORK
        </Link>
        <Link
          href="/#experience"
          onClick={() => setIsOpen(false)}
          className="font-code-md text-base uppercase font-bold tracking-wider text-on-surface px-3 py-2 border-[2px] border-transparent hover:border-on-surface hover:bg-lime hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all duration-150"
        >
          EXPERIENCE
        </Link>
        <Link
          href="/#skills"
          onClick={() => setIsOpen(false)}
          className="font-code-md text-base uppercase font-bold tracking-wider text-on-surface px-3 py-2 border-[2px] border-transparent hover:border-on-surface hover:bg-lime hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all duration-150"
        >
          SKILLS
        </Link>
        <a
          href="/assets/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          className="font-code-md text-base uppercase font-bold tracking-wider text-on-surface px-3 py-2 border-[2px] border-transparent hover:border-on-surface hover:bg-lime hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all duration-150"
        >
          RESUME
        </a>
      </div>

      {/* CTA Button Container */}
      <div className="flex items-center justify-center px-8 sm:px-12 md:px-16 lg:px-24 py-6 md:py-0 md:border-l-[3px] border-on-surface bg-cream">
        <Link
          href="/#contact"
          onClick={() => setIsOpen(false)}
          className="bg-lime text-on-surface font-code-md text-lg font-bold px-7 py-3 border-[3px] border-on-surface brutalist-shadow brutalist-shadow-hover uppercase tracking-wider flex items-center justify-center whitespace-nowrap"
        >
          CONTACT ME
        </Link>
      </div>
      </div>
      
      {/* Sandwich Divider */}
      <div className="w-full flex flex-col">
        <div className="h-[3px] w-full bg-on-surface" />
        <div className="h-[3px] w-full bg-lime" />
        <div className="h-[3px] w-full bg-on-surface" />
      </div>
    </nav>
  );
}
