import ilustracionHeroUrl from '@/assets/proyecto/ilustracion-hero.webp';
import tallerFotobordadoUrl from '@/assets/proyecto/taller-fotobordado.webp';
import tallerDetalleUrl from '@/assets/proyecto/taller-detalle.webp';
import veredaPaisajeUrl from '@/assets/proyecto/vereda-paisaje.webp';
import documentalPaisajeUrl from '@/assets/proyecto/documental-paisaje.webp';
import { revista } from '@/data/revista';

export type ProyectoStat = {
  value: string | number;
  label: string;
};

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
  titulo: 'La Aurora',
  subtitulo: 'Memorias de una vereda construida en comunidad',
  descripcion:
    'Archivo vivo comunitario que recoge, desde la memoria oral y la cartografía social, los saberes y los gestos de la ruralidad de El Carmen de Viboral, Antioquia. Cada vereda es un cuaderno de campo; La Aurora es la primera publicación de la serie.',
  metodologia:
    'Todas las metodologías del proyecto se construyen sobre la base de la fuente oral: cartografía social, entrevistas, grupos de discusión, consulta documental y talleres en ambientes de confianza con técnicas como fotobordado, collage y juegos lúdicos.',
  hero: {
    image: {
      src: ilustracionHeroUrl,
      alt: 'Ilustración de Viviana Serna: familias campesinas sobre un mosaico de cultivos y montañas andinas',
      pie: 'Ilustración de Viviana Serna Arbeláez — obra del proyecto',
    },
  },
  stats: [
    { value: 4, label: 'Entrevistas' },
    { value: 4, label: 'Talleres' },
    { value: revista.totalPaginas, label: 'Páginas' },
  ] satisfies ProyectoStat[],
  investigadora: {
    kicker: 'La Investigadora',
    nombre: 'Daniela Zuluaga Toro',
    bio: 'Creadora e investigadora del proyecto. Su trabajo une la fuente oral, la cartografía social y los talleres de memoria con la comunidad de la vereda La Aurora, y firma la investigación, la edición y parte del registro fotográfico de la primera publicación.',
    enRevista: 'Conoce su trabajo en la revista',
  },
  accesos: {
    kicker: 'Primeros Pasos',
    title: 'Comienza por aquí',
    cards: [
      {
        kicker: 'Revista La Aurora',
        title: 'La publicación completa',
        description: `${revista.totalPaginas} páginas de memoria oral, fotografía e ilustración.`,
        cta: 'Abrir la revista',
        href: '/revista',
        image: {
          src: veredaPaisajeUrl,
          alt: 'Paisaje de cultivos en ladera de El Carmen de Viboral',
        },
      },
      {
        kicker: 'Talleres de memoria',
        title: 'El fotobordado',
        description: 'La comunidad bordó sus recuerdos sobre las fotografías de la vereda.',
        cta: 'Ver la revista',
        href: '/revista',
        image: { src: tallerFotobordadoUrl, alt: 'Taller de fotobordado con mujeres campesinas' },
      },
      {
        kicker: 'Historias de La Aurora',
        title: 'El origen del nombre',
        description: 'De un letrero colgado en una casa azul nació el nombre de la vereda.',
        cta: 'Leer la historia',
        href: '/la-aurora',
        image: {
          src: tallerDetalleUrl,
          alt: 'Detalle de un fotobordado bordado sobre una fotografía',
        },
      },
    ] satisfies AccesoCard[],
  },
  secciones: {
    revista: {
      kicker: 'La Publicación',
      title: 'Revista La Aurora',
      description: `${revista.totalPaginas} páginas de memoria oral, fotografía e ilustración, con la vereda como protagonista.`,
      cta: 'Abrir la revista',
    },
    documental: {
      kicker: 'Proyecto Audiovisual',
      title: 'El Documental',
      description:
        'El registro audiovisual del proyecto, con tomas aéreas de Fabián Rendón Morales y la Suite para la Aurora de Sebastián Pérez Rodríguez.',
      cta: 'Ver documental',
      youtubeUrl: 'https://www.youtube.com/watch?v=b9piVmaFnns',
      youtubeEmbedUrl: 'https://www.youtube.com/embed/b9piVmaFnns',
      image: { src: documentalPaisajeUrl, alt: 'Atardecer sobre el valle de El Carmen de Viboral' },
    },
    suite: {
      kicker: 'Banda Sonora',
      title: 'Suite para la Aurora',
      description:
        'Composición musical del proyecto audiovisual: tres piezas para acompañar la memoria de la vereda.',
      cta: 'Escuchar la suite',
    },
    veredas: {
      kicker: 'Cuadernos de Campo',
      title: 'Las Veredas del Archivo',
      trailing: '1 Cuaderno',
    },
  },
  cta: {
    id: 'contacto',
    badge: 'Archivo Abierto',
    title: '¿Cuántos sueños comparte con su humanidad vecina?',
    description:
      '“Las luchas todavía no terminan para esta comunidad [...] aún se lucha por nuevos sueños imposibles”. Si guarda historias, fotografías o recuerdos de las veredas carmelitanas, súmalos a este archivo vivo.',
    contributeLabel: 'Aportar al archivo familiar',
    contributeMessage: 'El formulario de aportes estará disponible próximamente',
    contactLabel: 'Contactar al equipo',
    contactMessage: 'El canal de contacto estará disponible próximamente',
  },
  footer: {
    entity: 'Alcaldía de El Carmen de Viboral • Instituto de Cultura',
    description:
      'Proyecto apoyado por el Programa Municipal de Estímulos del Instituto de Cultura El Carmen de Viboral, 2026.',
  },
} as const;
