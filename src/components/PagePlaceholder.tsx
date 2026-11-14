type PagePlaceholderProps = {
  title: string;
  description?: string;
};

export function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  return (
    <div className="flex min-h-[60dvh] flex-col items-center justify-center gap-2 px-6 text-center">
      <h1 className="font-headline-md text-headline-md text-primary">{title}</h1>
      {description && <p className="font-body-md text-body-md opacity-60">{description}</p>}
    </div>
  );
}
