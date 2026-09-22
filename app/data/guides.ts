export type Locale = 'fr' | 'en';
export type Guide = {
  slug: string;
  number: string;
  category: { fr: string; en: string };
  title: { fr: string; en: string };
  subtitle: { fr: string; en: string };
  price: string;
  checkout: string;
  slides: { fr: string[]; en: string[] };
};

export const guides: Guide[] = [
  {
    slug: 'micro-entreprise-2026',
    number: '01',
    category: { fr: 'Administratif & fiscal', en: 'Admin & tax' },
    title: { fr: 'Micro-entreprise 2026', en: 'Micro-business 2026' },
    subtitle: {
      fr: 'Le guide interactif pour éviter les erreurs avant de commencer.',
      en: 'The interactive guide to avoid costly mistakes before you start.'
    },
    price: '12,99 €',
    checkout: 'https://buy.stripe.com/14AdR9ayhbFS2n5aQHeUU06',
    slides: {
      fr: ['/guides/micro-entreprise-2026/fr/01-hook.jpg','/guides/micro-entreprise-2026/fr/02-sources.jpg','/guides/micro-entreprise-2026/fr/03-guide.jpg'],
      en: ['/guides/micro-entreprise-2026/en/01-hook.jpg','/guides/micro-entreprise-2026/en/02-sources.jpg','/guides/micro-entreprise-2026/en/03-guide.jpg']
    }
  }
];

export const guideBySlug = (slug: string) => guides.find((guide) => guide.slug === slug);
