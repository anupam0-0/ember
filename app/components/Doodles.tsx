/* Shared decorative SVG doodles */

export function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 0c.9 7.4 4.6 11.1 12 12-7.4.9-11.1 4.6-12 12-.9-7.4-4.6-11.1-12-12C7.4 11.1 11.1 7.4 12 0Z" />
    </svg>
  );
}

export function Squiggle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 20" fill="none" className={className} aria-hidden>
      <path
        d="M2 10 Q 12 2 22 10 T 42 10 T 62 10 T 82 10 T 102 10 T 118 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DottedRing({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden>
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="0.5 9"
      />
    </svg>
  );
}

export function Burst({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className={className} aria-hidden>
      <path d="M24 4v9M24 35v9M4 24h9M35 24h9M9.9 9.9l6.3 6.3M31.8 31.8l6.3 6.3M38.1 9.9l-6.3 6.3M16.2 31.8l-6.3 6.3" />
    </svg>
  );
}
