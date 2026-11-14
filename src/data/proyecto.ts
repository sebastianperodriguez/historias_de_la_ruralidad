import { revista } from '@/data/revista';

export type ProyectoStat = {
  value: string | number;
  label: string;
};

export const proyecto = {
  nombre: 'Historias de la Ruralidad Carmelitana',
  titulo: 'La Aurora',
  subtitulo: 'Memorias de una vereda construida en comunidad',
  descripcion:
    'Investigación, memoria oral y cartografía social de la vereda La Aurora de El Carmen de Viboral, tejidas en comunidad para conservar los gestos que nos pertenecen.',
  cita: '«Saber valorar la historia que aún tenemos viva, debería ser consigna de una sociedad presente, con conciencia histórica y patrimonial como la nuestra.»',
  citaFuente: 'La Aurora: memorias de una vereda construida en comunidad',
  hero: {
    image: {
      alt: 'Portada de la revista La Aurora: ilustración en tinta de la vereda con familias campesinas y flores',
    },
  },
  stats: [
    { value: 4, label: 'Entrevistas' },
    { value: 4, label: 'Talleres' },
    { value: revista.capitulos.length, label: 'Capítulos' },
  ] satisfies ProyectoStat[],
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
    },
    suite: {
      kicker: 'Banda Sonora',
      title: 'Suite para la Aurora',
      description:
        'Composición musical del proyecto audiovisual: tres piezas para acompañar la memoria de la vereda.',
      cta: 'Escuchar la suite',
    },
    veredas: {
      kicker: 'Archivo Vivo Comunitario',
      title: 'Cuadernos de Campo',
      trailing: '1 Cuaderno',
    },
  },
  cta: {
    badge: 'Archivo Abierto',
    title: '¿Cuántos sueños comparte con su humanidad vecina?',
    description:
      '“Las luchas todavía no terminan para esta comunidad [...] aún se lucha por nuevos sueños imposibles”. Si guarda historias, fotografías o recuerdos de la vereda La Aurora, súmalos a este archivo vivo.',
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
