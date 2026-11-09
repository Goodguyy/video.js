import { createRoot } from 'react-dom/client';

import '@/skin.css';
import './cinema-page.css';
import { Player } from './player';

function Cinema() {
  return (
    <>
      <header className="cinema-masthead">
        <div className="cinema-mark">
          <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
            <path d="M2 16 16 4l14 12-14 12L2 16Zm7 0 7-6 7 6-7 6-7-6Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <span>AFROCLIP CINEMA</span>
        </div>
        <span className="cinema-edition">VIDEO.JS 10 SKIN</span>
      </header>
      <section aria-labelledby="cinema-heading">
        <div className="cinema-intro">
          <p className="cinema-kicker">THE SCREENING ROOM</p>
          <h1 id="cinema-heading">The woven timeline<span>.</span></h1>
          <p>Follow the amber thread as the film unfolds. Scrub the timeline to find a chapter.</p>
        </div>
        <figure className="cinema-screening">
          <Player />
          <figcaption>
            <span><strong>Cosmic Dawn</strong> <span className="cinema-credit">/ NASA trailer</span></span>
            <a href="./index.html">Open the test workbench</a>
          </figcaption>
        </figure>
      </section>
    </>
  );
}

createRoot(document.getElementById('cinema')!).render(<Cinema />);
