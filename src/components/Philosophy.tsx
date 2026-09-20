/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Rocket, ScanEye, GitPullRequest, Sparkles } from 'lucide-react';
import { WORK_PHILOSOPHY } from '../data';
import SectionHeading, { toTitle } from './ui/SectionHeading';

// Gradient "hand-drawn" ring colours (pink, lilac, yellow, teal) like the reference process icons
const RINGS = [
  { from: '#F6B7AA', to: '#F9D6CF' },
  { from: '#BDB2F3', to: '#E1DBFA' },
  { from: '#F5E3A0', to: '#FBF1CC' },
  { from: '#A6E3D8', to: '#D2F1EA' }
];
const ICONS = [Rocket, ScanEye, GitPullRequest, Sparkles];

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative w-full py-16 md:py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <SectionHeading
        label={toTitle(WORK_PHILOSOPHY.section_title)}
        title={WORK_PHILOSOPHY.title}
        subtitle={WORK_PHILOSOPHY.tagline}
        className="mb-12 md:mb-16"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
        {WORK_PHILOSOPHY.items.map((item, idx) => {
          const Icon = ICONS[idx % ICONS.length];
          const ring = RINGS[idx % RINGS.length];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative w-[112px] h-[112px] mb-7 flex items-center justify-center">
                {/* soft gradient ring, slightly rotated twins for the hand-drawn feel */}
                <span
                  className="absolute inset-0 rounded-full transition-transform duration-700 group-hover:rotate-[24deg]"
                  style={{ background: `conic-gradient(from 30deg, ${ring.from}, ${ring.to} 55%, transparent 80%, ${ring.from})`, WebkitMask: 'radial-gradient(circle, transparent 60%, #000 62%)', mask: 'radial-gradient(circle, transparent 60%, #000 62%)' }}
                />
                <span
                  className="absolute inset-[5px] rounded-full transition-transform duration-700 group-hover:-rotate-[18deg]"
                  style={{ background: `conic-gradient(from 200deg, ${ring.to}, ${ring.from} 45%, transparent 75%, ${ring.to})`, WebkitMask: 'radial-gradient(circle, transparent 66%, #000 68%)', mask: 'radial-gradient(circle, transparent 66%, #000 68%)', opacity: 0.85 }}
                />
                <Icon size={44} strokeWidth={1.7} className="relative text-[#16126B]" />
              </div>
              <h3 className="font-jost text-black text-[22px] md:text-2xl font-medium leading-snug mb-3 max-w-[16rem]">{item.title}</h3>
              <p className="font-body text-brand-gray text-[15px] leading-[1.85] max-w-[17rem]">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
