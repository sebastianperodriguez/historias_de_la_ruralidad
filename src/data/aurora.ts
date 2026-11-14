export type AuroraHito = {
  title: string;
  description: string;
  accent: 'primary' | 'secondary' | 'tertiary';
};

export const aurora = {
  cuaderno: 'Cuaderno de Campo No. 01',
  ficha: 'Ficha Etnográfica',
  subtitle: 'Memorias de una vereda construida en comunidad',
  fichaStats: [
    { label: 'Entrevistas', value: '4', note: 'Historias orales' },
    { label: 'Talleres', value: '4', note: 'Con la comunidad' },
    { label: 'Capítulos', value: '6', note: 'Revista La Aurora' },
  ],
  cronica: {
    kicker: 'Origen del nombre',
    title: 'Una casa azul al borde del camino',
    lead: 'Parece ser que en el sector Los Alticos, hoy llamado Las Brisas, existió una casa antigua color azul, justo al borde del camino, que sus propietarios adornaron con un llamativo letrero que colgaba de las alfardas del techo: La Aurora, así fue nombrada esta morada que, poco a poco fue haciéndose dueña de la referencia de sus transeúntes y fue nombrando este territorio con un gesto cotidiano.',
    secondary:
      'La vereda comprendía una amplia extensión para la década de los años 60, iniciando desde la zona de los alticos conocida posteriormente como Las Brisas; luego atravesando la quebrada Viboral, la zona central que rodea todo lo que hoy comprende el colegio, seguida de la zona boscosa conocida como El Quemado que limita con el acueducto, hasta llegar a los límites por el norte con la vereda Rivera, por el oriente con la vereda Viboral, por el occidente con la zona urbana de El Carmen de Viboral y por el sur con la vereda Betania.',
  },
  testimonial: {
    kicker: 'Voz Campesina',
    quote:
      '«Para 1985 en la Junta de Acción Comunal, a mí me nombraron como promotora de salud, fuí nombrada por el hospital y seguí trabajando por la vereda de casa en casa haciendo charlas, aplicando inyecciones, haciendo curaciones, atendiendo partos»',
    name: 'Mariela de Jesús Espinoza',
    meta: 'Presidenta de la Junta de Acción Comunal de la Vereda La Aurora',
    initials: 'ME',
  },
  acueducto: {
    kicker: 'El Agua de la Vereda',
    title: 'Acueducto Aurora Viboral',
    chip: 'Acueducto Comunitario',
    description:
      'Del primer tanque en la finca de Joaquín Cardona al proyecto de las bocatomas La Linda, Puente Piedra y El Quemado: el agua construida en convites comunitarios de sábados y domingos, hoy protegida con una finca reforestadora en la vereda San Eusebio.',
    stats: [
      { label: 'Bocatomas', value: '3' },
      { label: 'Casas iniciales', value: '25' },
    ],
  },
  hitos: {
    kicker: 'Hitos Comunitarios',
    trailing: '3 Historias Vivas',
    items: [
      {
        title: 'La Junta de Acción Comunal (1972)',
        description:
          'Las primeras reuniones se dieron en la casa de José Albino Soto, en Los Alticos, y en 1973 la Junta obtuvo su resolución legal.',
        accent: 'primary',
      },
      {
        title: 'La Escuela Rural (1974)',
        description:
          'La escritura pública del 9 de julio de 1974 registró el predio comprado a Félix Antonio Arango Ocampo, donado en parte por la familia Espinoza Estrada.',
        accent: 'secondary',
      },
      {
        title: 'El Acueducto Aurora Viboral',
        description:
          'Nació en la finca de Joaquín Cardona y hoy lleva agua a tres centros rurales: Las Brisas, La Aurora y Viboral.',
        accent: 'tertiary',
      },
    ] satisfies AuroraHito[],
  },
  siguiente: {
    kicker: 'Siguiente Cuaderno',
    title: 'Vereda La Honda',
    subtitle: 'Segundo cuaderno de campo — próximamente',
    href: '/la-honda',
  },
} as const;
