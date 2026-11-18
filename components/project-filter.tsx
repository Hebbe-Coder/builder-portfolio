"use client";
import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { categories } from "@/data/navigation";
import type { Project } from "@/types/content";
import { ProjectRow } from "@/components/ui";
import { ProjectCard } from "@/components/react-bits/ProjectCard";
export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState("All");
  const [technology, setTechnology] = useState("All");
  const [status, setStatus] = useState("All");
  const filtered = projects.filter(
    (p) =>
      (category === "All" || p.category.some((c) => c === category)) &&
      (technology === "All" || p.technologies.includes(technology)) &&
      (status === "All" || p.status === status),
  );
  const reset = () => {
    setCategory("All");
    setTechnology("All");
    setStatus("All");
  };
  return (
    <>
      <div className="filters">
        <div
          className="category-filters"
          role="group"
          aria-label="Project category"
        >
          {categories.map((item) => (
            <button
              key={item}
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="filter-secondary">
          <label>
            Technology
            <select
              value={technology}
              onChange={(e) => setTechnology(e.target.value)}
            >
              <option>All</option>
              {[...new Set(projects.flatMap((p) => p.technologies))]
                .sort()
                .map((tech) => (
                  <option key={tech}>{tech}</option>
                ))}
            </select>
          </label>
          <label>
            Status
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option>All</option>
              {projects.map((p) => (
                <option key={p.id}>{p.status}</option>
              ))}
            </select>
          </label>
          <button className="reset-button" onClick={reset}>
            <RotateCcw size={14} />
            Reset filters
          </button>
          <p className="mono" role="status" aria-live="polite">
            {filtered.length} / 3 PROJECTS
          </p>
        </div>
      </div>
      <div>
        {filtered.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectRow project={project} />
          </ProjectCard>
        ))}
        {filtered.length === 0 && (
          <div className="empty-state">
            <h2>No projects match these filters.</h2>
            <p>Try another combination to explore the three case studies.</p>
            <button className="button secondary" onClick={reset}>
              Clear all filters
              <RotateCcw size={16} />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
