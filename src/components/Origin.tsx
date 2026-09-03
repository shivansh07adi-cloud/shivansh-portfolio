/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ORIGIN_STORY } from '../data';

export default function Origin() {
  return (
    <section id="origin" className="w-full py-16 md:py-24 px-6 md:px-12 max-w-4xl mx-auto border-b border-accent-mute/25">
      {/* Editorial Navigation Indicator */}
      <div className="flex items-center gap-3 mb-4 font-mono text-[10px] md:text-xs tracking-widest text-ink-light">
        <span className="font-semibold text-ink-dark">{ORIGIN_STORY.section_num}</span>
        <span className="w-8 h-[1px] bg-accent-mute" />
        <span className="uppercase">{ORIGIN_STORY.section_title}</span>
      </div>

      {/* Styled Large Heading */}
      <h2 className="font-serif text-4xl md:text-6xl font-bold italic text-ink-dark mb-8 leading-tight tracking-tight">
        {ORIGIN_STORY.title}
      </h2>

      {/* Narrative Prose Column Block */}
      <div className="space-y-6 md:space-y-8 font-body text-base md:text-lg text-ink-gray leading-relaxed max-w-3xl">
        {ORIGIN_STORY.paragraphs.map((p, index) => {
          // Add inline styled emphasis onto some phrases to match screenshot's elegant design
          if (index === 1) {
            return (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
              >
                Somewhere between writing optimized C++ algorithms and exploring real-time tracking models like MediaPipe and OpenCV, I realized the world doesn't run on facts. It runs on <span className="font-medium italic text-ink-dark border-b border-[#CEC0A8] pb-0.5">decisions made by people who understood something slightly better than everyone else</span>. I exist to be one of those people.
              </motion.p>
            );
          }
          return (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              {p}
            </motion.p>
          );
        })}
      </div>
    </section>
  );
}
