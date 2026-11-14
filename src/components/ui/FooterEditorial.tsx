type FooterEditorialProps = {
  entity: string;
  description: string;
};

export function FooterEditorial({ entity, description }: FooterEditorialProps) {
  return (
    <footer className="flex flex-col items-center gap-space-xs px-margin pb-space-lg pt-space-md text-center">
      <div className="mb-space-xs h-0.5 w-10 rounded bg-surface-container-highest" />
      <span className="font-label-sm text-label-sm font-semibold uppercase tracking-widest text-secondary">
        {entity}
      </span>
      <p className="max-w-xs font-body-sm text-body-sm text-on-surface-variant">{description}</p>
    </footer>
  );
}
