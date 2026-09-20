/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { LANGUAGES_LIST } from '../data';
import SectionHeading from './ui/SectionHeading';
import TiltCard from './ui/TiltCard';

export default function Languages() {
  return (
    <section id="languages" className="relative w-full py-12 md:py-16 px-6 md:px-12 max-w-6xl mx-auto">
      <SectionHeading label="Spoken" title="Languages" className="mb-10" />

      <div className="flex flex-wrap justify-center gap-6">
        {LANGUAGES_LIST.map((lang, idx) => (
          <motion.div
            key={lang.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: idx * 0.07 }}
          >
            <TiltCard className="min-w-[190px] bg-white rounded-md px-8 py-6 shadow-[0_14px_44px_rgba(110,100,170,0.12)] text-center">
              <span className="block font-jost text-black text-2xl font-medium">{lang.name}</span>
              <span className="block font-body text-brand-gray text-sm mt-1">{lang.proficiency}</span>
              <div className="flex justify-center gap-1.5 mt-3">
                {[1, 2, 3, 4].map((dot) => (
                  <span key={dot} className={`w-2 h-2 rounded-full ${dot <= lang.level ? 'bg-brand' : 'bg-[#E4E1EE]'}`} />
                ))}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
