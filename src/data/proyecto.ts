export type ProyectoStat = {
  value: string | number;
  label: string;
  colorClass?: string;
};

export type ProyectoAudio = {
  sectionLabel: string;
  audioNumber: string;
  title: string;
  subtitle: string;
  avatarInitials: string;
  src?: string;
  transcript?: string;
};

/*
 * NOTA: las imágenes apuntan temporalmente a los placeholders del
 * prototipo (Stitch). Se reemplazarán por las fotos reales del proyecto
 * en la fase de assets.
 */
export const proyecto = {
  title: 'Historias de Ruralidad: Voces, Aguas y Montañas',
  description:
    'Investigación etnográfica y cartografía social participativa para salvaguardar la memoria viva, los caminos de herradura y los saberes campesinos de El Carmen de Viboral.',
  meta: {
    tomo: 'Tomo I • Cuenca Oriental',
    lugar: 'Antioquia, 2024',
  },
  hero: {
    chip: 'Dibujo participativo',
    quote:
      '“El paisaje no es solo tierra que se labra: es la memoria de quienes abrieron zanja, sembraron agua y tejieron el camino.”',
    caption: 'Ilustración cartográfica colectiva • Memorias del paisaje y linajes rurales',
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuFsn8X5geUS6wErQVRLyXUmgoRmKpJAfoIGqrdiWDqz-PqvncF-sbRUZx9sOAhBpQEAh4hfZSVv0wTzeZsgPn6KDJNPR76WlrATTR5UCSVwZvFv-tgxjlg_jllQwAMTvtdYxzruBTtBbJ5Tx2U_J-tv9HJIS5Wtg6m6YAc1agUKDKg_JTNQHltC0gx8SONOqgzWQzjbqCuUo76-VnkuZjTDgbwRzyhWzXCztxgvdwbK4o5ptduAA',
      alt: 'Ilustración comunitaria de montañas, familias y senderos campesinos en El Carmen de Viboral',
    },
  },
  territorio: {
    title: 'El Territorio Investigado',
    description:
      'A través de mingas de memoria, caminatas etnográficas y entrevistas a profundidad, el proyecto mapea las fuentes hídricas sagradas, las toponimias olvidadas y los antiguos oficios del barro y la siembra en la cordillera carmelitana.',
    stats: [
      { value: 2, label: 'Veredas Piloto', colorClass: 'text-primary' },
      { value: 48, label: 'Relatos Orales', colorClass: 'text-secondary' },
      { value: 12, label: 'Nacimientos Mapeados', colorClass: 'text-primary-container' },
    ] satisfies ProyectoStat[],
  },
  veredasSection: {
    kicker: 'Etnografía Territorial',
    title: 'Veredas en Custodia',
    trailing: '2 Cuadernos',
  },
  audio: {
    sectionLabel: 'Archivo Fonográfico de la Memoria',
    audioNumber: 'Audio 08',
    title: 'Doña Rosalba relata el camino real',
    subtitle: 'Portadora de tradición oral • Vereda La Aurora',
    avatarInitials: 'RC',
    src: undefined,
    transcript:
      '“Cuando yo estaba chiquita, no había carretera. Para bajar al pueblo a llevar la leche y los plátanos nos tocaba a pie descalzo hasta El Chuscal. Mi abuelo decía que el agua de la quebrada se saludaba con respeto, porque si uno la ensuciaba, la montaña se enojaba y secaba los pozos...”',
  } satisfies ProyectoAudio,
  mapa: {
    kicker: 'Georreferenciación',
    title: 'Mapa Comunitario Interactivo',
    capa: 'Caminos de herradura y aljibes',
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbnTMFjrnhPfJyulAaw4SKOnNhjlwahkpm6XqsehtGYgcEm4kbZAtniq2xYS3UpVlEVTGu84RvA99Rv6LeK0HyXAaLs8_KYdH7yiIFddY2QeqiUphL9eyQnZYYnx9XC8GXF0rlpym4Wu-P-cNQFhtamrZnEDRpSbQLGb9SLjdnYhtd_F-eA6-XkybYPfOIesqgGKyhdsF9aIKseD5pdeHJpx_Q5dol1p137oIy9w',
      alt: 'Mapa comunitario de El Carmen de Viboral, Antioquia, Colombia',
    },
  },
  cta: {
    badge: 'Archivo Abierto',
    title: '¿Guarda usted una historia, copla o fotografía antigua?',
    description:
      'Este archivo lo construyen las familias campesinas. Sume su recuerdo al censo testimonial de El Carmen de Viboral para que las futuras generaciones conozcan su raíz.',
    contributeLabel: 'Aportar al archivo familiar',
    contributeMessage: 'El formulario de aportes estará disponible próximamente',
    contactLabel: 'Contactar al equipo',
    contactMessage: 'El canal de contacto estará disponible próximamente',
  },
  footer: {
    entity: 'Alcaldía de El Carmen de Viboral • Secretaría de Cultura',
    description:
      'Proyecto concertado de patrimonio inmaterial y memorias campesinas del Oriente Antioqueño.',
  },
} as const;
