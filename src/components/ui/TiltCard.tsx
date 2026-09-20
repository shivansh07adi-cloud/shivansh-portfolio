import { useRef } from 'react';
import type { ReactNode, MouseEvent, CSSProperties } from 'react';

// 3D tilt toward the cursor: strong tilt, lift, slight zoom and a deeper shadow while hovered.
// `max` is the total tilt range in degrees (edges tilt max/2).
export default function TiltCard({
  children,
  className = '',
  max = 16,
  lift = 8,
  scale = 1.025,
  style
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  lift?: number;
  scale?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef(0);
  const timer = useRef<number>(0);

  const onEnter = () => {
    const el = ref.current;
    if (!el || !window.matchMedia('(pointer: fine)').matches) return;
    window.clearTimeout(timer.current);
    el.style.willChange = 'transform';
    el.style.boxShadow = '0 34px 80px rgba(80, 66, 170, 0.30)';
    el.style.zIndex = '5';
  };

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !window.matchMedia('(pointer: fine)').matches) return;
    const { clientX, clientY } = e;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      const r = el.getBoundingClientRect();
      const px = (clientX - r.left) / r.width - 0.5;
      const py = (clientY - r.top) / r.height - 0.5;
      el.style.transition = 'transform 0.12s ease-out, box-shadow 0.35s ease';
      el.style.transform = `perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) translate3d(0,-${lift}px,0) scale3d(${scale},${scale},1)`;
    });
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(raf.current);
    el.style.transition = 'transform 0.55s cubic-bezier(.2,.8,.2,1), box-shadow 0.45s ease';
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translate3d(0,0,0) scale3d(1,1,1)';
    el.style.boxShadow = '';
    timer.current = window.setTimeout(() => {
      el.style.willChange = '';
      el.style.zIndex = '';
    }, 600);
  };

  return (
    <div
      ref={ref}
      onMouseEnter={onEnter}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`tilt-card relative ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
