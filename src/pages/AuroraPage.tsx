import { Link } from 'react-router-dom';
import { aurora } from '@/data/aurora';
import { revista } from '@/data/revista';
import { MagazineViewer } from '@/components/media/MagazineViewer';
import { SuitePlayer } from '@/components/media/SuitePlayer';
import { Badge } from '@/components/ui/Badge';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Toast } from '@/components/ui/Toast';
import { useToast } from '@/hooks/useToast';

const hitoAccentClasses = {
  primary: 'bg-primary text-on-primary',
  secondary: 'bg-secondary text-on-secondary',
  tertiary: 'bg-tertiary text-on-tertiary',
} as const;

export function AuroraPage() {
  const { toast, showToast } = useToast();

  return (
    <>
      {/* Ficha del cuaderno de campo */}
      <section className="flex flex-col gap-space-sm bg-surface-container-low px-margin pb-space-lg pt-space-md">
        <div className="flex items-center justify-between">
          <Badge variant="primary">{aurora.cuaderno}</Badge>
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
            {aurora.ficha}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary">
            Vereda La Aurora
          </h2>
          <p className="font-body-sm text-body-sm italic text-on-surface-variant">
            {aurora.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-space-xs pt-space-xs">
          {aurora.fichaStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col rounded-xl bg-surface-container-lowest p-2.5 shadow-sm"
            >
              <span className="font-label-sm text-label-sm uppercase text-outline">
                {stat.label}
              </span>
              <span className="font-headline-sm text-headline-sm text-primary">{stat.value}</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                {stat.note}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Actividades realizadas */}
      <section className="flex flex-col gap-space-md px-margin py-space-md">
        <SectionHeader kicker={aurora.actividades.kicker} title={aurora.actividades.title} />
        {aurora.actividades.items.map((actividad) => (
          <a
            key={actividad.title}
            href={actividad.href}
            className="flex items-stretch gap-space-sm overflow-hidden rounded-xl bg-surface-container-lowest p-2 shadow-sm transition-colors hover:bg-surface-container"
          >
            <img
              src={actividad.image.src}
              alt={actividad.image.alt}
              loading="lazy"
              className="h-24 w-28 flex-shrink-0 rounded-lg object-cover"
            />
            <div className="flex min-w-0 flex-col justify-center gap-0.5">
              <span className="font-label-md text-label-md font-semibold text-on-surface">
                {actividad.title}
              </span>
              <span className="line-clamp-2 font-body-sm text-body-sm text-on-surface-variant">
                {actividad.description}
              </span>
              <span className="font-label-sm text-label-sm font-semibold text-primary">
                Ver aquí ›
              </span>
            </div>
          </a>
        ))}
      </section>

      {/* Documental */}
      <section id="documental" className="scroll-mt-24 px-margin pb-space-xl">
        <div className="flex flex-col gap-space-sm rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
          <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-primary">
            {aurora.documental.kicker}
          </span>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">
            {aurora.documental.title}
          </h3>
          <p className="font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
            {aurora.documental.description}
          </p>
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <iframe
              className="h-full w-full"
              src={aurora.documental.youtubeEmbedUrl}
              title={`Documental — ${revista.titulo}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <a
            href={aurora.documental.youtubeUrl}
            target="_blank"
            rel="noreferrer"
            className="self-start font-label-md text-label-md text-primary hover:underline"
          >
            Ver en YouTube ›
          </a>
        </div>
      </section>

      {/* Revista integrada */}
      <section
        id="revista"
        className="scroll-mt-24 flex flex-col gap-space-md px-margin pb-space-xl"
      >
        <SectionHeader
          kicker="La Publicación"
          title={`Revista ${revista.titulo}`}
          trailing={`${revista.totalPaginas} páginas`}
        />
        <MagazineViewer />
        <button
          type="button"
          onClick={() => showToast(revista.pdfMessage)}
          className="mx-auto flex h-11 w-full max-w-md items-center justify-center rounded-full bg-primary font-label-md text-label-md font-semibold text-on-primary shadow transition-transform hover:bg-on-primary-container active:scale-[0.99]"
        >
          Descargar revista (PDF)
        </button>
        <div className="flex flex-col gap-0.5 rounded-xl bg-surface-container-low p-space-md font-label-sm text-label-sm text-on-surface-variant">
          <span>
            <strong className="font-semibold text-on-surface">Fotografía:</strong>{' '}
            {revista.creditos[0]?.personas.join(', ')}
          </span>
          <span>
            <strong className="font-semibold text-on-surface">Ilustración:</strong>{' '}
            {revista.creditos[1]?.personas.join(', ')}
          </span>
          <span>
            <strong className="font-semibold text-on-surface">Investigación, edición:</strong>{' '}
            {revista.creditos[2]?.personas.join(', ')}
          </span>
          <span className="text-outline">{revista.contraportada.detalle}</span>
        </div>
      </section>

      {/* Suite musical */}
      <section id="suite" className="scroll-mt-24 flex flex-col gap-space-md px-margin pb-space-xl">
        <SectionHeader kicker="Banda Sonora" title="Suite para la Aurora" />
        <SuitePlayer />
      </section>

      {/* Origen del nombre */}
      <article className="flex flex-col gap-space-md px-margin py-space-md">
        <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-primary">
          {aurora.cronica.kicker}
        </span>
        <h3 className="font-headline-md text-headline-md leading-tight text-primary">
          {aurora.cronica.title}
        </h3>
        <div className="flex flex-col gap-space-sm font-body-md text-body-md text-on-surface">
          <p>
            <span className="float-left pr-3 pt-1 font-display text-display-lg leading-none text-primary">
              {aurora.cronica.lead.charAt(0)}
            </span>
            {aurora.cronica.lead.slice(1)}
          </p>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            {aurora.cronica.secondary}
          </p>
        </div>
      </article>

      {/* Testimonio real */}
      <section className="px-margin my-space-md">
        <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
          <span className="pointer-events-none absolute -bottom-4 -right-2 select-none font-display text-6xl leading-none text-primary/15">
            ”
          </span>
          <div className="relative z-10 flex flex-col gap-space-sm">
            <span className="font-label-sm text-label-sm font-semibold uppercase tracking-widest text-primary">
              {aurora.testimonial.kicker}
            </span>
            <blockquote className="font-quote-lg text-quote-lg italic leading-relaxed text-on-surface">
              {aurora.testimonial.quote}
            </blockquote>
            <div className="flex items-center gap-space-sm pt-space-xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-label-md text-label-md text-on-primary">
                {aurora.testimonial.initials}
              </div>
              <div className="flex flex-col">
                <cite className="font-label-md text-label-md font-semibold not-italic text-on-surface">
                  {aurora.testimonial.name}
                </cite>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  {aurora.testimonial.meta}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acueducto comunitario */}
      <section className="flex flex-col gap-space-md px-margin py-space-sm">
        <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-primary">
          {aurora.acueducto.kicker}
        </span>
        <div className="flex flex-col gap-space-sm rounded-xl bg-tertiary-container p-space-md shadow-sm">
          <div className="flex items-center justify-between">
            <h4 className="font-headline-sm text-headline-sm text-on-tertiary-container">
              {aurora.acueducto.title}
            </h4>
            <span className="rounded-full bg-tertiary px-2 py-0.5 font-label-sm text-label-sm text-on-tertiary">
              {aurora.acueducto.chip}
            </span>
          </div>
          <p className="font-body-sm text-body-sm leading-relaxed text-on-surface">
            {aurora.acueducto.description}
          </p>
          <div className="grid grid-cols-2 gap-space-xs pt-1">
            {aurora.acueducto.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col rounded bg-tertiary p-2">
                <span className="font-label-sm text-label-sm text-on-tertiary/80">
                  {stat.label}
                </span>
                <span className="font-headline-sm text-headline-sm text-on-tertiary">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hitos comunitarios */}
      <section className="flex flex-col gap-space-sm px-margin py-space-md">
        <SectionHeader
          kicker={aurora.hitos.kicker}
          title="Los que levantaron la vereda"
          trailing={aurora.hitos.trailing}
        />
        <div className="flex flex-col gap-space-xs">
          {aurora.hitos.items.map((hito, index) => (
            <div
              key={hito.title}
              className="flex items-start gap-space-sm rounded-xl bg-surface-container-lowest p-space-sm shadow-sm"
            >
              <span
                className={`mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full font-label-sm text-label-sm font-bold ${hitoAccentClasses[hito.accent]}`}
              >
                {index + 1}
              </span>
              <div className="flex min-w-0 flex-col">
                <h5 className="font-label-md text-label-md font-semibold text-on-surface">
                  {hito.title}
                </h5>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {hito.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capítulos de la investigación */}
      <section className="flex flex-col gap-space-sm px-margin py-space-md">
        <SectionHeader
          kicker="La Investigación"
          title="Capítulos de la revista"
          trailing={`${revista.capitulos.length} textos`}
        />
        <div className="flex flex-col gap-space-xs">
          {revista.capitulos.map((capitulo, index) => (
            <Link
              key={capitulo.slug}
              to={`/la-aurora/historias/${capitulo.slug}`}
              className="flex items-center justify-between gap-space-sm rounded-xl bg-surface-container-lowest p-space-sm shadow-sm transition-colors hover:bg-surface-container"
            >
              <div className="flex min-w-0 items-center gap-space-sm">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-container font-label-md text-label-md text-on-primary-container">
                  {index + 1}
                </span>
                <div className="flex min-w-0 flex-col">
                  <h5 className="truncate font-label-md text-label-md font-semibold text-on-surface">
                    {capitulo.titulo}
                  </h5>
                  <span className="font-label-sm text-label-sm text-outline">
                    Páginas {capitulo.inicio}–{capitulo.fin}
                  </span>
                </div>
              </div>
              <span aria-hidden="true" className="flex-shrink-0 text-primary">
                ›
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Siguiente cuaderno */}
      <section className="px-margin pb-space-lg">
        <Link
          to={aurora.siguiente.href}
          className="flex items-center justify-between gap-space-sm rounded-xl bg-surface-container p-space-md transition-colors hover:bg-surface-container-high"
        >
          <div className="flex min-w-0 flex-col">
            <span className="font-label-sm text-label-sm font-semibold uppercase text-primary">
              {aurora.siguiente.kicker}
            </span>
            <h4 className="truncate font-headline-sm text-headline-sm text-on-surface">
              {aurora.siguiente.title}
            </h4>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              {aurora.siguiente.subtitle}
            </span>
          </div>
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-surface-container-lowest text-primary shadow-sm">
            <span aria-hidden="true">›</span>
          </div>
        </Link>
      </section>

      <Toast toast={toast} />
    </>
  );
}
