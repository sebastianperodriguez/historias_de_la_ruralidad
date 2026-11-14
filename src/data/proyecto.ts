import tallerDetalleUrl from '@/assets/proyecto/taller-detalle.webp';
import veredaPaisajeUrl from '@/assets/proyecto/vereda-paisaje.webp';
import ilustracionHeroUrl from '@/assets/proyecto/ilustracion-hero.webp';
import { revista } from '@/data/revista';

export type AccesoCard = {
  kicker: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  image: { src: string; alt: string };
};

export const proyecto = {
  nombre: 'Historias de la Ruralidad Carmelitana',
  descripcion:
    'Archivo vivo comunitario que recoge, desde la memoria oral y la cartografía social, los saberes y los gestos de la ruralidad de El Carmen de Viboral, Antioquia. Cada vereda es un cuaderno de campo; La Aurora es la primera publicación de la serie.',
  hero: {
    image: {
      src: ilustracionHeroUrl,
      alt: 'Ilustración de Viviana Serna: familias campesinas sobre un mosaico de cultivos y montañas andinas',
    },
  },
  accesos: {
    kicker: 'Primeros Pasos',
    title: 'Comienza por aquí',
    cards: [
      {
        kicker: 'Revista La Aurora',
        title: 'La publicación completa',
        description: `${revista.totalPaginas} páginas de memoria oral, fotografía e ilustración.`,
        cta: 'Abrir La Aurora',
        href: '/la-aurora',
        image: {
          src: veredaPaisajeUrl,
          alt: 'Paisaje de cultivos en ladera de El Carmen de Viboral',
        },
      },
      {
        kicker: 'Talleres de memoria',
        title: 'El fotobordado',
        description: 'La comunidad bordó sus recuerdos sobre las fotografías de la vereda.',
        cta: 'Ver La Aurora',
        href: '/la-aurora',
        image: {
          src: tallerDetalleUrl,
          alt: 'Detalle de un fotobordado bordado sobre una fotografía',
        },
      },
    ] satisfies AccesoCard[],
  },
  cta: {
    id: 'contacto-cta',
    badge: 'Archivo Abierto',
    title: '¿Cuántos sueños comparte con su humanidad vecina?',
    description:
      '“Las luchas todavía no terminan para esta comunidad [...] aún se lucha por nuevos sueños imposibles”. Si guarda historias, fotografías o recuerdos de las veredas carmelitanas, súmalos a este archivo vivo.',
    contributeLabel: 'Aportar al archivo familiar',
    contributeMessage: 'El formulario de aportes estará disponible próximamente',
    contactLabel: 'Contactar al equipo',
  },
  footer: {
    entity: 'Alcaldía de El Carmen de Viboral • Instituto de Cultura',
    description:
      'Proyecto apoyado por el Programa Municipal de Estímulos del Instituto de Cultura El Carmen de Viboral, 2026.',
  },
} as const;
