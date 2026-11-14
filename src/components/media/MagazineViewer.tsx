import { useCallback, useEffect, useRef, useState } from 'react';
import { getRevistaPageUrl, getRevistaPageUrls } from '@/lib/revista-pages';
import { Icon } from '@/components/ui/Icon';

const SWIPE_THRESHOLD_PX = 48;

type MagazineViewerProps = {
  pages?: number[];
};

export function MagazineViewer({ pages: pagesProp }: MagazineViewerProps) {
  const pages = pagesProp ?? getRevistaPageUrls();
  const [index, setIndex] = useState(0);
  const [thumbnailsOpen, setThumbnailsOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const total = pages.length;
  const goTo = useCallback(
    (next: number) => {
      if (next >= 0 && next < total) {
        setIndex(next);
      }
    },
    [total],
  );
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        next();
      } else if (event.key === 'ArrowLeft') {
        prev();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev]);

  if (total === 0) {
    return (
      <p className="font-body-md text-body-md text-on-surface-variant">
        Las páginas de la revista aún no están disponibles.
      </p>
    );
  }

  const currentUrl = getRevistaPageUrl(pages[index] ?? index + 1);
  const nextUrl = index + 1 < total ? getRevistaPageUrl(pages[index + 1] ?? index + 2) : undefined;

  return (
    <div className="flex flex-col gap-space-sm">
      {/* Visor */}
      <div
        className="relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-md"
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) => {
          const start = touchStartX.current;
          const end = event.changedTouches[0]?.clientX ?? null;
          touchStartX.current = null;
          if (start === null || end === null) {
            return;
          }
          const delta = end - start;
          if (delta <= -SWIPE_THRESHOLD_PX) {
            next();
          } else if (delta >= SWIPE_THRESHOLD_PX) {
            prev();
          }
        }}
      >
        <img
          key={currentUrl}
          src={currentUrl}
          alt={`Página ${index + 1} de la revista La Aurora`}
          className="mx-auto max-h-[80dvh] w-auto max-w-full"
          loading={index === 0 ? 'eager' : 'lazy'}
        />
        {/* Precarga silenciosa de la página siguiente */}
        {nextUrl && <img src={nextUrl} alt="" aria-hidden="true" className="hidden" />}

        <button
          type="button"
          onClick={prev}
          disabled={index === 0}
          aria-label="Página anterior"
          className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-on-surface shadow backdrop-blur-sm transition-transform active:scale-90 disabled:opacity-30"
        >
          <Icon name="chevron_left" size={24} />
        </button>
        <button
          type="button"
          onClick={next}
          disabled={index >= total - 1}
          aria-label="Página siguiente"
          className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-on-surface shadow backdrop-blur-sm transition-transform active:scale-90 disabled:opacity-30"
        >
          <Icon name="chevron_right" size={24} />
        </button>

        <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-surface/90 px-3 py-1 font-label-sm text-label-sm text-on-surface shadow backdrop-blur-sm">
          {index + 1} / {total}
        </div>
      </div>

      {/* Controles */}
      <div className="flex items-center justify-between px-margin">
        <button
          type="button"
          onClick={() => setThumbnailsOpen((open) => !open)}
          aria-expanded={thumbnailsOpen}
          className="flex items-center gap-1 font-label-md text-label-md text-primary hover:underline"
        >
          <Icon name="grid_view" size={16} />
          <span>{thumbnailsOpen ? 'Ocultar miniaturas' : 'Ver miniaturas'}</span>
        </button>
        <span className="font-label-sm text-label-sm text-outline">
          Página {(pages[index] ?? index + 1).toString().padStart(2, '0')}
        </span>
      </div>

      {thumbnailsOpen && (
        <div className="flex flex-wrap justify-center gap-2 px-margin">
          {pages.map((page, pageIndex) => (
            <button
              key={page}
              type="button"
              onClick={() => goTo(pageIndex)}
              aria-label={`Ir a la página ${page}`}
              aria-current={pageIndex === index}
              className={`w-14 overflow-hidden rounded shadow-sm transition-transform hover:scale-105 ${
                pageIndex === index ? 'ring-2 ring-primary' : ''
              }`}
            >
              <img src={getRevistaPageUrl(page)} alt="" loading="lazy" className="h-auto w-full" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
