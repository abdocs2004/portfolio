"use client";

import { useState } from "react";

// Renders a technology logo from the Simple Icons CDN. If the specific slug
// ever 404s (renamed icon, typo, etc.) it falls back to a plain text badge
// instead of showing a broken image — see globals.css .tag for the fallback style.
export default function TechIcon({ icon, color = "F2F0EB", name, size = 28, showLabel = false }) {
  const [failed, setFailed] = useState(false);
  const src = `https://cdn.simpleicons.org/${icon}/${color}`;

  if (failed) {
    return <span className="tag">{name}</span>;
  }

  return (
    <span className="inline-flex items-center gap-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={name}
        width={size}
        height={size}
        loading="lazy"
        onError={() => setFailed(true)}
        style={{ width: size, height: size, objectFit: "contain" }}
      />
      {showLabel && <span className="text-sm text-muted">{name}</span>}
    </span>
  );
}
