import './globals.css';
import PremiumHeader from '../components/PremiumHeader';

export const metadata={
  metadataBase:new URL('https://serguides.fr'),
  title:{
    default:'SER Guides — Des réponses concrètes',
    template:'%s | SER Guides'
  },
  description:'Des guides numériques pratiques, interactifs et sourcés pour comprendre, décider et agir.',
  alternates:{canonical:'/'},
  openGraph:{
    title:'SER Guides — Des réponses concrètes',
    description:'Des guides numériques pratiques, interactifs et sourcés pour comprendre, décider et agir.',
    url:'https://serguides.fr',
    siteName:'SER Guides',
    locale:'fr_FR',
    type:'website'
  }
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="fr"><body><PremiumHeader/>{children}<footer><b>SER GUIDES</b><span>© 2026 · Guides numériques pratiques</span><span>Comprendre · vérifier · agir</span></footer></body></html>
}
