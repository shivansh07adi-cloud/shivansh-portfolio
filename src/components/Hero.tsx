/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Github, Linkedin, Instagram, Trophy, Terminal, Award, FileCode, ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="w-full min-h-[75vh] flex flex-col justify-center px-6 md:px-12 py-12 md:py-20 max-w-5xl mx-auto">
      {/* Editorial Category Subtitle tag */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 flex flex-wrap"
      >
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-100/70 hover:bg-amber-200/90 text-[#4A4A48] hover:text-black border border-amber-300/40 hover:border-amber-400 select-none rounded font-mono text-[9px] md:text-xs tracking-wider md:tracking-widest uppercase font-semibold transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md hover:scale-[1.02] transform">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          <span>CURRENTLY: STUDENT · BUILDER · HUNGRY. · OPEN TO FULL-TIME OPPORTUNITY</span>
        </span>
      </motion.div>

      {/* Main Giant Display Typographic Triad */}
      <div className="space-y-0.5 md:space-y-1 mb-8" id="display-titles">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-[13vw] sm:text-[10vw] md:text-[7vw] font-bold tracking-tight text-ink-dark leading-[0.95] flex items-baseline"
        >
          Builder.
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-serif text-[13vw] sm:text-[10vw] md:text-[7vw] font-bold tracking-tight text-ink-dark leading-[0.95]"
        >
          Developer.
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-serif text-[13vw] sm:text-[10vw] md:text-[7vw] font-bold tracking-tight text-ink-dark leading-[0.95]"
        >
          Contributor.
        </motion.h1>
      </div>

      {/* Editorial Descriptive Text Block */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="font-body text-base sm:text-lg md:text-xl text-ink-gray max-w-3xl leading-relaxed mb-10 text-justify"
      >
        {PERSONAL_INFO.bio}
      </motion.p>

      {/* Social Badges Pill Layout matching the screenshot precisely */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-wrap gap-2.5 items-center"
      >
        {/* GitHub badge */}
        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-accent-mute/60 rounded-full text-xs font-mono text-ink-gray hover:text-ink-dark hover:border-ink-dark hover:bg-black/5 transition-all duration-300 shadow-xs hover:shadow-md"
        >
          <Github size={13} />
          <span>shivansh07adi-cloud</span>
        </a>

        {/* LinkedIn badge */}
        <a
          href={PERSONAL_INFO.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-accent-mute/60 rounded-full text-xs font-mono text-ink-gray hover:text-ink-dark hover:border-ink-dark hover:bg-black/5 transition-all duration-300 shadow-xs hover:shadow-md"
        >
          <Linkedin size={13} />
          <span>shivansh-kumar-adi</span>
        </a>

        {/* Instagram badge */}
        <a
          href={PERSONAL_INFO.instagram}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-accent-mute/60 rounded-full text-xs font-mono text-ink-gray hover:text-ink-dark hover:border-ink-dark hover:bg-black/5 transition-all duration-300 shadow-xs hover:shadow-md"
        >
          <Instagram size={13} />
          <span>@triples.2008</span>
        </a>

        {/* LeetCode badge */}
        <a
          href={PERSONAL_INFO.leetcode}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-accent-mute/60 rounded-full text-xs font-mono text-ink-gray hover:text-ink-dark hover:border-ink-dark hover:bg-black/5 transition-all duration-300 shadow-xs hover:shadow-md"
          title="LeetCode profile"
        >
          <Trophy size={13} className="text-[#F29C38]" />
          <span>LeetCode</span>
        </a>

        {/* HackerRank badge */}
        <a
          href={PERSONAL_INFO.hackerrank}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-accent-mute/60 rounded-full text-xs font-mono text-ink-gray hover:text-ink-dark hover:border-ink-dark hover:bg-black/5 transition-all duration-300 shadow-xs hover:shadow-md"
          title="HackerRank profile"
        >
          <Terminal size={13} className="text-[#32CD32]" />
          <span>HackerRank</span>
        </a>

        {/* CodeChef badge */}
        <a
          href={PERSONAL_INFO.codechef}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-accent-mute/60 rounded-full text-xs font-mono text-ink-gray hover:text-ink-dark hover:border-ink-dark hover:bg-black/5 transition-all duration-300 shadow-xs hover:shadow-md"
          title="CodeChef profile"
        >
          <Award size={13} className="text-[#8B4513]" />
          <span>CodeChef</span>
        </a>

        {/* Contact Badge */}
        <button
          onClick={() => scrollToSection('contact')}
          className="inline-flex items-center gap-2 px-4 py-2 bg-ink-dark text-canvas border border-ink-dark rounded-full text-xs font-mono hover:bg-accent-mute hover:text-ink-dark hover:border-accent-mute transition-all duration-300 shadow-md cursor-pointer"
        >
          <FileCode size={13} />
          <span>Let's Talk</span>
        </button>
      </motion.div>

      {/* Divider and transition arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 0.8 }}
        className="w-full h-[1px] bg-accent-mute/40 mt-16 md:mt-24 mb-6 flex justify-between items-center"
      >
        <span className="font-mono text-[9px] tracking-widest text-[#B3A994]">SCROLL TO READ</span>
        <button
          onClick={() => scrollToSection('origin')}
          className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/5 text-[#B3A994] hover:text-ink-dark transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown size={14} className="animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}
