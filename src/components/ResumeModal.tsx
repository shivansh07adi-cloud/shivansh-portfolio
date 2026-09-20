/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import resumePdf from '../assets/resume/Shivansh_Kumar_Resume.pdf';
import page1 from '../assets/resume/page-1.webp';
import page2 from '../assets/resume/page-2.webp';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FILE_NAME = 'Shivansh_Kumar_Resume.pdf';

// data: URLs can't be opened in a new tab by most browsers, so turn them into a blob first.
function openPdfInNewTab(url: string) {
  if (url.startsWith('data:')) {
    const bin = atob(url.split(',')[1]);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    const blobUrl = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));
    window.open(blobUrl, '_blank', 'noopener');
    return;
  }
  window.open(url, '_blank', 'noopener');
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[70]" role="dialog" aria-modal="true" aria-label="Resume">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#14122B]/65"
          />

          <div className="relative z-10 h-full flex items-center justify-center p-3 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-3xl max-h-full flex flex-col bg-white rounded-lg shadow-[0_30px_90px_rgba(40,30,100,0.35)] overflow-hidden"
            >
              {/* Toolbar */}
              <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3.5 border-b border-[#E4E1EE] shrink-0">
                <div className="flex items-center gap-2 font-jost text-black text-lg font-medium">
                  <FileText size={18} className="text-brand" />
                  Resume
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <button
                    onClick={() => openPdfInNewTab(resumePdf)}
                    className="btn-wipe btn-wipe-outline btn-wipe-sm hidden sm:inline-flex"
                  >
                    <ExternalLink size={14} />
                    <span>Open</span>
                  </button>
                  <a href={resumePdf} download={FILE_NAME} className="btn-wipe btn-wipe-sm">
                    <Download size={14} />
                    <span>Download PDF</span>
                  </a>
                  <button
                    onClick={onClose}
                    aria-label="Close resume"
                    className="w-9 h-9 rounded-full border border-[#E4E1EE] flex items-center justify-center text-black hover:border-brand hover:text-brand transition-colors cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Pages */}
              <div className="overflow-y-auto bg-[#F0F3FA] p-3 sm:p-6 space-y-4">
                {[page1, page2].map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`Shivansh Kumar resume, page ${i + 1} of 2`}
                    className="w-full h-auto bg-white shadow-[0_10px_30px_rgba(60,50,130,0.15)] select-none"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                ))}
                <p className="text-center font-body text-[13px] text-brand-gray pb-1">
                  Preview only — download the PDF for selectable text and working links.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
