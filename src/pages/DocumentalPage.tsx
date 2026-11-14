import { Link } from 'react-router-dom';
import { proyecto } from '@/data/proyecto';
import { revista } from '@/data/revista';
import { Badge } from '@/components/ui/Badge';

export function DocumentalPage() {
  return (
    <>
      <section className="flex flex-col gap-space-sm bg-surface-container-low px-margin pb-space-lg pt-space-md">
        <div className="flex items-center justify-between">
          <Badge variant="primary">Proyecto Audiovisual</Badge>
        </div>
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary">
          Documental {revista.titulo}
        </h2>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          {proyecto.secciones.documental.description}
        </p>
      </section>

      <section className="px-margin pb-space-lg">
        <div className="overflow-hidden rounded-xl bg-surface-container-lowest shadow-md">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src={proyecto.secciones.documental.youtubeEmbedUrl}
              title={`Documental — ${proyecto.nombre}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="flex items-center justify-between gap-space-sm p-space-sm">
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Documental completo del proyecto
            </span>
            <a
              href={proyecto.secciones.documental.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 font-label-md text-label-md text-primary hover:underline"
            >
              Ver en YouTube
            </a>
          </div>
        </div>
      </section>

      <section className="px-margin pb-space-lg">
        <Link
          to="/revista"
          className="flex items-center justify-between gap-space-sm rounded-xl bg-surface-container p-space-md transition-colors hover:bg-surface-container-high"
        >
          <div className="flex min-w-0 flex-col">
            <span className="font-label-sm text-label-sm font-semibold uppercase text-primary">
              Complemento
            </span>
            <h4 className="font-headline-sm text-headline-sm text-on-surface">
              Revista {revista.titulo}
            </h4>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              La memoria oral, fotografías e ilustraciones del proyecto
            </span>
          </div>
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-surface-container-lowest text-primary shadow-sm"></div>
        </Link>
      </section>
    </>
  );
}
