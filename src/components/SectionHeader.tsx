import React from "react";

type SectionHeaderProps = {
  label: string;
  title?: string;
  accent: "primary" | "lime" | "purple";
};

const accentClasses = {
  primary: "border-primary text-primary",
  lime: "border-primary text-on-surface",
  purple: "border-primary text-on-surface",
};

export default function SectionHeader({ label, title, accent }: SectionHeaderProps) {
  return (
    <div className="section-heading">
      <span className={`section-kicker ${accentClasses[accent]}`}>{label}</span>
      {title && (
        <h2 className="font-headline-lg text-2xl font-semibold tracking-[-0.025em] text-on-surface md:text-3xl">
          {title}
        </h2>
      )}
    </div>
  );
}
