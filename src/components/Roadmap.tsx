/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Compass, Orbit, Sparkles } from 'lucide-react';
import { ROADMAP_DATA } from '../data';

export default function Roadmap() {
  const [n, setN] = useState(5);

  const getIconForBlock = (id: string) => {
    switch (id) {
      case 'roadmap-currently-learning':
        return <Compass size={14} className="text-[#B19470]" />;
      case 'roadmap-next-6-months':
        return <Orbit size={14} className="text-[#B19470]" />;
      case 'roadmap-bigger-picture':
        return <Sparkles size={14} className="text-[#B19470]" />;
      default:
        return null;
    }
  };

  return (
    <section id="roadmap" className="w-full py-16 md:py-24 px-6 md:px-12 max-w-4xl mx-auto border-b border-accent-mute/25">
      {/* Category Header Flag */}
      <div className="flex items-center gap-3 mb-4 font-mono text-[10px] md:text-xs tracking-widest text-ink-light">
        <span className="font-semibold text-ink-dark">{ROADMAP_DATA.section_num}</span>
        <span className="w-8 h-[1px] bg-accent-mute" />
        <span className="uppercase">{ROADMAP_DATA.section_title}</span>
      </div>

      {/* Heading */}
      <div className="mb-14">
        <h2 className="font-serif text-4xl md:text-6xl font-bold italic text-ink-dark mb-4 leading-tight tracking-tight">
          {ROADMAP_DATA.title}
        </h2>
        <p className="font-body text-sm md:text-base text-ink-gray max-w-xl leading-relaxed">
          I don't have{' '}
          <span className="inline-flex items-center gap-1 mx-1 px-2 py-0.5 rounded bg-black/5 border border-accent-mute/30 font-mono text-xs font-semibold text-ink-dark select-none">
            <button
              onClick={() => setN(prev => Math.max(0, prev - 1))}
              className="hover:text-[#B19470] font-bold px-1 transition-colors cursor-pointer"
              title="Decrease n"
            >
              -
            </button>
            <span className="min-w-[12px] text-center font-bold text-emerald-600">{n}</span>
            <button
              onClick={() => setN(prev => prev + 1)}
              className="hover:text-[#B19470] font-bold px-1 transition-colors cursor-pointer"
              title="Increase n"
            >
              +
            </button>
          </span>{' '}
          {n === 1 ? 'year' : 'years'} of experience. I have{' '}
          <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#FAF6EE] border border-[#B19470]/30 font-mono text-xs font-semibold text-[#B19470] mx-1">
            {n}
          </span>{' '}
          {n === 1 ? 'year' : 'years'} of runway — and a very specific plan for it.
        </p>
      </div>

      {/* Timeline Layout Container */}
      <div className="relative border-l border-accent-mute/30 pl-6 md:pl-10 ml-2 md:ml-4 space-y-16">
        {ROADMAP_DATA.blocks.map((block, idx) => {
          return (
            <motion.div
              key={block.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group leading-relaxed transition-all duration-500 rounded p-4 -mx-4 hover:bg-black/2"
            >
              {/* Timeline Bullet Point Knot */}
              <div
                className="absolute -left-[31px] md:-left-[47px] top-6 w-3 h-3 rounded-full border-2 bg-canvas border-accent-mute group-hover:border-ink-dark group-hover:bg-ink-dark transition-all duration-300"
              />

              {/* Icon & Block label */}
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1 rounded bg-[#FAF6EE] border border-[#B19470]/30 shadow-xs">
                  {getIconForBlock(block.id)}
                </div>
                <span className="font-mono text-[10px] tracking-widest text-[#B3A994] uppercase font-semibold">
                  BLOCK 0{idx + 1}
                </span>
              </div>

              {/* Serif Header */}
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-ink-dark group-hover:italic transition-all duration-500 leading-tight mb-3">
                {block.title}
              </h3>

              {/* Text paragraph */}
              <p className="font-body text-sm md:text-base text-ink-gray leading-relaxed max-w-2xl text-justify">
                {block.text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
