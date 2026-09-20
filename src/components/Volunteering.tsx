/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Users, Trophy, FlaskConical, Laptop, Clock } from 'lucide-react';
import { VOLUNTEER_LIST } from '../data';
import SectionHeading from './ui/SectionHeading';
import TiltCard from './ui/TiltCard';
import Deco from './ui/Deco';
import splash from '../assets/deco/splash.webp';
import blobRed from '../assets/deco/blob-red.webp';
import blobGreen from '../assets/deco/blob-green.webp';
import blobLilac from '../assets/deco/blob-lilac.webp';
import blobCream from '../assets/deco/blob-cream.webp';

const ICONS = { users: Users, trophy: Trophy, flask: FlaskConical, laptop: Laptop };
const BLOBS = [blobRed, blobGreen, blobLilac, blobCream];

export default function Volunteering() {
  const causeCount = new Set(VOLUNTEER_LIST.map((v) => v.cause)).size;

  return (
    <section id="volunteering" className="relative w-full py-16 md:py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <Deco src={splash} className="right-[-2%] top-[2%] w-[140px]" />

      <SectionHeading
        label="Beyond The Desk"
        title="Time, Given Freely."
        subtitle={`No invoice attached to these. ${VOLUNTEER_LIST.length} roles across ${causeCount} causes — campus life, community, and research — outside of any paycheck.`}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {VOLUNTEER_LIST.map((vol, idx) => {
          const Icon = ICONS[vol.icon];
          return (
            <motion.div
              key={vol.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: (idx % 2) * 0.08 }}
            >
              <TiltCard className="h-full bg-white rounded-md p-8 md:p-10 shadow-[0_14px_50px_rgba(110,100,170,0.12)]">
                <div className="flex items-start gap-5 mb-5">
                  <span
                    className="shrink-0 w-[74px] h-[74px] flex items-center justify-center bg-contain bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${BLOBS[idx % BLOBS.length]})`, color: idx % 4 === 0 ? '#fff' : '#111' }}
                  >
                    <Icon size={26} strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-jost text-black text-2xl font-medium leading-tight">{vol.role}</h3>
                    <p className="font-jost text-black text-base mt-1">
                      Cause: <span className="text-brand">{vol.cause}</span>
                    </p>
                  </div>
                </div>

                <p className="font-jost text-black text-lg mb-2">{vol.organization}</p>
                <p className="font-body text-brand-gray text-[15px] leading-[1.85] mb-5">{vol.description}</p>

                <div className="flex items-center gap-2 font-jost text-sm text-ink-light">
                  <Clock size={14} className="text-brand" />
                  <span>{vol.period}</span>
                  {vol.duration && (
                    <>
                      <span>·</span>
                      <span>{vol.duration}</span>
                    </>
                  )}
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
