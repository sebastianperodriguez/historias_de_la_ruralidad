import { Link } from 'react-router-dom';
import type { Vereda } from '@/data/veredas';
import { Badge } from '@/components/ui/Badge';

type VeredaCardProps = {
  vereda: Vereda;
};

export function VeredaCard({ vereda }: VeredaCardProps) {
  return (
    <article className="flex flex-col gap-space-sm rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
      <div className="relative h-44 w-full overflow-hidden rounded-xl bg-surface-container">
        {vereda.image.src ? (
          <img
            className="h-full w-full object-cover"
            src={vereda.image.src}
            alt={vereda.image.alt}
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-primary">
            <span className="font-label-md text-label-md uppercase tracking-wider">
              Próximamente
            </span>
          </div>
        )}
        <span className="absolute left-2.5 top-2.5 rounded-full bg-surface/90 px-2.5 py-0.5 font-label-sm text-label-sm text-primary backdrop-blur-sm">
          {vereda.tag}
        </span>
      </div>

      <div className="mt-1 flex items-center gap-space-xs">
        <Badge variant={vereda.available ? 'primary' : 'outline'}>{vereda.name}</Badge>
        <span className="font-label-sm text-label-sm text-on-surface-variant">• {vereda.note}</span>
      </div>

      <h4 className="font-headline-sm text-headline-sm leading-snug text-on-surface">
        {vereda.title}
      </h4>
      <p className="font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
        {vereda.description}
      </p>

      <div className="flex items-center justify-between pt-space-xs">
        <span className="font-label-sm text-label-sm text-on-surface-variant">
          {vereda.available ? 'Publicación completa' : 'Cuaderno en curso'}
        </span>
        <Link
          to={vereda.available ? '/la-aurora' : '/la-honda'}
          aria-label={
            vereda.available
              ? `Abrir el cuaderno de la ${vereda.name}`
              : `${vereda.name} próximamente`
          }
          className="flex h-10 items-center gap-1 rounded-full bg-primary px-space-md font-label-md text-label-md text-on-primary shadow-sm transition-transform active:scale-95"
        >
          <span>{vereda.available ? 'Leer investigación' : 'Próximamente'}</span>
          <span aria-hidden="true">›</span>
        </Link>
      </div>
    </article>
  );
}
