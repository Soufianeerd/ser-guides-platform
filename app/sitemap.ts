import type {MetadataRoute} from 'next';
import {guides} from '../data/guides';

const origin='https://serguides.fr';

export default function sitemap():MetadataRoute.Sitemap {
 const routes=[
  '/fr','/fr/guides','/fr/a-propos','/fr/blog',
  '/en','/en/guides','/en/a-propos','/en/blog',
  ...guides.filter(g=>g.available).flatMap(g=>[
   '/fr/guides/'+g.slug,
   '/en/guides/'+g.slug
  ])
 ];
 return routes.map(route=>({
  url:origin+route,
  changeFrequency:route.includes('/guides/')?'monthly':'weekly',
  priority:route==='/fr'||route==='/en'?1:route.includes('/guides/')?0.9:0.6
 }));
}
