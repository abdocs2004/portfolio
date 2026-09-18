import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "../../../components/Reveal";
import ContactCTA from "../../../components/ContactCTA";
import { ArrowRightIcon, ExternalLinkIcon, GithubIcon } from "../../../components/icons/UiIcons";
import { projects, getProjectBySlug } from "../../../data/projects";

export function generateStaticParams() {
  return projects.filter((p) => p.caseStudy).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: { title: project.title, description: project.description, images: [project.image] },
  };
}

export default async function ProjectCaseStudyPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project || !project.caseStudy) notFound();

  const { title, tagline, longDescription, description, role, features, techStack, image, liveUrl, githubUrl } =
    project;

  return (
    <article className="container-x page-shell">
      <Reveal>
        <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors mb-8">
          <ArrowRightIcon size={16} className="rotate-180" /> Back to all projects
        </Link>
      </Reveal>

      <div className="grid md:grid-cols-[1.4fr_1fr] gap-16 lg:gap-20">
        <div>
          <Reveal className="eyebrow mb-4">{tagline}</Reveal>
          <Reveal delay={60}>
            <h1 className="font-display font-bold text-3xl md:text-5xl mb-8 leading-tight">{title}</h1>
          </Reveal>

          <Reveal delay={120} className="relative aspect-video rounded-2xl overflow-hidden card mb-10">
            <Image src={image} alt={`${title} preview`} fill priority sizes="(max-width: 900px) 100vw, 700px" className="object-cover" />
          </Reveal>

          <Reveal delay={160} className="prose-none text-muted leading-relaxed text-base md:text-lg space-y-4 mb-10">
            <p>{longDescription || description}</p>
          </Reveal>

          {features?.length > 0 && (
            <Reveal delay={200}>
              <h2 className="font-display font-semibold text-xl mb-4">Key Features</h2>
              <ul className="grid sm:grid-cols-2 gap-3 mb-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-muted leading-relaxed">
                    <span className="text-accent mt-1">—</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>

        <Reveal delay={100} className="space-y-6">
          <div className="card project-meta-card">
            <div className="text-xs eyebrow mb-2">My Role</div>
            <p className="text-sm text-muted leading-relaxed mb-6">{role}</p>

            {techStack?.length > 0 && (
              <>
                <div className="text-xs eyebrow mb-3">Stack</div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {techStack.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </>
            )}

            <div className="flex flex-col gap-3">
              {liveUrl && (
                <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full justify-center">
                  Visit Live Site <ExternalLinkIcon size={16} />
                </a>
              )}
              {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline w-full justify-center">
                  <GithubIcon size={16} /> View on GitHub
                </a>
              )}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-32">
        <ContactCTA />
      </div>
    </article>
  );
}
