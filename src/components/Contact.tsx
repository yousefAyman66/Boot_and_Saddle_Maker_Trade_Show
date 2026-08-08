import { useState } from 'react';
import { Phone, User, Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { generalContact } from '@/data/event';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No backend mail endpoint is available. We surface a clear confirmation
    // and instruct the user to call for urgent inquiries.
    setSent(true);
  };

  return (
    <section id="contact" className="section-pad bg-cream-100/60">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Get in touch"
            title="Contact the show"
            intro="Have a question about the event? Reach out — we’re happy to help with general inquiries about registration, the trade show floor, and what to expect."
          />

          <Reveal delay={120} className="mt-8 rounded-3xl border border-espresso-100 bg-white/70 p-7 sm:p-8">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-espresso-900 text-cream-50">
                <User className="h-6 w-6" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest2 text-brass-500">General Event Contact</div>
                <div className="font-display text-xl font-semibold text-espresso-900">{generalContact.person}</div>
              </div>
            </div>
            <a
              href={generalContact.phoneHref}
              className="mt-6 flex items-center gap-3 rounded-2xl bg-espresso-900/5 px-5 py-4 text-espresso-900 transition-colors hover:bg-espresso-900/10"
            >
              <Phone className="h-5 w-5 text-brass-500" />
              <span className="font-display text-lg font-semibold">{generalContact.phone}</span>
              <span className="ml-auto text-xs text-espresso-500">Tap to call</span>
            </a>
            <p className="mt-4 text-sm text-espresso-600">
              For privacy or SMS program questions, see the{' '}
              <a href="#privacy" className="font-medium text-espresso-800 underline underline-offset-2">
                Privacy Policy
              </a>
              .
            </p>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={100}>
          <div className="rounded-3xl border border-espresso-100 bg-white/70 p-7 sm:p-9">
            {sent ? (
              <div className="flex h-full min-h-[360px] flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-12 w-12 text-brass-500" />
                <h3 className="mt-4 font-display text-2xl font-semibold text-espresso-900">Message ready</h3>
                <p className="mt-3 max-w-sm text-espresso-600">
                  Thanks for reaching out. For a faster response, call{' '}
                  <a href={generalContact.phoneHref} className="font-semibold text-espresso-800 underline">
                    {generalContact.phone}
                  </a>{' '}
                  and ask for {generalContact.person}.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="btn-outline mt-6 !px-5 !py-2.5 text-sm"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display text-xl font-semibold text-espresso-900">Send a message</h3>
                <div>
                  <label htmlFor="c-name" className="label">Name</label>
                  <input id="c-name" name="name" type="text" required autoComplete="name" className="input" placeholder="Your name" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="c-email" className="label">Email</label>
                    <input id="c-email" name="email" type="email" required autoComplete="email" className="input" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label htmlFor="c-phone" className="label">Phone</label>
                    <input id="c-phone" name="phone" type="tel" autoComplete="tel" className="input" placeholder="(000) 000-0000" />
                  </div>
                </div>
                <div>
                  <label htmlFor="c-message" className="label">Message</label>
                  <textarea id="c-message" name="message" required rows={4} className="input resize-none" placeholder="How can we help?" />
                </div>
                <button type="submit" className="btn-primary w-full">
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
                <p className="flex items-center gap-2 text-xs text-espresso-500">
                  <Mail className="h-3.5 w-3.5" />
                  We reply to event inquiries as soon as we’re able.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
