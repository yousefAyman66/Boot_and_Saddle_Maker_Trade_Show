import type { ReactNode } from 'react';
import Reveal from './Reveal';

type Props = {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
  children?: ReactNode;
};

export default function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  align = 'left',
  dark = false,
  className = '',
  children,
}: Props) {
  const alignCls = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start';
  return (
    <Reveal
      id={id}
      className={`flex max-w-2xl flex-col gap-4 ${alignCls} ${className}`}
    >
      {eyebrow ? (
        <span className={`eyebrow ${dark ? '!text-brass-300' : ''}`}>{eyebrow}</span>
      ) : null}
      <h2
        className={`font-display text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-[2.9rem] ${
          dark ? 'text-cream-50' : 'text-espresso-900'
        }`}
      >
        {title}
      </h2>
      <span className={`hairline ${align === 'center' ? 'mx-auto bg-gradient-to-r from-brass-400 via-brass-400 to-transparent' : ''}`} />
      {intro ? (
        <p className={`max-w-xl text-base leading-relaxed sm:text-lg ${dark ? 'text-cream-100/80' : 'text-espresso-700'}`}>
          {intro}
        </p>
      ) : null}
      {children}
    </Reveal>
  );
}
