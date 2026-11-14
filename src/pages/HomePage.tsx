import { Link } from 'react-router-dom';
import { veredas } from '@/data/veredas';
import { proyecto } from '@/data/proyecto';
import { revista } from '@/data/revista';
import { getRevistaPageUrl } from '@/lib/revista-pages';
import { SuitePlayer } from '@/components/media/SuitePlayer';
import { Badge } from '@/components/ui/Badge';
import { FooterEditorial } from '@/components/ui/FooterEditorial';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { StatCard } from '@/components/ui/StatCard';
import { Toast } from '@/components/ui/Toast';
import { useToast } from '@/hooks/useToast';
import { VeredaCard } from '@/components/ui/VeredaCard';

export function HomePage() {
  const { toast, showToast } = useToast();
  const heroImage = getRevistaPageUrl(1);

  return (
    <>
      {/* Portada */}
      <section className="flex flex-col gap-space-sm px-margin pb-space-lg pt-space-md">
        <Badge icon="history_edu" variant="primary" className="self-start">
          {proyecto.nombre}
        </Badge>
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary">
          {proyecto.titulo}
          <span className="mt-1 block font-headline-sm text-headline-sm font-normal text-on-surface-variant">
            {proyecto.subtitulo}
          </span>
        </h2>
        <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
          {proyecto.descripcion}
        </p>
        <div className="flex items-center gap-space-md pt-space-xs text-on-surface-variant">
          <span className="inline-flex items-center gap-1 font-label-md text-label-md text-primary">
            <Icon name="menu_book" size={16} />
            {revista.serie}
          </span>
          <span className="text-outline">•</span>
          <span className="font-label-md text-label-md">{revista.lugar}</span>
        </div>
      </section>

      {/* Ilustración de portada */}
      <section className="px-margin pb-space-xl">
        <div className="overflow-hidden rounded-xl bg-surface-container-lowest shadow-md">
          {heroImage && (
            <img className="w-full object-cover" src={heroImage} alt={proyecto.hero.image.alt} />
          )}
          <div className="flex flex-col gap-space-xs bg-surface-container-low p-space-md">
            <p className="font-quote-lg text-quote-lg italic leading-snug text-on-surface">
              {proyecto.cita}
            </p>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
              {proyecto.citaFuente}
            </span>
          </div>
        </div>
      </section>

      {/* El proyecto en cifras */}
      <section className="px-margin pb-space-xl">
        <div className="flex flex-col gap-space-md rounded-xl bg-surface-container p-space-md">
          <div className="flex items-center gap-space-xs text-primary">
            <Icon name="explore" size={20} />
            <h3 className="font-headline-sm text-headline-sm">El proyecto en cifras</h3>
          </div>
          <div className="grid grid-cols-3 gap-space-xs">
            {proyecto.stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Revista */}
      <section className="px-margin pb-space-xl">
        <SectionHeader
          kicker={proyecto.secciones.revista.kicker}
          title={proyecto.secciones.revista.title}
        />
        <Link
          to="/revista"
          className="group mt-space-sm flex items-center justify-between gap-space-sm rounded-xl bg-primary p-space-md shadow-md transition-colors hover:bg-on-primary-container"
        >
          <div className="flex min-w-0 flex-col gap-1">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-primary/80">
              {proyecto.secciones.revista.description}
            </span>
            <span className="font-headline-sm text-headline-sm text-on-primary">
              {proyecto.secciones.revista.cta}
            </span>
          </div>
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-on-primary/15 text-on-primary transition-transform group-hover:scale-105">
            <Icon name="auto_stories" size={20} />
          </div>
        </Link>
      </section>

      {/* Cuadernos de campo */}
      <section className="flex flex-col gap-space-md px-margin pb-space-xl">
        <SectionHeader
          kicker={proyecto.secciones.veredas.kicker}
          title={proyecto.secciones.veredas.title}
          trailing={proyecto.secciones.veredas.trailing}
        />
        {veredas.map((vereda) => (
          <VeredaCard key={vereda.slug} vereda={vereda} />
        ))}
      </section>

      {/* Banda sonora */}
      <section className="flex flex-col gap-space-md px-margin pb-space-xl">
        <SectionHeader
          kicker={proyecto.secciones.suite.kicker}
          title={proyecto.secciones.suite.title}
        />
        <SuitePlayer onMissingTrack={() => showToast(proyecto.secciones.suite.cta, 'music_note')} />
      </section>

      {/* Documental */}
      <section className="px-margin pb-space-xl">
        <div className="flex flex-col gap-space-sm rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
          <div className="flex items-center gap-space-xs text-primary">
            <Icon name="smart_display" size={18} />
            <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider">
              {proyecto.secciones.documental.kicker}
            </span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">
            {proyecto.secciones.documental.title}
          </h3>
          <p className="font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
            {proyecto.secciones.documental.description}
          </p>
          <Link
            to="/documental"
            className="flex h-11 items-center justify-center gap-space-xs rounded-full bg-primary font-label-md text-label-md text-on-primary shadow transition-transform active:scale-95"
          >
            <Icon name="play_arrow" size={18} />
            <span>{proyecto.secciones.documental.cta}</span>
          </Link>
        </div>
      </section>

      {/* Llamado comunitario */}
      <section className="px-margin pb-space-xl">
        <div className="relative flex flex-col gap-space-md overflow-hidden rounded-xl bg-primary p-space-lg shadow-md">
          <div className="pointer-events-none absolute -bottom-8 -right-8 h-36 w-36 rounded-full bg-secondary/25" />
          <Badge
            variant="primary"
            className="self-start bg-primary-container uppercase tracking-wider"
          >
            {proyecto.cta.badge}
          </Badge>
          <div className="flex flex-col gap-space-xs">
            <h3 className="font-headline-md text-headline-md leading-tight text-on-primary">
              {proyecto.cta.title}
            </h3>
            <p className="font-body-sm text-body-sm leading-relaxed text-on-primary/85">
              {proyecto.cta.description}
            </p>
          </div>
          <div className="flex flex-col gap-space-sm pt-space-xs sm:flex-row">
            <button
              type="button"
              onClick={() => showToast(proyecto.cta.contributeMessage, 'add_photo_alternate')}
              className="flex h-11 items-center justify-center gap-space-xs rounded-full bg-surface font-label-md text-label-md text-primary shadow transition-transform active:scale-95"
            >
              <Icon name="add_photo_alternate" size={18} />
              <span>{proyecto.cta.contributeLabel}</span>
            </button>
            <button
              type="button"
              onClick={() => showToast(proyecto.cta.contactMessage, 'contacts')}
              className="flex h-11 items-center justify-center gap-space-xs rounded-full border border-on-primary/40 font-label-md text-label-md text-on-primary transition-colors hover:bg-on-primary/10"
            >
              <Icon name="contacts" size={18} />
              <span>{proyecto.cta.contactLabel}</span>
            </button>
          </div>
        </div>
      </section>

      <FooterEditorial entity={proyecto.footer.entity} description={proyecto.footer.description} />

      <Toast toast={toast} />
    </>
  );
}
