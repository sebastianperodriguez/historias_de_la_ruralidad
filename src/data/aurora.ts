export type AuroraFichaStat = {
  label: string;
  value: string;
  note: string;
};

export type AuroraHito = {
  title: string;
  description: string;
  accent: 'secondary' | 'primary' | 'surface';
};

export type AuroraFoto = {
  src: string;
  alt: string;
  caption: string;
  registro: string;
  coleccion: string;
};

/*
 * NOTA: las imágenes apuntan temporalmente a los placeholders del
 * prototipo (Stitch). Se reemplazarán por las fotos reales del proyecto
 * en la fase de assets.
 */
export const aurora = {
  cuaderno: 'Cuaderno de Campo No. 01',
  ficha: 'Ficha Etnográfica',
  subtitle: 'Memoria oral, cartografía del agua y labranza campesina en las lomas orientales.',
  fichaStats: [
    { label: 'Altitud', value: '2.150 msnm', note: 'Frío de ladera' },
    { label: 'Urbano', value: '8.4 km', note: 'Trocha y herradura' },
    { label: 'Familias', value: '142 predios', note: 'Censo comunitario' },
  ] satisfies AuroraFichaStat[],
  ilustracion: {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBZX6OGfCcqKrMRxKiNgtzgAg7xBNnEr8pJOaST8bQXkdVBNRzKzA5Z1xg6IuT8HUke5hukakt7-csFPu-Y-1lpAzJdVujJx_23LbZ8gYY0bU9IF8xp4EaZa0g5Kny5bRBs7AX3PZPCtPU7bQn89SRIoc1UsTubVVK4SERyvl4OsaIYnTIUcnw9rUAZtfxh_8ZjJBb7IogFE7S4z29ci8uGS1bdG-m0tGEQYWmiQ',
    alt: 'Ilustración de las lomas, terrazas de cultivo y familias campesinas de la vereda La Aurora',
    caption:
      'Mapeo sensible: Lomas de La Aurora, acequia comunitaria y siembras familiares (Taller 2023)',
  },
  cronica: {
    kicker: 'Crónica Central',
    title: 'El despertar entre nieblas y el telar de las lomas',
    lead: 'Antes de que despuntara la primera carretera afirmada, La Aurora existía en el compás lento de las bestias cargadas de alverja, fríjol cargamanto y flores de pompón. Fundada por familias que subieron buscando la bondad térmica de sus 2.150 metros, la vereda aprendió a modelar las pendientes pronunciadas mediante surcos en contorno que retienen la humedad sin erosionar la tierra gredosa.',
    secondary:
      'Las crónicas orales recogidas con las ancianas de la vereda destacan una trama silenciosa pero férrea: fueron las mujeres quienes fundaron los primeros convites para erigir la escuela de tapia, transportando el barro y amasando el agua traída en calderos desde la quebrada La Peñola.',
  },
  audio: {
    title: 'Relato de Doña Rosalba Ciro',
    meta: 'Grabación de campo • 03:42 min',
    chip: 'Archivo Oral',
    avatarIcon: 'graphic_eq',
    src: undefined,
    excerpt:
      '“Cuando el agua bajó por la primera manguera de polietileno, hicimos sancocho en la quebrada...”',
  },
  testimonial: {
    kicker: 'Voz Campesina',
    quote:
      '“Aquí la tierra responde al cariño con que se la labra; cuando llegaron las primeras aguas limpias, supimos que este rincón era para echar raíces.”',
    name: 'Don Efraín Morales',
    meta: '78 años • Horticultor y habitante originario',
    initials: 'EM',
  },
  agua: {
    kicker: 'Fuentes Hídricas & Ecología Comunitaria',
    title: 'La Ronda de las Tres Quebradas',
    chip: 'Acueducto Veredal',
    description:
      'El abastecimiento de La Aurora proviene de tres vertientes cordilleranas: La Chorrera, El Arrayán y Quebrada Honda. La comunidad gestiona un acueducto veredal autofinanciado con un fondo solidario para la reforestación de alisos nativos y quiebrabarrigos.',
    stats: [
      { label: 'Caudal Promedio', value: '18.2 L/segundo' },
      { label: 'Área Protegida', value: '42 Hectáreas' },
    ],
  },
  cartografia: {
    kicker: 'Cartografía Participativa',
    trailing: '3 Hitos Georreferenciados',
    sector: 'Sector El Retiro - La Cuchilla',
    mapSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAbnTMFjrnhPfJyulAaw4SKOnNhjlwahkpm6XqsehtGYgcEm4kbZAtniq2xYS3UpVlEVTGu84RvA99Rv6LeK0HyXAaLs8_KYdH7yiIFddY2QeqiUphL9eyQnZYYnx9XC8GXF0rlpym4Wu-P-cNQFhtamrZnEDRpSbQLGb9SLjdnYhtd_F-eA6-XkybYPfOIesqgGKyhdsF9aIKseD5pdeHJpx_Q5dol1p137oIy9w',
    hitos: [
      {
        title: 'La Escuela Vieja de Barro (1954)',
        description:
          'Lugar del primer convite campesino; hoy punto comunal de acopio de semillas nativas.',
        accent: 'secondary',
      },
      {
        title: 'Nacimiento La Chorrera',
        description: 'Punto de reserva forestal comunitaria con sendero vigilado por la JAC.',
        accent: 'primary',
      },
      {
        title: 'Cruce Los Morros hacia La Honda',
        description: 'Antiguo camino de arriería que comunica las dos cuencas campesinas.',
        accent: 'surface',
      },
    ] satisfies AuroraHito[],
  },
  fotos: {
    kicker: 'Fichas de Archivo Visual',
    total: 18,
    collectionMessage: 'La colección visual completa estará disponible próximamente',
    items: [
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDL6BtjO_MrXmpII3qQV4lWQMUkPn0FEAGcBaadzM7QEfqw8Uz1mWKNC_enjzmGyr6LhEUbZvuMRwfBYF2HYoAtmpPhmNpz1rs4PGIPpxIHC_ULhEj1Fv5Oh0RbDduhGxbGQi-zQio-KrMaAZUNF1Y10nxrQBgdWFN5_mI4iXqjszIGVF_XPILJT0azgtoXKw1mhLS5YznNeTFyENNTZk-v3T4QcjvX6LiOOB93lg',
        alt: 'Doña Mercedes con un bol de barro lleno de semillas recién cosechadas frente a la cocina rural',
        caption: 'Doña Mercedes en la huerta',
        registro: 'Registro 1974',
        coleccion: 'Colección Ciro',
      },
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYbHEiLZE8ZqPVcA9TXE55e1cW096xAdOWB7m-wO7pQRAk6zZXN6wXB6F_XNb1_2WZKNq-N1rCpNGR98nDTI8wSOhMrCmsKeZHBejid4Nz4iN_WE-7zSIGz-7TiezXetS0LE2GmNH1EKcv__hhv8FWXUB7D3UUslKT5jP9_y1rTo_P-J5QuYZn_4TZjiOzsYq-Y_1h-drw_9YdfJzefD_Zr7pSHVhPl6870hr2SQ',
        alt: 'Campesinos con mulas de carga en una trocha de ladera rodeada de hortensias',
        caption: 'Carga de flores en la trocha',
        registro: 'Registro 1982',
        coleccion: 'Archivo Comunitario',
      },
    ] satisfies AuroraFoto[],
  },
  descarga: {
    label: 'Descargar informe investigativo (PDF)',
    toast: 'Generando cuaderno investigativo La Aurora (PDF)...',
  },
  siguiente: {
    kicker: 'Siguiente Cuaderno',
    title: 'Vereda La Honda',
    subtitle: 'Alfarería, arcillas vivas y cañones del río',
    href: '/la-honda',
  },
} as const;
