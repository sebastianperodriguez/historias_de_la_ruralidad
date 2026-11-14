const pages = import.meta.glob<string>('/src/assets/revista/*.webp', {
  query: '?url',
  import: 'default',
  eager: true,
});

const urlByPage = new Map<number, string>();
for (const [filePath, url] of Object.entries(pages)) {
  const match = filePath.match(/pagina-(\d+)\.webp$/);
  if (match) {
    urlByPage.set(Number(match[1]), url);
  }
}

export function getRevistaPageUrl(page: number): string | undefined {
  return urlByPage.get(page);
}

export function getRevistaPageUrls(): number[] {
  return [...urlByPage.keys()].sort((a, b) => a - b);
}
