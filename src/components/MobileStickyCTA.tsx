import { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';

export default function MobileStickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.body.scrollHeight - window.innerHeight - 600;
      setShow(y > 520 && y < max);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 sm:hidden ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="m-3 flex gap-2 rounded-full bg-espresso-950/95 p-2 shadow-2xl shadow-espresso-950/40 backdrop-blur">
        <a href="#registration" className="btn-brass flex-1 !rounded-full !py-3">
          <Calendar className="h-4 w-4" />
          Register Now
        </a>
        <a
          href="tel:+13253301380"
          className="flex items-center justify-center rounded-full border border-cream-100/20 px-5 text-sm font-semibold text-cream-50"
          aria-label="Call event contact"
        >
          Call
        </a>
      </div>
    </div>
  );
}
