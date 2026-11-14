import { veredas } from '@/data/veredas';
import { proyecto } from '@/data/proyecto';
import { AudioPlayer } from '@/components/media/AudioPlayer';
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

  return (
    <>
      {/* Cabecera editorial */}
      <section className="flex flex-col gap-space-sm px-margin pb-space-lg pt-space-md">
        <Badge icon="history_edu" className="self-start">
          Archivo Vivo Comunitario
        </Badge>
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile tracking-tight text-primary">
          {proyecto.title}
        </h2>
        <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
          {proyecto.description}
        </p>
        <div className="flex items-center gap-space-md pt-space-xs text-on-surface-variant">
          <span className="inline-flex items-center gap-1 font-label-md text-label-md text-secondary">
            <Icon name="menu_book" size={16} />
            {proyecto.meta.tomo}
          </span>
          <span className="text-surface-dim">•</span>
          <span className="font-label-md text-label-md">{proyecto.meta.lugar}</span>
        </div>
      </section>

      {/* Ilustración principal */}
      <section className="px-margin pb-space-xl">
        <div className="overflow-hidden rounded-xl bg-surface-container-lowest shadow-md">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container">
            <img
              className="h-full w-full object-cover"
              src={proyecto.hero.image.src}
              alt={proyecto.hero.image.alt}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded bg-surface/90 px-2.5 py-1 text-primary shadow-sm backdrop-blur-md">
              <Icon name="brush" size={14} className="text-secondary" />
              <span className="font-label-sm text-label-sm">{proyecto.hero.chip}</span>
            </div>
          </div>
          <div className="flex flex-col gap-space-xs bg-surface-container-low p-space-md">
            <p className="font-quote-lg text-quote-lg italic leading-snug text-primary">
              {proyecto.hero.quote}
            </p>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
              {proyecto.hero.caption}
            </span>
          </div>
        </div>
      </section>

      {/* Marco territorial */}
      <section className="px-margin pb-space-xl">
        <div className="flex flex-col gap-space-md rounded-xl bg-surface-container p-space-md">
          <div className="flex items-center gap-space-xs text-primary">
            <Icon name="explore" size={20} className="text-secondary" />
            <h3 className="font-headline-sm text-headline-sm">{proyecto.territorio.title}</h3>
          </div>
          <p className="font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
            {proyecto.territorio.description}
          </p>
          <div className="grid grid-cols-3 gap-space-xs pt-space-xs">
            {proyecto.territorio.stats.map((stat) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
                colorClass={stat.colorClass}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Veredas en custodia */}
      <section className="flex flex-col gap-space-md px-margin pb-space-xl">
        <SectionHeader
          kicker={proyecto.veredasSection.kicker}
          title={proyecto.veredasSection.title}
          trailing={proyecto.veredasSection.trailing}
        />
        {veredas.map((vereda) => (
          <VeredaCard key={vereda.slug} vereda={vereda} />
        ))}
      </section>

      {/* Testimonio sonoro destacado */}
      <section className="px-margin pb-space-xl">
        <div className="flex flex-col gap-space-sm rounded-xl bg-surface-container-high p-space-md shadow-sm">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1 font-label-sm text-label-sm uppercase tracking-wider text-secondary">
              <Icon name="graphic_eq" size={15} />
              {proyecto.audio.sectionLabel}
            </span>
            <span className="rounded bg-surface px-2 py-0.5 font-label-sm text-label-sm text-primary">
              {proyecto.audio.audioNumber}
            </span>
          </div>
          <AudioPlayer
            title={proyecto.audio.title}
            subtitle={proyecto.audio.subtitle}
            avatarInitials={proyecto.audio.avatarInitials}
            src={proyecto.audio.src}
            transcript={proyecto.audio.transcript}
          />
        </div>
      </section>

      {/* Mapa comunitario */}
      <section className="flex flex-col gap-space-sm px-margin pb-space-xl">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
              {proyecto.mapa.kicker}
            </span>
            <h3 className="font-headline-sm text-headline-sm text-primary">
              {proyecto.mapa.title}
            </h3>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded bg-surface-container-high text-primary">
            <Icon name="layers" size={18} />
          </div>
        </div>
        <div
          className="relative flex h-56 w-full items-end overflow-hidden rounded-xl p-space-md shadow-sm"
          style={{ backgroundImage: `url(${proyecto.mapa.image.src})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/20 to-transparent" />
          <div className="relative z-10 flex w-full items-center justify-between text-on-primary">
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed">
                Capa Activa
              </span>
              <span className="font-headline-sm text-headline-sm font-normal text-surface">
                {proyecto.mapa.capa}
              </span>
            </div>
            <button
              type="button"
              onClick={() => showToast('El mapa comunitario estará disponible próximamente', 'map')}
              className="flex items-center gap-1 rounded bg-surface/90 px-3 py-1.5 font-label-md text-label-md text-primary shadow backdrop-blur-sm transition-colors hover:bg-surface"
            >
              <Icon name="visibility" size={16} />
              Explorar
            </button>
          </div>
        </div>
      </section>

      {/* Llamado comunitario */}
      <section className="px-margin pb-space-xl">
        <div className="relative flex flex-col gap-space-md overflow-hidden rounded-xl bg-primary p-space-lg shadow-md">
          <div className="pointer-events-none absolute -bottom-8 -right-8 h-36 w-36 rounded-full bg-secondary/15" />
          <Badge
            variant="primary"
            className="self-start bg-primary-container text-on-primary uppercase tracking-wider"
          >
            {proyecto.cta.badge}
          </Badge>
          <div className="flex flex-col gap-space-xs">
            <h3 className="font-headline-md text-headline-md leading-tight text-surface">
              {proyecto.cta.title}
            </h3>
            <p className="font-body-sm text-body-sm leading-relaxed text-primary-fixed-dim">
              {proyecto.cta.description}
            </p>
          </div>
          <div className="flex flex-col gap-space-sm pt-space-xs sm:flex-row">
            <button
              type="button"
              onClick={() => showToast(proyecto.cta.contributeMessage, 'add_photo_alternate')}
              className="flex h-11 items-center justify-center gap-space-xs rounded bg-secondary font-label-md text-label-md text-on-secondary shadow transition-transform active:scale-95"
            >
              <Icon name="add_photo_alternate" size={18} />
              <span>{proyecto.cta.contributeLabel}</span>
            </button>
            <button
              type="button"
              onClick={() => showToast(proyecto.cta.contactMessage, 'contacts')}
              className="flex h-11 items-center justify-center gap-space-xs rounded bg-primary-container font-label-md text-label-md text-on-primary transition-colors hover:bg-primary-container/80"
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
