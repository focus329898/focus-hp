import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/posts";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "ブログ",
  description:
    "ガラスフィルムに関するお役立ち情報、施工事例、製品紹介などを発信しています。",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHeader title="ブログ" breadcrumbs={[{ label: "ブログ" }]} />

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="relative h-48 bg-gray-200">
                    <Image
                      src="/images/placeholder.jpg"
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs bg-navy text-white px-3 py-1 rounded-full font-medium">
                        {post.category}
                      </span>
                      <time className="text-xs text-gray-400">{post.date}</time>
                    </div>
                    <h2 className="font-bold text-navy group-hover:text-gold transition-colors leading-snug text-lg mb-3">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
