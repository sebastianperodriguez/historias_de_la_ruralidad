import type { ReactNode } from 'react';

type BadgeVariant = 'surface' | 'primary' | 'secondary' | 'outline';

const variantClasses: Record<BadgeVariant, string> = {
  surface: 'bg-surface-container-high text-primary',
  primary: 'bg-primary-fixed text-on-primary-fixed',
  secondary: 'bg-secondary-fixed text-on-secondary-fixed',
  outline: 'border border-outline-variant text-on-surface-variant',
};

type BadgeProps = {
  children: ReactNode;
  icon?: string;
  variant?: BadgeVariant;
  className?: string;
};

export function Badge({ children, icon, variant = 'surface', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded px-2 py-0.5 font-label-sm text-label-sm ${variantClasses[variant]} ${className}`}
    >
      {icon && <span className="text-[15px] leading-none">{icon}</span>}
      {children}
    </span>
  );
}
