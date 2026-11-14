/**
 * Genera una versión optimizada de la revista (PDF de ~10-15 MB) a partir
 * de las páginas de propuesta_revista, re-encodándolas como JPEG y
 * ensamblandolas con pdf-lib. El resultado va a public/revista/ para que
 * se sirva y descargue estáticamente desde Vercel.
 *
 * Uso: npm run pdf:build
 */
import { mkdir, readdir } from 'node:fs/promises';
import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { PDFDocument } from 'pdf-lib';

const SOURCE_DIR = path.resolve('propuesta_revista');
const TARGET_DIR = path.resolve('public/revista');
const TARGET_FILE = path.join(TARGET_DIR, 'revista-digital.pdf');
const WIDTH = 1400;
const JPEG_QUALITY = 72;

await mkdir(TARGET_DIR, { recursive: true });

const files = (await readdir(SOURCE_DIR))
  .filter((file) => /^\d+\.png$/i.test(file))
  .sort((a, b) => Number(a) - Number(b));
if (files.length === 0) {
  console.error(`No se encontraron PNG numerados en ${SOURCE_DIR}`);
  process.exit(1);
}

const pdfDoc = await PDFDocument.create();
pdfDoc.setTitle('La Aurora: memorias de una vereda construida en comunidad');
pdfDoc.setAuthor('Historias de la Ruralidad Carmelitana — Daniela Zuluaga Toro');
pdfDoc.setLanguage('es-CO');
pdfDoc.setProducer('Historias de la Ruralidad Carmelitana');

let totalBytes = 0;
for (const file of files) {
  const jpeg = await sharp(path.join(SOURCE_DIR, file))
    .resize({ width: WIDTH, withoutEnlargement: true })
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    .toBuffer();
  totalBytes += jpeg.length;

  const image = await pdfDoc.embedJpg(jpeg);
  const page = pdfDoc.addPage([image.width, image.height]);
  page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });
  console.log(`${file} -> página ${files.indexOf(file) + 1}`);
}

const pdfBytes = await pdfDoc.save();
await writeFile(TARGET_FILE, pdfBytes);
console.log(
  `\nPDF generado: ${TARGET_FILE} — ${(pdfBytes.length / 1024 / 1024).toFixed(1)} MB (${files.length} páginas, JPEGs ${(totalBytes / 1024 / 1024).toFixed(1)} MB)`,
);
