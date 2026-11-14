import type { ReactNode } from 'react';

type SectionHeaderProps = {
  kicker: string;
  title: string;
  trailing?: ReactNode;
  className?: string;
};

export function SectionHeader({ kicker, title, trailing, className = '' }: SectionHeaderProps) {
  return (
    <div className={`flex items-baseline justify-between ${className}`}>
      <div>
        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
          {kicker}
        </span>
        <h3 className="font-headline-sm text-headline-sm text-primary">{title}</h3>
      </div>
      {trailing && (
        <span className="font-label-md text-label-md text-on-surface-variant">{trailing}</span>
      )}
    </div>
  );
}
