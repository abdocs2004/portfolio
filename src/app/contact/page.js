import Reveal from "../../components/Reveal";
import { site } from "../../data/site";
import {
  MailIcon, PhoneIcon, WhatsappIcon, GithubIcon, LinkedinIcon, MostaqlIcon, ArrowRightIcon,
} from "../../components/icons/UiIcons";

export const metadata = {
  title: "Contact",
  description: "Get in touch to discuss a project — full-stack application, business website, or WordPress build.",
};

const methods = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, Icon: MailIcon },
  { label: "Phone", value: site.phone, href: `tel:${site.phone}`, Icon: PhoneIcon },
  { label: "WhatsApp", value: "Chat directly", href: site.whatsapp, Icon: WhatsappIcon },
];

const socials = [
  { label: "GitHub", href: site.github, Icon: GithubIcon },
  { label: "LinkedIn", href: site.linkedin, Icon: LinkedinIcon },
  { label: "Mostaql", href: site.mostaql, Icon: MostaqlIcon },
];

export default function ContactPage() {
  return (
    <div className="container-x page-shell">
      <div className="contact-intro max-w-2xl">
        <Reveal className="eyebrow mb-5">Get In Touch</Reveal>
        <Reveal delay={80}>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-6 leading-tight">
            Have a project in mind?
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="text-muted text-lg leading-relaxed">
            I&apos;m always happy to discuss new projects and ideas — whether it&apos;s a full-stack
            application, a business website, or a WordPress build. Reach out through whichever
            channel is easiest for you.
          </p>
        </Reveal>
      </div>

      <div className="contact-methods grid md:grid-cols-3 gap-6 lg:gap-8">
        {methods.map(({ label, value, href, Icon }, i) => (
          <Reveal key={label} delay={i * 70}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="card contact-method-card flex flex-col gap-5 h-full hover:border-accent/60 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-surface-2 border border-line flex items-center justify-center text-accent">
                <Icon size={20} />
              </div>
              <div>
                <div className="text-xs text-muted mb-1">{label}</div>
                <div className="font-semibold flex items-center gap-1.5 group-hover:text-accent transition-colors break-all">
                  {value} <ArrowRightIcon size={14} className="shrink-0" />
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal className="contact-socials">
        <div className="eyebrow mb-4">Also find me on</div>
        <div className="flex flex-wrap gap-4">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 card contact-social-link hover:border-accent/60 transition-colors duration-300"
            >
              <Icon size={18} /> <span className="text-sm font-medium">{label}</span>
            </a>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
