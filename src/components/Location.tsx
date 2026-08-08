import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import CTAButton from './CTAButton';
import { MapPin, Navigation } from 'lucide-react';
import { event } from '@/data/event';

export default function Location() {
  return (
    <section id="location" className="section-pad bg-cream-50">
      <div className="container-x">
        <SectionHeading
          eyebrow="Where to find us"
          title="The MPEC — Wichita Falls, Texas"
          intro="The show takes place at the Multi-Purpose Events Center in downtown Wichita Falls, with easy access off Fifth Street."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-3xl border border-espresso-100 bg-white/70 p-7 sm:p-9">
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-espresso-900/5 text-espresso-800">
                  <MapPin className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-espresso-900">
                  {event.venue.name}
                </h3>
                <address className="mt-2 not-italic text-espresso-700">
                  {event.venue.street}
                  <br />
                  {event.venue.city}, {event.venue.state}
                </address>

                <div className="mt-6 space-y-3 border-t border-espresso-100 pt-6 text-sm text-espresso-600">
                  <p>
                    <span className="font-medium text-espresso-800">Hours:</span> {event.hours}
                  </p>
                  <p>
                    <span className="font-medium text-espresso-800">Dates:</span> {event.dates}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <CTAButton href={event.venue.mapsUrl} external variant="primary" icon={Navigation}>
                  Get Directions
                </CTAButton>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            <div className="h-full min-h-[300px] overflow-hidden rounded-3xl border border-espresso-100 shadow-sm">
              <iframe
                title="Map of The MPEC, 1000 Fifth Street, Wichita Falls, TX"
                src={event.venue.embedUrl}
                className="h-full min-h-[300px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
