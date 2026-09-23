'use client';

import { authClient } from '../lib/auth-client';

function ReadyAccount(){
  const {data:session,isPending}=authClient!.useSession();
  if(isPending) return <div className="accountNotice"><b>Chargement de votre bibliothèque…</b></div>;
  if(!session) return <div className="accountNotice"><b>Vous n’êtes pas connecté.</b><p>Connectez-vous pour retrouver vos guides et avantages.</p><a className="serButton" href="/connexion">Se connecter</a></div>;
  return <div className="signedAccount">
    <div className="accountWelcome"><div><span className="serLabel">VOTRE COMPTE</span><h2>Bonjour {session.user.name || session.user.email}</h2><p>{session.user.email}</p></div><button onClick={async()=>{await authClient!.signOut();window.location.href='/'}}>Se déconnecter</button></div>
    <div className="ownedLibrary"><article><span>GUIDE DISPONIBLE APRÈS SYNCHRONISATION</span><h3>Micro-entreprise 2026</h3><p>Les achats Stripe seront automatiquement rattachés au compte via l’adresse e-mail utilisée au paiement.</p></article></div>
  </div>
}

export default function AccountClient(){
  if(!authClient) return <div className="accountNotice"><b>Authentification en cours d’activation</b><p>L’espace client est prêt. Il manque uniquement l’URL Neon Auth dans l’environnement Netlify pour activer les comptes réels.</p></div>;
  return <ReadyAccount/>;
}