export function getImageSrc(src: string): string {
  const basePath = process.env.CUSTOM_BASE_PATH || '';
  return `${basePath}${src}`;
}

