/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Mail, MessageSquare, Calendar } from 'lucide-react';
import { ContactMessage } from '../types';

interface MessageDrawerProps {
  isOpen: boolean;
  messages: ContactMessage[];
  onClose: () => void;
  onClear: () => void;
}

export default function MessageDrawer({ isOpen, messages, onClose, onClear }: MessageDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#121212]/50 backdrop-blur-xs cursor-pointer"
          />

          <div className="absolute inset-y-0 right-0 max-w-full pl-10 flex">
            {/* Sliding Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-screen max-w-md bg-canvas border-l border-accent-mute flex flex-col h-full shadow-2xl"
            >
              {/* Header */}
              <div className="px-6 py-5 border-b border-accent-mute/30 flex justify-between items-center bg-[#F6F5FB]">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-ink-dark text-canvas rounded">
                    <MessageSquare size={16} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold italic text-ink-dark">
                      Local Message Log
                    </h3>
                    <p className="font-mono text-[9px] text-ink-light tracking-wide uppercase">
                      Client-side Storage Engine
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 text-ink-gray hover:text-ink-dark transition-colors rounded-full hover:bg-black/5"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Message List */}
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                {messages.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-12 h-12 rounded-full border border-dashed border-accent-mute flex items-center justify-center mb-3">
                      <Mail size={20} className="text-ink-light" />
                    </div>
                    <p className="font-serif text-base font-medium italic text-ink-dark">No messages logged yet</p>
                    <p className="font-body text-xs text-ink-gray max-w-[240px] mt-1 leading-relaxed">
                      Use the contact form on this page to send a test message. It will appear here immediately!
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-[10px] text-ink-light uppercase tracking-widest">
                        Index ({messages.length})
                      </span>
                      <button
                        onClick={onClear}
                        className="flex items-center gap-1.5 font-mono text-[9px] text-red-600 hover:text-red-700 font-semibold tracking-wider uppercase transition-colors"
                      >
                        <Trash2 size={11} /> Clear All
                      </button>
                    </div>

                    {messages.map((msg, idx) => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="p-4 rounded border border-accent-mute/40 bg-canvas space-y-3 shadow-inner hover:border-accent-mute transition-all duration-200"
                      >
                        {/* Meta */}
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-serif text-sm font-bold text-ink-dark">
                              {msg.name}
                            </h4>
                            <a
                              href={`mailto:${msg.email}`}
                              className="font-mono text-[10px] text-ink-gray hover:text-ink-dark underline decoration-dotted decoration-accent-mute transition-colors"
                            >
                              {msg.email}
                            </a>
                          </div>
                          <span className="font-mono text-[8px] text-ink-light flex items-center gap-1 bg-[#F6F5FB] px-1.5 py-0.5 rounded border border-accent-mute/20">
                            <Calendar size={8} />
                            {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>

                        {/* Content */}
                        <p className="font-body text-xs text-ink-gray leading-relaxed bg-[#F6F5FB]/50 p-2.5 rounded border border-accent-mute/10 border-l-2 border-l-ink-dark max-h-36 overflow-y-auto whitespace-pre-line">
                          {msg.message}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer Panel */}
              <div className="px-6 py-4 border-t border-accent-mute/20 bg-[#F6F5FB] font-mono text-[9px] text-ink-light text-center leading-relaxed">
                Persistent offline database records.
                <br />
                Created with zero external dependencies to preserve telemetry limits.
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
