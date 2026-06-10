"use client";

import { useEffect, useState } from "react";

const TESTIMONIALS = [
  {
    quote:
      "My son will often come home talking about some cool instrument Mr. David introduced him to. He keeps music exciting.",
    name: "Quinn",
  },
  {
    quote:
      "My kid bounced around among a few teachers but never really got into music until we found Mr. David. Now they have a passion for music that is astounding.",
    name: "Chris",
  },
  {
    quote:
      "He instills a love of music with compassion, kindness, and more patience than anyone I know.",
    name: "Lena",
  },
  {
    quote:
      "David pushed my son in the best way possible, while encouraging him and expanding his love for music. My son always looked forward to lessons.",
    name: "Jennifer",
  },
  {
    quote:
      "He not only fostered my love for guitar but also my self confidence. You would be remiss to go anywhere else.",
    name: "Devon",
  },
  {
    quote: "He's fun, and a crazy talented teacher. Five stars.",
    name: "Robyn",
  },
];

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused]);

  const prev = () =>
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);

  const current = TESTIMONIALS[index];

  return (
    <section
      className="testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <h2 className="section-title">Hear from the community.</h2>
      <div className="testimonial-carousel">
        <button
          type="button"
          className="testimonial-arrow testimonial-arrow-prev"
          onClick={prev}
          aria-label="Previous testimonial"
        >
          &lsaquo;
        </button>
        <div className="testimonial-card" key={index}>
          <div className="testimonial-quote-mark">&ldquo;</div>
          <p className="testimonial-quote">{current.quote}</p>
          <p className="testimonial-attr">&mdash; {current.name}</p>
        </div>
        <button
          type="button"
          className="testimonial-arrow testimonial-arrow-next"
          onClick={next}
          aria-label="Next testimonial"
        >
          &rsaquo;
        </button>
      </div>
      <div className="testimonial-dots" role="tablist">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`testimonial-dot${i === index ? " is-active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            aria-selected={i === index}
            role="tab"
          />
        ))}
      </div>
    </section>
  );
}
