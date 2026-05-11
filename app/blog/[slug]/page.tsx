import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPostBySlug(slug);
    return {
      title: post.title,
      description: post.excerpt,
    };
  } catch {
    return { title: "記事が見つかりません" };
  }
}

const CTABox = () => (
  <div className="bg-navy text-white rounded-2xl p-6">
    <p className="text-gold text-xs font-bold tracking-wider mb-2">無料相談受付中</p>
    <h3
      className="text-lg font-bold mb-3 leading-snug"
      style={{ fontFamily: "var(--font-noto-serif)" }}
    >
      宮城県のガラスフィルム施工は<br />合同会社focusへ
    </h3>
    <ul className="text-sm text-gray-300 space-y-1 mb-5">
      <li>✓ 現地調査・お見積り無料</li>
      <li>✓ 宮城県全域対応</li>
      <li>✓ 施工後の保証あり</li>
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
);

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  const readingTime = Math.ceil(post.content.replace(/<[^>]+>/g, "").length / 500);
  const h2Headings = post.headings.filter((h) => h.level === 2);

  return (
    <div className="bg-cream min-h-screen">
      {/* パンくず */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
            <Link href="/" className="hover:text-gold transition-colors">ホーム</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gold transition-colors">ブログ</Link>
            <span>/</span>
            <span className="text-gray-700 line-clamp-1">{post.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* メインコンテンツ */}
          <main className="flex-1 min-w-0">

            {/* 記事ヘッダー（ボックス） */}
            <div className="bg-white rounded-2xl p-6 md:p-10 mb-4 shadow-sm">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs bg-navy text-white px-3 py-1 rounded-full font-bold">
                  {post.category}
                </span>
                <time className="text-sm text-gray-400">{post.date}</time>
                <span className="text-sm text-gray-400">読了目安 {readingTime}分</span>
              </div>
              <h1
                className="text-2xl md:text-3xl font-bold text-navy leading-tight"
                style={{ fontFamily: "var(--font-noto-serif)" }}
              >
                {post.title}
              </h1>
            </div>

            {/* 記事説明（ボックス外・プレーンテキスト） */}
            <p className="text-gray-700 leading-relaxed mb-6 px-1">
              {post.excerpt}
            </p>

            {/* 目次 */}
            {h2Headings.length > 0 && (
              <div className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-sm border-l-4 border-gold">
                <h2
                  className="font-bold text-navy text-lg mb-4 flex items-center gap-2"
                  style={{ fontFamily: "var(--font-noto-serif)" }}
                >
                  <span className="text-gold">≡</span> 目次
                </h2>
                <ol className="space-y-2">
                  {h2Headings.map((h, i) => (
                    <li key={h.id} className="flex items-start gap-3">
                      <span className="text-gold font-bold text-sm mt-0.5 shrink-0 w-5 text-right">
                        {i + 1}.
                      </span>
                      <a
                        href={`#${h.id}`}
                        className="text-navy hover:text-gold transition-colors text-sm leading-snug hover:underline"
                      >
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* 記事本文（ボックスなし） */}
            <article
              className="article-content px-1 md:px-0 mb-10"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* 末尾CTA */}
            <div className="bg-gradient-to-br from-navy to-navy-light text-white rounded-2xl p-6 md:p-10 text-center mb-8">
              <p className="text-gold font-bold tracking-wider text-sm mb-2">無料相談・お見積り受付中</p>
              <h3
                className="text-2xl md:text-3xl font-bold mb-6 leading-snug"
                style={{ fontFamily: "var(--font-noto-serif)" }}
              >
                まずはお気軽に<br />ご相談ください
              </h3>
              <ul className="text-sm text-left inline-block mb-8 space-y-2">
                {["現地調査・お見積り無料", "宮城県全域対応", "施工保証あり"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="text-gold font-bold">✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="bg-gold hover:bg-gold-light text-white font-bold px-8 py-4 rounded-full text-lg transition-colors shadow-lg"
                >
                  無料見積りはこちら
                </Link>
                <a
                  href="tel:022-355-7620"
                  className="border-2 border-white text-white hover:bg-white hover:text-navy font-bold px-8 py-4 rounded-full text-lg transition-colors"
                >
                  022-355-7620
                </a>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-navy hover:text-gold transition-colors font-medium"
              >
                ← ブログ一覧に戻る
              </Link>
            </div>
          </main>

          {/* サイドバー（PC） */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-24 space-y-6">
              <CTABox />

              {/* 目次（サイドバー） */}
              {h2Headings.length > 0 && (
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-navy mb-4 text-sm border-b border-gray-100 pb-3 flex items-center gap-2">
                    <span className="text-gold">≡</span> 目次
                  </h3>
                  <ol className="space-y-2">
                    {h2Headings.map((h, i) => (
                      <li key={h.id} className="flex items-start gap-2">
                        <span className="text-gold font-bold text-xs mt-0.5 shrink-0">{i + 1}.</span>
                        <a
                          href={`#${h.id}`}
                          className="text-gray-600 hover:text-gold transition-colors text-xs leading-snug hover:underline"
                        >
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-navy mb-4 text-sm border-b border-gray-100 pb-3">
                  施工サービス一覧
                </h3>
                <ul className="space-y-2 text-sm">
                  {[
                    "遮熱フィルム",
                    "UVカットフィルム",
                    "プライバシーフィルム",
                    "防犯フィルム",
                    "断熱フィルム",
                    "飛散防止フィルム",
                  ].map((s) => (
                    <li key={s}>
                      <Link
                        href="/flow"
                        className="flex items-center gap-2 text-gray-600 hover:text-gold transition-colors"
                      >
                        <span className="text-gold font-bold">›</span>
                        {s}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

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
