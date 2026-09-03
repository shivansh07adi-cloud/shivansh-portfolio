/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Users, Trophy, FlaskConical, Laptop, Clock } from 'lucide-react';
import { VOLUNTEER_LIST } from '../data';

const ICONS = {
  users: Users,
  trophy: Trophy,
  flask: FlaskConical,
  laptop: Laptop,
};

export default function Volunteering() {
  const causeCount = new Set(VOLUNTEER_LIST.map((v) => v.cause)).size;

  return (
    <section
      id="volunteering"
      className="w-full py-16 md:py-24 px-6 md:px-12 max-w-4xl mx-auto border-b border-accent-mute/25"
    >
      {/* Category Header Flag */}
      <div className="flex items-center gap-3 mb-4 font-mono text-[10px] md:text-xs tracking-widest text-ink-light">
        <span className="font-semibold text-ink-dark">06</span>
        <span className="w-8 h-[1px] bg-accent-mute" />
        <span className="uppercase">BEYOND THE DESK</span>
      </div>

      {/* Heading */}
      <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold italic text-ink-dark mb-4 leading-tight tracking-tight">
            Time, Given Freely.
          </h2>
          <p className="font-body text-sm md:text-base text-ink-gray max-w-xl">
            No invoice attached to these. {VOLUNTEER_LIST.length} roles across {causeCount} causes —
            campus life, community, and research — outside of any paycheck.
          </p>
        </div>
      </div>

      {/* Mosaic Card Grid — intentionally distinct from the Experience timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mt-10">
        {VOLUNTEER_LIST.map((vol, idx) => {
          const Icon = ICONS[vol.icon];
          return (
            <motion.div
              key={vol.id}
              initial={{ opacity: 0, y: 24, rotate: idx % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4, rotate: idx % 2 === 0 ? -0.5 : 0.5 }}
              className="relative overflow-hidden rounded-xl border border-accent-mute/30 bg-[#FAF6EE] shadow-sm hover:shadow-lg transition-shadow duration-300 p-5 md:p-6"
            >
              {/* Gradient corner glow unique to each card's cause color */}
              <div
                className="absolute -top-10 -right-10 w-28 h-28 rounded-full opacity-20 blur-2xl pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${vol.colorFrom}, ${vol.colorTo})` }}
              />

              {/* Icon badge */}
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center mb-4 shadow-inner"
                style={{ background: `linear-gradient(135deg, ${vol.colorFrom}, ${vol.colorTo})` }}
              >
                <Icon size={18} className="text-white" strokeWidth={2.2} />
              </div>

              {/* Cause pill */}
              <span className="inline-block font-mono text-[9.5px] uppercase tracking-widest px-2 py-0.5 rounded-sm bg-white border border-accent-mute/30 text-ink-gray mb-2.5">
                {vol.cause}
              </span>

              {/* Role & org */}
              <h3 className="font-serif text-xl md:text-2xl font-bold text-ink-dark leading-snug mb-0.5">
                {vol.role}
              </h3>
              <p className="font-body text-sm text-ink-gray font-semibold mb-2.5">
                {vol.organization}
              </p>

              {/* Description */}
              <p className="font-body text-sm text-ink-gray leading-relaxed mb-4">
                {vol.description}
              </p>

              {/* Period footer */}
              <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-ink-light">
                <Clock size={11} />
                <span>{vol.period}</span>
                {vol.duration && (
                  <>
                    <span className="text-[#CEC0A8]">/</span>
                    <span>{vol.duration}</span>
                  </>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
