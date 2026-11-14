import { Icon } from '@/components/ui/Icon';

export function LaHondaPage() {
  return (
    <div className="flex min-h-[70dvh] flex-col items-center justify-center gap-space-sm px-6 text-center">
      <Icon name="terrain" size={48} className="text-primary" />
      <h2 className="font-headline-md text-headline-md text-primary">Vereda La Honda</h2>
      <p className="max-w-sm font-body-md text-body-md text-on-surface-variant">
        Cuaderno de Campo No. 02 — esta historia está próximamente en preparación.
      </p>
    </div>
  );
}
