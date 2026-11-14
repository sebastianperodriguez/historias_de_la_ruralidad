import { getRevistaPageUrl } from '@/lib/revista-pages';

export type Vereda = {
  slug: string;
  name: string;
  tag: string;
  note: string;
  title: string;
  description: string;
  available: boolean;
  image: { src?: string; alt: string };
};

export const veredas: Vereda[] = [
  {
    slug: 'la-aurora',
    name: 'Vereda La Aurora',
    tag: 'Cuaderno No. 01',
    note: 'Revista de 38 páginas',
    title: 'Memorias de una vereda construida en comunidad',
    description:
      'Del letrero de una casa azul nació su nombre; de la comunidad, su escuela, su acueducto y sus memorias.',
    available: true,
    image: {
      src: getRevistaPageUrl(1),
      alt: 'Portada de la revista La Aurora con ilustración de Viviana Serna',
    },
  },
  {
    slug: 'la-honda',
    name: 'Vereda La Honda',
    tag: 'Cuaderno No. 02',
    note: 'En investigación',
    title: 'Segundo cuaderno de campo',
    description: 'Este cuaderno del archivo vivo está próximamente en preparación.',
    available: false,
    image: { src: undefined, alt: 'Cuaderno de campo de la Vereda La Honda — próximamente' },
  },
] as const;

export function getVeredaBySlug(slug: string): Vereda | undefined {
  return veredas.find((vereda) => vereda.slug === slug);
}
