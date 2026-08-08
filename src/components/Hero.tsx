import { ArrowRight, MapPin, CalendarDays, Clock } from 'lucide-react';
import CTAButton from './CTAButton';
import { event } from '@/data/event';
const heroImg =
  'https://images.pexels.com/photos/6768450/pexels-photo-6768450.jpeg?auto=compress&cs=tinysrgb&w=1600';
const heroImg2 =
  'https://images.pexels.com/photos/4452619/pexels-photo-4452619.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-espresso-950">
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="A woman crafting leather goods in a warm workshop."
          className="h-full w-full object-cover object-center opacity-70 animate-kenburns"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-950/70 via-espresso-950/55 to-espresso-950/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso-950/80 via-transparent to-transparent" />
        <div className="absolute inset-0 grain opacity-60" />
      </div>

      <div className="container-x relative flex min-h-[100svh] flex-col justify-end pb-16 pt-[calc(var(--header-h)+3rem)] sm:pb-20 lg:justify-center lg:pb-28">
        <div className="max-w-3xl">
          <div className="animate-fadeUp">
            <span className="eyebrow !text-brass-300">{event.edition} {event.name}</span>
          </div>

          <h1
            className="mt-5 font-display text-4xl font-semibold leading-[1.04] text-cream-50 animate-fadeUp sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '0.08s' }}
          >
            Where Craftsmanship,
            <span className="block text-brass-300">Tradition &amp; Heritage Meet</span>
          </h1>

          <p
            className="mt-6 max-w-xl text-base leading-relaxed text-cream-100/85 animate-fadeUp sm:text-lg"
            style={{ animationDelay: '0.16s' }}
          >
            Two days that bring together boot makers, saddle makers, leatherworkers, and
            western craftsmen for education, competition, and the shared pursuit of a
            well-made thing by hand.
          </p>

          {/* Event quick facts */}
          <div
            className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-cream-100/90 animate-fadeUp sm:text-base"
            style={{ animationDelay: '0.24s' }}
          >
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-brass-300" /> {event.dates}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-brass-300" /> {event.hours}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brass-300" /> {event.venue.name}, {event.venue.city}
            </span>
          </div>

          {/* CTAs */}
          <div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center animate-fadeUp"
            style={{ animationDelay: '0.32s' }}
          >
            <CTAButton href="#registration" variant="brass" icon={ArrowRight}>
              Register Now
            </CTAButton>
            <CTAButton href="#about" variant="ghost-light">
              Explore the Event
            </CTAButton>
          </div>
        </div>
      </div>

      {/* Secondary image accent (desktop) */}
      <div className="absolute bottom-0 right-0 hidden w-2/5 max-w-xl translate-y-0 lg:block">
        <div className="relative mr-8 mb-8 aspect-[4/5] overflow-hidden rounded-2xl border border-cream-100/15 shadow-2xl shadow-espresso-950/50">
          <img
            src={heroImg2}
            alt="A leather artisan's hands working leather with traditional tools in a sunlit workshop."
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/40 to-transparent" />
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream-100/60 lg:flex">
        <span className="text-[0.65rem] uppercase tracking-widest2">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-brass-300 to-transparent" />
      </div>
    </section>
  );
}
