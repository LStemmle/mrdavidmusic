"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
    });
    setSubmitted(true);
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "form_submit", { form_name: "contact" });
    }
  };

  if (submitted) {
    return (
      <div className="form-success">
        <p className="form-success-title">Message sent!</p>
        <p className="form-success-desc">Thanks for reaching out. David will get back to you soon.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" name="contact" data-netlify="true" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <div className="form-group">
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" name="name" placeholder="First and last name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input type="email" id="email" name="email" placeholder="you@example.com" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">What brings you here?</label>
        <textarea id="message" name="message" placeholder="What instrument, what experience level, any questions..."></textarea>
      </div>
      <button type="submit" className="btn-submit">Send Message</button>
    </form>
  );
}
