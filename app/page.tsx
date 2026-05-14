import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/posts";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import FlowSteps from "@/components/FlowSteps";
import FaqPreview from "@/components/FaqPreview";

export const metadata: Metadata = {
  title: "仙台ガラスフィルム｜宮城県のガラスフィルム施工専門店",
  description:
    "宮城県全域対応のガラスフィルム施工専門店。UVカット・遮熱・プライバシー・防犯フィルムなど幅広いフィルム施工に対応。無料見積り受付中。",
};

const news = [
  { date: "2026-05-14", title: "ホームページをリニューアルしました" },
  { date: "2026-04-27", title: "ウェブサイトをリニューアルしました" },
  { date: "2026-04-01", title: "春の施工キャンペーン開始（4月末まで）" },
  { date: "2026-03-15", title: "宮城県名取市エリアの対応を強化しました" },
];

const reasons = [
  {
    title: "卓越した技術力",
    text: "長年の経験と豊富な施工実績。気泡なし・ムラなしの仕上がりをお約束します。難しい箇所への施工も得意としています。",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <rect x="8" y="8" width="48" height="48" rx="4" stroke="#c9a84c" strokeWidth="2.5" fill="none"/>
        <path d="M16 20 L48 20" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 28 Q32 16 48 28" stroke="#0f1e3d" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M16 28 L48 28 L48 48 L16 48 Z" fill="#0f1e3d" fillOpacity="0.08"/>
        <circle cx="44" cy="44" r="10" fill="#0f1e3d" stroke="#c9a84c" strokeWidth="2"/>
        <path d="M40 44 L43 47 L48 41" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "安心の施工保証",
    text: "施工後のフィルムの剥がれや気泡が生じた場合は、無償で対応いたします。アフターフォローも万全です。",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <path d="M32 8 L52 16 L52 32 C52 43 43 52 32 56 C21 52 12 43 12 32 L12 16 Z" stroke="#c9a84c" strokeWidth="2.5" fill="#0f1e3d" fillOpacity="0.08"/>
        <path d="M32 8 L52 16 L52 32 C52 43 43 52 32 56 C21 52 12 43 12 32 L12 16 Z" stroke="#c9a84c" strokeWidth="2.5" fill="none"/>
        <path d="M22 32 L28 38 L42 26" stroke="#c9a84c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "丁寧なご対応",
    text: "お客様のご要望をしっかり伺い、最適なフィルムをご提案します。現地調査・お見積りは無料です。",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <circle cx="24" cy="20" r="8" stroke="#c9a84c" strokeWidth="2.5" fill="none"/>
        <path d="M10 48 C10 38 38 38 38 48" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <circle cx="44" cy="26" r="6" stroke="#0f1e3d" strokeWidth="2" fill="#c9a84c" fillOpacity="0.15"/>
        <path d="M41 26 L43 28 L47 23" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M44 32 L44 48" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 3"/>
      </svg>
    ),
  },
];

const testimonials = [
  {
    area: "仙台市・一戸建て",
    text: "南向きの大きな窓に遮熱フィルムを施工してもらいました。夏の暑さが大幅に軽減されて、エアコンの使用量も減りました。丁寧な作業で仕上がりも完璧です。",
    stars: 5,
  },
  {
    area: "多賀城市・マンション",
    text: "プライバシーフィルムを施工してもらいました。外からの視線が気になっていたのですが、施工後はカーテンを開けて生活できるようになり、室内がとても明るくなりました。",
    stars: 5,
  },
  {
    area: "塩釜市・店舗",
    text: "店舗の窓にデザインフィルムを施工してもらいました。お店の雰囲気がガラリと変わり、お客様からも好評をいただいています。",
    stars: 5,
  },
];

const works = [
  { area: "仙台市・戸建て", description: "遮熱フィルム施工 / リビング大窓", img: "/images/work-sendai-house.jpg" },
  { area: "多賀城市・マンション", description: "プライバシーフィルム施工 / 全室", img: "/images/work-tagajo-mansion.jpg" },
  { area: "塩竈市・店舗", description: "デザインフィルム施工 / ショーウィンドウ", img: "/images/work-shiogama-store.jpg" },
  { area: "名取市・オフィス", description: "UVカット＋飛散防止施工", img: "/images/work-natori-office.jpg" },
];

export default async function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <HeroSection />

<section className="py-12 bg-cream">
        <div className="max-w-5xl mx-auto px-4">
          <h2
            className="text-2xl font-bold text-navy mb-6 pb-3 border-b-2 border-gold"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            お知らせ
          </h2>
          <ul className="space-y-4">
            {news.map((item, i) => (
              <li key={i} className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-start">
                <time className="text-gold font-medium text-sm shrink-0">{item.date}</time>
                <span className="text-navy">{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold font-medium mb-2">Why choose us</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-navy"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              選ばれる3つの理由
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((r, i) => (
              <div
                key={i}
                className="text-center p-8 bg-cream rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-5">{r.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-3">{r.title}</h3>
                <p className="text-gray-600 leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold font-medium mb-2">Testimonials</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-navy"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              お客様の声
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <span key={j} className="text-gold text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">「{t.text}」</p>
                <p className="text-sm text-gray-400 font-medium">{t.area}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/works"
              className="inline-block border-2 border-navy text-navy font-bold px-8 py-3 rounded-full hover:bg-navy hover:text-white transition-colors"
            >
              施工実績をもっと見る
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold font-medium mb-2">Works</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-navy"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              施工事例
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {works.map((w, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={w.img}
                    alt={`施工事例 ${w.area}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 bg-white">
                  <p className="font-bold text-navy">{w.area}</p>
                  <p className="text-sm text-gray-600 mt-1">{w.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesGrid />

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold font-medium mb-2">Flow</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-navy"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              ご依頼の流れ
            </h2>
          </div>
          <FlowSteps />
          <div className="text-center mt-10">
            <Link
              href="/flow"
              className="inline-block border-2 border-navy text-navy font-bold px-8 py-3 rounded-full hover:bg-navy hover:text-white transition-colors"
            >
              料金表を見る
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold font-medium mb-2">FAQ</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-navy"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              よくある質問
            </h2>
          </div>
          <FaqPreview />
          <div className="text-center mt-10">
            <Link
              href="/faq"
              className="inline-block border-2 border-navy text-navy font-bold px-8 py-3 rounded-full hover:bg-navy hover:text-white transition-colors"
            >
              すべての質問を見る
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold font-medium mb-2">Blog</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-navy"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              ブログ
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <div className="bg-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs bg-navy text-white px-2 py-1 rounded">
                        {post.category}
                      </span>
                      <time className="text-xs text-gray-400">{post.date}</time>
                    </div>
                    <h3 className="font-bold text-navy group-hover:text-gold transition-colors leading-snug">
                      {post.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-block border-2 border-navy text-navy font-bold px-8 py-3 rounded-full hover:bg-navy hover:text-white transition-colors"
            >
              ブログ一覧へ
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gold font-medium mb-2">Contact</p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            まずはお気軽にご相談ください
          </h2>
          <p className="text-gray-300 mb-10 text-lg">
            現地調査・お見積りは無料です。<br />
            宮城県全域対応しております。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:022-355-7620"
              className="flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-white font-bold px-8 py-4 rounded-full text-lg transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              022-355-7620
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-navy font-bold px-8 py-4 rounded-full text-lg transition-colors"
            >
              メールで問い合わせる
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
