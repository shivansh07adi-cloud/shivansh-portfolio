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
        <img src={nutrithyLogo} alt="" className="w-full h-full object-cover" />
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
        <img src={synthicaLogo} alt="" className="w-full h-full object-cover" />
      </div>
    );
  }
  if (exp.company.includes('InAmigos')) {
    return (
      <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border border-black/5 shadow-sm overflow-hidden bg-white">
        <img src={inamigosLogo} alt="" className="w-full h-full object-cover" />
      </div>
    );
  }
  if (exp.company.includes('MINISTRY OF EDUCATION')) {
    return (
      <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border border-black/5 shadow-sm overflow-hidden bg-white p-0.5">
        <img src={moeLogo} alt="" className="w-full h-full object-contain" />
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
    <section id="experience" className="w-full py-16 md:py-24 px-6 md:px-12 max-w-4xl mx-auto border-b border-accent-mute/25">
      {/* Category Header Flag */}
      <div className="flex items-center gap-3 mb-4 font-mono text-[10px] md:text-xs tracking-widest text-ink-light">
        <span className="font-semibold text-ink-dark">05</span>
        <span className="w-8 h-[1px] bg-accent-mute" />
        <span className="uppercase">EXPERIENCE TIMELINE</span>
      </div>

      {/* Heading */}
      <div className="mb-14">
        <h2 className="font-serif text-4xl md:text-6xl font-bold italic text-ink-dark mb-4 leading-tight tracking-tight">
          Experience
        </h2>
        <p className="font-body text-sm md:text-base text-ink-gray max-w-xl">
          An ongoing trace of open-source contributions, research milestones, and freelance achievements.
        </p>
      </div>

      {/* Timeline Layout Container */}
      <div className="relative border-l border-accent-mute/30 pl-6 md:pl-10 ml-2 md:ml-4 space-y-16">
        {experiences.map((exp) => {
          // Check if this experience incorporates the currently selected skill search query
          const matchesFilter = selectedSkill ? exp.skills.includes(selectedSkill) : false;
          const hasFilterActive = selectedSkill !== null;

          return (
            <motion.div
              key={exp.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className={`relative group leading-relaxed transition-all duration-500 rounded p-4 -mx-4 ${
                hasFilterActive
                  ? matchesFilter
                    ? 'bg-[#B19470]/8 border border-[#B19470]/30 shadow-md ring-2 ring-[#B19470]/20'
                    : 'opacity-40 grayscale blur-[0.5px] scale-[0.98]'
                  : 'hover:bg-black/2'
              }`}
            >
              {/* Timeline Bullet Point Knot exactly as in Screenshot 4 */}
              <div
                className={`absolute -left-[31px] md:-left-[47px] top-6 w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  matchesFilter
                    ? 'bg-[#B19470] border-white scale-125 shadow-md'
                    : 'bg-canvas border-accent-mute group-hover:border-ink-dark group-hover:bg-ink-dark'
                }`}
              />

              {/* Header Container */}
              <div className="space-y-1.5 mb-3">
                {/* Period Range jetbrains code subtitle */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] md:text-xs tracking-widest text-[#B3A994]">
                  <span className="uppercase font-semibold flex items-center gap-1">
                    <Calendar size={11} />
                    {exp.period}
                  </span>
                  <span className="text-[#CEC0A8]">/</span>
                  <span className="text-ink-light">({exp.duration})</span>
                  {exp.type && (
                    <>
                      <span className="text-[#CEC0A8]">/</span>
                      <span className="inline-flex items-center gap-1 bg-[#FAF6EE] border border-accent-mute/20 px-1.5 py-0.5 rounded text-[9.5px]">
                        <Tag size={9} />
                        {exp.type}
                      </span>
                    </>
                  )}
                </div>

                {/* Role + company row with logo tile */}
                <div className="flex items-start gap-3">
                  <CompanyLogo exp={exp} />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-ink-dark group-hover:italic transition-all duration-500 leading-tight">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-2 text-sm text-ink-gray font-body">
                      <span className="font-semibold text-ink-dark">{exp.company}</span>
                      {exp.location && (
                        <span className="text-ink-light flex items-center gap-0.5 text-xs">
                          <MapPin size={10} />
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Paragraph Prose Block (Markdown rendering logic wrapper) */}
              <div className="font-body text-sm md:text-base text-ink-gray mb-4 leading-relaxed max-w-2xl text-justify">
                {Array.isArray(exp.description) ? (
                  <ul className="list-disc pl-4 space-y-1.5 pt-1.5">
                    {exp.description.map((bullet, index) => (
                      <li key={index} className="pl-1">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>{exp.description}</p>
                )}
              </div>

              {/* Project Website External link if freelance / live dashboard */}
              {exp.projectLink && (
                <div className="mb-4">
                  <a
                    href={exp.projectLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#86653E] hover:text-ink-dark underline decoration-dotted underline-offset-4 decoration-[#B19470] transition-colors"
                  >
                    <span>🔗 Live Project Dashboard Preview</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              )}

              {/* Included skills associated tags layout */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {exp.skills.map((skill) => {
                  const isHighlightedSkill = selectedSkill === skill;
                  return (
                    <span
                      key={skill}
                      className={`font-mono text-[9px] px-2 py-0.5 rounded-sm transition-all duration-300 border ${
                        isHighlightedSkill
                          ? 'bg-[#B19470] text-white border-[#B19470] font-semibold'
                          : 'bg-[#FAF6EE] text-ink-gray border-accent-mute/20'
                      }`}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>

              {/* Media Attachments Block matching screenshots */}
              {exp.media && exp.media.length > 0 && (
                <div className="mt-4 pt-4 border-t border-accent-mute/15">
                  <span className="font-mono text-[9px] tracking-widest text-[#B3A994] uppercase block mb-2.5">
                    MEDIA DOCUMENT VERIFICATIONS
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {exp.media.map((med, index) => (
                      <button
                        key={index}
                        onClick={() => handleMediaClick(med, exp.company, exp.role)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF6EE] hover:bg-ink-dark hover:text-canvas border border-accent-mute/30 rounded-sm text-xs font-mono text-ink-gray transition-all duration-300 shadow-inner group/btn cursor-pointer"
                        title="Click to view full cryptographic document"
                      >
                        <Eye size={11} className="text-accent-mute group-hover/btn:text-canvas transition-colors" />
                        <span className="group-hover/btn:underline">{med.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Dynamic Modal mounting point */}
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
