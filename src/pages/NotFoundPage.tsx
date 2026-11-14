export function NotFoundPage() {
  return (
    <div className="flex min-h-[70dvh] flex-col items-center justify-center gap-space-sm px-6 text-center">
      <h2 className="font-headline-md text-headline-md text-primary">Página no encontrada</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">
        Este sendero aún no existe en el archivo.
      </p>
    </div>
  );
}
