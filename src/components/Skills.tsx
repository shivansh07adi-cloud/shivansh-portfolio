/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Hash, Cpu, Layout, Database, Cloud, Server, Briefcase } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data';
import { scrollToId } from '../utils/scroll';
import SectionHeading from './ui/SectionHeading';
import TiltCard from './ui/TiltCard';
import Deco from './ui/Deco';
import brushPink from '../assets/deco/brush-pink.webp';
import dotsRing from '../assets/deco/dots-ring.webp';
import blobRed from '../assets/deco/blob-red.webp';
import blobGreen from '../assets/deco/blob-green.webp';
import blobLilac from '../assets/deco/blob-lilac.webp';
import blobCream from '../assets/deco/blob-cream.webp';

interface SkillsProps {
  selectedSkill: string | null;
  onSkillSelect: (skill: string | null) => void;
}

const BLOBS = [blobRed, blobGreen, blobLilac, blobCream];

export default function Skills({ selectedSkill, onSkillSelect }: SkillsProps) {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = SKILL_CATEGORIES;
  const totalSkills = new Set(categories.flatMap((c) => c.skills)).size;

  const iconFor = (id: string, size = 26) => {
    switch (id) {
      case 'ai-cv': return <Cpu size={size} strokeWidth={1.8} />;
      case 'web-frontend': return <Layout size={size} strokeWidth={1.8} />;
      case 'backend-data': return <Server size={size} strokeWidth={1.8} />;
      case 'systems-db': return <Database size={size} strokeWidth={1.8} />;
      case 'business-mgmt': return <Briefcase size={size} strokeWidth={1.8} />;
      case 'cloud-tools': return <Cloud size={size} strokeWidth={1.8} />;
      default: return <Hash size={size} strokeWidth={1.8} />;
    }
  };

  const handleSkillClick = (skill: string) => {
    if (selectedSkill === skill) {
      onSkillSelect(null);
    } else {
      onSkillSelect(skill);
      scrollToId('experience');
    }
  };

  const tab = (active: boolean) =>
    `font-jost text-base md:text-lg transition-colors cursor-pointer ${active ? 'text-brand' : 'text-black hover:text-brand'}`;

  return (
    <section id="skills" className="relative w-full py-16 md:py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <Deco src={brushPink} className="left-[-9%] top-[16%] w-[360px]" />
      <Deco src={dotsRing} className="right-[-6%] top-[2%] w-[300px]" />

      <SectionHeading
        label="The Arsenal"
        title="My Toolbox"
        subtitle={
          <>
            A comprehensive catalog of languages, models, and tools.{' '}
            <span className="font-semibold text-black">Click any item</span> to highlight roles below that utilize that stack.
          </>
        }
        className="mb-10"
      />

      {/* Search */}
      <div className="relative max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search skills (e.g. OpenCV, React)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-5 py-3 pl-12 border border-[#E4E1EE] bg-white text-base font-body text-black placeholder-ink-light focus:outline-none focus:border-brand rounded-full transition-colors duration-300 cursor-text"
        />
        <Search size={17} className="absolute left-5 top-[15px] text-ink-light" />
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-3 mb-12">
        <button onClick={() => setActiveTab('all')} className={tab(activeTab === 'all')}>All ({totalSkills})</button>
        {categories.map((cat) => (
          <button key={cat.id} onClick={() => setActiveTab(cat.id)} className={tab(activeTab === cat.id)}>
            {cat.name.split(' & ')[0]}
          </button>
        ))}
      </div>

      {/* Service-style cards */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories
          .filter((cat) => activeTab === 'all' || cat.id === activeTab)
          .map((cat, idx) => {
            const filteredSkills = cat.skills.filter((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()));
            if (filteredSkills.length === 0) return null;
            return (
              <motion.div
                key={cat.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
              >
                <TiltCard className="h-full bg-white rounded-md p-8 md:p-10 shadow-[0_14px_50px_rgba(110,100,170,0.12)]">
                  <div className="flex items-center gap-5 mb-5">
                    <span
                      className="relative shrink-0 w-[74px] h-[74px] flex items-center justify-center bg-contain bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${BLOBS[idx % BLOBS.length]})`, color: idx % 4 === 0 ? '#fff' : '#111' }}
                    >
                      {iconFor(cat.id)}
                    </span>
                    <div>
                      <h3 className="font-jost text-black text-2xl font-medium leading-tight">{cat.name}</h3>
                      <p className="font-jost text-black text-base mt-1">
                        Items: <span className="text-brand">{cat.skills.length}</span>
                      </p>
                    </div>
                  </div>

                  <p className="font-body text-brand-gray text-[15px] leading-[1.8] mb-5">{cat.description}</p>

                  <div className="flex flex-wrap gap-2.5">
                    {filteredSkills.map((skill) => {
                      const isHighlighted = selectedSkill === skill;
                      return (
                        <button
                          key={skill}
                          onClick={() => handleSkillClick(skill)}
                          className={`px-4 py-1.5 rounded-full font-jost text-[14px] border transition-all duration-300 cursor-pointer select-none ${
                            isHighlighted
                              ? 'bg-brand border-brand text-white shadow-md'
                              : 'bg-white border-[#E4E1EE] text-[#4B4760] hover:border-brand hover:text-brand'
                          }`}
                        >
                          {skill}
                        </button>
                      );
                    })}
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
      </div>

      {selectedSkill && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 px-5 py-3 rounded-full bg-[#FFF1EC] border border-brand/30 flex flex-wrap justify-between items-center gap-3 max-w-xl mx-auto"
        >
          <span className="font-jost text-[15px] text-brand-dark">
            Filter active: <span className="font-semibold underline">{selectedSkill}</span>. Scroll to the timeline to see matching roles.
          </span>
          <button onClick={() => onSkillSelect(null)} className="font-jost text-sm text-brand-dark font-semibold underline cursor-pointer">
            Clear Filter
          </button>
        </motion.div>
      )}
    </section>
  );
}
