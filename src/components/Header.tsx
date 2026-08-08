import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { event, generalContact, nav } from '@/data/event';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-espresso-950/95 shadow-lg shadow-espresso-950/20 backdrop-blur-md'
          : 'bg-gradient-to-b from-espresso-950/60 to-transparent'
      }`}
    >
      <div className="container-x flex h-[var(--header-h)] items-center justify-between gap-4">
        {/* Logo */}
        <a href="#home" onClick={close} className="group flex flex-col leading-none">
          <span className="font-display text-lg font-semibold tracking-tight text-cream-50 sm:text-xl">
            {event.name}
          </span>
          <span className="mt-0.5 text-[0.6rem] font-medium uppercase tracking-widest2 text-brass-300 sm:text-[0.65rem]">
            {event.edition} · {event.year}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline text-sm font-medium text-cream-100/85 transition-colors hover:text-cream-50"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={generalContact.phoneHref}
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-cream-100/85 transition-colors hover:text-cream-50 xl:inline-flex"
            aria-label={`Call ${generalContact.person}`}
          >
            <Phone className="h-4 w-4" />
            <span>{generalContact.phone}</span>
          </a>
          <a href="#registration" className="btn-brass hidden sm:inline-flex !px-5 !py-2.5 text-[0.8rem]">
            Register Now
          </a>
          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream-100/20 text-cream-50 transition-colors hover:bg-cream-50/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden bg-espresso-950/98 backdrop-blur-md transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-x flex flex-col gap-1 py-4" aria-label="Mobile">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
              className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-cream-100/90 transition-colors hover:bg-cream-50/5 hover:text-cream-50"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-3 px-2 pb-2">
            <a href="#registration" onClick={close} className="btn-brass w-full">
              Register Now
            </a>
            <a
              href={generalContact.phoneHref}
              onClick={close}
              className="btn-ghost-light w-full !border-espresso-300/30"
            >
              <Phone className="h-4 w-4" />
              {generalContact.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
