'use client';

import {usePathname} from 'next/navigation';

export default function PremiumHeader(){
  const pathname=usePathname();
  const locale=pathname.startsWith('/en')?'en':'fr';
  const fr=locale==='fr';
  const switchPath=pathname.replace(/^\/(fr|en)(?=\/|$)/,locale==='fr'?'/en':'/fr');
  return <header className="premiumHeader">
    <a className="premiumBrand" href={'/'+locale}><strong>SER</strong><span>GUIDES</span></a>
    <div className="brandTagline">{fr?'Des guides clairs':'Clear guides'}<br/>{fr?'pour une vie plus simple':'for a simpler life'}</div>
    <nav>
      <a href={'/'+locale+'/guides'}>{fr?'Guides':'Guides'}</a>
      <a href={'/'+locale+'/a-propos'}>{fr?'À propos':'About'}</a>
      <a href={'/'+locale+'/blog'}>Blog</a>
      <a href="/compte">{fr?'Mon espace':'My library'}</a>
    </nav>
    <div className="headerActions">
      <a className="searchBtn" href={'/'+locale+'/guides'} aria-label={fr?'Rechercher':'Search'}>⌕</a>
      <div className="langPill"><a className={locale==='fr'?'active':''} href={locale==='fr'?pathname:switchPath}>FR</a><a className={locale==='en'?'active':''} href={locale==='en'?pathname:switchPath}>EN</a></div>
      <a className="loginBtn" href="/connexion"><span>♙</span>{fr?'Se connecter':'Sign in'}</a>
    </div>
  </header>
}