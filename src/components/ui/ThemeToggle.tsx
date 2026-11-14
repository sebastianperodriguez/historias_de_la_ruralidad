import { Icon } from '@/components/ui/Icon';

type ThemeToggleProps = {
  theme: 'light' | 'dark';
  onToggle: () => void;
  className?: string;
};

export function ThemeToggle({ theme, onToggle, className = '' }: ThemeToggleProps) {
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
      aria-pressed={isDark}
      className={`flex h-10 w-10 items-center justify-center rounded text-primary transition-colors hover:bg-surface-container-low ${className}`}
    >
      <Icon name={isDark ? 'light_mode' : 'dark_mode'} size={22} />
    </button>
  );
}
