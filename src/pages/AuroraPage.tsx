import { Link } from 'react-router-dom';
import { aurora } from '@/data/aurora';
import { AudioPlayer } from '@/components/media/AudioPlayer';
import { Badge } from '@/components/ui/Badge';
import { Icon } from '@/components/ui/Icon';
import { Toast } from '@/components/ui/Toast';
import { useToast } from '@/hooks/useToast';

const hitoAccentClasses = {
  secondary: 'bg-secondary-fixed text-on-secondary-fixed',
  primary: 'bg-primary-fixed text-on-primary-fixed',
  surface: 'bg-surface-container-highest text-primary',
} as const;

export function AuroraPage() {
  const { toast, showToast } = useToast();

  return (
    <>
      {/* Ficha del cuaderno de campo */}
      <section className="flex flex-col gap-space-sm bg-surface-container-low px-margin pb-space-lg pt-space-md">
        <div className="flex items-center justify-between">
          <Badge variant="primary">
            <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-secondary" />
            {aurora.cuaderno}
          </Badge>
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
            {aurora.ficha}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile tracking-tight text-primary">
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
              className="flex flex-col rounded bg-surface-container-lowest p-2.5 shadow-sm"
            >
              <span className="font-label-sm text-label-sm uppercase text-outline">
                {stat.label}
              </span>
              <span className="font-label-md text-label-md font-semibold text-primary">
                {stat.value}
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                {stat.note}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Lámina ilustrada del territorio */}
      <section className="px-margin py-space-md">
        <div className="relative overflow-hidden rounded bg-surface-container-high shadow-sm">
          <img
            className="h-56 w-full object-cover"
            src={aurora.ilustracion.src}
            alt={aurora.ilustracion.alt}
            loading="lazy"
          />
          <div className="flex items-center justify-between gap-space-sm bg-surface-container-lowest p-space-sm">
            <div className="flex min-w-0 items-center gap-2">
              <Icon name="draw" size={20} className="flex-shrink-0 text-secondary" />
              <p className="truncate font-label-sm text-label-sm text-on-surface">
                {aurora.ilustracion.caption}
              </p>
            </div>
            <button
              type="button"
              onClick={() =>
                showToast('Lámina etnográfica ampliada a máxima resolución', 'palette')
              }
              aria-label="Ampliar ilustración de campo"
              className="rounded bg-surface-container-low p-1.5 text-primary transition-colors hover:bg-surface-container"
            >
              <Icon name="zoom_in" size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Crónica central */}
      <article className="flex flex-col gap-space-md px-margin py-space-sm">
        <div className="flex items-center gap-space-xs text-secondary">
          <Icon name="menu_book" size={16} />
          <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider">
            {aurora.cronica.kicker}
          </span>
        </div>
        <h3 className="font-headline-md text-headline-md leading-tight text-primary">
          {aurora.cronica.title}
        </h3>
        <div className="flex flex-col gap-space-sm font-body-md text-body-md text-on-surface">
          <p>
            <span className="float-left pr-3 pt-1 font-display text-display-lg leading-none text-secondary">
              {aurora.cronica.lead.charAt(0)}
            </span>
            {aurora.cronica.lead.slice(1)}
          </p>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            {aurora.cronica.secondary}
          </p>
        </div>

        {/* Relato sonoro */}
        <div className="flex flex-col gap-space-sm rounded bg-surface-container-low p-space-md shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary-fixed text-on-secondary-fixed">
                <Icon name="graphic_eq" size={18} />
              </span>
              <div className="flex flex-col">
                <span className="font-label-md text-label-md font-semibold text-primary">
                  {aurora.audio.title}
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  {aurora.audio.meta}
                </span>
              </div>
            </div>
            <span className="rounded bg-surface-container px-2 py-0.5 font-label-sm text-label-sm text-primary">
              {aurora.audio.chip}
            </span>
          </div>
          <AudioPlayer
            title={aurora.audio.title}
            src={aurora.audio.src}
            avatarIcon={aurora.audio.avatarIcon}
          />
          <p className="font-body-sm text-body-sm italic text-on-surface-variant">
            {aurora.audio.excerpt}
          </p>
        </div>
      </article>

      {/* Testimonio destacado */}
      <section className="px-margin my-space-md">
        <div className="relative overflow-hidden rounded bg-surface-container-high p-space-lg">
          <Icon
            name="format_quote"
            size={64}
            className="pointer-events-none absolute -bottom-2 -right-2 select-none text-secondary/20"
          />
          <div className="relative z-10 flex flex-col gap-space-sm">
            <span className="font-label-sm text-label-sm font-semibold uppercase tracking-widest text-secondary">
              {aurora.testimonial.kicker}
            </span>
            <blockquote className="font-quote-lg text-quote-lg italic leading-relaxed text-primary">
              {aurora.testimonial.quote}
            </blockquote>
            <div className="flex items-center gap-space-sm pt-space-xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-display text-[18px] text-on-secondary">
                {aurora.testimonial.initials}
              </div>
              <div className="flex flex-col">
                <cite className="font-label-md text-label-md font-semibold not-italic text-primary">
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

      {/* Fuentes hídricas */}
      <section className="flex flex-col gap-space-md px-margin py-space-sm">
        <div className="flex items-center gap-space-xs text-primary">
          <Icon name="water_drop" size={18} className="text-tertiary-container" />
          <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider">
            {aurora.agua.kicker}
          </span>
        </div>
        <div className="flex flex-col gap-space-sm rounded bg-tertiary-container p-space-md shadow-sm">
          <div className="flex items-center justify-between">
            <h4 className="font-headline-sm text-headline-sm text-tertiary-fixed">
              {aurora.agua.title}
            </h4>
            <span className="rounded bg-surface-container-lowest/15 px-2 py-0.5 font-label-sm text-label-sm text-tertiary-fixed">
              {aurora.agua.chip}
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-surface-container-highest">
            {aurora.agua.description}
          </p>
          <div className="grid grid-cols-2 gap-space-xs pt-1">
            {aurora.agua.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col rounded bg-tertiary p-2">
                <span className="font-label-sm text-label-sm text-tertiary-fixed-dim">
                  {stat.label}
                </span>
                <span className="font-label-md text-label-md font-semibold text-white">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cartografía participativa */}
      <section className="flex flex-col gap-space-sm px-margin py-space-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs text-secondary">
            <Icon name="explore" size={18} />
            <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider">
              {aurora.cartografia.kicker}
            </span>
          </div>
          <span className="font-label-sm text-label-sm text-outline">
            {aurora.cartografia.trailing}
          </span>
        </div>

        <div
          className="relative flex h-48 w-full flex-col justify-end overflow-hidden rounded bg-surface-container-high bg-cover bg-center p-3 shadow-sm"
          style={{ backgroundImage: `url(${aurora.cartografia.mapSrc})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
          <div className="relative z-10 flex items-center justify-between text-on-primary">
            <div className="flex items-center gap-1.5">
              <Icon name="pin_drop" size={18} className="text-secondary-fixed" />
              <span className="font-label-md text-label-md font-semibold">
                {aurora.cartografia.sector}
              </span>
            </div>
            <span className="rounded bg-primary/90 px-2 py-0.5 font-label-sm text-label-sm text-primary-fixed">
              GPS Activo
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-space-xs pt-space-xs">
          {aurora.cartografia.hitos.map((hito, index) => (
            <div
              key={hito.title}
              className="flex items-start gap-space-sm rounded bg-surface-container-low p-space-sm"
            >
              <span
                className={`mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full font-label-sm text-label-sm font-bold ${hitoAccentClasses[hito.accent]}`}
              >
                {index + 1}
              </span>
              <div className="flex min-w-0 flex-col">
                <h5 className="font-label-md text-label-md font-semibold text-primary">
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

      {/* Archivo visual */}
      <section className="flex flex-col gap-space-sm px-margin py-space-sm">
        <div className="flex items-center justify-between">
          <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-outline">
            {aurora.fotos.kicker}
          </span>
          <button
            type="button"
            onClick={() => showToast(aurora.fotos.collectionMessage, 'photo_library')}
            className="font-label-sm text-label-sm font-semibold text-secondary hover:underline"
          >
            Ver colección ({aurora.fotos.total})
          </button>
        </div>
        <div className="grid grid-cols-2 gap-space-sm">
          {aurora.fotos.items.map((foto) => (
            <div
              key={foto.caption}
              className="flex flex-col gap-1.5 rounded-lg bg-surface-container-low p-2 shadow-sm"
            >
              <img
                className="h-28 w-full rounded object-cover"
                src={foto.src}
                alt={foto.alt}
                loading="lazy"
              />
              <span className="truncate font-label-sm text-label-sm font-semibold text-primary">
                {foto.caption}
              </span>
              <span className="font-label-sm text-label-sm text-outline">
                {foto.registro} • {foto.coleccion}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Descarga y siguiente cuaderno */}
      <section className="flex flex-col gap-space-md px-margin pb-space-lg pt-space-md">
        <button
          type="button"
          onClick={() => showToast(aurora.descarga.toast, 'download_for_offline')}
          className="flex h-11 w-full items-center justify-center gap-space-xs rounded bg-primary font-label-md text-label-md uppercase tracking-wider text-on-primary shadow transition-all hover:bg-primary-container active:scale-[0.99]"
        >
          <Icon name="download_for_offline" size={18} />
          <span>{aurora.descarga.label}</span>
        </button>

        <Link
          to={aurora.siguiente.href}
          className="flex items-center justify-between gap-space-sm rounded bg-surface-container p-space-md transition-colors hover:bg-surface-container-high"
        >
          <div className="flex min-w-0 flex-col">
            <span className="font-label-sm text-label-sm font-semibold uppercase text-secondary">
              {aurora.siguiente.kicker}
            </span>
            <h4 className="truncate font-headline-sm text-headline-sm text-primary">
              {aurora.siguiente.title}
            </h4>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              {aurora.siguiente.subtitle}
            </span>
          </div>
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-surface-container-lowest text-primary shadow-sm">
            <Icon name="arrow_forward" size={20} />
          </div>
        </Link>
      </section>

      <Toast toast={toast} />
    </>
  );
}
