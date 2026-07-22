import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-[#181B22] border border-gray-800 shadow-2xl z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-900/50 hover:bg-gray-800 text-gray-400 hover:text-white transition-colors duration-200 z-20"
              aria-label="Close modal"
              id="close-modal-btn"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Left Column - Contact Info */}
              <div className="md:col-span-5 bg-gradient-to-br from-[#121418] to-[#181B22] p-8 md:p-12 flex flex-col justify-between border-r border-gray-800/50">
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="w-3 h-3 rounded-full bg-brand-green"></span>
                    <span className="font-mono text-xs uppercase tracking-widest text-brand-green">Let's Connect</span>
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white mb-4 leading-tight">
                    Bring your ideas to life.
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    Let's collaborate on your next design or branding project. Drop a message and I'll get back to you within 24 hours.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#1D212A] text-brand-yellow">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-sans font-medium text-xs text-gray-400 uppercase tracking-wider">Email Me</h4>
                      <p className="text-white text-sm font-medium mt-1">jessy@walterdesign.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#1D212A] text-brand-green">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-sans font-medium text-xs text-gray-400 uppercase tracking-wider">Call Me</h4>
                      <p className="text-white text-sm font-medium mt-1">+1 (555) 234-5678</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#1D212A] text-brand-yellow">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-sans font-medium text-xs text-gray-400 uppercase tracking-wider">Location</h4>
                      <p className="text-white text-sm font-medium mt-1">San Francisco, California</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {!isSuccess ? (
                    <motion.form
                      key="contact-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-xs font-medium text-gray-400">Your Name</label>
                          <input
                            type="text"
                            id="name"
                            required
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            placeholder="Jessy Walter"
                            className="w-full px-4 py-3 bg-[#121418] border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-brand-green transition-colors duration-200 text-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-xs font-medium text-gray-400">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            required
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            placeholder="jessy@example.com"
                            className="w-full px-4 py-3 bg-[#121418] border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-brand-green transition-colors duration-200 text-sm"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-xs font-medium text-gray-400">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          required
                          value={formState.subject}
                          onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                          placeholder="Project Collaboration"
                          className="w-full px-4 py-3 bg-[#121418] border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-brand-green transition-colors duration-200 text-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-xs font-medium text-gray-400">Your Message</label>
                        <textarea
                          id="message"
                          required
                          rows={4}
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          placeholder="Tell me more about your project goals..."
                          className="w-full px-4 py-3 bg-[#121418] border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-brand-green transition-colors duration-200 text-sm resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        id="submit-contact-btn"
                        className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-brand-yellow hover:bg-brand-yellow-hover text-black font-sans font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success-screen"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12 space-y-6"
                    >
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-green/10 text-brand-green mb-2">
                        <CheckCircle className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-white">Message Sent!</h3>
                      <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out. Jessy will get back to you as soon as possible.
                      </p>
                      <button
                        onClick={() => {
                          setIsSuccess(false);
                          onClose();
                        }}
                        id="back-to-site-btn"
                        className="px-6 py-3 bg-[#1D212A] hover:bg-[#2A313E] text-white font-sans font-medium rounded-xl transition-colors duration-200 cursor-pointer"
                      >
                        Back to Portfolio
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
