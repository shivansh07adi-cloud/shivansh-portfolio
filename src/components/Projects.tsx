/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useMemo, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Github, ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import SectionHeading, { toTitle } from './ui/SectionHeading';
import Deco from './ui/Deco';
import splash from '../assets/deco/splash.webp';

type Project = (typeof PROJECTS_DATA.projects)[number];

// Drop a screenshot into src/assets/projects/ named after the project id
// (e.g. proj-flashbook.png / .jpg / .webp) and it is picked up automatically.
const imageModules = import.meta.glob('../assets/projects/*.{png,jpg,jpeg,webp}', {
  eager: true,
  query: '?url',
  import: 'default'
}) as Record<string, string>;
const PROJECT_IMAGES: Record<string, string> = Object.fromEntries(
  Object.entries(imageModules).map(([path, url]) => [path.split('/').pop()!.replace(/\.[^.]+$/, ''), url])
);

// Tab order (only categories that actually have a visible project are shown).
const CATEGORY_ORDER = ['Frontend', 'Full Stack', 'Backend & Tools', 'AI & Vision'];

// Muted editorial palette for the auto-generated covers (used when no screenshot exists yet).
const COVER_TONES = ['#2F3E46', '#6B4F3A', '#3B4A3F', '#4A3B47', '#2F4858', '#5C4B32'];

const shortName = (title: string) => title.split(' — ')[0];

// Where a card click goes: explicit `link`, else live demo, else GitHub.
const getLink = (p: Project) => {
  const x = p as { link?: string; live?: string; github?: string };
  return x.link || x.live || x.github || undefined;
};

function Cover({ project, index }: { project: Project; index: number }) {
  const img = PROJECT_IMAGES[project.id];
  if (img) {
    return <img src={img} alt={project.title} className="w-full h-full object-cover object-top" loading="lazy" />;
  }
  const tone = COVER_TONES[index % COVER_TONES.length];
  return (
    <div
      className="relative w-full h-full flex flex-col justify-between p-5 overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${tone} 0%, ${tone}D9 55%, #121212 140%)` }}
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />
      <span className="relative font-mono text-[9px] tracking-widest uppercase text-[#CEC0A8]">{project.category}</span>
      <h3 className="relative font-serif italic font-bold text-[#FAF8F2] leading-tight text-2xl md:text-[26px] line-clamp-2">
        {shortName(project.title)}
      </h3>
      <div className="relative flex flex-wrap gap-1">
        {project.tags.slice(0, 3).map((t) => (
          <span key={t} className="font-mono text-[8.5px] px-1.5 py-0.5 rounded-sm bg-white/10 text-[#FAF8F2]/80">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

// Renders a real link when the project has one, a plain box otherwise
const Card: any = (props: any) => (props.href ? <motion.a {...props} /> : <motion.div {...props} />);

export default function Projects() {
  const projects = useMemo(() => PROJECTS_DATA.projects.filter((p) => p.show !== false), []);
  const categories = useMemo(() => {
    const present = new Set(projects.map((p) => p.category));
    const ordered = CATEGORY_ORDER.filter((c) => present.has(c));
    const extra = Array.from(present).filter((c) => !CATEGORY_ORDER.includes(c));
    return ['All', ...ordered, ...extra];
  }, [projects]);
  const [filter, setFilter] = useState('All');

  // Animate the gallery's height so content below glides instead of jumping when a filter changes.
  const innerRef = useRef<HTMLDivElement>(null);
  const [galleryH, setGalleryH] = useState<number | undefined>(undefined);
  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setGalleryH(el.offsetHeight));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Cursor-following label (title + category), like the reference site.
  const tipRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<Project | null>(null);

  const moveTip = (e: MouseEvent) => {
    const el = tipRef.current;
    if (!el) return;
    const w = el.offsetWidth;
    let x = e.clientX + 16;
    if (x + w > window.innerWidth - 8) x = e.clientX - w - 16; // flip to the left near the right edge
    el.style.transform = `translate(${x}px, ${e.clientY + 18}px)`;
  };

  useEffect(() => {
    const hide = () => setHovered(null);
    window.addEventListener('scroll', hide, { passive: true });
    return () => window.removeEventListener('scroll', hide);
  }, []);

  const visible = projects.filter((p) => filter === 'All' || p.category === filter);

  return (
    <section id="projects" className="relative w-full py-16 md:py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <Deco src={splash} className="left-[-3%] top-[3%] w-[150px]" />

      <SectionHeading
        label={toTitle(PROJECTS_DATA.section_title)}
        title={PROJECTS_DATA.title}
        subtitle={PROJECTS_DATA.subtitle}
        className="mb-10 md:mb-12"
      />

      {/* Filter tabs */}
      <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`font-jost text-lg md:text-xl transition-colors cursor-pointer ${
              filter === cat ? 'text-brand' : 'text-black hover:text-brand'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Thumbnail gallery — image-only cards; click opens the project link */}
      <motion.div animate={{ height: galleryH ?? 'auto' }} transition={{ duration: 0.4, ease: 'easeOut' }}>
      <div ref={innerRef} className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => {
            const idx = projects.findIndex((p) => p.id === project.id);
            const link = getLink(project);
            return (
              <Card
                layout
                key={project.id}
                {...(link ? { href: link, target: '_blank', rel: 'noreferrer' } : {})}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                onMouseEnter={(e: MouseEvent) => {
                  if (!window.matchMedia('(pointer: fine)').matches) return;
                  setHovered(project);
                  moveTip(e);
                }}
                onMouseMove={moveTip}
                onMouseLeave={() => setHovered(null)}
                aria-label={project.title}
                className={`group relative block w-full aspect-video overflow-hidden rounded-lg border border-accent-mute/60 bg-[#F6F5FB] shadow-[0_10px_30px_rgba(110,100,170,0.10)] ${
                  link ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                <Cover project={project} index={idx} />

                {/* Touch devices have no hover, so show the title bar permanently there */}
                <div className="pointer-fine:hidden absolute left-0 right-0 bottom-0 bg-white px-3 py-2">
                  <div className="font-jost text-base font-medium text-ink-dark leading-tight line-clamp-1">
                    {shortName(project.title)}
                  </div>
                  <div className="font-jost text-sm text-ink-light">{project.category}</div>
                </div>
              </Card>
            );
          })}
        </AnimatePresence>
      </div>
      </motion.div>

      {/* Bottom Profile GitHub Badge */}
      <div className="mt-14 text-center">
        <a
          href="https://github.com/shivansh07adi-cloud"
          target="_blank"
          rel="noreferrer"
          className="btn-wipe btn-wipe-outline btn-wipe-sm"
          style={{ padding: '0.7rem 1.6rem' }}
        >
          <Github size={15} />
          <span>All projects are available in my GitHub account</span>
          <ArrowUpRight size={14} />
        </a>
      </div>

      {/* Floating label that follows the cursor */}
      <div
        ref={tipRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[90] bg-white shadow-lg px-4 py-2.5 rounded-sm transition-opacity duration-150 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transform: 'translate(-9999px, -9999px)' }}
      >
        <div className="font-jost text-lg md:text-xl font-medium text-ink-dark whitespace-nowrap leading-tight">
          {hovered ? hovered.title : ''}
        </div>
        <div className="font-jost text-base text-ink-light mt-1">
          {hovered ? hovered.category : ''}
        </div>
      </div>
    </section>
  );
}
