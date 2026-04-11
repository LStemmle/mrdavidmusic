"use client";

import { useState, FormEvent } from "react";

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="form-success">
        <p className="form-success-title">You&apos;re on the list!</p>
        <p className="form-success-desc">We&apos;ll let you know when the first mailing ships.</p>
      </div>
    );
  }

  return (
    <form className="waitlist-form" name="waitlist" data-netlify="true" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="waitlist" />
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="first-name">First name</label>
          <input type="text" id="first-name" name="first-name" placeholder="First name" required />
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Last name</label>
          <input type="text" id="last-name" name="last-name" placeholder="Last name" required />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="waitlist-email">Email address</label>
        <input type="email" id="waitlist-email" name="email" placeholder="you@example.com" required />
      </div>
      <button type="submit" className="btn-waitlist">Reserve Your Spot</button>
    </form>
  );
}
