import { Link } from 'react-router-dom';
import { veredas } from '@/data/veredas';
import { proyecto } from '@/data/proyecto';
import { SuitePlayer } from '@/components/media/SuitePlayer';
import { Badge } from '@/components/ui/Badge';
import { FooterEditorial } from '@/components/ui/FooterEditorial';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { StatCard } from '@/components/ui/StatCard';
import { Toast } from '@/components/ui/Toast';
import { useToast } from '@/hooks/useToast';
import { VeredaCard } from '@/components/ui/VeredaCard';

export function HomePage() {
  const { toast, showToast } = useToast();

  return (
    <>
      {/* Portada del proyecto */}
      <section className="flex flex-col gap-space-sm px-margin pb-space-lg pt-space-md">
        <Badge variant="primary" className="self-start">
          {proyecto.nombre}
        </Badge>
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary">
          Memorias de la ruralidad carmelitana
        </h2>
        <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
          {proyecto.descripcion}
        </p>
        <div className="flex items-center gap-space-md pt-space-xs text-on-surface-variant">
          <span className="font-label-md text-label-md text-primary">El Carmen de Viboral</span>
          <span className="text-outline">•</span>
          <span className="font-label-md text-label-md">Antioquia, Colombia</span>
        </div>
      </section>

      {/* Ilustración del proyecto */}
      <section className="px-margin pb-space-xl">
        <div className="overflow-hidden rounded-xl bg-surface-container-lowest shadow-md">
          <img
            className="w-full object-cover"
            src={proyecto.hero.image.src}
            alt={proyecto.hero.image.alt}
          />
          <div className="bg-surface-container-low p-space-md">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
              {proyecto.hero.image.pie}
            </span>
          </div>
        </div>
      </section>

      {/* El proyecto */}
      <section className="px-margin pb-space-xl">
        <div className="flex flex-col gap-space-md rounded-xl bg-surface-container p-space-md">
          <div className="flex items-center gap-space-xs text-primary">
            <h3 className="font-headline-sm text-headline-sm">El proyecto</h3>
          </div>
          <p className="font-body-md text-body-md leading-relaxed text-on-surface">
            {proyecto.metodologia}
          </p>
          <div className="grid grid-cols-3 gap-space-xs">
            {proyecto.stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Tarjetas de acceso */}
      <section className="flex flex-col gap-space-md px-margin pb-space-xl">
        <SectionHeader kicker={proyecto.accesos.kicker} title={proyecto.accesos.title} />
        {proyecto.accesos.cards.map((card) => (
          <Link
            key={card.title}
            to={card.href}
            className="flex items-stretch gap-space-sm overflow-hidden rounded-xl bg-surface-container-lowest p-2 shadow-sm transition-colors hover:bg-surface-container"
          >
            <img
              src={card.image.src}
              alt={card.image.alt}
              loading="lazy"
              className="h-24 w-28 flex-shrink-0 rounded-lg object-cover"
            />
            <div className="flex min-w-0 flex-col justify-center gap-0.5">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">
                {card.kicker}
              </span>
              <span className="font-label-md text-label-md font-semibold text-on-surface">
                {card.title}
              </span>
              <span className="line-clamp-2 font-body-sm text-body-sm text-on-surface-variant">
                {card.description}
              </span>
              <span className="font-label-sm text-label-sm font-semibold text-primary">
                {card.cta} ›
              </span>
            </div>
          </Link>
        ))}
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
        <SuitePlayer />
      </section>

      {/* Documental */}
      <section className="px-margin pb-space-xl">
        <div className="overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm">
          <img
            src={proyecto.secciones.documental.image.src}
            alt={proyecto.secciones.documental.image.alt}
            loading="lazy"
            className="h-40 w-full object-cover"
          />
          <div className="flex flex-col gap-space-sm p-space-md">
            <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-primary">
              {proyecto.secciones.documental.kicker}
            </span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">
              {proyecto.secciones.documental.title}
            </h3>
            <p className="font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
              {proyecto.secciones.documental.description}
            </p>
            <Link
              to="/documental"
              className="flex h-11 items-center justify-center rounded-full bg-primary font-label-md text-label-md font-semibold text-on-primary shadow transition-transform active:scale-95"
            >
              {proyecto.secciones.documental.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* La investigadora */}
      <section className="px-margin pb-space-xl">
        <div className="flex flex-col gap-space-sm rounded-xl border border-primary/30 bg-primary-container/40 p-space-md">
          <span className="font-label-sm text-label-sm font-semibold uppercase tracking-widest text-primary">
            {proyecto.investigadora.kicker}
          </span>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">
            {proyecto.investigadora.nombre}
          </h3>
          <p className="font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
            {proyecto.investigadora.bio}
          </p>
          <Link
            to="/revista"
            className="self-start font-label-md text-label-md font-semibold text-primary hover:underline"
          >
            {proyecto.investigadora.enRevista} ›
          </Link>
        </div>
      </section>

      {/* Llamado comunitario */}
      <section id={proyecto.cta.id} className="scroll-mt-24 px-margin pb-space-xl">
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
              onClick={() => showToast(proyecto.cta.contributeMessage)}
              className="flex h-11 items-center justify-center rounded-full bg-surface font-label-md text-label-md font-semibold text-primary shadow transition-transform active:scale-95"
            >
              <span>{proyecto.cta.contributeLabel}</span>
            </button>
            <button
              type="button"
              onClick={() => showToast(proyecto.cta.contactMessage)}
              className="flex h-11 items-center justify-center rounded-full border border-on-primary/40 font-label-md text-label-md text-on-primary transition-colors hover:bg-on-primary/10"
            >
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
