export type SuitePista = {
  numero: number;
  titulo: string;
  src?: string;
};

/*
 * "Suite para la Aurora" — composición musical del proyecto audiovisual.
 * Los MP3 se integran cuando los archivos estén en src/assets/audio/.
 */
export const suite = {
  titulo: 'Suite para la Aurora',
  descripcion:
    'Composición musical del proyecto audiovisual de Historias de la Ruralidad Carmelitana.',
  compositor: 'Sebastián Pérez Rodríguez',
  pistaMessage: 'Las pistas de la suite estarán disponibles próximamente',
  pistas: [
    { numero: 1, titulo: 'Pista 1', src: undefined },
    { numero: 2, titulo: 'Pista 2', src: undefined },
    { numero: 3, titulo: 'Pista 3', src: undefined },
  ] satisfies SuitePista[],
} as const;
