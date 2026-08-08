import { ArrowRight, CalendarDays, Clock, MapPin } from 'lucide-react';
import Reveal from './Reveal';
import CTAButton from './CTAButton';
import { event } from '@/data/event';

const bgImg =
  'https://images.pexels.com/photos/5894145/pexels-photo-5894145.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function RegistrationCTA() {
  return (
    <section id="registration" className="relative overflow-hidden bg-espresso-900 py-24 sm:py-28">
      <div className="absolute inset-0">
        <img src={bgImg} alt="" className="h-full w-full object-cover opacity-25" loading="lazy" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso-950 via-espresso-950/85 to-espresso-900/70" />
      </div>

      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow !text-brass-300">Registration</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-cream-50 sm:text-5xl">
              Join us in Wichita Falls
            </h2>
            <span className="mt-4 block h-px w-16 bg-gradient-to-r from-brass-400 to-transparent" />
            <p className="mt-5 max-w-lg text-cream-100/80 sm:text-lg">
              Pre-registration links are sent via text message, and you can also register at
              the door. Sign up for event updates below to receive your pre-registration link.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="#sms" variant="brass" icon={ArrowRight}>
                Register Now
              </CTAButton>
              <CTAButton href="#contact" variant="ghost-light">
                Questions? Contact Us
              </CTAButton>
            </div>
          </Reveal>

          {/* Event details card */}
          <Reveal delay={120}>
            <div className="rounded-3xl border border-cream-100/10 bg-espresso-950/60 p-7 backdrop-blur-md sm:p-9">
              <h3 className="font-display text-xl font-semibold text-cream-50">Event details</h3>
              <dl className="mt-6 divide-y divide-cream-100/10">
                <div className="flex items-start gap-4 py-4">
                  <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-brass-300" />
                  <div>
                    <dt className="text-xs uppercase tracking-widest2 text-brass-300">Date</dt>
                    <dd className="mt-0.5 font-display text-lg text-cream-50">{event.dates}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-4 py-4">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brass-300" />
                  <div>
                    <dt className="text-xs uppercase tracking-widest2 text-brass-300">Hours</dt>
                    <dd className="mt-0.5 font-display text-lg text-cream-50">{event.hours}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-4 py-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brass-300" />
                  <div>
                    <dt className="text-xs uppercase tracking-widest2 text-brass-300">Venue</dt>
                    <dd className="mt-0.5 font-display text-lg text-cream-50">{event.venue.name}</dd>
                    <dd className="text-sm text-cream-100/70">{event.venue.fullAddress}</dd>
                  </div>
                </div>
              </dl>
              <div className="mt-6 rounded-2xl bg-brass-500/10 p-4 text-sm text-cream-100/80 ring-1 ring-brass-500/20">
                Prefer to register in person? You can register at the door during event hours.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
