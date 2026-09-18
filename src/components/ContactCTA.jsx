import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowRightIcon } from "./icons/UiIcons";

export default function ContactCTA() {
  return (
    <Reveal className="card contact-cta relative overflow-hidden text-center">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 0%, var(--color-accent), transparent 60%)",
        }}
      />
      <div className="relative">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Have an idea? Let&apos;s turn it into a real product.
        </h2>
        <p className="text-muted max-w-xl mx-auto mb-8 leading-relaxed">
          Whether it&apos;s a full-stack application, a business website, or a WordPress build —
          I&apos;m happy to talk through what you need.
        </p>
        <Link href="/contact" className="btn btn-primary">
          Let&apos;s Work Together <ArrowRightIcon size={18} />
        </Link>
      </div>
    </Reveal>
  );
}
