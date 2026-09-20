/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award, BookOpen, ArrowUpRight } from 'lucide-react';
import XIcon from './ui/XIcon';
import { ACHIEVEMENTS_LIST } from '../data';
import SectionHeading from './ui/SectionHeading';
import TiltCard from './ui/TiltCard';
import Deco from './ui/Deco';
import brushLilac from '../assets/deco/brush-lilac.webp';
import blobRed from '../assets/deco/blob-red.webp';

export default function Achievements() {
  return (
    <section id="achievements" className="relative w-full py-16 md:py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <Deco src={brushLilac} className="left-[-14%] top-[8%] w-[380px] -scale-x-100" />

      <SectionHeading
        label="Receipts"
        title="Proof, Not Promises."
        subtitle="A shelf of the moments where the work got measured against everyone else's — and held up."
      />

      <div className="flex flex-col gap-7">
        {ACHIEVEMENTS_LIST.map((ach, idx) => (
          <motion.div
            key={ach.id}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
          >
            <TiltCard max={9} lift={6} scale={1.015} className="bg-white rounded-md p-7 md:p-9 shadow-[0_14px_50px_rgba(110,100,170,0.12)] flex flex-col sm:flex-row gap-6">
              <div className="shrink-0 flex sm:flex-col items-center gap-3 sm:w-24">
                <span
                  className="w-[74px] h-[74px] flex items-center justify-center bg-contain bg-center bg-no-repeat text-white"
                  style={{ backgroundImage: `url(${blobRed})` }}
                >
                  <Award size={28} strokeWidth={1.8} />
                </span>
                {ach.rank && (
                  <span className="font-jost text-[13px] text-brand font-medium text-center leading-tight">{ach.rank}</span>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                  <h3 className="font-jost text-black text-2xl font-medium leading-snug">{ach.title}</h3>
                  {ach.date && <span className="font-jost text-sm text-ink-light shrink-0">{ach.date}</span>}
                </div>
                <p className="font-jost text-lg mb-3">
                  <span className="text-black">{ach.issuerLabel ?? 'Issued By'} </span>
                  <span className="text-brand">{ach.issuer}</span>
                </p>
                <p className="font-body text-brand-gray text-[15px] leading-[1.85] mb-4 max-w-3xl">{ach.description}</p>
                <div className="flex flex-wrap gap-2">
                  {ach.tags.map((tag) => (
                    <span key={tag} className="font-jost text-[13px] px-3 py-1 rounded-full border border-[#E4E1EE] text-[#4B4760] bg-white">
                      {tag}
                    </span>
                  ))}
                </div>

                {ach.links && ach.links.length > 0 && (
                  <div className="flex flex-wrap gap-3 mt-5">
                    {ach.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-wipe btn-wipe-outline btn-wipe-sm"
                      >
                        {l.kind === 'x' ? <XIcon size={14} /> : <BookOpen size={14} />}
                        <span>{l.label}</span>
                        <ArrowUpRight size={13} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
