import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music Lessons — David Stemmle",
};

export default function Lessons() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Caveat:wght@600&family=Abril+Fatface&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --charcoal: #161614;
          --off-white: #F8F6F2;
          --off-white-dark: #EDE9E1;
          --orange: #D4500A;
          --orange-dark: #B84308;
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
          object-position: center 30%;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(20,18,14,0.88) 0%, rgba(20,18,14,0.4) 55%, rgba(20,18,14,0.15) 100%);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          padding: 0 56px 52px;
        }

        .hero-eyebrow {
          font-family: 'Caveat', cursive;
          font-size: 22px;
          color: #D4500A;
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
          max-width: 560px;
        }

        .offerings {
          background-color: var(--off-white);
          padding: 80px 56px;
        }

        .section-label {
          font-family: 'Caveat', cursive;
          font-size: 32px;
          color: var(--orange);
          margin-bottom: 10px;
        }

        .section-title {
          font-family: 'Abril Fatface', serif;
          font-size: 44px;
          line-height: 1.1;
          color: var(--dark);
          margin-bottom: 52px;
        }

        .offerings-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 2px;
          background-color: var(--border);
        }

        .offering-card {
          background-color: var(--off-white);
          transition: background-color 0.2s;
          display: flex;
          flex-direction: column;
        }

        .offering-card:hover { background-color: #fff; }

        .offering-card-photo {
          width: 100%;
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center center;
          display: block;
          flex-shrink: 0;
        }

        .offering-card-body {
          padding: 36px 40px 44px;
          flex: 1;
        }

        .offering-number { display: none; }

        .offering-title {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 24px;
          color: var(--dark);
          margin-bottom: 14px;
          border-top: 3px solid var(--orange);
          padding-top: 16px;
        }

        .offering-desc {
          font-size: 15px;
          line-height: 1.85;
          color: var(--muted);
        }

        .offering-instruments {
          margin-top: 16px;
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .instrument-tag {
          font-family: 'Libre Baskerville', serif;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--orange);
          background-color: #FAF0E8;
          border: 1px solid #E8D0C0;
          padding: 4px 10px;
        }

        .collection {
          background-color: var(--off-white-dark);
          padding: 80px 56px;
        }

        .collection .section-title {
          margin-bottom: 52px;
        }

        .collection-intro {
          max-width: 620px;
          font-size: 16px;
          line-height: 1.9;
          color: var(--muted);
          margin-bottom: 48px;
        }

        .collection-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          background-color: var(--border);
        }

        .collection-category {
          background-color: var(--off-white-dark);
          padding: 28px 24px;
        }

        .category-name {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 15px;
          color: var(--dark);
          margin-bottom: 12px;
          border-bottom: 2px solid var(--orange);
          padding-bottom: 8px;
        }

        .category-list {
          font-size: 13px;
          line-height: 2.0;
          color: var(--muted);
        }

        .collection-note {
          margin-top: 28px;
          font-family: 'Caveat', cursive;
          font-size: 18px;
          color: var(--orange);
        }

        .contact {
          background-color: var(--dark);
          padding: 80px 56px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .contact-left .section-title {
          color: #F0EAE0;
          margin-bottom: 20px;
        }

        .contact-left .section-label { color: var(--orange); }

        .contact-intro {
          font-size: 16px;
          line-height: 1.85;
          color: #9A9088;
          margin-bottom: 36px;
        }

        .contact-detail {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .contact-detail a {
          font-size: 15px;
          color: #C8C0B0;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: color 0.2s;
        }

        .contact-detail a:hover { color: #fff; }

        .contact-label {
          font-family: 'Caveat', cursive;
          font-size: 16px;
          color: var(--orange);
          margin-bottom: 2px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #7A7268;
        }

        .form-group input,
        .form-group textarea {
          background-color: #2A2822;
          border: 1px solid #3A3830;
          color: #E8E4DC;
          font-family: 'Libre Baskerville', serif;
          font-size: 14px;
          padding: 12px 16px;
          outline: none;
          transition: border-color 0.2s;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--orange);
        }

        .form-group textarea {
          height: 140px;
          resize: vertical;
        }

        .btn-submit {
          background-color: var(--orange);
          color: #fff;
          font-family: 'Libre Baskerville', serif;
          font-size: 13px;
          letter-spacing: 0.08em;
          padding: 14px 36px;
          border: none;
          cursor: pointer;
          align-self: flex-start;
          transition: background-color 0.2s;
        }

        .btn-submit:hover { background-color: var(--orange-dark); }

        footer {
          background-color: #0E0C0A;
          padding: 28px 56px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #3A3830;
          font-size: 12px;
          letter-spacing: 0.06em;
        }

        footer a {
          color: #3A3830;
          text-decoration: none;
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

          .offerings {
            padding: 48px 24px;
          }

          .section-title {
            font-size: 32px;
            margin-bottom: 32px;
          }

          .offerings-grid {
            grid-template-columns: 1fr;
          }

          .offering-card-photo {
            aspect-ratio: 3/2;
          }

          .offering-card-body {
            padding: 24px 24px 32px;
          }

          .collection {
            padding: 48px 24px;
          }

          .collection-grid {
            grid-template-columns: 1fr;
          }

          .contact {
            grid-template-columns: 1fr;
            padding: 48px 24px;
            gap: 48px;
          }

          .contact-left .section-title {
            font-size: 28px;
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
        <Link href="/" className="nav-logo">David Stemmle Music</Link>
        <div className="nav-links">
          <Link href="/lessons" className="active">Lessons</Link>
          <Link href="/notes">Notes</Link>
          <Link href="/used-gear">Used Gear</Link>
          <Link href="/recordings">Recordings</Link>
        </div>
      </nav>

      <section className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="hero-photo" src="/for lessons/SA270197.jpg" alt="David teaching brass with a student" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-eyebrow">Durham, NC</div>
          <h1 className="hero-title">Music Lessons</h1>
          <p className="hero-sub">Private lessons, studio recitals, school programs, and hands-on time with 250+ instruments from around the world.</p>
        </div>
      </section>

      <section className="offerings">
        <div className="section-label">What David offers</div>
        <h2 className="section-title">The studio</h2>

        <div className="offerings-grid">
          <div className="offering-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="offering-card-photo" src="/for lessons/S4100141.jpg" alt="Student playing guitar" style={{objectPosition: "center 20%"}} />
            <div className="offering-card-body">
              <div className="offering-number">01</div>
              <h3 className="offering-title">Private Lessons</h3>
              <p className="offering-desc">One-on-one lessons for students of all ages and experience levels. David meets you where you are and builds from there. Beginners welcome.</p>
              <div className="offering-instruments">
                <span className="instrument-tag">Guitar</span>
                <span className="instrument-tag">Bass</span>
                <span className="instrument-tag">Drums</span>
                <span className="instrument-tag">Ukulele</span>
                <span className="instrument-tag">Brass</span>
                <span className="instrument-tag">Mandolin</span>
                <span className="instrument-tag">Synthesizers</span>
                <span className="instrument-tag">Studio</span>
              </div>
            </div>
          </div>

          <div className="offering-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="offering-card-photo" src="/for lessons/IMG_3288.jpg" alt="Kids exploring the harmonium" style={{objectPosition: "center 30%"}} />
            <div className="offering-card-body">
              <div className="offering-number">02</div>
              <h3 className="offering-title">Instrument Explorer</h3>
              <p className="offering-desc">A multi-week series where students explore David&apos;s collection of 230+ instruments, one family per week: brass, strings, percussion, synthesizers, world instruments, and more. Each week is hands-on with real instruments from around the world.</p>
            </div>
          </div>

          <div className="offering-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="offering-card-photo" src="/for hero/recital.jpg" alt="Studio recital performance" style={{objectPosition: "center 60%"}} />
            <div className="offering-card-body">
              <div className="offering-number">03</div>
              <h3 className="offering-title">Studio Recitals</h3>
              <p className="offering-desc">The studio holds recitals twice a year. Occasionally, students take on a special project and perform a full album from start to finish. Past showcases have covered Radiohead&apos;s OK Computer, Pink Floyd&apos;s Dark Side of the Moon, and David Bowie&apos;s Ziggy Stardust.</p>
            </div>
          </div>

          <div className="offering-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="offering-card-photo" src="/for lessons/IMG_1696.jpg" alt="School music program" style={{objectPosition: "center 25%"}} />
            <div className="offering-card-body">
              <div className="offering-number">04</div>
              <h3 className="offering-title">School Programs</h3>
              <p className="offering-desc">Educational music programs for classrooms. David brings instruments and stories into schools, tailored to the age group and curriculum. Reach out to discuss availability and format.</p>
            </div>
          </div>

          <div className="offering-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="offering-card-photo" src="/for lessons/20230406_203750.jpg" alt="Cymbal detail" />
            <div className="offering-card-body">
              <div className="offering-number">05</div>
              <h3 className="offering-title">Recording</h3>
              <p className="offering-desc">Studio services for singer-songwriters who want a more developed sound. Bring your song in its current state and we can explore it with a wide palette of sounds and styles. Custom packages available.</p>
            </div>
          </div>

          <div className="offering-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="offering-card-photo" src="/for hero/texture photos/PXL_20260411_000155867.MP.jpg" alt="Synthesizer controls" style={{objectPosition: "center 50%"}} />
            <div className="offering-card-body">
              <div className="offering-number">06</div>
              <h3 className="offering-title">Music Production</h3>
              <p className="offering-desc">Hands-on classes covering the fundamentals of music production: beat-making, arrangement, recording, and mixing. Students work with real synthesizers, drum machines, and studio software to develop their own sound.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="collection">
        <div className="section-label">The collection</div>
        <h2 className="section-title">230+ instruments, available to play</h2>
        <p className="collection-intro">Every instrument in David&apos;s collection is available for appointment play and curiosity rent. If you&apos;ve ever wondered what a theremin sounds like, or wanted to try a steel pan, this is the place.</p>

        <div className="collection-grid">
          <div className="collection-category">
            <div className="category-name">Guitars</div>
            <div className="category-list">Solid body, hollow body, semi-hollow, acoustic, classical, 12-string, bass, cigar box, archtop, and more (28 total)</div>
          </div>
          <div className="collection-category">
            <div className="category-name">Brass</div>
            <div className="category-list">Trombone, trumpet, cornet, French horn, mellophone, alto horn, baritone, euphonium, valve trombone</div>
          </div>
          <div className="collection-category">
            <div className="category-name">Folk Strings</div>
            <div className="category-list">Mandolins, ukuleles, hammer dulcimer, mountain dulcimer, banjos, autoharp, Celtic harp, guitalele, charango, ronroco, zither, tiple, strumstick</div>
          </div>
          <div className="collection-category">
            <div className="category-name">Woodwinds</div>
            <div className="category-list">Clarinet, bass clarinet, saxophones, oboe, bassoon, flute, piccolo, melodica, recorder, pan flute, Native American flute, harmonicas, a Civil War era wooden flute</div>
          </div>
          <div className="collection-category">
            <div className="category-name">Percussion</div>
            <div className="category-list">Drum set, djembe, steel pan, tabla, talking drum, frame drums, darbuka, pandeiro, marimba, glockenspiel, guiro, washboard, and more</div>
          </div>
          <div className="collection-category">
            <div className="category-name">World &amp; Folk</div>
            <div className="category-list">Sitar, sarangi, kora, gu-zheng, oud, dilruba, dan tranh, hulusi, didgeridoo, kalimba, Cuban tres, concertina, harmonium</div>
          </div>
          <div className="collection-category">
            <div className="category-name">Orchestra Strings</div>
            <div className="category-list">Violins, violas, and cellos in multiple sizes, from 1/64 up to full</div>
          </div>
          <div className="collection-category">
            <div className="category-name">Keyboards &amp; Synths</div>
            <div className="category-list">Moog Sub Phatty, Moog Theremini, Roland Juno 106, Korg OP-6, Arturia PolyBrute, Teenage Engineering OP-1, Korg Volca, and more</div>
          </div>
          <div className="collection-category">
            <div className="category-name">Amplifiers &amp; Effects</div>
            <div className="category-list">9 amplifiers including a 1967 Fender Super Reverb and Vox AC10. 52 effects pedals covering delay, reverb, modulation, fuzz, and synthesis</div>
          </div>
        </div>
        <p className="collection-note">All instruments available for appointment play. Get in touch to schedule.</p>
      </section>

      <section className="contact">
        <div className="contact-left">
          <div className="section-label">Get in touch</div>
          <h2 className="section-title">Let&apos;s talk about the next steps in your musical journey</h2>
          <div className="contact-detail">
            <div>
              <div className="contact-label">Phone</div>
              <a href="tel:9198243993">919-824-3993</a>
            </div>
          </div>
        </div>

        <form className="contact-form" name="contact" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-group">
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" placeholder="First and last name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" placeholder="you@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="message">What brings you here?</label>
            <textarea id="message" placeholder="What instrument, what experience level, any questions..."></textarea>
          </div>
          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      </section>

      <footer>
        <span>&copy; 2026 David Stemmle Music &middot; Durham, NC</span>
        <Link href="/">mrdavidmusic.com</Link>
      </footer>
    </>
  );
}
