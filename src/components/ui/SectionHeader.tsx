import type { ReactNode } from 'react';
import { Badge } from '@/components/ui/Badge';

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
        <Badge variant="surface" className="bg-transparent px-0 py-0 uppercase tracking-wider">
          {kicker}
        </Badge>
        <h3 className="font-headline-sm text-headline-sm text-primary">{title}</h3>
      </div>
      {trailing && (
        <span className="font-label-md text-label-md text-on-surface-variant">{trailing}</span>
      )}
    </div>
  );
}
