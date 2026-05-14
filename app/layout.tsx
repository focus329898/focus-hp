import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GA_ID = "G-W4FWZ6DBPE";

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "仙台ガラスフィルム｜宮城県の住宅・店舗ガラスフィルム施工専門店",
    template: "%s｜仙台ガラスフィルム",
  },
  description:
    "宮城県全域対応の住宅・店舗ガラスフィルム施工専門店。UVカット・遮熱・プライバシー・防犯フィルムなど幅広いフィルム施工に対応。無料見積り受付中。",
  keywords:
    "ガラスフィルム,宮城県,仙台市,多賀城市,UVカット,遮熱フィルム,プライバシーフィルム,防犯フィルム,住宅,店舗,施工",
  metadataBase: new URL("https://llc-focus.com"),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://llc-focus.com",
    siteName: "仙台ガラスフィルム",
    title: "仙台ガラスフィルム｜宮城県の住宅・店舗ガラスフィルム施工専門店",
    description:
      "宮城県全域対応の住宅・店舗ガラスフィルム施工専門店。UVカット・遮熱・プライバシー・防犯フィルムなど幅広いフィルム施工に対応。無料見積り受付中。",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630, alt: "仙台ガラスフィルム" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "仙台ガラスフィルム｜宮城県の住宅・店舗ガラスフィルム施工専門店",
    description: "宮城県全域対応の住宅・店舗ガラスフィルム施工専門店。無料見積り受付中。",
    images: ["/images/hero.jpg"],
  },
  verification: {
    google: "i4aRwI0WZYrE3bnqxjTpLxhZ-xK_86nu2WPq4jQvx80",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSerifJP.variable} ${notoSansJP.variable}`}
    >
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <script dangerouslySetInnerHTML={{__html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}} />
      </head>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "仙台ガラスフィルム",
              url: "https://llc-focus.com",
              telephone: "022-355-7620",
              email: "focusogata@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "浮島字高原176-1 アイリス高原B202",
                addressLocality: "多賀城市",
                addressRegion: "宮城県",
                postalCode: "985-0831",
                addressCountry: "JP",
              },
              areaServed: "宮城県",
              description: "宮城県全域対応の住宅・店舗ガラスフィルム施工専門店。UVカット・遮熱・プライバシー・防犯フィルムなど幅広いフィルム施工に対応。",
              openingHours: "Mo-Su 09:00-18:00",
              priceRange: "¥¥",
            }),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
