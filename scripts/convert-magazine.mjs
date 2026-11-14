/**
 * Convierte las páginas PNG de la revista (carpeta local
 * propuesta_revista/) a WebP optimizados dentro de src/assets/revista/.
 *
 * Uso: npm run magazine:convert
 */
import { mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const SOURCE_DIR = path.resolve('propuesta_revista');
const TARGET_DIR = path.resolve('src/assets/revista');
const TARGET_WIDTH = 1400;
const QUALITY = 78;

await mkdir(TARGET_DIR, { recursive: true });

const files = (await readdir(SOURCE_DIR)).filter((file) => /^\d+\.png$/i.test(file));
if (files.length === 0) {
  console.error(`No se encontraron PNG numerados en ${SOURCE_DIR}`);
  process.exit(1);
}

let totalBytes = 0;
for (const file of files) {
  const pageNumber = Number.parseInt(file, 10);
  const target = path.join(TARGET_DIR, `pagina-${pageNumber.toString().padStart(2, '0')}.webp`);
  const info = await sharp(path.join(SOURCE_DIR, file))
    .resize({ width: TARGET_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(target);
  totalBytes += info.size;
  console.log(
    `pagina-${pageNumber.toString().padStart(2, '0')}.webp  ${(info.size / 1024).toFixed(0)} KB`,
  );
}

console.log(
  `\n${files.length} páginas convertidas — total ${(totalBytes / 1024 / 1024).toFixed(1)} MB`,
);
