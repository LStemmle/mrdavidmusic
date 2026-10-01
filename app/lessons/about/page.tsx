import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Teachers — David Stemmle Music",
  description:
    "Meet the teachers at David Stemmle Music in Durham, NC: David Stemmle, Rafael Green, Aaron Ford, and Julian Brown.",
};

export default function About() {
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
          object-position: center 45%;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to top, rgba(20,18,14,0.88) 0%, rgba(20,18,14,0.58) 30%, rgba(20,18,14,0.22) 66%, rgba(20,18,14,0.05) 100%),
            linear-gradient(to right, rgba(20,18,14,0.74) 0%, rgba(20,18,14,0.42) 30%, rgba(20,18,14,0) 66%);
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
          max-width: 620px;
        }

        .crumb {
          background-color: var(--off-white);
          padding: 22px 56px 0;
        }

        .crumb a {
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--muted);
          text-decoration: none;
          border-bottom: 1px solid var(--border);
          padding-bottom: 3px;
          transition: color 0.2s, border-color 0.2s;
        }

        .crumb a:hover { color: var(--orange); border-color: var(--orange); }

        .teachers {
          background-color: var(--off-white);
          padding: 56px 56px 40px;
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
          margin-bottom: 24px;
        }

        .teachers-intro {
          max-width: 660px;
          font-size: 16px;
          line-height: 1.9;
          color: var(--muted);
          margin-bottom: 64px;
        }

        .teacher {
          display: grid;
          grid-template-columns: 400px 1fr;
          gap: 56px;
          align-items: start;
          padding: 56px 0;
          border-top: 1px solid var(--border);
        }

        .teacher:nth-of-type(even) .teacher-photo-wrap { order: 2; }
        .teacher:nth-of-type(even) { grid-template-columns: 1fr 400px; }

        .teacher-photo {
          width: 100%;
          aspect-ratio: 4/5;
          object-fit: cover;
          display: block;
        }

        .teacher-caption {
          font-family: 'Caveat', cursive;
          font-size: 17px;
          color: var(--muted);
          margin-top: 10px;
        }

        .teacher-name {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: 36px;
          line-height: 1.15;
          color: var(--dark);
          border-top: 3px solid var(--orange);
          padding-top: 18px;
          margin-bottom: 6px;
        }

        .teacher-role {
          font-size: 12px;
          letter-spacing: 0.14em;
          line-height: 1.7;
          text-transform: uppercase;
          color: var(--orange);
          margin-bottom: 22px;
          max-width: 640px;
        }

        .teacher-bio p {
          font-size: 15.5px;
          line-height: 1.95;
          color: var(--body);
          margin-bottom: 18px;
          max-width: 640px;
        }

        .teacher-bio p:last-child { margin-bottom: 0; }

        .photo-placeholder {
          width: 100%;
          aspect-ratio: 4/5;
          background-color: var(--off-white-dark);
          border: 1px dashed var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 24px;
        }

        .photo-placeholder span {
          font-family: 'Caveat', cursive;
          font-size: 22px;
          color: var(--tan);
        }

        .bio-placeholder {
          font-size: 15.5px;
          line-height: 1.95;
          color: var(--muted);
          font-style: italic;
          max-width: 640px;
        }

        .cta {
          background-color: var(--dark);
          padding: 72px 56px;
        }

        .cta .section-label { color: var(--orange); }

        .cta-title {
          font-family: 'Abril Fatface', serif;
          font-size: 40px;
          line-height: 1.15;
          color: #F0EAE0;
          margin-bottom: 20px;
          max-width: 720px;
        }

        .cta-text {
          font-size: 16px;
          line-height: 1.85;
          color: #9A9088;
          max-width: 600px;
          margin-bottom: 34px;
        }

        .cta-row { display: flex; flex-wrap: wrap; gap: 16px; align-items: center; }

        .btn {
          display: inline-block;
          background-color: var(--orange);
          color: #fff;
          font-family: 'Libre Baskerville', serif;
          font-size: 13px;
          letter-spacing: 0.08em;
          padding: 14px 32px;
          text-decoration: none;
          transition: background-color 0.2s;
        }

        .btn:hover { background-color: var(--orange-dark); }

        .btn-quiet {
          background-color: transparent;
          border: 1px solid #3A3830;
          color: #C8C0B0;
        }

        .btn-quiet:hover { background-color: #2A2822; }

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

        @media (max-width: 900px) {
          .teacher,
          .teacher:nth-of-type(even) {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .teacher:nth-of-type(even) .teacher-photo-wrap { order: 0; }
          .teacher-photo { aspect-ratio: 3/2; }
          .photo-placeholder { aspect-ratio: 3/2; }
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

          .hero { height: 360px; }
          .hero-content { padding: 0 24px 36px; }
          .hero-title { font-size: 42px; }
          .hero-sub { font-size: 15px; }

          .crumb { padding: 18px 24px 0; }
          .teachers { padding: 36px 24px 24px; }
          .section-title { font-size: 32px; }
          .teachers-intro { margin-bottom: 36px; }
          .teacher { padding: 36px 0; }
          .teacher-name { font-size: 28px; }
          .cta { padding: 48px 24px; }
          .cta-title { font-size: 28px; }

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
        <img className="hero-photo" src="/teachers/studio-group.jpg" alt="Students and teachers together in the studio after a recital" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-eyebrow">Durham, NC</div>
          <h1 className="hero-title">Our Teachers</h1>
          <p className="hero-sub">Our studio in Durham has four teachers, covering guitar, bass, drums, ukulele, voice, songwriting, brass, and studio recording.</p>
        </div>
      </section>

      <div className="crumb">
        <Link href="/lessons">&larr; Back to lessons</Link>
      </div>

      <section className="teachers">
        <div className="section-label">Who you&apos;ll be working with</div>
        <h2 className="section-title">Meet the teachers</h2>
        <p className="teachers-intro">Every student is matched with the teacher who fits what they want to play. Some come in knowing exactly what they want to learn and some are still figuring that out. Lessons are one-on-one, in person in Durham, and open to all ages and experience levels.</p>

        <article className="teacher">
          <div className="teacher-photo-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="teacher-photo" src="/teachers/david-portrait.jpg" alt="David Stemmle in the instrument room" style={{objectPosition: "center 22%"}} />
          </div>
          <div>
            <h3 className="teacher-name">David Stemmle</h3>
            <div className="teacher-role">Music Explorer Series, Guitar, Bass, Ukulele, Mandolin, Drums, Trombone, Trumpet, Synthesizers, Studio Recording</div>
            <div className="teacher-bio">
              <p>Since my first guitar experience at the age of 5, music has been a huge part of my life. Learning instruments and playing with others has been one of my greatest joys. I have studied musical instruments, artists, albums, theory, and history since I was 5! I have played guitar, bass, drums, trombone, bass clarinet, percussion and more in orchestras, rock, folk, R&amp;B, gogo, church bands and concert bands. But my favorite musical experiences have been right here in my own teaching studio: playing with students of all ages, and being a positive part of their musical lives.</p>
              <p>Twice a year the studio puts on a recital, which is really a big party with live music. It is always a huge and fun challenge, and full of surprises. Over the years, the studio has done some big projects, like playing albums straight through. We have done Radiohead&apos;s OK Computer, Pink Floyd&apos;s Dark Side of the Moon, The Beatles&apos; Rubber Soul, and David Bowie&apos;s Ziggy Stardust.</p>
              <p>I feel very fortunate to have such amazing teachers and talented musicians like Rafael, Aaron, and Julian teaching here. Our biggest goals are to nurture a student&apos;s passion for music, and share our own. It&apos;s so fun, we don&apos;t work our instruments, we play them. Come join us...</p>
            </div>
          </div>
        </article>

        <article className="teacher">
          <div className="teacher-photo-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="teacher-photo" src="/teachers/rafael.jpg" alt="Rafael Green performing on guitar" style={{objectPosition: "center 42%"}} />
          </div>
          <div>
            <h3 className="teacher-name">Rafael Green</h3>
            <div className="teacher-role">Guitar, Bass, Ukulele, Voice, Songwriting, Music Theory</div>
            <div className="teacher-bio">
              <p>I was born in Essen, Germany, to musician parents and spent my early years in Wraysbury, England, while my mother taught at the Guildhall School of Music &amp; Drama. After moving to Tucson, Arizona, I began showing an interest in playing an instrument and acquired my first guitar. I discovered a love for performing and songwriting in junior high school and, after graduating from high school, attended Berklee College of Music, where I studied guitar, voice, arranging, production, and songwriting. I graduated with honors in 2013 and shortly thereafter moved to Nashville, Tennessee, where I performed in various bands alongside fellow alumni.</p>
              <p>I now live in Durham, North Carolina, where I perform extensively with my own band as well as with local groups including One After 919, Crazy Chester, Ravary, and Georgia Moon &amp; The Wrong Band. I also work as a freelance session musician, music producer, and educator, with many years of experience teaching guitar, voice, songwriting, and music theory.</p>
              <p>As a teacher, I aim not only to build a strong foundation in guitar fundamentals but also to inspire students to discover their own creative voice and pursue the unique musical path that resonates most deeply with them.</p>
            </div>
          </div>
        </article>

        <article className="teacher">
          <div className="teacher-photo-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="teacher-photo" src="/teachers/aaron.jpg" alt="Aaron Ford at the drum kit" style={{objectPosition: "center 30%"}} />
          </div>
          <div>
            <h3 className="teacher-name">Aaron Ford</h3>
            <div className="teacher-role">Drums</div>
            <div className="teacher-bio">
              <p>Hey hey! My name is Aaron. I&apos;ve been playing music since I was 14 years old and got my first drum set. Before that it was playing along to music videos and my favorite cassettes with pencils turned around backwards while I air drummed along.</p>
              <p>I spent 30+ years playing music in a professional setting both as a band member and a &ldquo;hired gun&rdquo; for artists from multiple genres. I toured the world several times before deciding to slow down and spend more time at home. Currently, I am the chef de cuisine at Monuts on 9th Street here in Durham.</p>
              <p>I look forward to helping others learn about the joy of playing drums and the freedom and creativity it provides. I like to focus on both classic and more contemporary ways of teaching to better fit whatever needs you might have and whatever goals you want to achieve.</p>
            </div>
          </div>
        </article>

        <article className="teacher">
          <div className="teacher-photo-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="teacher-photo" src="/teachers/julian.jpg" alt="Julian Brown playing guitar" style={{objectPosition: "58% center"}} />
          </div>
          <div>
            <h3 className="teacher-name">Julian Brown</h3>
            <div className="teacher-role">Bass, Guitar</div>
            <div className="teacher-bio">
              <p>Hey! My name is Julian Brown, and I&apos;m the bass instructor here. My musical journey started in this studio when I was 9 years old. Guitar was my first instrument, and I took lessons with David for nine years, which helped shape me into the musician I am today. Growing up, I also played violin in orchestra and sang in choir.</p>
              <p>At Elon University, I&apos;ve had the opportunity to play bass and guitar in a variety of ensembles, including marching band, big band jazz, jazz combo, and the Elon Music Ambassadors. I also play bass, guitar, and sing backup vocals in my band, Thistle Ridge Band.</p>
              <p>Coming back to teach in the room where David taught me has been great. I&apos;m excited to work with students of all skill levels and help them grow as musicians while having fun along the way!</p>
            </div>
          </div>
        </article>
      </section>

      <section className="cta">
        <div className="section-label">Ready to start</div>
        <h2 className="cta-title">Tell us what you want to play and we&apos;ll match you with a teacher</h2>
        <p className="cta-text">Get in touch and let us know the instrument, the age of the student, and anything you already know about what you want out of lessons. We&apos;ll take it from there.</p>
        <div className="cta-row">
          <Link href="/lessons#contact" className="btn">Get in touch</Link>
          <Link href="/lessons" className="btn btn-quiet">See what we offer</Link>
        </div>
      </section>

      <footer>
        <span>&copy; 2026 David Stemmle Music &middot; Durham, NC</span>
        <Link href="/">mrdavidmusic.com</Link>
      </footer>
    </>
  );
}
