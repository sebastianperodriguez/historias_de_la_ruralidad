import { Link } from 'react-router-dom';
import { contacto } from '@/data/contacto';
import { proyecto } from '@/data/proyecto';
import { Badge } from '@/components/ui/Badge';
import { FooterEditorial } from '@/components/ui/FooterEditorial';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Toast } from '@/components/ui/Toast';
import { useToast } from '@/hooks/useToast';

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

      {/* Imagen de portada */}
      <section className="px-margin pb-space-xl">
        <figure className="mx-auto w-full max-w-xl overflow-hidden rounded-xl bg-surface-container-lowest shadow-md">
          <img
            className="aspect-[4/3] w-full object-cover"
            src={proyecto.hero.image.src}
            alt={proyecto.hero.image.alt}
          />
        </figure>
      </section>

      {/* Primeros pasos */}
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
          <div className="flex flex-col gap-space-sm pt-space-xs sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={() => showToast(proyecto.cta.contributeMessage)}
              className="flex h-12 w-full items-center justify-center rounded-full bg-surface px-6 font-label-md text-label-md font-semibold text-primary shadow transition-transform active:scale-95 sm:w-auto sm:min-w-56"
            >
              <span>{proyecto.cta.contributeLabel}</span>
            </button>
            <Link
              to="/#contacto"
              className="flex h-12 w-full items-center justify-center rounded-full border border-on-primary/40 px-6 font-label-md text-label-md text-on-primary transition-colors hover:bg-on-primary/10 sm:w-auto sm:min-w-56"
            >
              <span>{proyecto.cta.contactLabel}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="scroll-mt-24 px-margin pb-space-xl">
        <div className="flex flex-col gap-space-md rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
          <div className="flex flex-col gap-1">
            <span className="font-label-sm text-label-sm font-semibold uppercase tracking-widest text-primary">
              {contacto.kicker}
            </span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">{contacto.title}</h3>
            <p className="font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
              {contacto.description}
            </p>
          </div>
          <div className="grid gap-space-sm sm:grid-cols-2">
            {contacto.personas.map((persona) => (
              <div
                key={persona.nombre}
                className="flex flex-col gap-space-sm rounded-xl bg-surface-container-low p-space-md"
              >
                <div className="flex flex-col gap-0.5">
                  <span className="font-label-md text-label-md font-semibold text-on-surface">
                    {persona.nombre}
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    {persona.rol}
                  </span>
                </div>
                <div className="flex flex-wrap gap-space-xs pt-1">
                  <a
                    href={`mailto:${persona.email}`}
                    className="rounded-full bg-primary px-3.5 py-1.5 font-label-md text-label-md font-semibold text-on-primary transition-transform active:scale-95"
                  >
                    Correo
                  </a>
                  {persona.sitio && (
                    <a
                      href={persona.sitio.url}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-primary px-3.5 py-1.5 font-label-md text-label-md font-semibold text-primary transition-colors hover:bg-primary-container"
                    >
                      Página web
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterEditorial entity={proyecto.footer.entity} description={proyecto.footer.description} />

      <Toast toast={toast} />
    </>
  );
}
