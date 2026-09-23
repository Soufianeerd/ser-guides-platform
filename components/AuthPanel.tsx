'use client';

import { FormEvent, useState } from 'react';
import { authClient } from '../lib/auth-client';

export default function AuthPanel(){
  const [mode,setMode]=useState<'signin'|'signup'>('signin');
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [busy,setBusy]=useState(false);
  const [message,setMessage]=useState('');

  if(!authClient){
    return <div className="authConfig">
      <b>Connexion prête côté interface</b>
      <p>Il reste à activer Neon Auth et à fournir <code>NEXT_PUBLIC_NEON_AUTH_URL</code> au déploiement Netlify.</p>
    </div>
  }

  async function submit(e:FormEvent){
    e.preventDefault(); setBusy(true); setMessage('');
    try{
      const result=mode==='signup'
        ? await authClient!.signUp.email({name,email,password,callbackURL:'/compte'})
        : await authClient!.signIn.email({email,password,callbackURL:'/compte'});
      if(result.error) setMessage(result.error.message || 'Une erreur est survenue.');
      else window.location.href='/compte';
    }catch{setMessage('Connexion impossible pour le moment.');}
    finally{setBusy(false)}
  }

  return <div className="authCard">
    <div className="authTabs"><button className={mode==='signin'?'active':''} onClick={()=>setMode('signin')}>Se connecter</button><button className={mode==='signup'?'active':''} onClick={()=>setMode('signup')}>Créer un compte</button></div>
    <form onSubmit={submit}>
      {mode==='signup'&&<label>Nom<input value={name} onChange={e=>setName(e.target.value)} required minLength={2}/></label>}
      <label>E-mail<input type="email" value={email} onChange={e=>setEmail(e.target.value)} required autoComplete="email"/></label>
      <label>Mot de passe<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required minLength={8} autoComplete={mode==='signin'?'current-password':'new-password'}/></label>
      {message&&<p className="authMessage">{message}</p>}
      <button className="serButton authSubmit" disabled={busy}>{busy?'Patientez…':mode==='signin'?'Se connecter':'Créer mon compte'}</button>
    </form>
    <p className="authLegal">Votre compte servira à centraliser vos guides, achats et avantages SER.</p>
  </div>
}