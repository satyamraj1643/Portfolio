import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";

const projectPreviews = [
  {
    src: "/pine-dashboard-concept.png",
    alt: "Pine dashboard concept with recent notes and notebooks",
    width: 2040,
    height: 1218,
  },
  {
    src: "/pine-dashboard.png",
    alt: "Pine live journaling dashboard",
    width: 3840,
    height: 2208,
  },
] as const;

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="section-inner">
        <div className="mb-6">
          <h2 className="font-headline-xl text-3xl font-semibold leading-tight text-on-surface sm:text-4xl">
            Projects
          </h2>
          <div aria-hidden="true" className="mt-3 h-px w-10 bg-on-surface" />
        </div>

        <div>
          <div role="tablist" aria-label="Projects" className="flex gap-1 overflow-x-auto border-b border-on-surface/10">
            <button
              id="project-tab-pine"
              type="button"
              role="tab"
              aria-selected="true"
              aria-controls="project-panel-pine"
              className="shrink-0 rounded-t-lg border-b-2 border-primary bg-surface-container px-5 py-3 text-sm font-semibold text-primary sm:text-base"
            >
              Pine
            </button>
          </div>

          <article id="project-panel-pine" role="tabpanel" aria-labelledby="project-tab-pine" className="pt-6">
            <div className="flex items-start gap-4">
              <Image src="/pine.png" alt="Pine logo" width={48} height={48} className="h-12 w-12 shrink-0 rounded-xl object-cover" />
              <div>
                <h3 className="font-headline-md text-2xl font-semibold text-on-surface">Pine</h3>
                <p className="mt-1 max-w-2xl text-base leading-7 text-on-surface/84">
                  An AI-powered journaling app for reflection, mood tracking, semantic search, and useful weekly recaps.
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-on-surface/8 pt-4">
              <a
                href="https://pine.brink.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-on-surface/72 underline decoration-on-surface/25 underline-offset-4 transition-colors hover:text-primary"
              >
                Try now
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://github.com/satyamraj1643/pine"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-on-surface/72 underline decoration-on-surface/25 underline-offset-4 transition-colors hover:text-primary"
              >
                Frontend code <FaGithub className="h-4 w-4 text-[#181717]" />
              </a>
              <a
                href="https://github.com/satyamraj1643/pine_backend_v2"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-on-surface/72 underline decoration-on-surface/25 underline-offset-4 transition-colors hover:text-primary"
              >
                Backend code <FaGithub className="h-4 w-4 text-[#181717]" />
              </a>
            </div>

            <div className="mt-4 flex max-w-[23rem] gap-3" aria-label="Pine screenshots">
              {projectPreviews.map((preview) => (
                <a
                  key={preview.src}
                  href="https://pine.brink.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Pine"
                  className="group relative min-w-0 flex-1 overflow-hidden rounded-lg border border-on-surface/10 bg-[#f8f5ee] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary"
                >
                  <Image
                    src={preview.src}
                    alt={preview.alt}
                    width={preview.width}
                    height={preview.height}
                    sizes="176px"
                    className="aspect-video h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <span className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full border border-on-surface/10 bg-white/95 text-on-surface shadow-sm transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </a>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
