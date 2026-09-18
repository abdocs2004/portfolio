"use client";

import { useState } from "react";
import TechIcon from "./TechIcon";
import { processSteps } from "../data/process";

export default function BuildProcess() {
  const [active, setActive] = useState(0);
  const step = processSteps[active];

  return (
    <div>
      {/* Step selector */}
      <div className="relative flex overflow-x-auto no-scrollbar gap-2 pb-3 md:pb-0 md:grid md:grid-cols-7 md:gap-3">
        {processSteps.map((s, i) => (
          <button
            key={s.number}
            onClick={() => setActive(i)}
            className={`process-step-card shrink-0 text-left rounded-xl border transition-all duration-300 min-w-35 md:min-w-0 ${
              i === active
                ? "border-accent bg-surface-2"
                : "border-line bg-surface hover:border-accent/40"
            }`}
            aria-pressed={i === active}
          >
            <div className={`text-xs font-mono mb-1 ${i === active ? "text-accent" : "text-muted"}`}>
              {s.number}
            </div>
            <div className={`text-sm font-semibold leading-tight ${i === active ? "text-text" : "text-muted"}`}>
              {s.title}
            </div>
          </button>
        ))}
      </div>

      {/* Connecting line (desktop only, purely decorative) */}
      <div className="hidden md:block h-px bg-line relative -mt-2 mb-8">
        <div
          className="absolute top-0 left-0 h-px bg-accent transition-all duration-500"
          style={{ width: `${((active + 1) / processSteps.length) * 100}%` }}
        />
      </div>

      {/* Active step detail */}
      <div className="card process-detail mt-8 md:mt-0">
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
          <div className="font-display text-5xl font-bold text-accent/30 shrink-0">{step.number}</div>
          <div className="flex-1">
            <h3 className="font-display text-2xl font-bold mb-3">{step.title}</h3>
            <p className="text-muted leading-relaxed mb-5 max-w-xl">{step.description}</p>
            {step.stack.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {step.stack.map((iconSlug) => (
                  <div key={iconSlug} className="bg-surface-2 border border-line rounded-lg p-2.5">
                    <TechIcon icon={iconSlug} name={iconSlug} size={22} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
