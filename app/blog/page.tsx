import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "ブログ",
  description:
    "ガラスフィルムに関するお役立ち情報、施工事例、地域別施工ガイドなどを発信しています。",
};

export default function BlogPage() {
  const posts = getAllPosts();

  const categories = Array.from(new Set(posts.map((p) => p.category)));

  return (
    <div className="bg-cream min-h-screen">
      {/* パンくず */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gold transition-colors">ホーム</Link>
            <span>/</span>
            <span className="text-gray-700">ブログ</span>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* メイン */}
          <main className="flex-1 min-w-0">
            <div className="mb-8">
              <p className="text-gold font-bold tracking-wider text-sm mb-1">Blog</p>
              <h1
                className="text-3xl font-bold text-navy"
                style={{ fontFamily: "var(--font-noto-serif)" }}
              >
                ブログ
              </h1>
              <p className="text-gray-500 mt-2 text-sm">全{posts.length}記事</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <article className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs bg-navy text-white px-3 py-1 rounded-full font-bold">
                        {post.category}
                      </span>
                      <time className="text-xs text-gray-400">{post.date}</time>
                    </div>
                    <h2
                      className="font-bold text-navy group-hover:text-gold transition-colors leading-snug text-lg mb-3 flex-1"
                      style={{ fontFamily: "var(--font-noto-serif)" }}
                    >
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="text-gold text-sm font-bold group-hover:underline">
                      続きを読む →
                    </span>
                  </article>
                </Link>
              ))}
            </div>
          </main>

          {/* サイドバー */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-24 space-y-6">
              {/* CTA */}
              <div className="bg-navy text-white rounded-2xl p-6">
                <p className="text-gold text-xs font-bold tracking-wider mb-2">無料相談受付中</p>
                <h3
                  className="text-lg font-bold mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-noto-serif)" }}
                >
                  ガラスフィルムの施工は<br />合同会社focusへ
                </h3>
                <ul className="text-sm text-gray-300 space-y-1 mb-5">
                  <li>✓ 現地調査・お見積り無料</li>
                  <li>✓ 宮城県全域対応</li>
                  <li>✓ 施工保証あり</li>
                </ul>
                <Link
                  href="/contact"
                  className="block text-center bg-gold hover:bg-gold-light text-white font-bold px-6 py-3 rounded-full transition-colors text-sm"
                >
                  無料見積りを依頼する
                </Link>
                <a
                  href="tel:022-355-7620"
                  className="block text-center mt-3 text-gray-300 hover:text-white text-sm transition-colors"
                >
                  📞 022-355-7620
                </a>
              </div>

              {/* カテゴリ */}
              {categories.length > 0 && (
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-navy mb-4 text-sm border-b border-gray-100 pb-3">
                    カテゴリ
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {categories.map((cat) => (
                      <li key={cat} className="flex items-center justify-between">
                        <span className="text-gray-600 flex items-center gap-2">
                          <span className="text-gold font-bold">›</span>
                          {cat}
                        </span>
                        <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                          {posts.filter((p) => p.category === cat).length}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 対応エリア */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-navy mb-3 text-sm border-b border-gray-100 pb-3">
                  対応エリア
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  仙台市全区・多賀城市・塩竈市・名取市・富谷市・岩沼市・利府町など宮城県全域対応。
                </p>
                <Link href="/area" className="text-gold text-sm hover:underline font-medium">
                  対応エリアを確認する →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
