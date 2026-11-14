import type { ReactNode } from 'react';

type BadgeVariant = 'surface' | 'primary' | 'secondary' | 'outline';

const variantClasses: Record<BadgeVariant, string> = {
  surface: 'bg-surface-container-high text-on-surface',
  primary: 'bg-primary text-on-primary',
  secondary: 'bg-secondary text-on-secondary',
  outline: 'border border-outline-variant text-on-surface-variant',
};

type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

export function Badge({ children, variant = 'surface', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-label-sm text-label-sm ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
