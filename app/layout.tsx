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
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1360294676019147');
            fbq('track', 'PageView');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
