import { contacto } from '@/data/contacto';
import { proyecto } from '@/data/proyecto';
import { ContactCard } from '@/components/ui/ContactCard';
import { Badge } from '@/components/ui/Badge';

export function ContactoPage() {
  return (
    <>
      <section className="flex flex-col items-center gap-space-sm px-margin pb-space-lg pt-space-xl text-center">
        <Badge variant="primary" className="self-center">
          Contacto
        </Badge>
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile max-w-md text-primary">
          {proyecto.nombre}
        </h2>
        <p className="max-w-md font-body-md text-body-md leading-relaxed text-on-surface-variant">
          {contacto.description}
        </p>
      </section>

      <section className="mx-auto w-full max-w-md px-margin pb-space-xl">
        <div className="flex flex-col gap-space-sm">
          {contacto.personas.map((persona) => (
            <ContactCard key={persona.nombre} persona={persona} />
          ))}
        </div>
      </section>

      <footer className="flex flex-col items-center gap-1 px-margin pb-space-xl text-center">
        <div className="mb-1 h-0.5 w-10 rounded bg-surface-container-highest" />
        <p className="font-label-sm text-label-sm text-on-surface-variant">
          Creadora del proyecto: {contacto.personas[0]?.nombre} • Desarrollo web:{' '}
          {contacto.personas[1]?.nombre}
        </p>
        <p className="font-label-sm text-label-sm text-outline">
          © {new Date().getFullYear()} {proyecto.nombre}
        </p>
      </footer>
    </>
  );
}
