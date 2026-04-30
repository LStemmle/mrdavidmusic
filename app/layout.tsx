import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "David Stemmle Music — Durham, NC",
  description: "Music lessons, recordings, used gear, and Notes from Mr. David. Durham, North Carolina.",
};

const GA_ID = "G-9M12E2JCEV";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <Script id="memberful-overlay" strategy="afterInteractive">
          {`
            (function(c) {
              var s = document.createElement("script");
              s.src = "https://js.memberful.com/embed.js";
              s.onload = function() { Memberful.setup(c) };
              document.head.appendChild(s);
            })({
              site: ["https://mrdavidmusic.memberful.com"]
            });
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
