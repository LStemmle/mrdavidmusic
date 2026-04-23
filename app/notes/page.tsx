import Link from "next/link";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Notes from Mr. David",
};

export default function Notes() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400;1,700&family=Lora:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Caveat:wght@600&family=Abril+Fatface&display=swap');

        html { scroll-behavior: smooth; }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --parchment: #FAF3E8;
          --parchment-dark: #F0E6D0;
          --amber: #C8842A;
          --terracotta: #B85C38;
          --brown: #3E2723;
          --dusty-gold: #D4A84B;
          --olive: #505A2E;
          --sage: #6B7A3A;
          --warm-gray: #7A6E5D;
          --light-tan: #E8D5B5;
        }

        body {
          font-family: 'Libre Baskerville', serif;
          background-color: var(--parchment);
          color: var(--brown);
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 56px;
          background-color: var(--brown);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .nav-back {
          font-family: 'Libre Baskerville', serif;
          font-size: 14px;
          color: var(--parchment);
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: color 0.2s;
        }

        .nav-back:hover { color: #fff; }

        .nav-cta {
          background-color: var(--terracotta);
          color: #fff;
          font-family: 'Libre Baskerville', serif;
          font-size: 13px;
          padding: 10px 24px;
          border: none;
          cursor: pointer;
          letter-spacing: 0.05em;
          transition: background-color 0.2s;
          text-decoration: none;
        }

        .nav-cta:hover { background-color: #a04e2c; }

        .hero {
          position: relative;
          background-color: var(--brown);
          min-height: 520px;
          padding: 64px 56px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 56px;
          align-items: center;
          overflow: hidden;
          border-bottom: 3px solid var(--light-tan);
        }

        .hero-photo {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(20,10,5,0.88) 0%, rgba(20,10,5,0.72) 55%, rgba(20,10,5,0.45) 100%);
        }

        .hero-center {
          position: relative;
          z-index: 2;
          min-width: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-lede {
          font-family: 'Lora', serif;
          font-size: 34px;
          font-style: italic;
          font-weight: 700;
          line-height: 1.45;
          color: var(--parchment);
          margin-bottom: 20px;
        }

        .hero-lede strong {
          font-weight: 900;
          color: var(--dusty-gold);
          font-style: italic;
        }

        .btn-primary {
          display: inline-block;
          background-color: var(--terracotta);
          color: #fff;
          font-family: 'Libre Baskerville', serif;
          font-size: 14px;
          padding: 14px 36px;
          border: none;
          cursor: pointer;
          letter-spacing: 0.06em;
          transition: background-color 0.2s;
          text-decoration: none;
          align-self: flex-start;
        }

        .btn-primary:hover { background-color: #a04e2c; }

        section { padding: 72px 56px; }

        .section-label {
          font-family: 'Caveat', cursive;
          font-size: 32px;
          color: var(--sage);
          margin-bottom: 10px;
        }

        .section-title {
          font-family: 'Abril Fatface', serif;
          font-size: 40px;
          line-height: 1.15;
          margin-bottom: 44px;
          color: var(--brown);
        }

        .divider {
          width: 48px;
          height: 3px;
          background-color: var(--amber);
          margin: 16px 0 36px;
        }

        .inside { background-color: var(--parchment); }

        .inside-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 48px;
        }

        .inside-number {
          font-family: 'Abril Fatface', serif;
          font-size: 56px;
          color: var(--light-tan);
          line-height: 1;
          margin-bottom: 10px;
        }

        .inside-item-title {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 14px;
          color: var(--brown);
        }

        .inside-item-desc {
          font-size: 15px;
          line-height: 1.85;
          color: var(--warm-gray);
        }

        .how { background-color: var(--parchment-dark); }

        .steps {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 48px;
        }

        .step-number { display: none; }

        .step-title {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 10px;
          color: var(--brown);
        }

        .step-desc {
          font-size: 15px;
          line-height: 1.85;
          color: var(--warm-gray);
        }

        .quote-section {
          background-color: var(--brown);
          padding: 80px 56px;
          text-align: center;
        }

        .quote-mark {
          font-family: 'Abril Fatface', serif;
          font-size: 100px;
          color: var(--amber);
          line-height: 0.7;
          margin-bottom: 28px;
          opacity: 0.5;
        }

        .quote-text {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          font-style: italic;
          line-height: 1.7;
          color: var(--parchment);
          max-width: 780px;
          margin: 0 auto 28px;
        }

        .quote-attr {
          font-family: 'Caveat', cursive;
          font-size: 22px;
          color: var(--dusty-gold);
        }

        .meet {
          background-color: var(--parchment);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
        }

        .meet-img {
          width: 100%;
          aspect-ratio: 4/5;
          object-fit: cover;
          object-position: center top;
          border-radius: 4px;
          box-shadow: 0 8px 32px rgba(62,39,35,0.12);
        }

        .meet-body {
          font-size: 16px;
          line-height: 1.9;
          color: var(--warm-gray);
          margin-bottom: 20px;
        }

        .final-cta {
          background-color: var(--olive);
          padding: 88px 56px;
          text-align: center;
        }

        .final-cta .section-title { color: var(--parchment); margin-bottom: 16px; }

        .final-cta-sub {
          font-size: 17px;
          color: #A8B888;
          margin-bottom: 44px;
          line-height: 1.8;
        }

        .waitlist-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
          max-width: 420px;
          margin: 0 auto;
          text-align: left;
        }

        .waitlist-form .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .waitlist-form .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .waitlist-form label {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #A8B888;
        }

        .waitlist-form input {
          background-color: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          color: var(--parchment);
          font-family: 'Libre Baskerville', serif;
          font-size: 14px;
          padding: 12px 16px;
          outline: none;
          transition: border-color 0.2s;
        }

        .waitlist-form input::placeholder {
          color: #8A9870;
        }

        .waitlist-form input:focus {
          border-color: var(--parchment);
        }

        .btn-waitlist {
          display: inline-block;
          background-color: var(--parchment);
          color: var(--brown);
          font-family: 'Libre Baskerville', serif;
          font-size: 15px;
          font-weight: 700;
          padding: 18px 52px;
          border: none;
          cursor: pointer;
          letter-spacing: 0.06em;
          text-decoration: none;
          transition: background-color 0.2s;
          align-self: center;
        }

        .btn-waitlist:hover { background-color: #fff; }

        .form-success {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 20px 0;
        }

        .form-success-title {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 700;
          color: var(--parchment);
          margin-bottom: 12px;
        }

        .form-success-desc {
          font-size: 15px;
          color: #A8B888;
          line-height: 1.7;
        }

        .cta-note {
          margin-top: 18px;
          font-size: 13px;
          color: #8A9870;
          font-style: italic;
        }

        footer {
          background-color: var(--brown);
          padding: 28px 56px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #5A4A3A;
          font-size: 12px;
          letter-spacing: 0.06em;
        }

        @media (max-width: 768px) {
          nav {
            padding: 14px 24px;
          }

          .nav-back {
            font-size: 13px;
          }

          .nav-cta {
            font-size: 12px;
            padding: 8px 18px;
          }

          .hero {
            min-height: 400px;
            padding: 48px 24px;
          }

          .hero-lede {
            font-size: 22px;
            line-height: 1.5;
          }

          section {
            padding: 48px 24px;
          }

          .section-title {
            font-size: 30px;
            margin-bottom: 32px;
          }

          .inside-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .inside-number {
            font-size: 40px;
          }

          .steps {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .quote-section {
            padding: 56px 24px;
          }

          .quote-mark {
            font-size: 64px;
          }

          .quote-text {
            font-size: 20px;
          }

          .meet {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .meet-img {
            aspect-ratio: 3/2;
          }

          .final-cta {
            padding: 56px 24px;
          }

          .final-price {
            font-size: 40px;
          }

          .waitlist-form .form-row {
            grid-template-columns: 1fr;
          }

          .btn-waitlist {
            padding: 16px 36px;
            font-size: 14px;
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
        <Link href="/" className="nav-back">&larr; mrdavidmusic.com</Link>
        <a href="https://mrdavidmusic.memberful.com/checkout?plan=147377&return_url=https%3A%2F%2Fmrdavidmusic.com%2Fnotes" target="_blank" rel="noopener noreferrer" className="nav-cta">Become a Founding Member</a>
      </nav>

      <section className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="hero-photo" src="/for hero/Mr David hero.png" alt="Mr. David's letters on wood" />
        <div className="hero-overlay"></div>
        <div className="hero-center">
          <p className="hero-lede">Join our musical explorer snail mail club. Get monthly letters in your mailbox that boost your musical knowledge and spark your passion. <strong>Adventure awaits.</strong></p>
          <a href="https://mrdavidmusic.memberful.com/checkout?plan=147377&return_url=https%3A%2F%2Fmrdavidmusic.com%2Fnotes" target="_blank" rel="noopener noreferrer" className="btn-primary">Become a Founding Member</a>
        </div>
      </section>

      <section className="inside">
        <div className="section-label">Every month</div>
        <h2 className="section-title">What&apos;s in the envelope</h2>
        <div className="inside-grid">
          <div className="inside-item">
            <div className="inside-number">01</div>
            <h3 className="inside-item-title">A letter from Mr. David</h3>
            <p className="inside-item-desc">David writes the way he teaches, by telling the human stories behind the topic. It might be an instrument with a surprising history, an artist you haven&apos;t heard of yet, or a genre that quietly shaped everything that came after it. By the end you are curious about sounds and songs and artists you never knew to look for.</p>
          </div>
          <div className="inside-item">
            <div className="inside-number">02</div>
            <h3 className="inside-item-title">A collectible instrument card</h3>
            <p className="inside-item-desc">Included in the letter is a collectible card: a photograph of a real instrument from Mr. David&apos;s large collection, numbered sequentially, with quick facts on the back. Somewhere in every photo, one of his Beatles figures is hiding. David will tell you that making these cards is a great excuse to keep buying more instruments. His wife may have a different opinion.</p>
          </div>
          <div className="inside-item">
            <div className="inside-number">03</div>
            <h3 className="inside-item-title">A curated playlist</h3>
            <p className="inside-item-desc">David loves introducing his students to music they haven&apos;t heard before. The playlist is his way of doing that at scale: songs to discover, performances worth watching, and context that makes the listening more interesting. He opens with a video about what he picked and what to listen for. A playlist card in the envelope has the QR code so you can start right away.</p>
          </div>
        </div>
      </section>

      <section className="how">
        <div className="section-label">Getting started</div>
        <h2 className="section-title">How it works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3 className="step-title">Subscribe</h3>
            <p className="step-desc">Sign up for $12/month. You can cancel at any time, but why would you want to? Another musical adventure will be coming your way every month!</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3 className="step-title">Get your welcome package</h3>
            <p className="step-desc">Soon after you join, David will send you a welcome letter telling you all about the music explorer club. He&apos;ll also include a reference card introducing the five instrument families to establish a common vocabulary for his monthly letters.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3 className="step-title">Get mail worth opening</h3>
            <p className="step-desc">Every month a new envelope shows up with a letter full of music history, artist stories, and the kind of context that makes you hear everything differently. The letter also includes a collectible musical instrument card and a playlist that matches that month&apos;s theme.</p>
          </div>
        </div>
      </section>

      <div className="quote-section">
        <div className="quote-mark">&ldquo;</div>
        <p className="quote-text">Music is always more exciting when you understand its context. This club is my chance to share the stories behind the music I love, and maybe inspire other people to fall in love with music too.</p>
        <div className="quote-attr">Mr. David</div>
      </div>

      <section className="meet">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="meet-img" src="/for hero/IMG_0568.jpg" alt="Mr. David at Penny Lane, Liverpool" />
        <div className="meet-text">
          <div className="section-label">Who&apos;s sending this</div>
          <h2 className="section-title">Meet Mr. David</h2>
          <div className="divider"></div>
          <p className="meet-body">David Stemmle (known as Mr. David to his younger students) teaches guitar, bass, drums, ukulele, and brass in Durham, NC. He also runs the Instrument Explorer series, where students get hands-on time with instruments from his personal collection of 230 from around the world.</p>
          <p className="meet-body">Every time David buys an instrument or album, or learns a new song to teach, he goes deep on the research behind it. He has been collecting instruments, musical knowledge, and the background stories for over 30 years. He loves bringing that knowledge to his teaching, and Notes from Mr. David is his way of sharing that with people who aren&apos;t in his classroom.</p>
        </div>
      </section>

      <section className="final-cta" id="waitlist-section">
        <div className="section-title">Become a Founding Member</div>
        <p className="final-cta-sub">First mailing ships July 1, 2026. Sign up today and lock in your founding member spot.</p>
        <a href="https://mrdavidmusic.memberful.com/checkout?plan=147377&return_url=https%3A%2F%2Fmrdavidmusic.com%2Fnotes" target="_blank" rel="noopener noreferrer" className="btn-waitlist">Become a Founding Member</a>
        <p className="cta-note">Domestic shipping only. International coming soon.</p>
      </section>

      <footer>
        <span>Notes from Mr. David &nbsp;&middot;&nbsp; mrdavidmusic.com/notes</span>
        <span>Durham, NC &nbsp;&middot;&nbsp; hello@mrdavidmusic.com</span>
      </footer>
    </>
  );
}
