type PagePlaceholderProps = {
  title: string;
  description?: string;
};

export function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-2 px-6 text-center">
      <h1 className="font-[var(--font-display)] text-3xl">{title}</h1>
      {description && <p className="opacity-60">{description}</p>}
    </main>
  );
}
