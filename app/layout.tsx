import './globals.css';
import PremiumHeader from '../components/PremiumHeader';
export const metadata={title:'SER Guides — Des réponses concrètes',description:'Des guides numériques pratiques, illustrés et à jour.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body><PremiumHeader/>{children}<footer><b>SER GUIDES</b><span>© 2026 · Guides numériques pratiques</span><span>Informer · clarifier · faire avancer</span></footer></body></html>}