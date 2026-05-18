"use client";

const CUTOFF = new Date("2026-06-10T23:59:59");

export function LaunchBanner() {
  const beforeCutoff = new Date() < CUTOFF;
  return (
    <div className="announcement-bar">
      {beforeCutoff
        ? "First mailing ships July 1 — sign up by June 10 to be included."
        : "First mailing ships July 1 — join now and receive your welcome package while you wait."}
    </div>
  );
}

export function LaunchCtaSubtext() {
  const beforeCutoff = new Date() < CUTOFF;
  return (
    <p className="final-cta-sub">
      {beforeCutoff
        ? "Sign up by June 10 to receive the first mailing on July 1."
        : "Join now and receive your welcome package while you wait for the July 1 mailing."}
    </p>
  );
}
