import { Link, useParams } from 'react-router-dom';
import { getCapituloBySlug, revista } from '@/data/revista';
import type { CapituloBloque } from '@/data/revista';
import { getRevistaPageUrl } from '@/lib/revista-pages';
import { Badge } from '@/components/ui/Badge';
import { Icon } from '@/components/ui/Icon';
import { NotFoundPage } from '@/pages/NotFoundPage';

function Bloque({ bloque }: { bloque: CapituloBloque }) {
  switch (bloque.tipo) {
    case 'parrafo':
      return (
        <p className="font-body-md text-body-md leading-relaxed text-on-surface">{bloque.texto}</p>
      );
    case 'cita':
      return (
        <blockquote className="rounded-xl border-l-4 border-primary bg-surface-container-lowest p-space-md shadow-sm">
          <p className="font-body-lg text-body-lg italic leading-relaxed text-on-surface">
            {bloque.texto}
          </p>
          {bloque.autor && (
            <footer className="mt-2 font-label-sm text-label-sm text-on-surface-variant">
              — {bloque.autor}
            </footer>
          )}
        </blockquote>
      );
    case 'formula':
      return (
        <p className="rounded-xl bg-primary-container p-space-md text-center font-label-md text-label-md font-semibold leading-relaxed text-on-primary-container">
          {bloque.texto}
        </p>
      );
    case 'figura': {
      const url = getRevistaPageUrl(bloque.pagina);
      if (!url) {
        return null;
      }
      return (
        <figure className="flex flex-col gap-1">
          <img
            src={url}
            alt={bloque.pie ?? `Página ${bloque.pagina} de la revista La Aurora`}
            loading="lazy"
            className="w-full rounded-xl shadow-sm"
          />
          {bloque.pie && (
            <figcaption className="font-label-sm text-label-sm text-on-surface-variant">
              {bloque.pie}
            </figcaption>
          )}
        </figure>
      );
    }
  }
}

export function StoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const capitulo = slug ? getCapituloBySlug(slug) : undefined;

  if (!capitulo) {
    return <NotFoundPage />;
  }

  const index = revista.capitulos.findIndex((c) => c.slug === capitulo.slug);
  const anterior = index > 0 ? revista.capitulos[index - 1] : undefined;
  const siguiente =
    index >= 0 && index < revista.capitulos.length - 1 ? revista.capitulos[index + 1] : undefined;

  return (
    <>
      {/* Encabezado del capítulo */}
      <section className="flex flex-col gap-space-sm bg-surface-container-low px-margin pb-space-lg pt-space-md">
        <div className="flex items-center justify-between">
          <Badge variant="primary">{`Capítulo ${index + 1}`}</Badge>
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
            Páginas {capitulo.inicio}–{capitulo.fin}
          </span>
        </div>
        <h2 className="font-headline-md text-headline-md leading-tight text-primary">
          {capitulo.titulo}
        </h2>
        <span className="font-label-md text-label-md text-on-surface-variant">
          {revista.titulo}: {revista.subtitulo}
        </span>
      </section>

      {/* Contenido */}
      <article className="flex flex-col gap-space-md px-margin py-space-md">
        {capitulo.bloques.map((bloque, i) => (
          <Bloque key={i} bloque={bloque} />
        ))}
      </article>

      {/* Navegación entre capítulos */}
      <nav className="flex items-stretch gap-space-sm px-margin pb-space-lg">
        {anterior ? (
          <Link
            to={`/la-aurora/historias/${anterior.slug}`}
            className="flex flex-1 items-center gap-1 rounded-xl bg-surface-container-lowest p-space-sm shadow-sm"
            aria-label={`Capítulo anterior: ${anterior.titulo}`}
          >
            <Icon name="arrow_back" size={18} className="flex-shrink-0 text-primary" />
            <span className="truncate font-label-md text-label-md text-on-surface">
              {anterior.titulo}
            </span>
          </Link>
        ) : (
          <span className="flex-1" />
        )}
        {siguiente ? (
          <Link
            to={`/la-aurora/historias/${siguiente.slug}`}
            className="flex flex-1 items-center justify-end gap-1 rounded-xl bg-surface-container-lowest p-space-sm shadow-sm text-right"
            aria-label={`Capítulo siguiente: ${siguiente.titulo}`}
          >
            <span className="truncate font-label-md text-label-md text-on-surface">
              {siguiente.titulo}
            </span>
            <Icon name="arrow_forward" size={18} className="flex-shrink-0 text-primary" />
          </Link>
        ) : (
          <span className="flex-1" />
        )}
      </nav>
    </>
  );
}
