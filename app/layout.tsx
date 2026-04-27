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
    default: "合同会社focus｜宮城県のガラスフィルム施工専門店",
    template: "%s｜合同会社focus",
  },
  description:
    "宮城県全域対応のガラスフィルム施工専門店。UVカット・遮熱・プライバシー・防犯フィルムなど幅広いフィルム施工に対応。無料見積り受付中。",
  keywords:
    "ガラスフィルム,宮城県,仙台,多賀城,UVカット,遮熱フィルム,プライバシーフィルム,防犯フィルム",
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
