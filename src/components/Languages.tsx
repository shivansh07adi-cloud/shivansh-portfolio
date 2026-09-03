/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { LANGUAGES_LIST } from '../data';

export default function Languages() {
  return (
    <section
      id="languages"
      className="w-full py-12 md:py-16 px-6 md:px-12 max-w-4xl mx-auto border-b border-accent-mute/25"
    >
      {/* Category Header Flag */}
      <div className="flex items-center gap-3 mb-8 font-mono text-[10px] md:text-xs tracking-widest text-ink-light">
        <span className="font-semibold text-ink-dark">09</span>
        <span className="w-8 h-[1px] bg-accent-mute" />
        <span className="uppercase">SPOKEN</span>
      </div>

      {/* Compact inline row — deliberately minimal, no cards or timeline */}
      <div className="flex flex-wrap gap-x-10 gap-y-6">
        {LANGUAGES_LIST.map((lang, idx) => (
          <motion.div
            key={lang.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
            className="flex flex-col gap-1.5 min-w-[140px]"
          >
            <span className="font-serif text-lg font-bold text-ink-dark">{lang.name}</span>
            <span className="font-body text-xs text-ink-gray">{lang.proficiency}</span>
            <div className="flex gap-1 mt-0.5">
              {[1, 2, 3, 4].map((dot) => (
                <span
                  key={dot}
                  className={`w-1.5 h-1.5 rounded-full ${
                    dot <= lang.level ? 'bg-[#B19470]' : 'bg-accent-mute/30'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
