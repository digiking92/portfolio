import { useEffect, useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle, Mail, Phone, MapPin, CalendarDays, MessageSquare } from 'lucide-react';
import { BRAND, CONTACT } from '../data/ctopData';

export type ContactIntent = 'message' | 'book';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: ContactIntent;
}

export default function ContactModal({
  isOpen,
  onClose,
  initialTab = 'book',
}: ContactModalProps) {
  const [tab, setTab] = useState<ContactIntent>(initialTab);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTab(initialTab);
      setIsSuccess(false);
    }
  }, [isOpen, initialTab]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setIsSuccess(false), 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-surface border border-line shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
          >
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-fg/10 hover:bg-line text-muted hover:text-fg transition-colors duration-200 z-20 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-5 bg-gradient-to-br from-bg to-surface p-8 md:p-12 flex flex-col justify-between border-r border-line/50">
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="w-3 h-3 rounded-full bg-brand-green" />
                    <span className="brand-label text-brand-green">Let&apos;s Connect</span>
                  </div>
                  <h3 className="text-3xl font-display font-bold text-fg mb-4 leading-tight">
                    {CONTACT.headline}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-8">{CONTACT.body}</p>
                </div>

                <div className="space-y-6">
                  {[
                    { Icon: Mail, label: 'Email', value: BRAND.email },
                    { Icon: Phone, label: 'Phone', value: BRAND.phone },
                    { Icon: MapPin, label: 'Location', value: BRAND.location },
                  ].map(({ Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-surface-muted text-brand-yellow">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-sans font-medium text-xs text-muted uppercase tracking-wider">
                          {label}
                        </h4>
                        <p className="text-fg text-sm font-medium mt-1">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-7 p-6 sm:p-8 md:p-12">
                <div className="flex gap-2 p-1 rounded-xl bg-bg border border-line mb-6">
                  <button
                    type="button"
                    onClick={() => setTab('book')}
                    className={`flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-sans font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                      tab === 'book'
                        ? 'bg-brand-yellow text-brand-navy'
                        : 'text-fg/60 hover:text-fg'
                    }`}
                  >
                    <CalendarDays className="w-4 h-4" />
                    Book a call
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setTab('message');
                      setIsSuccess(false);
                    }}
                    className={`flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-sans font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                      tab === 'message'
                        ? 'bg-brand-yellow text-brand-navy'
                        : 'text-fg/60 hover:text-fg'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    Contact us
                  </button>
                </div>

                {tab === 'book' ? (
                  <div className="space-y-4">
                    <p className="text-fg/70 font-sans text-sm leading-relaxed">
                      Pick a time that works for you. We&apos;ll walk through your goals and the right
                      next step.
                    </p>
                    <div className="rounded-2xl border border-line overflow-hidden bg-bg min-h-[420px]">
                      <iframe
                        title="Book a strategy call with Ctop"
                        src={BRAND.calendlyUrl}
                        className="w-full h-[420px] sm:h-[480px] border-0"
                        loading="lazy"
                      />
                    </div>
                    <a
                      href={BRAND.calendlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex text-sm font-sans font-semibold text-brand-green hover:underline"
                    >
                      Open Calendly in a new tab
                    </a>
                  </div>
                ) : isSuccess ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-green/10 text-brand-green mb-2">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-fg">Message Sent!</h3>
                    <p className="text-muted text-sm max-w-sm">
                      Thank you for reaching out. The Ctop team will get back to you as soon as
                      possible.
                    </p>
                    <button
                      type="button"
                      onClick={handleClose}
                      className="px-6 py-3 bg-surface-muted text-fg font-sans font-medium rounded-xl cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-medium text-muted">
                          Your Name
                        </label>
                        <input
                          id="name"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="Your name"
                          className="w-full px-4 py-3 bg-bg border border-line rounded-xl text-fg placeholder-subtle focus:outline-none focus:border-brand-green text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-medium text-muted">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="you@company.com"
                          className="w-full px-4 py-3 bg-bg border border-line rounded-xl text-fg placeholder-subtle focus:outline-none focus:border-brand-green text-sm"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-xs font-medium text-muted">
                        Subject
                      </label>
                      <input
                        id="subject"
                        required
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        placeholder="Growth system inquiry"
                        className="w-full px-4 py-3 bg-bg border border-line rounded-xl text-fg placeholder-subtle focus:outline-none focus:border-brand-green text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-medium text-muted">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Tell us about your vision..."
                        className="w-full px-4 py-3 bg-bg border border-line rounded-xl text-fg placeholder-subtle focus:outline-none focus:border-brand-green text-sm resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-sans font-bold rounded-xl disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
