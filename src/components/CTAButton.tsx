import type { ComponentType, ReactNode } from 'react';
import { Link2 } from 'lucide-react';

type CommonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'brass' | 'outline' | 'ghost-light';
  icon?: ComponentType<{ className?: string }>;
  className?: string;
  external?: boolean;
};

export default function CTAButton({
  href,
  children,
  variant = 'primary',
  icon: Icon,
  className = '',
  external = false,
}: CommonProps) {
  const cls =
    variant === 'primary'
      ? 'btn-primary'
      : variant === 'brass'
      ? 'btn-brass'
      : variant === 'outline'
      ? 'btn-outline'
      : 'btn-ghost-light';

  if (external || href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) {
    return (
      <a href={href} className={`${cls} ${className}`} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        <span>{children}</span>
        {Icon ? <Icon className="h-4 w-4" /> : null}
      </a>
    );
  }

  return (
    <a href={href} className={`${cls} ${className}`}>
      <span>{children}</span>
      {Icon ? <Icon className="h-4 w-4" /> : null}
    </a>
  );
}

// Small helper exported for callers who want just the arrow.
export const ArrowIcon = Link2;
