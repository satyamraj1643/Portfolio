const skillGroups = [
  {
    title: "Product Skills",
    skills: [
      "Product discovery",
      "PRD writing",
      "Feature scoping",
      "User flows",
      "Stakeholder alignment",
      "Product QA",
    ],
  },
  {
    title: "Technical Skills",
    skills: [
      "AI workflows",
      "LLM evaluation",
      "React",
      "Node.js",
      "Go",
      "Python",
      "PostgreSQL",
    ],
  },
] as const;

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-inner">
        <div className="mb-6">
          <h2 className="font-headline-xl text-3xl font-semibold leading-tight text-on-surface sm:text-4xl">
            Skills
          </h2>
          <div aria-hidden="true" className="mt-3 h-px w-10 bg-on-surface" />
        </div>

        <div className="grid gap-7 sm:grid-cols-2 sm:gap-10">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-headline-md text-lg font-semibold text-on-surface">
                {group.title}
              </h3>

              <p className="mt-3 text-[15px] leading-7 text-on-surface/84">
                {group.skills.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
