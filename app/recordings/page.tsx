import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recordings — David Stemmle",
};

export default function Recordings() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Caveat:wght@600&family=Abril+Fatface&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --charcoal: #161614;
          --off-white: #F8F6F2;
          --off-white-dark: #EDE9E1;
          --purple: #5A3E8A;
          --purple-dark: #472F6E;
          --purple-light: #EDE8F5;
          --dark: #1E1C18;
          --body: #3A3530;
          --muted: #6A6058;
          --border: #DDD8CE;
          --tan: #C8C0B0;
        }

        body {
          font-family: 'Libre Baskerville', serif;
          background-color: var(--off-white);
          color: var(--dark);
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 56px;
          background-color: var(--charcoal);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .nav-logo {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          color: #E8E4DC;
          letter-spacing: 0.02em;
          text-decoration: none;
        }

        .nav-links { display: flex; gap: 36px; }

        .nav-links a {
          font-size: 13px;
          letter-spacing: 0.14em;
          color: #C0B8A8;
          text-decoration: none;
          text-transform: uppercase;
          transition: color 0.2s;
        }

        .nav-links a:hover { color: #F0EAE0; }
        .nav-links a.active { color: #fff; }

        .hero {
          position: relative;
          height: 480px;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }

        .hero-photo {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 40%;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(20,18,14,0.92) 0%, rgba(20,18,14,0.5) 55%, rgba(20,18,14,0.2) 100%);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          padding: 0 56px 52px;
        }

        .hero-eyebrow {
          font-family: 'Caveat', cursive;
          font-size: 22px;
          color: #9B7FCC;
          margin-bottom: 6px;
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: 68px;
          line-height: 1.0;
          color: #fff;
          margin-bottom: 16px;
        }

        .hero-sub {
          font-size: 17px;
          color: #C8C0B0;
          line-height: 1.7;
          max-width: 520px;
        }

        .section-label {
          font-family: 'Caveat', cursive;
          font-size: 32px;
          color: var(--purple);
          margin-bottom: 10px;
        }

        .section-title {
          font-family: 'Abril Fatface', serif;
          font-size: 44px;
          line-height: 1.1;
          color: var(--dark);
          margin-bottom: 28px;
        }

        .album {
          background-color: var(--off-white);
          padding: 80px 56px;
        }

        .album-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 64px;
          align-items: start;
        }

        .album-art {
          width: 100%;
          aspect-ratio: 1;
          object-fit: cover;
          display: block;
          background-color: var(--border);
        }

        .album-meta {
          font-size: 13px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 20px;
        }

        .album-title {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: 56px;
          line-height: 1.0;
          color: var(--dark);
          margin-bottom: 24px;
          border-left: 4px solid var(--purple);
          padding-left: 20px;
        }

        .album-desc {
          font-size: 16px;
          line-height: 1.9;
          color: var(--muted);
          max-width: 560px;
          margin-bottom: 40px;
        }

        .stream-label {
          font-family: 'Caveat', cursive;
          font-size: 20px;
          color: var(--purple);
          margin-bottom: 16px;
        }

        .stream-links {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .stream-btn {
          display: inline-block;
          padding: 12px 28px;
          font-family: 'Libre Baskerville', serif;
          font-size: 13px;
          letter-spacing: 0.06em;
          text-decoration: none;
          transition: background-color 0.2s, color 0.2s;
        }

        .stream-btn-primary {
          background-color: var(--purple);
          color: #fff;
        }

        .stream-btn-primary:hover { background-color: var(--purple-dark); }

        .stream-btn-secondary {
          background-color: transparent;
          color: var(--purple);
          border: 1.5px solid var(--purple);
        }

        .stream-btn-secondary:hover { background-color: var(--purple-light); }

        .symphony {
          background-color: var(--off-white-dark);
          padding: 80px 56px;
        }

        .symphony-intro {
          max-width: 640px;
          font-size: 16px;
          line-height: 1.9;
          color: var(--muted);
          margin-bottom: 56px;
        }

        .performance-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          background-color: var(--off-white-dark);
        }

        .performance-card {
          background-color: var(--off-white-dark);
          padding: 28px 32px;
          transition: background-color 0.2s;
        }

        .performance-card:hover { background-color: #fff; }

        .performance-year {
          font-family: 'Caveat', cursive;
          font-size: 16px;
          color: var(--purple);
          margin-bottom: 6px;
        }

        .performance-title {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 16px;
          color: var(--dark);
          line-height: 1.4;
          margin-bottom: 14px;
          border-top: 2px solid var(--purple);
          padding-top: 12px;
        }

        .performance-link {
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--purple);
          text-decoration: none;
          transition: color 0.2s;
        }

        .performance-link:hover { color: var(--purple-dark); }

        footer {
          background-color: var(--charcoal);
          padding: 48px 56px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #2a2a26;
        }

        .footer-logo {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          color: #E8E4DC;
        }

        .footer-links { display: flex; gap: 32px; }

        .footer-links a {
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #7A7268;
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-links a:hover { color: #C0B8A8; }

        .footer-copy {
          font-size: 12px;
          color: #4A4840;
        }

        .bandcamp-note {
          margin-top: 20px;
          font-size: 14px;
          color: var(--muted);
          line-height: 1.7;
        }

        .bandcamp-note a {
          color: var(--purple);
          text-decoration: none;
        }
      `}</style>

      <nav>
        <Link className="nav-logo" href="/">David Stemmle</Link>
        <div className="nav-links">
          <Link href="/lessons">Lessons</Link>
          <Link href="/notes">Notes</Link>
          <Link href="/used-gear">Used Gear</Link>
          <Link href="/recordings" className="active">Recordings</Link>
        </div>
      </nav>

      <section className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="hero-photo" src="/for hero/texture photos/recordings.jpg" alt="Reckless Martin" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-eyebrow" style={{fontSize: 28}}>recordings and performances</div>
          <h1 className="hero-title">Reckless Martin</h1>
          <p className="hero-sub">Original music and live performance from Durham, NC.</p>
        </div>
      </section>

      <section className="album">
        <div className="album-layout">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="album-art" src="/for hero/mute-album-art.jpg" alt="MUTE album art" />

          <div className="album-info">
            <div className="album-meta">Reckless Martin &nbsp;&middot;&nbsp; 9 tracks &nbsp;&middot;&nbsp; Released March 2023</div>
            <div className="album-title">MUTE</div>
            <p className="album-desc">Recorded in Durham, NC. Nine tracks of rock, experimental, and indie. Available on Bandcamp and all major streaming platforms.</p>
            <div className="stream-label">Listen now</div>
            <div className="stream-links">
              <a className="stream-btn stream-btn-primary" href="https://recklessmartin.bandcamp.com/album/mute" target="_blank" rel="noopener noreferrer">Bandcamp</a>
              <a className="stream-btn stream-btn-secondary" href="https://open.spotify.com/album/67ZnSP7P0hH2uo5K4bpL0O" target="_blank" rel="noopener noreferrer">Spotify</a>
              <a className="stream-btn stream-btn-secondary" href="https://music.apple.com/us/album/mute/1685902967" target="_blank" rel="noopener noreferrer">Apple Music</a>
            </div>
            <p className="bandcamp-note">More recordings, including other albums and student projects, are on <a href="https://recklessmartin.bandcamp.com/music" target="_blank" rel="noopener noreferrer">recklessmartin.bandcamp.com</a>.</p>
          </div>
        </div>
      </section>

      <section className="symphony">
        <div className="section-label">live performance</div>
        <h2 className="section-title">Duke University String School Youth Symphony</h2>
        <p className="symphony-intro">Since 2013, David has performed as trombonist with the Duke University String School Youth Symphony, invited by founder Dorothy Kitchen. The performances below are available on YouTube.</p>

        <div className="performance-grid">
          <div className="performance-card">
            <div className="performance-year">Winter 2022</div>
            <div className="performance-title">Elgar — Cello Concerto</div>
            <a className="performance-link" href="https://www.youtube.com/watch?v=48qU15iSlbs" target="_blank" rel="noopener noreferrer">Watch on YouTube &rarr;</a>
          </div>

          <div className="performance-card">
            <div className="performance-year">Spring 2021</div>
            <div className="performance-title">Spring Concert</div>
            <a className="performance-link" href="https://www.youtube.com/watch?v=ITlsmSmjLcw&t=3s" target="_blank" rel="noopener noreferrer">Watch on YouTube &rarr;</a>
          </div>

          <div className="performance-card">
            <div className="performance-year">Spring 2021</div>
            <div className="performance-title">Tchaikovsky — Swan Lake</div>
            <a className="performance-link" href="https://www.youtube.com/watch?v=Kv928nSKIMk" target="_blank" rel="noopener noreferrer">Watch on YouTube &rarr;</a>
          </div>

          <div className="performance-card">
            <div className="performance-year">Winter 2019</div>
            <div className="performance-title">Winter Concert</div>
            <a className="performance-link" href="https://www.youtube.com/watch?v=JCoPyCMca9w" target="_blank" rel="noopener noreferrer">Watch on YouTube &rarr;</a>
          </div>

          <div className="performance-card">
            <div className="performance-year">Spring 2018</div>
            <div className="performance-title">Romeo and Juliet / West Side Story</div>
            <a className="performance-link" href="https://www.youtube.com/watch?v=hEevwb-INN4" target="_blank" rel="noopener noreferrer">Watch on YouTube &rarr;</a>
          </div>

          <div className="performance-card">
            <div className="performance-year">Spring 2018</div>
            <div className="performance-title">Spring Concert</div>
            <a className="performance-link" href="https://www.youtube.com/watch?v=56zQFsFQInY" target="_blank" rel="noopener noreferrer">Watch on YouTube &rarr;</a>
          </div>

          <div className="performance-card">
            <div className="performance-year">Fall 2017</div>
            <div className="performance-title">Mendelssohn</div>
            <a className="performance-link" href="https://www.youtube.com/watch?v=NbFveHUyjwE" target="_blank" rel="noopener noreferrer">Watch on YouTube &rarr;</a>
          </div>

          <div className="performance-card">
            <div className="performance-year">Fall 2016</div>
            <div className="performance-title">Dvorak — 8th Symphony</div>
            <a className="performance-link" href="https://www.youtube.com/watch?v=1gpoWvx0LOo" target="_blank" rel="noopener noreferrer">Watch on YouTube &rarr;</a>
          </div>

          <div className="performance-card">
            <div className="performance-year">2016</div>
            <div className="performance-title">Marquez — Danz&oacute;n No. 2</div>
            <a className="performance-link" href="https://www.youtube.com/watch?v=qN96Ttxn4AQ" target="_blank" rel="noopener noreferrer">Watch on YouTube &rarr;</a>
          </div>

          <div className="performance-card">
            <div className="performance-year">2016</div>
            <div className="performance-title">Gould — American Salute</div>
            <a className="performance-link" href="https://www.youtube.com/watch?v=JyMOYDaMMmw" target="_blank" rel="noopener noreferrer">Watch on YouTube &rarr;</a>
          </div>

          <div className="performance-card">
            <div className="performance-year">Winter 2015</div>
            <div className="performance-title">Wagner — Meistersinger</div>
            <a className="performance-link" href="https://www.youtube.com/watch?v=UE3HaEI29F8" target="_blank" rel="noopener noreferrer">Watch on YouTube &rarr;</a>
          </div>

          <div className="performance-card">
            <div className="performance-year">2015</div>
            <div className="performance-title">Sibelius — Finlandia</div>
            <a className="performance-link" href="https://www.youtube.com/watch?v=tfUmsueaKSU" target="_blank" rel="noopener noreferrer">Watch on YouTube &rarr;</a>
          </div>

          <div className="performance-card">
            <div className="performance-year">2015</div>
            <div className="performance-title">Kabalevsky</div>
            <a className="performance-link" href="https://www.youtube.com/watch?v=0aRylSHgA3g" target="_blank" rel="noopener noreferrer">Watch on YouTube &rarr;</a>
          </div>

          <div className="performance-card">
            <div className="performance-year">Winter 2013</div>
            <div className="performance-title">Dvorak — New World Symphony</div>
            <a className="performance-link" href="https://www.youtube.com/watch?v=b6q7WiMEMTI" target="_blank" rel="noopener noreferrer">Watch on YouTube &rarr;</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-logo">David Stemmle</div>
        <div className="footer-links">
          <Link href="/lessons">Lessons</Link>
          <Link href="/notes">Notes</Link>
          <Link href="/used-gear">Used Gear</Link>
          <Link href="/recordings">Recordings</Link>
        </div>
        <div className="footer-copy">&copy; 2026 David Stemmle</div>
      </footer>
    </>
  );
}
