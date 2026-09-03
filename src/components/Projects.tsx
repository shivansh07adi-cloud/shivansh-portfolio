/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data';

export default function Projects() {
  return (
    <section id="projects" className="w-full py-16 md:py-24 px-6 md:px-12 max-w-5xl mx-auto border-b border-accent-mute/25">
      {/* Category Header Flag */}
      <div className="flex items-center gap-3 mb-4 font-mono text-[10px] md:text-xs tracking-widest text-ink-light">
        <span className="font-semibold text-ink-dark">{PROJECTS_DATA.section_num}</span>
        <span className="w-8 h-[1px] bg-accent-mute" />
        <span className="uppercase">{PROJECTS_DATA.section_title}</span>
      </div>

      {/* Heading */}
      <div className="mb-14">
        <h2 className="font-serif text-4xl md:text-6xl font-bold italic text-ink-dark mb-4 leading-tight tracking-tight">
          {PROJECTS_DATA.title}
        </h2>
        <p className="font-body text-sm md:text-base text-ink-gray max-w-xl">
          {PROJECTS_DATA.subtitle}
        </p>
      </div>

      {/* 2-Column responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS_DATA.projects.map((project, idx) => {
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex flex-col justify-between p-6 bg-[#FAF6EE] border border-accent-mute/40 border-t-2 border-t-accent-mute rounded-lg hover:shadow-md transition-all duration-300 group hover:scale-[1.01]"
            >
              <div>
                {/* Project Header Title */}
                <h3 className="font-serif text-xl md:text-2xl font-bold text-ink-dark mb-3 group-hover:italic transition-all duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-ink-gray leading-relaxed mb-5 text-justify">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[9px] px-2 py-0.5 rounded-sm bg-canvas text-ink-gray border border-accent-mute/20 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom half: Ratings & Buttons */}
              <div className="space-y-4 mt-auto">
                {/* Fun Ratings */}
                <div className="border-t border-accent-mute/20 pt-4 space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#B3A994]">
                    <span className="uppercase tracking-wider font-semibold">Sleep Lost:</span>
                    <span className="text-xs select-none tracking-normal font-sans">{project.sleepLost}</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#B3A994]">
                    <span className="uppercase tracking-wider font-semibold">Ice Cream Consumed:</span>
                    <span className="text-xs select-none tracking-normal font-sans">{project.iceCreamConsumed}</span>
                  </div>
                </div>

                {/* Button actions bar */}
                <div className="flex gap-2 flex-wrap">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 border border-accent-mute/50 hover:border-ink-dark hover:bg-black/5 rounded text-xs font-mono text-ink-gray hover:text-ink-dark transition-all duration-300 flex-grow text-center cursor-pointer font-semibold shadow-xs"
                    >
                      <Github size={12} />
                      <span>{project.githubFrontend ? 'Backend' : 'GitHub'}</span>
                    </a>
                  )}
                  {project.githubFrontend && (
                    <a
                      href={project.githubFrontend}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 border border-accent-mute/50 hover:border-ink-dark hover:bg-black/5 rounded text-xs font-mono text-ink-gray hover:text-ink-dark transition-all duration-300 flex-grow text-center cursor-pointer font-semibold shadow-xs"
                    >
                      <Github size={12} />
                      <span>Frontend</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-ink-dark text-canvas border border-ink-dark hover:bg-[#B19470] hover:border-[#B19470] rounded text-xs font-mono transition-all duration-300 flex-grow text-center cursor-pointer font-semibold shadow-xs"
                    >
                      <ExternalLink size={12} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Profile GitHub Badge footer block explicitly requested */}
      <div className="mt-12 text-center">
        <a
          href="https://github.com/shivansh07adi-cloud"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4.5 py-2.5 border border-accent-mute hover:border-ink-dark hover:bg-black/5 rounded-full text-xs font-mono text-ink-gray hover:text-ink-dark transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer"
        >
          <Github size={13} />
          <span>All projects are available in my GitHub account</span>
          <ArrowUpRight size={12} className="opacity-70" />
        </a>
      </div>
    </section>
  );
}
