import Reveal from "./Reveal";

export default function SectionHeading({ number, label, title, description, align = "left" }) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  return (
    <Reveal className={`flex flex-col gap-4 max-w-2xl ${alignClass}`}>
      <div className="eyebrow flex items-center gap-2">
        {number && <span className="text-muted">{number}</span>}
        <span>{label}</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-bold text-text">{title}</h2>
      {description && <p className="text-muted text-base md:text-lg leading-relaxed">{description}</p>}
    </Reveal>
  );
}
