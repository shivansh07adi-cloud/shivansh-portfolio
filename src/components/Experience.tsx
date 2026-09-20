/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Eye, Calendar, MapPin, Tag, ArrowUpRight } from 'lucide-react';
import { ExperienceItem, MediaItem } from '../types';
import { EXPERIENCE_LIST } from '../data';
import MediaModal from './MediaModal';
import SectionHeading from './ui/SectionHeading';
import TiltCard from './ui/TiltCard';
import Deco from './ui/Deco';
import swirl from '../assets/deco/swirl.webp';
import brushLilac from '../assets/deco/brush-lilac.webp';
import synthicaLogo from '../assets/company-logos/synthica.png';
import inamigosLogo from '../assets/company-logos/inamigos.png';
import moeLogo from '../assets/company-logos/moe.png';
import nutrithyLogo from '../assets/company-logos/nutrithy.png';

interface ExperienceProps {
  selectedSkill: string | null;
}

// Real DeepMind brand mark (Google DeepMind)
const DEEPMIND_PATH = 'm5.99,1.62a8.54,8.54 0 0 0 -2.54,6.83c0.35,4.4 4.51,7.99 8.28,7.99c3.5,0 4.88,-3.06 4.54,-5.14a4.32,4.32 0 0 0 -0.95,-2.07c0.63,0.34 1.24,0.77 1.81,1.3c1.52,1.41 2.44,3.23 2.58,5.1c0.33,4.13 -2.73,8.37 -7.85,8.37c-1.69,0 -3.48,-0.43 -4.98,-1.14c-4.06,-1.92 -6.88,-6.06 -6.88,-10.86c0,-4.43 2.41,-8.3 5.99,-10.38zm6.15,-1.62c1.69,0 3.48,0.43 4.98,1.14a12,12 0 0 1 6.88,10.86c0,4.43 -2.41,8.3 -5.99,10.38a8.54,8.54 0 0 0 2.54,-6.83c-0.35,-4.4 -4.51,-7.99 -8.28,-7.99c-3.5,0 -4.88,3.06 -4.54,5.14a4.3,4.3 0 0 0 0.96,2.07a8.72,8.72 0 0 1 -1.81,-1.3c-1.52,-1.41 -2.44,-3.23 -2.59,-5.1c-0.33,-4.13 2.73,-8.37 7.85,-8.37z';

function initials(company: string) {
  const words = company.replace(/\(.*?\)/g, '').trim().split(/\s+/).filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

function CompanyLogo({ exp }: { exp: ExperienceItem }) {
  if (exp.company === 'Nutrithy Wellness') {
    return (
      <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border border-black/5 shadow-sm overflow-hidden bg-[#3A4A3E]">
        <img src={nutrithyLogo} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover" />
      </div>
    );
  }
  if (exp.company.includes('DeepMind')) {
    return (
      <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border border-black/5 shadow-sm bg-white">
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#4285F4">
          <path d={DEEPMIND_PATH} />
        </svg>
      </div>
    );
  }
  if (exp.company === 'Synthica') {
    return (
      <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border border-black/5 shadow-sm overflow-hidden bg-black">
        <img src={synthicaLogo} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover" />
      </div>
    );
  }
  if (exp.company.includes('InAmigos')) {
    return (
      <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border border-black/5 shadow-sm overflow-hidden bg-white">
        <img src={inamigosLogo} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover" />
      </div>
    );
  }
  if (exp.company.includes('MINISTRY OF EDUCATION')) {
    return (
      <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border border-black/5 shadow-sm overflow-hidden bg-white p-0.5">
        <img src={moeLogo} alt="" loading="lazy" decoding="async" className="w-full h-full object-contain" />
      </div>
    );
  }
  return (
    <div
      className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 shadow-sm bg-gradient-to-br ${exp.logoColor || 'from-[#8E8E8A] to-[#CEC0A8]'}`}
    >
      <span className="font-mono text-[11px] font-bold text-white tracking-tight">
        {initials(exp.company)}
      </span>
    </div>
  );
}

export default function Experience({ selectedSkill }: ExperienceProps) {
  const [activeMedia, setActiveMedia] = useState<{ media: MediaItem; company: string; role: string } | null>(null);

  // Experience timeline data loaded from data.ts
  const experiences = EXPERIENCE_LIST;

  const handleMediaClick = (media: MediaItem, company: string, role: string) => {
    setActiveMedia({ media, company, role });
  };

  return (
    <section id="experience" className="relative w-full py-16 md:py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <Deco src={swirl} className="left-[-9%] top-[3%] w-[170px]" />
      <Deco src={brushLilac} className="right-[-12%] top-[40%] w-[380px]" />

      <SectionHeading
        label="Experience Timeline"
        title="Experience"
        subtitle="An ongoing trace of open-source contributions, research milestones, and freelance achievements."
      />

      {/* Timeline */}
      <div className="relative border-l-2 border-[#E4E1EE] pl-6 md:pl-10 ml-2 md:ml-4 space-y-10">
        {experiences.map((exp) => {
          const matchesFilter = selectedSkill ? exp.skills.includes(selectedSkill) : false;
          const hasFilterActive = selectedSkill !== null;

          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className={`relative transition-all duration-500 ${
                hasFilterActive && !matchesFilter ? 'opacity-40 grayscale scale-[0.985]' : ''
              }`}
            >
              {/* Timeline knot */}
              <div
                className={`absolute -left-[33px] md:-left-[51px] top-9 w-4 h-4 rounded-full border-[3px] bg-white transition-all duration-300 ${
                  matchesFilter ? 'border-brand scale-125 shadow-md' : 'border-brand/70'
                }`}
              />

              <TiltCard
                max={9} lift={6} scale={1.015}
                className={`bg-white rounded-md p-7 md:p-9 shadow-[0_14px_50px_rgba(110,100,170,0.12)] ${
                  matchesFilter ? 'ring-2 ring-brand/40' : ''
                }`}
              >
                {/* Period row */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-jost text-sm text-ink-light mb-4">
                  <span className="flex items-center gap-1.5 text-black">
                    <Calendar size={14} className="text-brand" />
                    {exp.period}
                  </span>
                  <span>·</span>
                  <span>{exp.duration}</span>
                  {exp.type && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#F6F5FB] text-brand-gray text-[13px]">
                      <Tag size={11} />
                      {exp.type}
                    </span>
                  )}
                </div>

                {/* Logo + role + company */}
                <div className="flex items-start gap-4 mb-4">
                  <CompanyLogo exp={exp} />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-jost text-black text-2xl md:text-[28px] font-medium leading-tight">{exp.role}</h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 font-jost text-lg mt-0.5">
                      <span className="text-brand">{exp.company}</span>
                      {exp.location && (
                        <span className="text-ink-light flex items-center gap-1 text-[15px]">
                          <MapPin size={13} />
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="font-body text-[15px] text-brand-gray leading-[1.85] mb-5 max-w-3xl">
                  {Array.isArray(exp.description) ? (
                    <ul className="list-disc pl-5 space-y-1.5 marker:text-brand">
                      {exp.description.map((bullet, index) => (
                        <li key={index} className="pl-1">{bullet}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{exp.description}</p>
                  )}
                </div>

                {exp.projectLink && (
                  <div className="mb-5">
                    <a
                      href={exp.projectLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-jost text-base text-brand hover:text-brand-dark underline underline-offset-4 decoration-brand/40 transition-colors"
                    >
                      <span>🔗 Live Project Dashboard Preview</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                )}

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2 mb-1">
                  {exp.skills.map((skill) => {
                    const hl = selectedSkill === skill;
                    return (
                      <span
                        key={skill}
                        className={`font-jost text-[13px] px-3 py-1 rounded-full border transition-all duration-300 ${
                          hl ? 'bg-brand text-white border-brand' : 'bg-white text-[#4B4760] border-[#E4E1EE]'
                        }`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>

                {/* Media attachments */}
                {exp.media && exp.media.length > 0 && (
                  <div className="mt-6 pt-5 border-t border-[#EEEBF6]">
                    <span className="font-jost text-[13px] tracking-[0.14em] text-ink-light uppercase block mb-3">
                      Media Document Verifications
                    </span>
                    <div className="flex flex-wrap gap-3">
                      {exp.media.map((med, index) => (
                        <button
                          key={index}
                          onClick={() => handleMediaClick(med, exp.company, exp.role)}
                          className="btn-wipe btn-wipe-outline btn-wipe-sm"
                          title="Click to view full document"
                        >
                          <Eye size={14} />
                          <span>{med.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </TiltCard>
            </motion.div>
          );
        })}
      </div>

      {activeMedia && (
        <MediaModal
          media={activeMedia.media}
          companyName={activeMedia.company}
          roleName={activeMedia.role}
          onClose={() => setActiveMedia(null)}
        />
      )}
    </section>
  );
}
