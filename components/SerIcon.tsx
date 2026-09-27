type IconName =
  | 'business'
  | 'ecommerce'
  | 'admin'
  | 'immobilier'
  | 'tech'
  | 'auto'
  | 'revente'
  | 'sante'
  | 'famille'
  | 'loisirs'
  | 'all'
  | 'useful'
  | 'instant'
  | 'ecosystem';

const common={
  fill:'none',
  stroke:'currentColor',
  strokeWidth:2.1,
  strokeLinecap:'round' as const,
  strokeLinejoin:'round' as const
};

export default function SerIcon({name,className=''}:{name:IconName;className?:string}){
  const props={viewBox:'0 0 32 32','aria-hidden':true,className:'serRealIcon '+className};

  if(name==='business') return <svg {...props}>
    <path {...common} d="M10 9V7.7A2.7 2.7 0 0 1 12.7 5h6.6A2.7 2.7 0 0 1 22 7.7V9"/>
    <rect {...common} x="4.5" y="9" width="23" height="17.5" rx="2.7"/>
    <path {...common} d="M4.7 15.2c3.6 2.7 7.4 4 11.3 4s7.7-1.3 11.3-4M13.5 17.8h5v3.6h-5z"/>
  </svg>;

  if(name==='ecommerce') return <svg {...props}>
    <path {...common} d="M9.3 11V8.8a6.7 6.7 0 0 1 13.4 0V11"/>
    <path {...common} d="M6.8 10.5h18.4l1.5 15H5.3l1.5-15Z"/>
    <circle {...common} cx="24.2" cy="22.3" r="4.3"/>
    <circle fill="currentColor" cx="22.7" cy="21" r="1"/>
    <circle fill="currentColor" cx="26.1" cy="19.9" r="1"/>
    <circle fill="currentColor" cx="26.2" cy="23.9" r="1"/>
    <path {...common} d="m23.5 21.5 1.8-1.1M23.5 22.5l1.8 1"/>
  </svg>;

  if(name==='admin') return <svg {...props}>
    <path {...common} d="M8 4.8h10l5 5v16.8H8z"/>
    <path {...common} d="M18 4.8v5h5M11.5 14h7M11.5 18h5.5"/>
    <circle {...common} cx="22.5" cy="22.2" r="4.4"/>
    <path {...common} d="m20.4 22.2 1.4 1.5 3-3.3"/>
  </svg>;

  if(name==='immobilier') return <svg {...props}>
    <path {...common} d="m4.5 15.2 11.5-10 11.5 10"/>
    <path {...common} d="M7.5 13v13h17V13M13.2 26v-7h5.6v7"/>
  </svg>;

  if(name==='tech') return <svg {...props}>
    <rect {...common} x="6" y="6.5" width="20" height="14.7" rx="1.7"/>
    <path {...common} d="M3.8 25.5h24.4M11.5 25.5l1.2-2.2h6.6l1.2 2.2"/>
  </svg>;

  if(name==='auto') return <svg {...props}>
    <path {...common} d="M7.2 19.8 9.4 12a3 3 0 0 1 2.9-2.2h7.4a3 3 0 0 1 2.9 2.2l2.2 7.8"/>
    <rect {...common} x="5.2" y="16.5" width="21.6" height="8" rx="2.4"/>
    <path {...common} d="M9.3 24.5v2M22.7 24.5v2M8.8 20h3M20.2 20h3M12.7 21.2h6.6"/>
  </svg>;

  if(name==='revente') return <svg {...props}>
    <path {...common} d="m5 15 10.2-10H25v9.8L14.8 25 5 15Z"/>
    <circle {...common} cx="20.8" cy="9.2" r="1.5"/>
  </svg>;

  if(name==='sante') return <svg {...props}>
    <path {...common} d="M16 26S5 20 5 11.7C5 8.5 7.4 6 10.5 6c2.1 0 4 1.1 5.5 3 1.5-1.9 3.4-3 5.5-3C24.6 6 27 8.5 27 11.7 27 20 16 26 16 26Z"/>
    <path {...common} d="M7.8 16h4l1.8-4 3.1 8 2-4h5.5"/>
  </svg>;

  if(name==='famille') return <svg {...props}>
    <circle {...common} cx="16" cy="9" r="3.2"/>
    <circle {...common} cx="8.7" cy="12.2" r="2.4"/>
    <circle {...common} cx="23.3" cy="12.2" r="2.4"/>
    <path {...common} d="M11 25v-3.8a5 5 0 0 1 10 0V25M4.8 24v-2.7a4 4 0 0 1 5.3-3.8M27.2 24v-2.7a4 4 0 0 0-5.3-3.8"/>
  </svg>;

  if(name==='loisirs') return <svg {...props}>
    <path {...common} d="M8 10h4l1.8-2.5h4.4L20 10h4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V13a3 3 0 0 1 3-3Z"/>
    <circle {...common} cx="16" cy="18" r="5"/>
  </svg>;

  if(name==='all') return <svg {...props}>
    {[7,13,19,25].flatMap((x)=>[7,13,19,25].map((y)=><rect key={x+'-'+y} fill="currentColor" x={x-1.7} y={y-1.7} width="3.4" height="3.4" rx=".7"/>))}
  </svg>;

  if(name==='useful') return <svg {...props}>
    <rect {...common} x="8" y="5" width="16" height="22" rx="2"/>
    <path {...common} d="M12 10h8M12 14h8M12 18h6M18 27v-5l2 1.3L22 22v5"/>
  </svg>;

  if(name==='instant') return <svg {...props}>
    <path fill="currentColor" d="M17.4 3.5 8.3 17h6.2l-1.7 11.5L24 13.4h-6.3l-.3-9.9Z"/>
    <path {...common} d="M5 11.5h3M24 11.5h3M6.4 23.5l2.2-1.4M23.4 22.1l2.2 1.4"/>
  </svg>;

  return <svg {...props}>
    <circle {...common} cx="16" cy="16" r="10"/>
    <circle fill="currentColor" cx="16" cy="5" r="2"/>
    <circle fill="currentColor" cx="7" cy="21.5" r="2"/>
    <circle fill="currentColor" cx="25" cy="21.5" r="2"/>
    <path fill="currentColor" d="m16 10 2.2 4 4.5 1.2-3.3 3.1.8 4.5-4.2-2.1-4.2 2.1.8-4.5-3.3-3.1 4.5-1.2L16 10Z"/>
  </svg>;
}
