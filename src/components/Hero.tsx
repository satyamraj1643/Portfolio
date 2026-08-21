import React from "react";

export default function Hero() {
  return (
    <section id="home" className="px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
      <div className="max-w-3xl pr-3 sm:pr-8">
        <h1 className="font-headline-xl text-3xl font-semibold leading-tight text-on-surface sm:text-4xl">
          About me
        </h1>
        <div aria-hidden="true" className="mt-3 h-px w-10 bg-on-surface" />
        <p className="mt-5 max-w-2xl text-base leading-8 text-on-surface/88">
          I&apos;m Satyam — an engineer, aspiring Product Manager, fantasy reader, and someone who is almost always curious about something new.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-8 text-on-surface/88">
          I like understanding how things work, building things from scratch, and occasionally overthinking how they could work better.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-8 text-on-surface/88">
          These days, I&apos;m mostly exploring technology, products, books, and the slightly harder problem of figuring out what a good life actually looks like.
        </p>
        <p className="mt-5 text-base font-medium text-on-surface">
          Want to talk? Drop me a mail here: {" "}
          <a href="mailto:satyamraj1643@gmail.com" className="text-primary underline decoration-primary/35 underline-offset-4 transition-colors hover:text-primary-dark">
            satyamraj1643@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
