/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Hash, Cpu, Layout, Database, Cloud } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data';

interface SkillsProps {
  selectedSkill: string | null;
  onSkillSelect: (skill: string | null) => void;
}

export default function Skills({ selectedSkill, onSkillSelect }: SkillsProps) {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Collect categorised skills
  const categories = SKILL_CATEGORIES;

  // Flatten all skills for searching
  const allSkillsList = categories.flatMap(cat => cat.skills);

  const getIconForCategory = (id: string) => {
    switch (id) {
      case 'ai-cv':
        return <Cpu size={14} className="text-ink-dark" />;
      case 'web-frontend':
        return <Layout size={14} className="text-ink-dark" />;
      case 'systems-db':
        return <Database size={14} className="text-ink-dark" />;
      case 'cloud-tools':
        return <Cloud size={14} className="text-ink-dark" />;
      default:
        return <Hash size={14} className="text-ink-dark" />;
    }
  };

  const handleSkillClick = (skill: string) => {
    if (selectedSkill === skill) {
      onSkillSelect(null); // Deselect
    } else {
      onSkillSelect(skill); // Select
      // Smoothly scroll to experience timeline to see associated jobs
      const expSection = document.getElementById('experience');
      if (expSection) {
        expSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="skills" className="w-full py-16 md:py-24 px-6 md:px-12 max-w-5xl mx-auto border-b border-accent-mute/25">
      {/* Category Header Flag */}
      <div className="flex items-center gap-3 mb-4 font-mono text-[10px] md:text-xs tracking-widest text-ink-light">
        <span className="font-semibold text-ink-dark">04</span>
        <span className="w-8 h-[1px] bg-accent-mute" />
        <span className="uppercase">THE ARSENAL</span>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold italic text-ink-dark mb-4 leading-tight tracking-tight">
            My Toolbox
          </h2>
          <p className="font-body text-sm md:text-base text-ink-gray max-w-xl">
            A comprehensive catalog of languages, models, and tools. <span className="font-semibold text-ink-dark underline decoration-accent-mute">Click any item</span> to highlight roles below that utilize that stack.
          </p>
        </div>

        {/* Real-time search bar */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search skills (e.g. OpenCV, React)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2.5 pl-10 border border-accent-mute bg-[#FAF8F2] text-xs font-mono text-ink-dark placeholder-ink-light/70 focus:outline-none focus:border-ink-dark focus:ring-1 focus:ring-ink-dark rounded-md transition-all duration-300"
          />
          <Search size={14} className="absolute left-3.5 top-3.5 text-ink-light" />
        </div>
      </div>

      {/* Category Tabs list matching premium styling */}
      <div className="flex flex-wrap gap-2 md:gap-3 mb-10 border-b border-accent-mute/20 pb-4">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-3 py-1.5 rounded text-xs font-mono tracking-widest uppercase transition-all duration-300 ${
            activeTab === 'all'
              ? 'bg-ink-dark text-canvas border border-ink-dark shadow-sm font-semibold'
              : 'border border-accent-mute/40 text-ink-gray hover:text-ink-dark hover:border-ink-dark bg-transparent'
          }`}
        >
          All (40)
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-3 py-1.5 rounded text-xs font-mono tracking-widest uppercase transition-all duration-300 flex items-center gap-1.5 ${
              activeTab === cat.id
                ? 'bg-ink-dark text-canvas border border-ink-dark shadow-sm font-semibold'
                : 'border border-accent-mute/40 text-ink-gray hover:text-ink-dark hover:border-ink-dark bg-transparent'
            }`}
          >
            {getIconForCategory(cat.id)}
            <span>{cat.name.split(' & ')[0]}</span>
          </button>
        ))}
      </div>

      {/* Bento Grid or Layout Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories
          .filter((cat) => activeTab === 'all' || cat.id === activeTab)
          .map((cat) => {
            // Filter skills in this tab according to searched query
            const filteredSkills = cat.skills.filter((skill) =>
              skill.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (filteredSkills.length === 0) return null;

            return (
              <motion.div
                key={cat.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-6 bg-[#FAF6EE] border border-accent-mute/4 border-t-2 border-t-accent-mute rounded-lg space-y-4 hover:shadow-md transition-shadow duration-300"
              >
                {/* Header */}
                <div className="flex justify-between items-center pb-2 border-b border-accent-mute/25">
                  <span className="font-mono text-[9px] font-semibold text-ink-dark tracking-widest uppercase flex items-center gap-1.5">
                    {getIconForCategory(cat.id)}
                    {cat.name}
                  </span>
                  <span className="font-mono text-[9.5px] text-ink-light">
                    ({cat.skills.length} Items)
                  </span>
                </div>

                <p className="font-body text-xs text-ink-gray italic mb-3">
                  {cat.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {filteredSkills.map((skill) => {
                    const isHighlighted = selectedSkill === skill;
                    return (
                      <button
                        key={skill}
                        onClick={() => handleSkillClick(skill)}
                        className={`text-left px-3 py-1.5 rounded-sm font-mono text-[11px] tracking-wide border transition-all duration-300 flex items-center gap-1.5 select-none ${
                          isHighlighted
                            ? 'bg-[#B19470] border-[#B19470] text-white shadow-md font-semibold rotate-[0.5deg]'
                            : 'bg-canvas border-accent-mute/40 text-ink-gray hover:text-ink-dark hover:border-ink-dark hover:bg-[#FAF6EE]/50 hover:shadow-xs'
                        }`}
                      >
                        <span className={`w-1 h-1 rounded-full ${isHighlighted ? 'bg-white' : 'bg-accent-mute'}`} />
                        <span>{skill}</span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
      </div>

      {/* Global highlights helper banner */}
      {selectedSkill && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-3 rounded bg-[#B19470]/10 border border-[#B19470]/30 flex justify-between items-center max-w-xl mx-auto"
        >
          <span className="font-mono text-[11px] text-[#86653E]">
            FILTER ACTIVE: <span className="font-bold underline">{selectedSkill}</span>. Scroll to timeline to see matching roles.
          </span>
          <button
            onClick={() => onSkillSelect(null)}
            className="font-mono text-[10px] text-[#86653E] hover:text-[#5f462a] font-bold uppercase tracking-wider underline cursor-pointer"
          >
            Clear Filter
          </button>
        </motion.div>
      )}
    </section>
  );
}
