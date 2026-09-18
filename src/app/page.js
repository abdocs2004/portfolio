import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import WhatIBuild from "../components/WhatIBuild";
import BuildProcess from "../components/BuildProcess";
import ContactCTA from "../components/ContactCTA";
import { ArrowRightIcon, DownloadIcon, GithubIcon, LinkedinIcon } from "../components/icons/UiIcons";
import { site } from "../data/site";
import { featuredProjects } from "../data/projects";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="container-x page-shell">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-20 items-center">
          <div>
            <Reveal>
              <div className="eyebrow mb-5">Full-Stack Web Developer</div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-6">
                Hi, I&apos;m Abdelrahman Ibrahim.
                <br />
                I build <span className="text-gradient">real, working</span> web products.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-muted text-lg leading-relaxed max-w-xl mb-9">
                I design and build modern, scalable web applications with React.js and Node.js —
                and deliver business websites with WordPress when that&apos;s the right fit. Final-year
                Computer Science student, and hands-on with more than 5 freelance projects so far.
              </p>
            </Reveal>
            <Reveal delay={240} className="flex flex-wrap items-center gap-4">
              <Link href="/projects" className="btn btn-primary">
                View My Work <ArrowRightIcon size={18} />
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Let&apos;s Work Together
              </Link>
            </Reveal>
            <Reveal delay={300} className="flex items-center gap-5 mt-50">
              <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted hover:text-accent transition-colors">
                <GithubIcon size={22} />
              </a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted hover:text-accent transition-colors">
                <LinkedinIcon size={22} />
              </a>
              <a
                href={site.cvLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-accent transition-colors"
              >
                <DownloadIcon size={18} /> Download CV
              </a>
            </Reveal>
          </div>

          <Reveal delay={160} className="relative mx-auto w-full max-w-85">
            <div className="absolute -inset-4 rounded-4xl border border-line" />
            <div className="relative aspect-square rounded-[1.75rem] overflow-hidden card">
              <Image
                src="/images/profile-photo.jpg"
                alt="Portrait of Abdelrahman Ibrahim"
                fill
                priority
                sizes="(max-width: 768px) 260px, 340px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 card px-5 py-3.5">
              <div className="text-xs text-muted mb-0.5">Graduating</div>
              <div className="font-display font-bold text-lg leading-none">{site.graduationYear}</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What I Build */}
      <section className="container-x home-section">
        <SectionHeading
          number="01"
          label="Capabilities"
          title="What I Build"
          description="A quick overview so you can see what fits your project — without reading every case study."
        />
        <div className="mt-12">
          <WhatIBuild />
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container-x home-section">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <SectionHeading number="02" label="Selected Work" title="Featured Projects" />
          <Reveal>
            <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm font-semibold hover:text-accent transition-colors">
              View all projects <ArrowRightIcon size={16} />
            </Link>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80}>
              <ProjectCard project={project} priority={i === 0} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Build Process — signature interactive section */}
      <section className="container-x home-section">
        <SectionHeading
          number="03"
          label="How I Work"
          title="From Idea to Deployment"
          description="A project moves through the same seven stages whether it's a full-stack app or a business website — click a stage to see how."
        />
        <div className="mt-12">
          <BuildProcess />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container-x home-section">
        <ContactCTA />
      </section>
    </>
  );
}
