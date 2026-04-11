import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "David Stemmle Music — Durham, NC",
  description: "Music lessons, recordings, used gear, and Notes from Mr. David. Durham, North Carolina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
