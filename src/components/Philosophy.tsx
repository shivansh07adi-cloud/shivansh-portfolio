/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { WORK_PHILOSOPHY } from '../data';

export default function Philosophy() {
  return (
    <section id="philosophy" className="w-full py-16 md:py-24 px-6 md:px-12 max-w-4xl mx-auto border-b border-accent-mute/25">
      {/* Category Flag */}
      <div className="flex items-center gap-3 mb-4 font-mono text-[10px] md:text-xs tracking-widest text-ink-light">
        <span className="font-semibold text-ink-dark">{WORK_PHILOSOPHY.section_num}</span>
        <span className="w-8 h-[1px] bg-accent-mute" />
        <span className="uppercase">{WORK_PHILOSOPHY.section_title}</span>
      </div>

      {/* Heading Group */}
      <div className="mb-12">
        <h2 className="font-serif text-4xl md:text-6xl font-bold italic text-ink-dark mb-4 leading-tight tracking-tight">
          {WORK_PHILOSOPHY.title}
        </h2>
        <p className="font-body text-base md:text-lg text-ink-gray italic font-light">
          {WORK_PHILOSOPHY.tagline}
        </p>
      </div>

      {/* Styled List with Left Hyphen / Dash Accent */}
      <div className="divide-y divide-accent-mute/20 border-t border-b border-accent-mute/20">
        {WORK_PHILOSOPHY.items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="py-8 md:py-10 flex gap-4 md:gap-6 items-start group"
          >
            {/* Hyphen Accent Line exactly as requested in screenshot 3 */}
            <span className="text-accent-mute text-lg md:text-2xl font-mono select-none block pt-0.5 group-hover:text-ink-dark transition-colors">
              —
            </span>
            <div className="space-y-2">
              <h4 className="font-serif text-xl md:text-2xl font-bold tracking-tight text-ink-dark group-hover:italic transition-all duration-300">
                {item.title}
              </h4>
              <p className="font-body text-sm md:text-base text-ink-gray leading-relaxed max-w-2xl">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
