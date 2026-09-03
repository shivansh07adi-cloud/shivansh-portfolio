/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { X, Award, FileText, ExternalLink, ShieldCheck, MailOpen } from 'lucide-react';
import { MediaItem } from '../types';

interface MediaModalProps {
  media: MediaItem | null;
  companyName: string;
  roleName: string;
  onClose: () => void;
}

export default function MediaModal({ media, companyName, roleName, onClose }: MediaModalProps) {
  if (!media) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#121212]/80 backdrop-blur-sm"
        />

        {/* Content Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative w-full max-w-2xl overflow-hidden rounded-lg border border-accent-mute bg-canvas p-6 md:p-8 shadow-2xl z-10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-ink-gray hover:text-ink-dark transition-colors rounded-full hover:bg-black/5"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Tag & Meta */}
          <div className="flex items-center gap-2 mb-4 font-mono text-[10px] tracking-widest text-ink-light uppercase">
            <span>Attachment Verification</span>
            <span>•</span>
            <span className="text-ink-gray">{media.fileType || 'Document'}</span>
          </div>

          {/* Heading */}
          <h3 className="font-serif text-2xl md:text-3xl font-bold italic text-ink-dark mb-1">
            {media.name}
          </h3>
          <p className="font-body text-xs text-ink-gray mb-6">
            Associated with your role as <span className="font-medium text-ink-dark">{roleName}</span> at <span className="font-medium text-ink-dark">{companyName}</span>
          </p>

          {/* Certificate / Document Simulation Canvas */}
          <div className="relative w-full aspect-[4/3] rounded-md border border-dashed border-accent-mute bg-[#FAF5E6] flex flex-col justify-between p-6 md:p-8 overflow-hidden shadow-inner">
            {/* Elegant Background Accents */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#121212_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-mute/10 rounded-full blur-3xl pointer-events-none" />

            {/* Simulated Frame */}
            <div className="absolute inset-3 border border-double border-accent-mute/40 pointer-events-none" />

            {/* Document Header */}
            <div className="flex justify-between items-start z-10">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded bg-ink-dark text-canvas">
                  {media.fileType === 'badge' ? <ShieldCheck size={18} /> : <Award size={18} />}
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-ink-dark font-semibold">
                  Secure Node Verified
                </span>
              </div>
              <div className="font-mono text-[9px] text-ink-light text-right">
                ID: REF_SHA256_7951
              </div>
            </div>

            {/* Document Body - Graphic Design */}
            <div className="my-auto text-center z-10 py-4">
              {media.fileType === 'badge' ? (
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-ink-dark text-canvas flex items-center justify-center shadow-lg border-2 border-accent-mute mb-3">
                    <ShieldCheck size={36} className="text-canvas animate-pulse" />
                  </div>
                  <h4 className="font-serif text-lg md:text-xl font-bold tracking-tight text-ink-dark">
                    {media.name}
                  </h4>
                  <p className="font-mono text-[10px] text-ink-gray tracking-wider uppercase mt-1">
                    COMMUNITY CONTRIBUTOR HONOR
                  </p>
                </div>
              ) : media.fileType === 'pdf' || media.name.toLowerCase().includes('certificate') ? (
                <div className="flex flex-col items-center">
                  <Award size={48} className="text-ink-dark mb-2 opacity-90" />
                  <span className="font-mono text-[9px] tracking-widest text-ink-light uppercase mb-1">
                    CERTIFICATE OF MERIT
                  </span>
                  <div className="h-[1px] w-24 bg-accent-mute mb-2" />
                  <h4 className="font-serif text-base md:text-lg font-bold text-ink-dark leading-snug">
                    Shivansh Kumar
                  </h4>
                  <p className="font-body text-[11px] text-ink-gray max-w-sm mt-1">
                    Successfully completed active research parameters while resolving core framework dependencies.
                  </p>
                </div>
              ) : media.name.toLowerCase().includes('email') || media.name.toLowerCase().includes('letter') ? (
                <div className="flex flex-col items-center">
                  <MailOpen size={40} className="text-ink-dark mb-2 opacity-90" />
                  <span className="font-mono text-[9px] tracking-widest text-ink-light uppercase mb-1">
                    OFFICIAL CORRESPONDENCE
                  </span>
                  <div className="h-[1px] w-24 bg-accent-mute mb-2" />
                  <h4 className="font-serif text-sm font-bold text-ink-dark">
                    Letter of Selection & Intake
                  </h4>
                  <p className="font-body text-[10px] text-ink-gray max-w-md mt-1 leading-relaxed text-justify px-4">
                    Dear Shivansh Kumar, We are pleased to confirm your appointment and recognize your engineering capacity to address technical deliverables.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <FileText size={44} className="text-ink-dark mb-3 opacity-90" />
                  <h4 className="font-serif text-base font-bold text-ink-dark leading-snug">
                    {media.name}
                  </h4>
                  <p className="font-mono text-[9px] text-ink-gray tracking-wider mt-1">
                    OFFICIAL PROJECT DELIVERABLE
                  </p>
                </div>
              )}
            </div>

            {/* Document Footer */}
            <div className="flex justify-between items-end z-10 pt-2 border-t border-accent-mute/30 font-mono text-[9px] text-ink-light">
              <div>
                <span>Issuer:</span> <span className="text-ink-dark font-medium">{companyName}</span>
              </div>
              <div>
                <span>Verified:</span> <span className="text-ink-dark font-medium">May 2026</span>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="font-mono text-[10px] text-ink-light flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-ping" />
              Authenticated by SRM AP Student Node
            </span>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 bg-ink-dark text-canvas text-xs font-mono tracking-wider font-semibold hover:bg-accent-mute hover:text-ink-dark transition-all duration-300 uppercase rounded"
            >
              Acknowledge Verification
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
