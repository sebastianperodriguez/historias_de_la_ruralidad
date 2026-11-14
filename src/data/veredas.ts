export type Vereda = {
  slug: string;
  name: string;
  altitude: string;
  microcuenca: string;
  title: string;
  description: string;
  testimonios: number;
  available: boolean;
  image: { src: string; alt: string };
};

/*
 * NOTA: las imágenes apuntan temporalmente a los placeholders del
 * prototipo (Stitch). Se reemplazarán por las fotos reales del proyecto
 * en la fase de assets.
 */
export const veredas: Vereda[] = [
  {
    slug: 'la-aurora',
    name: 'Vereda La Aurora',
    altitude: '2.150 m.s.n.m.',
    microcuenca: 'Microcuenca Las Brisas',
    title: 'Entre nieblas, flores silvestres y cafetales de altura',
    description:
      'Memorias de las primeras familias colonas, guardianas de las semillas criollas y los nacimientos de agua que alimentan la cuenca baja.',
    testimonios: 24,
    available: true,
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_3Uc4P6ANaL5EDQFVH3itWmmb-xfXD0vbsqoV0P9eLi4f65CmDSGpCBarjLY9MF0XeH1xrmbMIvWxQRxbgveWnju5EaDbUZnALmca9f90WXM8RsUg0hNLkc7uDR6EYiy0vBbDSsE9pjxO9c0RMoNweduVzli4QMVxdCbpWnR5NrN0IcJuNdvz2OX8QPW8kvmdN8n0-QDpoGixeURxUUa2z3gILMlHHF74niiScw',
      alt: 'Niebla matutina sobre cafetales de altura y casas campesinas de madera en la vereda La Aurora',
    },
  },
  {
    slug: 'la-honda',
    name: 'Vereda La Honda',
    altitude: '1.980 m.s.n.m.',
    microcuenca: 'Cañón de Aguas Claras',
    title: 'El susurro de la quebrada y los caminos de herradura',
    description:
      'Crónicas de la arriería, las mingas comunitarias para levantar la escuela y la resistencia campesina frente al desarraigo territorial.',
    testimonios: 24,
    available: false,
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxYJKOZ8-BfsK9Yhm2IZ2dm_5ZhU5dChlv8MloGif2_DG2zymcMNXUtHWTB-ChPyyvX9JWrcl7KivqTxl1iYdsDPNKqA5v3hxW4J-TbpGcdwfEji0LnDAiUVn4KJayFPtEV93wSmiieXUA8M0KCEmdV1hPSfqVMlKP7WTuCOEcMWaI66bUGwAGKcw3061jHvDhP62rY97oMr27WHYN7ww_vTYvNNvP9a7s5UVnkg',
      alt: 'Camino de herradura de piedra junto a una quebrada rodeada de helechos y yarumos en la vereda La Honda',
    },
  },
] as const;

export function getVeredaBySlug(slug: string): Vereda | undefined {
  return veredas.find((vereda) => vereda.slug === slug);
}
