export type ContactoPersona = {
  nombre: string;
  rol: string;
  email: string;
  sitio?: { label: string; url: string };
};

export const contacto = {
  kicker: 'Contacto',
  title: 'Escríbenos',
  description:
    'Si guardas historias, fotografías o recuerdos de las veredas carmelitanas, o si quieres conocer más del proyecto, estas son las personas detrás de él.',
  personas: [
    {
      nombre: 'Daniela Zuluaga Toro',
      rol: 'Investigadora y creadora del proyecto',
      email: 'zuluagatorodaniela@gmail.com',
    },
    {
      nombre: 'Sebastián Pérez',
      rol: 'Diseño y desarrollo web',
      email: 'sebastianperodriguez@gmail.com',
      sitio: { label: 'www.sebasperez.dev', url: 'https://www.sebasperez.dev/' },
    },
  ] satisfies ContactoPersona[],
} as const;
