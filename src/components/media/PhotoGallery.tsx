import { useEffect, useState } from 'react';
import type { FotoGaleria } from '@/data/galeria';

type PhotoGalleryProps = {
  photos: FotoGaleria[];
};

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) {
      return;
    }
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenIndex(null);
      } else if (event.key === 'ArrowRight') {
        setOpenIndex((current) =>
          current !== null ? Math.min(current + 1, photos.length - 1) : current,
        );
      } else if (event.key === 'ArrowLeft') {
        setOpenIndex((current) => (current !== null ? Math.max(current - 1, 0) : current));
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [openIndex, photos.length]);

  const openPhoto = openIndex !== null ? photos[openIndex] : undefined;

  return (
    <div className="flex flex-col gap-space-sm">
      <div className="grid grid-cols-2 gap-space-sm sm:grid-cols-3">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setOpenIndex(index)}
            aria-label={`Ampliar fotografía: ${photo.alt}`}
            className="group overflow-hidden rounded-xl bg-surface-container-lowest p-2 text-left shadow-sm transition-colors hover:bg-surface-container"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="h-40 w-full rounded-lg object-cover transition-transform group-hover:scale-[1.02]"
            />
          </button>
        ))}
      </div>

      {openPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Fotografía ampliada"
          onClick={() => setOpenIndex(null)}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-3 bg-inverse-surface/95 p-space-md"
        >
          <img
            src={openPhoto.src}
            alt={openPhoto.alt}
            className="max-h-[80dvh] w-auto max-w-full rounded-lg shadow-xl"
          />
          <p className="max-w-md text-center font-body-sm text-body-sm text-inverse-on-surface">
            {openPhoto.alt}
          </p>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setOpenIndex(null);
            }}
            className="rounded-full bg-surface px-4 py-1.5 font-label-md text-label-md font-semibold text-primary shadow"
          >
            Cerrar
          </button>
        </div>
      )}
    </div>
  );
}
