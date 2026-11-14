import { ThemeToggle } from '@/components/ui/ThemeToggle';
import type { Theme } from '@/hooks/useTheme';

type TopHeaderProps = {
  title: string;
  theme: Theme;
  onToggleTheme: () => void;
};

export function TopHeader({ title, theme, onToggleTheme }: TopHeaderProps) {
  return (
    <header className="fixed top-0 z-50 w-full bg-surface/85 pt-safe shadow-[0_1px_12px_rgba(9,34,23,0.04)] backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between gap-space-sm px-margin">
        <div className="flex min-w-0 items-center gap-space-sm">
          <img
            alt="Historias de Ruralidad Carmelitana"
            className="h-8 w-auto flex-shrink-0 object-contain"
            src="/favicon.svg"
          />
          <div className="flex min-w-0 flex-col">
            <span className="truncate font-label-sm text-label-sm uppercase tracking-wider text-secondary">
              El Carmen de Viboral
            </span>
            <h1 className="truncate font-headline-sm text-headline-sm leading-tight tracking-tight text-primary">
              {title}
            </h1>
          </div>
        </div>
        <div className="flex flex-shrink-0 items-center gap-space-xs">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </header>
  );
}
