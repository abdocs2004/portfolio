import Reveal from "./Reveal";
import TechIcon from "./TechIcon";

export default function TechStackGrid({ groups }) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {groups.map((group, i) => (
        <Reveal key={group.id} delay={i * 60} className="card tech-stack-card">
          <h3 className="font-display font-semibold text-xl mb-1.5">{group.title}</h3>
          <p className="text-muted text-sm mb-6 leading-relaxed">{group.description}</p>
          <div className="flex flex-wrap gap-3">
            {group.skills.map((skill) => (
              <div
                key={skill.name}
                className="tech-stack-item flex items-center gap-2.5 bg-surface-2 border border-line rounded-xl"
              >
                <TechIcon icon={skill.icon} color={skill.color} name={skill.name} size={22} />
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
