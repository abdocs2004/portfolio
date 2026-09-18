import Link from "next/link";
import { nav, site } from "../data/site";
import { GithubIcon, LinkedinIcon, MailIcon, WhatsappIcon } from "./icons/UiIcons";

export default function Footer() {
  return (
    <footer className="border-t border-line mt-40">
      <div className="container-x py-16 md:py-20 grid gap-12 md:grid-cols-3">
        <div>
          <div className="font-display font-bold text-lg mb-3">
            Abdelrahman<span className="text-accent">.</span>
          </div>
          <p className="text-muted text-sm max-w-xs leading-relaxed">
            Full-Stack Web Developer building React.js &amp; Node.js applications, plus WordPress
            sites for clients who need to launch fast.
          </p>
        </div>

        <div>
          <div className="eyebrow mb-4">Navigate</div>
          <ul className="flex flex-col gap-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-muted hover:text-text transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-4">Connect</div>
          <div className="flex items-center gap-4">
            <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted hover:text-accent transition-colors">
              <GithubIcon />
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted hover:text-accent transition-colors">
              <LinkedinIcon />
            </a>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-muted hover:text-accent transition-colors">
              <WhatsappIcon />
            </a>
            <a href={`mailto:${site.email}`} aria-label="Email" className="text-muted hover:text-accent transition-colors">
              <MailIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="container-x py-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted">
        <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        <span>Built with Next.js &amp; Tailwind CSS</span>
      </div>
    </footer>
  );
}
