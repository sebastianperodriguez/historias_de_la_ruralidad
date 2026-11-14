/**
 * Convierte las imágenes del proyecto (carpetas locales propuesta_*)
 * a WebP optimizados dentro de src/assets/proyecto/.
 *
 * Uso: npm run proyecto:convert
 */
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const IMAGES_DIR = path.resolve('propuesta_imagenes');
const ILLUSTRATIONS_DIR = path.resolve('propuesta_ilustraciones');
const TARGET_DIR = path.resolve('src/assets/proyecto');

const MAPPINGS = [
  {
    source: path.join(ILLUSTRATIONS_DIR, 'WhatsApp Image 2026-10-20 at 5.22.56 PM.jpeg'),
    target: 'ilustracion-hero.webp',
    width: 1600,
  },
  {
    source: path.join(ILLUSTRATIONS_DIR, 'WhatsApp Image 2026-10-20 at 5.15.34 PM.jpeg'),
    target: 'ilustracion-aurora.webp',
    width: 1600,
  },
  { source: path.join(IMAGES_DIR, 'DSC00223.JPG'), target: 'taller-fotobordado.webp', width: 1200 },
  {
    source: path.join(IMAGES_DIR, 'WhatsApp Image 2026-10-03 at 9.35.59 PM.jpeg'),
    target: 'taller-detalle.webp',
    width: 1200,
  },
  { source: path.join(IMAGES_DIR, '12.JPG'), target: 'vereda-paisaje.webp', width: 1200 },
  { source: path.join(IMAGES_DIR, 'DSC00382.JPG'), target: 'documental-paisaje.webp', width: 1200 },
];

await mkdir(TARGET_DIR, { recursive: true });

for (const { source, target, width } of MAPPINGS) {
  const info = await sharp(source)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(path.join(TARGET_DIR, target));
  console.log(`${target}  ${(info.size / 1024).toFixed(0)} KB`);
}
