import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mr. David — Hub",
};

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:wght@300;400;600&family=Libre+Baskerville:wght@400;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Source Sans 3', sans-serif;
          background-color: #F5F0E8;
          color: #F0EDE6;
          min-height: 100vh;
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 22px 56px;
          border-bottom: 1px solid #2a2a26;
          background-color: #161614;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .nav-logo {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          letter-spacing: 0.04em;
          color: #F0EDE6;
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 36px;
        }

        .nav-links a {
          font-family: 'Libre Baskerville', serif;
          font-size: 13px;
          letter-spacing: 0.14em;
          color: #C0B8A8;
          text-decoration: none;
          text-transform: uppercase;
          transition: color 0.2s;
        }

        .nav-links a:hover { color: #F0EAE0; }

        .hero {
          position: relative;
          height: 560px;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .hero-photo {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 62%;
          background-color: #2a2218;
          background-image: url('/for hero/64-DSC_1186.jpg');
          background-size: cover;
          background-position: center top;
        }

        .hero-fade {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, #2C2418 28%, rgba(44,36,24,0.7) 55%, transparent 75%);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          padding: 0 56px;
          max-width: 540px;
        }

        .hero-location {
          font-size: 11px;
          letter-spacing: 0.25em;
          color: #B8892A;
          margin-bottom: 16px;
          text-transform: uppercase;
        }

        .hero-name {
          font-family: 'Playfair Display', serif;
          font-size: 72px;
          font-weight: 400;
          line-height: 1.0;
          margin-bottom: 24px;
          color: #F0EDE6;
        }

        .hero-prompt {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          color: #A8A098;
          font-style: italic;
        }

        .cards {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 1px;
          background-color: #DDD5C4;
          border-top: 1px solid #DDD5C4;
        }

        .card {
          background-color: #F5F0E8;
          padding: 44px 36px;
          cursor: pointer;
          transition: background-color 0.25s ease;
          border-top: 3px solid var(--accent);
          text-decoration: none;
          display: block;
        }

        .card:hover {
          background-color: #EDE6D8;
          border-top-color: var(--accent-dark);
        }

        .card-number { display: none; }

        .card-title {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 14px;
          color: #1A1610;
          line-height: 1.25;
          transition: color 0.25s ease;
        }

        .card:hover .card-title { color: var(--accent); }

        .card-desc {
          font-size: 17px;
          line-height: 1.75;
          color: #5A5248;
          margin-bottom: 28px;
          font-weight: 400;
        }

        .card-cta {
          font-size: 14px;
          letter-spacing: 0.12em;
          color: var(--accent);
          text-transform: uppercase;
          transition: color 0.25s ease;
        }

        .card:hover .card-cta { color: var(--accent-dark); }

        .card-lessons  { --accent: #D4500A; --accent-dark: #A83D08; }
        .card-notes    { --accent: #B8892A; --accent-dark: #8A6418; }
        .card-gear     { --accent: #2B5EA7; --accent-dark: #1E4580; }
        .card-music    { --accent: #6A4A9A; --accent-dark: #4E3472; }

        footer {
          padding: 28px 56px;
          border-top: 1px solid #DDD5C4;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #8A8070;
          font-size: 12px;
          letter-spacing: 0.08em;
        }

        @media (max-width: 768px) {
          nav {
            flex-direction: column;
            gap: 16px;
            padding: 18px 24px;
          }

          .nav-links {
            gap: 20px;
            flex-wrap: wrap;
            justify-content: center;
          }

          .hero {
            height: 420px;
          }

          .hero-photo {
            width: 100%;
          }

          .hero-fade {
            background: linear-gradient(to right, #161614 10%, rgba(22,22,20,0.8) 50%, rgba(22,22,20,0.5) 100%);
          }

          .hero-content {
            padding: 0 24px;
            max-width: 100%;
          }

          .hero-name {
            font-size: 44px;
            margin-bottom: 16px;
          }

          .hero-prompt {
            font-size: 17px;
          }

          .cards {
            grid-template-columns: 1fr;
          }

          .card {
            padding: 32px 24px;
          }

          .card-desc {
            font-size: 15px;
          }

          footer {
            flex-direction: column;
            gap: 8px;
            padding: 20px 24px;
            text-align: center;
          }
        }
      `}</style>

      <nav>
        <span className="nav-logo">David Stemmle Music</span>
        <div className="nav-links">
          <Link href="/lessons">Lessons</Link>
          <Link href="/notes">Notes</Link>
          <Link href="/used-gear">Used Gear</Link>
          <Link href="/recordings">Recordings</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-photo"></div>
        <div className="hero-fade"></div>
        <div className="hero-content">
          <p className="hero-location">Durham, North Carolina</p>
          <h1 className="hero-name"><em>Music is for everyone.</em></h1>
          <p className="hero-prompt">What are you here for today?</p>
        </div>
      </section>

      <div className="cards">
        <Link href="/lessons" className="card card-lessons">
          <div className="card-number">01</div>
          <h2 className="card-title">Music Lessons</h2>
          <p className="card-desc">Private lessons, group classes, and the Instrument Explorer Series. Guitar, bass, ukulele, mandolin, drums, brass, synths, and studio recording.</p>
          <div className="card-cta">Learn More &rarr;</div>
        </Link>

        <Link href="/notes" className="card card-notes">
          <div className="card-number">02</div>
          <h2 className="card-title">Notes from Mr. David</h2>
          <p className="card-desc">A snail mail musical explorer club. Each envelope packed with an instrument card, a letter from Mr. David, and a curated playlist.</p>
          <div className="card-cta">Join the Club &rarr;</div>
        </Link>

        <Link href="/used-gear" className="card card-gear">
          <div className="card-number">03</div>
          <h2 className="card-title">BullsEye Music</h2>
          <p className="card-desc">Handpicked used guitars, amps, synths, brass, woodwinds, and vintage stereo gear. Found at Classic Treasures in Durham, NC.</p>
          <div className="card-cta">See What&apos;s In Store &rarr;</div>
        </Link>

        <Link href="/recordings" className="card card-music">
          <div className="card-number">04</div>
          <h2 className="card-title">Recordings</h2>
          <p className="card-desc">Original music by David Stemmle. Stream MUTE: seven originals, one Miles, one Bach, zero vocals, 100% fake drums.</p>
          <div className="card-cta">Listen Now &rarr;</div>
        </Link>
      </div>

      <footer>
        <span>mrdavidmusic.com</span>
        <span>Durham, NC &nbsp;&middot;&nbsp; hello@mrdavidmusic.com</span>
      </footer>
    </>
  );
}
