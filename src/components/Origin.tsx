/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ORIGIN_STORY } from '../data';
import { scrollToId } from '../utils/scroll';
import SectionHeading, { toTitle } from './ui/SectionHeading';
import Deco from './ui/Deco';
import swirl from '../assets/deco/swirl.webp';
import brushLilac from '../assets/deco/brush-lilac.webp';

export default function Origin() {
  const scrollToContact = () => scrollToId('contact');

  return (
    <section id="origin" className="relative w-full py-16 md:py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <Deco src={swirl} className="left-[-4%] top-[2%] w-[190px]" />
      <Deco src={brushLilac} className="right-[-7%] bottom-[4%] w-[400px]" />

      <SectionHeading label={toTitle(ORIGIN_STORY.section_title)} title={ORIGIN_STORY.title} className="mb-10 md:mb-12" />

      <div className="relative max-w-3xl mx-auto space-y-6 font-body text-base md:text-[17px] text-brand-gray leading-[1.9]">
        {ORIGIN_STORY.paragraphs.map((p, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            {index === 1 ? (
              <>
                Somewhere between writing optimized C++ algorithms and exploring real-time tracking models like MediaPipe and OpenCV, I realized the world doesn't run on facts. It runs on{' '}
                <span className="font-medium text-black border-b-2 border-brand/50 pb-0.5">
                  decisions made by people who understood something slightly better than everyone else
                </span>
                . I exist to be one of those people.
              </>
            ) : (
              p
            )}
          </motion.p>
        ))}
        <div className="pt-4">
          <button onClick={scrollToContact} className="btn-wipe btn-wipe-sm" style={{ padding: '0.7rem 1.9rem' }}>
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
}
