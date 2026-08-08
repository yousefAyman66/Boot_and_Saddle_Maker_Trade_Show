import { GraduationCap, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import CTAButton from './CTAButton';

// lucide-react does not export Boot or Saddle; we create simple inline SVG icons.
import type { ComponentType } from 'react';

const BootIcon: ComponentType<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M8 3v8l-2 2v7h12v-5c0-2-1.5-3-3.5-3H12V3H8z" />
    <path d="M12 10v2" />
  </svg>
);

const SaddleIcon: ComponentType<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M4 8c3 0 4 2 8 2s5-2 8-2c0 4-3 5-3 7 0 2 2 3 2 5-4 0-5-2-7-2s-3 2-7 2c0-2 2-3 2-5 0-2-3-3-3-7z" />
  </svg>
);

type Feature = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  cta: string;
  href: string;
  image: string;
  alt: string;
};

const features: Feature[] = [
  {
    id: 'seminars',
    icon: GraduationCap,
    eyebrow: 'Learn',
    title: 'Seminars',
    body: 'Attendees can take part in educational seminars related to the boot and saddle-making community — a chance to hear from makers, ask questions, and pick up techniques to bring back to the bench.',
    points: ['Educational sessions', 'Community knowledge', 'Open to attendees'],
    cta: 'View Seminars',
    href: '#seminars',
    image:
      'https://images.pexels.com/photos/5963131/pexels-photo-5963131.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'A leather artisan using metal tools to craft leather goods in a creative workspace.',
  },
  {
    id: 'boot-contest',
    icon: BootIcon,
    eyebrow: 'Compete',
    title: 'Boot Contest',
    body: 'A showcase of boot-making craftsmanship, skill, creativity, and attention to detail. Makers bring their finest work to be seen on the floor — a celebration of the western tradition of handmade boots.',
    points: ['Craftsmanship on display', 'Skill & creativity', 'Western tradition'],
    cta: 'Boot Contest Details',
    href: '#boot-contest',
    image:
      'https://images.pexels.com/photos/28833319/pexels-photo-28833319.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'A close-up of a pair of intricately designed leather cowboy boots.',
  },
  {
    id: 'saddle-contest',
    icon: SaddleIcon,
    eyebrow: 'Compete',
    title: 'Saddle Contest',
    body: 'A showcase of saddle-making craftsmanship, skill, and detail. The contest puts finished saddles and the work behind them in front of peers — a study in structure, leather, and the maker’s hand.',
    points: ['Structure & detail', 'Artisan work', 'Western tradition'],
    cta: 'Saddle Contest Details',
    href: '#saddle-contest',
    image:
      'https://images.pexels.com/photos/7883171/pexels-photo-7883171.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'A detailed close-up of a leather horse saddle with intricate designs and textures.',
  },
];

export default function EventFeatures() {
  return (
    <section className="section-pad bg-cream-100/60">
      <div className="container-x">
        <Reveal className="mb-12 max-w-2xl">
          <span className="eyebrow">What you’ll find at the show</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-espresso-900 sm:text-4xl">
            Three ways to take part
          </h2>
          <span className="mt-4 block hairline" />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <Reveal
              key={f.id}
              id={f.id}
              delay={i * 110}
              className="group card overflow-hidden hover:-translate-y-1.5 hover:shadow-xl hover:shadow-espresso-900/10"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <img
                  src={f.image}
                  alt={f.alt}
                  className="h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/70 via-espresso-950/10 to-transparent" />
                <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-cream-50/95 text-espresso-900 shadow-md">
                  <f.icon className="h-5 w-5" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-widest2 text-brass-300">
                    {f.eyebrow}
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-cream-50">{f.title}</h3>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm leading-relaxed text-espresso-700">{f.body}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {f.points.map((p) => (
                    <li
                      key={p}
                      className="rounded-full bg-espresso-900/5 px-3 py-1 text-xs font-medium text-espresso-700"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-2">
                  <CTAButton
                    href={f.href}
                    variant="outline"
                    icon={ArrowRight}
                    className="!px-5 !py-2.5 text-[0.8rem]"
                  >
                    {f.cta}
                  </CTAButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
