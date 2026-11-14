import { EmailIcon, WebIcon } from '@/components/ui/ContactIcons';
import type { ContactoPersona } from '@/data/contacto';

type ContactCardProps = {
  persona: ContactoPersona;
};

export function ContactCard({ persona }: ContactCardProps) {
  return (
    <div className="flex flex-col gap-space-sm rounded-xl bg-surface-container-low p-space-md">
      <div className="flex flex-col gap-0.5">
        <span className="font-label-md text-label-md font-semibold text-on-surface">
          {persona.nombre}
        </span>
        <span className="font-label-sm text-label-sm text-on-surface-variant">{persona.rol}</span>
      </div>
      <div className="flex gap-space-xs pt-1">
        <a
          href={`mailto:${persona.email}`}
          aria-label={`Enviar correo a ${persona.nombre}`}
          title={`Enviar correo a ${persona.nombre}`}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-on-primary transition-transform active:scale-95"
        >
          <EmailIcon className="h-4.5 w-4.5" />
        </a>
        {persona.sitio && (
          <a
            href={persona.sitio.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Página web de ${persona.nombre}: ${persona.sitio.label}`}
            title={`Página web de ${persona.nombre}: ${persona.sitio.label}`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-primary text-primary transition-colors hover:bg-primary-container"
          >
            <WebIcon className="h-4.5 w-4.5" />
          </a>
        )}
      </div>
    </div>
  );
}
