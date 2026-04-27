import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "ガラスフィルム施工のお見積り・ご相談はこちらから。現地調査・お見積りは無料です。",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader title="お問い合わせ" breadcrumbs={[{ label: "お問い合わせ" }]} />

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold font-medium mb-2">Contact</p>
            <h2
              className="text-3xl font-bold text-navy"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              お問い合わせ
            </h2>
            <p className="mt-4 text-gray-600">
              現地調査・お見積りは完全無料です。<br />
              お気軽にご相談ください。
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="tel:022-355-7620"
              className="flex-1 flex items-center justify-center gap-3 bg-navy hover:bg-navy-light text-white font-bold px-6 py-5 rounded-2xl transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>
                <span className="block text-xs text-gray-300">電話でのお問い合わせ</span>
                <span className="text-xl">022-355-7620</span>
              </span>
            </a>
            <a
              href="mailto:focusogata@gmail.com"
              className="flex-1 flex items-center justify-center gap-3 bg-cream hover:bg-gray-100 text-navy font-bold px-6 py-5 rounded-2xl transition-colors border border-gray-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>
                <span className="block text-xs text-gray-400">メールでのお問い合わせ</span>
                <span>focusogata@gmail.com</span>
              </span>
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h3 className="font-bold text-navy text-xl mb-6">メールフォーム</h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
