import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import PageHeader from "@/components/PageHeader";

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

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <>
      <PageHeader
        title={post.title}
        breadcrumbs={[
          { label: "ブログ", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm bg-navy text-white px-3 py-1 rounded-full font-medium">
              {post.category}
            </span>
            <time className="text-sm text-gray-400">{post.date}</time>
          </div>

          <div
            className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-navy prose-a:text-gold prose-strong:text-navy"
            style={{ fontFamily: "var(--font-noto-sans)" }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 bg-navy text-white rounded-2xl p-8 text-center">
            <h3
              className="text-2xl font-bold mb-3"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              ガラスフィルムのご相談はfocusへ
            </h3>
            <p className="text-gray-300 mb-6">
              現地調査・お見積りは無料です。お気軽にご相談ください。
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-light text-white font-bold px-8 py-4 rounded-full text-lg transition-colors"
            >
              無料見積りはこちら
            </Link>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="text-navy hover:text-gold transition-colors font-medium"
            >
              ← ブログ一覧に戻る
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
