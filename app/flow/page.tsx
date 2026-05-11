import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import FlowSteps from "@/components/FlowSteps";

export const metadata: Metadata = {
  title: "ご依頼の流れ・料金",
  description:
    "ガラスフィルム施工のご依頼の流れと料金表をご紹介します。現地調査・見積もりは無料です。",
};

const priceTable = [
  { type: "UVカット・飛散防止フィルム", price: "10,000〜", unit: "円/箇所" },
  { type: "強飛散防止フィルム", price: "13,000〜", unit: "円/箇所" },
  { type: "遮熱フィルム", price: "11,000〜", unit: "円/箇所" },
  { type: "断熱フィルム", price: "13,000〜", unit: "円/箇所" },
  { type: "日照調整フィルム", price: "10,000〜", unit: "円/箇所" },
  { type: "プライバシーフィルム（マジックミラー）", price: "12,000〜", unit: "円/箇所" },
  { type: "プライバシーフィルム（乳白）", price: "10,000〜", unit: "円/箇所" },
  { type: "グラデーションフィルム", price: "15,000〜", unit: "円/箇所" },
  { type: "デザインフィルム", price: "15,000〜", unit: "円/箇所" },
  { type: "防虫フィルム", price: "11,000〜", unit: "円/箇所" },
  { type: "抗菌フィルム", price: "12,000〜", unit: "円/箇所" },
  { type: "防犯フィルム（100μm）", price: "18,000〜", unit: "円/箇所" },
  { type: "防犯フィルム（350μm）", price: "28,000〜", unit: "円/箇所" },
  { type: "シートサイン・ウィンドウサイン", price: "別途お見積り", unit: "" },
];

export default function FlowPage() {
  return (
    <>
      <PageHeader
        title="ご依頼の流れ・料金"
        breadcrumbs={[{ label: "ご依頼の流れ・料金" }]}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold font-medium mb-2">Flow</p>
            <h2
              className="text-3xl font-bold text-navy"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              ご依頼の流れ
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                num: 1,
                title: "お問い合わせ",
                desc: "お電話またはメールフォームからご連絡ください。お気軽にどうぞ。施工箇所や気になっていることなど、どんな些細なことでもお聞きします。",
              },
              {
                num: 2,
                title: "現地調査（無料）",
                desc: "担当者がお伺いし、窓の状況・サイズを確認します。施工箇所の採寸を行い、最適なフィルムをご提案します。もちろん無料です。",
              },
              {
                num: 3,
                title: "お見積り（無料）",
                desc: "現地調査の結果をもとに詳細なお見積りをご提示します。複数のフィルムをご提案することもありますので、比較してご検討いただけます。",
              },
              {
                num: 4,
                title: "ご発注",
                desc: "お見積り内容にご同意いただけましたら、正式にご発注いただきます。フィルムの手配を進めます。",
              },
              {
                num: 5,
                title: "施工日の確定",
                desc: "お客様のご都合に合わせて施工日をご調整します。お仕事のご都合や生活スタイルに合わせてご相談ください。",
              },
              {
                num: 6,
                title: "施工",
                desc: "プロの技術者が丁寧・迅速に施工いたします。一般的なご家庭は半日〜1日で完了します。施工後のごみの片付けもしっかり行います。",
              },
              {
                num: 7,
                title: "アフターフォロー",
                desc: "施工後にフィルムの剥がれや気泡が生じた場合は無償で対応いたします。長くご愛用いただけるよう、施工後のサポートも充実しています。",
              },
            ].map((step) => (
              <div key={step.num} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 bg-navy text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {step.num}
                </div>
                <div className="flex-1 bg-cream rounded-2xl p-6">
                  <p className="font-bold text-navy text-xl mb-2">{step.title}</p>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold font-medium mb-2">Price</p>
            <h2
              className="text-3xl font-bold text-navy"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              料金表
            </h2>
            <p className="mt-4 text-gray-600">
              ※ 表示価格は施工費込みの目安価格（税別）です。最低施工費10,000円。<br />
              窓のサイズ・枚数・状態によって変動します。
            </p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-navy text-white grid grid-cols-3 px-6 py-4 font-bold">
              <span className="col-span-2">フィルムの種類</span>
              <span className="text-right">価格（目安）</span>
            </div>
            {priceTable.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 px-6 py-4 border-b border-gray-100 ${
                  i % 2 === 0 ? "bg-white" : "bg-cream"
                }`}
              >
                <span className="col-span-2 font-medium text-navy">{row.type}</span>
                <span className="text-right text-gold font-bold">
                  {row.price}
                  <span className="text-gray-500 text-sm font-normal">{row.unit}</span>
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gold/10 border border-gold rounded-2xl p-6 text-center">
            <p className="text-xl font-bold text-navy mb-2">
              現地調査・お見積りは完全無料！
            </p>
            <p className="text-gray-600">
              まずはお気軽にお問い合わせください。
            </p>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-light text-white font-bold px-10 py-4 rounded-full text-lg transition-colors"
            >
              無料見積りを依頼する
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
