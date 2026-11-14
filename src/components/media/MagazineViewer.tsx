import { useCallback, useEffect, useRef, useState } from 'react';
import { getRevistaPageUrl, getRevistaPageUrls } from '@/lib/revista-pages';

const SWIPE_THRESHOLD_PX = 48;
const FULLSCREEN_CONTROLS_TIMEOUT_MS = 2500;

function FullscreenIcon({
  exit = false,
  className = 'h-5 w-5',
}: {
  exit?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {exit ? (
        <>
          <path d="M8 3v3a2 2 0 0 1-2 2H3" />
          <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
          <path d="M3 16h3a2 2 0 0 1 2 2v3" />
          <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
        </>
      ) : (
        <>
          <path d="M8 3H5a2 2 0 0 0-2 2v3" />
          <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
          <path d="M3 16v3a2 2 0 0 0 2 2h3" />
          <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
        </>
      )}
    </svg>
  );
}

type MagazineViewerProps = {
  pages?: number[];
};

export function MagazineViewer({ pages: pagesProp }: MagazineViewerProps) {
  const pages = pagesProp ?? getRevistaPageUrls();
  const [index, setIndex] = useState(0);
  const [thumbnailsOpen, setThumbnailsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
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

  const toggleFullscreen = useCallback(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }
    if (document.fullscreenElement) {
      void document.exitFullscreen();
    } else {
      void container.requestFullscreen();
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const fullscreen = Boolean(document.fullscreenElement);
      setIsFullscreen(fullscreen);
      setControlsVisible(true);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

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

  /*
   * En pantalla completa los controles flotantes se ocultan solos para
   * no tapar la página; reaparecen con cualquier toque o movimiento.
   */
  useEffect(() => {
    if (!isFullscreen || !controlsVisible) {
      return;
    }
    const timer = setTimeout(() => setControlsVisible(false), FULLSCREEN_CONTROLS_TIMEOUT_MS);
    return () => clearTimeout(timer);
  }, [isFullscreen, controlsVisible, index]);

  const wakeControls = useCallback(() => setControlsVisible(true), []);

  if (total === 0) {
    return (
      <p className="font-body-md text-body-md text-on-surface-variant">
        Las páginas de la revista aún no están disponibles.
      </p>
    );
  }

  const currentUrl = getRevistaPageUrl(pages[index] ?? index + 1);
  const nextUrl = index + 1 < total ? getRevistaPageUrl(pages[index + 1] ?? index + 2) : undefined;
  const overlayVisible = !isFullscreen || controlsVisible;

  return (
    <div className="flex flex-col gap-space-sm">
      <div
        ref={containerRef}
        className={`relative overflow-hidden bg-surface-container-lowest shadow-md ${
          isFullscreen ? 'flex h-dvh items-center justify-center' : 'rounded-xl'
        }`}
        onTouchStart={(event) => {
          wakeControls();
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
        onMouseMove={wakeControls}
        onClick={wakeControls}
      >
        <img
          key={currentUrl}
          src={currentUrl}
          alt={`Página ${index + 1} de la revista La Aurora`}
          className={
            isFullscreen ? 'max-h-dvh w-auto max-w-full' : 'mx-auto max-h-[80dvh] w-auto max-w-full'
          }
          loading={index === 0 ? 'eager' : 'lazy'}
        />
        {/* Precarga silenciosa de la página siguiente */}
        {nextUrl && <img src={nextUrl} alt="" aria-hidden="true" className="hidden" />}

        {/* Controles flotantes: se auto-ocultan en pantalla completa */}
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            prev();
          }}
          disabled={index === 0}
          aria-label="Página anterior"
          className={`absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-on-surface shadow backdrop-blur-sm transition-opacity duration-300 active:scale-90 disabled:opacity-30 ${
            overlayVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <span aria-hidden="true" className="text-3xl font-light leading-none text-on-surface">
            ‹
          </span>
        </button>
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            next();
          }}
          disabled={index >= total - 1}
          aria-label="Página siguiente"
          className={`absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-on-surface shadow backdrop-blur-sm transition-opacity duration-300 active:scale-90 disabled:opacity-30 ${
            overlayVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <span aria-hidden="true" className="text-3xl font-light leading-none text-on-surface">
            ›
          </span>
        </button>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            toggleFullscreen();
          }}
          aria-label={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
          title={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
          className={`absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-surface/90 text-on-surface shadow backdrop-blur-sm transition-opacity duration-300 active:scale-90 ${
            overlayVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <FullscreenIcon exit={isFullscreen} />
        </button>

        <div
          className={`pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-surface/90 px-3 py-1 font-label-sm text-label-sm text-on-surface shadow backdrop-blur-sm transition-opacity duration-300 ${
            overlayVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {index + 1} / {total}
        </div>
      </div>

      {/* Controles */}
      <div className="flex items-center justify-between gap-2 px-margin">
        <button
          type="button"
          onClick={() => setThumbnailsOpen((open) => !open)}
          aria-expanded={thumbnailsOpen}
          className="flex items-center gap-1 font-label-md text-label-md text-primary hover:underline"
        >
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
