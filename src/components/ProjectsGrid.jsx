"use client";

import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import { categories } from "../data/projects";

export default function ProjectsGrid({ projects }) {
  const [active, setActive] = useState("all");

  const filtered = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.category === active)),
    [active, projects]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-14" role="tablist" aria-label="Filter projects by category">
        {categories.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={active === cat.id}
            onClick={() => setActive(cat.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-colors duration-200 ${
              active === cat.id
                ? "bg-accent text-bg border-accent"
                : "border-line text-muted hover:text-text hover:border-accent/50"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-muted text-center py-16">No projects in this category yet.</p>
      )}
    </div>
  );
}
