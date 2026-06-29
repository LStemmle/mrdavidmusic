import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { TestimonialCarousel } from "./TestimonialCarousel";


export const metadata: Metadata = {
  title: "Notes from Mr. David | Monthly Musical Snail Mail Club",
  description:
    "A monthly musical snail mail club for kids and families. Stories, a collectible instrument card, and a curated playlist from Mr. David.",
};

export default function Notes() {
  return (
    <>
      {/* Meta Pixel */}
      <Script id="meta-pixel" strategy="afterInteractive">{`
        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1360294676019147');
        fbq('track', 'PageView');
      `}</Script>
      <noscript><img height="1" width="1" style={{display:"none"}} src="https://www.facebook.com/tr?id=1360294676019147&ev=PageView&noscript=1" alt="" /></noscript>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400;1,700&family=Lora:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Caveat:wght@600&family=Abril+Fatface&display=swap');

        html { scroll-behavior: smooth; }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .announcement-bar {
          background-color: var(--amber);
          color: var(--brown);
          font-family: 'Libre Baskerville', serif;
          font-size: 13px;
          font-weight: 700;
          text-align: center;
          padding: 10px 24px;
          letter-spacing: 0.02em;
        }

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
          background-color: var(--terracotta);
          color: #fff;
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
          background-color: #1C0F0C;
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
          top: 0;
          right: 0;
          width: 55%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        @media (max-width: 900px) {
          .hero-photo {
            width: 65%;
          }
        }

        @media (max-width: 600px) {
          .hero-photo {
            width: 100%;
            opacity: 0.35;
          }
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, #1C0F0C 0%, #1C0F0C 44%, rgba(28,15,12,0) 67%);
        }

        .hero-center {
          position: relative;
          z-index: 2;
          min-width: 0;
          max-width: 62%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-lede {
          font-family: 'Libre Baskerville', serif;
          font-size: 40px;
          font-style: normal;
          font-weight: 700;
          line-height: 1.55;
          color: var(--parchment);
          margin-bottom: 20px;
        }

        .hero-lede strong {
          font-weight: 700;
          color: var(--dusty-gold);
          font-style: normal;
        }

        .hero-lede-sub {
          font-size: 20px;
          font-weight: 400;
          line-height: 1.6;
          margin-top: 4px;
          margin-bottom: 28px;
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

        .inside-layout {
          display: grid;
          grid-template-columns: 65fr 35fr;
          gap: 72px;
          align-items: stretch;
        }

        .inside-grid {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .inside-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 4px;
          box-shadow: 0 8px 32px rgba(62,39,35,0.12);
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

        .testimonials {
          background-color: var(--parchment-dark);
          text-align: center;
        }

        .testimonials .section-label { color: var(--amber); }
        .testimonials .section-title { margin-bottom: 36px; }

        .testimonial-carousel {
          position: relative;
          max-width: 820px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 48px 1fr 48px;
          gap: 16px;
          align-items: center;
        }

        .testimonial-card {
          background-color: #fff;
          border: 1px solid rgba(200, 132, 42, 0.25);
          border-top: 4px solid var(--amber);
          padding: 40px 44px 36px;
          min-height: 240px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          box-shadow: 0 6px 24px rgba(62, 39, 35, 0.08);
          animation: testimonial-fade 0.45s ease;
        }

        @keyframes testimonial-fade {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .testimonial-quote-mark {
          font-family: 'Abril Fatface', serif;
          font-size: 64px;
          line-height: 0.7;
          color: var(--amber);
          opacity: 0.55;
          margin-bottom: 14px;
        }

        .testimonial-quote {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-style: italic;
          line-height: 1.65;
          color: var(--brown);
          margin-bottom: 22px;
          max-width: 620px;
        }

        .testimonial-attr {
          font-family: 'Caveat', cursive;
          font-size: 24px;
          color: var(--amber);
          font-weight: 600;
        }

        .testimonial-arrow {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid rgba(62, 39, 35, 0.25);
          background-color: #fff;
          color: var(--brown);
          font-size: 32px;
          line-height: 1;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 0 4px;
          transition: background-color 0.2s, color 0.2s, border-color 0.2s;
        }

        .testimonial-arrow:hover {
          background-color: var(--amber);
          color: #fff;
          border-color: var(--amber);
        }

        .testimonial-arrow:focus-visible {
          outline: 2px solid var(--amber);
          outline-offset: 3px;
        }

        .testimonial-dots {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 28px;
        }

        .testimonial-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: none;
          background-color: rgba(62, 39, 35, 0.22);
          cursor: pointer;
          padding: 0;
          transition: background-color 0.2s, transform 0.2s;
        }

        .testimonial-dot:hover { background-color: rgba(62, 39, 35, 0.4); }

        .testimonial-dot.is-active {
          background-color: var(--amber);
          transform: scale(1.2);
        }

        .testimonial-dot:focus-visible {
          outline: 2px solid var(--amber);
          outline-offset: 3px;
        }

        .gift-cta {
          background-color: var(--light-tan);
          text-align: center;
        }

        .gift-cta-inner {
          max-width: 720px;
          margin: 0 auto;
        }

        .gift-cta .section-title {
          color: var(--brown);
          margin-bottom: 24px;
        }

        .gift-cta-sub {
          font-size: 17px;
          line-height: 1.8;
          color: var(--brown);
          opacity: 0.8;
          margin-bottom: 36px;
        }

        .btn-gift {
          display: inline-block;
          background-color: var(--olive);
          color: #fff;
          font-family: 'Libre Baskerville', serif;
          font-size: 15px;
          font-weight: 700;
          padding: 16px 44px;
          border: none;
          cursor: pointer;
          letter-spacing: 0.06em;
          text-decoration: none;
          transition: background-color 0.2s;
        }

        .btn-gift:hover { background-color: #3F471F; }

        .how { background-color: var(--parchment-dark); }

        .steps {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 48px;
          align-items: start;
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

        .final-cta .section-title { color: var(--parchment); margin-bottom: 48px; }

        .final-cta-tagline {
          font-size: 18px;
          color: var(--parchment);
          margin-bottom: 44px;
          line-height: 1.6;
        }

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
          background-color: var(--terracotta);
          color: #fff;
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

        .btn-waitlist:hover { background-color: #a04e2c; }

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

        .challenge-section {
          background-color: var(--brown);
          padding: 72px 56px;
          text-align: center;
        }

        .challenge-section .section-label {
          color: var(--dusty-gold);
        }

        .challenge-section .section-title {
          color: var(--parchment);
          margin-bottom: 16px;
        }

        .challenge-sub {
          font-size: 16px;
          color: rgba(250, 243, 232, 0.65);
          margin-bottom: 44px;
          line-height: 1.8;
          max-width: 560px;
          margin-left: auto;
          margin-right: auto;
        }

        .social-follow-row {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .social-follow-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: rgba(255,255,255,0.08);
          border: 1px solid rgba(250, 243, 232, 0.2);
          color: var(--parchment);
          font-family: 'Libre Baskerville', serif;
          font-size: 13px;
          letter-spacing: 0.04em;
          padding: 12px 22px;
          text-decoration: none;
          transition: background-color 0.2s, border-color 0.2s;
        }

        .social-follow-btn:hover {
          background-color: rgba(255,255,255,0.14);
          border-color: rgba(250, 243, 232, 0.45);
        }

        .social-follow-btn svg {
          flex-shrink: 0;
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .challenge-section {
            padding: 56px 24px;
          }

          .social-follow-row {
            flex-direction: column;
            align-items: center;
          }

          .social-follow-btn {
            width: 220px;
            justify-content: center;
          }
        }

        .footer-social {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .footer-social a {
          color: #5A4A3A;
          transition: color 0.2s;
          display: flex;
          align-items: center;
        }

        .footer-social a:hover {
          color: var(--warm-gray);
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

          .hero-center {
            max-width: 100%;
            position: relative;
            z-index: 3;
          }

          .hero-lede {
            font-size: 22px;
            line-height: 1.55;
          }

          .hero-lede-sub {
            font-size: 15px;
            line-height: 1.6;
          }

          section {
            padding: 48px 24px;
          }

          .testimonial-carousel {
            grid-template-columns: 36px 1fr 36px;
            gap: 8px;
          }

          .testimonial-card {
            padding: 32px 22px 28px;
            min-height: 260px;
          }

          .testimonial-quote {
            font-size: 17px;
          }

          .testimonial-arrow {
            width: 36px;
            height: 36px;
            font-size: 24px;
          }

          .section-title {
            font-size: 30px;
            margin-bottom: 32px;
          }

          .inside-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .inside-img {
            order: -1;
            height: auto;
            max-height: 360px;
          }

          .inside-grid {
            gap: 32px;
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

          .pricing-divider {
            display: none;
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
        <Link href="/" className="nav-back">&larr; Home</Link>
        <a href="#waitlist-section" className="nav-cta">Join Us</a>
      </nav>

      <section className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="hero-photo" src="/david-with-guitars-web.jpg" alt="David with his guitars" />
        <div className="hero-overlay"></div>
        <div className="hero-center">
          <p className="hero-lede">
            <span style={{color: '#fff'}}>Every month, something arrives in the mailbox that makes the world </span>
            <span style={{color: '#C8842A'}}>sound more interesting.</span>
          </p>
          <p className="hero-lede hero-lede-sub">
            <span style={{color: '#fff'}}>No pressure or practice charts. Just a letter, a collectible instrument card, and a playlist from a teacher who has spent 30 years making music irresistible.</span>
          </p>
          <a href="#waitlist-section" className="btn-primary">Join the Club</a>
        </div>
      </section>

      <section className="inside">
        <div className="section-label">Every month</div>
        <h2 className="section-title">What&apos;s in the envelope</h2>
        <div className="inside-layout">
          <div className="inside-grid">
            <div className="inside-item">
              <h3 className="inside-item-title">A letter from David</h3>
              <p className="inside-item-desc">David&apos;s first letter is a welcome to the club. He&apos;ll introduce you to the five instrument families and link you to the first playlist featuring beautiful examples of music from each family.</p>
            </div>
            <div className="inside-item">
              <h3 className="inside-item-title">A collectible instrument card</h3>
              <p className="inside-item-desc">Each card features an instrument from David&apos;s personal collection, with facts on the back and a hidden secret: somewhere on every card, a Beatles figurine is tucked near the instrument. Each Beatle represents one of the five instrument families. Collect them all and watch out for the Blue Meanie.</p>
            </div>
            <div className="inside-item">
              <h3 className="inside-item-title">A curated playlist</h3>
              <p className="inside-item-desc">Back in the day, David made mixtapes for his friends. Now he does it for the club. Each month he assembles a YouTube playlist around the letter&apos;s theme, then records a short intro video where he walks you through each song, what he loves about it, and what to listen for.</p>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="inside-img" src="/envelope-contents-cropped.jpg" alt="A letter, instrument card, and other contents from a Notes from Mr. David envelope" />
        </div>
      </section>

      <TestimonialCarousel />

      <section className="gift-cta">
        <div className="gift-cta-inner">
          <h2 className="section-title">Know someone who loves music?</h2>
          <p className="gift-cta-sub">Give them the gift they&apos;ll look forward to every month. An entertaining letter in the mailbox, a collectible instrument card, and a playlist full of amazing music that they probably haven&apos;t heard before. No batteries, no screen time, no assembly required.</p>
          <a href="https://mrdavidmusic.memberful.com/gift?plan=147377" target="_blank" rel="noopener noreferrer" className="btn-gift">Give a gift subscription</a>
        </div>
      </section>

      <section className="how">
        <div className="section-label">Getting started</div>
        <h2 className="section-title">How it works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3 className="step-title">Subscribe</h3>
            <p className="step-desc">Sign up for $12/month (US), $14/month (international), or $5/month for digital delivery. You can cancel at any time, but why would you want to? Another musical adventure will be coming your way every month!</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3 className="step-title">Get your welcome package</h3>
            <p className="step-desc">Soon after you join, you will get a welcome letter that tells you all about the club and introduces you to the five instrument families that David will be referencing in his letters and in the collectible cards. He&apos;ll also tell you about the secret hidden Beatles action figures!</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3 className="step-title">Check your mailbox!</h3>
            <p className="step-desc">Open the envelope and you&apos;ll find a letter full of music stories: featured artists, instruments, albums, and history woven around a monthly theme. Scan the playlist card to start the music while you read. And add the instrument card to your growing collection.</p>
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
        <img className="meet-img" src="/for-hero/IMG_0568.jpg" alt="Mr. David at Penny Lane, Liverpool" />
        <div className="meet-text">
          <div className="section-label">Who&apos;s sending this</div>
          <h2 className="section-title">Meet Mr. David</h2>
          <div className="divider"></div>
          <p className="meet-body">David Stemmle (known as Mr. David to his younger students) teaches guitar, bass, drums, ukulele, and brass in Durham, NC. He also runs the Instrument Explorer series, where students get hands-on time with instruments from his personal collection of 230 from around the world.</p>
          <p className="meet-body">Every time David buys an instrument or album, or learns a new song to teach, he goes deep on the research behind it. He has been collecting instruments, musical knowledge, and the background stories for over 30 years. He loves bringing that knowledge to his teaching, and Notes from Mr. David is his way of sharing that with people who aren&apos;t in his classroom.</p>
        </div>
      </section>

      <section className="challenge-section">
        <div className="section-label">Follow along</div>
        <h2 className="section-title">100 Instruments in 100 Days</h2>
        <p className="challenge-sub">David is posting a new instrument video every day. Follow along on social while you wait for the first mailing.</p>
        <div className="social-follow-row">
          <a href="https://www.instagram.com/notesfrommrdavid/" target="_blank" rel="noopener noreferrer" className="social-follow-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            @notesfrommrdavid
          </a>
          <a href="https://www.tiktok.com/@mrdavidmusic" target="_blank" rel="noopener noreferrer" className="social-follow-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.26 8.26 0 004.83 1.55V6.79a4.85 4.85 0 01-1.06-.1z"/></svg>
            @mrdavidmusic
          </a>
          <a href="https://www.facebook.com/profile.php?id=61567897305312" target="_blank" rel="noopener noreferrer" className="social-follow-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            Notes from Mr. David
          </a>
          <a href="https://youtube.com/playlist?list=PL2w1TmHDI_Ptbwm5DLzPp96ts9Ek1pJbp&si=_g3kqLFDC5QdUSwW" target="_blank" rel="noopener noreferrer" className="social-follow-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            Watch the playlist
          </a>
        </div>
      </section>

      <section className="final-cta" id="waitlist-section">
        <div className="section-title">Join the Club</div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '48px', flexWrap: 'wrap', marginTop: '8px', alignItems: 'flex-start'}}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px'}}>
            <p style={{fontSize: '13px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.7, margin: 0}}>US / Domestic</p>
            <p style={{fontSize: '32px', fontWeight: 700, margin: 0}}>$12<span style={{fontSize: '16px', fontWeight: 400}}>/month</span></p>
            <p style={{fontSize: '12px', opacity: 0.55, margin: 0, fontStyle: 'italic'}}>Letter &amp; card in the mail</p>
            <a href="https://mrdavidmusic.memberful.com/checkout?plan=147377&return_url=https%3A%2F%2Fmrdavidmusic.com%2Fnotes" target="_blank" rel="noopener noreferrer" className="btn-waitlist">Subscribe Now</a>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px'}}>
            <p style={{fontSize: '13px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.7, margin: 0}}>International</p>
            <p style={{fontSize: '32px', fontWeight: 700, margin: 0}}>$14<span style={{fontSize: '16px', fontWeight: 400}}>/month</span></p>
            <p style={{fontSize: '12px', opacity: 0.55, margin: 0, fontStyle: 'italic'}}>Letter &amp; card in the mail</p>
            <a href="https://mrdavidmusic.memberful.com/checkout?plan=147590&return_url=https%3A%2F%2Fmrdavidmusic.com%2Fnotes" target="_blank" rel="noopener noreferrer" className="btn-waitlist">Subscribe Now</a>
          </div>
          <div style={{width: '1px', background: 'rgba(255,255,255,0.18)', alignSelf: 'stretch', margin: '0 8px'}} className="pricing-divider"></div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px'}}>
            <p style={{fontSize: '13px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.7, margin: 0}}>Digital</p>
            <p style={{fontSize: '32px', fontWeight: 700, margin: 0}}>$5<span style={{fontSize: '16px', fontWeight: 400}}>/month</span></p>
            <p style={{fontSize: '12px', opacity: 0.55, margin: 0, fontStyle: 'italic'}}>Delivered by email</p>
            {/* IMPORTANT: Replace DIGITAL_PLAN_ID with your Memberful digital plan ID */}
            <a href="https://mrdavidmusic.memberful.com/checkout?plan=148311&return_url=https%3A%2F%2Fmrdavidmusic.com%2Fnotes" target="_blank" rel="noopener noreferrer" className="btn-waitlist">Subscribe Digitally</a>
          </div>
        </div>
      </section>

      <footer>
        <span>Notes from Mr. David &nbsp;&middot;&nbsp; mrdavidmusic.com/notes</span>
        <span className="footer-social">
          <a href="https://www.instagram.com/notesfrommrdavid/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61567897305312" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://www.tiktok.com/@mrdavidmusic" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.26 8.26 0 004.83 1.55V6.79a4.85 4.85 0 01-1.06-.1z"/></svg>
          </a>
        </span>
        <span>Durham, NC &nbsp;&middot;&nbsp; hello@mrdavidmusic.com</span>
      </footer>
    </>
  );
}
