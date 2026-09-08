// Hand-drawn doodles, authored here rather than pulled from a random vector
// pack — keeps the line weight, wobble, and color consistent across the
// whole site, and sidesteps license/attribution roulette entirely.

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function CoffeeDoodle({ size = 48, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path {...base} d="M14 26c-1 12 1 24 9 26h12c8-2 10-14 9-26-9 2-21 2-30 0Z" />
      <path {...base} d="M44 28c6-2 11 1 10 7s-7 8-11 6" />
      <path {...base} d="M22 22c-2-4 1-6-1-9M30 22c-2-5 2-7-1-11M38 22c-2-4 1-6-1-9" />
    </svg>
  );
}

export function CigaretteDoodle({ size = 48, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path {...base} d="M6 40 46 33l2 9-40 7z" />
      <path {...base} d="M40 34l3 9" />
      <path {...base} d="M50 30c3-4 1-8 5-11M53 22c3-3 0-7 4-10" />
    </svg>
  );
}

export function SkullDoodle({ size = 48, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        {...base}
        d="M32 8c12 0 19 8 19 18 0 7-3 11-5 15v9c0 2-2 3-4 3h-3v-6h-2v6h-4v-6h-2v6h-4v-6h-2v6h-3c-2 0-4-1-4-3v-9c-2-4-5-8-5-15 0-10 7-18 19-18Z"
      />
      <circle cx="24" cy="28" r="3.4" fill="currentColor" stroke="none" />
      <circle cx="40" cy="28" r="3.4" fill="currentColor" stroke="none" />
      <path {...base} d="M30 34c1 2 3 2 4 0" />
    </svg>
  );
}

export function BoltDoodle({ size = 40, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path {...base} d="M36 6 16 36h14l-6 22 24-32H32Z" />
    </svg>
  );
}

export function SquiggleDoodle({ width = 120, height = 16, className }) {
  return (
    <svg width={width} height={height} viewBox="0 0 120 16" className={className} aria-hidden="true">
      <path
        {...base}
        strokeWidth={3}
        d="M2 11c6-8 12-8 18-1s12 7 18 0 12-9 18-2 12 8 18 1 12-8 18-2 12 7 26 1"
      />
    </svg>
  );
}

export function StarDoodle({ size = 20, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...base} strokeWidth={2.2} d="M12 2v8M12 14v8M2 12h8M14 12h8M5 5l5.5 5.5M13.5 13.5 19 19M19 5l-5.5 5.5M10.5 13.5 5 19" />
    </svg>
  );
}

export function WeedLeafMark({ size = 26, className }) {
  // one blade shape, fanned out 5x around a shared base — same trick real
  // leaf icons use, kept slightly uneven on purpose to match the doodle set.
  const blade = "M0,0 C-3,-6 -4,-13 0,-19 C4,-13 3,-6 0,0 Z";
  return (
    <svg width={size} height={size} viewBox="-16 -20 32 32" className={className} aria-hidden="true">
      <g transform="translate(0,4)" fill="currentColor" stroke="currentColor" strokeWidth="0.6" strokeLinejoin="round">
        <path d={blade} transform="rotate(-52)" />
        <path d={blade} transform="rotate(-26) scale(1.08)" />
        <path d={blade} transform="rotate(0) scale(1.18)" />
        <path d={blade} transform="rotate(26) scale(1.08)" />
        <path d={blade} transform="rotate(52)" />
        <path d="M0,0 L1.5,7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  );
}

export function TapeStrip({ className, style }) {
  return <span className={"tape-strip " + (className || "")} style={style} aria-hidden="true" />;
}
