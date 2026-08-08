import { CalendarDays, Clock, MapPin, ArrowRight } from 'lucide-react';
import { event } from '@/data/event';
import CTAButton from './CTAButton';

const items = [
  { icon: CalendarDays, label: 'Date', value: event.dates },
  { icon: Clock, label: 'Time', value: event.hours },
  { icon: MapPin, label: 'Location', value: `${event.venue.name} · ${event.venue.city}, ${event.venue.state}` },
];

export default function EventInfo() {
  return (
    <section className="relative z-20 -mt-px bg-espresso-900">
      <div className="container-x">
        <div className="grid grid-cols-1 divide-y divide-espresso-700/60 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {items.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-4 px-2 py-6 sm:px-8 sm:py-7">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brass-500/15 text-brass-300 ring-1 ring-brass-500/25">
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <div className="text-[0.65rem] font-semibold uppercase tracking-widest2 text-brass-300">
                  {label}
                </div>
                <div className="mt-0.5 truncate font-display text-lg text-cream-50 sm:text-xl">
                  {value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-espresso-950/40 py-4">
        <div className="container-x flex justify-center sm:justify-end">
          <CTAButton href="#registration" variant="brass" icon={ArrowRight} className="!py-2.5">
            Register Now
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
