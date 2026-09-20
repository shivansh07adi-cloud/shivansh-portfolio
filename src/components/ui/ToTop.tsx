import { useEffect, useRef, useState } from 'react';

// Vertical "TO TOP" marker at the right edge; its line grows with scroll progress.
export default function ToTop() {
  const [visible, setVisible] = useState(false);
  const line = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(y > 500);
      if (line.current) line.current.style.height = `${Math.max(0, Math.min(1, y / Math.max(max, 1))) * 70}px`;
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed right-3 md:right-5 top-[58%] z-40 hidden md:flex flex-col items-center gap-3 cursor-pointer transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <span className="font-jost text-[12px] tracking-[0.18em] text-black hover:text-brand transition-colors [writing-mode:vertical-rl] rotate-180">
        TO TOP
      </span>
      <span className="block w-[1.5px] h-[70px] bg-[#E4E1EE] relative">
        <span ref={line} className="absolute top-0 left-0 w-full bg-brand" style={{ height: 0 }} />
      </span>
    </button>
  );
}
