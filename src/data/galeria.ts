import foto01 from '@/assets/proyecto/galeria/foto-01.webp';
import foto02 from '@/assets/proyecto/galeria/foto-02.webp';
import foto03 from '@/assets/proyecto/galeria/foto-03.webp';
import foto04 from '@/assets/proyecto/galeria/foto-04.webp';
import foto05 from '@/assets/proyecto/galeria/foto-05.webp';
import foto06 from '@/assets/proyecto/galeria/foto-06.webp';
import foto07 from '@/assets/proyecto/galeria/foto-07.webp';
import foto08 from '@/assets/proyecto/galeria/foto-08.webp';

export type FotoGaleria = {
  src: string;
  alt: string;
  caption?: string;
};

/*
 * Registro fotográfico del trabajo de campo: talleres de fotobordado,
 * comunidad y territorio de la vereda La Aurora.
 */
export const galeria: FotoGaleria[] = [
  {
    src: foto01,
    alt: 'Taller de fotobordado: manos de dos mujeres bordan sobre una fotografía',
  },
  {
    src: foto02,
    alt: 'Manos enhebrando la aguja durante un taller de fotobordado',
  },
  {
    src: foto03,
    alt: 'Madre e hijo bordan sus recuerdos en un taller de fotobordado',
  },
  {
    src: foto04,
    alt: 'Habitante muestra una fotografía bordada con alados y coronas de hilo',
  },
  {
    src: foto05,
    alt: 'Fotografía bordada en comunión: dos retratos con coronas de hilo anaranjado',
  },
  {
    src: foto06,
    alt: 'Habitante de la vereda bajo la plaza techada comunitaria',
  },
  {
    src: foto07,
    alt: 'Detalle de hilvanado colorido sobre una fotografía bordada',
  },
  {
    src: foto08,
    alt: 'Joven concentrado borda en un taller de fotobordado',
  },
] as const;
