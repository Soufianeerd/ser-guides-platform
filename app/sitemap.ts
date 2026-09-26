import type { MetadataRoute } from 'next';

const base='https://serguides.fr';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes=[
    '',
    '/fr',
    '/fr/guides',
    '/fr/a-propos',
    '/fr/blog',
    '/fr/guides/micro-entreprise-2026',
    '/en',
    '/en/guides',
    '/en/a-propos',
    '/en/blog',
    '/en/guides/micro-entreprise-2026',
    '/connexion',
    '/compte'
  ];
  const now=new Date();
  return routes.map((route)=>({
    url:base+route,
    lastModified:now,
    changeFrequency:route.includes('/guides')?'weekly':'monthly',
    priority:route===''||route==='/fr'?1:route.includes('/guides')?0.9:0.6
  }));
}
