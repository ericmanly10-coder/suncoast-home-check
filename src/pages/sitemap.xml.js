import { cities } from '../data/cities.js';

const site = 'https://suncoasthomecheck.com';

export function GET() {
  const paths = [
    '/',
    '/how-it-works/',
    '/plans/',
    '/about/',
    '/faq/',
    '/contact/',
    '/thank-you/',
    '/areas/',
    ...cities.map((c) => `/areas/${c.slug}/`),
    '/privacy/',
    '/terms/',
  ];
  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    paths.map((p) => `  <url><loc>${site}${p}</loc></url>`).join('\n') +
    `\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
