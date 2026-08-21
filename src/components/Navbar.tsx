"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "motion/react";

const navigation = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Work", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Resume", href: "/resume.pdf", external: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  return (
    <nav className="sticky top-0 z-50 border-b border-on-surface/15 bg-cream" aria-label="Main navigation">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center px-5 py-4 sm:px-8 md:grid-cols-[1fr_auto_1fr] lg:px-12">
        <Link href="/#home" className="hidden justify-self-start font-code-md text-[10px] font-bold uppercase tracking-[0.14em] text-on-surface/55 transition-colors hover:text-primary md:block">
          Portfolio / 2026
        </Link>

        <div className="hidden items-center justify-self-center gap-6 md:flex">
          {navigation.map((item) => item.external ? (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="nav-link !text-lg">{item.label}</a>
          ) : (
            <Link key={item.label} href={item.href} className="nav-link !text-lg">{item.label}</Link>
          ))}
        </div>

        <div className="flex justify-self-end gap-2">
          <button
            onClick={() => setIsContactOpen(true)}
            className="nav-contact hidden bg-primary px-4 py-2 font-code-md text-sm font-bold text-white hover:bg-primary-dark md:inline-flex"
          >
            Contact
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center border border-on-surface/15 bg-white text-on-surface md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-4 w-4" /> : <span className="text-lg leading-none">≡</span>}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden border-t border-on-surface/10 bg-cream md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4 sm:px-8">
              {navigation.map((item) => item.external ? (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="nav-link" onClick={() => setIsOpen(false)}>{item.label}</a>
              ) : (
                <Link key={item.label} href={item.href} className="nav-link" onClick={() => setIsOpen(false)}>{item.label}</Link>
              ))}
              <button
                onClick={() => { setIsOpen(false); setIsContactOpen(true); }}
                className="nav-contact mt-3 bg-primary px-4 py-3 text-left font-code-md text-sm font-bold text-white"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div className="h-0.5 origin-left bg-primary" style={{ scaleX: progress }} />

      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            className="fixed inset-0 z-[60] grid place-items-center bg-on-surface/35 px-5"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => setIsContactOpen(false)}
          >
            <motion.section
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-dialog-title"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: 12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onMouseDown={(event) => event.stopPropagation()}
              className="w-full max-w-md border-t-2 border-primary bg-cream p-6 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h2 id="contact-dialog-title" className="font-headline-md text-3xl font-black tracking-[-0.04em] text-on-surface">Let&apos;s talk.</h2>
                </div>
                <button onClick={() => setIsContactOpen(false)} className="cursor-pointer border border-on-surface/15 p-2 text-on-surface transition-colors hover:border-primary hover:bg-primary hover:text-white" aria-label="Close contact dialog">
                  <X className="h-4 w-4" />
                </button>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-on-surface/70">For a role, collaboration, or a quick conversation, you can call or email me directly.</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a href="tel:+917050910817" className="flex items-center justify-center gap-2 border border-on-surface/20 bg-white px-4 py-3 font-code-md text-sm font-bold text-on-surface transition-colors hover:bg-lime">
                  <Phone className="h-4 w-4" /> +91 70509 10817
                </a>
                <a href="mailto:satyamraj1643@gmail.com" className="flex items-center justify-center gap-2 bg-primary px-4 py-3 font-code-md text-sm font-bold text-white transition-colors hover:bg-primary-dark">
                  <Mail className="h-4 w-4" /> Send an email
                </a>
              </div>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
