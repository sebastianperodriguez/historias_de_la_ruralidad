import auroraUrl from '@/assets/audio/aurora.mp3?url';
import berceuseUrl from '@/assets/audio/berceuse.mp3?url';
import cantandoNumerosUrl from '@/assets/audio/cantando-numeros.mp3?url';

export type SuitePista = {
  numero: number;
  titulo: string;
  src?: string;
};

/*
 * "Suite para la Aurora" — composición musical del proyecto audiovisual,
 * compuesta por Sebastián Pérez Rodríguez.
 */
export const suite = {
  titulo: 'Suite para la Aurora',
  descripcion:
    'Composición musical del proyecto audiovisual de Historias de la Ruralidad Carmelitana.',
  compositor: 'Sebastián Pérez Rodríguez',
  pistaMessage: 'Las pistas de la suite estarán disponibles próximamente',
  pistas: [
    { numero: 1, titulo: 'Aurora', src: auroraUrl },
    { numero: 2, titulo: 'Berceuse', src: berceuseUrl },
    { numero: 3, titulo: 'Cantando Números', src: cantandoNumerosUrl },
  ] satisfies SuitePista[],
} as const;
