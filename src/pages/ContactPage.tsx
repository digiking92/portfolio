import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, Mail, Phone, MapPin, CalendarDays, MessageSquare } from 'lucide-react';
import { BRAND, CONTACT } from '../data/ctopData';
import SectionLabel from '../components/SectionLabel';
import AmbientScene from '../components/AmbientScene';
import FadeUp from '../components/motion/FadeUp';
import IconWell from '../components/visual/IconWell';

const inputClass =
  'w-full px-4 py-3.5 bg-bg border border-line rounded-xl text-fg placeholder-subtle focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green/30 text-sm transition-colors';

type ContactTab = 'book' | 'message';

export default function ContactPage() {
  const [tab, setTab] = useState<ContactTab>('book');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
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
    <div className="pb-0">
      <section className="section-navy relative overflow-hidden pt-28 sm:pt-32 pb-20 sm:pb-28">
        <AmbientScene variant="aurora" intensity="medium" showGrain={false} />
        <div className="absolute inset-0 bg-mesh-navy pointer-events-none opacity-70" />
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.18) 1px, transparent 0)',
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 70%)',
          }}
          aria-hidden
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto text-center space-y-6"
          >
            <div className="flex justify-center">
              <SectionLabel>{CONTACT.eyebrow}</SectionLabel>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-fg leading-[1.12] tracking-tight">
              {CONTACT.headlineLines.map((line) => (
                <span key={line} className="block md:whitespace-nowrap">
                  {line}
                </span>
              ))}
            </h1>
            <p className="text-fg/70 font-sans text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              {CONTACT.lead}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-bg border-t border-line relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background:
              'radial-gradient(ellipse 45% 40% at 0% 100%, rgba(74,222,128,0.08), transparent 55%)',
          }}
          aria-hidden
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <FadeUp className="lg:col-span-4 space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-fg">
                Talk with Ctop
              </h2>
              <p className="text-fg/70 font-sans text-sm sm:text-base leading-relaxed">
                Book a strategy call on Calendly, or send a message and we&apos;ll get back to you.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: BRAND.email, href: `mailto:${BRAND.email}` },
                { icon: Phone, label: 'Phone', value: BRAND.phone, href: `tel:${BRAND.phone}` },
                { icon: MapPin, label: 'Location', value: BRAND.location },
              ].map(({ icon: Icon, label, value, href }) => (
                <li
                  key={label}
                  className="flex items-start gap-4 rounded-2xl border border-line bg-bg-elevated p-4 sm:p-5"
                >
                  <IconWell tone="yellow" size="md" className="border shrink-0">
                    <Icon className="w-4 h-4" strokeWidth={2.25} />
                  </IconWell>
                  <div className="min-w-0 pt-0.5">
                    <h4 className="brand-label !text-[10px] text-fg/45">{label}</h4>
                    {href ? (
                      <a
                        href={href}
                        className="mt-1 block text-fg text-sm font-medium hover:text-brand-green transition-colors break-words"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 text-fg text-sm font-medium">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </FadeUp>

          <FadeUp className="lg:col-span-8" delay={0.08}>
            <div className="rounded-2xl sm:rounded-3xl border border-line bg-bg-elevated p-6 sm:p-10 shadow-sm">
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
                  <div className="rounded-2xl border border-line overflow-hidden bg-bg min-h-[480px]">
                    <iframe
                      title="Book a strategy call with Ctop"
                      src={BRAND.calendlyUrl}
                      className="w-full h-[480px] sm:h-[560px] border-0"
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
                <div className="flex flex-col items-center justify-center text-center space-y-4 py-14 sm:py-16">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-green/10 text-brand-green border border-brand-green/25">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-fg">Message sent</h3>
                  <p className="text-fg/70 text-sm max-w-sm leading-relaxed">
                    Thank you for reaching out. The Ctop team will get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="mt-2 px-6 py-3 border border-line bg-bg hover:border-brand-green/40 text-fg font-sans font-medium text-sm rounded-xl cursor-pointer transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="contact-name" className="text-xs font-medium text-fg/55">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className={inputClass}
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="text-xs font-medium text-fg/55">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className={inputClass}
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-subject" className="text-xs font-medium text-fg/55">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className={inputClass}
                      placeholder="Growth system inquiry"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="text-xs font-medium text-fg/55">
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell us about your vision..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 py-4 px-8 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy font-sans font-bold text-sm uppercase tracking-wider rounded-md disabled:opacity-50 cursor-pointer transition-colors"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-brand-navy border-t-transparent rounded-full animate-spin" />
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
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
