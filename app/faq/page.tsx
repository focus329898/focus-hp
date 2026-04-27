import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "よくある質問",
  description:
    "ガラスフィルム施工に関するよくある質問をまとめました。費用・施工時間・保証など気になる疑問にお答えします。",
};

export default function FaqPage() {
  return (
    <>
      <PageHeader title="よくある質問" breadcrumbs={[{ label: "よくある質問" }]} />

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold font-medium mb-2">FAQ</p>
            <h2
              className="text-3xl font-bold text-navy"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              よくある質問
            </h2>
          </div>

          <FaqAccordion />

          <div className="mt-16 bg-navy text-white rounded-2xl p-8 text-center">
            <h3
              className="text-2xl font-bold mb-3"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              その他ご不明な点はお気軽に
            </h3>
            <p className="text-gray-300 mb-6">
              上記以外のご質問も、お電話またはメールでお気軽にどうぞ。
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-light text-white font-bold px-8 py-4 rounded-full text-lg transition-colors"
            >
              お問い合わせはこちら
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
