import { useEffect, useState } from 'react';
import { event } from '@/data/event';

function getRemaining(target: number) {
  const diff = target - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1_000);
  return { days, hours, minutes, seconds, done: false };
}

const labels = ['Days', 'Hours', 'Minutes', 'Seconds'] as const;

export default function Countdown() {
  const target = new Date(event.isoStart).getTime();
  const [t, setT] = useState(() => getRemaining(target));

  useEffect(() => {
    const id = setInterval(() => setT(getRemaining(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const values = [t.days, t.hours, t.minutes, t.seconds];

  return (
    <section className="relative overflow-hidden bg-espresso-950 py-16 sm:py-20">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/30989203/pexels-photo-30989203.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso-950/90 to-espresso-950/70" />
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow !text-brass-300">Countdown to the show</span>
          <h2 className="mt-4 font-display text-3xl font-semibold text-cream-50 sm:text-4xl">
            {t.done ? 'The trade show is here' : `${event.edition} begins soon`}
          </h2>
          <p className="mt-3 text-cream-100/70">
            {event.dates} · {event.venue.name}, {event.venue.city}
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-4 gap-3 sm:gap-5">
          {values.map((val, i) => (
            <div
              key={labels[i]}
              className="flex flex-col items-center rounded-2xl border border-cream-100/10 bg-espresso-900/60 px-2 py-6 backdrop-blur-sm sm:py-8"
            >
              <div
                className="font-display text-3xl font-semibold tabular-nums text-cream-50 sm:text-5xl"
                aria-live="polite"
              >
                {String(val).padStart(2, '0')}
              </div>
              <div className="mt-2 text-[0.6rem] font-semibold uppercase tracking-widest2 text-brass-300 sm:text-xs">
                {labels[i]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
