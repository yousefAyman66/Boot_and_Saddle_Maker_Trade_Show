import { useState } from 'react';
import { MessageSquare, CheckCircle2, Loader2, ShieldCheck } from 'lucide-react';
import Reveal from './Reveal';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function SMSOptIn() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!consent) {
      setError('Please check the consent box to opt in to SMS messages.');
      setStatus('error');
      return;
    }
    if (!phone.trim()) {
      setError('A mobile phone number is required.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    try {
      const { error: dbError } = await supabase
        .from('sms_subscribers')
        .insert({ name: name.trim() || null, phone: phone.trim(), consent: true });
      if (dbError) throw dbError;
      setStatus('success');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setError(msg);
      setStatus('error');
    }
  };

  return (
    <section id="sms" className="section-pad bg-espresso-900 text-cream-50">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow !text-brass-300">Stay informed</span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Get event updates by text
          </h2>
          <span className="mt-4 block h-px w-16 bg-gradient-to-r from-brass-400 to-transparent" />
          <p className="mt-5 max-w-lg text-cream-100/80">
            Sign up to receive event-related text messages — including reminders, schedule
            updates, vendor and exhibitor announcements, parking and check-in information, and
            any emergency or safety notifications.
          </p>

          <ul className="mt-6 space-y-2 text-sm text-cream-100/75">
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brass-300" /> We don’t sell or share your info for marketing.
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brass-300" /> Opt out anytime by replying STOP.
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-3xl border border-cream-100/10 bg-espresso-950/50 p-7 backdrop-blur-md sm:p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center py-8 text-center">
                <CheckCircle2 className="h-12 w-12 text-brass-300" />
                <h3 className="mt-4 font-display text-2xl font-semibold">You’re subscribed</h3>
                <p className="mt-3 max-w-xs text-cream-100/75">
                  We’ll send event updates to your phone. Save our number so you don’t miss them.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center gap-2 text-brass-300">
                  <MessageSquare className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-widest2">SMS Opt-In</span>
                </div>

                <div>
                  <label htmlFor="sms-name" className="label !text-cream-100">Name <span className="text-cream-100/40">(optional)</span></label>
                  <input
                    id="sms-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    className="input !bg-espresso-950/60 !border-cream-100/15 !text-cream-50 placeholder:!text-cream-100/30"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="sms-phone" className="label !text-cream-100">Mobile phone number</label>
                  <input
                    id="sms-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoComplete="tel"
                    className="input !bg-espresso-950/60 !border-cream-100/15 !text-cream-50 placeholder:!text-cream-100/30"
                    placeholder="(000) 000-0000"
                  />
                </div>

                <label className="flex cursor-pointer items-start gap-3 text-sm text-cream-100/80">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 h-5 w-5 shrink-0 rounded border-cream-100/30 bg-espresso-950/60 text-brass-500 focus:ring-brass-400"
                  />
                  <span>
                    I agree to receive SMS messages from the Boot and Saddle Maker Trade Show.
                    Message frequency varies based on event activity. Message and data rates may
                    apply. Reply <strong className="font-semibold text-cream-50">STOP</strong> to opt out
                    or <strong className="font-semibold text-cream-50">HELP</strong> for help. Consent is
                    not required to attend the trade show.
                  </span>
                </label>

                <p className="text-xs text-cream-100/55">
                  By opting in you agree to our{' '}
                  <a href="#privacy" className="underline underline-offset-2 hover:text-cream-50">Privacy Policy</a>{' '}
                  and{' '}
                  <a href="#sms-terms" className="underline underline-offset-2 hover:text-cream-50">SMS Terms</a>.
                </p>

                {status === 'error' && error ? (
                  <p className="rounded-xl bg-red-500/15 px-4 py-3 text-sm text-red-200" role="alert">
                    {error}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-brass w-full disabled:opacity-60"
                >
                  {status === 'loading' ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : null}
                  {status === 'loading' ? 'Subscribing…' : 'Subscribe to SMS Updates'}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
