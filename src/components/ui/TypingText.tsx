import { useEffect, useRef } from 'react';

// Types each line, holds it, deletes it, then moves to the next (loops forever).
// The text is written straight into the DOM (no React re-render per letter), and every line is also
// rendered invisibly in the same grid cell so the block always reserves the height of the longest line.
const LEAD = /^(I'm a |I'm learning |I'm exploring |I love |I'm )/;

export default function TypingText({
  lines,
  typeMs = 60,
  deleteMs = 30,
  holdMs = 1700,
  gapMs = 380,
  leadClassName = 'text-black',
  restClassName = 'text-brand-green'
}: {
  lines: string[];
  typeMs?: number;
  deleteMs?: number;
  holdMs?: number;
  gapMs?: number;
  leadClassName?: string;
  restClassName?: string;
}) {
  const leadRef = useRef<HTMLSpanElement>(null);
  const restRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const paint = (text: string, lead: number) => {
      if (leadRef.current) leadRef.current.textContent = text.slice(0, lead);
      if (restRef.current) restRef.current.textContent = text.slice(lead);
    };
    const leadLen = (line: string) => (line.match(LEAD)?.[0].length ?? 0);

    if (reduce) {
      paint(lines[0], leadLen(lines[0]));
      return;
    }

    let i = 0;
    let n = 0;
    let deleting = false;
    let timer = 0;

    const tick = () => {
      const line = lines[i];
      const lead = leadLen(line);
      if (!deleting) {
        n += 1;
        paint(line.slice(0, n), lead);
        if (n >= line.length) {
          deleting = true;
          timer = window.setTimeout(tick, holdMs);
          return;
        }
        timer = window.setTimeout(tick, typeMs + Math.random() * 35);
      } else {
        n -= 1;
        paint(line.slice(0, Math.max(n, 0)), lead);
        if (n <= 0) {
          deleting = false;
          i = (i + 1) % lines.length;
          timer = window.setTimeout(tick, gapMs);
          return;
        }
        timer = window.setTimeout(tick, deleteMs);
      }
    };
    timer = window.setTimeout(tick, 600);
    return () => window.clearTimeout(timer);
  }, [lines, typeMs, deleteMs, holdMs, gapMs]);

  return (
    <span className="grid">
      {/* invisible copies reserve the space of the longest line at any screen width */}
      {lines.map((l) => (
        <span key={l} aria-hidden="true" className="invisible [grid-area:1/1]">
          {l}
        </span>
      ))}
      <span className="[grid-area:1/1]" aria-hidden="true">
        <span ref={leadRef} className={leadClassName} />
        <span ref={restRef} className={restClassName} />
        <span className="ml-0.5 inline-block w-[2px] h-[1em] align-[-0.12em] bg-brand animate-pulse" />
      </span>
      {/* screen readers get the full list once instead of the animation */}
      <span className="sr-only">{lines.join('. ')}</span>
    </span>
  );
}
