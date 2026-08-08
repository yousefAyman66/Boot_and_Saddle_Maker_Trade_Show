import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * Wraps children and reveals them with a fade-up when scrolled into view.
 * Respects prefers-reduced-motion (handled in CSS).
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  id,
  as: Tag = 'div',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  as?: keyof JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const Component = Tag as any;
  return (
    <Component
      ref={ref as any}
      id={id}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
