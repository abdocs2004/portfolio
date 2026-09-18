import Image from "next/image";
import SectionHeading from "../../components/SectionHeading";
import Reveal from "../../components/Reveal";
import ContactCTA from "../../components/ContactCTA";
import { trainings } from "../../data/experience";
import { site } from "../../data/site";

export const metadata = {
  title: "About",
  description:
    "Full-Stack Web Developer and final-year Computer Science student — background, training, and how I work.",
};

export default function AboutPage() {
  return (
    <div className="container-x page-shell">
      <div className="about-hero grid md:grid-cols-[0.9fr_1.1fr] gap-16 lg:gap-20 items-start">
        <Reveal className="relative w-full max-w-sm">
          <div className="relative aspect-4/5 rounded-2xl overflow-hidden card">
            <Image
              src="/images/profile-photo.jpg"
              alt="Portrait of Abdelrahman Ibrahim"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal className="eyebrow mb-5">About Me</Reveal>
          <Reveal delay={80}>
            <h1 className="font-display font-bold text-3xl md:text-4xl mb-6 leading-tight">
              Final-year CS student, building full-stack products in the meantime.
            </h1>
          </Reveal>
          <Reveal delay={140} className="space-y-4 text-muted leading-relaxed text-base md:text-lg">
            <p>
              I&apos;m a Computer Science student expected to graduate in {site.graduationYear}, and a
              Full-Stack Web Developer. My main stack is React.js on the frontend and Node.js with
              Express.js on the backend, connected through REST APIs. I&apos;m comfortable working with
              both SQL and NoSQL databases, and I&apos;ve deployed projects across several hosting
              platforms — Vercel, Netlify, Railway, Render, and Hostinger.
            </p>
            <p>
              Alongside application development, I have around a year of practical experience building
              websites with WordPress and Elementor — business sites, landing pages, and everything in
              between, deployed and managed end-to-end, including on Hostinger/cPanel.
            </p>
            <p>
              I&apos;ve completed more than 5 freelance projects so far, and I care about the parts of the
              job that don&apos;t show up in a screenshot: responsive design, clean implementation, SEO
              fundamentals, and actually understanding what a client needs before writing code. I&apos;m
              continuously working on improving my skills as a developer.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Training & Education */}
      <SectionHeading number="01" label="Training & Education" title="A commitment to continuous learning" />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {trainings.map((item, i) => (
          <Reveal key={item.title} delay={i * 60} className="card about-training-card">
            <h3 className="font-display font-semibold text-lg mb-1">{item.title}</h3>
            <p className="text-accent text-sm font-medium mb-2">{item.subtitle}</p>
            <p className="text-muted text-sm leading-relaxed">{item.description}</p>
          </Reveal>
        ))}
      </div>

      <div className="about-cta">
        <ContactCTA />
      </div>
    </div>
  );
}
