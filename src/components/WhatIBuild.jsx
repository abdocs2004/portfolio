import Reveal from "./Reveal";
import { buildTypes } from "../data/whatIBuild";

export default function WhatIBuild() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {buildTypes.map((item, i) => (
        <Reveal
          key={item.title}
          delay={(i % 4) * 60}
          className="card capability-card hover:border-accent/50 transition-colors duration-300"
        >
          <div className="text-accent font-display font-bold text-2xl mb-3">
            {String(i + 1).padStart(2, "0")}
          </div>
          <h3 className="font-semibold text-base mb-2 leading-snug">{item.title}</h3>
          <p className="text-muted text-sm leading-relaxed">{item.description}</p>
        </Reveal>
      ))}
    </div>
  );
}
