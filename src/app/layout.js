import Script from "next/script";

import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { WatchVideoRoot } from "@/components/animes/watchVideoRoot";
import { AdScript } from "@/sdk/ad";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

import { keywords } from "@/metadata/keywords";
import { title, description } from "@/metadata/default";

export const metadata = {
  title: {
    default: title,
    template: "%s",
  },
  description: {
    default: description,
    template: "%s",
  },
  keywords,
  metadataBase: new URL("https://pobreanimes.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    siteName: "Pobre Animes",
    images: [
      {
        url: "/banner.jpg",
        width: 580,
        height: 580,
      },
    ],
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    images: "/banner.jpg",
  },
};

export const viewport = {
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={cn("flex flex-col min-h-svh", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="container flex-1 px-4 py-9 md:px-6">
            {children}
            <WatchVideoRoot />
          </main>
          <Footer />
        </ThemeProvider>
        <AdScript />

        <Script id="jw-player-key" type="text/javaScript">
          {`jwplayer.key="64HPbvSQorQcd52B8XFuhMtEoitbvY/EXJmMBfKcXZQU2Rnn";`}
        </Script>
        <Script
          id="jw-player-cdn"
          src="https://content.jwplatform.com/libraries/KB5zFt7A.js"
          strategy="afterInteractive"
        ></Script>
      </body>
    </html>
  );
}
