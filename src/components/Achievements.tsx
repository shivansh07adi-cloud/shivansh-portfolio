/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award } from 'lucide-react';
import { ACHIEVEMENTS_LIST } from '../data';

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="w-full py-16 md:py-24 px-6 md:px-12 max-w-4xl mx-auto border-b border-accent-mute/25"
    >
      {/* Category Header Flag */}
      <div className="flex items-center gap-3 mb-4 font-mono text-[10px] md:text-xs tracking-widest text-ink-light">
        <span className="font-semibold text-ink-dark">08</span>
        <span className="w-8 h-[1px] bg-accent-mute" />
        <span className="uppercase">RECEIPTS</span>
      </div>

      {/* Heading */}
      <div className="mb-14">
        <h2 className="font-serif text-4xl md:text-6xl font-bold italic text-ink-dark mb-4 leading-tight tracking-tight">
          Proof, Not Promises.
        </h2>
        <p className="font-body text-sm md:text-base text-ink-gray max-w-xl">
          A shelf of the moments where the work got measured against everyone else's — and held up.
        </p>
      </div>

      {/* Award Shelf — a horizontal-ribbon layout, distinct from every other section on the page */}
      <div className="flex flex-col divide-y divide-accent-mute/25 border-t border-b border-accent-mute/25">
        {ACHIEVEMENTS_LIST.map((ach, idx) => (
          <motion.div
            key={ach.id}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: idx * 0.07 }}
            className="group flex flex-col sm:flex-row gap-4 sm:gap-6 py-6 sm:items-start hover:bg-black/[0.02] transition-colors duration-300 px-2 -mx-2 rounded"
          >
            {/* Ribbon badge with rank */}
            <div className="shrink-0 flex sm:flex-col items-center sm:items-center gap-2 sm:w-20">
              <div className="relative w-12 h-14 sm:w-14 sm:h-16">
                <svg viewBox="0 0 56 64" className="w-full h-full drop-shadow-sm">
                  <path
                    d="M8 0h40a4 4 0 0 1 4 4v50l-24-14L4 54V4a4 4 0 0 1 4-4z"
                    fill="#B19470"
                    className="transition-transform duration-300 group-hover:scale-105 origin-top"
                  />
                </svg>
                <Award
                  size={20}
                  strokeWidth={2}
                  className="absolute inset-0 m-auto text-white top-[8px]"
                />
              </div>
              {ach.rank && (
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#86653E] font-bold text-center leading-tight">
                  {ach.rank}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1.5">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-ink-dark leading-snug">
                  {ach.title}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink-light shrink-0">
                  {ach.date}
                </span>
              </div>
              <p className="font-body text-sm text-ink-gray font-semibold mb-2">
                {ach.issuer}
              </p>
              <p className="font-body text-sm text-ink-gray leading-relaxed mb-3 max-w-2xl">
                {ach.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {ach.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] px-2 py-0.5 rounded-sm border border-accent-mute/25 bg-[#FAF6EE] text-ink-gray"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
