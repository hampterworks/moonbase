export default function imageLoader(src) {
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/moonbase' : '';

  // For static export, we don't need width/quality parameters
  return `${basePath}${src}`;
}
