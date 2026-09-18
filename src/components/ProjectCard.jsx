import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ExternalLinkIcon, GithubIcon } from "./icons/UiIcons";

const categoryLabel = { fullstack: "Full-Stack", frontend: "Frontend" };

export default function ProjectCard({ project, priority = false }) {
  const { slug, title, tagline, description, category, image, liveUrl, githubUrl, caseStudy } = project;

  return (
    <div className="group card overflow-hidden flex flex-col h-full transition-all duration-300 hover:border-accent/60 hover:-translate-y-1">
      <div className="relative aspect-4/3 overflow-hidden bg-surface-2">
        <Image
          src={image}
          alt={`${title} preview`}
          fill
          priority={priority}
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 tag bg-bg/70 backdrop-blur-sm">
          {categoryLabel[category] || category}
        </span>
      </div>

      <div className="project-card-content flex flex-col gap-4 grow">
        <div>
          <h3 className="text-lg font-semibold font-display">{title}</h3>
          {tagline && <p className="text-accent text-sm font-medium mt-0.5">{tagline}</p>}
        </div>
        <p className="text-muted text-sm leading-relaxed grow">{description}</p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-3 mt-auto">
          {caseStudy && (
            <Link
              href={`/projects/${slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-text hover:text-accent transition-colors"
            >
              Case Study <ArrowRightIcon size={16} />
            </Link>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-accent transition-colors"
            >
              Live Site <ExternalLinkIcon size={14} />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} on GitHub`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-accent transition-colors ms-auto"
            >
              <GithubIcon size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
