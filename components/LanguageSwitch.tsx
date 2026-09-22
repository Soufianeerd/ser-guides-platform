'use client';
import {usePathname} from 'next/navigation';
export default function LanguageSwitch({locale}:{locale:'fr'|'en'}){const pathname=usePathname();const other=locale==='fr'?'en':'fr';const target=pathname.replace(/^\/(fr|en)(?=\/|$)/,'/'+other);return <a className="languageSwitch" href={target||'/'+other}>{other.toUpperCase()}</a>}