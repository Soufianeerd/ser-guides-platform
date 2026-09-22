'use client';

import { useState } from 'react';

type Slide = { src: string; alt: string };

export default function GuideDeck({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState(0);
  const go = (next: number) => setActive((next + slides.length) % slides.length);
  return (
    <div className="guideDeck" aria-label="Aperçu du guide">
      <div className="guideDeckStage">
        <img src={slides[active].src} alt={slides[active].alt} className="guideDeckImage" />
        <button className="deckArrow deckPrev" onClick={() => go(active - 1)} aria-label="Image précédente">‹</button>
        <button className="deckArrow deckNext" onClick={() => go(active + 1)} aria-label="Image suivante">›</button>
        <span className="deckCount">{active + 1}/{slides.length}</span>
      </div>
      <div className="deckThumbs">
        {slides.map((slide, i) => <button key={slide.src} className={i === active ? 'deckThumb active' : 'deckThumb'} onClick={() => setActive(i)} aria-label={`Voir l’image ${i + 1}`}><img src={slide.src} alt="" /></button>)}
      </div>
    </div>
  );
}
