import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import { BRAND, CONTACT } from '../data/ctopData';
import SectionLabel from '../components/SectionLabel';

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="pt-28 pb-20">
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <SectionLabel>Contact</SectionLabel>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-4xl sm:text-6xl font-display font-extrabold text-fg leading-tight max-w-4xl"
        >
          {CONTACT.headline}
        </motion.h1>
        <p className="mt-6 text-muted font-sans text-lg max-w-2xl leading-relaxed">
          {CONTACT.body}
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16">
        <div className="lg:col-span-4 space-y-6">
          {[
            { icon: Mail, label: 'Email', value: BRAND.email },
            { icon: Phone, label: 'Phone', value: BRAND.phone },
            { icon: MapPin, label: 'Location', value: BRAND.location },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-surface border border-line text-brand-yellow">
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

        <div className="lg:col-span-8 bg-surface border border-line rounded-3xl p-8 sm:p-10">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center text-center space-y-4 py-16">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-green/10 text-brand-green">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-display font-bold text-fg">Message Sent!</h3>
              <p className="text-muted text-sm max-w-sm">
                Thank you for reaching out. The Ctop team will get back to you soon.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="px-6 py-3 bg-surface-muted hover:bg-surface-muted text-fg font-sans font-medium rounded-xl cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-xs font-medium text-muted">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-bg border border-line rounded-xl text-fg placeholder-subtle focus:outline-none focus:border-brand-green text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-xs font-medium text-muted">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 bg-bg border border-line rounded-xl text-fg placeholder-subtle focus:outline-none focus:border-brand-green text-sm"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-subject" className="text-xs font-medium text-muted">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-bg border border-line rounded-xl text-fg placeholder-subtle focus:outline-none focus:border-brand-green text-sm"
                  placeholder="Growth system inquiry"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-xs font-medium text-muted">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 bg-bg border border-line rounded-xl text-fg placeholder-subtle focus:outline-none focus:border-brand-green text-sm resize-none"
                  placeholder="Tell us about your vision..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto flex items-center justify-center gap-2 py-4 px-8 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-sans font-bold rounded-xl disabled:opacity-50 cursor-pointer"
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
      </section>
    </div>
  );
}
