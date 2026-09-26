import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://serguides.fr/sitemap.xml',
    host: 'https://serguides.fr',
  };
}
