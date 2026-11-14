import { Icon } from '@/components/ui/Icon';

type TopHeaderProps = {
  title: string;
};

export function TopHeader({ title }: TopHeaderProps) {
  return (
    <header className="fixed top-0 z-50 w-full bg-surface/90 pt-safe shadow-[0_1px_12px_rgba(47,43,40,0.06)] backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between gap-space-sm px-margin">
        <div className="flex min-w-0 items-center gap-space-sm">
          <img
            alt="Historias de la Ruralidad Carmelitana"
            className="h-8 w-auto flex-shrink-0 object-contain"
            src="/favicon.svg"
          />
          <div className="flex min-w-0 flex-col">
            <span className="truncate font-label-sm text-label-sm uppercase tracking-wider text-primary">
              El Carmen de Viboral
            </span>
            <h1 className="truncate font-headline-sm text-headline-sm leading-tight tracking-tight text-on-surface">
              {title}
            </h1>
          </div>
        </div>
        <div className="flex flex-shrink-0 items-center gap-space-xs">
          <Icon name="history_edu" size={22} className="text-primary" />
        </div>
      </div>
    </header>
  );
}
