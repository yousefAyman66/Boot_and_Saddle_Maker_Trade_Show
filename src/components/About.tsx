import { Hammer, Users, Award } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { event } from '@/data/event';

const aboutImg =
  'https://images.pexels.com/photos/4452605/pexels-photo-4452605.jpeg?auto=compress&cs=tinysrgb&w=1200';
const aboutImg2 =
  'https://images.pexels.com/photos/13106333/pexels-photo-13106333.jpeg?auto=compress&cs=tinysrgb&w=1000';

const pillars = [
  { icon: Hammer, label: 'Handmade Skill', text: 'Boot and saddle makers practicing a trade measured in years, not hours.' },
  { icon: Users, label: 'Community', text: 'A gathering of craftsmen, vendors, and learners who share the workshop.' },
  { icon: Award, label: 'Competition', text: 'Contests that put craftsmanship, detail, and creativity on display.' },
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-cream-50">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Images */}
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl shadow-espresso-900/10">
            <img
              src={aboutImg}
              alt="A craftsman designing and cutting leather in a sunlit workshop, showcasing handmade artistry."
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden w-48 overflow-hidden rounded-2xl border-4 border-cream-50 shadow-lg sm:block lg:w-56">
            <img
              src={aboutImg2}
              alt="A display of colorful handcrafted leather cowboy boots showcasing detailed craftsmanship."
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -left-3 top-6 hidden h-24 w-24 rounded-full border border-brass-400/40 lg:block" />
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow={`About the ${event.edition}`}
            title="A gathering built for makers, by makers"
            intro="The Boot & Saddle Maker Trade Show brings together people passionate about boot making, saddle making, leathercraft, and western craftsmanship. Over two days, the floor fills with artisans, educators, and industry professionals who share a respect for work made well and made by hand."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {pillars.map(({ icon: Icon, label, text }, i) => (
              <Reveal
                key={label}
                delay={i * 90}
                className="rounded-2xl border border-espresso-100 bg-white/60 p-5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-espresso-900/5 text-espresso-800">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-espresso-900">{label}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-espresso-700">{text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-8 max-w-xl text-sm leading-relaxed text-espresso-600">
            Now in its {event.edition.toLowerCase()} year, the show remains a place to learn from
            one another, see fine work up close, and take part in the contests and seminars that
            keep the craft moving forward.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
