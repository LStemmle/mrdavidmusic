import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Used Gear — BullsEye Music",
};

export default function UsedGear() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Caveat:wght@600&family=Abril+Fatface&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --charcoal: #161614;
          --off-white: #F8F6F2;
          --off-white-dark: #EDE9E1;
          --blue: #2B5EA7;
          --blue-dark: #1E4580;
          --blue-light: #E8EEF8;
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
          object-position: center 50%;
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
          color: #6B9FE0;
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
          color: var(--blue);
          margin-bottom: 10px;
        }

        .section-title {
          font-family: 'Abril Fatface', serif;
          font-size: 44px;
          line-height: 1.1;
          color: var(--dark);
          margin-bottom: 28px;
        }

        .intro {
          background-color: var(--off-white);
          padding: 80px 56px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .intro-desc {
          font-size: 16px;
          line-height: 1.9;
          color: var(--muted);
          margin-bottom: 24px;
        }

        .intro-photo {
          width: 100%;
          aspect-ratio: 4/3;
          object-fit: cover;
          object-position: center;
          display: block;
          background-color: var(--border);
        }

        .inventory {
          background-color: var(--off-white-dark);
          padding: 80px 56px;
        }

        .inventory-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          background-color: var(--border);
        }

        .inventory-category {
          background-color: var(--off-white-dark);
          padding: 32px 36px;
        }

        .category-name {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 16px;
          color: var(--dark);
          margin-bottom: 14px;
          border-top: 3px solid var(--blue);
          padding-top: 14px;
        }

        .category-desc {
          font-size: 14px;
          line-height: 1.85;
          color: var(--muted);
        }

        .team {
          background-color: var(--charcoal);
          padding: 80px 56px;
        }

        .team .section-label { color: #6B9FE0; }

        .team .section-title {
          color: #F0EAE0;
          margin-bottom: 52px;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2px;
          background-color: #2a2a26;
        }

        .team-card {
          background-color: var(--charcoal);
          padding: 36px 32px;
        }

        .team-name {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 18px;
          color: #F0EAE0;
          margin-bottom: 10px;
          border-top: 2px solid var(--blue);
          padding-top: 14px;
        }

        .team-role {
          font-size: 13px;
          line-height: 1.8;
          color: #7A7268;
        }

        .team-role a {
          color: #6B9FE0;
          text-decoration: none;
        }

        .find-us {
          background-color: var(--off-white);
          padding: 80px 56px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .address-block { margin-bottom: 36px; }

        .address-label {
          font-family: 'Caveat', cursive;
          font-size: 18px;
          color: var(--blue);
          margin-bottom: 8px;
        }

        .address-text {
          font-size: 16px;
          line-height: 1.8;
          color: var(--muted);
        }

        .contact-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 32px;
        }

        .contact-links a {
          font-size: 15px;
          color: var(--blue);
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: color 0.2s;
        }

        .contact-links a:hover { color: var(--blue-dark); }

        .selling-gear {
          background-color: var(--blue-light);
          padding: 36px 40px;
          border-left: 4px solid var(--blue);
        }

        .selling-gear-title {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 20px;
          color: var(--dark);
          margin-bottom: 12px;
        }

        .selling-gear-text {
          font-size: 15px;
          line-height: 1.85;
          color: var(--muted);
          margin-bottom: 20px;
        }

        .btn-contact {
          display: inline-block;
          background-color: var(--blue);
          color: #fff;
          font-family: 'Libre Baskerville', serif;
          font-size: 13px;
          letter-spacing: 0.06em;
          padding: 12px 28px;
          text-decoration: none;
          transition: background-color 0.2s;
        }

        .btn-contact:hover { background-color: var(--blue-dark); }

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

        @media (max-width: 768px) {
          nav {
            flex-direction: column;
            gap: 14px;
            padding: 16px 24px;
          }

          .nav-links {
            gap: 18px;
            flex-wrap: wrap;
            justify-content: center;
          }

          .hero {
            height: 360px;
          }

          .hero-content {
            padding: 0 24px 36px;
          }

          .hero-title {
            font-size: 42px;
          }

          .hero-sub {
            font-size: 15px;
          }

          .section-title {
            font-size: 32px;
          }

          .intro {
            grid-template-columns: 1fr;
            padding: 48px 24px;
            gap: 36px;
          }

          .inventory {
            padding: 48px 24px;
          }

          .inventory-grid {
            grid-template-columns: 1fr;
          }

          .team {
            padding: 48px 24px;
          }

          .team-grid {
            grid-template-columns: 1fr;
          }

          .find-us {
            grid-template-columns: 1fr;
            padding: 48px 24px;
            gap: 48px;
          }

          .selling-gear {
            border-left: none;
            border-top: 4px solid var(--blue);
          }

          footer {
            flex-direction: column;
            gap: 16px;
            padding: 32px 24px;
            text-align: center;
          }

          .footer-links {
            flex-wrap: wrap;
            justify-content: center;
            gap: 16px;
          }
        }
      `}</style>

      <nav>
        <Link className="nav-logo" href="/">David Stemmle Music</Link>
        <div className="nav-links">
          <Link href="/lessons">Lessons</Link>
          <Link href="/notes">Notes</Link>
          <Link href="/used-gear" className="active">Used Gear</Link>
          <Link href="/recordings">Recordings</Link>
        </div>
      </nav>

      <section className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="hero-photo" src="/for hero/bullseye store photos/PXL_20260205_180333594.jpg" alt="BullsEye Music used gear shop" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-eyebrow">used gear</div>
          <h1 className="hero-title">BullsEye Music</h1>
          <p className="hero-sub">Quality used musical instruments and equipment, curated by local musicians in Durham, NC.</p>
        </div>
      </section>

      <section className="intro">
        <div className="intro-text">
          <div className="section-label">the shop</div>
          <h2 className="section-title">Good gear at fair prices.</h2>
          <p className="intro-desc">BullsEye Music is a collaborative effort among local musicians, luthiers, and collectors. You&apos;ll find it inside Classic Treasures on Durham-Chapel Hill Blvd, where David and his partners have put together a rotating selection of quality used instruments and equipment.</p>
          <p className="intro-desc">The inventory changes and you won&apos;t find it listed online. The best way to know what&apos;s in stock is to stop by.</p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="intro-photo" src="/for hero/bullseye store photos/PXL_20260220_230519492.MP.jpg" alt="BullsEye Music at Classic Treasures" />
      </section>

      <section className="inventory">
        <div className="section-label">what you&apos;ll find</div>
        <h2 className="section-title">The inventory changes. Here&apos;s what we typically carry.</h2>

        <div className="inventory-grid">
          <div className="inventory-category">
            <div className="category-name">Acoustic Guitars</div>
            <p className="category-desc">Steel-string and classical guitars at all price points, from student instruments to vintage finds.</p>
          </div>
          <div className="inventory-category">
            <div className="category-name">Electric Guitars</div>
            <p className="category-desc">Solid-body and semi-hollow electrics, including vintage and boutique pieces.</p>
          </div>
          <div className="inventory-category">
            <div className="category-name">Vintage Amplifiers</div>
            <p className="category-desc">Tube amps and solid-state classics, serviced and ready to play.</p>
          </div>
          <div className="inventory-category">
            <div className="category-name">Synthesizers &amp; Keyboards</div>
            <p className="category-desc">Analog and digital synths, electric pianos, and keyboards from multiple eras.</p>
          </div>
          <div className="inventory-category">
            <div className="category-name">Effects Pedals</div>
            <p className="category-desc">A rotating selection of used pedals — from basics to boutique.</p>
          </div>
          <div className="inventory-category">
            <div className="category-name">Orchestra Strings, Brass &amp; Woodwinds</div>
            <p className="category-desc">We occasionally get orchestral strings, brass, and woodwinds, but these come and go. If you&apos;re looking for something specific, please call ahead.</p>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="section-label">the people behind it</div>
        <h2 className="section-title">Who we are.</h2>

        <div className="team-grid">
          <div className="team-card">
            <div className="team-name">David Stemmle</div>
            <div className="team-role">Music educator, recording artist, and instrument collector. 230 instruments deep and still going.</div>
          </div>
          <div className="team-card">
            <div className="team-name">Ed Hurt</div>
            <div className="team-role">Luthier, pedal builder, and vintage synthesizer specialist.</div>
          </div>
          <div className="team-card">
            <div className="team-name">David Lewis</div>
            <div className="team-role">Luthier and local jazz guitarist. In the shop on Saturdays doing guitar repair and setup. <a href="https://www.facebook.com/DavidLewisJazzGuitar/" target="_blank" rel="noopener noreferrer">Find him on Facebook.</a></div>
          </div>
          <div className="team-card">
            <div className="team-name">Blake Addison</div>
            <div className="team-role">Owner of Classic Treasures, songwriter, and guitarist.</div>
          </div>
        </div>
      </section>

      <section className="find-us">
        <div className="find-us-left">
          <div className="section-label">find us</div>
          <h2 className="section-title">Come in and play something.</h2>

          <div className="address-block">
            <div className="address-label">Location</div>
            <p className="address-text">
              BullsEye Music at Classic Treasures<br />
              2659 Durham-Chapel Hill Blvd<br />
              Durham, NC 27707
            </p>
          </div>

          <div className="address-block">
            <div className="address-label">Hours</div>
            <p className="address-text">Check with Classic Treasures for current store hours.</p>
          </div>

          <div className="address-block">
            <div className="address-label">Contact</div>
            <p className="address-text">Blake Addison, Classic Treasures</p>
          </div>
          <div className="contact-links">
            <a href="tel:9194015777">(919) 401-5777</a>
            <a href="https://www.classictreasures.org/" target="_blank" rel="noopener noreferrer">classictreasures.org</a>
          </div>
        </div>

        <div className="selling-gear">
          <div className="selling-gear-title">Have gear to sell?</div>
          <p className="selling-gear-text">We&apos;re always interested in quality used instruments and equipment. Get in touch and tell us what you have.</p>
          <a className="btn-contact" href="mailto:hello@mrdavidmusic.com">Get in touch</a>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/bullseye-logo.png" alt="BullsEye Music" style={{width: 160, marginTop: 36, display: "block"}} />
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
