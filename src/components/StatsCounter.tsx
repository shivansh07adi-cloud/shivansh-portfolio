/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { STATS_DATA } from '../data';
import TiltCard from './ui/TiltCard';
import Deco from './ui/Deco';
import { toTitle } from './ui/SectionHeading';
import brushLilac from '../assets/deco/brush-lilac.webp';

// Ease-out (fast at first, then settles) — a quick "rush" up to the number.
const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) { setValue(target); return; }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(target * easeOutExpo(p));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
}

const NUMBER_COLORS = ['text-brand-purple', 'text-brand-green', 'text-brand', 'text-brand-purple'];

function StatCard({
  value, decimals, suffix, label, active, index
}: { value: number; decimals: number; suffix: string; label: string; active: boolean; index: number }) {
  const current = useCountUp(value, active);
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12 }}
    >
      <TiltCard className="bg-white rounded-md px-8 md:px-10 py-6 flex items-center gap-4 shadow-[0_14px_44px_rgba(110,100,170,0.13)]">
        <span className={`font-jost font-medium leading-none text-[44px] md:text-[54px] tabular-nums ${NUMBER_COLORS[index % NUMBER_COLORS.length]}`}>
          {current.toFixed(decimals)}{suffix}
        </span>
        <span className="font-jost text-black text-lg md:text-xl leading-tight max-w-[7.5rem]">{label}</span>
      </TiltCard>
    </motion.div>
  );
}

export default function StatsCounter() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <section id="stats" ref={ref} className="relative w-full py-16 md:py-20 px-6 md:px-12 max-w-6xl mx-auto">
      <Deco src={brushLilac} className="right-[-6%] top-[30%] w-[380px] opacity-90" />
      <p className="text-center font-jost text-brand text-xl md:text-[22px] font-medium mb-8">
        {toTitle(STATS_DATA.section_title)}
      </p>
      <div className="relative flex flex-wrap justify-center gap-6 md:gap-10">
        {STATS_DATA.items.map((item, i) => (
          <StatCard
            key={item.id}
            value={item.value}
            decimals={item.decimals}
            suffix={item.suffix}
            label={item.label}
            active={inView}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
