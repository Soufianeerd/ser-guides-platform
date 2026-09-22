import LanguageSwitch from '../../components/LanguageSwitch';
import {notFound} from 'next/navigation';
export default async function LocaleLayout({children,params}:{children:React.ReactNode;params:Promise<{locale:string}>}){const {locale}=await params;if(locale!=='fr'&&locale!=='en')notFound();return <><div className="localeBar"><LanguageSwitch locale={locale}/></div>{children}</>}