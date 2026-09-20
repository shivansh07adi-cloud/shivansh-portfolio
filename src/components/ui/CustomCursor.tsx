import { useEffect, useRef } from 'react';

// Orange dot follows the pointer closely; a thin ring trails behind it (like the reference site).
// The animation loop only runs while the pointer is moving/settling, then it stops (no idle cost).
export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    let mx = -100, my = -100, dx = -100, dy = -100, rx = -100, ry = -100;
    let raf = 0;
    let running = false;

    const tick = () => {
      dx += (mx - dx) * 0.38; dy += (my - dy) * 0.38;
      rx += (mx - rx) * 0.13; ry += (my - ry) * 0.13;
      if (dot.current) dot.current.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      const settled = Math.abs(mx - dx) < 0.1 && Math.abs(my - dy) < 0.1 && Math.abs(mx - rx) < 0.1 && Math.abs(my - ry) < 0.1;
      if (settled) { running = false; return; }
      raf = requestAnimationFrame(tick);
    };
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dx < -50) { dx = rx = mx; dy = ry = my; } // first move: jump to the pointer
      if (!running) { running = true; raf = requestAnimationFrame(tick); }
    };
    // The dot swells into a soft orange disc over anything clickable / hoverable (like the reference)
    const HOVER_SEL = 'a, button, [role="button"], input, textarea, select, label, summary, .tilt-card';
    const onOver = (e: MouseEvent) => {
      const t = e.target as Element | null;
      dot.current?.classList.toggle('is-hover', !!t?.closest?.(HOVER_SEL));
    };
    const onLeaveDoc = () => dot.current?.classList.remove('is-hover');
    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeaveDoc);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.documentElement.removeEventListener('mouseleave', onLeaveDoc);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden="true" style={{ transform: 'translate3d(-100px,-100px,0)' }} />
      <div ref={dot} className="cursor-dot" aria-hidden="true" style={{ transform: 'translate3d(-100px,-100px,0)' }} />
    </>
  );
}
