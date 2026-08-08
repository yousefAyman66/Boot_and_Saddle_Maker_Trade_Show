import { Phone, MapPin, CalendarDays, Clock, ArrowUp } from 'lucide-react';
import { event, generalContact, privacyContact, nav, site } from '@/data/event';

const legalLinks = [
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'SMS Terms / Opt-In', href: '#sms-terms' },
  { label: 'Terms & Conditions', href: '#terms' },
];

export default function Footer() {
  return (
    <footer className="bg-espresso-950 text-cream-100/80">
      <div className="container-x py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-display text-xl font-semibold text-cream-50">{event.name}</div>
            <div className="mt-1 text-xs font-medium uppercase tracking-widest2 text-brass-300">
              {event.edition} · {event.year}
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-100/60">
              A gathering of boot makers, saddle makers, leatherworkers, and western craftsmen.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest2 text-brass-300">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="link-underline text-cream-100/75 hover:text-cream-50">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Event details */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest2 text-brass-300">Event</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-brass-300" />
                <span>{event.dates}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brass-300" />
                <span>{event.hours}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brass-300" />
                <span>
                  {event.venue.name}
                  <br />
                  {event.venue.street}
                  <br />
                  {event.venue.city}, {event.venue.state}
                </span>
              </li>
            </ul>
          </div>

          {/* Contact + legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest2 text-brass-300">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <div className="text-cream-100/60">General Event Contact</div>
                <div className="text-cream-50">{generalContact.person}</div>
                <a href={generalContact.phoneHref} className="link-underline mt-0.5 inline-flex items-center gap-1.5 text-cream-100/85 hover:text-cream-50">
                  <Phone className="h-3.5 w-3.5" /> {generalContact.phone}
                </a>
              </li>
            </ul>

            <h3 className="mt-6 text-xs font-semibold uppercase tracking-widest2 text-brass-300">Legal</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-underline text-cream-100/75 hover:text-cream-50">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-cream-100/10 pt-6 text-xs text-cream-100/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {event.name}. {site.url}
          </p>
          <p>
            Privacy / SMS inquiries: {privacyContact.name} · {privacyContact.phone}
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-cream-100/60 transition-colors hover:text-cream-50"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
