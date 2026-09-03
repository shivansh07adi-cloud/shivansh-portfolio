/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Download, Mail, Phone, Linkedin, Github, Award, BookOpen } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1A1A18]/60 backdrop-blur-xs transition-opacity"
          />

          {/* Wrapper */}
          <div className="flex min-h-screen items-center justify-center p-4 sm:p-6 md:p-10 relative z-10 print:p-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl bg-[#FAF6EE] text-ink-dark rounded-xl shadow-2xl border border-[#B19470]/20 flex flex-col max-h-[85vh] print:max-h-none print:shadow-none print:border-none print:bg-white print:text-black overflow-hidden"
            >
              {/* Toolbar (Hidden in print) */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-accent-mute/30 bg-[#FAF6EE] shrink-0 print:hidden select-none">
                <div className="flex items-center gap-2">
                  <BookOpen size={16} className="text-[#B19470]" />
                  <span className="font-mono text-xs uppercase tracking-wider font-bold text-[#8B7E66]">
                    Curriculum Vitae
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrint}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-ink-dark text-canvas hover:bg-[#8B7E66] rounded-md font-mono text-xs font-semibold cursor-pointer transition-all duration-200"
                    title="Print or Save as PDF"
                  >
                    <Printer size={12} />
                    <span>Print / Save PDF</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="p-1.5 rounded-full hover:bg-black/5 text-ink-gray hover:text-ink-dark transition-colors cursor-pointer"
                    title="Close"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Scrollable Document Container */}
              <div className="flex-1 overflow-y-auto px-6 py-8 md:px-12 md:py-12 bg-white print:overflow-visible print:px-0 print:py-0">
                {/* Print layout overrides applied when printing */}
                <style>{`
                  @media print {
                    body {
                      background: white !important;
                      color: black !important;
                    }
                    nav, header, footer, button, .print-hidden {
                      display: none !important;
                    }
                    .print-container {
                      width: 100% !important;
                      max-width: 100% !important;
                      box-shadow: none !important;
                      border: none !important;
                      padding: 0 !important;
                      margin: 0 !important;
                    }
                  }
                `}</style>

                {/* Resume Page Sheet */}
                <div className="print-container max-w-3xl mx-auto font-sans leading-relaxed text-[#1F1F1E] text-[13px] print:text-sm">
                  {/* Name Header */}
                  <div className="text-center md:text-left border-b-2 border-slate-800 pb-3 mb-6">
                    <h1 className="font-sans text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 uppercase">
                      Shivansh Kumar
                    </h1>
                    
                    {/* Contacts block */}
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1.5 mt-3 text-xs text-slate-600 font-medium">
                      <a href="mailto:shivansh07adi@gmail.com" className="hover:text-[#B19470] flex items-center gap-1">
                        <Mail size={12} />
                        <span>shivansh07adi@gmail.com</span>
                      </a>
                      <span className="hidden md:inline text-slate-300">•</span>
                      <a href="tel:+917087331803" className="hover:text-[#B19470] flex items-center gap-1">
                        <Phone size={11} />
                        <span>+91 7087331803</span>
                      </a>
                      <span className="hidden md:inline text-slate-300">•</span>
                      <a href="https://www.linkedin.com/in/shivansh-kumar-adi" target="_blank" rel="noreferrer" className="hover:text-[#B19470] flex items-center gap-1">
                        <Linkedin size={11} />
                        <span>linkedin.com/in/shivansh-kumar-adi</span>
                      </a>
                      <span className="hidden md:inline text-slate-300">•</span>
                      <a href="https://github.com/shivansh07adi-cloud" target="_blank" rel="noreferrer" className="hover:text-[#B19470] flex items-center gap-1">
                        <Github size={11} />
                        <span>github.com/shivansh07adi-cloud</span>
                      </a>
                    </div>
                  </div>

                  {/* Professional Summary */}
                  <div className="mb-6">
                    <h2 className="font-bold text-[11px] md:text-xs uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-1 mb-2.5">
                      Professional Summary
                    </h2>
                    <p className="text-slate-700 leading-relaxed text-justify">
                      First-year Computer Science student skilled in C, C++, Python, JavaScript, SQL, React.js, Vite, HTML, and CSS. Experienced in building AI-powered and web applications, including projects using Gemini API and Telegram bots. Passionate about problem-solving and developing impactful technology solutions.
                    </p>
                  </div>

                  {/* Technical Skills */}
                  <div className="mb-6">
                    <h2 className="font-bold text-[11px] md:text-xs uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-1 mb-2.5">
                      Technical Skills
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-slate-700">
                      <div>
                        <span className="font-bold">Languages:</span> C, C++, Python, JavaScript, TypeScript, SQL
                      </div>
                      <div>
                        <span className="font-bold">Frontend:</span> HTML5, CSS3, React.js
                      </div>
                      <div>
                        <span className="font-bold">Frameworks & Tools:</span> Vite, Git, GitHub, VS Code
                      </div>
                      <div>
                        <span className="font-bold">Cloud Platforms:</span> AWS, Microsoft Azure, IBM Cloud (Basic)
                      </div>
                      <div>
                        <span className="font-bold">Core CS:</span> Data Structures, Problem Solving, Linux
                      </div>
                      <div>
                        <span className="font-bold">Deployment:</span> Vercel, Cloud Hosting
                      </div>
                    </div>
                  </div>

                  {/* Professional Experience */}
                  <div className="mb-6">
                    <h2 className="font-bold text-[11px] md:text-xs uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-1 mb-3">
                      Professional Experience
                    </h2>
                    
                    {/* Role 1 */}
                    <div className="mb-4">
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-bold text-slate-900 text-sm">Campus Ambassador</span>
                        <span className="text-slate-500 font-mono text-[11px]">Sep 2025 - Present</span>
                      </div>
                      <div className="text-slate-600 font-medium italic text-[12px] mb-2">
                        MyGov – Ministry of Education, Government of India
                      </div>
                      <ul className="list-disc pl-4 space-y-1 text-slate-700 text-justify">
                        <li>Promote government initiatives and increase student participation in national programs and activities</li>
                        <li>Organize awareness campaigns and represent the platform to strengthen student engagement</li>
                      </ul>
                    </div>

                    {/* Role 2 */}
                    <div>
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-bold text-slate-900 text-sm">Frontend Developer & Content Writer Intern</span>
                        <span className="text-slate-500 font-mono text-[11px]">Jan 2026 - Feb 2026</span>
                      </div>
                      <div className="text-slate-600 font-medium italic text-[12px] mb-2">
                        InAmigos Foundation
                      </div>
                      <ul className="list-disc pl-4 space-y-1 text-slate-700 text-justify">
                        <li>Developed responsive web pages using HTML, CSS, JavaScript, and React.js with Vite</li>
                        <li>Created digital content and collaborated with the team to improve website UI and online engagement</li>
                      </ul>
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="mb-6">
                    <h2 className="font-bold text-[11px] md:text-xs uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-1 mb-3">
                      Projects
                    </h2>
                    
                    {/* Project 1 */}
                    <div className="mb-3">
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-bold text-slate-900">HackJudge AI</span>
                        <span className="text-slate-500 font-mono text-[11px]">2026</span>
                      </div>
                      <ul className="list-disc pl-4 text-slate-700 text-justify">
                        <li>Built an AI-powered platform to analyze and evaluate coding solutions, improving automated code assessment efficiency</li>
                      </ul>
                    </div>

                    {/* Project 2 */}
                    <div className="mb-3">
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-bold text-slate-900">SnapRecipe – AI Recipe Generator</span>
                        <span className="text-slate-500 font-mono text-[11px]">2026</span>
                      </div>
                      <ul className="list-disc pl-4 text-slate-700 text-justify">
                        <li>Developed an AI-powered web app that generates recipes from food images using Gemini API for advanced image recognition</li>
                      </ul>
                    </div>

                    {/* Project 3 */}
                    <div>
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-bold text-slate-900">Telegram Bots</span>
                        <span className="text-slate-500 font-mono text-[11px]">2025</span>
                      </div>
                      <ul className="list-disc pl-4 text-slate-700 text-justify">
                        <li>Built automation bots using Python to automate messaging and workflow tasks on Telegram</li>
                      </ul>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="mb-6">
                    <h2 className="font-bold text-[11px] md:text-xs uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-1 mb-3">
                      Education
                    </h2>
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-bold text-slate-900">Bachelor of Technology in Computer Science (CSE Core)</span>
                      <span className="text-slate-500 font-mono text-[11px]">2025 - 2029</span>
                    </div>
                    <div className="text-slate-600 font-medium italic text-[12px] mb-2">
                      SRM University AP
                    </div>
                    <ul className="list-disc pl-4 space-y-1 text-slate-700 text-justify">
                      <li>First Year Student | Relevant Coursework: Data Structures, Programming Fundamentals, Problem Solving</li>
                      <li>DPS BOKARO - 95% SSC | ST WILFRED MUMBAI - 89% INTERMEDIATE</li>
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h2 className="font-bold text-[11px] md:text-xs uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-1 mb-2.5">
                      Achievements
                    </h2>
                    <ul className="list-disc pl-4 space-y-1 text-slate-700 text-justify">
                      <li><span className="font-semibold">IOQM National Level Maths Olympiad Qualifier</span> – Mathematics Teachers' Association of India (2025)</li>
                      <li><span className="font-semibold">Analytics Hackathon Winner (1st Prize)</span> – India Conference at Harvard Policy Hackathon (2025)</li>
                      <li><span className="font-semibold">Certificate of Merit</span> – Indian National Astronomy Olympiad, Homi Bhabha Centre (Top 44 National Rank)</li>
                    </ul>
                  </div>

                  {/* Certifications */}
                  <div className="mb-1">
                    <h2 className="font-bold text-[11px] md:text-xs uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-1 mb-2.5">
                      Certifications
                    </h2>
                    <p className="text-slate-700 leading-relaxed text-justify text-[12px] md:text-[13px]">
                      Developing Sustainable Earth Science Applications – NASA, Full Front-End Development Certification – Infosys Springboard, Networking and Web Technology – Infosys, Develop an AI App with Microsoft Foundry SDK – Microsoft, AWS Technical Essentials – Amazon Web Services, Cloud Computing Fundamentals – IBM, SQL CRUD – HackerRank, CSS (Basic) – HackerRank
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
