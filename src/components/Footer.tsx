import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center px-8 py-6 w-full border-t-[3px] border-on-surface bg-on-surface text-cream">
      <div className="font-headline-md text-2xl font-black uppercase tracking-widest">
        SATYAM RAJ
      </div>
      <div className="font-code-md text-xs sm:text-sm font-bold opacity-90 my-4 md:my-0 tracking-wider">
        © 2026 SATYAM RAJ. SYSTEM ONLINE.
      </div>
      <div className="flex gap-6 sm:gap-8 font-code-md font-bold text-xs sm:text-sm">
        <a
          className="text-lime hover:text-white hover:underline transition-colors uppercase tracking-widest"
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          GITHUB
        </a>
        <a
          className="text-lime hover:text-white hover:underline transition-colors uppercase tracking-widest"
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINKEDIN
        </a>
        <a
          className="text-lime hover:text-white hover:underline transition-colors uppercase tracking-widest"
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          TWITTER
        </a>
      </div>
    </footer>
  );
}
